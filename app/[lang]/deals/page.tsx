import Link from "next/link";
import { Lang, dict } from "@/lib/dictionaries";

// ---- PARTENAIRES (BONS PLANS) ----
// Pour chaque partenaire : description FR & EN + lien affilié
const deals = [
  {
    category_fr: "Banques",
    category_en: "Banks",
    partners: [
      {
        name: "N26",
        icon: "💳",
        description_fr: "Ouvre un compte bancaire en ligne gratuitement en quelques minutes.",
        description_en: "Open a free online bank account in minutes.",
        link: "https://n26.com/fr?affiliate=toncode"
      },
      {
        name: "Revolut",
        icon: "💳",
        description_fr: "Carte internationale idéale pour les étudiants à l'étranger.",
        description_en: "International card, perfect for students abroad.",
        link: "https://revolut.com/referral/toncode"
      },
      {
        name: "Boursorama",
        icon: "💳",
        description_fr: "Banque française en ligne avec prime de bienvenue.",
        description_en: "French online bank with welcome bonus.",
        link: "https://bourso.com/parrainage/toncode"
      }
    ]
  },
  {
    category_fr: "Forfaits Mobiles",
    category_en: "Mobile Plans",
    partners: [
      {
        name: "Red by SFR",
        icon: "📱",
        description_fr: "Forfait mobile pas cher en France pour étudiants.",
        description_en: "Affordable mobile plan in France for students.",
        link: "https://red-by-sfr.fr/affiliation/toncode"
      },
      {
        name: "Airalo",
        icon: "🌍",
        description_fr: "eSIM internationale pour rester connecté partout.",
        description_en: "International eSIM to stay connected anywhere.",
        link: "https://airalo.com/affiliate/toncode"
      }
    ]
  },
  {
    category_fr: "Logements",
    category_en: "Housing",
    partners: [
      {
        name: "HousingAnywhere",
        icon: "🏠",
        description_fr: "Plateforme internationale de logement étudiant.",
        description_en: "International student housing platform.",
        link: "https://housinganywhere.com/affiliate/toncode"
      },
      {
        name: "SeLoger",
        icon: "🏠",
        description_fr: "Trouvez un appartement en France rapidement.",
        description_en: "Find an apartment in France easily.",
        link: "https://seloger.com/affiliation/toncode"
      },
      {
        name: "Spotahome",
        icon: "🏠",
        description_fr: "Appartements vérifiés pour étudiants en Europe.",
        description_en: "Verified apartments for students across Europe.",
        link: "https://spotahome.com/affiliate/toncode"
      }
    ]
  },
  {
    category_fr: "Assurances",
    category_en: "Insurance",
    partners: [
      {
        name: "Kinousassur",
        icon: "🛡️",
        description_fr: "Assurance santé & voyage étudiante à l'étranger dès 20€/mois.",
        description_en: "Student health & travel insurance abroad from €20/month.",
        link: "https://kinousassur.com/affiliate/toncode"
      }
    ]
  }
];

// ---- TÉMOIGNAGES ----
const testimonials = [
  {
    name: "Amine, 22 ans — Erasmus à Berlin",
    text_fr: "Grâce à N26, j’ai ouvert mon compte en 10 minutes avant de partir. Plus de galère avec les virements !",
    text_en: "Thanks to N26, I opened my account in 10 minutes before leaving. No more hassle with transfers!"
  },
  {
    name: "Laura, 20 ans — Échange à Montréal",
    text_fr: "Airalo m’a sauvé ! J’avais internet dès mon arrivée sans chercher de boutique de téléphonie.",
    text_en: "Airalo saved me! I had internet as soon as I landed without looking for a phone shop."
  },
  {
    name: "Yann, 23 ans — Stage à Lisbonne",
    text_fr: "J’ai trouvé mon logement via HousingAnywhere. Site super fiable, pas d’arnaques.",
    text_en: "I found my apartment through HousingAnywhere. Very reliable, no scams."
  },
  {
    name: "Sofia, 21 ans — Université de Tokyo",
    text_fr: "Kinousassur m’a rassurée : j’étais couverte dès mon arrivée au Japon.",
    text_en: "Kinousassur reassured me: I was covered from the moment I arrived in Japan."
  }
];

export default function BonsPlans({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;

  return (
    <div className="space-y-20 w-full mb-20">
      
      {/* HERO */}
      <section className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            {lang === "fr" ? "Bons plans étudiants à l’étranger" : "Best student deals abroad"}
          </h1>
          <p className="text-lg text-neutral-200 max-w-2xl mt-6 font-light">
            {lang === "fr"
              ? "Banques, forfaits mobiles, logement, assurance : économise avant même de partir."
              : "Banks, mobile plans, housing, insurance: save money before you even leave."}
          </p>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="container">
        {deals.map((dealCategory, i) => (
          <div key={i} className="mb-16">
            <h2 className="text-2xl font-bold mb-6">
              {lang === "fr" ? dealCategory.category_fr : dealCategory.category_en}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dealCategory.partners.map((partner, j) => (
                <div
                  key={j}
                  className="flex flex-col justify-between p-8 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg hover:scale-105 transition-transform"
                >
                  <div className="text-4xl mb-4">{partner.icon}</div>
                  <h3 className="text-xl font-semibold">{partner.name}</h3>
                  <p className="text-neutral-400 text-sm mt-2">
                    {lang === "fr" ? partner.description_fr : partner.description_en}
                  </p>
                  <Link
                    href={partner.link}
                    target="_blank"
                    className="mt-6 inline-block text-green-400 hover:text-green-300 font-medium"
                  >
                    {lang === "fr" ? "Découvrir l’offre →" : "See offer →"}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            {lang === "fr"
              ? "Ils ont économisé grâce à nos bons plans"
              : "They saved money with our deals"}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((tst, i) => (
            <div key={i} className="p-6 bg-neutral-900 border-l-4 border-green-500 rounded-lg shadow-md">
              <p className="italic text-neutral-200">
                “{lang === "fr" ? tst.text_fr : tst.text_en}”
              </p>
              <p className="mt-4 text-sm font-semibold text-neutral-400">{tst.name}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
