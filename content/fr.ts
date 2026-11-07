import type { Site } from "./nl";

export const fr: Site = {
  code: "fr" as unknown as "nl",
  other: { code: "nl", label: "NL", href: "/nl" },
  locale: "fr-BE",

  meta: {
    title: "Déménageur Ninove | Chrono Dem vous déménage en une journée",
    description:
      "Entreprise de déménagement à Ninove pour la Flandre orientale, Bruxelles, le Brabant, le Hainaut et la Wallonie. Prix fixe à l'avance, monte-meubles jusqu'au 8e étage, 4,8 sur 5 chez 255 clients.",
  },

  nav: {
    items: [
      { label: "Services", href: "#diensten" },
      { label: "Méthode", href: "#werkwijze" },
      { label: "Avis", href: "#beoordelingen" },
      { label: "Zone", href: "#werkgebied" },
      { label: "Questions", href: "#vragen" },
    ],
    cta: "Calculer mon prix",
    quoteHref: "/fr/devis",
  },

  hero: {
    eyebrow: "Déménageur à Ninove",
    titleTop: "Déménagé en une journée.",
    titleAccent: "Sans casse,",
    titleBottom: "sans surprise sur la facture.",
    sub: "Peur que votre armoire soit abîmée, que les déménageurs ne viennent pas ou que la note soit plus salée que prévu ? Notre propre équipe emballe tout dans des couvertures et du film, démonte et remonte vos meubles et dispose d'un monte-meubles jusqu'au 8e étage. Le prix annoncé à l'avance est celui que vous payez.",
    ctaPrimary: "Calculez votre volume et votre prix",
    ctaSecondary: "Ou appelez",
    fud: ["Gratuit et sans engagement", "Réponse dans l'heure", "Prix fixe à l'avance", "Entièrement assuré"],
    imageAlt: "Le camion de déménagement avec monte-meubles de Chrono Dem",
    badgeLine1: "Monte-meubles",
    badgeLine2: "jusqu'au 8e étage",
    truckNote: "Notre propre camion et notre propre lift. Rien de loué.",
  },

  proof: {
    google: "sur Google",
    trust: "sur Trustlocal",
    reviewsWord: "avis",
    award: "Top Pro 2024, 2025 et 2026",
  },

  bar: [
    { value: "255", label: "avis sur Google et Trustlocal" },
    { value: "10+", label: "ans de déménagement en Flandre orientale" },
    { value: "8e", label: "étage sans escalier, avec notre lift" },
    { value: "225 €", label: "forfait de départ, tout compris" },
  ],

  reviews: {
    eyebrow: "Avis clients",
    title: "255 familles et entreprises nous ont déjà confié leur déménagement. Voici ce qu'elles en ont écrit.",
    intro:
      "Ci-dessous, de vrais avis Google et Trustlocal. Pas les plus flatteurs, mais ceux qui prouvent les trois choses qui vous inquiètent aujourd'hui : rien de cassé, à l'heure, et une facture conforme au devis.",
    items: [
      {
        tag: "Devis correct et respecté",
        name: "Claire Octors",
        date: "août 2026",
        source: "Google",
        text: "Nous avons été aux anges de l'équipe de déménagement ChronoDem. Agréables, efficaces et à l'écoute. Traitement soigneux des meubles et devis correct et respecté. On recommande, vraiment.",
      },
      {
        tag: "Sans casse",
        name: "Mélanie G.",
        date: "octobre 2026",
        source: "Google",
        text: "Une équipe super efficace et souriante, pour un déménagement effectué très rapidement, à un prix raisonnable. Sans casse, qui plus est. Que demander de plus ? Merci Chronodem.",
      },
      {
        tag: "Pile à l'heure",
        name: "Pascale Jonckheer",
        date: "avril 2026",
        source: "Google",
        text: "C'était un déménagement fantastique. L'équipe est arrivée pile à l'heure. Tout était parfait : le matériel, l'efficacité, le professionnalisme et une très bonne ambiance. Nous recommandons ChronoDem à 200 %.",
      },
      {
        tag: "Cinquième étage sans souci",
        name: "Thibault Jacquemart",
        date: "2025",
        source: "Google",
        text: "Très satisfaits. Nous étions assez inquiets car nous déménagions d'un appartement au cinquième étage, mais ils ont tout géré à la perfection. Soigneux et efficaces, un déménagement sans stress.",
      },
      {
        tag: "Démontage et remontage sans accroc",
        name: "Brigitte Messinnes",
        date: "2025",
        source: "Google",
        text: "Quatre déménageurs très consciencieux. Vu la quantité à déménager, ils ont utilisé un lift. Le démontage et le remontage se sont déroulés sans accroc. Aucun dégât, alors qu'il n'était pas simple de faire passer des objets par une fenêtre étroite.",
      },
      {
        tag: "Rendez-vous en moins d'une semaine",
        name: "Harry A.",
        date: "2024",
        source: "Google",
        text: "J'ai eu un rendez-vous très vite pour le déménagement, en moins d'une semaine, avec une équipe de déménagement sympa, arrangeante et carrée.",
      },
      {
        tag: "Meubles très bien emballés",
        name: "Aurélie P.",
        date: "2024",
        source: "Google",
        text: "Nous sommes ravis d'avoir fait appel à ChronoDem. Nos meubles étaient très bien emballés et entre de bonnes mains. Vos prix sont imbattables sur le marché. Nous vous conseillerons à notre entourage, ça c'est clair.",
      },
      {
        tag: "Deuxième fois cliente",
        name: "Marine Absil",
        date: "mai 2026",
        source: "Google",
        text: "C'est la deuxième fois que je fais appel à cette société et je suis aussi satisfaite que la première fois. Ils prennent beaucoup de précautions avec les objets fragiles et les meubles anciens. On peut leur faire entièrement confiance.",
      },
      {
        tag: "Pour un lift et un déménagement",
        name: "Willeminjns P.",
        date: "2024",
        source: "Google",
        text: "Super service. Nous avons fait appel à eux pour un lift et pour un déménagement sur Vilvorde. Franchement, je recommande.",
      },
    ],
    footnote:
      "Chrono Dem répond lui-même à presque chaque avis, y compris aux critiques. C'est un bon test avant de confier son mobilier à quelqu'un.",
  },

  pain: {
    eyebrow: "Calculons honnêtement",
    title: "Déménager soi-même paraît moins cher. Jusqu'à ce que quelque chose casse.",
    lead: "Louer une camionnette coûte quelques centaines d'euros. Mais ce n'est jamais la facture complète. Mettez les deux côte à côte avant de décider.",
    selfTitle: "Tout seul, avec des amis",
    selfSub: "Ce que personne ne compte à l'avance",
    selfItems: [
      "Deux jours de week-end perdus, plus les soirées d'emballage avant",
      "Quatre amis à qui vous devrez un service en retour",
      "Ni couvertures ni film, donc des rayures sur l'armoire de votre grand-mère",
      "Aucune assurance : ce qui casse est cassé, et c'est pour vous",
      "Escalier trop étroit, donc le canapé reste sur le palier",
      "Un deuxième trajet parce que la camionnette était trop petite",
      "Un dos qui fait encore mal trois jours plus tard",
    ],
    usTitle: "Avec Chrono Dem",
    usSub: "Ce qui se passe réellement",
    usItems: [
      "Une journée. Vous ne portez rien.",
      "Une équipe fixe qui travaille ensemble chaque semaine, pas d'intérimaires",
      "Tout dans des couvertures et du film avant de quitter la pièce",
      "Entièrement assurés, avec les autorisations nécessaires",
      "Notre monte-meubles jusqu'au 8e étage si l'escalier ne suit pas",
      "Le bon volume calculé à l'avance, donc un seul trajet",
      "Vous faites le café et indiquez où ça va",
    ],
    kicker:
      "Les avis ci-dessus disent presque tous la même chose : rien de cassé, à l'heure, et le prix convenu.",
  },

  services: {
    eyebrow: "Nos services",
    title: "Quatre services, une seule équipe qui les pratique tous les jours",
    intro:
      "Pas de sous-traitants que vous n'avez jamais vus. Qui travaille chez vous est sur la liste du personnel de Chrono Dem.",
    readMore: "Découvrir ce service",
    items: [
      {
        slug: "particuliers",
        name: "Déménagement de particuliers",
        tagline: "De l'emballage au remontage de l'armoire",
        teaser:
          "Nous passons à l'avance, estimons le volume et déménageons votre habitation le jour convenu. Le démontage et le remontage de vos meubles sont compris.",
        image: "/images/carry-sofa.webp",
        alt: "Deux déménageurs portent un canapé emballé dans un salon vide",
        bullets: [
          "Visite gratuite sur place pour estimer le volume correctement",
          "Meubles démontés puis remontés à la nouvelle adresse",
          "Tout emballé dans des couvertures et du film, emballage renforcé pour le fragile",
          "Monte-meubles disponible jusqu'au 8e étage",
        ],
        body: [
          "Déménager soi-même demande énormément d'organisation et de temps. Préparer les cartons, protéger les meubles, démonter les armoires, charger et décharger : c'est notre quotidien. Nous savons répartir le travail pour que tout soit bouclé en une journée et arrive en bon état chez vous.",
          "Avant le déménagement, quelqu'un de chez nous passe voir ce qui doit partir. Sur cette base, vous recevez un prix fixe incluant le nombre de déménageurs, le camion et les heures. Ce prix vaut le jour même, même si cela prend un peu plus de temps que prévu.",
        ],
        faq: [
          {
            q: "J'habite en étage, est-ce que vous gérez ?",
            a: "Oui. Nous disposons de notre propre monte-meubles pour les déménagements jusqu'au 8e étage inclus. Les escaliers étroits ou un ascenseur trop petit ne sont alors plus un problème.",
          },
          {
            q: "Est-ce que vous emballez aussi ?",
            a: "Vos meubles et vos pièces fragiles, nous les emballons toujours nous-mêmes dans des couvertures et du film. Si vous souhaitez que nous mettions aussi vos armoires et votre cuisine en cartons, nous le reprenons dans le devis.",
          },
        ],
      },
      {
        slug: "entreprises",
        name: "Déménagement d'entreprises",
        tagline: "Fermer le vendredi, rouvrir le lundi",
        teaser:
          "Bureaux, cabinets, commerces et entrepôts. Nous planifions autour de vos heures d'ouverture pour que votre activité s'arrête le moins longtemps possible.",
        image: "/images/office-move.webp",
        alt: "Bureau prêt au déménagement avec bacs empilés et sièges emballés",
        bullets: [
          "Déménagement le week-end ou en soirée, pour ne pas perdre de chiffre",
          "Bacs numérotés par poste de travail, tout se retrouve à sa place",
          "IT, archives et dossiers traités séparément",
          "Entièrement assurés, avec les autorisations requises",
        ],
        body: [
          "Déménager une entreprise est avant tout un exercice de planification. Qu'est-ce qui peut s'arrêter et quand, qu'est-ce qui doit refonctionner en premier, et qui doit être assis où le lundi matin ? Nous parcourons le bâtiment avec vous et traduisons cela en un planning avec des heures.",
          "Nous déménageons des entreprises de tous les secteurs et de toutes tailles, en Flandre orientale, à Bruxelles, dans le Brabant, le Hainaut et en Wallonie. Notre équipe est formée pour composer avec les contraintes : quais de chargement, créneaux horaires, ascenseurs limités en poids.",
        ],
        faq: [
          {
            q: "Pouvez-vous travailler en dehors des heures de bureau ?",
            a: "Oui. La plupart des déménagements d'entreprise se font le samedi ou en soirée, justement pour éviter que votre équipe perde une journée de travail.",
          },
          {
            q: "Êtes-vous assurés pour le matériel professionnel ?",
            a: "Oui, nous sommes entièrement assurés. Nous réalisons au préalable une analyse de l'environnement et des exigences, et nous disposons des autorisations nécessaires à nos activités de déménagement.",
          },
        ],
      },
      {
        slug: "lift-service",
        name: "Lift service",
        tagline: "Jusqu'au 8e étage, par la fenêtre",
        teaser:
          "Escalier étroit, porte tournante ou ascenseur dans lequel l'armoire ne rentre pas ? Tout passe alors par l'extérieur, en sécurité et beaucoup plus vite.",
        image: "/images/lift-balcony.webp",
        alt: "Monte-meubles de Chrono Dem déployé vers un appartement",
        bullets: [
          "Monte-meubles jusqu'au 8e étage inclus",
          "Réservable séparément si vous déménagez vous-même",
          "Moins de risques de dégâts dans la cage d'escalier et sur les murs",
          "Manœuvré par un opérateur formé",
        ],
        body: [
          "Pour vos meubles de valeur, ou pour les pièces qui ne passent ni par l'ascenseur ni par l'escalier, le monte-meubles est presque toujours la solution la plus simple et la plus sûre. Également pour la livraison d'un nouveau salon ou pour vider un camion.",
          "Vous pouvez aussi louer le lift seul, avec opérateur, si vous faites le reste vous-même. Demandez à l'avance une interdiction de stationner à votre commune pour que nous puissions placer le lift et le camion.",
        ],
        faq: [
          {
            q: "Combien de déménageurs faut-il avec un lift ?",
            a: "Pour ce type de service, quatre déménageurs est l'idéal : deux en haut et deux en bas. Si vous optez pour un forfait à deux déménageurs, le chauffeur et l'opérateur restent en bas et vous prévoyez deux personnes en haut.",
          },
          {
            q: "Dois-je prévoir quelque chose à l'avance ?",
            a: "Réservez des panneaux de stationnement auprès de votre commune pour l'emplacement du lift et du camion. Si des véhicules s'y trouvent malgré tout, appelez la police une heure à l'avance. Vérifiez aussi si votre commune exige une autorisation pour l'usage d'un monte-meubles.",
          },
        ],
      },
      {
        slug: "vide-maison",
        name: "Vide-maison et entrepôts",
        tagline: "Vidé, balayé et évacué correctement",
        teaser:
          "Une succession, un bien vendu ou un entrepôt à vider. Nous débarrassons, trions et évacuons vers la bonne destination.",
        image: "/images/cleared-room.webp",
        alt: "Grenier entièrement vidé et balayé",
        bullets: [
          "Vidage complet, du grenier à la cave",
          "Déchets triés et évacués de façon écologique",
          "Discrétion, y compris lors d'une succession",
          "Le bien est rendu balayé",
        ],
        body: [
          "Faire vider une maison ou un entrepôt par un déménageur professionnel ne vous épargne pas seulement le port. Nous gérons aussi l'évacuation : ce qui est recyclable part au recyclage, les encombrants au service conteneurs, et ce qui est encore utilisable est mis de côté.",
          "La durée dépend de la taille du bien et de la quantité. Nous travaillons aussi vite que possible pour limiter la gêne pour vous et pour le voisinage.",
        ],
        faq: [
          {
            q: "Quels objets emportez-vous ?",
            a: "Meubles, électroménager, électronique, vêtements, décoration et à peu près tout ce qui se trouve dans une maison ou un entrepôt. Les déchets dangereux se discutent à l'avance.",
          },
          {
            q: "Travaillez-vous avec discrétion ?",
            a: "Oui. Lors d'une succession en particulier, nous travaillons calmement et avec respect pour l'habitation, le voisinage et votre vie privée.",
          },
        ],
      },
    ],
  },

  band: {
    teamAlt: "L'équipe de déménagement de Chrono Dem devant son camion",
    teamLine: "Qui travaille chez vous est sur notre liste du personnel. Pas d'intérimaires, pas de sous-traitants.",
    truckAlt: "Camion de déménagement chargé proprement à la tombée du jour",
    truckLine: "Un seul trajet, chargé et sanglé correctement. C'est pour cela que rien n'arrive abîmé.",
  },

  included: {
    eyebrow: "Ce qui est compris",
    title: "Tout ce qui suit est dans le prix. C'est pour cela que la facture est conforme.",
    intro:
      "La plupart des mauvaises surprises sur une facture de déménagement viennent de choses qui ne figuraient pas dans le devis. Chez nous, elles y figurent.",
    groups: [
      {
        title: "Avant le jour J",
        items: [
          "Visite gratuite chez vous ou dans vos bureaux",
          "Volume calculé et acté noir sur blanc",
          "Prix fixe incluant les déménageurs, le camion et les heures",
          "Conseils sur les panneaux de stationnement et les autorisations communales",
        ],
      },
      {
        title: "Le jour du déménagement",
        items: [
          "Couvertures de déménagement et film étirable pour tous vos meubles",
          "Emballage renforcé pour les pièces fragiles ou de valeur",
          "Démontage des lits, armoires et tables",
          "Chargement, trajet et déchargement par la même équipe",
        ],
      },
      {
        title: "À la nouvelle adresse",
        items: [
          "Remontage de tout ce que nous avons démonté",
          "Meubles posés à leur place, pas abandonnés dans le couloir",
          "Monte-meubles si l'escalier ou l'ascenseur ne suit pas",
          "Emballages repris avec nous",
        ],
      },
    ],
    tail: "Également possible, en concertation : emballage des armoires et de la cuisine, stockage temporaire chez un de nos partenaires, et évacuation de ce qui ne déménage pas.",
  },

  calc: {
    eyebrow: "Calcul de volume",
    title: "Sachez en deux minutes combien de mètres cubes vous déménagez",
    intro:
      "Le prix d'un déménagement dépend presque entièrement du volume. Cochez ci-dessous ce qui doit partir et vous voyez immédiatement le nombre de m³ et le camion correspondant. Exactement les mêmes chiffres que ceux que nous utilisons au bureau.",
    roomLabel: "Pièce",
    totalLabel: "Volume estimé",
    truckLabel: "Il faudra",
    emptyTruck: "Cochez à côté ce qui déménage",
    resetLabel: "Recommencer",
    itemsLabel: "pièces sélectionnées",
    cta: "Envoyer ce volume et recevoir mon prix",
    note: "Une estimation, pas un devis. Nous passons toujours vérifier sur place, et c'est ce prix-là qui vaut.",
    summaryTitle: "Votre liste",
  },

  steps: {
    eyebrow: "Méthode",
    title: "Du premier appel au dernier carton, en quatre étapes",
    items: [
      {
        n: "01",
        title: "Vous appelez ou calculez votre volume en ligne",
        text: "Cela prend deux minutes. Vous avez une réponse le jour même, le plus souvent dans l'heure.",
      },
      {
        n: "02",
        title: "Nous passons voir gratuitement ce qui doit partir",
        text: "Une estimation à distance se trompe toujours. Nous préférons venir quelques minutes chez vous.",
      },
      {
        n: "03",
        title: "Vous recevez un prix fixe, noir sur blanc",
        text: "Avec le nombre de déménageurs, le camion, les heures et le lift. Pas d'acompte.",
      },
      {
        n: "04",
        title: "Nous déménageons, vous faites le café",
        text: "Nous sommes devant la porte à l'heure convenue. Le soir, tout est à sa place et remonté.",
      },
    ],
  },

  lift: {
    eyebrow: "Lift service",
    title: "Cinquième étage, escalier étroit, porte tournante ? Votre déménagement ne s'arrête pas là.",
    text: "Notre monte-meubles va jusqu'au 8e étage inclus. Tout sort par la fenêtre ou le balcon : plus rapide, et avec beaucoup moins de risques pour votre cage d'escalier, vos murs et vos meubles. Vous pouvez aussi réserver le lift seul si vous faites le reste vous-même.",
    points: ["Jusqu'au 8e étage", "Avec opérateur formé", "Location séparée possible"],
    cta: "Demandez votre prix pour le lift service",
  },

  gallery: {
    eyebrow: "De nos propres chantiers",
    title: "Voilà à quoi ressemble votre mobilier avant de monter dans le camion",
    intro:
      "Pas de photos d'agence. Ce sont des photos prises par nos équipes sur des déménagements en Flandre orientale et à Bruxelles.",
    items: [
      { src: "/images/echt/wrapped-living-room.webp", alt: "Meubles de salon entièrement emballés dans du film de protection", cap: "Tout sous film avant de quitter la pièce" },
      { src: "/images/echt/team-jacket.webp", alt: "Déménageur Chrono Dem empilant des cartons numérotés dans un camion", cap: "Numéroté et empilé par pièce" },
      { src: "/images/echt/wrapped-office.webp", alt: "Sièges et mobilier de bureau emballés pour un déménagement d'entreprise", cap: "Déménagement d'entreprise, prêt à charger" },
      { src: "/images/echt/truck-inside.webp", alt: "Camion de déménagement chargé proprement", cap: "Chargé pour que rien ne bouge" },
    ],
  },

  zone: {
    eyebrow: "Zone d'intervention",
    title: "Demain nous sommes à Gand, Bruxelles, Alost ou Tournai",
    text: "Chrono Dem part de Ninove et travaille dans toute la Flandre orientale et bien au-delà. Votre commune n'y figure pas ? Appelez, nous roulons plus loin que vous ne le pensez.",
    regionsLabel: "Provinces où nous roulons",
    regions: ["Flandre orientale", "Bruxelles", "Brabant flamand", "Brabant wallon", "Hainaut", "Wallonie"],
    citiesLabel: "Entre autres à",
    cities: ["Ninove", "Alost", "Gand", "Termonde", "Saint-Nicolas", "Bruxelles", "Hal", "Louvain", "Vilvorde", "Wavre", "Soignies", "Ath", "Renaix", "Malines"],
    mapAlt: "Carte de la Belgique avec la zone d'intervention de Chrono Dem",
    mapSrc: "/images/echt/map-fr.webp",
  },

  partners: {
    eyebrow: "Partenaires",
    title: "Votre mobilier doit patienter quelque part ? C'est réglé.",
    text: "Nous travaillons avec des sociétés de stockage, de location de grues et des garages de la région. S'il y a un trou entre votre vente et votre achat, nous conduisons votre mobilier vers un box et nous l'en ressortons plus tard.",
    names: ["Shurgard", "Omnistock", "U-Store", "Storo Self Storage", "Loca Grue", "Chavatte", "Böcker", "De Smet"],
  },

  faq: {
    eyebrow: "Questions fréquentes",
    title: "Les questions que les clients nous posent le plus souvent avant de réserver",
    items: [
      {
        q: "Combien coûte un déménagement ?",
        a: "Nos forfaits démarrent à 225 euros. Le prix final dépend de votre volume, du nombre de déménageurs, de la distance et de la nécessité d'un lift. Vous recevez toujours un prix fixe à l'avance, et c'est ce prix que vous payez.",
      },
      {
        q: "Combien de temps à l'avance dois-je réserver ?",
        a: "Le plus tôt est le mieux. Dès que vous connaissez votre date, appelez-nous. Les samedis et les fins de mois partent en premier. Un déménagement urgent est parfois possible dans la semaine, mais ne comptez pas dessus.",
      },
      {
        q: "Démontez et remontez-vous les meubles ?",
        a: "Oui, c'est compris dans le service. Lits, armoires, tables : nous les démontons avant le transport et les remontons à la nouvelle adresse.",
      },
      {
        q: "Comment traitez-vous les objets fragiles ?",
        a: "Tout est emballé dans des couvertures de déménagement et du film étirable. Pour les pièces très fragiles, comme du verre, de l'art ou un piano, nous prévoyons un emballage adapté. Signalez-le au devis, nous en tiendrons compte.",
      },
      {
        q: "De combien de déménageurs ai-je besoin ?",
        a: "Cela dépend du service. Avec le monte-meubles, nous conseillons quatre personnes : deux en haut et deux en bas. C'est le plus rapide et le moins risqué. Pour un déménagement classique, nous le déterminons ensemble selon votre volume.",
      },
      {
        q: "Êtes-vous assurés ?",
        a: "Oui, nous sommes entièrement assurés et disposons des autorisations pour exercer des activités de déménagement. Nous analysons au préalable l'environnement et les exigences du déménagement.",
      },
      {
        q: "Travaillez-vous avec des sous-traitants ?",
        a: "Non. Qui se présente chez vous travaille pour Chrono Dem. Les équipes se connaissent, et c'est pour cela que les avis répètent si souvent que tout s'est passé sans accroc.",
      },
      {
        q: "Puis-je déménager le samedi ?",
        a: "Oui. Nous travaillons du lundi au samedi, de 9 à 18 heures. Nous sommes fermés le dimanche et les jours fériés légaux.",
      },
    ],
  },

  closer: {
    eyebrow: "Votre prix",
    title: "Sachez ce soir ce que coûte votre déménagement",
    sub: "Remplissez ce que vous savez. Plus c'est complet, plus le prix que nous pouvons donner est précis. Vous ne vous engagez à rien.",
    bullets: [
      "Réponse dans l'heure pendant les heures d'ouverture",
      "Visite gratuite pour vérifier le volume",
      "Prix fixe à l'avance, sans acompte",
      "Déménagement possible le samedi",
      "Entièrement assurés et autorisés",
    ],
    quoteName: "Harry A.",
    quote: "J'ai eu un rendez-vous très vite, en moins d'une semaine, avec une équipe sympa, arrangeante et carrée.",
    orCall: "Vous préférez appeler ?",
  },

  form: {
    title: "Demande de devis",
    name: "Votre nom",
    email: "Adresse e-mail",
    phone: "Numéro de téléphone",
    service: "Quel service ?",
    serviceOptions: ["Déménagement particulier", "Déménagement d'entreprise", "Lift service", "Vide-maison ou entrepôt"],
    volume: "Volume estimé (m³)",
    volumePlaceholder: "Vous ne savez pas ? Laissez vide.",
    from: "Adresse de départ",
    fromPlaceholder: "Rue, numéro et commune",
    fromFloor: "Étage",
    to: "Adresse d'arrivée",
    toPlaceholder: "Rue, numéro et commune",
    toFloor: "Étage",
    lift: "Un lift est-il nécessaire ?",
    liftOptions: ["Je ne sais pas", "Oui", "Non"],
    date: "Date de déménagement souhaitée",
    message: "Quelque chose que nous devons savoir ?",
    messagePlaceholder: "Piano, cave pleine, rue étroite, chat qui ne peut pas sortir...",
    submit: "Envoyer et recevoir mon prix",
    fud: "Gratuit et sans engagement. Nous vous rappelons, le plus souvent dans l'heure.",
    floors: ["Rez-de-chaussée", "1er", "2e", "3e", "4e", "5e", "6e", "7e", "8e ou plus"],
    successTitle: "Merci, nous avons bien votre demande",
    successText: "Nous vous contactons, le plus souvent dans l'heure pendant les heures d'ouverture. Si c'est urgent, appelez le",
    demoNote: "Version démo : ce formulaire n'envoie rien.",
  },

  hours: {
    title: "Heures d'ouverture",
    rows: [
      ["Du lundi au vendredi", "9.00 à 18.00"],
      ["Samedi", "9.00 à 18.00"],
      ["Dimanche", "Fermé"],
      ["Jours fériés légaux", "Fermé"],
    ],
    note: "Nous déménageons du lundi au samedi.",
  },

  footer: {
    tagline: "Déménager avec professionnalisme et tranquillité d'esprit.",
    servicesTitle: "Services",
    companyTitle: "Chrono Dem",
    contactTitle: "Contact",
    vatLabel: "Numéro d'entreprise",
    links: [
      { label: "Devis et volume", href: "/fr/devis" },
      { label: "Zone d'intervention", href: "/fr#werkgebied" },
      { label: "Avis clients", href: "/fr#beoordelingen" },
      { label: "Questions fréquentes", href: "/fr#vragen" },
    ],
    legal: [
      { label: "Politique de confidentialité", href: "https://www.chronodem.be/politique-de-confidentialite/" },
      { label: "Politique de cookies", href: "https://www.chronodem.be/politique-de-cookies-ue/" },
    ],
    rights: "Tous droits réservés.",
  },

  sticky: { cta: "Calculer mon prix", call: "Appeler" },

  quotePage: {
    eyebrow: "Devis",
    title: "Calculez votre volume et recevez votre prix",
    intro:
      "Deux étapes. D'abord vous cochez ce qui doit partir, ensuite vous indiquez brièvement où. Plus c'est complet, plus nous pouvons calculer juste. Vous ne vous engagez à rien.",
    back: "Retour à l'accueil",
    step1: "Étape 1",
    step1Title: "Qu'est-ce qui déménage ?",
    step2: "Étape 2",
    step2Title: "Vers où, et quand ?",
  },

  servicePage: {
    back: "Tous les services",
    otherTitle: "Les autres services de Chrono Dem",
    ctaTitle: "Envie de savoir ce que cela coûte ?",
    ctaText: "Calculez votre volume ou appelez-nous. Vous recevez un prix fixe à l'avance.",
    faqTitle: "Questions sur ce service",
    includedTitle: "Ce que vous recevez",
  },
};
