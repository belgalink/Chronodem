/**
 * Volume data lifted one-to-one from the existing chronodem.be volume tool,
 * so the figures a visitor gets here match the figures the office works with.
 */
export type VolumeItem = { id: string; nl: string; fr: string; m3: number };
export type VolumeRoom = { id: string; nl: string; fr: string; items: VolumeItem[] };

const i = (id: string, nl: string, fr: string, m3: number): VolumeItem => ({ id, nl, fr, m3 });

const doos = i("doos", "Verhuisdoos", "Carton", 0.05);
const spiegel = i("spiegel", "Spiegel of schilderij", "Miroir ou tableau", 0.1);
const plant = i("plant", "Plant", "Plante", 0.25);
const stoel = i("stoel", "Stoel", "Chaise", 0.2);
const kast = i("kast", "Kleerkast", "Armoire", 0.5);
const commode = i("commode", "Commode", "Commode", 0.5);
const dressoir = i("dressoir", "Dressoirkast", "Buffet bas", 1.0);
const lamp = i("lamp", "Staande lamp", "Luminaire", 0.75);
const boekenkast = i("boekenkast", "Boekenkast", "Bibliothèque", 0.5);
const bureau = i("bureau", "Bureau", "Bureau", 0.5);
const wasmachine = i("wasmachine", "Wasmachine", "Lave-linge", 0.5);
const droogkast = i("droogkast", "Droogkast", "Sèche-linge", 0.5);
const koelkast = i("koelkast", "Koelkast", "Réfrigérateur", 0.5);
const tafel = i("tafel", "Tafel", "Table", 0.5);
const maaier = i("maaier", "Grasmaaier", "Tondeuse", 0.5);
const zitmaaier = i("zitmaaier", "Zitmaaier", "Tracteur-tondeuse", 1.5);
const zetel = i("zetel", "Zetel", "Fauteuil", 0.5);
const nachtkast = i("nachtkast", "Nachtkastje", "Table de chevet", 0.25);
const tv = i("tv", "Televisie", "Téléviseur", 0.25);
const kapstok = i("kapstok", "Kapstok", "Porte-manteau", 0.15);
const kist = i("kist", "Kist of koffer", "Coffre ou malle", 0.25);

