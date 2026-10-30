import type { ProgrammeDay, ProgrammeSession } from "@/content/schema";
import type { Locale } from "@/lib/i18n";

// Transcribed from the agenda supplied on 2026-10-30 (detailed pages 3–4). Missing rooms remain null.
// Names and affiliations are shared across locales; only editorial copy is translated.
export const eventPeople = {
  paolo: ["Paolo Moncagatta", "USFQ"], arnaldo: ["Arnaldo Medina", "UNAJ"],
  diana: ["Diana Mosquera", "Diversa"], cheryl: ["Cheryl Martens", "USFQ"],
  horacio: ["Horacio Correa Lucero", "LASTLab / UNAJ"],
  belen: ["María Belén Albornoz", "CTS Lab–FLACSO Ecuador"],
  laura: ["Laura Melo", "ONU Ecuador"], guanche: ["Julio César Guanche", "FLACSO Ecuador"],
  alexandra: ["Alexandra Gualavisí", "FLACSO Ecuador"], daniel: ["Daniel Riofrío", "USFQ"],
  ola: ["Ola Bini", "Seguridad Digital"], roberto: ["Roberto Andrade", "USFQ"],
  farith: ["Farith Simon", "USFQ"], priscilla: ["Priscilla Purtschert", "Taller Comunicación Mujer"],
  ariel: ["Ariel Vercelli", "Universidad Nacional de Mar del Plata"],
  tracey: ["Tracey Tokuhama-Espinosa", "Conexiones"],
  fernando: ["Fernando Astudillo", "USFQ"], luciana: ["Luciana Mussello", "USFQ"],
  cristina: ["Cristina Cabezas", "USFQ"], felipe: ["Felipe Grijalva", "USFQ"],
  jaime: ["Jaime Ramírez", "DINERS"], andres: ["Andrés Domínguez Hernández", "Queen Mary University of London"],
  juan: ["Juan Grigera", "King’s College London"], vizuete: ["Daniel Vizuete", "CTS Lab–FLACSO Ecuador"],
  ernesto: ["Ernesto Vivares", "FLACSO Ecuador"], angel: ["Angel Gutierrez", "FLACSO Ecuador"],
  emilie: ["Emilie Dupuits", "USFQ"], pablo: ["Pablo Cabrera Barona", "FLACSO Ecuador"],
  miguel: ["Miguel Ángel Contreras", "Universidad Central de Venezuela"],
  julian: ["Julián Posada", "Yale University"], mor: ["Mor Naaman", "Cornell Tech"]
} satisfies Record<string, [string, string]>;

type Person = keyof typeof eventPeople;
export const personLine = (id: Person) => eventPeople[id].join(" — ");
const theatre = "Teatro Calderón de la Barca";

