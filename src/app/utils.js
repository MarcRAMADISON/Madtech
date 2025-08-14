export const services = [
  {
    type:"DW",
    title: "Développement Web :",
    description:
      "Je conçois des sites web modernes, responsives et optimisés pour garantir une expérience utilisateur fluide, tout en améliorant votre référencement naturel (SEO) pour une meilleure visibilité en ligne.",
  },
  {
    type:'CM',
    title: "Community Management :",
    description:
      "J'anime et engage votre communauté sur les réseaux sociaux avec du contenu attractif, une modération efficace et une interaction authentique pour renforcer votre image de marque.",
  },
  {
    type:'ADS',
    title: "Ads (Meta et GOOGLE )",
    description:
      "Je conçois des campagnes publicitaires ciblées sur Google, Facebook et Instagram afin de maximiser votre visibilité, attirer un trafic qualifié et augmenter vos conversions, tout en optimisant votre budget publicitaire.",
  },
];

export const offres = [
  {
    offre: "Lancement",
    price: 299,
    descriptions: [
      "✅ Un site vitrine (une page de 5 sections maximum ), Newsletter, Formulaire de contact, Lien vers vos réseaux sociaux",
      "✅ Création d'identitée visuelle (logo, PDP, PDC,... ), publications planifiées",
      "✅ La gestion de 2 réseaux sociaux au choix (Facebook, Instagram, Tiktok...)",
      "✅ Gérer vos campagne ADS : Google ADS - Meta ADS",
      "✅ 2 publications et 5 stories par semaine avec interactions régulières sur les réseaux sociaux.",
      "✅ Suivi des performances tous les mois",
    ],
  },
  {
    offre: "Startup",
    price: 598,
    descriptions: [
      "✅ Intégration WhatsApp / Messenger / Calendly / paiement (si besoin)",
      "✅ Un Community Manager personnalisé 300 avis positifs de plus sur Google",
      "✅ La gestion de 3 réseaux sociaux avec une ligne éditoriale stratégique",
      "✅ Création de 2 visuels vidéo promotionnels",
      "✅ 3 publications et 6 stories par semaine avec interactions régulières sur les réseaux sociaux.",
      "✅ Rédaction persuasive pour vos publications et votre site",
      "✅ Feedback sur les résultats obtenus chaque fin du mois",
    ],
  },
  {
    offre: "Entreprise",
    price: 899,
    descriptions: [
      "✅ Création ou refonte de votre identité visuelle complète (logo, charte graphique, couleurs, typographies)",
      "✅ Community management de 4 réseaux sociaux + stratégie de contenu premium",
      "✅ 1 mois de publicité Ads ultra-ciblée + landing page optimisée pour la conversion",
      "✅ Site web professionnel complet (jusqu’à 4 pages + SEO de base + page de réservation)",
      "✅ Audit + stratégie digitale personnalisée sur 3 mois",
      "✅ Pack storytelling de marque + scripts de vidéo pour reels ou TikTok",
      "✅ Aide à la création d'évènements et conseil sur les produits générateurs de buzz",
    ],
  },
];

export const offresCM = [
  {
    title: "Offre Confirmée",
    offres: [
      "Création et gestion des avis Google",
      "Élaboration d’une ligne éditoriale adaptée",
      "Veille concurrentielle pour optimiser votre stratégie",
      "Création et publication de contenu (photos, vidéos, reels)",
      "Animation et engagement actif avec votre audience",
      "Feedback sur les résultats obtenus chaque fin du mois",
    ],
  },
  {
    title:
      "Offre ÉLITE : 500€ (Une solution complète pour une visibilité maximale sur 4 réseaux sociaux !)",
    offres: [
      "200 avis Google générés pour renforcer votre réputation en ligne",
      "Stratégie éditoriale avancée et contenus engageants",
      "Veille et benchmark concurrentiel approfondis",
      "Création et publication de contenu (photos, vidéos, reels) adaptés à chaque plateforme",
      "Animation et engagement actif avec votre audience",
      "Feedback plus détaillé sur les résultats obtenus chaque fin du mois",
    ],
  },
];

export const handleRedirect=(id)=>{
  const element=document.getElementById(id)

  if(element){
    element.scrollIntoView({behavior:"smooth"})
  }
  
}
