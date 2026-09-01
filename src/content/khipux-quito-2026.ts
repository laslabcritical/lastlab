import type { KhipuxQuitoPageContent } from "@/content/schema";

const people = {
  juanGrigera: {
    id: "juan-grigera",
    name: "Juan Grigera",
    photoSrc: null,
    externalUrl: null
  },
  julianPosada: {
    id: "julian-posada",
    name: "Julián Posada",
    photoSrc: null,
    externalUrl: null
  },
  miguelContreras: {
    id: "miguel-angel-contreras-natera",
    name: "Miguel Ángel Contreras Natera",
    photoSrc: null,
    externalUrl: null
  },
  horacioCorrea: {
    id: "horacio-correa-lucero",
    name: "Horacio Correa Lucero",
    photoSrc: null
  },
  dianaMosquera: {
    id: "diana-mosquera",
    name: "Diana Mosquera",
    photoSrc: null
  },
  cherylMartens: {
    id: "cheryl-martens",
    name: "Cheryl Martens",
    photoSrc: null
  },
  mariaBelenAlbornoz: {
    id: "maria-belen-albornoz",
    name: "María Belén Albornoz",
    photoSrc: null
  },
  pabloCabrera: {
    id: "pablo-cabrera-barona",
    name: "Pablo Cabrera Barona",
    photoSrc: null
  }
};