export function getProgramme(locale: Locale): ProgrammeDay[] {
  const t = (es: string, en: string) => locale === "es" ? es : en;
  function session(id: string, time: string, es: string, en: string, type: [string, string], people: Person[] = [], room: string | null = null, moderator?: Person, parallel = false, description?: string): ProgrammeSession {
    return { id, time, title: t(es, en), type: t(...type), participants: people.map(personLine), room,
      moderator: moderator ? personLine(moderator) : undefined, parallel, status: "confirmed", description };
  }
  const logistics: [string, string] = ["Logística", "Logistics"];
  const keynote: [string, string] = ["Conferencia magistral", "Keynote"];
  const plenary: [string, string] = ["Mesa plenaria", "Plenary panel"];
  const workshop: [string, string] = ["Taller", "Workshop"];
  const parallel: [string, string] = ["Sesión paralela", "Parallel session"];
  return [
    { date: "2026-11-09", label: t("Lunes 9 de noviembre", "Monday, November 9"),
      theme: t("Vigilancia, seguridad técnica y sostenibilidad de la IA", "Surveillance, technical security and AI sustainability"), sessions: [
        session("registration-1", "08:30–08:50", "Registro", "Registration", logistics),
        session("welcome", "08:50–09:00", "Apertura institucional · Bienvenida", "Institutional opening · Welcome", ["Apertura", "Opening"], ["paolo", "arnaldo"], theatre),
        session("keynotes-1", "09:00–09:50", "Conferencias magistrales", "Keynote lectures", keynote, ["guanche", "laura"], theatre),
        session("launch", "10:00–11:00", "Lanzamiento de LASTLab: IA abierta, responsable y crítica en América Latina", "LASTLab launch: Open, responsible and critical AI in Latin America", ["Lanzamiento", "Launch"], ["diana", "cheryl", "horacio", "belen"], theatre),
        session("coffee-1", "11:00–11:30", "Pausa café", "Coffee break", logistics, [], t("Hall principal", "Main hall")),
        session("surveillance", "11:30–12:45", "Gobernanza de la inteligencia artificial: vigilancia y derechos", "AI governance: surveillance and rights", plenary, ["belen", "alexandra", "daniel", "ola"], theatre, "diana"),
        session("lunch-1", "12:45–13:45", "Almuerzo libre", "Lunch break", logistics),
        session("workshop-a", "13:45–15:50", "Taller A · Seguridad, vulnerabilidades y evaluación de modelos de IA", "Workshop A · Security, vulnerabilities and AI model evaluation", workshop, ["roberto"], theatre, undefined, true),
        session("workshop-b", "13:45–15:50", "Taller B · Mapeo de la IA: trabajo, recursos y territorios", "Workshop B · Mapping AI: labour, resources and territories", workshop, ["diana"], "Auditorio Epicuro EP-24", undefined, true),
        session("workshop-c", "13:45–15:50", "Taller C · Enseñanza y proyectos de IA crítico", "Workshop C · Teaching and critical AI projects", workshop, ["farith"], "Patio interno Da Vinci", undefined, true),
        session("workshop-d", "13:45–15:50", "Taller D · Impactos de la IA y las tecnologías digitales: centros de datos, explotación y violencia", "Workshop D · Impacts of AI and digital technologies: data centres, exploitation and violence", workshop, ["priscilla"], null, undefined, true),
        session("transition-1", "15:50–16:00", "Transición", "Transition", logistics),
        session("governance-1", "16:00–17:00", "Gobernanza técnica y sostenibilidad de la inteligencia artificial", "Technical governance and sustainability of artificial intelligence", plenary, ["ariel", "cheryl"], theatre, "farith")
      ] },
    { date: "2026-11-10", label: t("Martes 10 de noviembre", "Tuesday, November 10"),
      theme: t("Conferencias, sesiones paralelas, gobernanza, trabajo, colonialidad e infraestructura de IA", "Keynotes, parallel sessions, governance, labour, coloniality and AI infrastructure"), sessions: [
        session("registration-2", "08:15–08:30", "Registro", "Registration", logistics, [], theatre),
        session("pedagogy", "08:30–09:50", "Pedagogías críticas de IA", "Critical AI pedagogies", parallel, ["tracey", "fernando", "luciana"], theatre, "cristina", true),
        session("security", "08:30–09:50", "Seguridad, vulnerabilidades y evaluación de modelos de IA", "Security, vulnerabilities and AI model evaluation", parallel, ["felipe", "jaime"], "Auditorio Biblioteca", "daniel", true),
        session("transition-2", "09:50–10:00", "Transición", "Transition", logistics),
        session("sociotechnical", "10:00–11:00", "IA, tecnología y cambio sociotécnico", "AI, technology and sociotechnical change", keynote, ["andres", "juan"], theatre, "horacio", false,
          t("Andrés Domínguez Hernández: «Hacia una ecología sociotécnica de la inteligencia artificial». Juan Grigera: «IA y las leyes del movimiento del capital: comprender la difusión tecnológica desigual».", "Andrés Domínguez Hernández: ‘Towards a sociotechnical ecology of artificial intelligence’. Juan Grigera: ‘AI and the Laws of Motion of Capital: Understanding Uneven Technological Diffusion’.")),
        session("coffee-2", "11:00–11:30", "Pausa café", "Coffee break", logistics, [], t("Hall principal", "Main hall")),
        session("platforms", "11:30–12:45", "La IA y el trabajo en plataformas", "AI and platform labour", parallel, ["vizuete"], theatre, "belen", true),
        session("governance-2", "11:30–12:45", "Gobernanza de la IA y sostenibilidad", "AI governance and sustainability", parallel, ["ernesto", "angel", "emilie", "pablo"], "Patio interno Da Vinci", "horacio", true),
        session("lunch-2", "12:45–14:15", "Almuerzo libre", "Lunch break", logistics),
        session("coloniality", "14:15–15:15", "Colonialidad, trabajo e infraestructura de inteligencia artificial en América Latina", "Coloniality, labour and AI infrastructure in Latin America", keynote, ["miguel", "julian"], theatre, undefined, false,
          t("Miguel Ángel Contreras: «Aletheia algorítmica: sesgo incorporado, discriminación y colonialidad, o los desafíos estratégicos de la región». Julián Posada: «Inteligencia artificial, trabajo e infraestructura».", "Miguel Ángel Contreras: ‘Algorithmic aletheia: embedded bias, discrimination and coloniality, or the region’s strategic challenges’. Julián Posada: ‘Artificial intelligence, labour and infrastructure’.")),
        session("author", "15:15–15:55", "Conversación con el autor: Platform Extractivism", "In conversation with the author: Platform Extractivism", ["Conversación", "Conversation"], ["julian"]),
        session("closing-keynote", "16:00–17:00", "AI, Information, and Democracy", "AI, Information, and Democracy", keynote, ["mor"], theatre, undefined, false,
          "Don and Mibs Follett Professor of Information Science and Associate Dean for Faculty Affairs, Cornell Tech."),
        session("closing", "17:00–18:00", "Cierre", "Closing", ["Cierre", "Closing"], [], "Hall Calderón de la Barca")
      ] }
  ];
}
