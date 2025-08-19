// lib/destinations.ts

export type Budget = {
  food_per_month_eur: number;
  housing_flatshare_eur: number;
  transport_pass_eur: number;
  beer_pub_eur: number;
  cinema_eur: number;
};

// J'ai ajouté de nouvelles sections pour enrichir le contenu de chaque ville.
export type CityDetails = {
  name: string;
  description2: string;
  neighborhoods: string[];
  housing_howto: string;

  tips: string[];
  emergency: {
    universal: string;
    police: string;
    ambulance: string;
    fire: string;
  };
  health: {
    hospitals: string[];
    note: string;
  };
  services: {
    banks: string[];
    phone_carriers: string[];
  };
  education: {
    universities: string[];
  };
  misc: {
    visa_note: string;
    fun_fact: string;
  };
};

export type CityContent = {
  fr: CityDetails;
  en: CityDetails;
};

export type CityData = {
  slug: string;
  nameEn: string;
  nameFr: string;
  budget: Budget;
  content: CityContent;
};

export type CountryData = {
  slug: string;
  nameEn: string;
  nameFr: string;
  cities?: CityData[];
};

export type DestinationData = {
  slug: string;
  nameEn: string;
  nameFr: string;
  countries?: CountryData[];
};

export const destinations: DestinationData[] = [
  {
    slug: "europe",
    nameEn: "Europe",
    nameFr: "Europe",
    countries: [
      {
        slug: "france",
        nameEn: "France",
        nameFr: "France",
        cities: [
          // 1. Paris
          {
            slug: "paris",
            nameEn: "Paris",
            nameFr: "Paris",
            budget: {
              food_per_month_eur: 350,
              housing_flatshare_eur: 750,
              transport_pass_eur: 84,
              beer_pub_eur: 8,
              cinema_eur: 13,
            },
            content: {
              fr: {
                name: "Paris",
                description2: "Surnommée la Ville Lumière, Paris est un centre mondial d’art, de mode, de gastronomie et de culture. Ses universités prestigieuses et son bouillonnement culturel en font une destination de rêve pour les étudiants.",
                neighborhoods: ["Le Marais", "Quartier Latin", "Montmartre", "Belleville", "13e arrondissement (quartier asiatique)"],
                housing_howto: "Le logement est compétitif. Commencez vos recherches tôt sur des sites comme Crous, Studapart, ou SeLoger. La colocation est une option populaire pour réduire les coûts.",
                tips: ["Le Pass Navigo est indispensable pour les transports.", "Profitez des musées gratuits pour les moins de 26 ans résidents de l'UE.", "Explorez les marchés alimentaires pour des produits frais et abordables."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Hôpital de la Pitié-Salpêtrière", "Hôpital Georges-Pompidou", "Hôpital Saint-Louis"],
                  note: "La Carte Vitale est nécessaire pour le remboursement des soins. Les étudiants étrangers doivent s'inscrire à la sécurité sociale étudiante.",
                },
                services: {
                  banks: ["BNP Paribas", "Société Générale", "Crédit Agricole", "Revolut", "N26"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de la Sorbonne", "Sciences Po", "PSL Research University", "HEC Paris", "Polytechnique"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "Il y a plus de 1800 boulangeries à Paris. Chaque année, un concours élit la meilleure baguette de la ville.",
                }
              },
              en: {
                name: "Paris",
                description2: "Nicknamed the City of Light, Paris is a global center for art, fashion, gastronomy, and culture. Its prestigious universities and vibrant cultural scene make it a dream destination for students.",
                neighborhoods: ["Le Marais", "Latin Quarter", "Montmartre", "Belleville", "13th arrondissement (Asian quarter)"],
                housing_howto: "Housing is competitive. Start your search early on sites like Crous, Studapart, or SeLoger. Flatsharing is a popular option to reduce costs.",
                tips: ["The Pass Navigo is essential for transport.", "Enjoy free museums for EU residents under 26.", "Explore food markets for fresh and affordable products."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Pitié-Salpêtrière Hospital", "Georges-Pompidou Hospital", "Saint-Louis Hospital"],
                  note: "The 'Carte Vitale' is necessary for healthcare reimbursement. International students must register for student social security.",
                },
                services: {
                  banks: ["BNP Paribas", "Société Générale", "Crédit Agricole", "Revolut", "N26"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Sorbonne University", "Sciences Po", "PSL Research University", "HEC Paris", "Polytechnique"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "There are over 1,800 bakeries in Paris. Every year, a competition crowns the city's best baguette.",
                }
              },
            },
          },
          // 2. Lyon
          {
            slug: "lyon",
            nameEn: "Lyon",
            nameFr: "Lyon",
            budget: {
              food_per_month_eur: 300,
              housing_flatshare_eur: 450,
              transport_pass_eur: 32.5,
              beer_pub_eur: 7,
              cinema_eur: 11,
            },
            content: {
              fr: {
                name: "Lyon",
                description2: "Capitale de la gastronomie, Lyon est une ville dynamique et étudiante, réputée pour sa qualité de vie. Entre ses quartiers historiques, ses rives aménagées et ses nombreux événements, la vie y est riche et animée.",
                neighborhoods: ["La Croix-Rousse", "Vieux Lyon", "Guillotière", "Confluence"],
                housing_howto: "Plusieurs options sont disponibles : résidences étudiantes (CROUS), appartements via des agences ou colocation. Des plateformes comme Lyon Campus ou Adele sont utiles.",
                tips: ["Le réseau de transport TCL est très efficace.", "Ne manquez pas la Fête des Lumières en décembre.", "Goûtez aux spécialités locales dans les 'bouchons' lyonnais."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Hospices Civils de Lyon (HCL)", "Hôpital de la Croix-Rousse", "Centre Léon Bérard"],
                  note: "Comme partout en France, l'affiliation à la sécurité sociale est obligatoire pour les étudiants.",
                },
                services: {
                  banks: ["LCL", "Caisse d'Épargne", "BNP Paribas", "Société Générale"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de Lyon (UCBL, Lyon 2, Lyon 3)", "INSA Lyon", "EMLyon Business School"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "Lyon est considérée comme le berceau du cinéma, grâce aux frères Lumière qui y ont projeté leur premier film en 1895.",
                }
              },
              en: {
                name: "Lyon",
                description2: "As the capital of gastronomy, Lyon is a dynamic student city known for its quality of life. With its historic districts, landscaped riverbanks, and numerous events, life here is rich and vibrant.",
                neighborhoods: ["La Croix-Rousse", "Old Lyon", "Guillotière", "Confluence"],
                housing_howto: "Several options are available: student residences (CROUS), apartments via agencies, or flatshares. Platforms like Lyon Campus or Adele are helpful.",
                tips: ["The TCL public transport network is very efficient.", "Don't miss the Festival of Lights in December.", "Taste local specialties in Lyon's 'bouchons'."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Hospices Civils de Lyon (HCL)", "Croix-Rousse Hospital", "Léon Bérard Center"],
                  note: "As everywhere in France, social security affiliation is mandatory for students.",
                },
                services: {
                  banks: ["LCL", "Caisse d'Épargne", "BNP Paribas", "Société Générale"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["University of Lyon (UCBL, Lyon 2, Lyon 3)", "INSA Lyon", "EMLyon Business School"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "Lyon is considered the birthplace of cinema, thanks to the Lumière brothers who screened their first film there in 1895.",
                }
              },
            },
          },
          // 3. Marseille
          {
            slug: "marseille",
            nameEn: "Marseille",
            nameFr: "Marseille",
            budget: { food_per_month_eur: 320, housing_flatshare_eur: 420, transport_pass_eur: 36.70, beer_pub_eur: 6, cinema_eur: 10 },
            content: {
              fr: {
                name: "Marseille",
                description2: "Plus ancienne ville de France, Marseille est une cité portuaire vibrante et multiculturelle. Son climat ensoleillé, ses calanques et son ambiance unique attirent de nombreux étudiants.",
                neighborhoods: ["Le Panier", "Cours Julien", "La Plaine", "Vieux-Port"],
                housing_howto: "Le marché est plus accessible que Paris. La colocation est très courante. Consultez LeBonCoin et les groupes Facebook dédiés.",
                tips: ["La carte RTM est votre alliée pour les transports.", "Explorez le Parc National des Calanques.", "Goûtez la fameuse bouillabaisse."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["AP-HM (Hôpital de la Timone, Hôpital Nord)", "Institut Paoli-Calmettes"],
                  note: "Pensez à déclarer un médecin traitant pour être mieux remboursé.",
                },
                services: {
                  banks: ["Crédit Mutuel", "La Banque Postale", "CIC", "BNP Paribas"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Aix-Marseille Université (AMU)", "KEDGE Business School", "École Centrale de Marseille"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "Le savon de Marseille, mondialement connu, doit suivre une recette stricte datant de 1688 pour obtenir son appellation.",
                }
              },
              en: {
                name: "Marseille",
                description2: "The oldest city in France, Marseille is a vibrant and multicultural port city. Its sunny climate, calanques, and unique atmosphere attract many students.",
                neighborhoods: ["Le Panier", "Cours Julien", "La Plaine", "Old Port"],
                housing_howto: "The market is more accessible than in Paris. Flatsharing is very common. Check LeBonCoin and dedicated Facebook groups.",
                tips: ["The RTM card is your best friend for transport.", "Explore the Calanques National Park.", "Taste the famous bouillabaisse."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["AP-HM (Timone Hospital, North Hospital)", "Paoli-Calmettes Institute"],
                  note: "Remember to declare a primary care physician ('médecin traitant') for better reimbursement.",
                },
                services: {
                  banks: ["Crédit Mutuel", "La Banque Postale", "CIC", "BNP Paribas"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Aix-Marseille University (AMU)", "KEDGE Business School", "École Centrale de Marseille"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "The world-famous Marseille soap must follow a strict recipe dating back to 1688 to earn its name.",
                }
              },
            },
          },
          // 4. Toulouse
          {
            slug: "toulouse",
            nameEn: "Toulouse",
            nameFr: "Toulouse",
            budget: { food_per_month_eur: 280, housing_flatshare_eur: 400, transport_pass_eur: 15, beer_pub_eur: 6.5, cinema_eur: 9 },
            content: {
              fr: {
                name: "Toulouse",
                description2: "Surnommée la 'Ville Rose' pour ses briques en terre cuite, Toulouse est un pôle majeur de l'industrie aérospatiale européenne et une ville étudiante très animée.",
                neighborhoods: ["Capitole", "Saint-Cyprien", "Carmes", "Saint-Aubin"],
                housing_howto: "La demande est forte à la rentrée. Les résidences étudiantes et la colocation sont les options privilégiées. Le CROUS de Toulouse est un bon point de départ.",
                tips: ["Le réseau Tisséo (métro, tram, bus) est très pratique.", "Profitez des berges de la Garonne pour vous détendre.", "La Cité de l'Espace est un incontournable."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["CHU de Toulouse (Hôpital Purpan, Hôpital Rangueil)", "Oncopole"],
                  note: "La ville dispose de nombreux centres de santé universitaires pour les étudiants.",
                },
                services: {
                  banks: ["Crédit Agricole", "BNP Paribas", "Société Générale", "LCL"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de Toulouse (Capitole, Jean Jaurès, Paul Sabatier)", "INSA Toulouse", "ISAE-SUPAERO"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "Toulouse est le plus grand centre aérospatial d'Europe, abritant le siège d'Airbus.",
                }
              },
              en: {
                name: "Toulouse",
                description2: "Nicknamed the 'Pink City' for its terracotta bricks, Toulouse is a major hub of the European aerospace industry and a very lively student city.",
                neighborhoods: ["Capitole", "Saint-Cyprien", "Carmes", "Saint-Aubin"],
                housing_howto: "Demand is high at the start of the academic year. Student residences and flatsharing are the preferred options. The CROUS of Toulouse is a good starting point.",
                tips: ["The Tisséo network (metro, tram, bus) is very convenient.", "Enjoy the banks of the Garonne to relax.", "The Cité de l'Espace (Space City) is a must-see."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Toulouse University Hospital (Purpan Hospital, Rangueil Hospital)", "Oncopole"],
                  note: "The city has many university health centers for students.",
                },
                services: {
                  banks: ["Crédit Agricole", "BNP Paribas", "Société Générale", "LCL"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["University of Toulouse (Capitole, Jean Jaurès, Paul Sabatier)", "INSA Toulouse", "ISAE-SUPAERO"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "Toulouse is the largest aerospace center in Europe, home to the headquarters of Airbus.",
                }
              },
            },
          },
          // 5. Bordeaux
          {
            slug: "bordeaux",
            nameEn: "Bordeaux",
            nameFr: "Bordeaux",
            budget: { food_per_month_eur: 300, housing_flatshare_eur: 480, transport_pass_eur: 20.40, beer_pub_eur: 7, cinema_eur: 10 },
            content: {
              fr: {
                name: "Bordeaux",
                description2: "Mondialement connue pour ses vignobles, Bordeaux est aussi une ville d'art et d'histoire avec une qualité de vie exceptionnelle. Son centre-ville, classé à l'UNESCO, est un joyau architectural.",
                neighborhoods: ["Chartrons", "Saint-Michel", "Victoire", "Bastide"],
                housing_howto: "Le campus universitaire est un peu excentré, mais bien desservi. Les quartiers comme Victoire sont populaires auprès des étudiants. Pensez aux résidences du CROUS.",
                tips: ["Le tramway est le meilleur moyen de se déplacer.", "Le Miroir d'eau est un lieu de rendez-vous emblématique.", "La ville est très cyclable, profitez-en !"],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["CHU de Bordeaux (Hôpital Pellegrin, Hôpital Saint-André)", "Institut Bergonié"],
                  note: "Le service de santé universitaire (ESE) offre des consultations médicales et psychologiques.",
                },
                services: {
                  banks: ["Crédit Agricole", "Caisse d'Épargne", "BNP Paribas", "LCL"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de Bordeaux", "Sciences Po Bordeaux", "KEDGE Business School"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "Bordeaux possède la plus longue rue commerçante piétonne d'Europe, la rue Sainte-Catherine, qui s'étend sur 1,2 km.",
                }
              },
              en: {
                name: "Bordeaux",
                description2: "World-renowned for its vineyards, Bordeaux is also a city of art and history with an exceptional quality of life. Its city center, a UNESCO World Heritage site, is an architectural gem.",
                neighborhoods: ["Chartrons", "Saint-Michel", "Victoire", "Bastide"],
                housing_howto: "The university campus is a bit out of the city center but well-connected. Neighborhoods like Victoire are popular with students. Consider CROUS residences.",
                tips: ["The tram is the best way to get around.", "The Miroir d'eau (Water Mirror) is an iconic meeting spot.", "The city is very bike-friendly, take advantage of it!"],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Bordeaux University Hospital (Pellegrin Hospital, Saint-André Hospital)", "Bergonié Institute"],
                  note: "The university health service (ESE) offers medical and psychological consultations.",
                },
                services: {
                  banks: ["Crédit Agricole", "Caisse d'Épargne", "BNP Paribas", "LCL"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["University of Bordeaux", "Sciences Po Bordeaux", "KEDGE Business School"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "Bordeaux has the longest pedestrian shopping street in Europe, Rue Sainte-Catherine, which stretches for 1.2 km.",
                }
              },
            },
          },
          // 6. Lille
          {
            slug: "lille",
            nameEn: "Lille",
            nameFr: "Lille",
            budget: { food_per_month_eur: 270, housing_flatshare_eur: 430, transport_pass_eur: 28, beer_pub_eur: 6, cinema_eur: 9 },
            content: {
              fr: {
                name: "Lille",
                description2: "Au carrefour de l'Europe, Lille est une ville chaleureuse et festive, connue pour sa magnifique architecture flamande et sa célèbre braderie. C'est un pôle étudiant majeur du nord de la France.",
                neighborhoods: ["Vieux-Lille", "Wazemmes", "Vauban-Esquermes", "Moulins"],
                housing_howto: "Le quartier Vauban est le quartier étudiant par excellence. Les résidences universitaires sont nombreuses. Le marché de la colocation est très actif.",
                tips: ["Le réseau Ilévia (métro, bus, tram) est dense.", "Profitez de la proximité avec la Belgique pour des escapades.", "Goûtez les spécialités locales : welsh, carbonnade, et bien sûr, les frites !"],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["CHRU de Lille (Hôpital Claude Huriez, Hôpital Jeanne de Flandre)", "Centre Oscar Lambret"],
                  note: "Les centres de santé universitaires sont accessibles sur les différents campus.",
                },
                services: {
                  banks: ["Crédit Mutuel Nord Europe", "Caisse d'Épargne", "BNP Paribas", "Société Générale"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de Lille", "EDHEC Business School", "IESEG School of Management", "École Centrale de Lille"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "La Braderie de Lille, qui a lieu le premier week-end de septembre, est le plus grand marché aux puces d'Europe et attire des millions de visiteurs.",
                }
              },
              en: {
                name: "Lille",
                description2: "At the crossroads of Europe, Lille is a warm and festive city, known for its magnificent Flemish architecture and its famous flea market. It is a major student hub in northern France.",
                neighborhoods: ["Old Lille", "Wazemmes", "Vauban-Esquermes", "Moulins"],
                housing_howto: "The Vauban district is the quintessential student neighborhood. University residences are numerous. The flatsharing market is very active.",
                tips: ["The Ilévia network (metro, bus, tram) is extensive.", "Take advantage of the proximity to Belgium for getaways.", "Taste the local specialties: welsh, carbonnade, and of course, fries!"],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Lille University Hospital (Claude Huriez Hospital, Jeanne de Flandre Hospital)", "Oscar Lambret Center"],
                  note: "University health centers are available on the various campuses.",
                },
                services: {
                  banks: ["Crédit Mutuel Nord Europe", "Caisse d'Épargne", "BNP Paribas", "Société Générale"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["University of Lille", "EDHEC Business School", "IESEG School of Management", "École Centrale de Lille"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "The Braderie de Lille, held on the first weekend of September, is the largest flea market in Europe and attracts millions of visitors.",
                }
              },
            },
          },
          // 7. Nice
          {
            slug: "nice",
            nameEn: "Nice",
            nameFr: "Nice",
            budget: { food_per_month_eur: 330, housing_flatshare_eur: 550, transport_pass_eur: 40, beer_pub_eur: 7.5, cinema_eur: 11 },
            content: {
              fr: {
                name: "Nice",
                description2: "Capitale de la Côte d'Azur, Nice offre un cadre de vie idyllique entre mer et montagnes. Son climat, sa Promenade des Anglais et sa richesse culturelle en font une destination prisée.",
                neighborhoods: ["Vieux-Nice", "Le Port", "Cimiez", "Libération"],
                housing_howto: "Le logement peut être cher, surtout près de la mer. La colocation est une bonne solution. Les recherches doivent être anticipées, car la ville est aussi très touristique.",
                tips: ["Le réseau Lignes d'Azur dessert bien la ville et ses environs.", "Profitez des plages publiques.", "Goûtez la socca, une spécialité locale à base de pois chiches."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["CHU de Nice (Hôpital Pasteur)", "Centre Antoine Lacassagne"],
                  note: "La souscription à une mutuelle étudiante est fortement recommandée pour compléter les remboursements de la Sécurité Sociale.",
                },
                services: {
                  banks: ["LCL", "Société Générale", "BNP Paribas", "Crédit Agricole"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université Côte d'Azur", "EDHEC Business School (campus de Nice)", "IPAG Business School"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "Le Carnaval de Nice, en février, est l'un des plus grands carnavals du monde, célèbre pour ses chars fleuris et ses batailles de fleurs.",
                }
              },
              en: {
                name: "Nice",
                description2: "Capital of the French Riviera, Nice offers an idyllic living environment between the sea and the mountains. Its climate, the Promenade des Anglais, and its cultural richness make it a popular destination.",
                neighborhoods: ["Old Nice", "The Port", "Cimiez", "Libération"],
                housing_howto: "Housing can be expensive, especially near the sea. Flatsharing is a good solution. Searches should be started early, as the city is also very touristy.",
                tips: ["The Lignes d'Azur network serves the city and its surroundings well.", "Enjoy the public beaches.", "Taste socca, a local specialty made from chickpeas."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Nice University Hospital (Pasteur Hospital)", "Antoine Lacassagne Center"],
                  note: "Subscribing to a student mutual insurance ('mutuelle') is highly recommended to supplement Social Security reimbursements.",
                },
                services: {
                  banks: ["LCL", "Société Générale", "BNP Paribas", "Crédit Agricole"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université Côte d'Azur", "EDHEC Business School (Nice campus)", "IPAG Business School"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "The Nice Carnival, in February, is one of the largest carnivals in the world, famous for its floral floats and flower battles.",
                }
              },
            },
          },
          // 8. Strasbourg
          {
            slug: "strasbourg",
            nameEn: "Strasbourg",
            nameFr: "Strasbourg",
            budget: { food_per_month_eur: 290, housing_flatshare_eur: 460, transport_pass_eur: 27.60, beer_pub_eur: 6, cinema_eur: 10 },
            content: {
              fr: {
                name: "Strasbourg",
                description2: "Capitale de l'Alsace et siège de plusieurs institutions européennes, Strasbourg est une ville au charme unique avec ses canaux et ses maisons à colombages. C'est une ville très internationale et cyclable.",
                neighborhoods: ["Grande Île", "Petite France", "Krutenau", "Neudorf"],
                housing_howto: "Le quartier de la Krutenau est très prisé des étudiants. Le CROUS de Strasbourg gère de nombreuses résidences. La colocation est également une option populaire.",
                tips: ["Le vélo est roi à Strasbourg, c'est le moyen de transport idéal.", "Le réseau de tram CTS est excellent.", "Ne manquez pas le marché de Noël, l'un des plus anciens d'Europe."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Hôpitaux Universitaires de Strasbourg (Hôpital Civil)", "Centre Paul Strauss"],
                  note: "Le Service de Santé Universitaire (SSU) est à la disposition des étudiants pour toute question de santé.",
                },
                services: {
                  banks: ["Crédit Mutuel", "Caisse d'Épargne", "BNP Paribas", "Société Générale"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de Strasbourg (Unistra)", "EM Strasbourg Business School", "INSA Strasbourg"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "La cathédrale de Strasbourg a été le plus haut édifice du monde de 1647 à 1874.",
                }
              },
              en: {
                name: "Strasbourg",
                description2: "Capital of Alsace and seat of several European institutions, Strasbourg is a city with a unique charm with its canals and half-timbered houses. It is a very international and bike-friendly city.",
                neighborhoods: ["Grande Île", "Petite France", "Krutenau", "Neudorf"],
                housing_howto: "The Krutenau district is very popular with students. The CROUS of Strasbourg manages many residences. Flatsharing is also a popular option.",
                tips: ["The bicycle is king in Strasbourg; it's the ideal mode of transport.", "The CTS tram network is excellent.", "Don't miss the Christmas market, one of the oldest in Europe."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Strasbourg University Hospitals (Civil Hospital)", "Paul Strauss Center"],
                  note: "The University Health Service (SSU) is available to students for any health-related questions.",
                },
                services: {
                  banks: ["Crédit Mutuel", "Caisse d'Épargne", "BNP Paribas", "Société Générale"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["University of Strasbourg (Unistra)", "EM Strasbourg Business School", "INSA Strasbourg"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "Strasbourg Cathedral was the world's tallest building from 1647 to 1874.",
                }
              },
            },
          },
          // 9. Nantes
          {
            slug: "nantes",
            nameEn: "Nantes",
            nameFr: "Nantes",
            budget: { food_per_month_eur: 280, housing_flatshare_eur: 420, transport_pass_eur: 24, beer_pub_eur: 6, cinema_eur: 9 },
            content: {
              fr: {
                name: "Nantes",
                description2: "Ancienne capitale de la Bretagne, Nantes est une ville créative et innovante, reconnue pour sa qualité de vie. Son dynamisme culturel et ses projets urbains audacieux en font une ville très attractive.",
                neighborhoods: ["Bouffay", "Île de Nantes", "Talensac", "Zola"],
                housing_howto: "La colocation est très développée. Le centre-ville et l'Île de Nantes sont des quartiers recherchés. Le CROUS propose des logements à des tarifs avantageux.",
                tips: ["Le réseau TAN est efficace et le 'Navibus' permet de traverser la Loire.", "Les Machines de l'île et le Voyage à Nantes sont des expériences uniques.", "La ville est très verte, avec de nombreux parcs et jardins."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["CHU de Nantes (Hôtel-Dieu, Hôpital Nord Laennec)", "Institut de Cancérologie de l'Ouest"],
                  note: "Le pôle santé étudiant de l'Université de Nantes est un interlocuteur privilégié.",
                },
                services: {
                  banks: ["Crédit Agricole", "Crédit Mutuel", "BNP Paribas", "LCL"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de Nantes", "Audencia Business School", "École Centrale de Nantes"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "Nantes est la ville de naissance de l'écrivain Jules Verne, et son univers fantastique inspire de nombreux projets artistiques dans la ville, comme les Machines de l'île.",
                }
              },
              en: {
                name: "Nantes",
                description2: "Former capital of Brittany, Nantes is a creative and innovative city, recognized for its quality of life. Its cultural dynamism and bold urban projects make it a very attractive city.",
                neighborhoods: ["Bouffay", "Île de Nantes", "Talensac", "Zola"],
                housing_howto: "Flatsharing is very common. The city center and the Île de Nantes are sought-after areas. The CROUS offers housing at affordable rates.",
                tips: ["The TAN network is efficient, and the 'Navibus' allows you to cross the Loire.", "Les Machines de l'île and the Voyage à Nantes are unique experiences.", "The city is very green, with many parks and gardens."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Nantes University Hospital (Hôtel-Dieu, Nord Laennec Hospital)", "Western Cancer Institute"],
                  note: "The student health center at the University of Nantes is a key contact.",
                },
                services: {
                  banks: ["Crédit Agricole", "Crédit Mutuel", "BNP Paribas", "LCL"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["University of Nantes", "Audencia Business School", "École Centrale de Nantes"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "Nantes is the birthplace of the writer Jules Verne, and his fantasy world inspires many artistic projects in the city, such as Les Machines de l'île.",
                }
              },
            },
          },
          // 10. Montpellier
          {
            slug: "montpellier",
            nameEn: "Montpellier",
            nameFr: "Montpellier",
            budget: { food_per_month_eur: 290, housing_flatshare_eur: 450, transport_pass_eur: 19.60, beer_pub_eur: 6.5, cinema_eur: 9.5 },
            content: {
              fr: {
                name: "Montpellier",
                description2: "Ville jeune et ensoleillée près de la Méditerranée, Montpellier est l'une des villes les plus dynamiques de France. Un tiers de sa population est étudiante, ce qui lui confère une atmosphère vibrante.",
                neighborhoods: ["Écusson (centre historique)", "Beaux-Arts", "Boutonnet", "Port Marianne"],
                housing_howto: "La demande est très forte. Commencez vos recherches en avance. Les résidences étudiantes (CROUS et privées) sont une bonne option pour éviter les arnaques.",
                tips: ["Le réseau de tramway TaM est moderne et dessert toute la ville.", "La Place de la Comédie est le cœur battant de la ville.", "Les plages sont accessibles en tramway + navette ou à vélo."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["CHU de Montpellier (Hôpital Lapeyronie, Hôpital Gui de Chauliac)", "Institut du Cancer de Montpellier"],
                  note: "Le SCMPPS (Service Commun de Médecine Préventive et de Promotion de la Santé) est dédié aux étudiants.",
                },
                services: {
                  banks: ["Caisse d'Épargne", "BNP Paribas", "Société Générale", "Crédit Agricole"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["Université de Montpellier", "Montpellier Business School", "Polytech Montpellier"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent obtenir un visa VLS-TS pour un séjour de plus de 3 mois.",
                  fun_fact: "La faculté de médecine de Montpellier est la plus ancienne faculté de médecine en activité au monde, fondée au 12ème siècle.",
                }
              },
              en: {
                name: "Montpellier",
                description2: "A young and sunny city near the Mediterranean, Montpellier is one of the most dynamic cities in France. One-third of its population is students, giving it a vibrant atmosphere.",
                neighborhoods: ["Écusson (historic center)", "Beaux-Arts", "Boutonnet", "Port Marianne"],
                housing_howto: "Demand is very high. Start your search early. Student residences (CROUS and private) are a good option to avoid scams.",
                tips: ["The TaM tram network is modern and serves the entire city.", "Place de la Comédie is the beating heart of the city.", "The beaches are accessible by tram + shuttle or by bike."],
                emergency: { universal: "112", police: "17", ambulance: "15", fire: "18" },
                health: {
                  hospitals: ["Montpellier University Hospital (Lapeyronie Hospital, Gui de Chauliac Hospital)", "Montpellier Cancer Institute"],
                  note: "The SCMPPS (University Preventive Medicine and Health Promotion Service) is dedicated to students.",
                },
                services: {
                  banks: ["Caisse d'Épargne", "BNP Paribas", "Société Générale", "Crédit Agricole"],
                  phone_carriers: ["Orange", "SFR", "Bouygues Telecom", "Free Mobile"],
                },
                education: {
                  universities: ["University of Montpellier", "Montpellier Business School", "Polytech Montpellier"],
                },
                misc: {
                  visa_note: "Non-EU students must obtain a VLS-TS visa for stays longer than 3 months.",
                  fun_fact: "The Faculty of Medicine of Montpellier is the oldest active medical faculty in the world, founded in the 12th century.",
                }
              },
            },
          },
        ],
      },
      {
        slug: "spain",
        nameEn: "Spain",
        nameFr: "Espagne",
        cities: [
          // 1. Madrid
          {
            slug: "madrid",
            nameEn: "Madrid",
            nameFr: "Madrid",
            budget: { food_per_month_eur: 280, housing_flatshare_eur: 450, transport_pass_eur: 20, beer_pub_eur: 3, cinema_eur: 9 },
            content: {
              fr: {
                name: "Madrid",
                description2: "Capitale de l'Espagne, Madrid est une ville qui ne dort jamais. Célèbre pour sa vie nocturne, ses musées d'art de renommée mondiale et ses parcs magnifiques, elle offre une expérience étudiante inoubliable.",
                neighborhoods: ["Malasaña", "Chueca", "La Latina", "Lavapiés"],
                housing_howto: "La colocation ('piso compartido') est la norme. Des sites comme Idealista, Fotocasa ou Badi sont très utilisés. Commencez à chercher avant l'été pour la rentrée.",
                tips: ["L'Abono Joven à 20€/mois pour les moins de 26 ans est une aubaine pour les transports.", "Profitez des tapas, une tradition culinaire abordable.", "Les musées du Prado et Reina Sofía ont des horaires de visite gratuite."],
                emergency: { universal: "112", police: "091", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Hospital Universitario La Paz", "Hospital General Universitario Gregorio Marañón", "Hospital Universitario 12 de Octubre"],
                  note: "Les étudiants de l'UE doivent avoir la Carte Européenne d'Assurance Maladie (CEAM). Les autres doivent souscrire une assurance privée.",
                },
                services: {
                  banks: ["Santander", "BBVA", "CaixaBank", "Sabadell"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["Universidad Complutense de Madrid", "Universidad Autónoma de Madrid", "Universidad Politécnica de Madrid", "IE University"],
                },
                misc: {
                  visa_note: "Les étudiants hors UE doivent demander un visa d'étudiant. Le NIE (Numéro d'Identification d'Étranger) est obligatoire pour tous les séjours longs.",
                  fun_fact: "Madrid est la capitale la plus haute d'Europe, située à une altitude de 667 mètres au-dessus du niveau de la mer.",
                }
              },
              en: {
                name: "Madrid",
                description2: "The capital of Spain, Madrid is a city that never sleeps. Famous for its nightlife, world-class art museums, and beautiful parks, it offers an unforgettable student experience.",
                neighborhoods: ["Malasaña", "Chueca", "La Latina", "Lavapiés"],
                housing_howto: "Shared flats ('piso compartido') are the norm. Websites like Idealista, Fotocasa, or Badi are widely used. Start looking before the summer for the academic year.",
                tips: ["The 'Abono Joven' at €20/month for under 26s is a bargain for transport.", "Enjoy tapas, an affordable culinary tradition.", "The Prado and Reina Sofía museums have free visiting hours."],
                emergency: { universal: "112", police: "091", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["La Paz University Hospital", "Gregorio Marañón General University Hospital", "12 de Octubre University Hospital"],
                  note: "EU students should have the European Health Insurance Card (EHIC). Others must take out private insurance.",
                },
                services: {
                  banks: ["Santander", "BBVA", "CaixaBank", "Sabadell"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["Complutense University of Madrid", "Autonomous University of Madrid", "Polytechnic University of Madrid", "IE University"],
                },
                misc: {
                  visa_note: "Non-EU students must apply for a student visa. The NIE (Foreigner Identification Number) is mandatory for all long stays.",
                  fun_fact: "Madrid is the highest capital city in Europe, located at an altitude of 667 meters above sea level.",
                }
              },
            },
          },
          // 2. Barcelone
          {
            slug: "barcelona",
            nameEn: "Barcelona",
            nameFr: "Barcelone",
            budget: { food_per_month_eur: 300, housing_flatshare_eur: 500, transport_pass_eur: 40, beer_pub_eur: 3.5, cinema_eur: 9 },
            content: {
              fr: {
                name: "Barcelone",
                description2: "Entre mer et montagne, Barcelone est célèbre pour son architecture unique signée Gaudí, ses plages et son ambiance cosmopolite. C'est une destination de choix pour les étudiants internationaux.",
                neighborhoods: ["Gràcia", "El Raval", "Gòtic", "Poblenou"],
                housing_howto: "La colocation est très répandue. Utilisez Idealista et Badi. Les prix varient fortement selon les quartiers. Soyez réactif, les bons appartements partent vite.",
                tips: ["La carte T-Jove offre des transports illimités pour 3 mois aux moins de 25 ans.", "Explorez les marchés comme La Boqueria.", "Profitez des plages de la Barceloneta."],
                emergency: { universal: "112", police: "092 (locale) / 091 (nationale)", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Hospital Clínic de Barcelona", "Hospital de la Santa Creu i Sant Pau", "Hospital Universitari Vall d'Hebron"],
                  note: "La CEAM est indispensable pour les étudiants européens. Une assurance privée est requise pour les autres.",
                },
                services: {
                  banks: ["CaixaBank", "Santander", "BBVA", "Sabadell"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "MásMóvil"],
                },
                education: {
                  universities: ["Universitat de Barcelona (UB)", "Universitat Autònoma de Barcelona (UAB)", "ESADE Business School", "IQS"],
                },
                misc: {
                  visa_note: "Le visa étudiant et le NIE sont obligatoires pour les étudiants non-européens.",
                  fun_fact: "Le quartier de l'Eixample a été conçu au 19ème siècle avec un plan en damier et des coins de rues coupés pour améliorer la visibilité et la circulation des tramways.",
                }
              },
              en: {
                name: "Barcelona",
                description2: "Between sea and mountains, Barcelona is famous for its unique architecture by Gaudí, its beaches, and its cosmopolitan atmosphere. It is a top destination for international students.",
                neighborhoods: ["Gràcia", "El Raval", "Gothic Quarter", "Poblenou"],
                housing_howto: "Flatsharing is very common. Use Idealista and Badi. Prices vary greatly by neighborhood. Be quick, good apartments go fast.",
                tips: ["The T-Jove card offers unlimited transport for 3 months for those under 25.", "Explore markets like La Boqueria.", "Enjoy the beaches of Barceloneta."],
                emergency: { universal: "112", police: "092 (local) / 091 (national)", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Hospital Clínic de Barcelona", "Hospital de la Santa Creu i Sant Pau", "Vall d'Hebron University Hospital"],
                  note: "The EHIC is essential for European students. Private insurance is required for others.",
                },
                services: {
                  banks: ["CaixaBank", "Santander", "BBVA", "Sabadell"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "MásMóvil"],
                },
                education: {
                  universities: ["University of Barcelona (UB)", "Autonomous University of Barcelona (UAB)", "ESADE Business School", "IQS"],
                },
                misc: {
                  visa_note: "A student visa and the NIE are mandatory for non-EU students.",
                  fun_fact: "The Eixample district was designed in the 19th century with a grid plan and chamfered street corners to improve visibility and tram circulation.",
                }
              },
            },
          },
          // 3. Valence
          {
            slug: "valencia",
            nameEn: "Valencia",
            nameFr: "Valence",
            budget: { food_per_month_eur: 250, housing_flatshare_eur: 300, transport_pass_eur: 25, beer_pub_eur: 2.5, cinema_eur: 8 },
            content: {
              fr: {
                name: "Valence",
                description2: "Troisième ville d'Espagne, Valence combine une vieille ville charmante, une architecture futuriste (la Cité des Arts et des Sciences) et de belles plages. Son coût de la vie est plus abordable que Madrid ou Barcelone.",
                neighborhoods: ["El Carmen", "Ruzafa", "Benimaclet", "Cabanyal"],
                housing_howto: "Benimaclet est le quartier étudiant par excellence. La colocation est facile à trouver et abordable. Idealista est la référence.",
                tips: ["La ville est très plate, parfaite pour le vélo.", "Ne manquez pas les Fallas en mars, une fête spectaculaire.", "Goûtez la paella valencienne authentique."],
                emergency: { universal: "112", police: "092", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Hospital Universitari i Politècnic La Fe", "Hospital Clínico Universitario de Valencia"],
                  note: "Les mêmes conditions que dans le reste de l'Espagne s'appliquent (CEAM pour l'UE, assurance privée pour les autres).",
                },
                services: {
                  banks: ["CaixaBank", "Bankia", "Santander", "Sabadell"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["Universitat de València (UV)", "Universitat Politècnica de València (UPV)"],
                },
                misc: {
                  visa_note: "Le visa étudiant et le NIE sont obligatoires pour les étudiants non-européens.",
                  fun_fact: "Le lit de l'ancienne rivière Turia, détournée après une inondation, a été transformé en un immense parc de 9 km qui traverse la ville.",
                }
              },
              en: {
                name: "Valencia",
                description2: "Spain's third-largest city, Valencia combines a charming old town, futuristic architecture (the City of Arts and Sciences), and beautiful beaches. Its cost of living is more affordable than Madrid or Barcelona.",
                neighborhoods: ["El Carmen", "Ruzafa", "Benimaclet", "Cabanyal"],
                housing_howto: "Benimaclet is the quintessential student neighborhood. Flatsharing is easy to find and affordable. Idealista is the go-to resource.",
                tips: ["The city is very flat, perfect for cycling.", "Don't miss Las Fallas in March, a spectacular festival.", "Taste authentic Valencian paella."],
                emergency: { universal: "112", police: "092", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["La Fe University and Polytechnic Hospital", "Clínico Universitario de Valencia Hospital"],
                  note: "The same conditions as in the rest of Spain apply (EHIC for EU, private insurance for others).",
                },
                services: {
                  banks: ["CaixaBank", "Bankia", "Santander", "Sabadell"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["University of Valencia (UV)", "Polytechnic University of Valencia (UPV)"],
                },
                misc: {
                  visa_note: "A student visa and the NIE are mandatory for non-EU students.",
                  fun_fact: "The riverbed of the old Turia river, diverted after a flood, was transformed into a huge 9 km park that crosses the city.",
                }
              },
            },
          },
          // 4. Séville
          {
            slug: "seville",
            nameEn: "Seville",
            nameFr: "Séville",
            budget: { food_per_month_eur: 240, housing_flatshare_eur: 320, transport_pass_eur: 35, beer_pub_eur: 2, cinema_eur: 7 },
            content: {
              fr: {
                name: "Séville",
                description2: "Capitale de l'Andalousie, Séville est le cœur de la culture du flamenco. C'est une ville magnifique avec un patrimoine historique riche et un climat des plus ensoleillés d'Europe.",
                neighborhoods: ["Santa Cruz", "Triana", "Macarena", "Alameda"],
                housing_howto: "Les quartiers de Triana et Macarena sont populaires et abordables pour les étudiants. La colocation est la meilleure option.",
                tips: ["Utilisez le service de vélos en libre-service Sevici.", "La Feria de Abril est un événement à ne pas manquer.", "Cherchez l'ombre en été, les températures peuvent être extrêmes."],
                emergency: { universal: "112", police: "092", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Hospital Universitario Virgen del Rocío", "Hospital Universitario Virgen Macarena"],
                  note: "Assurez-vous d'avoir une couverture santé adéquate (CEAM ou privée) avant votre arrivée.",
                },
                services: {
                  banks: ["CaixaBank", "Santander", "Unicaja Banco", "BBVA"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["Universidad de Sevilla", "Universidad Pablo de Olavide"],
                },
                misc: {
                  visa_note: "Le visa étudiant et le NIE sont obligatoires pour les étudiants non-européens.",
                  fun_fact: "Séville abrite la plus grande cathédrale gothique du monde, où repose Christophe Colomb.",
                }
              },
              en: {
                name: "Seville",
                description2: "The capital of Andalusia, Seville is the heart of flamenco culture. It is a beautiful city with a rich historical heritage and one of the sunniest climates in Europe.",
                neighborhoods: ["Santa Cruz", "Triana", "Macarena", "Alameda"],
                housing_howto: "The Triana and Macarena neighborhoods are popular and affordable for students. Flatsharing is the best option.",
                tips: ["Use the Sevici bike-sharing service.", "The Feria de Abril is an event not to be missed.", "Seek shade in the summer, as temperatures can be extreme."],
                emergency: { universal: "112", police: "092", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Virgen del Rocío University Hospital", "Virgen Macarena University Hospital"],
                  note: "Ensure you have adequate health coverage (EHIC or private) before your arrival.",
                },
                services: {
                  banks: ["CaixaBank", "Santander", "Unicaja Banco", "BBVA"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["University of Seville", "Pablo de Olavide University"],
                },
                misc: {
                  visa_note: "A student visa and the NIE are mandatory for non-EU students.",
                  fun_fact: "Seville is home to the largest Gothic cathedral in the world, where Christopher Columbus is buried.",
                }
              },
            },
          },
          // 5. Grenade
          {
            slug: "granada",
            nameEn: "Granada",
            nameFr: "Grenade",
            budget: { food_per_month_eur: 220, housing_flatshare_eur: 250, transport_pass_eur: 21, beer_pub_eur: 2.5, cinema_eur: 7 },
            content: {
              fr: {
                name: "Grenade",
                description2: "Située au pied des montagnes de la Sierra Nevada, Grenade est célèbre pour son majestueux palais de l'Alhambra. C'est une ville étudiante par excellence, connue pour sa culture des tapas gratuites.",
                neighborhoods: ["Albaicín", "Realejo", "Centro", "Zaidín"],
                housing_howto: "Le coût de la vie et du logement est très bas. Il est facile de trouver une chambre en colocation pour un prix très raisonnable.",
                tips: ["Pour chaque boisson commandée dans un bar, vous recevez une tapa gratuite. C'est un mode de vie !", "Réservez vos billets pour l'Alhambra des mois à l'avance.", "Profitez de la proximité des pistes de ski en hiver."],
                emergency: { universal: "112", police: "092", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Hospital Universitario Virgen de las Nieves", "Hospital Universitario Clínico San Cecilio"],
                  note: "Les services de santé sont de bonne qualité. N'oubliez pas votre CEAM ou assurance privée.",
                },
                services: {
                  banks: ["CaixaBank", "Caja Rural de Granada", "Santander", "BBVA"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["Universidad de Granada (UGR)"],
                },
                misc: {
                  visa_note: "Le visa étudiant et le NIE sont obligatoires pour les étudiants non-européens.",
                  fun_fact: "L'Université de Grenade est l'une des plus prestigieuses d'Espagne et accueille le plus grand nombre d'étudiants Erasmus.",
                }
              },
              en: {
                name: "Granada",
                description2: "Located at the foot of the Sierra Nevada mountains, Granada is famous for its majestic Alhambra palace. It is a quintessential student city, known for its free tapas culture.",
                neighborhoods: ["Albaicín", "Realejo", "Centro", "Zaidín"],
                housing_howto: "The cost of living and housing is very low. It is easy to find a room in a shared flat for a very reasonable price.",
                tips: ["For every drink you order in a bar, you get a free tapa. It's a way of life!", "Book your tickets for the Alhambra months in advance.", "Enjoy the proximity to the ski slopes in winter."],
                emergency: { universal: "112", police: "092", ambulance: "061", fire: "080" },
                health: {
                  hospitals: ["Virgen de las Nieves University Hospital", "San Cecilio Clinical University Hospital"],
                  note: "Health services are of good quality. Don't forget your EHIC or private insurance.",
                },
                services: {
                  banks: ["CaixaBank", "Caja Rural de Granada", "Santander", "BBVA"],
                  phone_carriers: ["Movistar", "Vodafone", "Orange", "Yoigo"],
                },
                education: {
                  universities: ["University of Granada (UGR)"],
                },
                misc: {
                  visa_note: "A student visa and the NIE are mandatory for non-EU students.",
                  fun_fact: "The University of Granada is one of the most prestigious in Spain and hosts the largest number of Erasmus students.",
                }
              },
            },
          },
        ],
      },
      {
        slug: "italy",
        nameEn: "Italy",
        nameFr: "Italie",
        cities: [
          // 1. Rome
          {
            slug: "rome",
            nameEn: "Rome",
            nameFr: "Rome",
            budget: { food_per_month_eur: 280, housing_flatshare_eur: 550, transport_pass_eur: 35, beer_pub_eur: 5, cinema_eur: 9 },
            content: {
              fr: {
                name: "Rome",
                description2: "La 'Ville Éternelle' est un musée à ciel ouvert. Étudier à Rome, c'est vivre au milieu de 3000 ans d'histoire, tout en profitant d'une métropole animée et d'une cuisine délicieuse.",
                neighborhoods: ["San Lorenzo", "Trastevere", "Monti", "Pigneto"],
                housing_howto: "San Lorenzo est le quartier étudiant. La colocation ('stanza in affitto') est la norme. Des sites comme Immobiliare.it, Subito.it ou les groupes Facebook sont essentiels.",
                tips: ["La carte Metrebus est utile pour les transports.", "Explorez les quartiers moins touristiques pour trouver des trattorias authentiques et abordables.", "Le café se boit 'al banco' (au comptoir)."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Policlinico Umberto I", "Ospedale San Camillo-Forlanini", "Policlinico Universitario Agostino Gemelli"],
                  note: "La Tessera Sanitaria est nécessaire pour les résidents. Les étudiants de l'UE utilisent leur CEAM.",
                },
                services: {
                  banks: ["Intesa Sanpaolo", "UniCredit", "BNL (groupe BNP Paribas)", "Poste Italiane"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre", "Iliad"],
                },
                education: {
                  universities: ["Sapienza Università di Roma", "Università degli Studi di Roma 'Tor Vergata'", "LUISS Guido Carli"],
                },
                misc: {
                  visa_note: "Un visa étudiant et un 'permesso di soggiorno' (permis de séjour) sont nécessaires pour les étudiants non-européens.",
                  fun_fact: "Rome compte plus de 900 églises et 280 fontaines. La fontaine de Trevi est la plus célèbre, où des milliers d'euros sont jetés chaque jour.",
                }
              },
              en: {
                name: "Rome",
                description2: "The 'Eternal City' is an open-air museum. Studying in Rome means living amidst 3000 years of history while enjoying a lively metropolis and delicious cuisine.",
                neighborhoods: ["San Lorenzo", "Trastevere", "Monti", "Pigneto"],
                housing_howto: "San Lorenzo is the student district. Renting a room ('stanza in affitto') is the norm. Websites like Immobiliare.it, Subito.it, or Facebook groups are essential.",
                tips: ["The Metrebus card is useful for transport.", "Explore less touristy neighborhoods to find authentic and affordable trattorias.", "Coffee is drunk 'al banco' (at the counter)."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Policlinico Umberto I", "San Camillo-Forlanini Hospital", "Agostino Gemelli University Policlinic"],
                  note: "The 'Tessera Sanitaria' is necessary for residents. EU students use their EHIC.",
                },
                services: {
                  banks: ["Intesa Sanpaolo", "UniCredit", "BNL (BNP Paribas group)", "Poste Italiane"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre", "Iliad"],
                },
                education: {
                  universities: ["Sapienza University of Rome", "University of Rome 'Tor Vergata'", "LUISS Guido Carli"],
                },
                misc: {
                  visa_note: "A student visa and a 'permesso di soggiorno' (residence permit) are required for non-EU students.",
                  fun_fact: "Rome has over 900 churches and 280 fountains. The Trevi Fountain is the most famous, where thousands of euros are thrown every day.",
                }
              },
            },
          },
          // 2. Milan
          {
            slug: "milan",
            nameEn: "Milan",
            nameFr: "Milan",
            budget: { food_per_month_eur: 300, housing_flatshare_eur: 600, transport_pass_eur: 22, beer_pub_eur: 6, cinema_eur: 10 },
            content: {
              fr: {
                name: "Milan",
                description2: "Capitale économique et de la mode en Italie, Milan est une ville dynamique, moderne et internationale. Elle abrite des universités de renommée mondiale, notamment dans le design, la mode et l'économie.",
                neighborhoods: ["Navigli", "Brera", "Città Studi", "Isola"],
                housing_howto: "Le logement est cher et compétitif. Città Studi est le principal quartier universitaire. Commencez vos recherches bien à l'avance.",
                tips: ["L'abonnement mensuel ATM pour les moins de 27 ans est très avantageux.", "Ne manquez pas l'aperitivo, une tradition milanaise.", "Profitez de la proximité des lacs (Côme, Majeur) pour des escapades."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Ospedale Maggiore Policlinico", "Ospedale Niguarda Ca' Granda", "Istituto Europeo di Oncologia"],
                  note: "Les étudiants de l'UE doivent avoir la CEAM. Les autres doivent souscrire une assurance privée.",
                },
                services: {
                  banks: ["UniCredit", "Intesa Sanpaolo", "Banca Popolare di Milano (BPM)"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre", "Iliad"],
                },
                education: {
                  universities: ["Politecnico di Milano", "Università Bocconi", "Università degli Studi di Milano (Statale)"],
                },
                misc: {
                  visa_note: "Un visa étudiant et un 'permesso di soggiorno' sont nécessaires pour les étudiants non-européens.",
                  fun_fact: "Milan abrite 'La Cène' de Léonard de Vinci, l'une des œuvres d'art les plus célèbres au monde, visible dans le réfectoire du couvent Santa Maria delle Grazie.",
                }
              },
              en: {
                name: "Milan",
                description2: "Italy's economic and fashion capital, Milan is a dynamic, modern, and international city. It is home to world-renowned universities, especially in design, fashion, and economics.",
                neighborhoods: ["Navigli", "Brera", "Città Studi", "Isola"],
                housing_howto: "Housing is expensive and competitive. Città Studi is the main university district. Start your search well in advance.",
                tips: ["The monthly ATM pass for under 27s is a great deal.", "Don't miss the aperitivo, a Milanese tradition.", "Take advantage of the proximity to the lakes (Como, Maggiore) for getaways."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Ospedale Maggiore Policlinico", "Niguarda Ca' Granda Hospital", "European Institute of Oncology"],
                  note: "EU students must have the EHIC. Others must take out private insurance.",
                },
                services: {
                  banks: ["UniCredit", "Intesa Sanpaolo", "Banca Popolare di Milano (BPM)"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre", "Iliad"],
                },
                education: {
                  universities: ["Polytechnic University of Milan", "Bocconi University", "University of Milan (Statale)"],
                },
                misc: {
                  visa_note: "A student visa and a 'permesso di soggiorno' are required for non-EU students.",
                  fun_fact: "Milan is home to Leonardo da Vinci's 'The Last Supper,' one of the most famous works of art in the world, visible in the refectory of the Santa Maria delle Grazie convent.",
                }
              },
            },
          },
          // 3. Florence
          {
            slug: "florence",
            nameEn: "Florence",
            nameFr: "Florence",
            budget: { food_per_month_eur: 270, housing_flatshare_eur: 450, transport_pass_eur: 35, beer_pub_eur: 5, cinema_eur: 8 },
            content: {
              fr: {
                name: "Florence",
                description2: "Berceau de la Renaissance, Florence est un trésor d'art et d'architecture. C'est une ville à taille humaine, parfaite pour être explorée à pied, avec une atmosphère étudiante internationale très présente.",
                neighborhoods: ["Oltrarno", "Santa Croce", "San Niccolò", "San Frediano"],
                housing_howto: "Le centre historique est magnifique mais cher. Cherchez dans les quartiers légèrement excentrés pour de meilleurs prix. La colocation est très courante.",
                tips: ["Marchez ! C'est la meilleure façon de découvrir les secrets de la ville.", "Visitez la Galerie des Offices et la Galerie de l'Académie (pour voir le David de Michel-Ange).", "Montez au sommet du Duomo pour une vue imprenable."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Azienda Ospedaliero-Universitaria Careggi", "Ospedale Santa Maria Nuova"],
                  note: "Les mêmes conditions que dans le reste de l'Italie s'appliquent (CEAM pour l'UE, assurance privée pour les autres).",
                },
                services: {
                  banks: ["Intesa Sanpaolo", "UniCredit", "Monte dei Paschi di Siena"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre"],
                },
                education: {
                  universities: ["Università degli Studi di Firenze (UNIFI)", "European University Institute", "Polimoda"],
                },
                misc: {
                  visa_note: "Un visa étudiant et un 'permesso di soggiorno' sont nécessaires pour les étudiants non-européens.",
                  fun_fact: "Le 'syndrome de Stendhal' a été nommé d'après l'écrivain français qui a ressenti des vertiges et des palpitations face à la profusion d'œuvres d'art lors de sa visite à Florence en 1817.",
                }
              },
              en: {
                name: "Florence",
                description2: "The birthplace of the Renaissance, Florence is a treasure trove of art and architecture. It is a walkable city, perfect for exploring on foot, with a strong international student atmosphere.",
                neighborhoods: ["Oltrarno", "Santa Croce", "San Niccolò", "San Frediano"],
                housing_howto: "The historic center is beautiful but expensive. Look in slightly outlying neighborhoods for better prices. Flatsharing is very common.",
                tips: ["Walk! It's the best way to discover the city's secrets.", "Visit the Uffizi Gallery and the Accademia Gallery (to see Michelangelo's David).", "Climb to the top of the Duomo for a breathtaking view."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Careggi University Hospital", "Santa Maria Nuova Hospital"],
                  note: "The same conditions as in the rest of Italy apply (EHIC for EU, private insurance for others).",
                },
                services: {
                  banks: ["Intesa Sanpaolo", "UniCredit", "Monte dei Paschi di Siena"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre"],
                },
                education: {
                  universities: ["University of Florence (UNIFI)", "European University Institute", "Polimoda"],
                },
                misc: {
                  visa_note: "A student visa and a 'permesso di soggiorno' are required for non-EU students.",
                  fun_fact: "The 'Stendhal syndrome' was named after the French writer who experienced dizziness and palpitations when faced with the abundance of artworks during his visit to Florence in 1817.",
                }
              },
            },
          },
          // 4. Bologne
          {
            slug: "bologna",
            nameEn: "Bologna",
            nameFr: "Bologne",
            budget: { food_per_month_eur: 260, housing_flatshare_eur: 400, transport_pass_eur: 27, beer_pub_eur: 5, cinema_eur: 8 },
            content: {
              fr: {
                name: "Bologne",
                description2: "Surnommée 'la Dotta, la Grassa, la Rossa' (la Savante, la Grasse, la Rouge), Bologne abrite la plus ancienne université du monde occidental. C'est une ville étudiante animée, réputée pour sa gastronomie et ses arcades.",
                neighborhoods: ["Centro Storico", "Bolognina", "Porto-Saragozza"],
                housing_howto: "La demande de logements étudiants est très élevée. Il est crucial de commencer à chercher des mois à l'avance. Les appartements en colocation sont l'option principale.",
                tips: ["Explorez la ville à l'abri sous ses 40 km d'arcades.", "Montez à la Tour Asinelli pour une vue panoramique.", "Dégustez les spécialités locales : tagliatelles al ragù, mortadelle, lasagnes."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Policlinico Sant'Orsola-Malpighi", "Ospedale Maggiore"],
                  note: "Les mêmes conditions que dans le reste de l'Italie s'appliquent (CEAM pour l'UE, assurance privée pour les autres).",
                },
                services: {
                  banks: ["Intesa Sanpaolo", "UniCredit", "BPER Banca"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre"],
                },
                education: {
                  universities: ["Università di Bologna (UNIBO)"],
                },
                misc: {
                  visa_note: "Un visa étudiant et un 'permesso di soggiorno' sont nécessaires pour les étudiants non-européens.",
                  fun_fact: "L'Université de Bologne, fondée en 1088, est la plus ancienne université du monde en fonctionnement continu.",
                }
              },
              en: {
                name: "Bologna",
                description2: "Nicknamed 'la Dotta, la Grassa, la Rossa' (the Learned, the Fat, the Red), Bologna is home to the oldest university in the Western world. It is a lively student city, renowned for its gastronomy and arcades.",
                neighborhoods: ["Centro Storico", "Bolognina", "Porto-Saragozza"],
                housing_howto: "The demand for student housing is very high. It is crucial to start looking months in advance. Shared apartments are the main option.",
                tips: ["Explore the city sheltered under its 40 km of arcades.", "Climb the Asinelli Tower for a panoramic view.", "Taste the local specialties: tagliatelle al ragù, mortadella, lasagna."],
                emergency: { universal: "112", police: "113", ambulance: "118", fire: "115" },
                health: {
                  hospitals: ["Sant'Orsola-Malpighi Polyclinic", "Maggiore Hospital"],
                  note: "The same conditions as in the rest of Italy apply (EHIC for EU, private insurance for others).",
                },
                services: {
                  banks: ["Intesa Sanpaolo", "UniCredit", "BPER Banca"],
                  phone_carriers: ["TIM", "Vodafone", "Wind Tre"],
                },
                education: {
                  universities: ["University of Bologna (UNIBO)"],
                },
                misc: {
                  visa_note: "A student visa and a 'permesso di soggiorno' are required for non-EU students.",
                  fun_fact: "The University of Bologna, founded in 1088, is the oldest continuously operating university in the world.",
                }
              },
            },
          },
        ],
      },
      {
        slug: "portugal",
        nameEn: "Portugal",
        nameFr: "Portugal",
        cities: [
          // 1. Lisbonne
          {
            slug: "lisbon",
            nameEn: "Lisbon",
            nameFr: "Lisbonne",
            budget: { food_per_month_eur: 250, housing_flatshare_eur: 400, transport_pass_eur: 30, beer_pub_eur: 2, cinema_eur: 7 },
            content: {
              fr: {
                name: "Lisbonne",
                description2: "Capitale du Portugal, Lisbonne séduit par ses collines, ses tramways jaunes emblématiques et son ambiance décontractée. Le coût de la vie y est relativement bas pour une capitale européenne.",
                neighborhoods: ["Alfama", "Bairro Alto", "Cais do Sodré", "Graça"],
                housing_howto: "La colocation est la solution la plus courante. Les prix ont augmenté, mais restent abordables. Des sites comme Idealista.pt ou les groupes Facebook sont très actifs.",
                tips: ["La carte Navegante permet de se déplacer à bas prix.", "Goûtez les pastéis de nata à Belém.", "Profitez des nombreux 'miradouros' (points de vue) pour admirer la ville."],
                emergency: { universal: "112", police: "112", ambulance: "112", fire: "112" },
                health: {
                  hospitals: ["Centro Hospitalar Universitário de Lisboa Norte (Hospital de Santa Maria)", "Centro Hospitalar Universitário de Lisboa Central"],
                  note: "La CEAM est nécessaire pour les étudiants de l'UE. Une assurance privée est recommandée pour les autres.",
                },
                services: {
                  banks: ["Caixa Geral de Depósitos", "Millennium BCP", "Santander Totta", "Novo Banco"],
                  phone_carriers: ["MEO", "NOS", "Vodafone"],
                },
                education: {
                  universities: ["Universidade de Lisboa", "Universidade NOVA de Lisboa", "Católica Lisbon School of Business & Economics"],
                },
                misc: {
                  visa_note: "Un visa étudiant est requis pour les séjours de plus de 90 jours pour les non-ressortissants de l'UE.",
                  fun_fact: "Lisbonne est l'une des plus anciennes villes d'Europe occidentale, précédant d'autres capitales comme Londres, Paris et Rome de plusieurs siècles.",
                }
              },
              en: {
                name: "Lisbon",
                description2: "The capital of Portugal, Lisbon charms with its hills, iconic yellow trams, and relaxed atmosphere. The cost of living is relatively low for a European capital.",
                neighborhoods: ["Alfama", "Bairro Alto", "Cais do Sodré", "Graça"],
                housing_howto: "Flatsharing is the most common solution. Prices have risen but remain affordable. Websites like Idealista.pt or Facebook groups are very active.",
                tips: ["The Navegante card allows for low-cost travel.", "Taste the pastéis de nata in Belém.", "Enjoy the many 'miradouros' (viewpoints) to admire the city."],
                emergency: { universal: "112", police: "112", ambulance: "112", fire: "112" },
                health: {
                  hospitals: ["North Lisbon University Hospital Center (Santa Maria Hospital)", "Central Lisbon University Hospital Center"],
                  note: "The EHIC is necessary for EU students. Private insurance is recommended for others.",
                },
                services: {
                  banks: ["Caixa Geral de Depósitos", "Millennium BCP", "Santander Totta", "Novo Banco"],
                  phone_carriers: ["MEO", "NOS", "Vodafone"],
                },
                education: {
                  universities: ["University of Lisbon", "NOVA University of Lisbon", "Católica Lisbon School of Business & Economics"],
                },
                misc: {
                  visa_note: "A student visa is required for stays longer than 90 days for non-EU nationals.",
                  fun_fact: "Lisbon is one of the oldest cities in Western Europe, predating other capitals like London, Paris, and Rome by centuries.",
                }
              },
            },
          },
          // 2. Porto
          {
            slug: "porto",
            nameEn: "Porto",
            nameFr: "Porto",
            budget: { food_per_month_eur: 230, housing_flatshare_eur: 320, transport_pass_eur: 30, beer_pub_eur: 2, cinema_eur: 6 },
            content: {
              fr: {
                name: "Porto",
                description2: "Deuxième ville du Portugal, Porto est célèbre pour son vin, son centre historique classé à l'UNESCO et le fleuve Douro. C'est une ville authentique avec une vie étudiante très active.",
                neighborhoods: ["Ribeira", "Cedofeita", "Bonfim", "Vila Nova de Gaia"],
                housing_howto: "Le logement est moins cher qu'à Lisbonne. La colocation est facile à trouver, notamment près du pôle universitaire de Asprela.",
                tips: ["La carte Andante est utilisée pour les transports en commun.", "Traversez le pont Dom Luís I pour visiter les caves de vin de Porto à Gaia.", "Goûtez la Francesinha, un sandwich local très copieux."],
                emergency: { universal: "112", police: "112", ambulance: "112", fire: "112" },
                health: {
                  hospitals: ["Centro Hospitalar Universitário do Porto (Hospital de Santo António)", "Hospital de São João"],
                  note: "Les mêmes conditions que pour Lisbonne s'appliquent (CEAM ou assurance privée).",
                },
                services: {
                  banks: ["Caixa Geral de Depósitos", "Millennium BCP", "Santander Totta"],
                  phone_carriers: ["MEO", "NOS", "Vodafone"],
                },
                education: {
                  universities: ["Universidade do Porto", "Universidade Católica Portuguesa (campus de Porto)"],
                },
                misc: {
                  visa_note: "Un visa étudiant est requis pour les séjours de plus de 90 jours pour les non-ressortissants de l'UE.",
                  fun_fact: "La librairie Lello à Porto, avec son escalier rouge emblématique, est considérée comme l'une des plus belles du monde et aurait inspiré J.K. Rowling pour la bibliothèque de Poudlard.",
                }
              },
              en: {
                name: "Porto",
                description2: "Portugal's second city, Porto is famous for its wine, its UNESCO-listed historic center, and the Douro River. It is an authentic city with a very active student life.",
                neighborhoods: ["Ribeira", "Cedofeita", "Bonfim", "Vila Nova de Gaia"],
                housing_howto: "Housing is cheaper than in Lisbon. Flatsharing is easy to find, especially near the Asprela university hub.",
                tips: ["The Andante card is used for public transport.", "Cross the Dom Luís I Bridge to visit the Port wine cellars in Gaia.", "Try the Francesinha, a very hearty local sandwich."],
                emergency: { universal: "112", police: "112", ambulance: "112", fire: "112" },
                health: {
                  hospitals: ["Porto University Hospital Center (Santo António Hospital)", "São João Hospital"],
                  note: "The same conditions as for Lisbon apply (EHIC or private insurance).",
                },
                services: {
                  banks: ["Caixa Geral de Depósitos", "Millennium BCP", "Santander Totta"],
                  phone_carriers: ["MEO", "NOS", "Vodafone"],
                },
                education: {
                  universities: ["University of Porto", "Catholic University of Portugal (Porto campus)"],
                },
                misc: {
                  visa_note: "A student visa is required for stays longer than 90 days for non-EU nationals.",
                  fun_fact: "The Lello Bookstore in Porto, with its iconic red staircase, is considered one of the most beautiful in the world and is said to have inspired J.K. Rowling for the Hogwarts library.",
                }
              },
            },
          },
        ],
      },
      // ... Autres pays européens
      {
        slug: "united-kingdom",
        nameEn: "United Kingdom",
        nameFr: "Royaume-Uni",
        cities: [
          // 1. Londres
          {
            slug: "london",
            nameEn: "London",
            nameFr: "Londres",
            budget: { food_per_month_eur: 400, housing_flatshare_eur: 900, transport_pass_eur: 180, beer_pub_eur: 7, cinema_eur: 15 },
            content: {
              fr: {
                name: "Londres",
                description2: "Londres est une mégalopole mondiale, un carrefour de cultures, de finances et de créativité. Étudier ici, c'est s'immerger dans une ville à l'énergie incomparable, avec des universités de premier plan.",
                neighborhoods: ["Shoreditch", "Camden", "Notting Hill", "Brixton"],
                housing_howto: "Le logement est très cher. La colocation ('flatshare') est quasi obligatoire. Des sites comme SpareRoom ou Rightmove sont incontournables. Pensez aux résidences étudiantes.",
                tips: ["La carte Oyster ou le paiement sans contact est essentiel pour les transports (TfL).", "De nombreux musées (British Museum, Tate Modern) sont gratuits.", "Explorez les différents marchés : Borough Market pour la nourriture, Camden pour l'alternatif."],
                emergency: { universal: "999", police: "999", ambulance: "999", fire: "999" },
                health: {
                  hospitals: ["St Thomas' Hospital", "University College Hospital", "King's College Hospital"],
                  note: "Le NHS (National Health Service) est le système de santé public. Les étudiants étrangers payent une surtaxe (IHS) lors de leur demande de visa pour y avoir accès.",
                },
                services: {
                  banks: ["HSBC", "Barclays", "Lloyds Bank", "NatWest", "Monzo", "Revolut"],
                  phone_carriers: ["EE", "O2", "Vodafone", "Three", "Giffgaff"],
                },
                education: {
                  universities: ["Imperial College London", "University College London (UCL)", "London School of Economics (LSE)", "King's College London"],
                },
                misc: {
                  visa_note: "Un visa étudiant ('Student visa') est nécessaire pour les étudiants non-britanniques (y compris de l'UE depuis le Brexit) pour les cours de plus de 6 mois.",
                  fun_fact: "Le métro de Londres, surnommé 'The Tube', est le plus ancien réseau de transport souterrain au monde, inauguré en 1863.",
                }
              },
              en: {
                name: "London",
                description2: "London is a global megalopolis, a crossroads of cultures, finance, and creativity. Studying here means immersing yourself in a city with unparalleled energy, with leading universities.",
                neighborhoods: ["Shoreditch", "Camden", "Notting Hill", "Brixton"],
                housing_howto: "Housing is very expensive. Flatsharing is almost mandatory. Websites like SpareRoom or Rightmove are essential. Consider student residences.",
                tips: ["An Oyster card or contactless payment is essential for transport (TfL).", "Many museums (British Museum, Tate Modern) are free.", "Explore the different markets: Borough Market for food, Camden for alternative style."],
                emergency: { universal: "999", police: "999", ambulance: "999", fire: "999" },
                health: {
                  hospitals: ["St Thomas' Hospital", "University College Hospital", "King's College Hospital"],
                  note: "The NHS (National Health Service) is the public health system. International students pay a surcharge (IHS) with their visa application to access it.",
                },
                services: {
                  banks: ["HSBC", "Barclays", "Lloyds Bank", "NatWest", "Monzo", "Revolut"],
                  phone_carriers: ["EE", "O2", "Vodafone", "Three", "Giffgaff"],
                },
                education: {
                  universities: ["Imperial College London", "University College London (UCL)", "London School of Economics (LSE)", "King's College London"],
                },
                misc: {
                  visa_note: "A Student visa is required for non-UK students (including EU since Brexit) for courses longer than 6 months.",
                  fun_fact: "The London Underground, nicknamed 'The Tube,' is the world's oldest underground transport network, opened in 1863.",
                }
              },
            },
          },
        ],
      },
      {
        slug: "germany",
        nameEn: "Germany",
        nameFr: "Allemagne",
        cities: [
          // 1. Berlin
          {
            slug: "berlin",
            nameEn: "Berlin",
            nameFr: "Berlin",
            budget: { food_per_month_eur: 280, housing_flatshare_eur: 550, transport_pass_eur: 49, beer_pub_eur: 4, cinema_eur: 10 },
            content: {
              fr: {
                name: "Berlin",
                description2: "Capitale de l'Allemagne, Berlin est une ville d'histoire, de culture alternative et de créativité. Relativement abordable pour une grande capitale, elle attire des artistes et des étudiants du monde entier.",
                neighborhoods: ["Kreuzberg", "Neukölln", "Friedrichshain", "Prenzlauer Berg"],
                housing_howto: "Le marché du logement est très tendu. La colocation ('WG' - Wohngemeinschaft) est la norme. Utilisez WG-Gesucht.de. L'Anmeldung (déclaration de domicile) est une étape administrative cruciale.",
                tips: ["Le Deutschlandticket à 49€/mois permet de voyager sur tous les transports régionaux en Allemagne.", "Explorez l'East Side Gallery, un morceau du Mur de Berlin transformé en galerie d'art.", "La vie nocturne est légendaire, avec des clubs comme le Berghain."],
                emergency: { universal: "112", police: "110", ambulance: "112", fire: "112" },
                health: {
                  hospitals: ["Charité - Universitätsmedizin Berlin", "Vivantes Klinikum"],
                  note: "L'assurance maladie (publique ou privée) est obligatoire pour tous les résidents, y compris les étudiants.",
                },
                services: {
                  banks: ["Deutsche Bank", "Commerzbank", "Sparkasse", "N26"],
                  phone_carriers: ["Deutsche Telekom", "Vodafone", "O2"],
                },
                education: {
                  universities: ["Humboldt-Universität zu Berlin", "Freie Universität Berlin", "Technische Universität Berlin (TU Berlin)"],
                },
                misc: {
                  visa_note: "Un visa étudiant et un permis de séjour sont nécessaires pour les étudiants non-européens.",
                  fun_fact: "Berlin compte plus de ponts que Venise (environ 1700) et plus de musées que de jours de pluie par an.",
                }
              },
              en: {
                name: "Berlin",
                description2: "The capital of Germany, Berlin is a city of history, alternative culture, and creativity. Relatively affordable for a major capital, it attracts artists and students from all over the world.",
                neighborhoods: ["Kreuzberg", "Neukölln", "Friedrichshain", "Prenzlauer Berg"],
                housing_howto: "The housing market is very tight. Shared flats ('WG' - Wohngemeinschaft) are the norm. Use WG-Gesucht.de. The 'Anmeldung' (address registration) is a crucial administrative step.",
                tips: ["The €49/month Deutschlandticket allows travel on all regional transport in Germany.", "Explore the East Side Gallery, a section of the Berlin Wall turned into an art gallery.", "The nightlife is legendary, with clubs like Berghain."],
                emergency: { universal: "112", police: "110", ambulance: "112", fire: "112" },
                health: {
                  hospitals: ["Charité - Universitätsmedizin Berlin", "Vivantes Klinikum"],
                  note: "Health insurance (public or private) is mandatory for all residents, including students.",
                },
                services: {
                  banks: ["Deutsche Bank", "Commerzbank", "Sparkasse", "N26"],
                  phone_carriers: ["Deutsche Telekom", "Vodafone", "O2"],
                },
                education: {
                  universities: ["Humboldt University of Berlin", "Free University of Berlin", "Technical University of Berlin (TU Berlin)"],
                },
                misc: {
                  visa_note: "A student visa and residence permit are required for non-EU students.",
                  fun_fact: "Berlin has more bridges than Venice (around 1700) and more museums than rainy days per year.",
                }
              },
            },
          },
        ],
      },
      // ...
    ],
  },
  // Add this new North America object to your main 'destinations' array
{
  slug: "north-america",
  nameEn: "North America",
  nameFr: "Amérique du Nord",
  countries: [
    // USA
    {
      slug: "usa",
      nameEn: "United States",
      nameFr: "États-Unis",
      cities: [
        // 1. New York City
        {
          slug: "new-york-city",
          nameEn: "New York City",
          nameFr: "New York",
          budget: {
            food_per_month_eur: 500,
            housing_flatshare_eur: 1500,
            transport_pass_eur: 120,
            beer_pub_eur: 8,
            cinema_eur: 16,
          },
          content: {
            fr: {
              name: "New York",
              description2: "La ville qui ne dort jamais, New York est un centre mondial de la finance, de la culture et des arts. Étudier ici, c'est vivre une expérience intense au cœur de l'une des métropoles les plus emblématiques du monde.",
              neighborhoods: ["East Village", "Bushwick (Brooklyn)", "Upper West Side", "Astoria (Queens)"],
              housing_howto: "Le logement est extrêmement cher et compétitif. La colocation est quasi obligatoire. Utilisez des sites comme StreetEasy, Roomi, et les groupes Facebook. Commencez vos recherches des mois à l'avance.",
              tips: ["La MetroCard ou OMNY est indispensable pour le vaste réseau de métro.", "Explorez au-delà de Manhattan ; chaque 'borough' a sa propre identité.", "De nombreux musées proposent des entrées 'pay-what-you-wish'."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["NYU Langone Health", "Mount Sinai Hospital", "NewYork-Presbyterian Hospital"],
                note: "Le système de santé est privé et extrêmement coûteux. Une assurance maladie complète et robuste est absolument obligatoire pour les étudiants.",
              },
              services: {
                banks: ["Chase", "Bank of America", "Citibank", "Wells Fargo"],
                phone_carriers: ["Verizon", "AT&T", "T-Mobile"],
              },
              education: {
                universities: ["Columbia University", "New York University (NYU)", "The City University of New York (CUNY)"],
              },
              misc: {
                visa_note: "Un visa étudiant F-1 est généralement requis pour les étudiants internationaux inscrits dans des programmes à temps plein.",
                fun_fact: "Plus de 800 langues sont parlées à New York, ce qui en fait la ville la plus linguistiquement diverse du monde.",
              }
            },
            en: {
              name: "New York City",
              description2: "The city that never sleeps, New York is a global center for finance, culture, and the arts. Studying here means an intense experience in the heart of one of the world's most iconic metropolises.",
              neighborhoods: ["East Village", "Bushwick (Brooklyn)", "Upper West Side", "Astoria (Queens)"],
              housing_howto: "Housing is extremely expensive and competitive. Sharing a flat is almost mandatory. Use sites like StreetEasy, Roomi, and Facebook groups. Start your search months in advance.",
              tips: ["A MetroCard or OMNY is essential for the vast subway system.", "Explore beyond Manhattan; each borough has its own identity.", "Many museums offer 'pay-what-you-wish' admission."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["NYU Langone Health", "Mount Sinai Hospital", "NewYork-Presbyterian Hospital"],
                note: "The healthcare system is private and extremely expensive. A comprehensive and robust health insurance plan is absolutely mandatory for students.",
              },
              services: {
                banks: ["Chase", "Bank of America", "Citibank", "Wells Fargo"],
                phone_carriers: ["Verizon", "AT&T", "T-Mobile"],
              },
              education: {
                universities: ["Columbia University", "New York University (NYU)", "The City University of New York (CUNY)"],
              },
              misc: {
                visa_note: "An F-1 student visa is typically required for international students enrolled in full-time programs.",
                fun_fact: "Over 800 languages are spoken in New York City, making it the most linguistically diverse city in the world.",
              }
            },
          },
        },
        // 2. Los Angeles
        {
          slug: "los-angeles",
          nameEn: "Los Angeles",
          nameFr: "Los Angeles",
          budget: {
            food_per_month_eur: 450,
            housing_flatshare_eur: 1200,
            transport_pass_eur: 90,
            beer_pub_eur: 8,
            cinema_eur: 15,
          },
          content: {
            fr: {
              name: "Los Angeles",
              description2: "Capitale mondiale du divertissement, Los Angeles est une métropole tentaculaire connue pour son climat ensoleillé, ses plages et son industrie cinématographique. C'est une ville créative et diversifiée offrant un style de vie décontracté.",
              neighborhoods: ["Westwood (UCLA)", "Silver Lake", "Koreatown", "Santa Monica"],
              housing_howto: "Le marché est cher. La colocation est la norme. Les sites comme Zillow, Apartments.com et les groupes Facebook sont essentiels. Une voiture est souvent nécessaire pour se déplacer.",
              tips: ["Posséder ou avoir accès à une voiture est presque indispensable.", "Profitez du plein air : randonnée dans les canyons, surf et journées à la plage.", "Le trafic est une réalité, planifiez vos déplacements en conséquence."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["Cedars-Sinai Medical Center", "UCLA Medical Center", "Keck Hospital of USC"],
                note: "Comme partout aux États-Unis, une assurance maladie complète est non négociable pour couvrir les frais médicaux très élevés.",
              },
              services: {
                banks: ["Bank of America", "Chase", "Wells Fargo"],
                phone_carriers: ["Verizon", "AT&T", "T-Mobile"],
              },
              education: {
                universities: ["University of California, Los Angeles (UCLA)", "University of Southern California (USC)", "Caltech"],
              },
              misc: {
                visa_note: "Un visa étudiant F-1 est requis pour la plupart des étudiants internationaux.",
                fun_fact: "La ville de Los Angeles s'étend sur plus de 1 200 km², et le comté de L.A. est plus grand que certains États américains.",
              }
            },
            en: {
              name: "Los Angeles",
              description2: "The entertainment capital of the world, Los Angeles is a sprawling metropolis known for its sunny climate, beaches, and film industry. It's a creative and diverse city with a laid-back lifestyle.",
              neighborhoods: ["Westwood (UCLA)", "Silver Lake", "Koreatown", "Santa Monica"],
              housing_howto: "The market is expensive. Flatsharing is the norm. Websites like Zillow, Apartments.com, and Facebook groups are key. A car is often necessary to get around.",
              tips: ["Owning or having access to a car is almost essential.", "Take advantage of the outdoors: hiking in the canyons, surfing, and beach days.", "Traffic is a reality; plan your travel times accordingly."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["Cedars-Sinai Medical Center", "UCLA Medical Center", "Keck Hospital of USC"],
                note: "As elsewhere in the US, comprehensive health insurance is non-negotiable to cover the very high medical costs.",
              },
              services: {
                banks: ["Bank of America", "Chase", "Wells Fargo"],
                phone_carriers: ["Verizon", "AT&T", "T-Mobile"],
              },
              education: {
                universities: ["University of California, Los Angeles (UCLA)", "University of Southern California (USC)", "Caltech"],
              },
              misc: {
                visa_note: "An F-1 student visa is required for most international students.",
                fun_fact: "The City of Los Angeles spans over 1,200 sq km (469 sq miles), and L.A. County is larger than some U.S. states.",
              }
            },
          },
        },
        // 3. Chicago
        {
          slug: "chicago",
          nameEn: "Chicago",
          nameFr: "Chicago",
          budget: {
            food_per_month_eur: 420,
            housing_flatshare_eur: 1000,
            transport_pass_eur: 95,
            beer_pub_eur: 7,
            cinema_eur: 14,
          },
          content: {
            fr: {
              name: "Chicago",
              description2: "Située sur les rives du lac Michigan, Chicago est célèbre pour son architecture audacieuse, sa scène artistique dynamique et sa riche histoire musicale (blues et jazz). C'est une métropole américaine de premier plan avec une ambiance plus accessible que NYC.",
              neighborhoods: ["Lincoln Park", "Wicker Park", "Hyde Park", "Logan Square"],
              housing_howto: "Le logement est plus abordable que sur les côtes. La colocation est très répandue. Utilisez des plateformes comme Domu ou Zillow. Le réseau de transport public 'L' est efficace.",
              tips: ["Le pass Ventra est essentiel pour les bus et le train 'L'.", "Préparez-vous à des hivers très froids et venteux.", "Explorez les différents quartiers, chacun avec son propre caractère."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["Northwestern Memorial Hospital", "Rush University Medical Center", "University of Chicago Medical Center"],
                note: "Une assurance santé privée et complète est une nécessité absolue pour tous les étudiants aux États-Unis.",
              },
              services: {
                banks: ["Chase", "PNC Bank", "BMO Harris Bank"],
                phone_carriers: ["Verizon", "AT&T", "T-Mobile"],
              },
              education: {
                universities: ["University of Chicago", "Northwestern University", "University of Illinois Chicago (UIC)"],
              },
              misc: {
                visa_note: "Le visa F-1 est la voie la plus courante pour les étudiants étrangers venant étudier aux États-Unis.",
                fun_fact: "Chicago a été le lieu de naissance du premier gratte-ciel au monde, le Home Insurance Building, construit en 1885.",
              }
            },
            en: {
              name: "Chicago",
              description2: "Located on the shores of Lake Michigan, Chicago is famous for its bold architecture, vibrant arts scene, and rich musical history (blues and jazz). It's a major American metropolis with a more approachable feel than NYC.",
              neighborhoods: ["Lincoln Park", "Wicker Park", "Hyde Park", "Logan Square"],
              housing_howto: "Housing is more affordable than on the coasts. Sharing an apartment is very common. Use platforms like Domu or Zillow. The 'L' public transit system is efficient.",
              tips: ["A Ventra pass is essential for the 'L' train and bus network.", "Be prepared for very cold and windy winters.", "Explore the different neighborhoods, each with its own character."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["Northwestern Memorial Hospital", "Rush University Medical Center", "University of Chicago Medical Center"],
                note: "A comprehensive private health insurance plan is an absolute necessity for all students in the United States.",
              },
              services: {
                banks: ["Chase", "PNC Bank", "BMO Harris Bank"],
                phone_carriers: ["Verizon", "AT&T", "T-Mobile"],
              },
              education: {
                universities: ["University of Chicago", "Northwestern University", "University of Illinois Chicago (UIC)"],
              },
              misc: {
                visa_note: "The F-1 visa is the most common route for foreign students coming to study in the US.",
                fun_fact: "Chicago was the birthplace of the world's first skyscraper, the Home Insurance Building, constructed in 1885.",
              }
            },
          },
        },
      ],
    },
    // Canada
    {
      slug: "canada",
      nameEn: "Canada",
      nameFr: "Canada",
      cities: [
        // 4. Toronto
        {
          slug: "toronto",
          nameEn: "Toronto",
          nameFr: "Toronto",
          budget: {
            food_per_month_eur: 400,
            housing_flatshare_eur: 1100,
            transport_pass_eur: 110,
            beer_pub_eur: 6,
            cinema_eur: 12,
          },
          content: {
            fr: {
              name: "Toronto",
              description2: "La plus grande ville du Canada, Toronto est un centre financier et l'une des villes les plus multiculturelles au monde. Son dynamisme, sa sécurité et sa diversité en font une destination de choix pour les étudiants.",
              neighborhoods: ["The Annex", "Kensington Market", "Leslieville", "Yonge and Eglinton"],
              housing_howto: "Le marché locatif est cher et compétitif. Les 'condos' sont nombreux mais coûteux. Cherchez des colocations dans des maisons ou des appartements en sous-sol ('basement'). Utilisez Kijiji, PadMapper et les groupes Facebook.",
              tips: ["La carte Presto est utilisée pour le système de transport TTC.", "Explorez la diversité culinaire de la ville, des 'food trucks' aux restaurants gastronomiques.", "Profitez des parcs et des îles de Toronto pendant l'été."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["Toronto General Hospital (UHN)", "Sunnybrook Health Sciences Centre", "Mount Sinai Hospital"],
                note: "L'assurance maladie provinciale (OHIP) n'est pas toujours disponible pour les étudiants internationaux dès leur arrivée. Une assurance privée (ex: UHIP) est obligatoire.",
              },
              services: {
                banks: ["RBC", "TD", "Scotiabank", "CIBC", "BMO"],
                phone_carriers: ["Rogers", "Bell", "Telus", "Freedom Mobile"],
              },
              education: {
                universities: ["University of Toronto", "York University", "Ryerson University (Toronto Metropolitan University)"],
              },
              misc: {
                visa_note: "Un permis d'études canadien est requis pour les programmes de plus de 6 mois.",
                fun_fact: "Environ la moitié de la population de Toronto est née en dehors du Canada.",
              }
            },
            en: {
              name: "Toronto",
              description2: "Canada's largest city, Toronto is a financial hub and one of the most multicultural cities in the world. Its dynamism, safety, and diversity make it a top destination for students.",
              neighborhoods: ["The Annex", "Kensington Market", "Leslieville", "Yonge and Eglinton"],
              housing_howto: "The rental market is expensive and competitive. Condos are plentiful but pricey. Look for flatshares in houses or basement apartments. Use Kijiji, PadMapper, and Facebook groups.",
              tips: ["A Presto card is used for the TTC transit system.", "Explore the city's diverse food scene, from food trucks to fine dining.", "Take advantage of the parks and Toronto Islands during the summer."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["Toronto General Hospital (UHN)", "Sunnybrook Health Sciences Centre", "Mount Sinai Hospital"],
                note: "Provincial health insurance (OHIP) is not always available to international students upon arrival. Private insurance (e.g., UHIP) is mandatory.",
              },
              services: {
                banks: ["RBC", "TD", "Scotiabank", "CIBC", "BMO"],
                phone_carriers: ["Rogers", "Bell", "Telus", "Freedom Mobile"],
              },
              education: {
                universities: ["University of Toronto", "York University", "Ryerson University (Toronto Metropolitan University)"],
              },
              misc: {
                visa_note: "A Canadian study permit is required for programs longer than 6 months.",
                fun_fact: "About half of Toronto's population was born outside of Canada.",
              }
            },
          },
        },
        // 5. Vancouver
        {
          slug: "vancouver",
          nameEn: "Vancouver",
          nameFr: "Vancouver",
          budget: {
            food_per_month_eur: 400,
            housing_flatshare_eur: 1200,
            transport_pass_eur: 95,
            beer_pub_eur: 6,
            cinema_eur: 13,
          },
          content: {
            fr: {
              name: "Vancouver",
              description2: "Nichée entre l'océan et les montagnes, Vancouver est réputée pour sa beauté naturelle époustouflante. C'est un pôle majeur de l'industrie cinématographique et technologique, offrant un style de vie axé sur le plein air.",
              neighborhoods: ["Kitsilano", "Mount Pleasant", "Commercial Drive", "Yaletown"],
              housing_howto: "Vancouver a l'un des marchés immobiliers les plus chers d'Amérique du Nord. La concurrence est féroce. La colocation est la seule option viable pour la plupart des étudiants. Utilisez Craigslist (avec prudence) et PadMapper.",
              tips: ["La carte Compass est utilisée pour les transports en commun (TransLink).", "Le vélo est un excellent moyen de se déplacer.", "Profitez de la nature : randonnée, ski et kayak sont facilement accessibles."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["Vancouver General Hospital", "St. Paul's Hospital", "UBC Hospital"],
                note: "Les étudiants internationaux doivent souscrire au BC Medical Services Plan (MSP) après une période d'attente, durant laquelle une assurance privée est nécessaire.",
              },
              services: {
                banks: ["RBC", "TD", "Scotiabank", "CIBC", "Vancity"],
                phone_carriers: ["Rogers", "Bell", "Telus", "Freedom Mobile"],
              },
              education: {
                universities: ["University of British Columbia (UBC)", "Simon Fraser University (SFU)", "Emily Carr University of Art + Design"],
              },
              misc: {
                visa_note: "Un permis d'études canadien est nécessaire pour les programmes d'études de plus de six mois.",
                fun_fact: "Vancouver est souvent surnommée 'Hollywood North' car c'est le troisième plus grand centre de production cinématographique d'Amérique du Nord.",
              }
            },
            en: {
              name: "Vancouver",
              description2: "Nestled between the ocean and mountains, Vancouver is renowned for its stunning natural beauty. It's a major hub for the film and tech industries, offering an outdoor-focused lifestyle.",
              neighborhoods: ["Kitsilano", "Mount Pleasant", "Commercial Drive", "Yaletown"],
              housing_howto: "Vancouver has one of the most expensive housing markets in North America. Competition is fierce. Flatsharing is the only viable option for most students. Use Craigslist (cautiously) and PadMapper.",
              tips: ["A Compass Card is used for public transit (TransLink).", "Biking is an excellent way to get around.", "Embrace the outdoors: hiking, skiing, and kayaking are easily accessible."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["Vancouver General Hospital", "St. Paul's Hospital", "UBC Hospital"],
                note: "International students must enrol in the BC Medical Services Plan (MSP) after a waiting period, during which private insurance is required.",
              },
              services: {
                banks: ["RBC", "TD", "Scotiabank", "CIBC", "Vancity"],
                phone_carriers: ["Rogers", "Bell", "Telus", "Freedom Mobile"],
              },
              education: {
                universities: ["University of British Columbia (UBC)", "Simon Fraser University (SFU)", "Emily Carr University of Art + Design"],
              },
              misc: {
                visa_note: "A Canadian study permit is needed for academic programs lasting longer than six months.",
                fun_fact: "Vancouver is often called 'Hollywood North' as it's the third-largest film production center in North America.",
              }
            },
          },
        },
        // 6. Montreal
        {
          slug: "montreal",
          nameEn: "Montreal",
          nameFr: "Montréal",
          budget: {
            food_per_month_eur: 350,
            housing_flatshare_eur: 750,
            transport_pass_eur: 70,
            beer_pub_eur: 6,
            cinema_eur: 11,
          },
          content: {
            fr: {
              name: "Montréal",
              description2: "Plus grande ville francophone d'Amérique du Nord, Montréal est un centre culturel dynamique avec une saveur européenne unique. Elle est connue pour sa scène artistique, ses festivals et son coût de la vie abordable pour une grande ville.",
              neighborhoods: ["Le Plateau-Mont-Royal", "Mile End", "Le Village", "Griffintown"],
              housing_howto: "Le logement est beaucoup plus abordable que dans les autres grandes villes canadiennes. La colocation est très populaire. Kijiji et les groupes Facebook sont les meilleures ressources pour trouver un logement.",
              tips: ["La carte Opus est nécessaire pour le métro et les bus (STM).", "La ville est très cyclable, surtout en été.", "Adoptez la culture bilingue ; un 'Bonjour/Hi' est une salutation courante."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["Centre universitaire de santé McGill (CUSM)", "Centre hospitalier de l'Université de Montréal (CHUM)"],
                note: "Les étudiants internationaux doivent avoir une assurance maladie. Certaines ententes de sécurité sociale existent entre le Québec et d'autres pays.",
              },
              services: {
                banks: ["Desjardins", "Banque Nationale du Canada", "RBC", "BMO"],
                phone_carriers: ["Bell", "Videotron", "Rogers", "Telus"],
              },
              education: {
                universities: ["Université McGill", "Université de Montréal (UdeM)", "Université Concordia", "UQAM"],
              },
              misc: {
                visa_note: "Un permis d'études canadien et un CAQ (Certificat d'acceptation du Québec) sont tous deux requis.",
                fun_fact: "Montréal possède un immense réseau souterrain ('RÉSO') de plus de 32 km, reliant métros, centres commerciaux et universités.",
              }
            },
            en: {
              name: "Montreal",
              description2: "The largest French-speaking city in North America, Montreal is a vibrant cultural hub with a unique European flavour. It's known for its arts scene, festivals, and affordable cost of living for a major city.",
              neighborhoods: ["Le Plateau-Mont-Royal", "Mile End", "The Village", "Griffintown"],
              housing_howto: "Housing is much more affordable than in other large Canadian cities. Flatsharing is very popular. Kijiji and Facebook groups are the best resources for finding a place.",
              tips: ["An Opus card is needed for the metro and bus system (STM).", "The city is very bike-friendly, especially in the summer.", "Embrace the bilingual culture; a 'Bonjour/Hi' is a common greeting."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["McGill University Health Centre (MUHC)", "Centre hospitalier de l'Université de Montréal (CHUM)"],
                note: "International students must have health insurance. Certain social security agreements exist between Quebec and other countries.",
              },
              services: {
                banks: ["Desjardins", "National Bank of Canada", "RBC", "BMO"],
                phone_carriers: ["Bell", "Videotron", "Rogers", "Telus"],
              },
              education: {
                universities: ["McGill University", "Université de Montréal (UdeM)", "Concordia University", "UQAM"],
              },
              misc: {
                visa_note: "A Canadian study permit and a CAQ (Quebec Acceptance Certificate) are both required.",
                fun_fact: "Montreal has a massive underground city network ('RÉSO') of over 32 km, connecting metros, malls, and universities.",
              }
            },
          },
        },
      ],
    },
    // Mexico
    {
      slug: "mexico",
      nameEn: "Mexico",
      nameFr: "Mexique",
      cities: [
        // 7. Mexico City
        {
          slug: "mexico-city",
          nameEn: "Mexico City",
          nameFr: "Mexico",
          budget: {
            food_per_month_eur: 250,
            housing_flatshare_eur: 550,
            transport_pass_eur: 25,
            beer_pub_eur: 2.5,
            cinema_eur: 4,
          },
          content: {
            fr: {
              name: "Mexico",
              description2: "L'une des plus grandes villes du monde, Mexico est une capitale dynamique pleine d'histoire, d'art et de culture. Construite sur les ruines de la capitale aztèque Tenochtitlan, elle offre un coût de la vie très bas et une scène culturelle de classe mondiale.",
              neighborhoods: ["Condesa", "Roma Norte", "Coyoacán", "Polanco"],
              housing_howto: "Le logement est abordable. La colocation est facile à trouver via les groupes Facebook et les sites locaux comme Inmuebles24. Il est courant de traiter directement avec les propriétaires.",
              tips: ["Le métro est très bon marché et étendu, mais peut être bondé.", "La nourriture de rue est une partie essentielle de la culture culinaire.", "L'altitude (2 240 m) peut prendre un certain temps d'adaptation."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["ABC Medical Center", "Hospital Español", "Ángeles del Pedregal"],
                note: "Les soins de santé privés sont d'un bon niveau et abordables par rapport aux normes occidentales. Une assurance est fortement conseillée.",
              },
              services: {
                banks: ["BBVA México", "Santander", "Citibanamex", "Banorte"],
                phone_carriers: ["Telcel", "AT&T Mexico", "Movistar"],
              },
              education: {
                universities: ["Universidad Nacional Autónoma de México (UNAM)", "Tecnológico de Monterrey", "Instituto Politécnico Nacional (IPN)"],
              },
              misc: {
                visa_note: "Un visa d'étudiant résident temporaire est requis pour les séjours d'études de plus de 180 jours.",
                fun_fact: "Mexico compte le plus grand nombre de musées de toutes les villes du monde, après Londres.",
              }
            },
            en: {
              name: "Mexico City",
              description2: "One of the largest cities in the world, Mexico City is a vibrant capital brimming with history, art, and culture. Built on the ruins of the Aztec capital of Tenochtitlan, it offers a very low cost of living and a world-class cultural scene.",
              neighborhoods: ["Condesa", "Roma Norte", "Coyoacán", "Polanco"],
              housing_howto: "Housing is affordable. Flatshares are easy to find through Facebook groups and local sites like Inmuebles24. It's common to deal directly with landlords.",
              tips: ["The metro is very cheap and extensive, but can get crowded.", "Street food is an essential part of the culinary culture.", "The high altitude (2,240m / 7,350ft) can take some getting used to."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["ABC Medical Center", "Hospital Español", "Ángeles del Pedregal"],
                note: "Private healthcare is of a good standard and affordable by Western standards. Insurance is highly recommended.",
              },
              services: {
                banks: ["BBVA México", "Santander", "Citibanamex", "Banorte"],
                phone_carriers: ["Telcel", "AT&T Mexico", "Movistar"],
              },
              education: {
                universities: ["Universidad Nacional Autónoma de México (UNAM)", "Tecnológico de Monterrey", "Instituto Politécnico Nacional (IPN)"],
              },
              misc: {
                visa_note: "A temporary resident student visa is required for study stays longer than 180 days.",
                fun_fact: "Mexico City has the second-highest number of museums of any city in the world, after London.",
              }
            },
          },
        },
      ],
    },
  ],
},

// Add this new South America object to your main 'destinations' array
{
  slug: "south-america",
  nameEn: "South America",
  nameFr: "Amérique du Sud",
  countries: [
    // Argentina
    {
      slug: "argentina",
      nameEn: "Argentina",
      nameFr: "Argentine",
      cities: [
        // 1. Buenos Aires
        {
          slug: "buenos-aires",
          nameEn: "Buenos Aires",
          nameFr: "Buenos Aires",
          budget: {
            food_per_month_eur: 200,
            housing_flatshare_eur: 400,
            transport_pass_eur: 15,
            beer_pub_eur: 2,
            cinema_eur: 5,
          },
          content: {
            fr: {
              name: "Buenos Aires",
              description2: "Surnommée le 'Paris de l'Amérique du Sud', Buenos Aires est célèbre pour son architecture européenne, sa culture passionnée du tango et sa vie nocturne animée. C'est une ville de littérature, d'art et de cafés historiques.",
              neighborhoods: ["Palermo", "Recoleta", "San Telmo", "Belgrano"],
              housing_howto: "Le logement est abordable mais le marché peut être informel. La colocation est très répandue. Les groupes Facebook pour expatriés et étudiants sont la meilleure ressource pour trouver un logement.",
              tips: ["La carte SUBE est indispensable pour les bus ('colectivos') et le métro ('subte').", "Profitez de la viande de bœuf de renommée mondiale et du vin Malbec.", "La ville est très étendue, apprenez à utiliser les transports en commun."],
              emergency: { universal: "911", police: "101", ambulance: "107", fire: "100" },
              health: {
                hospitals: ["Hospital Italiano", "Hospital Alemán", "Hospital Británico"],
                note: "Les hôpitaux publics sont gratuits mais souvent surchargés. Les soins privés sont de bon niveau et relativement peu coûteux. Une assurance est recommandée.",
              },
              services: {
                banks: ["Banco de la Nación Argentina", "Santander Río", "BBVA Argentina"],
                phone_carriers: ["Claro", "Movistar", "Personal"],
              },
              education: {
                universities: ["Universidad de Buenos Aires (UBA)", "Universidad Torcuato Di Tella", "Universidad de Palermo (UP)"],
              },
              misc: {
                visa_note: "Un visa étudiant est requis pour les programmes de plus de 90 jours et doit être demandé après l'arrivée dans le pays.",
                fun_fact: "Buenos Aires possède le plus grand nombre de librairies par habitant de toutes les villes du monde.",
              }
            },
            en: {
              name: "Buenos Aires",
              description2: "Known as the 'Paris of South America', Buenos Aires is famous for its European architecture, passionate tango culture, and vibrant nightlife. It is a city of literature, art, and historic cafes.",
              neighborhoods: ["Palermo", "Recoleta", "San Telmo", "Belgrano"],
              housing_howto: "Housing is affordable but the market can be informal. Sharing a flat is very common. Facebook groups for expats and students are the best resource for finding a place.",
              tips: ["A SUBE card is essential for buses ('colectivos') and the subway ('subte').", "Enjoy the world-famous beef and Malbec wine.", "The city is very spread out; learn to navigate the public transport system."],
              emergency: { universal: "911", police: "101", ambulance: "107", fire: "100" },
              health: {
                hospitals: ["Hospital Italiano", "Hospital Alemán", "Hospital Británico"],
                note: "Public hospitals are free but often overwhelmed. Private care is of a good standard and relatively inexpensive. Insurance is recommended.",
              },
              services: {
                banks: ["Banco de la Nación Argentina", "Santander Río", "BBVA Argentina"],
                phone_carriers: ["Claro", "Movistar", "Personal"],
              },
              education: {
                universities: ["Universidad de Buenos Aires (UBA)", "Universidad Torcuato Di Tella", "Universidad de Palermo (UP)"],
              },
              misc: {
                visa_note: "A student visa is required for programs over 90 days and must be processed after arriving in the country.",
                fun_fact: "Buenos Aires has the most bookshops per capita of any city in the world.",
              }
            },
          },
        },
      ],
    },
    // Brazil
    {
      slug: "brazil",
      nameEn: "Brazil",
      nameFr: "Brésil",
      cities: [
        // 2. São Paulo
        {
          slug: "sao-paulo",
          nameEn: "São Paulo",
          nameFr: "São Paulo",
          budget: {
            food_per_month_eur: 250,
            housing_flatshare_eur: 500,
            transport_pass_eur: 30,
            beer_pub_eur: 2.5,
            cinema_eur: 7,
          },
          content: {
            fr: {
              name: "São Paulo",
              description2: "Moteur économique du Brésil et l'une des villes les plus peuplées du monde, São Paulo est une jungle de béton avec une scène culturelle et gastronomique incroyablement riche. C'est une ville d'opportunités et de diversité.",
              neighborhoods: ["Vila Madalena", "Pinheiros", "Jardins", "Higienópolis"],
              housing_howto: "La colocation ('república') est courante. Les prix varient énormément selon le quartier. Utilisez des sites comme QuintoAndar ou Zap Imóveis. Avoir un CPF (numéro fiscal brésilien) facilite grandement les choses.",
              tips: ["Le métro est le moyen le plus efficace de se déplacer.", "Explorez la diversité culinaire, des 'botecos' traditionnels aux restaurants de renommée mondiale.", "Soyez conscient de la sécurité, surtout la nuit."],
              emergency: { universal: "192", police: "190", ambulance: "192", fire: "193" },
              health: {
                hospitals: ["Hospital Sírio-Libanês", "Hospital Israelita Albert Einstein", "Hospital das Clínicas da USP"],
                note: "Le système de santé public (SUS) est universel mais surchargé. Les soins privés sont excellents mais chers, rendant une assurance indispensable.",
              },
              services: {
                banks: ["Itaú Unibanco", "Bradesco", "Banco do Brasil", "Caixa Econômica"],
                phone_carriers: ["Vivo", "Claro", "TIM"],
              },
              education: {
                universities: ["Universidade de São Paulo (USP)", "Universidade Estadual de Campinas (Unicamp)", "Fundação Getulio Vargas (FGV)"],
              },
              misc: {
                visa_note: "Un visa étudiant (VITEM IV) doit être obtenu auprès d'un consulat brésilien avant le voyage.",
                fun_fact: "São Paulo possède la plus grande communauté de descendants japonais en dehors du Japon, concentrée dans le quartier de Liberdade.",
              }
            },
            en: {
              name: "São Paulo",
              description2: "Brazil's economic engine and one of the world's most populous cities, São Paulo is a concrete jungle with an incredibly rich cultural and gastronomic scene. It is a city of opportunity and diversity.",
              neighborhoods: ["Vila Madalena", "Pinheiros", "Jardins", "Higienópolis"],
              housing_howto: "Flatsharing ('república') is common. Prices vary enormously by neighborhood. Use websites like QuintoAndar or Zap Imóveis. Having a CPF (Brazilian tax number) makes things much easier.",
              tips: ["The metro is the most efficient way to get around.", "Explore the diverse culinary scene, from traditional 'botecos' to world-class restaurants.", "Be aware of your security, especially at night."],
              emergency: { universal: "192", police: "190", ambulance: "192", fire: "193" },
              health: {
                hospitals: ["Hospital Sírio-Libanês", "Hospital Israelita Albert Einstein", "Hospital das Clínicas da USP"],
                note: "The public healthcare system (SUS) is universal but overburdened. Private care is excellent but expensive, making insurance essential.",
              },
              services: {
                banks: ["Itaú Unibanco", "Bradesco", "Banco do Brasil", "Caixa Econômica"],
                phone_carriers: ["Vivo", "Claro", "TIM"],
              },
              education: {
                universities: ["Universidade de São Paulo (USP)", "Universidade Estadual de Campinas (Unicamp)", "Fundação Getulio Vargas (FGV)"],
              },
              misc: {
                visa_note: "A VITEM IV Student Visa must be obtained from a Brazilian consulate before travel.",
                fun_fact: "São Paulo has the largest community of Japanese descendants outside of Japan, centered in the Liberdade neighborhood.",
              }
            },
          },
        },
      ],
    },
    // Chile
    {
      slug: "chile",
      nameEn: "Chile",
      nameFr: "Chili",
      cities: [
        // 3. Santiago
        {
          slug: "santiago",
          nameEn: "Santiago",
          nameFr: "Santiago",
          budget: {
            food_per_month_eur: 280,
            housing_flatshare_eur: 450,
            transport_pass_eur: 40,
            beer_pub_eur: 3,
            cinema_eur: 6,
          },
          content: {
            fr: {
              name: "Santiago",
              description2: "Située dans une vallée avec la cordillère des Andes en toile de fond, Santiago est la capitale moderne et ordonnée du Chili. C'est un centre d'affaires majeur avec une scène artistique et culturelle en plein essor et un accès facile à la nature.",
              neighborhoods: ["Providencia", "Lastarria", "Barrio Italia", "Ñuñoa"],
              housing_howto: "Les prix sont modérés pour la région. La colocation est la norme pour les étudiants. Des sites comme Portal Inmobiliario et CompartoDepto sont utiles.",
              tips: ["La carte Bip! est nécessaire pour le métro et les bus.", "La ville est sujette à la pollution atmosphérique ('smog'), surtout en hiver.", "Profitez de la proximité des Andes pour le ski et la randonnée."],
              emergency: { universal: "133", police: "133", ambulance: "131", fire: "132" },
              health: {
                hospitals: ["Clínica Alemana", "Clínica Las Condes", "Hospital Clínico UC Christus"],
                note: "Le Chili dispose d'un système de santé mixte. Les soins privés sont de haute qualité. Une assurance santé internationale est fortement recommandée.",
              },
              services: {
                banks: ["Banco de Chile", "Santander Chile", "BCI", "BancoEstado"],
                phone_carriers: ["Entel", "Movistar", "WOM", "Claro"],
              },
              education: {
                universities: ["Pontificia Universidad Católica de Chile (UC)", "Universidad de Chile", "Universidad de Santiago de Chile (USACH)"],
              },
              misc: {
                visa_note: "Un visa étudiant doit être obtenu auprès d'un consulat chilien avant d'entrer dans le pays.",
                fun_fact: "Santiago abrite le plus haut bâtiment d'Amérique latine, la Gran Torre Santiago, qui culmine à 300 mètres.",
              }
            },
            en: {
              name: "Santiago",
              description2: "Set in a valley with the Andes as a backdrop, Santiago is Chile's modern and orderly capital. It is a major business hub with a thriving arts and culture scene and easy access to nature.",
              neighborhoods: ["Providencia", "Lastarria", "Barrio Italia", "Ñuñoa"],
              housing_howto: "Prices are moderate for the region. Flatsharing is the norm for students. Websites like Portal Inmobiliario and CompartoDepto are useful.",
              tips: ["A Bip! card is required for the metro and bus system.", "The city is prone to smog, especially in winter.", "Take advantage of the proximity to the Andes for skiing and hiking."],
              emergency: { universal: "133", police: "133", ambulance: "131", fire: "132" },
              health: {
                hospitals: ["Clínica Alemana", "Clínica Las Condes", "Hospital Clínico UC Christus"],
                note: "Chile has a mixed healthcare system. Private care is high quality. International health insurance is strongly recommended.",
              },
              services: {
                banks: ["Banco de Chile", "Santander Chile", "BCI", "BancoEstado"],
                phone_carriers: ["Entel", "Movistar", "WOM", "Claro"],
              },
              education: {
                universities: ["Pontificia Universidad Católica de Chile (UC)", "Universidad de Chile", "Universidad de Santiago de Chile (USACH)"],
              },
              misc: {
                visa_note: "A student visa must be obtained from a Chilean consulate before entering the country.",
                fun_fact: "Santiago is home to the tallest building in Latin America, the Gran Torre Santiago, which stands at 300 meters (984 ft).",
              }
            },
          },
        },
      ],
    },
    // Colombia
    {
      slug: "colombia",
      nameEn: "Colombia",
      nameFr: "Colombie",
      cities: [
        // 4. Bogotá
        {
          slug: "bogota",
          nameEn: "Bogotá",
          nameFr: "Bogotá",
          budget: {
            food_per_month_eur: 200,
            housing_flatshare_eur: 350,
            transport_pass_eur: 20,
            beer_pub_eur: 1.5,
            cinema_eur: 4,
          },
          content: {
            fr: {
              name: "Bogotá",
              description2: "Capitale colombienne située en altitude, Bogotá est une métropole tentaculaire et diversifiée. Autrefois mal réputée, la ville s'est transformée en un centre culturel dynamique avec une scène artistique, gastronomique et étudiante en plein essor.",
              neighborhoods: ["Chapinero", "La Candelaria", "Usaquén", "Teusaquillo"],
              housing_howto: "Le logement est très abordable. La colocation est courante et facile à trouver, notamment via les groupes Facebook. Il est conseillé de choisir un logement proche de l'université pour éviter les longs trajets.",
              tips: ["La carte Tullave est utilisée pour le système de bus TransMilenio.", "Le temps peut changer rapidement en raison de l'altitude ; habillez-vous en couches.", "Le dimanche, de nombreuses rues principales sont fermées à la circulation pour la 'Ciclovía'."],
              emergency: { universal: "123", police: "123", ambulance: "123", fire: "123" },
              health: {
                hospitals: ["Fundación Santa Fe de Bogotá", "Hospital Universitario San Ignacio", "Clínica del Country"],
                note: "Les soins de santé privés sont excellents et abordables. Une assurance santé est essentielle pour y accéder.",
              },
              services: {
                banks: ["Bancolombia", "Davivienda", "BBVA Colombia"],
                phone_carriers: ["Claro", "Movistar", "Tigo"],
              },
              education: {
                universities: ["Universidad Nacional de Colombia", "Universidad de los Andes", "Pontificia Universidad Javeriana"],
              },
              misc: {
                visa_note: "Un visa de type V (Visiteur) pour étudiant est nécessaire pour les études de plus de 180 jours.",
                fun_fact: "Bogotá possède le plus grand réseau de pistes cyclables ('Ciclorrutas') d'Amérique latine, s'étendant sur plus de 500 kilomètres.",
              }
            },
            en: {
              name: "Bogotá",
              description2: "Colombia's high-altitude capital, Bogotá is a sprawling and diverse metropolis. Once having a poor reputation, the city has transformed into a vibrant cultural hub with a booming arts, food, and student scene.",
              neighborhoods: ["Chapinero", "La Candelaria", "Usaquén", "Teusaquillo"],
              housing_howto: "Housing is very affordable. Flatsharing is common and easy to find, especially through Facebook groups. It's advisable to choose housing near your university to avoid long commutes.",
              tips: ["A Tullave card is used for the TransMilenio bus system.", "The weather can change quickly due to the altitude; dress in layers.", "On Sundays, many main streets are closed to traffic for the 'Ciclovía'."],
              emergency: { universal: "123", police: "123", ambulance: "123", fire: "123" },
              health: {
                hospitals: ["Fundación Santa Fe de Bogotá", "Hospital Universitario San Ignacio", "Clínica del Country"],
                note: "Private healthcare is excellent and affordable. Health insurance is essential to access it.",
              },
              services: {
                banks: ["Bancolombia", "Davivienda", "BBVA Colombia"],
                phone_carriers: ["Claro", "Movistar", "Tigo"],
              },
              education: {
                universities: ["Universidad Nacional de Colombia", "Universidad de los Andes", "Pontificia Universidad Javeriana"],
              },
              misc: {
                visa_note: "A Type V (Visitor) visa for students is required for studies longer than 180 days.",
                fun_fact: "Bogotá has the largest network of bicycle paths ('Ciclorrutas') in Latin America, stretching over 500 kilometers.",
              }
            },
          },
        },
      ],
    },
  ],
},

{
  slug: "asia",
  nameEn: "Asia",
  nameFr: "Asie",
  countries: [
    // Japan
    {
      slug: "japan",
      nameEn: "Japan",
      nameFr: "Japon",
      cities: [
        {
          slug: "tokyo",
          nameEn: "Tokyo",
          nameFr: "Tokyo",
          budget: {
            food_per_month_eur: 400,
            housing_flatshare_eur: 800,
            transport_pass_eur: 75,
            beer_pub_eur: 5,
            cinema_eur: 13,
          },
          content: {
            fr: {
              name: "Tokyo",
              description2: "Mélange fascinant d'ultramodernité et de traditions ancestrales, Tokyo est une mégalopole trépidante. Ses universités de classe mondiale, sa sécurité et sa scène culturelle unique en font une destination de choix pour les étudiants internationaux.",
              neighborhoods: ["Shinjuku", "Shibuya", "Kichijoji", "Shimokitazawa"],
              housing_howto: "Le logement est cher. Les options incluent les dortoirs universitaires, les maisons partagées ('share houses') via des sites comme Sakura House, ou les appartements privés. Commencez les recherches bien à l'avance.",
              tips: ["La carte Suica ou Pasmo est essentielle pour les transports en commun.", "Apprenez quelques phrases de base en japonais, c'est très apprécié.", "Les 'konbini' (supérettes) sont parfaits pour des repas abordables et de qualité."],
              emergency: { universal: "112", police: "110", ambulance: "119", fire: "119" },
              health: {
                hospitals: ["St. Luke's International Hospital", "University of Tokyo Hospital"],
                note: "L'Assurance Maladie Nationale (NHI) est obligatoire pour les résidents de longue durée, y compris les étudiants, et couvre 70% des frais médicaux.",
              },
              services: {
                banks: ["MUFG Bank", "SMBC", "Mizuho Bank", "Japan Post Bank"],
                phone_carriers: ["NTT Docomo", "SoftBank", "au by KDDI", "Rakuten Mobile"],
              },
              education: {
                universities: ["The University of Tokyo", "Waseda University", "Keio University", "Tokyo Institute of Technology"],
              },
              misc: {
                visa_note: "Un visa étudiant est requis pour les séjours d'études de plus de 90 jours. Il doit être obtenu avant l'arrivée au Japon.",
                fun_fact: "Tokyo possède plus de restaurants étoilés au guide Michelin que n'importe quelle autre ville au monde.",
              }
            },
            en: {
              name: "Tokyo",
              description2: "A fascinating blend of ultramodernity and ancient traditions, Tokyo is a bustling megalopolis. Its world-class universities, safety, and unique cultural scene make it a top destination for international students.",
              neighborhoods: ["Shinjuku", "Shibuya", "Kichijoji", "Shimokitazawa"],
              housing_howto: "Housing is expensive. Options include university dormitories, share houses through sites like Sakura House, or private apartments. Start your search well in advance.",
              tips: ["A Suica or Pasmo card is essential for public transport.", "Learning basic Japanese phrases is highly appreciated.", "Convenience stores ('konbini') are great for affordable, quality meals."],
              emergency: { universal: "112", police: "110", ambulance: "119", fire: "119" },
              health: {
                hospitals: ["St. Luke's International Hospital", "University of Tokyo Hospital"],
                note: "National Health Insurance (NHI) is mandatory for long-term residents, including students, and covers 70% of medical fees.",
              },
              services: {
                banks: ["MUFG Bank", "SMBC", "Mizuho Bank", "Japan Post Bank"],
                phone_carriers: ["NTT Docomo", "SoftBank", "au by KDDI", "Rakuten Mobile"],
              },
              education: {
                universities: ["The University of Tokyo", "Waseda University", "Keio University", "Tokyo Institute of Technology"],
              },
              misc: {
                visa_note: "A student visa is required for study programs longer than 90 days. It must be obtained before arriving in Japan.",
                fun_fact: "Tokyo has more Michelin-starred restaurants than any other city in the world.",
              }
            },
          },
        },
      ],
    },
    // South Korea
    {
      slug: "south-korea",
      nameEn: "South Korea",
      nameFr: "Corée du Sud",
      cities: [
        {
          slug: "seoul",
          nameEn: "Seoul",
          nameFr: "Séoul",
          budget: {
            food_per_month_eur: 350,
            housing_flatshare_eur: 600,
            transport_pass_eur: 45,
            beer_pub_eur: 4,
            cinema_eur: 10,
          },
          content: {
            fr: {
              name: "Séoul",
              description2: "Capitale dynamique de la Corée du Sud, Séoul est un centre névralgique de la technologie, de la mode et de la culture pop. La ville offre un mélange unique de palais historiques, de marchés animés et de gratte-ciel futuristes.",
              neighborhoods: ["Hongdae", "Sinchon", "Itaewon", "Gangnam"],
              housing_howto: "Les 'Goshiwon' (petites chambres individuelles) sont une option économique. Les résidences universitaires et les appartements partagés sont courants. Un dépôt de garantie important ('key money') est souvent requis pour les appartements.",
              tips: ["La carte T-money est indispensable pour les métros et les bus.", "Le Wi-Fi public est quasi omniprésent et très rapide.", "Téléchargez les applications Naver Maps et KakaoTalk."],
              emergency: { universal: "112", police: "112", ambulance: "119", fire: "119" },
              health: {
                hospitals: ["Severance Hospital", "Asan Medical Center", "Seoul National University Hospital"],
                note: "L'Assurance Maladie Nationale (NHI) est obligatoire pour les étudiants séjournant plus de 6 mois.",
              },
              services: {
                banks: ["KB Kookmin Bank", "Shinhan Bank", "Woori Bank", "Hana Bank"],
                phone_carriers: ["SK Telecom", "KT", "LG U+"],
              },
              education: {
                universities: ["Seoul National University (SNU)", "Korea University", "Yonsei University", "KAIST"],
              },
              misc: {
                visa_note: "Un visa étudiant (D-2) est nécessaire pour s'inscrire dans un établissement d'enseignement coréen.",
                fun_fact: "Séoul a transformé une ancienne autoroute surélevée en un parc public de 1 km de long appelé le 'Seoullo 7017'.",
              }
            },
            en: {
              name: "Seoul",
              description2: "The dynamic capital of South Korea, Seoul is a hub of technology, fashion, and pop culture. The city offers a unique blend of historic palaces, bustling markets, and futuristic skyscrapers.",
              neighborhoods: ["Hongdae", "Sinchon", "Itaewon", "Gangnam"],
              housing_howto: "'Goshiwon' (small single rooms) are a budget-friendly option. University dorms and shared apartments are common. A significant security deposit ('key money') is often required for apartments.",
              tips: ["The T-money card is essential for subways and buses.", "Public Wi-Fi is nearly ubiquitous and very fast.", "Download Naver Maps and KakaoTalk apps."],
              emergency: { universal: "112", police: "112", ambulance: "119", fire: "119" },
              health: {
                hospitals: ["Severance Hospital", "Asan Medical Center", "Seoul National University Hospital"],
                note: "National Health Insurance (NHI) is mandatory for students staying over 6 months.",
              },
              services: {
                banks: ["KB Kookmin Bank", "Shinhan Bank", "Woori Bank", "Hana Bank"],
                phone_carriers: ["SK Telecom", "KT", "LG U+"],
              },
              education: {
                universities: ["Seoul National University (SNU)", "Korea University", "Yonsei University", "KAIST"],
              },
              misc: {
                visa_note: "A D-2 Student Visa is required for enrollment in a Korean educational institution.",
                fun_fact: "Seoul converted a former elevated highway into a 1km-long public park called 'Seoullo 7017'.",
              }
            },
          },
        },
      ],
    },
    // Singapore
    {
      slug: "singapore",
      nameEn: "Singapore",
      nameFr: "Singapour",
      cities: [
        {
          slug: "singapore-city",
          nameEn: "Singapore",
          nameFr: "Singapour",
          budget: {
            food_per_month_eur: 450,
            housing_flatshare_eur: 900,
            transport_pass_eur: 80,
            beer_pub_eur: 8,
            cinema_eur: 11,
          },
          content: {
            fr: {
              name: "Singapour",
              description2: "Cette cité-État insulaire est un centre financier mondial réputé pour sa propreté, sa sécurité et son multiculturalisme. Avec des universités de premier plan et une économie florissante, c'est un pôle d'attraction pour les talents du monde entier.",
              neighborhoods: ["Tiong Bahru", "Holland Village", "Bugis", "Paya Lebar"],
              housing_howto: "Le logement est très cher. Les résidences universitaires sont l'option la plus abordable. La colocation dans des appartements HDB ou des condos est courante. Les sites comme PropertyGuru sont populaires.",
              tips: ["La carte EZ-Link est utilisée pour tous les transports publics.", "Mangez dans les 'hawker centers' pour une nourriture délicieuse et abordable.", "Respectez les lois strictes, notamment sur la propreté."],
              emergency: { universal: "999", police: "999", ambulance: "995", fire: "995" },
              health: {
                hospitals: ["Singapore General Hospital (SGH)", "National University Hospital (NUH)", "Tan Tock Seng Hospital"],
                note: "Une assurance maladie est obligatoire pour tous les étudiants internationaux et est généralement incluse dans les frais de scolarité.",
              },
              services: {
                banks: ["DBS", "OCBC Bank", "UOB", "Standard Chartered"],
                phone_carriers: ["Singtel", "StarHub", "M1"],
              },
              education: {
                universities: ["National University of Singapore (NUS)", "Nanyang Technological University (NTU)", "Singapore Management University (SMU)"],
              },
              misc: {
                visa_note: "Un 'Student's Pass' est requis pour les étudiants étrangers inscrits à un programme à temps plein.",
                fun_fact: "Singapour abrite la première ménagerie nocturne au monde, le Night Safari, ainsi qu'une cascade intérieure de 40 mètres de haut à l'aéroport de Changi.",
              }
            },
            en: {
              name: "Singapore",
              description2: "This island city-state is a global financial hub known for its cleanliness, safety, and multiculturalism. With top-ranking universities and a thriving economy, it's a magnet for talent worldwide.",
              neighborhoods: ["Tiong Bahru", "Holland Village", "Bugis", "Paya Lebar"],
              housing_howto: "Housing is very expensive. University halls are the most affordable option. Flatsharing in HDB flats or condos is common. Websites like PropertyGuru are popular.",
              tips: ["The EZ-Link card is used for all public transport.", "Eat at hawker centers for delicious and affordable food.", "Respect the strict laws, especially regarding cleanliness."],
              emergency: { universal: "999", police: "999", ambulance: "995", fire: "995" },
              health: {
                hospitals: ["Singapore General Hospital (SGH)", "National University Hospital (NUH)", "Tan Tock Seng Hospital"],
                note: "Health insurance is compulsory for all international students and is usually included in the university fees.",
              },
              services: {
                banks: ["DBS", "OCBC Bank", "UOB", "Standard Chartered"],
                phone_carriers: ["Singtel", "StarHub", "M1"],
              },
              education: {
                universities: ["National University of Singapore (NUS)", "Nanyang Technological University (NTU)", "Singapore Management University (SMU)"],
              },
              misc: {
                visa_note: "A Student's Pass is required for foreign students enrolled in a full-time program.",
                fun_fact: "Singapore is home to the world's first nocturnal zoo, the Night Safari, and a 40-meter-high indoor waterfall at Changi Airport.",
              }
            },
          },
        },
      ],
    },
    // Hong Kong
    {
      slug: "hong-kong",
      nameEn: "Hong Kong",
      nameFr: "Hong Kong",
      cities: [
        {
          slug: "hong-kong-city",
          nameEn: "Hong Kong",
          nameFr: "Hong Kong",
          budget: {
            food_per_month_eur: 400,
            housing_flatshare_eur: 950,
            transport_pass_eur: 60,
            beer_pub_eur: 7,
            cinema_eur: 12,
          },
          content: {
            fr: {
              name: "Hong Kong",
              description2: "Centre financier international dynamique, Hong Kong est célèbre pour sa ligne d'horizon spectaculaire et son port animé. C'est un creuset de cultures où l'Est rencontre l'Ouest, offrant une vie étudiante trépidante.",
              neighborhoods: ["Sheung Wan", "Kennedy Town", "Sham Shui Po", "Sha Tin"],
              housing_howto: "Le logement est extrêmement cher et les espaces sont petits. Les résidences universitaires sont très demandées. La colocation est la norme, mais attendez-vous à des loyers élevés.",
              tips: ["La carte Octopus est un incontournable pour les transports, les achats et plus encore.", "La randonnée est une activité populaire le week-end pour échapper à la jungle urbaine.", "Explorez la cuisine cantonaise dans les 'dai pai dongs'."],
              emergency: { universal: "999", police: "999", ambulance: "999", fire: "999" },
              health: {
                hospitals: ["Queen Mary Hospital", "Hong Kong Sanatorium & Hospital", "Prince of Wales Hospital"],
                note: "Le système de santé public est de haute qualité et peu coûteux, mais une assurance privée est recommandée pour accéder aux services privés plus rapides.",
              },
              services: {
                banks: ["HSBC", "Standard Chartered", "Bank of China (Hong Kong)"],
                phone_carriers: ["CSL", "SmarTone", "3 Hong Kong"],
              },
              education: {
                universities: ["The University of Hong Kong (HKU)", "The Hong Kong University of Science and Technology (HKUST)", "The Chinese University of Hong Kong (CUHK)"],
              },
              misc: {
                visa_note: "Un visa étudiant est requis et doit être parrainé par l'établissement d'enseignement à Hong Kong.",
                fun_fact: "Hong Kong possède le plus grand nombre de gratte-ciel au monde, plus du double de ceux de New York.",
              }
            },
            en: {
              name: "Hong Kong",
              description2: "A dynamic international financial hub, Hong Kong is famous for its dramatic skyline and bustling harbor. It's a melting pot of cultures where East meets West, offering a fast-paced student life.",
              neighborhoods: ["Sheung Wan", "Kennedy Town", "Sham Shui Po", "Sha Tin"],
              housing_howto: "Housing is extremely expensive and spaces are small. University halls are in high demand. Flatsharing is the norm, but expect high rents.",
              tips: ["The Octopus card is a must-have for transport, shopping, and more.", "Hiking is a popular weekend activity to escape the urban jungle.", "Explore Cantonese cuisine at 'dai pai dongs'."],
              emergency: { universal: "999", police: "999", ambulance: "999", fire: "999" },
              health: {
                hospitals: ["Queen Mary Hospital", "Hong Kong Sanatorium & Hospital", "Prince of Wales Hospital"],
                note: "The public healthcare system is high-quality and low-cost, but private insurance is recommended for faster access to private services.",
              },
              services: {
                banks: ["HSBC", "Standard Chartered", "Bank of China (Hong Kong)"],
                phone_carriers: ["CSL", "SmarTone", "3 Hong Kong"],
              },
              education: {
                universities: ["The University of Hong Kong (HKU)", "The Hong Kong University of Science and Technology (HKUST)", "The Chinese University of Hong Kong (CUHK)"],
              },
              misc: {
                visa_note: "A student visa is required and must be sponsored by the educational institution in Hong Kong.",
                fun_fact: "Hong Kong has the largest number of skyscrapers in the world, more than double that of New York City.",
              }
            },
          },
        },
      ],
    },
    // Thailand
    {
      slug: "thailand",
      nameEn: "Thailand",
      nameFr: "Thaïlande",
      cities: [
        {
          slug: "bangkok",
          nameEn: "Bangkok",
          nameFr: "Bangkok",
          budget: {
            food_per_month_eur: 200,
            housing_flatshare_eur: 350,
            transport_pass_eur: 35,
            beer_pub_eur: 2.5,
            cinema_eur: 6,
          },
          content: {
            fr: {
              name: "Bangkok",
              description2: "Mégalopole vibrante, Bangkok est un assaut sensoriel avec ses temples ornés, ses marchés animés et sa vie nocturne trépidante. C'est une ville de contrastes, abordable et pleine d'énergie, parfaite pour les étudiants aventureux.",
              neighborhoods: ["Sukhumvit (Asok, Thong Lo)", "Ari", "Ratchada", "Pinklao"],
              housing_howto: "Le logement est abordable. Les condos avec piscine et salle de sport sont populaires et d'un bon rapport qualité-prix. Les groupes Facebook et les agences locales sont de bonnes ressources.",
              tips: ["Utilisez le BTS (Skytrain) et le MRT (métro) pour éviter les embouteillages.", "La street food est délicieuse, bon marché et partout.", "Apprenez à négocier les prix avec le sourire dans les marchés."],
              emergency: { universal: "112", police: "191", ambulance: "1669", fire: "199" },
              health: {
                hospitals: ["Bumrungrad International Hospital", "Bangkok Hospital", "Siriraj Hospital"],
                note: "Le tourisme médical est important ; les hôpitaux privés offrent d'excellents soins mais sont chers. Une assurance santé est indispensable.",
              },
              services: {
                banks: ["Bangkok Bank", "Kasikorn Bank", "Siam Commercial Bank (SCB)"],
                phone_carriers: ["AIS", "TrueMove H", "DTAC"],
              },
              education: {
                universities: ["Chulalongkorn University", "Mahidol University", "Thammasat University"],
              },
              misc: {
                visa_note: "Un visa étudiant non-immigrant (ED) est nécessaire pour étudier en Thaïlande.",
                fun_fact: "Le nom cérémoniel complet de Bangkok est l'un des plus longs noms de lieu au monde, avec 169 caractères.",
              }
            },
            en: {
              name: "Bangkok",
              description2: "A vibrant megalopolis, Bangkok is a sensory assault with its ornate temples, bustling markets, and electrifying nightlife. It's a city of contrasts, affordable and full of energy, perfect for adventurous students.",
              neighborhoods: ["Sukhumvit (Asok, Thong Lo)", "Ari", "Ratchada", "Pinklao"],
              housing_howto: "Housing is affordable. Condos with pools and gyms are popular and offer good value. Facebook groups and local agents are good resources.",
              tips: ["Use the BTS (Skytrain) and MRT (subway) to beat the traffic.", "Street food is delicious, cheap, and everywhere.", "Learn to bargain with a smile in the markets."],
              emergency: { universal: "112", police: "191", ambulance: "1669", fire: "199" },
              health: {
                hospitals: ["Bumrungrad International Hospital", "Bangkok Hospital", "Siriraj Hospital"],
                note: "Medical tourism is big; private hospitals offer excellent care but are expensive. Health insurance is essential.",
              },
              services: {
                banks: ["Bangkok Bank", "Kasikorn Bank", "Siam Commercial Bank (SCB)"],
                phone_carriers: ["AIS", "TrueMove H", "DTAC"],
              },
              education: {
                universities: ["Chulalongkorn University", "Mahidol University", "Thammasat University"],
              },
              misc: {
                visa_note: "A Non-Immigrant Education (ED) Visa is required to study in Thailand.",
                fun_fact: "Bangkok's full ceremonial name is one of the longest place names in the world, with 169 characters.",
              }
            },
          },
        },
      ],
    },
    // Malaysia
    {
      slug: "malaysia",
      nameEn: "Malaysia",
      nameFr: "Malaisie",
      cities: [
        {
          slug: "kuala-lumpur",
          nameEn: "Kuala Lumpur",
          nameFr: "Kuala Lumpur",
          budget: {
            food_per_month_eur: 180,
            housing_flatshare_eur: 300,
            transport_pass_eur: 30,
            beer_pub_eur: 4,
            cinema_eur: 4,
          },
          content: {
            fr: {
              name: "Kuala Lumpur",
              description2: "Caractérisée par les emblématiques tours Petronas, Kuala Lumpur est une capitale moderne et multiculturelle. C'est l'une des villes les plus abordables d'Asie pour les étudiants, offrant un mélange de cultures malaise, chinoise et indienne.",
              neighborhoods: ["Bangsar", "Damansara", "Subang Jaya", "Mont Kiara"],
              housing_howto: "Le logement est très abordable. Les condos avec d'excellentes installations sont courants. Des sites comme iProperty et PropertyGuru sont les principaux portails de recherche.",
              tips: ["Utilisez Grab (équivalent d'Uber) pour vous déplacer facilement.", "L'anglais est largement parlé, ce qui facilite la communication.", "Explorez la scène culinaire diversifiée, des 'mamaks' aux restaurants haut de gamme."],
              emergency: { universal: "999", police: "999", ambulance: "999", fire: "999" },
              health: {
                hospitals: ["Gleneagles Kuala Lumpur", "Prince Court Medical Centre", "Hospital Kuala Lumpur (public)"],
                note: "Les soins de santé privés sont de haute qualité et relativement abordables. Une assurance santé est fortement recommandée.",
              },
              services: {
                banks: ["Maybank", "CIMB", "Public Bank Berhad"],
                phone_carriers: ["Maxis", "Celcom", "Digi"],
              },
              education: {
                universities: ["University of Malaya (UM)", "Universiti Kebangsaan Malaysia (UKM)", "Taylor's University"],
              },
              misc: {
                visa_note: "Un 'Student Pass' et un visa sont nécessaires pour les étudiants internationaux.",
                fun_fact: "Kuala Lumpur abrite l'un des plus grands centres commerciaux du monde, le 1 Utama, qui compte plus de 700 magasins.",
              }
            },
            en: {
              name: "Kuala Lumpur",
              description2: "Defined by the iconic Petronas Towers, Kuala Lumpur is a modern and multicultural capital. It's one of Asia's most affordable cities for students, offering a blend of Malay, Chinese, and Indian cultures.",
              neighborhoods: ["Bangsar", "Damansara", "Subang Jaya", "Mont Kiara"],
              housing_howto: "Housing is very affordable. Condos with excellent facilities are common. Websites like iProperty and PropertyGuru are the main search portals.",
              tips: ["Use Grab (the Uber equivalent) for easy transportation.", "English is widely spoken, making communication easy.", "Explore the diverse food scene, from 'mamak' stalls to high-end dining."],
              emergency: { universal: "999", police: "999", ambulance: "999", fire: "999" },
              health: {
                hospitals: ["Gleneagles Kuala Lumpur", "Prince Court Medical Centre", "Hospital Kuala Lumpur (public)"],
                note: "Private healthcare is high-quality and relatively affordable. Health insurance is highly recommended.",
              },
              services: {
                banks: ["Maybank", "CIMB", "Public Bank Berhad"],
                phone_carriers: ["Maxis", "Celcom", "Digi"],
              },
              education: {
                universities: ["University of Malaya (UM)", "Universiti Kebangsaan Malaysia (UKM)", "Taylor's University"],
              },
              misc: {
                visa_note: "A Student Pass and visa are required for international students.",
                fun_fact: "Kuala Lumpur is home to one of the world's largest shopping malls, 1 Utama, which has over 700 stores.",
              }
            },
          },
        },
      ],
    },
    // Taiwan
    {
      slug: "taiwan",
      nameEn: "Taiwan",
      nameFr: "Taïwan",
      cities: [
        {
          slug: "taipei",
          nameEn: "Taipei",
          nameFr: "Taipei",
          budget: {
            food_per_month_eur: 250,
            housing_flatshare_eur: 500,
            transport_pass_eur: 40,
            beer_pub_eur: 3,
            cinema_eur: 8,
          },
          content: {
            fr: {
              name: "Taipei",
              description2: "Capitale de Taïwan, Taipei est une métropole moderne et sûre, célèbre pour ses marchés nocturnes animés, sa gastronomie et son hospitalité. C'est un centre technologique majeur avec un coût de la vie modéré.",
              neighborhoods: ["Da'an", "Xinyi", "Gongguan", "Shida"],
              housing_howto: "La colocation est courante. Les groupes Facebook comme 'Looking for Roommates or Apartments in Taipei' sont très actifs. Les prix sont modérés par rapport à d'autres capitales asiatiques.",
              tips: ["La carte EasyCard est essentielle pour le MRT, les bus et même les achats.", "Explorez les marchés nocturnes pour des repas bon marché et délicieux ('xiao chi').", "YouBike est un excellent système de vélos en libre-service."],
              emergency: { universal: "112", police: "110", ambulance: "119", fire: "119" },
              health: {
                hospitals: ["National Taiwan University Hospital", "Taipei Veterans General Hospital"],
                note: "L'Assurance Maladie Nationale (NHI) de Taïwan est réputée et obligatoire pour les étudiants étrangers séjournant plus de 6 mois.",
              },
              services: {
                banks: ["Bank of Taiwan", "CTBC Bank", "Cathay United Bank"],
                phone_carriers: ["Chunghwa Telecom", "Taiwan Mobile", "Far EasTone"],
              },
              education: {
                universities: ["National Taiwan University (NTU)", "National Chengchi University (NCCU)", "National Taiwan Normal University (NTNU)"],
              },
              misc: {
                visa_note: "Un visa de résident à des fins d'études est requis, qui est ensuite converti en une 'Alien Resident Card' (ARC) après l'arrivée.",
                fun_fact: "Le Taipei 101 a été le premier gratte-ciel au monde à dépasser le demi-kilomètre de hauteur et possède l'un des ascenseurs les plus rapides du monde.",
              }
            },
            en: {
              name: "Taipei",
              description2: "The capital of Taiwan, Taipei is a safe, modern metropolis famous for its bustling night markets, delicious food, and friendly people. It's a major tech hub with a moderate cost of living.",
              neighborhoods: ["Da'an", "Xinyi", "Gongguan", "Shida"],
              housing_howto: "Flatsharing is common. Facebook groups like 'Looking for Roommates or Apartments in Taipei' are very active. Prices are moderate compared to other Asian capitals.",
              tips: ["The EasyCard is essential for the MRT, buses, and even shopping.", "Explore the night markets for cheap and delicious meals ('xiao chi').", "YouBike is an excellent public bike-sharing system."],
              emergency: { universal: "112", police: "110", ambulance: "119", fire: "119" },
              health: {
                hospitals: ["National Taiwan University Hospital", "Taipei Veterans General Hospital"],
                note: "Taiwan's National Health Insurance (NHI) is world-renowned and mandatory for foreign students staying over 6 months.",
              },
              services: {
                banks: ["Bank of Taiwan", "CTBC Bank", "Cathay United Bank"],
                phone_carriers: ["Chunghwa Telecom", "Taiwan Mobile", "Far EasTone"],
              },
              education: {
                universities: ["National Taiwan University (NTU)", "National Chengchi University (NCCU)", "National Taiwan Normal University (NTNU)"],
              },
              misc: {
                visa_note: "A Resident Visa for studying is required, which is then converted into an Alien Resident Card (ARC) after arrival.",
                fun_fact: "Taipei 101 was the world's first skyscraper to exceed half a kilometer in height and has one of the world's fastest elevators.",
              }
            },
          },
        },
      ],
    },
    // China
    {
      slug: "china",
      nameEn: "China",
      nameFr: "Chine",
      cities: [
        {
          slug: "shanghai",
          nameEn: "Shanghai",
          nameFr: "Shanghai",
          budget: {
            food_per_month_eur: 300,
            housing_flatshare_eur: 700,
            transport_pass_eur: 30,
            beer_pub_eur: 5,
            cinema_eur: 9,
          },
          content: {
            fr: {
              name: "Shanghai",
              description2: "Le centre financier et commercial de la Chine, Shanghai est une métropole futuriste avec une touche d'histoire. Sa ligne d'horizon emblématique, ses quartiers animés et son environnement international en font un lieu d'étude passionnant.",
              neighborhoods: ["French Concession (Xuhui)", "Jing'an", "Pudong", "Yangpu"],
              housing_howto: "Les résidences universitaires sont l'option la plus simple. Pour les appartements privés, les loyers sont élevés. Utilisez une agence de confiance et préparez-vous à une caution importante. La colocation est très répandue.",
              tips: ["WeChat et Alipay sont indispensables pour les paiements quotidiens.", "Le métro est efficace et peu cher.", "Un VPN est nécessaire pour accéder à de nombreux sites web et applications occidentaux."],
              emergency: { universal: "112", police: "110", ambulance: "120", fire: "119" },
              health: {
                hospitals: ["Huashan Hospital", "Shanghai United Family Hospital", "Ruijin Hospital"],
                note: "Une assurance santé complète est obligatoire pour les étudiants internationaux. Les hôpitaux internationaux offrent des services en anglais mais sont très chers.",
              },
              services: {
                banks: ["Bank of China", "ICBC", "China Construction Bank"],
                phone_carriers: ["China Mobile", "China Unicom", "China Telecom"],
              },
              education: {
                universities: ["Fudan University", "Shanghai Jiao Tong University", "Tongji University", "NYU Shanghai"],
              },
              misc: {
                visa_note: "Un visa étudiant (X1 pour les longs séjours, X2 pour les courts séjours) est requis avant l'entrée en Chine.",
                fun_fact: "Le système de métro de Shanghai est le plus long du monde, s'étendant sur plus de 800 kilomètres.",
              }
            },
            en: {
              name: "Shanghai",
              description2: "China's financial and commercial heart, Shanghai is a futuristic metropolis with a historical flair. Its iconic skyline, bustling neighborhoods, and international environment make it an exciting place to study.",
              neighborhoods: ["French Concession (Xuhui)", "Jing'an", "Pudong", "Yangpu"],
              housing_howto: "University dorms are the easiest option. For private apartments, rent is high. Use a trusted agent and be prepared for a large deposit. Flatsharing is very common.",
              tips: ["WeChat and Alipay are essential for daily payments.", "The metro system is efficient and cheap.", "A VPN is necessary to access many Western websites and apps."],
              emergency: { universal: "112", police: "110", ambulance: "120", fire: "119" },
              health: {
                hospitals: ["Huashan Hospital", "Shanghai United Family Hospital", "Ruijin Hospital"],
                note: "Comprehensive health insurance is mandatory for international students. International hospitals offer English services but are very expensive.",
              },
              services: {
                banks: ["Bank of China", "ICBC", "China Construction Bank"],
                phone_carriers: ["China Mobile", "China Unicom", "China Telecom"],
              },
              education: {
                universities: ["Fudan University", "Shanghai Jiao Tong University", "Tongji University", "NYU Shanghai"],
              },
              misc: {
                visa_note: "A student visa (X1 for long-term, X2 for short-term) is required before entering China.",
                fun_fact: "The Shanghai Metro system is the longest in the world, spanning over 800 kilometers.",
              }
            },
          },
        },
      ],
    },
    // Vietnam
    {
      slug: "vietnam",
      nameEn: "Vietnam",
      nameFr: "Viêt Nam",
      cities: [
        {
          slug: "ho-chi-minh-city",
          nameEn: "Ho Chi Minh City",
          nameFr: "Hô Chi Minh-Ville",
          budget: {
            food_per_month_eur: 170,
            housing_flatshare_eur: 280,
            transport_pass_eur: 20,
            beer_pub_eur: 1.5,
            cinema_eur: 4,
          },
          content: {
            fr: {
              name: "Hô Chi Minh-Ville",
              description2: "Autrefois connue sous le nom de Saigon, Hô Chi Minh-Ville est le centre économique animé du Viêt Nam. C'est une ville d'énergie et de commerce, connue pour sa culture de la moto, sa cuisine de rue et son histoire fascinante.",
              neighborhoods: ["District 1", "District 2 (Thao Dien)", "District 3", "Binh Thanh"],
              housing_howto: "Le logement est très abordable. Les appartements avec services et la colocation sont des options populaires. Les groupes d'expatriés sur Facebook sont le meilleur moyen de trouver un logement.",
              tips: ["Utilisez Grab ou Gojek pour le transport en moto-taxi.", "Apprenez à traverser la rue dans un flot constant de motos.", "Le café vietnamien est un incontournable."],
              emergency: { universal: "112", police: "113", ambulance: "115", fire: "114" },
              health: {
                hospitals: ["FV Hospital", "City International Hospital", "Cho Ray Hospital (public)"],
                note: "Les hôpitaux internationaux privés sont recommandés pour les étrangers. Une assurance santé complète est cruciale.",
              },
              services: {
                banks: ["Vietcombank", "Techcombank", "HSBC Vietnam"],
                phone_carriers: ["Viettel", "MobiFone", "Vinaphone"],
              },
              education: {
                universities: ["Vietnam National University Ho Chi Minh City (VNU-HCM)", "RMIT University Vietnam", "Ton Duc Thang University"],
              },
              misc: {
                visa_note: "Un visa étudiant est nécessaire et doit être organisé par l'université ou l'école de langue.",
                fun_fact: "Hô Chi Minh-Ville compte environ 7,3 millions de motos, ce qui en fait l'une des villes avec la plus forte densité de motos au monde.",
              }
            },
            en: {
              name: "Ho Chi Minh City",
              description2: "Formerly known as Saigon, Ho Chi Minh City is Vietnam's bustling economic hub. It's a city of energy and commerce, known for its motorbike culture, street food, and fascinating history.",
              neighborhoods: ["District 1", "District 2 (Thao Dien)", "District 3", "Binh Thanh"],
              housing_howto: "Housing is very affordable. Serviced apartments and flatshares are popular options. Expat groups on Facebook are the best way to find a place.",
              tips: ["Use Grab or Gojek for motorbike taxi transport.", "Learn to cross the street amid a constant flow of motorbikes.", "Vietnamese coffee is a must-try."],
              emergency: { universal: "112", police: "113", ambulance: "115", fire: "114" },
              health: {
                hospitals: ["FV Hospital", "City International Hospital", "Cho Ray Hospital (public)"],
                note: "Private international hospitals are recommended for foreigners. Comprehensive health insurance is crucial.",
              },
              services: {
                banks: ["Vietcombank", "Techcombank", "HSBC Vietnam"],
                phone_carriers: ["Viettel", "MobiFone", "Vinaphone"],
              },
              education: {
                universities: ["Vietnam National University Ho Chi Minh City (VNU-HCM)", "RMIT University Vietnam", "Ton Duc Thang University"],
              },
              misc: {
                visa_note: "A student visa is required and must be arranged through the university or language school.",
                fun_fact: "Ho Chi Minh City has an estimated 7.3 million motorbikes, making it one of the cities with the highest motorbike density in the world.",
              }
            },
          },
        },
      ],
    },
    // Philippines
    {
      slug: "philippines",
      nameEn: "Philippines",
      nameFr: "Philippines",
      cities: [
        {
          slug: "manila",
          nameEn: "Manila",
          nameFr: "Manille",
          budget: {
            food_per_month_eur: 180,
            housing_flatshare_eur: 250,
            transport_pass_eur: 25,
            beer_pub_eur: 1.5,
            cinema_eur: 5,
          },
          content: {
            fr: {
              name: "Manille",
              description2: "Capitale tentaculaire des Philippines, Manille est une métropole animée et densément peuplée. Connue pour son mélange d'architecture coloniale espagnole et de gratte-ciel modernes, elle offre une expérience culturelle unique et un coût de la vie très bas.",
              neighborhoods: ["Makati", "Bonifacio Global City (BGC)", "Quezon City (Katipunan)", "Ortigas Center"],
              housing_howto: "La colocation dans des condominiums est très courante et abordable, en particulier dans des zones comme Makati ou BGC. Des portails comme Lamudi ou des groupes Facebook sont utiles.",
              tips: ["L'anglais est une langue officielle et est largement parlé.", "Grab est l'application de VTC la plus populaire.", "Soyez préparé aux embouteillages, qui peuvent être extrêmes."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["St. Luke's Medical Center", "Makati Medical Center", "The Medical City"],
                note: "Le niveau des soins de santé est bon dans les hôpitaux privés des grandes villes, mais une assurance est essentielle car les coûts peuvent être élevés.",
              },
              services: {
                banks: ["BDO Unibank", "Bank of the Philippine Islands (BPI)", "Metrobank"],
                phone_carriers: ["Globe Telecom", "Smart Communications"],
              },
              education: {
                universities: ["University of the Philippines Diliman (UP)", "Ateneo de Manila University (ADMU)", "De La Salle University (DLSU)"],
              },
              misc: {
                visa_note: "Un visa étudiant (9f) est requis pour les étrangers souhaitant étudier aux Philippines.",
                fun_fact: "Manille abrite le plus ancien quartier chinois du monde, Binondo, fondé en 1594.",
              }
            },
            en: {
              name: "Manila",
              description2: "The sprawling capital of the Philippines, Manila is a bustling and densely populated metropolis. Known for its mix of Spanish colonial architecture and modern skyscrapers, it offers a unique cultural experience and a very low cost of living.",
              neighborhoods: ["Makati", "Bonifacio Global City (BGC)", "Quezon City (Katipunan)", "Ortigas Center"],
              housing_howto: "Sharing a condominium unit is very common and affordable, especially in areas like Makati or BGC. Portals like Lamudi or Facebook groups are useful.",
              tips: ["English is an official language and is widely spoken.", "Grab is the most popular ride-hailing app.", "Be prepared for the traffic, which can be extreme."],
              emergency: { universal: "911", police: "911", ambulance: "911", fire: "911" },
              health: {
                hospitals: ["St. Luke's Medical Center", "Makati Medical Center", "The Medical City"],
                note: "Healthcare standards are good in private hospitals in major cities, but insurance is essential as costs can be high.",
              },
              services: {
                banks: ["BDO Unibank", "Bank of the Philippine Islands (BPI)", "Metrobank"],
                phone_carriers: ["Globe Telecom", "Smart Communications"],
              },
              education: {
                universities: ["University of the Philippines Diliman (UP)", "Ateneo de Manila University (ADMU)", "De La Salle University (DLSU)"],
              },
              misc: {
                visa_note: "A 9(f) Student Visa is required for foreign nationals wishing to study in the Philippines.",
                fun_fact: "Manila is home to the world's oldest Chinatown, Binondo, which was established in 1594.",
              }
            },
          },
        },
      ],
    },
  ],
},

// Add this new Africa object to your main 'destinations' array
{
  slug: "africa",
  nameEn: "Africa",
  nameFr: "Afrique",
  countries: [
    // Egypt
    {
      slug: "egypt",
      nameEn: "Egypt",
      nameFr: "Égypte",
      cities: [
        {
          slug: "cairo",
          nameEn: "Cairo",
          nameFr: "Le Caire",
          budget: {
            food_per_month_eur: 150,
            housing_flatshare_eur: 350,
            transport_pass_eur: 20,
            beer_pub_eur: 2.5,
            cinema_eur: 5,
          },
          content: {
            fr: {
              name: "Le Caire",
              description2: "Plus grande ville d'Afrique et du monde arabe, Le Caire est une métropole tentaculaire où l'histoire ancienne rencontre une modernité trépidante. C'est un centre d'apprentissage islamique et de culture régionale.",
              neighborhoods: ["Zamalek", "Maadi", "Heliopolis", "Downtown"],
              housing_howto: "Le logement est très abordable. La colocation est courante dans les quartiers d'expatriés comme Zamalek et Maadi. Les groupes Facebook et les agences locales sont de bonnes ressources.",
              tips: ["Utilisez Uber ou Careem pour des déplacements fiables et à prix fixe.", "Apprenez quelques mots d'arabe égyptien, cela sera très apprécié.", "Soyez prêt pour une circulation intense et un rythme de vie trépidant."],
              emergency: { universal: "112", police: "122", ambulance: "123", fire: "180" },
              health: {
                hospitals: ["As-Salam International Hospital", "Cleopatra Hospital", "Anglo American Hospital"],
                note: "Les hôpitaux privés offrent des soins de meilleure qualité que le secteur public. Une assurance santé internationale est fortement recommandée.",
              },
              services: {
                banks: ["National Bank of Egypt (NBE)", "CIB", "Banque Misr", "HSBC Egypt"],
                phone_carriers: ["Vodafone Egypt", "Orange Egypt", "Etisalat", "WE"],
              },
              education: {
                universities: ["Cairo University", "The American University in Cairo (AUC)", "Ain Shams University"],
              },
              misc: {
                visa_note: "Un visa étudiant doit être obtenu, généralement converti à partir d'un visa touristique après l'arrivée et l'inscription.",
                fun_fact: "Le Caire est la seule ville au monde qui abrite encore l'une des sept merveilles du monde antique, la Grande Pyramide de Gizeh, située à sa périphérie.",
              }
            },
            en: {
              name: "Cairo",
              description2: "The largest city in Africa and the Arab world, Cairo is a sprawling metropolis where ancient history meets a bustling present. It's a center of Islamic learning and regional culture.",
              neighborhoods: ["Zamalek", "Maadi", "Heliopolis", "Downtown"],
              housing_howto: "Housing is very affordable. Flatsharing is common in expat-friendly neighborhoods like Zamalek and Maadi. Facebook groups and local agents are good resources.",
              tips: ["Use Uber or Careem for reliable, fixed-price transportation.", "Learn a few words of Egyptian Arabic; it will be greatly appreciated.", "Be prepared for intense traffic and a fast-paced lifestyle."],
              emergency: { universal: "112", police: "122", ambulance: "123", fire: "180" },
              health: {
                hospitals: ["As-Salam International Hospital", "Cleopatra Hospital", "Anglo American Hospital"],
                note: "Private hospitals offer a higher standard of care than the public sector. International health insurance is highly recommended.",
              },
              services: {
                banks: ["National Bank of Egypt (NBE)", "CIB", "Banque Misr", "HSBC Egypt"],
                phone_carriers: ["Vodafone Egypt", "Orange Egypt", "Etisalat", "WE"],
              },
              education: {
                universities: ["Cairo University", "The American University in Cairo (AUC)", "Ain Shams University"],
              },
              misc: {
                visa_note: "A student visa is required, which is typically converted from a tourist visa after arrival and registration.",
                fun_fact: "Cairo is the only city in the world that still has one of the Seven Wonders of the Ancient World, the Great Pyramid of Giza, on its outskirts.",
              }
            },
          },
        },
      ],
    },
    // South Africa
    {
      slug: "south-africa",
      nameEn: "South Africa",
      nameFr: "Afrique du Sud",
      cities: [
        {
          slug: "cape-town",
          nameEn: "Cape Town",
          nameFr: "Le Cap",
          budget: {
            food_per_month_eur: 250,
            housing_flatshare_eur: 550,
            transport_pass_eur: 35,
            beer_pub_eur: 2,
            cinema_eur: 6,
          },
          content: {
            fr: {
              name: "Le Cap",
              description2: "Nichée entre l'océan et l'emblématique Montagne de la Table, Le Cap est réputée pour sa beauté naturelle spectaculaire. C'est une ville créative, multiculturelle, avec une histoire complexe et une scène culinaire de classe mondiale.",
              neighborhoods: ["Gardens", "Observatory", "Sea Point", "Rondebosch"],
              housing_howto: "La colocation est très courante. Le quartier d'Observatory est populaire auprès des étudiants. Utilisez des sites comme Property24 et des groupes Facebook pour trouver des offres.",
              tips: ["Utilisez Uber ou Bolt pour vous déplacer, surtout la nuit.", "Le service de bus MyCiTi est efficace dans le centre-ville.", "Profitez des activités de plein air : randonnée, surf et exploration de la péninsule du Cap."],
              emergency: { universal: "112", police: "10111", ambulance: "10177", fire: "10177" },
              health: {
                hospitals: ["Netcare Christiaan Barnard Memorial Hospital", "Mediclinic Cape Town", "Groote Schuur Hospital (public)"],
                note: "Le système de santé privé est d'un niveau très élevé. Une assurance maladie est obligatoire pour les étudiants internationaux.",
              },
              services: {
                banks: ["FNB", "Standard Bank", "Absa", "Nedbank", "Capitec"],
                phone_carriers: ["Vodacom", "MTN", "Telkom", "Cell C"],
              },
              education: {
                universities: ["University of Cape Town (UCT)", "Stellenbosch University (nearby)", "University of the Western Cape (UWC)"],
              },
              misc: {
                visa_note: "Un permis d'études ('study permit') doit être obtenu auprès d'une mission sud-africaine avant le voyage.",
                fun_fact: "Le Cap abrite le plus grand nombre d'espèces de plantes endémiques au monde au sein du Royaume floral du Cap, un site du patrimoine mondial de l'UNESCO.",
              }
            },
            en: {
              name: "Cape Town",
              description2: "Nestled between the ocean and the iconic Table Mountain, Cape Town is renowned for its dramatic natural beauty. It's a creative, multicultural city with a complex history and a world-class food scene.",
              neighborhoods: ["Gardens", "Observatory", "Sea Point", "Rondebosch"],
              housing_howto: "Flatsharing is very common. The Observatory neighborhood is popular with students. Use websites like Property24 and Facebook groups to find listings.",
              tips: ["Use Uber or Bolt for transportation, especially at night.", "The MyCiTi bus service is efficient within the city bowl.", "Take advantage of the outdoor activities: hiking, surfing, and exploring the Cape Peninsula."],
              emergency: { universal: "112", police: "10111", ambulance: "10177", fire: "10177" },
              health: {
                hospitals: ["Netcare Christiaan Barnard Memorial Hospital", "Mediclinic Cape Town", "Groote Schuur Hospital (public)"],
                note: "The private healthcare system is of a very high standard. Medical insurance is mandatory for international students.",
              },
              services: {
                banks: ["FNB", "Standard Bank", "Absa", "Nedbank", "Capitec"],
                phone_carriers: ["Vodacom", "MTN", "Telkom", "Cell C"],
              },
              education: {
                universities: ["University of Cape Town (UCT)", "Stellenbosch University (nearby)", "University of the Western Cape (UWC)"],
              },
              misc: {
                visa_note: "A study permit must be obtained from a South African mission abroad before you travel.",
                fun_fact: "Cape Town is home to the highest concentration of endemic plant species in the world within the Cape Floral Kingdom, a UNESCO World Heritage site.",
              }
            },
          },
        },
      ],
    },
    // Kenya
    {
      slug: "kenya",
      nameEn: "Kenya",
      nameFr: "Kenya",
      cities: [
        {
          slug: "nairobi",
          nameEn: "Nairobi",
          nameFr: "Nairobi",
          budget: {
            food_per_month_eur: 220,
            housing_flatshare_eur: 500,
            transport_pass_eur: 30,
            beer_pub_eur: 2,
            cinema_eur: 6,
          },
          content: {
            fr: {
              name: "Nairobi",
              description2: "Surnommée la 'Silicon Savannah', Nairobi est la capitale dynamique et le centre technologique de l'Afrique de l'Est. C'est une ville de contrastes, avec une vie sauvage unique à ses portes et un esprit d'entreprise en plein essor.",
              neighborhoods: ["Kilimani", "Lavington", "Westlands", "Karen"],
              housing_howto: "La colocation dans des appartements sécurisés est la norme. Les prix varient considérablement selon le quartier. Les agents immobiliers locaux et les groupes d'expatriés en ligne sont les meilleures ressources.",
              tips: ["Utilisez des applications de VTC comme Uber et Bolt.", "Le paiement mobile M-Pesa est omniprésent et essentiel pour les transactions quotidiennes.", "Le trafic peut être extrême, planifiez vos déplacements en tenant compte des 'jams'."],
              emergency: { universal: "112", police: "999", ambulance: "999", fire: "999" },
              health: {
                hospitals: ["The Nairobi Hospital", "Aga Khan University Hospital", "Karen Hospital"],
                note: "Les hôpitaux privés offrent des soins de santé de qualité. Une assurance santé complète est indispensable pour les étudiants.",
              },
              services: {
                banks: ["KCB Bank", "Equity Bank", "Standard Chartered Kenya", "Absa Bank Kenya"],
                phone_carriers: ["Safaricom", "Airtel", "Telkom Kenya"],
              },
              education: {
                universities: ["University of Nairobi", "Kenyatta University", "Strathmore University"],
              },
              misc: {
                visa_note: "Un permis d'étudiant ('Student's Pass') est requis et doit être demandé via le portail gouvernemental en ligne.",
                fun_fact: "Nairobi est la seule capitale au monde à posséder un parc national (le parc national de Nairobi) où l'on peut voir des lions, des girafes et des rhinocéros en liberté avec les gratte-ciel de la ville en arrière-plan.",
              }
            },
            en: {
              name: "Nairobi",
              description2: "Nicknamed the 'Silicon Savannah,' Nairobi is East Africa's vibrant capital and tech hub. It is a city of contrasts, with unique wildlife on its doorstep and a booming entrepreneurial spirit.",
              neighborhoods: ["Kilimani", "Lavington", "Westlands", "Karen"],
              housing_howto: "Flatsharing in secure apartment compounds is standard. Prices vary significantly by neighborhood. Local property agents and online expat groups are the best resources.",
              tips: ["Use ride-hailing apps like Uber and Bolt.", "M-Pesa mobile money is ubiquitous and essential for daily transactions.", "Traffic can be extreme; plan your travel around the 'jams'."],
              emergency: { universal: "112", police: "999", ambulance: "999", fire: "999" },
              health: {
                hospitals: ["The Nairobi Hospital", "Aga Khan University Hospital", "Karen Hospital"],
                note: "Private hospitals offer quality healthcare. Comprehensive health insurance is a must for students.",
              },
              services: {
                banks: ["KCB Bank", "Equity Bank", "Standard Chartered Kenya", "Absa Bank Kenya"],
                phone_carriers: ["Safaricom", "Airtel", "Telkom Kenya"],
              },
              education: {
                universities: ["University of Nairobi", "Kenyatta University", "Strathmore University"],
              },
              misc: {
                visa_note: "A Student's Pass is required and must be applied for through the government's online portal.",
                fun_fact: "Nairobi is the only capital city in the world with a national park (Nairobi National Park) where you can see free-roaming lions, giraffes, and rhinos with city skyscrapers in the background.",
              }
            },
          },
        },
      ],
    },
    // Nigeria
    {
      slug: "nigeria",
      nameEn: "Nigeria",
      nameFr: "Nigéria",
      cities: [
        {
          slug: "lagos",
          nameEn: "Lagos",
          nameFr: "Lagos",
          budget: {
            food_per_month_eur: 300,
            housing_flatshare_eur: 700,
            transport_pass_eur: 40,
            beer_pub_eur: 2,
            cinema_eur: 7,
          },
          content: {
            fr: {
              name: "Lagos",
              description2: "Plus grande ville d'Afrique, Lagos est le centre économique et culturel animé du Nigéria. C'est une mégapole pleine d'énergie, connue pour sa scène musicale (Afrobeats), son industrie cinématographique (Nollywood) et son esprit d'entreprise incessant.",
              neighborhoods: ["Victoria Island (VI)", "Lekki", "Ikoyi", "Yaba"],
              housing_howto: "Le logement pour expatriés dans des zones comme VI ou Lekki est cher. La colocation est une option pour réduire les coûts. Il est essentiel de faire appel à un agent de confiance pour naviguer sur le marché.",
              tips: ["Le trafic ('go-slow') est légendaire ; vivez près de votre université si possible.", "Uber et Bolt sont les moyens de transport les plus sûrs.", "L'énergie de la ville est contagieuse, plongez dans sa scène musicale et artistique."],
              emergency: { universal: "112", police: "112", ambulance: "112", fire: "112" },
              health: {
                hospitals: ["Reddington Hospital", "St. Nicholas Hospital", "Lagoon Hospitals"],
                note: "Les soins de santé privés sont la norme pour les expatriés et les classes moyennes. Une assurance santé robuste est indispensable.",
              },
              services: {
                banks: ["Access Bank", "Guaranty Trust Bank (GTB)", "Zenith Bank", "UBA"],
                phone_carriers: ["MTN", "Airtel", "Glo", "9mobile"],
              },
              education: {
                universities: ["University of Lagos", "Lagos State University", "Pan-Atlantic University"],
              },
              misc: {
                visa_note: "Un visa d'étudiant (Subject to Regularization - STR) est requis et doit être obtenu avant de voyager.",
                fun_fact: "L'industrie cinématographique nigériane, 'Nollywood', est la deuxième plus grande au monde en termes de volume de production de films, après Bollywood en Inde.",
              }
            },
            en: {
              name: "Lagos",
              description2: "Africa's largest city, Lagos is Nigeria's bustling economic and cultural heart. It's a megacity of raw energy, known for its music scene (Afrobeats), film industry (Nollywood), and relentless hustle.",
              neighborhoods: ["Victoria Island (VI)", "Lekki", "Ikoyi", "Yaba"],
              housing_howto: "Expat-standard housing in areas like VI or Lekki is expensive. Sharing an apartment is an option to cut costs. Using a trusted agent is essential to navigate the market.",
              tips: ["Traffic ('go-slow') is legendary; live near your university if possible.", "Uber and Bolt are the safest modes of transport.", "The city's energy is infectious; dive into its music and art scenes."],
              emergency: { universal: "112", police: "112", ambulance: "112", fire: "112" },
              health: {
                hospitals: ["Reddington Hospital", "St. Nicholas Hospital", "Lagoon Hospitals"],
                note: "Private healthcare is the standard for expats and the middle class. Robust health insurance is a necessity.",
              },
              services: {
                banks: ["Access Bank", "Guaranty Trust Bank (GTB)", "Zenith Bank", "UBA"],
                phone_carriers: ["MTN", "Airtel", "Glo", "9mobile"],
              },
              education: {
                universities: ["University of Lagos", "Lagos State University", "Pan-Atlantic University"],
              },
              misc: {
                visa_note: "A Subject to Regularization (STR) student visa is required and must be obtained before travel.",
                fun_fact: "Nigeria's film industry, 'Nollywood', is the second-largest in the world by film output volume, after India's Bollywood.",
              }
            },
          },
        },
      ],
    },
    // Ghana
    {
      slug: "ghana",
      nameEn: "Ghana",
      nameFr: "Ghana",
      cities: [
        {
          slug: "accra",
          nameEn: "Accra",
          nameFr: "Accra",
          budget: {
            food_per_month_eur: 250,
            housing_flatshare_eur: 600,
            transport_pass_eur: 35,
            beer_pub_eur: 1.5,
            cinema_eur: 8,
          },
          content: {
            fr: {
              name: "Accra",
              description2: "Capitale du Ghana, Accra est une ville côtière animée, connue pour son atmosphère amicale, sa stabilité politique et sa scène culturelle et créative en plein essor. C'est une porte d'entrée populaire vers l'Afrique de l'Ouest.",
              neighborhoods: ["Osu", "Cantonments", "Labone", "East Legon"],
              housing_howto: "La demande de paiement d'un an de loyer d'avance est courante, bien que cela change. La colocation est populaire. Utilisez des agents locaux ou des plateformes en ligne comme Meqasa.",
              tips: ["Uber et Bolt sont largement disponibles.", "Apprenez à négocier les prix sur les marchés.", "Explorez la vie nocturne animée et les plages de la ville."],
              emergency: { universal: "112", police: "191", ambulance: "193", fire: "192" },
              health: {
                hospitals: ["Korle Bu Teaching Hospital (public)", "37 Military Hospital", "Nyaho Medical Centre"],
                note: "Les cliniques et hôpitaux privés offrent des soins de santé fiables. Assurez-vous d'avoir une assurance santé complète.",
              },
              services: {
                banks: ["Ecobank", "GCB Bank", "Stanbic Bank", "Absa Bank Ghana"],
                phone_carriers: ["MTN", "Vodafone", "AirtelTigo"],
              },
              education: {
                universities: ["University of Ghana", "Ashesi University", "Kwame Nkrumah University of Science and Technology (KNUST, in Kumasi)"],
              },
              misc: {
                visa_note: "Un visa d'étudiant est requis et doit être obtenu avant l'arrivée. Le processus peut nécessiter une lettre d'acceptation de l'université.",
                fun_fact: "Accra abrite le marché de Makola, l'un des marchés en plein air les plus dynamiques d'Afrique de l'Ouest, géré presque entièrement par des femmes commerçantes.",
              }
            },
            en: {
              name: "Accra",
              description2: "The capital of Ghana, Accra is a bustling coastal city known for its friendly atmosphere, political stability, and thriving creative and cultural scene. It's a popular gateway to West Africa.",
              neighborhoods: ["Osu", "Cantonments", "Labone", "East Legon"],
              housing_howto: "Demands for one year's rent in advance are common, though this is changing. Flatsharing is popular. Use local agents or online platforms like Meqasa.",
              tips: ["Uber and Bolt are widely available.", "Learn to bargain for prices in the markets.", "Explore the city's vibrant nightlife and beaches."],
              emergency: { universal: "112", police: "191", ambulance: "193", fire: "192" },
              health: {
                hospitals: ["Korle Bu Teaching Hospital (public)", "37 Military Hospital", "Nyaho Medical Centre"],
                note: "Private clinics and hospitals offer reliable healthcare. Ensure you have comprehensive health insurance.",
              },
              services: {
                banks: ["Ecobank", "GCB Bank", "Stanbic Bank", "Absa Bank Ghana"],
                phone_carriers: ["MTN", "Vodafone", "AirtelTigo"],
              },
              education: {
                universities: ["University of Ghana", "Ashesi University", "Kwame Nkrumah University of Science and Technology (KNUST, in Kumasi)"],
              },
              misc: {
                visa_note: "A student visa is required and must be obtained before arrival. The process may require an acceptance letter from the university.",
                fun_fact: "Accra is home to Makola Market, one of West Africa's most vibrant open-air markets, which is run almost entirely by female traders.",
              }
            },
          },
        },
      ],
    },
    // Senegal
    {
      slug: "senegal",
      nameEn: "Senegal",
      nameFr: "Sénégal",
      cities: [
        {
          slug: "dakar",
          nameEn: "Dakar",
          nameFr: "Dakar",
          budget: {
            food_per_month_eur: 230,
            housing_flatshare_eur: 500,
            transport_pass_eur: 25,
            beer_pub_eur: 2,
            cinema_eur: 6,
          },
          content: {
            fr: {
              name: "Dakar",
              description2: "Capitale du Sénégal, Dakar est une métropole portuaire dynamique sur la côte atlantique, connue pour sa scène artistique et musicale florissante. C'est un centre majeur de la culture et de la diplomatie en Afrique de l'Ouest francophone.",
              neighborhoods: ["Plateau", "Almadies", "Mermoz", "Ngor"],
              housing_howto: "La colocation est une option économique. Les prix sont plus élevés dans les quartiers chics comme Almadies. Les annonces se trouvent souvent via le bouche-à-oreille et les groupes d'expatriés en ligne.",
              tips: ["La langue officielle est le français, mais apprendre quelques mots de wolof est très apprécié.", "Les 'cars rapides' et les bus 'Dakar Dem Dikk' sont les transports locaux.", "Profitez du poisson frais et de la cuisine sénégalaise comme le Thieboudienne."],
              emergency: { universal: "17", police: "17", ambulance: "18", fire: "18" },
              health: {
                hospitals: ["Hôpital Principal de Dakar", "Hôpital Le Dantec", "Clinique de la Madeleine"],
                note: "Les cliniques privées offrent de meilleurs soins que les hôpitaux publics. Une assurance santé avec option d'évacuation est recommandée.",
              },
              services: {
                banks: ["Société Générale (SGBS)", "Ecobank", "CBAO Attijariwafa Bank", "BICIS"],
                phone_carriers: ["Orange", "Free", "Expresso"],
              },
              education: {
                universities: ["Université Cheikh Anta Diop (UCAD)", "Université Gaston Berger (in Saint-Louis)", "Suffolk University Dakar Campus"],
              },
              misc: {
                visa_note: "Un visa d'étudiant est nécessaire pour les séjours de plus de 90 jours et doit être demandé après l'arrivée.",
                fun_fact: "Dakar est le point le plus occidental du continent africain et a été le point d'arrivée de la célèbre course de rallye Paris-Dakar pendant de nombreuses années.",
              }
            },
            en: {
              name: "Dakar",
              description2: "The capital of Senegal, Dakar is a vibrant port metropolis on the Atlantic coast, known for its thriving arts and music scene. It is a major center for culture and diplomacy in Francophone West Africa.",
              neighborhoods: ["Plateau", "Almadies", "Mermoz", "Ngor"],
              housing_howto: "Flatsharing is a cost-effective option. Prices are higher in upscale neighborhoods like Almadies. Listings are often found through word-of-mouth and online expat groups.",
              tips: ["The official language is French, but learning some Wolof is highly appreciated.", "'Cars rapides' and 'Dakar Dem Dikk' buses are the local transport.", "Enjoy the fresh fish and Senegalese cuisine like Thieboudienne."],
              emergency: { universal: "17", police: "17", ambulance: "18", fire: "18" },
              health: {
                hospitals: ["Hôpital Principal de Dakar", "Hôpital Le Dantec", "Clinique de la Madeleine"],
                note: "Private clinics offer better care than public hospitals. Health insurance with an evacuation option is recommended.",
              },
              services: {
                banks: ["Société Générale (SGBS)", "Ecobank", "CBAO Attijariwafa Bank", "BICIS"],
                phone_carriers: ["Orange", "Free", "Expresso"],
              },
              education: {
                universities: ["Université Cheikh Anta Diop (UCAD)", "Université Gaston Berger (in Saint-Louis)", "Suffolk University Dakar Campus"],
              },
              misc: {
                visa_note: "A student visa is required for stays longer than 90 days and should be applied for after arrival.",
                fun_fact: "Dakar is the westernmost point on the African mainland and was the finishing point for the famous Paris-Dakar rally race for many years.",
              }
            },
          },
        },
      ],
    },
    // Morocco
    {
      slug: "morocco",
      nameEn: "Morocco",
      nameFr: "Maroc",
      cities: [
        {
          slug: "casablanca",
          nameEn: "Casablanca",
          nameFr: "Casablanca",
          budget: {
            food_per_month_eur: 200,
            housing_flatshare_eur: 450,
            transport_pass_eur: 25,
            beer_pub_eur: 3,
            cinema_eur: 6,
          },
          content: {
            fr: {
              name: "Casablanca",
              description2: "Centre économique et plus grande ville du Maroc, Casablanca est une métropole moderne et animée. Elle est connue pour son architecture mauresque et art déco, ainsi que pour son port dynamique, le plus grand du Maghreb.",
              neighborhoods: ["Maârif", "Gauthier", "Anfa", "Bourgogne"],
              housing_howto: "La colocation est une option abordable. Les prix sont plus élevés dans les quartiers centraux comme Maârif. Des sites comme Avito.ma et les groupes Facebook sont les principaux canaux de recherche.",
              tips: ["Le tramway est un moyen de transport moderne et efficace.", "Le français est largement parlé dans les affaires et l'éducation.", "Échappez à l'agitation de la ville en vous promenant sur la Corniche."],
              emergency: { universal: "112", police: "190", ambulance: "150", fire: "150" },
              health: {
                hospitals: ["Hôpital Cheikh Khalifa", "Clinique Internationale de Casablanca", "Hôpital Universitaire International Mohammed VI"],
                note: "Les cliniques privées offrent un niveau de soins élevé. Une assurance santé internationale est indispensable.",
              },
              services: {
                banks: ["Attijariwafa Bank", "BMCE Bank of Africa", "Banque Populaire (BCP)"],
                phone_carriers: ["Maroc Telecom", "Orange", "Inwi"],
              },
              education: {
                universities: ["Université Hassan II de Casablanca", "ESCA Ecole de Management", "Al Akhawayn University (in Ifrane)"],
              },
              misc: {
                visa_note: "Les étudiants doivent obtenir un visa de long séjour et demander une carte de séjour ('carte d'immatriculation') après leur arrivée.",
                fun_fact: "La mosquée Hassan II de Casablanca possède le deuxième plus haut minaret du monde (210 mètres) et est l'une des rares mosquées au Maroc ouvertes aux non-musulmans.",
              }
            },
            en: {
              name: "Casablanca",
              description2: "Morocco's economic hub and largest city, Casablanca is a modern, bustling metropolis. It is known for its Moorish and Art Deco architecture, as well as its dynamic port, the largest in the Maghreb.",
              neighborhoods: ["Maârif", "Gauthier", "Anfa", "Bourgogne"],
              housing_howto: "Flatsharing is an affordable option. Prices are higher in central districts like Maârif. Websites like Avito.ma and Facebook groups are the main search channels.",
              tips: ["The tramway is a modern and efficient mode of transport.", "French is widely spoken in business and education.", "Escape the city's hustle with a walk along the Corniche seaside promenade."],
              emergency: { universal: "112", police: "190", ambulance: "150", fire: "150" },
              health: {
                hospitals: ["Cheikh Khalifa Hospital", "Clinique Internationale de Casablanca", "Mohammed VI International University Hospital"],
                note: "Private clinics offer a high standard of care. International health insurance is essential.",
              },
              services: {
                banks: ["Attijariwafa Bank", "BMCE Bank of Africa", "Banque Populaire (BCP)"],
                phone_carriers: ["Maroc Telecom", "Orange", "Inwi"],
              },
              education: {
                universities: ["Hassan II University of Casablanca", "ESCA School of Management", "Al Akhawayn University (in Ifrane)"],
              },
              misc: {
                visa_note: "Students must obtain a long-stay visa and apply for a residence card ('carte d'immatriculation') after arriving.",
                fun_fact: "Casablanca's Hassan II Mosque has the second-tallest minaret in the world (210 meters) and is one of the few mosques in Morocco open to non-Muslims.",
              }
            },
          },
        },
      ],
    },
  ],
},

// Add this new Oceania object to your main 'destinations' array
{
  slug: "oceania",
  nameEn: "Oceania",
  nameFr: "Océanie",
  countries: [
    // Australia
    {
      slug: "australia",
      nameEn: "Australia",
      nameFr: "Australie",
      cities: [
        // 1. Sydney
        {
          slug: "sydney",
          nameEn: "Sydney",
          nameFr: "Sydney",
          budget: {
            food_per_month_eur: 450,
            housing_flatshare_eur: 1300,
            transport_pass_eur: 130,
            beer_pub_eur: 7,
            cinema_eur: 15,
          },
          content: {
            fr: {
              name: "Sydney",
              description2: "Plus grande ville d'Australie, Sydney est célèbre pour son port spectaculaire, son Opéra emblématique et son style de vie dynamique axé sur le plein air. C'est un centre financier mondial avec une scène culturelle et culinaire cosmopolite.",
              neighborhoods: ["Newtown", "Surry Hills", "Bondi", "Glebe"],
              housing_howto: "Le logement est très cher. La colocation est la norme. Utilisez des sites comme Flatmates.com.au, Domain et Realestate.com.au. Les quartiers proches des universités comme Newtown sont populaires mais compétitifs.",
              tips: ["La carte Opal est essentielle pour les trains, bus et ferries.", "Profitez des nombreuses plages et des sentiers de randonnée côtiers.", "Explorez les marchés du week-end comme ceux de Glebe ou de Kirribilli."],
              emergency: { universal: "000", police: "000", ambulance: "000", fire: "000" },
              health: {
                hospitals: ["Royal Prince Alfred Hospital", "St Vincent's Hospital", "Westmead Hospital"],
                note: "L'Assurance Maladie pour Étudiants Étrangers (OSHC) est une condition obligatoire du visa étudiant et couvre les frais médicaux.",
              },
              services: {
                banks: ["Commonwealth Bank (CommBank)", "Westpac", "ANZ", "NAB"],
                phone_carriers: ["Telstra", "Optus", "Vodafone"],
              },
              education: {
                universities: ["The University of Sydney", "University of New South Wales (UNSW)", "University of Technology Sydney (UTS)"],
              },
              misc: {
                visa_note: "Un visa étudiant (subclass 500) est requis pour étudier en Australie.",
                fun_fact: "Le port de Sydney est le plus grand port naturel du monde et contient plus de 580 km de littoral.",
              }
            },
            en: {
              name: "Sydney",
              description2: "Australia's largest city, Sydney is famous for its stunning harbour, iconic Opera House, and vibrant outdoor lifestyle. It's a global financial hub with a cosmopolitan cultural and culinary scene.",
              neighborhoods: ["Newtown", "Surry Hills", "Bondi", "Glebe"],
              housing_howto: "Housing is very expensive. Flatsharing is the norm. Use websites like Flatmates.com.au, Domain, and Realestate.com.au. Areas near universities like Newtown are popular but competitive.",
              tips: ["An Opal card is essential for trains, buses, and ferries.", "Take advantage of the many beaches and coastal walks.", "Explore weekend markets like those in Glebe or Kirribilli."],
              emergency: { universal: "000", police: "000", ambulance: "000", fire: "000" },
              health: {
                hospitals: ["Royal Prince Alfred Hospital", "St Vincent's Hospital", "Westmead Hospital"],
                note: "Overseas Student Health Cover (OSHC) is a mandatory condition of the student visa and covers medical expenses.",
              },
              services: {
                banks: ["Commonwealth Bank (CommBank)", "Westpac", "ANZ", "NAB"],
                phone_carriers: ["Telstra", "Optus", "Vodafone"],
              },
              education: {
                universities: ["The University of Sydney", "University of New South Wales (UNSW)", "University of Technology Sydney (UTS)"],
              },
              misc: {
                visa_note: "A Student visa (subclass 500) is required to study in Australia.",
                fun_fact: "Sydney Harbour is the largest natural harbour in the world and contains over 580 km of shoreline.",
              }
            },
          },
        },
        // 2. Melbourne
        {
          slug: "melbourne",
          nameEn: "Melbourne",
          nameFr: "Melbourne",
          budget: {
            food_per_month_eur: 420,
            housing_flatshare_eur: 1100,
            transport_pass_eur: 115,
            beer_pub_eur: 7,
            cinema_eur: 14,
          },
          content: {
            fr: {
              name: "Melbourne",
              description2: "Souvent classée parmi les villes les plus agréables à vivre au monde, Melbourne est la capitale culturelle de l'Australie. Elle est célèbre pour sa scène artistique, sa culture du café, ses ruelles cachées ('laneways') et ses sports.",
              neighborhoods: ["Fitzroy", "Carlton", "St Kilda", "Brunswick"],
              housing_howto: "Le logement est cher, mais légèrement plus abordable que Sydney. La colocation est très répandue. Flatmates.com.au est le site de référence. Carlton et Fitzroy sont des quartiers étudiants populaires.",
              tips: ["La carte Myki est nécessaire pour les trams, trains et bus.", "Explorez les 'laneways' pour trouver des cafés, des bars et du 'street art' uniques.", "Le temps peut changer radicalement en une seule journée ('four seasons in one day')."],
              emergency: { universal: "000", police: "000", ambulance: "000", fire: "000" },
              health: {
                hospitals: ["The Royal Melbourne Hospital", "The Alfred Hospital", "St Vincent's Hospital Melbourne"],
                note: "L'Assurance Maladie pour Étudiants Étrangers (OSHC) est obligatoire et doit être maintenue pendant toute la durée du visa étudiant.",
              },
              services: {
                banks: ["Commonwealth Bank (CommBank)", "Westpac", "ANZ", "NAB"],
                phone_carriers: ["Telstra", "Optus", "Vodafone"],
              },
              education: {
                universities: ["The University of Melbourne", "Monash University", "RMIT University"],
              },
              misc: {
                visa_note: "Un visa étudiant (subclass 500) est requis pour les étudiants internationaux.",
                fun_fact: "Melbourne abrite le plus grand réseau de tramways au monde, s'étendant sur plus de 250 kilomètres.",
              }
            },
            en: {
              name: "Melbourne",
              description2: "Often ranked as one of the world's most liveable cities, Melbourne is Australia's cultural capital. It's famous for its arts scene, coffee culture, hidden laneways, and sports.",
              neighborhoods: ["Fitzroy", "Carlton", "St Kilda", "Brunswick"],
              housing_howto: "Housing is expensive, though slightly more affordable than Sydney. Flatsharing is very common. Flatmates.com.au is the go-to website. Carlton and Fitzroy are popular student suburbs.",
              tips: ["A Myki card is required for trams, trains, and buses.", "Explore the laneways for unique cafes, bars, and street art.", "The weather can change dramatically in a single day ('four seasons in one day')."],
              emergency: { universal: "000", police: "000", ambulance: "000", fire: "000" },
              health: {
                hospitals: ["The Royal Melbourne Hospital", "The Alfred Hospital", "St Vincent's Hospital Melbourne"],
                note: "Overseas Student Health Cover (OSHC) is compulsory and must be maintained for the duration of your student visa.",
              },
              services: {
                banks: ["Commonwealth Bank (CommBank)", "Westpac", "ANZ", "NAB"],
                phone_carriers: ["Telstra", "Optus", "Vodafone"],
              },
              education: {
                universities: ["The University of Melbourne", "Monash University", "RMIT University"],
              },
              misc: {
                visa_note: "A Student visa (subclass 500) is required for international students.",
                fun_fact: "Melbourne is home to the largest tram network in the world, stretching over 250 kilometers.",
              }
            },
          },
        },
        // 3. Brisbane
        {
          slug: "brisbane",
          nameEn: "Brisbane",
          nameFr: "Brisbane",
          budget: {
            food_per_month_eur: 400,
            housing_flatshare_eur: 950,
            transport_pass_eur: 120,
            beer_pub_eur: 6,
            cinema_eur: 13,
          },
          content: {
            fr: {
              name: "Brisbane",
              description2: "Capitale ensoleillée du Queensland, Brisbane est une ville décontractée et en pleine croissance avec un climat subtropical. Elle offre un style de vie axé sur le plein air, centré autour de sa rivière et de sa proximité avec de superbes plages.",
              neighborhoods: ["West End", "Fortitude Valley", "New Farm", "South Bank"],
              housing_howto: "Le coût du logement est plus bas que celui de Sydney et Melbourne. La colocation est populaire, surtout dans des maisons de style 'Queenslander'. Flatmates.com.au est une ressource clé.",
              tips: ["La carte Go Card est utilisée pour tous les transports publics.", "Profitez des lagons artificiels de South Bank pour vous baigner en plein centre-ville.", "Explorez les îles Moreton et North Stradbroke le week-end."],
              emergency: { universal: "000", police: "000", ambulance: "000", fire: "000" },
              health: {
                hospitals: ["Royal Brisbane and Women's Hospital", "Princess Alexandra Hospital", "Mater Hospital"],
                note: "La souscription à l'Assurance Maladie pour Étudiants Étrangers (OSHC) est une exigence du visa.",
              },
              services: {
                banks: ["Commonwealth Bank", "Suncorp", "Westpac", "NAB"],
                phone_carriers: ["Telstra", "Optus", "Vodafone"],
              },
              education: {
                universities: ["The University of Queensland (UQ)", "Queensland University of Technology (QUT)", "Griffith University"],
              },
              misc: {
                visa_note: "Un visa étudiant (subclass 500) est requis pour étudier en Australie.",
                fun_fact: "Brisbane a accueilli les Goodwill Games en 2001 et se prépare à accueillir les Jeux Olympiques d'été de 2032.",
              }
            },
            en: {
              name: "Brisbane",
              description2: "Queensland's sunny capital, Brisbane is a relaxed, growing city with a subtropical climate. It offers an outdoor-focused lifestyle, centred around its river and proximity to stunning beaches.",
              neighborhoods: ["West End", "Fortitude Valley", "New Farm", "South Bank"],
              housing_howto: "The cost of housing is lower than Sydney and Melbourne. Flatsharing is popular, especially in 'Queenslander' style houses. Flatmates.com.au is a key resource.",
              tips: ["A Go Card is used for all public transport.", "Take advantage of the man-made lagoons at South Bank for a city-centre swim.", "Explore Moreton and North Stradbroke islands on weekends."],
              emergency: { universal: "000", police: "000", ambulance: "000", fire: "000" },
              health: {
                hospitals: ["Royal Brisbane and Women's Hospital", "Princess Alexandra Hospital", "Mater Hospital"],
                note: "Enrolling in Overseas Student Health Cover (OSHC) is a visa requirement.",
              },
              services: {
                banks: ["Commonwealth Bank", "Suncorp", "Westpac", "NAB"],
                phone_carriers: ["Telstra", "Optus", "Vodafone"],
              },
              education: {
                universities: ["The University of Queensland (UQ)", "Queensland University of Technology (QUT)", "Griffith University"],
              },
              misc: {
                visa_note: "A Student visa (subclass 500) is required to study in Australia.",
                fun_fact: "Brisbane hosted the 2001 Goodwill Games and is set to host the 2032 Summer Olympics.",
              }
            },
          },
        },
        // 4. Perth
        {
          slug: "perth",
          nameEn: "Perth",
          nameFr: "Perth",
          budget: {
            food_per_month_eur: 400,
            housing_flatshare_eur: 900,
            transport_pass_eur: 100,
            beer_pub_eur: 6.5,
            cinema_eur: 14,
          },
          content: {
            fr: {
              name: "Perth",
              description2: "Capitale de l'Australie-Occidentale, Perth est l'une des villes les plus isolées du monde, réputée pour son climat ensoleillé, ses plages magnifiques et son style de vie décontracté. C'est un centre majeur de l'industrie des ressources naturelles.",
              neighborhoods: ["Fremantle", "Subiaco", "Leederville", "Northbridge"],
              housing_howto: "Le coût de la vie et du logement est généralement inférieur à celui de la côte est. Les sites de colocation comme Flatmates.com.au sont populaires. Le quartier portuaire de Fremantle est un lieu de vie prisé.",
              tips: ["La carte SmartRider est utilisée pour les transports publics.", "Explorez Kings Park, l'un des plus grands parcs urbains du monde.", "Visitez l'île de Rottnest pour rencontrer les célèbres quokkas."],
              emergency: { universal: "000", police: "000", ambulance: "000", fire: "000" },
              health: {
                hospitals: ["Royal Perth Hospital", "Fiona Stanley Hospital", "Sir Charles Gairdner Hospital"],
                note: "L'Assurance Maladie pour Étudiants Étrangers (OSHC) est une condition obligatoire du visa pour tous les étudiants internationaux.",
              },
              services: {
                banks: ["Commonwealth Bank", "Westpac", "ANZ", "NAB"],
                phone_carriers: ["Telstra", "Optus", "Vodafone"],
              },
              education: {
                universities: ["The University of Western Australia (UWA)", "Curtin University", "Murdoch University"],
              },
              misc: {
                visa_note: "Les étudiants internationaux doivent obtenir un visa étudiant (subclass 500).",
                fun_fact: "Perth est géographiquement plus proche de Singapour et de Jakarta que de Sydney ou de Melbourne.",
              }
            },
            en: {
              name: "Perth",
              description2: "The capital of Western Australia, Perth is one of the world's most isolated major cities, renowned for its sunny climate, stunning beaches, and relaxed lifestyle. It's a major hub for the resources industry.",
              neighborhoods: ["Fremantle", "Subiaco", "Leederville", "Northbridge"],
              housing_howto: "The cost of living and housing is generally lower than on the east coast. Flatsharing sites like Flatmates.com.au are popular. The port city of Fremantle is a beloved place to live.",
              tips: ["A SmartRider card is used for public transport.", "Explore Kings Park, one of the world's largest inner-city parks.", "Visit Rottnest Island to meet the famous quokkas."],
              emergency: { universal: "000", police: "000", ambulance: "000", fire: "000" },
              health: {
                hospitals: ["Royal Perth Hospital", "Fiona Stanley Hospital", "Sir Charles Gairdner Hospital"],
                note: "Overseas Student Health Cover (OSHC) is a mandatory visa condition for all international students.",
              },
              services: {
                banks: ["Commonwealth Bank", "Westpac", "ANZ", "NAB"],
                phone_carriers: ["Telstra", "Optus", "Vodafone"],
              },
              education: {
                universities: ["The University of Western Australia (UWA)", "Curtin University", "Murdoch University"],
              },
              misc: {
                visa_note: "International students must obtain a Student visa (subclass 500).",
                fun_fact: "Perth is geographically closer to Singapore and Jakarta than it is to Sydney or Melbourne.",
              }
            },
          },
        },
      ],
    },
    // New Zealand
    {
      slug: "new-zealand",
      nameEn: "New Zealand",
      nameFr: "Nouvelle-Zélande",
      cities: [
        // 5. Auckland
        {
          slug: "auckland",
          nameEn: "Auckland",
          nameFr: "Auckland",
          budget: {
            food_per_month_eur: 430,
            housing_flatshare_eur: 1000,
            transport_pass_eur: 125,
            beer_pub_eur: 7,
            cinema_eur: 13,
          },
          content: {
            fr: {
              name: "Auckland",
              description2: "Plus grande ville de Nouvelle-Zélande, Auckland est une métropole multiculturelle située entre deux ports. Connue sous le nom de 'City of Sails', elle offre un mélange de vie urbaine, de culture polynésienne et d'un accès facile à des plages et des sentiers de randonnée magnifiques.",
              neighborhoods: ["Ponsonby", "Parnell", "Mount Eden", "Kingsland"],
              housing_howto: "Le logement est cher. La colocation ('flatting') est la norme. Trade Me est le principal site pour trouver des colocations et des locations. Soyez prêt pour une concurrence élevée.",
              tips: ["La carte AT HOP est utilisée pour les bus, les trains et les ferries.", "Explorez les îles du golfe d'Hauraki, comme Waiheke pour ses vignobles.", "La ville est très étendue, le transport public est donc essentiel."],
              emergency: { universal: "111", police: "111", ambulance: "111", fire: "111" },
              health: {
                hospitals: ["Auckland City Hospital", "North Shore Hospital", "Middlemore Hospital"],
                note: "Une assurance médicale et de voyage complète est une condition obligatoire du visa étudiant néo-zélandais.",
              },
              services: {
                banks: ["ANZ", "ASB", "BNZ", "Westpac", "Kiwibank"],
                phone_carriers: ["Spark", "One NZ (formerly Vodafone)", "2degrees"],
              },
              education: {
                universities: ["The University of Auckland", "Auckland University of Technology (AUT)", "Massey University (Albany Campus)"],
              },
              misc: {
                visa_note: "Un visa étudiant ('Fee Paying Student Visa') est requis pour les cours de plus de 3 mois.",
                fun_fact: "Auckland abrite la plus grande population polynésienne de toutes les villes du monde.",
              }
            },
            en: {
              name: "Auckland",
              description2: "New Zealand's largest city, Auckland is a multicultural metropolis set between two harbours. Known as the 'City of Sails,' it offers a blend of urban life, Polynesian culture, and easy access to stunning beaches and hiking trails.",
              neighborhoods: ["Ponsonby", "Parnell", "Mount Eden", "Kingsland"],
              housing_howto: "Housing is expensive. 'Flatting' (flat-sharing) is the norm. Trade Me is the main website for finding flats and rentals. Be prepared for high competition.",
              tips: ["An AT HOP card is used for buses, trains, and ferries.", "Explore the islands in the Hauraki Gulf, like Waiheke for its wineries.", "The city is very spread out, so public transport is essential."],
              emergency: { universal: "111", police: "111", ambulance: "111", fire: "111" },
              health: {
                hospitals: ["Auckland City Hospital", "North Shore Hospital", "Middlemore Hospital"],
                note: "Comprehensive medical and travel insurance is a mandatory condition of a New Zealand student visa.",
              },
              services: {
                banks: ["ANZ", "ASB", "BNZ", "Westpac", "Kiwibank"],
                phone_carriers: ["Spark", "One NZ (formerly Vodafone)", "2degrees"],
              },
              education: {
                universities: ["The University of Auckland", "Auckland University of Technology (AUT)", "Massey University (Albany Campus)"],
              },
              misc: {
                visa_note: "A Fee Paying Student Visa is required for courses longer than 3 months.",
                fun_fact: "Auckland is home to the largest Polynesian population of any city in the world.",
              }
            },
          },
        },
        // 6. Wellington
        {
          slug: "wellington",
          nameEn: "Wellington",
          nameFr: "Wellington",
          budget: {
            food_per_month_eur: 410,
            housing_flatshare_eur: 950,
            transport_pass_eur: 110,
            beer_pub_eur: 7,
            cinema_eur: 13,
          },
          content: {
            fr: {
              name: "Wellington",
              description2: "Capitale de la Nouvelle-Zélande, Wellington est une ville compacte et créative, célèbre pour sa scène artistique, sa culture du café et son vent. C'est le centre du gouvernement et de l'industrie cinématographique du pays ('Wellywood').",
              neighborhoods: ["Te Aro", "Mount Victoria", "Newtown", "Kelburn"],
              housing_howto: "Le marché locatif est très compétitif en raison de la topographie de la ville. La colocation est la norme. Trade Me est le site principal. Commencez à chercher tôt, surtout avant le début de l'année universitaire.",
              tips: ["La carte Snapper est utilisée pour les bus.", "La ville est très piétonne, la plupart des attractions du centre-ville sont accessibles à pied.", "Visitez le musée national Te Papa Tongarewa."],
              emergency: { universal: "111", police: "111", ambulance: "111", fire: "111" },
              health: {
                hospitals: ["Wellington Regional Hospital", "Wakefield Hospital (private)", "Bowen Hospital (private)"],
                note: "L'assurance maladie est obligatoire pour les étudiants internationaux pendant toute la durée de leur séjour.",
              },
              services: {
                banks: ["ANZ", "ASB", "BNZ", "Westpac", "Kiwibank"],
                phone_carriers: ["Spark", "One NZ", "2degrees"],
              },
              education: {
                universities: ["Victoria University of Wellington", "Massey University (Wellington Campus)"],
              },
              misc: {
                visa_note: "Un visa étudiant est nécessaire pour étudier en Nouvelle-Zélande.",
                fun_fact: "Wellington est la capitale nationale la plus méridionale du monde.",
              }
            },
            en: {
              name: "Wellington",
              description2: "New Zealand's capital, Wellington is a compact, creative city famous for its arts scene, coffee culture, and wind. It's the centre of the country's government and film industry ('Wellywood').",
              neighborhoods: ["Te Aro", "Mount Victoria", "Newtown", "Kelburn"],
              housing_howto: "The rental market is very competitive due to the city's topography. 'Flatting' is standard. Trade Me is the main site. Start looking early, especially before the university year begins.",
              tips: ["A Snapper card is used for buses.", "The city is very walkable; most central attractions are accessible by foot.", "Visit the Te Papa Tongarewa national museum."],
              emergency: { universal: "111", police: "111", ambulance: "111", fire: "111" },
              health: {
                hospitals: ["Wellington Regional Hospital", "Wakefield Hospital (private)", "Bowen Hospital (private)"],
                note: "Health insurance is mandatory for international students for the entire duration of their stay.",
              },
              services: {
                banks: ["ANZ", "ASB", "BNZ", "Westpac", "Kiwibank"],
                phone_carriers: ["Spark", "One NZ", "2degrees"],
              },
              education: {
                universities: ["Victoria University of Wellington", "Massey University (Wellington Campus)"],
              },
              misc: {
                visa_note: "A student visa is necessary to study in New Zealand.",
                fun_fact: "Wellington is the world's southernmost capital city.",
              }
            },
          },
        },
      ],
    },
    // Fiji
    {
      slug: "fiji",
      nameEn: "Fiji",
      nameFr: "Fidji",
      cities: [
        // 7. Suva
        {
          slug: "suva",
          nameEn: "Suva",
          nameFr: "Suva",
          budget: {
            food_per_month_eur: 250,
            housing_flatshare_eur: 500,
            transport_pass_eur: 20,
            beer_pub_eur: 2.5,
            cinema_eur: 5,
          },
          content: {
            fr: {
              name: "Suva",
              description2: "Capitale des Fidji, Suva est le centre économique et politique du Pacifique Sud. C'est une ville portuaire animée avec une architecture coloniale, des marchés colorés et une population multiculturelle dynamique.",
              neighborhoods: ["The Domain", "Tamavua", "Laucala Bay", "Central Business District (CBD)"],
              housing_howto: "Le logement est relativement abordable. Il est courant de louer des appartements ou des maisons. Les annonces se trouvent dans les journaux locaux (Fiji Times) et sur les groupes Facebook.",
              tips: ["La culture fidjienne est très amicale ; un 'Bula!' (bonjour) est toujours apprécié.", "Les bus locaux et les taxis partagés sont des moyens de transport bon marché.", "Explorez le marché municipal de Suva pour des produits frais et un aperçu de la vie locale."],
              emergency: { universal: "911", police: "917", ambulance: "911", fire: "919" },
              health: {
                hospitals: ["Colonial War Memorial Hospital (CWMH)", "MIOT Pacific Hospitals (formerly Suva Private)"],
                note: "Les établissements de santé sont basiques. Une assurance santé complète avec option d'évacuation médicale est fortement recommandée.",
              },
              services: {
                banks: ["Bank of South Pacific (BSP)", "ANZ", "Westpac", "Bank of Baroda"],
                phone_carriers: ["Vodafone Fiji", "Digicel Fiji"],
              },
              education: {
                universities: ["University of the South Pacific (USP)", "Fiji National University (FNU)"],
              },
              misc: {
                visa_note: "Un permis d'études doit être obtenu avant l'arrivée aux Fidji.",
                fun_fact: "L'Université du Pacifique Sud à Suva est une université régionale unique, détenue conjointement par les gouvernements de 12 nations insulaires du Pacifique.",
              }
            },
            en: {
              name: "Suva",
              description2: "The capital of Fiji, Suva is the political and economic hub of the South Pacific. It's a bustling port city with colonial architecture, colorful markets, and a vibrant multicultural population.",
              neighborhoods: ["The Domain", "Tamavua", "Laucala Bay", "Central Business District (CBD)"],
              housing_howto: "Housing is relatively affordable. Renting flats or houses is common. Listings can be found in local newspapers (Fiji Times) and on Facebook groups.",
              tips: ["Fijian culture is very friendly; a 'Bula!' (hello) is always appreciated.", "Local buses and shared taxis are cheap ways to get around.", "Explore the Suva Municipal Market for fresh produce and a glimpse of local life."],
              emergency: { universal: "911", police: "917", ambulance: "911", fire: "919" },
              health: {
                hospitals: ["Colonial War Memorial Hospital (CWMH)", "MIOT Pacific Hospitals (formerly Suva Private)"],
                note: "Health facilities are basic. Comprehensive health insurance with medical evacuation coverage is strongly recommended.",
              },
              services: {
                banks: ["Bank of South Pacific (BSP)", "ANZ", "Westpac", "Bank of Baroda"],
                phone_carriers: ["Vodafone Fiji", "Digicel Fiji"],
              },
              education: {
                universities: ["University of the South Pacific (USP)", "Fiji National University (FNU)"],
              },
              misc: {
                visa_note: "A study permit must be secured before arriving in Fiji.",
                fun_fact: "The University of the South Pacific in Suva is a unique regional university, jointly owned by the governments of 12 Pacific Island nations.",
              }
            },
          },
        },
      ],
    },
  ],
},
  // ... Autres continents
];