export const khipuxQuito2026: KhipuxQuitoPageContent = {
  slug: "khipux-quito",
  title: "KHIPUx Quito 2026",
  subtitle: "Open, Responsible and Critical AI",
  description:
    "Encuentro académico y público sobre inteligencia artificial abierta, responsable y crítica desde perspectivas latinoamericanas.",
  dates: {
    start: "2026-11-19",
    end: "2026-11-20",
    display: "19 y 20 de noviembre de 2026",
    shortDisplay: "19–20 NOV 2026"
  },
  location: {
    city: "Quito",
    country: "Ecuador",
    firstVenue: "FLACSO Ecuador",
    secondVenue: null
  },
  format: "Híbrido",
  duration: "Dos jornadas",
  status: {
    program: "in_progress",
    registration: "coming_soon"
  },
  links: {
    registrationUrl: null,
    fullProgramUrl: null
  },
  eventContact: {
    email: null,
    formUrl: null,
    instagramUrl: null,
    linkedinUrl: null
  },
  seo: {
    title: "KHIPUx Quito 2026 | LAST Lab",
    description:
      "KHIPUx Quito 2026: Open, Responsible and Critical AI se realizará el 19 y 20 de noviembre de 2026 en FLACSO Ecuador, Quito, en modalidad híbrida."
  },
  anchors: [
    { id: "about", label: "Sobre" },
    { id: "themes", label: "Ejes" },
    { id: "programme", label: "Programa" },
    { id: "participants", label: "Participantes" },
    { id: "venue", label: "Sede" },
    { id: "partners", label: "Instituciones" }
  ],
  hero: {
    eyebrow: "Quito, Ecuador",
    primaryAction: "Programa próximamente",
    secondaryAction: "Inscripciones próximamente",
    launchNote:
      "Con el lanzamiento público de LAST Lab for Critical AI & Digital Technologies"
  },
  overview: {
    title: "Sobre KHIPUx Quito",
    paragraphs: [
      "KHIPUx Quito 2026 es un encuentro académico y público sobre inteligencia artificial abierta, responsable y crítica desde perspectivas latinoamericanas.",
      "El evento se desarrollará el 19 y 20 de noviembre de 2026 en FLACSO Ecuador, Quito, con modalidad híbrida.",
      "La propuesta busca abrir un diálogo entre investigación, políticas públicas, tecnología y sociedad alrededor de los desafíos contemporáneos de la inteligencia artificial.",
      "En este marco se realizará también el lanzamiento público de LAST Lab for Critical AI & Digital Technologies, como una instancia asociada al encuentro y no como su único propósito."
    ]
  },
  objectives: {
    title: "Objetivos del encuentro",
    items: [
      "Promover una discusión latinoamericana sobre inteligencia artificial abierta, responsable y crítica.",
      "Conectar investigación académica, sociedad civil, sector público y comunidades tecnológicas.",
      "Analizar las relaciones entre inteligencia artificial, trabajo, desigualdad, derechos, infraestructura y sostenibilidad.",
      "Fortalecer redes y cooperación regional en investigación, formación y discusión pública.",
      "Presentar públicamente LAST Lab for Critical AI & Digital Technologies."
    ]
  },
  themes: {
    eyebrow: "Tres ejes",
    title: "Ejes temáticos",
    intro:
      "Los tres ejes orientan la construcción del programa y articulan las distintas actividades del encuentro.",
    note:
      "Las perspectivas críticas, latinoamericanas, decoloniales y sobre dependencia atraviesan transversalmente los tres ejes."
  },
  topics: [
    {
      title: "Algorithmic Surveillance and AI Security",
      description:
        "Vigilancia algorítmica, derechos, privacidad, auditoría, vulnerabilidades, evaluación de modelos, robustez y seguridad de sistemas de inteligencia artificial."
    },
    {
      title: "AI, Labour and Digital Platforms",
      description:
        "Automatización, adopción de inteligencia artificial, plataformas digitales, gestión algorítmica, cadenas de producción de IA, trabajo, desigualdad y alternativas tecnológicas y laborales."
    },
    {
      title: "AI Governance and Sustainability",
      description:
        "Regulación, gobernanza técnica, infraestructura, documentación, auditoría, capacidades institucionales, uso de energía y recursos e impactos ambientales de la inteligencia artificial."
    }
  ],
  program: {
    title: "Programa 2026",
    body:
      "El programa completo de KHIPUx Quito 2026 se encuentra en elaboración y será publicado próximamente. El encuentro se desarrollará durante dos jornadas, el 19 y 20 de noviembre de 2026, en FLACSO Ecuador, Quito.",
    actionLabel: "Programa próximamente"
  },
  participants: {
    title: "Participantes confirmados",
    people: [
      {
        ...people.juanGrigera,
        institution: "King’s College London",
        biography: "Participación confirmada. Modalidad online.",
        confirmationStatus: "Participación confirmada.",
        modality: "Modalidad online.",
        talkTitle:
          "AI and the Laws of Motion of Capital: Understanding Uneven Technological Diffusion"
      },
      {
        ...people.julianPosada,
        institution: "Yale University",
        biography: "Participación confirmada. Modalidad online.",
        confirmationStatus: "Participación confirmada.",
        modality: "Modalidad online.",
        talkTitle: null
      },
      {
        ...people.miguelContreras,
        institution: "Universidad Central de Venezuela",
        biography: "Participación confirmada.",
        confirmationStatus: "Participación confirmada.",
        modality: null,
        talkTitle: null
      }
    ],
    pendingBody: "Más participantes serán anunciados próximamente."
  },
  organizingTeam: {
    title: "Equipo organizador",
    body:
      "Estas personas aparecen aquí por su papel en la organización y coordinación del evento.",
    people: [
      {
        ...people.horacioCorrea,
        role: null,
        affiliations: [
          "LAST Lab for Critical AI & Digital Technologies",
          "Universidad Nacional Arturo Jauretche",
          "Universidad San Francisco de Quito"
        ]
      },
      {
        ...people.dianaMosquera,
        role: null,
        affiliations: ["Diversa"]
      },
      {
        ...people.cherylMartens,
        role: null,
        affiliations: ["Universidad San Francisco de Quito"]
      },
      {
        ...people.mariaBelenAlbornoz,
        role: null,
        affiliations: ["FLACSO Ecuador", "CTS Lab"]
      },
      {
        ...people.pabloCabrera,
        role: "Coordinador de Investigación",
        affiliations: ["FLACSO Ecuador"]
      }
    ]
  },
  registration: {
    title: "Participación",
    body: "La información sobre inscripciones será anunciada próximamente.",
    modalitiesTitle: "Formas generales de participación",
    modalities: [
      "Asistencia presencial",
      "Participación online",
      "Talleres y actividades"
    ],
    statusLabel: "Inscripciones próximamente"
  },
  organization: {
    title: "Instituciones",
    groups: [
      {
        label: "ORGANIZAN",
        items: [
          {
            name: "LAST Lab for Critical AI & Digital Technologies",
            logoSrc: "/brand/3.svg",
            placeholder: "Logo institucional"
          },
          {
            name: "Diversa",
            logoSrc: null,
            placeholder: "Logo pendiente"
          },
          {
            name: "Universidad San Francisco de Quito",
            logoSrc: null,
            placeholder: "Logo pendiente"
          },
          {
            name: "Universidad Nacional Arturo Jauretche",
            logoSrc: null,
            placeholder: "Logo pendiente"
          }
        ]
      },
      {
        label: "SEDE ANFITRIONA",
        items: [
          {
            name: "FLACSO Ecuador",
            logoSrc: null,
            placeholder: "Logo pendiente"
          }
        ]
      },
      {
        label: "CON EL APOYO DE",
        items: [
          {
            name: "KHIPUx",
            logoSrc: "/khipux/assets/khipu-logo-horizontal.svg",
            placeholder: "Logo KHIPUx"
          }
        ]
      }
    ]
  },
  contact: {
    title: "Contacto",
    body: "Información de contacto próximamente."
  },
  eventFooter: {
    title: "KHIPUx Quito 2026",
    subtitle: "Open, Responsible and Critical AI",
    location: "FLACSO Ecuador, Quito",
    dates: "19 y 20 de noviembre de 2026",
    organizationText:
      "Encuentro académico y público sobre inteligencia artificial abierta, responsable y crítica.",
    supportText:
      "Con el lanzamiento público de LAST Lab for Critical AI & Digital Technologies."
  }
};

export const khipuxQuito2026Todos = [
  "Publicar el programa definitivo.",
  "Confirmar asignaciones de espacios para actividades paralelas.",
  "Confirmar mecanismo de inscripción.",
  "Incorporar fotografías autorizadas de participantes y equipo organizador.",
  "Confirmar logos oficiales de instituciones participantes.",
  "Incorporar correo de contacto público."
];
