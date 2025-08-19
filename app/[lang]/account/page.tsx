'use client';
import { dict, Lang } from '@/lib/dictionaries';
import Protected from '@/components/Protected';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { destinations, CityData } from '@/lib/destinations';
import {
  CheckCircleIcon, HomeIcon, ClipboardIcon, UserGroupIcon, BanknotesIcon,
  PhoneIcon, BuildingOfficeIcon, ShieldCheckIcon, UserCircleIcon, MapPinIcon,
  XMarkIcon, GlobeAltIcon, FlagIcon, BuildingLibraryIcon, CalendarDaysIcon
} from "@heroicons/react/24/solid";

// --- Types et Données Checklist (inchangé) ---
interface Task { text: string; done: boolean; icon: JSX.Element; }
interface TaskList { [key: string]: Task[] }
const UNIVERSAL_KEYS = { HOUSING: 'housing', ADMIN: 'administrative', DAILY: 'daily' };
const frTasks: TaskList = {
  logement: [{ text: "Trouver un logement", done: false, icon: <HomeIcon className="h-5 w-5" /> }, { text: "Signer le bail", done: false, icon: <ClipboardIcon className="h-5 w-5" /> }, { text: "Souscrire à l'assurance habitation", done: false, icon: <ShieldCheckIcon className="h-5 w-5" /> }],
  administratif: [{ text: "Ouvrir un compte bancaire", done: false, icon: <BanknotesIcon className="h-5 w-5" /> }, { text: "Demander la carte de transport", done: false, icon: <ClipboardIcon className="h-5 w-5" /> }, { text: "Vérifier l'assurance santé", done: false, icon: <ShieldCheckIcon className="h-5 w-5" /> }],
  quotidien: [{ text: "Acheter une carte SIM locale", done: false, icon: <PhoneIcon className="h-5 w-5" /> }, { text: "Repérer les supermarchés", done: false, icon: <BuildingOfficeIcon className="h-5 w-5" /> }, { text: "Rejoindre un groupe étudiant", done: false, icon: <UserGroupIcon className="h-5 w-5" /> }]
};
const enTasks: TaskList = {
  [UNIVERSAL_KEYS.HOUSING]: [{ text: "Find accommodation", done: false, icon: <HomeIcon className="h-5 w-5" /> }, { text: "Sign the lease", done: false, icon: <ClipboardIcon className="h-5 w-5" /> }, { text: "Get home insurance", done: false, icon: <ShieldCheckIcon className="h-5 w-5" /> }],
  [UNIVERSAL_KEYS.ADMIN]: [{ text: "Open a bank account", done: false, icon: <BanknotesIcon className="h-5 w-5" /> }, { text: "Apply for a transport card", done: false, icon: <ClipboardIcon className="h-5 w-5" /> }, { text: "Check health insurance", done: false, icon: <ShieldCheckIcon className="h-5 w-5" /> }],
  [UNIVERSAL_KEYS.DAILY]: [{ text: "Buy a local SIM card", done: false, icon: <PhoneIcon className="h-5 w-5" /> }, { text: "Locate supermarkets", done: false, icon: <BuildingOfficeIcon className="h-5 w-5" /> }, { text: "Join a student group", done: false, icon: <UserGroupIcon className="h-5 w-5" /> }]
};
const keyMap = {
  fr: { housing: 'logement', administrative: 'administratif', daily: 'quotidien' },
  en: { housing: 'housing', administrative: 'administrative', daily: 'daily' }
};
const categoryTitles = {
  fr: { logement: "Logement", administratif: "Administratif", quotidien: "Quotidien" },
  en: { housing: "Housing", administrative: "Administrative", daily: "Daily Life" }
};
// --- Fin des données Checklist ---