export const ROOMS: VolumeRoom[] = [
  {
    id: "hal",
    nl: "Inkom en gang",
    fr: "Entrée et couloir",
    items: [
      i("bijzettafel", "Bijzettafel", "Guéridon", 0.25),
      kapstok,
      i("schoenenkast", "Schoenenkast", "Meuble à chaussures", 0.25),
      zetel,
      kist,
      kast,
      spiegel,
      plant,
      doos,
    ],
  },
  {
    id: "woonkamer",
    nl: "Woonkamer",
    fr: "Salon",
    items: [
      i("zitbank", "Zitbank (3 plaatsen)", "Canapé (3 places)", 1.0),
      zetel,
      i("salontafel", "Salontafel", "Table basse", 0.25),
      tv,
      i("tvmeubel", "Tv-meubel", "Meuble TV", 0.25),
      lamp,
      i("luchter", "Luchter", "Lustre", 0.25),
      dressoir,
      boekenkast,
      spiegel,
      plant,
      doos,
    ],
  },
  {
    id: "keuken",
    nl: "Keuken",
    fr: "Cuisine",
    items: [
      i("fornuis", "Fornuis", "Gazinière", 0.5),
      i("oven", "Oven of microgolf", "Four ou micro-ondes", 0.25),
      i("vaatwas", "Vaatwasser", "Lave-vaisselle", 0.5),
      koelkast,
      i("diepvries", "Diepvriezer", "Congélateur", 0.5),
      tafel,
      stoel,
      i("kruk", "Kruk", "Tabouret", 0.12),
      i("buffetkast", "Buffetkast", "Buffet 2 corps", 1.0),
      dressoir,
      doos,
    ],
  },
  {
    id: "eetkamer",
    nl: "Eetkamer",
    fr: "Salle à manger",
    items: [
      tafel,
      stoel,
      dressoir,
      i("servieskast", "Servieskast", "Vaisselier 2 corps", 1.5),
      kast,
      lamp,
      spiegel,
      plant,
      doos,
    ],
  },
  {
    id: "slaapkamer",
    nl: "Slaapkamer",
    fr: "Chambre",
    items: [
      i("bed", "Tweepersoonsbed", "Lit deux places", 1.5),
      nachtkast,
      tv,
      i("kaptafel", "Kaptafel of koffer", "Coiffeuse ou malle", 0.3),
      commode,
      kast,
      kapstok,
      bureau,
      stoel,
      zetel,
      spiegel,
      doos,
    ],
  },
  {
    id: "kinderkamer",
    nl: "Kinderkamer",
    fr: "Chambre d'enfant",
    items: [
      i("kinderbed", "Kinderbed", "Lit enfant", 1.0),
      i("wieg", "Wieg", "Berceau", 0.5),
      nachtkast,
      i("speelgoedkist", "Speelgoedkist", "Coffre à jouets", 0.25),
      i("speelgoed", "Speelgoed", "Jouets", 0.5),
      commode,
      kast,
      stoel,
      bureau,
      doos,
    ],
  },
  {
    id: "badkamer",
    nl: "Badkamer",
    fr: "Salle de bain",
    items: [
      i("medicijnkast", "Medicijnkastje", "Armoire à pharmacie", 0.25),
      i("badkamerkast", "Badkamerkast", "Armoire de toilette", 0.3),
      i("spiegelkast", "Spiegelkast", "Miroir avec appliques", 0.15),
      i("wastafelkast", "Wastafelkast", "Meuble sous-lavabo", 0.4),
      stoel,
      i("wasmand", "Wasmand", "Panier à linge", 0.15),
      wasmachine,
      droogkast,
      commode,
      doos,
    ],
  },
  {
    id: "bureau",
    nl: "Bureau",
    fr: "Bureau",
    items: [
      bureau,
      i("bureaustoel", "Bureaustoel", "Fauteuil de bureau", 0.4),
      stoel,
      i("computer", "Computer of hifi", "Ordinateur ou hifi", 0.25),
      i("archiefkast", "Archiefkast", "Classeur", 0.5),
      commode,
      boekenkast,
      spiegel,
      lamp,
      doos,
    ],
  },
  {
    id: "berging",
    nl: "Kelder, garage en zolder",
    fr: "Cave, garage et grenier",
    items: [
      kast,
      dressoir,
      i("rek", "Rek of stelling", "Étagère", 0.5),
      i("inhoudkast", "Inhoud van een kast", "Contenu de placard", 1.0),
      i("fiets", "Fiets", "Vélo", 0.25),
      i("werkbank", "Werkbank", "Établi", 0.8),
      i("ladder", "Ladder of trapje", "Échelle ou escabeau", 0.25),
      i("gereedschap", "Gereedschap", "Outils de bricolage", 0.5),
      maaier,
      zitmaaier,
      kist,
      i("flessenrek", "Flessenrek", "Porte-bouteilles", 0.15),
      wasmachine,
      droogkast,
      koelkast,
      doos,
    ],
  },
  {
    id: "tuin",
    nl: "Tuin en terras",
    fr: "Jardin et terrasse",
    items: [
      tafel,
      stoel,
      i("ligstoel", "Ligstoel", "Chaise longue", 0.5),
      i("parasol", "Parasol", "Parasol", 0.25),
      i("barbecue", "Barbecue", "Barbecue", 0.25),
      i("pingpong", "Pingpongtafel", "Table de ping-pong", 0.25),
      i("tuingerief", "Tuingereedschap", "Outils de jardin", 0.5),
      maaier,
      zitmaaier,
      plant,
      doos,
    ],
  },
  {
    id: "divers",
    nl: "Zwaar en bijzonder",
    fr: "Lourd et particulier",
    items: [
      i("piano", "Piano", "Piano", 1.5),
      i("kluis", "Kluis of brandkast", "Coffre-fort", 0.5),
      i("fitness", "Fitnesstoestel", "Appareil de musculation", 0.5),
      i("tapijt", "Tapijt", "Tapis", 0.15),
      i("strijkplank", "Strijkplank", "Table à repasser", 0.15),
      i("stofzuiger", "Stofzuiger", "Aspirateur", 0.15),
      doos,
    ],
  },
];

/** Rough truck sizing, used to turn an abstract m³ number into something concrete. */
export function truckFor(m3: number) {
  if (m3 <= 0) return null;
  if (m3 <= 12) return { nl: "Bestelwagen, 2 verhuizers", fr: "Camionnette, 2 déménageurs", cap: 12 };
  if (m3 <= 22) return { nl: "Verhuiswagen 22 m³, 2 tot 3 verhuizers", fr: "Camion 22 m³, 2 à 3 déménageurs", cap: 22 };
  if (m3 <= 40) return { nl: "Verhuiswagen 40 m³, 3 tot 4 verhuizers", fr: "Camion 40 m³, 3 à 4 déménageurs", cap: 40 };
  return { nl: "Twee ritten of twee wagens, 4 verhuizers", fr: "Deux trajets ou deux camions, 4 déménageurs", cap: 80 };
}
