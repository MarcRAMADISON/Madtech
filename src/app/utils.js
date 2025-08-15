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
    offre: "PARTICULIER",
    price: 299,
    descriptions: [
      "✅ Site vitrine complet, performant et optimisé SEO ",
      "✅ Gestion de 2 réseaux sociaux",
      "✅ Création d’identité visuelle: Logo, PDP, PDC",
      "✅ Stratégie de contenu, 3 publications par semaine sur chaque réseau social",
      "✅ Community engagement : Interactions avec les abonnés, réponses aux commentaires, messages privés, et gestion des avis.",
      "✅ Veille concurrentielle ",
    ],
    info:'Offre avec engagement les 3 premiers mois et après vous pouvez arrêter à tout moment.'
  },
  {
    offre: "ENTREPRISE",
    price: 598,
    descriptions: [
      "✅ Site web personnalisé, complet, performant et optimisé SEO (vitrine , e-commerce, site de réservation, ...)",
      "✅ Gestion de tous vos réseaux sociaux",
      "✅ Création d’identité visuelle: Logo, PDP, PDC",
      "✅ Stratégie de contenu, publications par semaine non limitées",
      "✅ Community engagement : Interactions avec les abonnés, réponses aux commentaires, messages privés, et gestion des avis.",
      "✅ Veille concurrentielle ",
      "✅ Gérer vos campagne ADS (GOOGLE ADS, META ADS)",
    ],
    info:"Offre avec engagement les 3 premiers mois et après vous pouvez arrêter à tout moment. Budget ADS non inclus"
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