// --- Composant Principal du Compte ---
export default function Account({ params }: { params: { lang: Lang } }) {
  const t = dict[params.lang];
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [tasks, setTasks] = useState<TaskList | null>(null);
  const [destinationData, setDestinationData] = useState<CityData | null>(null);
  const [departureDate, setDepartureDate] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  // --- LOGIQUE DE DONNÉES ---
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const { data: { user: currentUser } } = await supabase.auth.getUser();

      if (currentUser) {
        setUser(currentUser);
        const { destination_city, checklist_state, departure_date } = currentUser.user_metadata;

        if (destination_city) {
          for (const continent of destinations) {
            for (const country of continent.countries ?? []) {
              const cityData = country.cities?.find(c => c.slug === destination_city);
              if (cityData) { setDestinationData(cityData); break; }
            }
          }
        }
        
        setDepartureDate(departure_date || '');

        const langTasks = params.lang === 'fr' ? frTasks : enTasks;
        const langKeyMap = keyMap[params.lang];
        const loadedTasks: any = {};
        for (const [universalKey, langKey] of Object.entries(langKeyMap)) {
            const defaultTaskList = langTasks[langKey];
            if (defaultTaskList) {
                loadedTasks[langKey] = defaultTaskList.map((task, index) => ({
                    ...task, done: checklist_state?.[universalKey]?.[index] ?? false
                }));
            }
        }
        setTasks(loadedTasks);
      }
      setLoading(false);
    };
    fetchUserData();
  }, [params.lang]);

  // Sauvegarde des changements de la checklist
  useEffect(() => {
    if (tasks && !loading) {
      const timer = setTimeout(() => {
        const universalTasksState: any = {};
        const langKeyMap = keyMap[params.lang];
        const reverseKeyMap = Object.entries(langKeyMap).reduce((acc, [uni, lang]) => ({...acc, [lang]: uni}), {});
        for (const [langKey, list] of Object.entries(tasks)) {
          const universalKey = reverseKeyMap[langKey];
          if(universalKey) { universalTasksState[universalKey] = list.map(task => task.done); }
        }
        supabase.auth.updateUser({ data: { checklist_state: universalTasksState } });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [tasks, loading, params.lang]);
  
  const handleCitySelect = async (city: CityData) => {
    setDestinationData(city);
    await supabase.auth.updateUser({ data: { destination_city: city.slug } });
    setIsModalOpen(false);
  };

  const handleDateChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setDepartureDate(newDate);
    await supabase.auth.updateUser({ data: { departure_date: newDate } });
  };
  
  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = `/${params.lang}/login`;
  };
  
  const toggleTask = (category: string, index: number) => {
    if (!tasks) return;
    setTasks(prev => ({ ...prev!, [category]: prev![category].map((task, i) => i === index ? { ...task, done: !task.done } : task) }));
  };

  // ✨ CORRIGÉ : La fonction utilise la bonne logique pour réinitialiser
  const resetTasks = async () => {
    // 1. Met à jour l'affichage en parcourant l'état actuel
    setTasks(prevTasks => {
      if (!prevTasks) return null;
      const resetState: TaskList = {};
      for (const [category, list] of Object.entries(prevTasks)) {
        resetState[category] = list.map(task => ({ ...task, done: false }));
      }
      return resetState;
    });

    // 2. Prépare et sauvegarde l'état "vide" sur Supabase
    const universalResetState: any = {
      [UNIVERSAL_KEYS.HOUSING]: [false, false, false],
      [UNIVERSAL_KEYS.ADMIN]: [false, false, false],
      [UNIVERSAL_KEYS.DAILY]: [false, false, false],
    };
    await supabase.auth.updateUser({ data: { checklist_state: universalResetState } });
  };

  // --- Calculs pour l'affichage ---
  const calculateDaysLeft = () => {
      if (!departureDate) return null;
      const today = new Date();
      const departure = new Date(departureDate);
      today.setHours(0, 0, 0, 0);
      const diffTime = departure.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
  };
  const daysLeft = calculateDaysLeft();

  const totalTasks = tasks ? Object.values(tasks).flat().length : 0;
  const completedTasks = tasks ? Object.values(tasks).flat().filter(t => t.done).length : 0;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const countries = destinations.find(c => c.slug === selectedContinent)?.countries || [];
  const cities = countries.find(c => c.slug === selectedCountry)?.cities || [];

  if (loading) {
    return <div className="text-center p-10">{params.lang === 'fr' ? 'Chargement de votre compte...' : 'Loading your account...'}</div>;
  }

  return (
    <Protected fallback={<div className="text-neutral-300">{t.account.needLogin}</div>}>
      <main className="container py-10">
        <h1 className="text-4xl font-bold mb-4">{params.lang === 'fr' ? `Bienvenue, ${user?.user_metadata?.full_name?.split(' ')[0]} !` : `Welcome, ${user?.user_metadata?.full_name?.split(' ')[0]}!`}</h1>
        <p className="text-neutral-400 mb-8">{params.lang === 'fr' ? "Voici le récapitulatif de votre projet d'expatriation." : "Here is the summary of your expatriation project."}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card p-4 flex items-center gap-4"><MapPinIcon className="h-8 w-8 text-green-500"/><div><p className="text-sm text-neutral-400">{params.lang === 'fr' ? 'Destination' : 'Destination'}</p><p className="font-semibold">{destinationData ? (params.lang === 'fr' ? destinationData.nameFr : destinationData.nameEn) : 'N/A'}</p></div></div>
            <div className="card p-4 flex items-center gap-4"><CheckCircleIcon className="h-8 w-8 text-green-500"/><div><p className="text-sm text-neutral-400">Checklist</p><p className="font-semibold">{Math.round(progress)}% {params.lang === 'fr' ? 'complétée' : 'completed'}</p></div></div>
            <div className="card p-4 flex items-center gap-4"><CalendarDaysIcon className="h-8 w-8 text-green-500"/><div><p className="text-sm text-neutral-400">{params.lang === 'fr' ? 'Grand départ' : 'Departure'}</p>
                {daysLeft !== null ? (<p className="font-semibold">{daysLeft > 0 ? `J-${daysLeft}` : daysLeft === 0 ? (params.lang === 'fr' ? "Aujourd'hui !" : "Today!") : (params.lang === 'fr' ? "Bon voyage !" : "Have a great trip!")}</p>) : <p className="font-semibold">N/A</p>}
            </div></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          <aside className="lg:col-span-1 space-y-8 mb-8 lg:mb-0">
            <div className="card p-6">
                <div className="flex items-center gap-3 mb-4"><MapPinIcon className="h-6 w-6 text-neutral-400"/><h2 className="text-xl font-semibold">{params.lang === 'fr' ? 'Mon Voyage' : 'My Trip'}</h2></div>
                <div className="space-y-4">
                  {destinationData ? (<p className="text-neutral-300 text-sm">{params.lang === 'fr' ? 'Votre destination actuelle est' : 'Your current destination is'} <span className="font-bold text-white">{params.lang === 'fr' ? destinationData.nameFr : destinationData.nameEn}</span>.</p>) : <p className="text-sm text-neutral-400">{params.lang === 'fr' ? 'Aucune destination sélectionnée.' : 'No destination selected.'}</p>}
                  <button onClick={() => setIsModalOpen(true)} className="btn w-full border border-neutral-700 hover:bg-neutral-800">{params.lang === 'fr' ? 'Changer de destination' : 'Change destination'}</button>
                  <div>
                      <label htmlFor="departure-date" className="text-sm font-medium text-neutral-400">{params.lang === 'fr' ? 'Date de départ' : 'Departure Date'}</label>
                      <input type="date" id="departure-date" value={departureDate} onChange={handleDateChange} className="input w-full mt-1"/>
                  </div>
                </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-4 mb-4"><UserCircleIcon className="h-8 w-8 text-neutral-400"/><h2 className="text-xl font-semibold">{params.lang === 'fr' ? 'Mon Profil' : 'My Profile'}</h2></div>
              <div className="text-sm space-y-2"><p><span className="font-semibold text-neutral-400">Email:</span> {user?.email}</p><p><span className="font-semibold text-neutral-400">{params.lang === 'fr' ? 'Membre depuis:' : 'Member since:'}</span> {new Date(user?.created_at).toLocaleDateString(params.lang === 'fr' ? 'fr-FR' : 'en-US')}</p></div>
              <button onClick={logout} className="btn bg-red-600 hover:bg-red-700 text-white w-full mt-6">{t.nav.logout}</button>
            </div>
          </aside>
          
          <div className="lg:col-span-2 card p-6 sm:p-8">
             {tasks ? (
              <>
                <h2 className="text-3xl font-bold mb-2 text-center">{params.lang === 'fr' ? "Ma Checklist ✈️" : "My Checklist ✈️"}</h2>
                <p className="text-neutral-400 mb-8 text-center">{params.lang === 'fr' ? "Toutes les étapes clés pour bien t’installer." : "All the key steps for a smooth move."}</p>
                <div className="flex justify-center gap-4 mb-10"><button onClick={resetTasks} className="btn border border-neutral-700 hover:bg-neutral-800 text-sm">{params.lang === 'fr' ? "Réinitialiser" : "Reset"}</button></div>
                {Object.entries(tasks).map(([category, list]) => (
                  <div key={category} className="mb-8">
                    <h3 className="text-2xl font-semibold mb-3 capitalize">{categoryTitles[params.lang][category] || category}</h3>
                    <ul className="space-y-3">
                      {list.map((task, i) => (
                        <li key={i} onClick={() => toggleTask(category, i)} className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition ${task.done ? "bg-green-800/50 text-neutral-400 line-through" : "bg-neutral-800 hover:bg-neutral-700"}`}><span className={task.done ? 'text-green-500' : 'text-neutral-500'}>{task.icon}</span><span className="flex-grow">{task.text}</span>{task.done && <CheckCircleIcon className="h-6 w-6 text-green-500 ml-auto" />}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            ) : <p className="text-center text-neutral-500">{params.lang === 'fr' ? 'Choisissez une destination pour voir votre checklist.' : 'Choose a destination to see your checklist.'}</p>}
          </div>
        </div>
      </main>

      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
        <div className={`relative bg-neutral-900 rounded-2xl shadow-xl w-full max-w-4xl max-h-[80vh] border border-neutral-800 flex flex-col transition-transform duration-300 ease-in-out ${isModalOpen ? 'scale-100' : 'scale-95'}`}>
          <div className="flex justify-between items-center p-4 border-b border-neutral-800"><h2 className="text-lg font-semibold" id="modal-title">{params.lang === 'fr' ? 'Choisissez votre destination' : 'Choose your destination'}</h2><button onClick={() => setIsModalOpen(false)} className="text-neutral-500 hover:text-white"><XMarkIcon className="h-6 w-6"/></button></div>
          <div className="flex-grow overflow-hidden grid grid-cols-3">
            <div className="overflow-y-auto border-r border-neutral-800">{destinations.map(continent => (<button key={continent.slug} onClick={() => { setSelectedContinent(continent.slug); setSelectedCountry(''); }} className={`w-full text-left p-3 text-sm flex items-center gap-2 ${selectedContinent === continent.slug ? 'bg-green-600/20 text-green-400' : 'hover:bg-neutral-800'}`}><GlobeAltIcon className="h-5 w-5"/> {params.lang === 'fr' ? continent.nameFr : continent.nameEn}</button>))}</div>
            <div className={`overflow-y-auto border-r border-neutral-800 ${!selectedContinent && 'opacity-50'}`}>{countries.map(country => (<button key={country.slug} onClick={() => setSelectedCountry(country.slug)} className={`w-full text-left p-3 text-sm flex items-center gap-2 ${selectedCountry === country.slug ? 'bg-green-600/20 text-green-400' : 'hover:bg-neutral-800'}`}><FlagIcon className="h-5 w-5"/> {params.lang === 'fr' ? country.nameFr : country.nameEn}</button>))}</div>
            <div className={`overflow-y-auto ${!selectedCountry && 'opacity-50'}`}>{cities.map(city => (<button key={city.slug} onClick={() => handleCitySelect(city)} className="w-full text-left p-3 text-sm flex items-center gap-2 hover:bg-neutral-800"><BuildingLibraryIcon className="h-5 w-5"/> {params.lang === 'fr' ? city.nameFr : city.nameEn}</button>))}</div>
          </div>
        </div>
      </div>
    </Protected>
  );
}