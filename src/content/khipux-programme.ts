import type { ProgrammeDay, ProgrammeSession } from "@/content/schema";
import type { Locale } from "@/lib/i18n";

// Transcribed from official agenda version (9), supplied on 2026-11-06 (pages 3–4). Missing rooms remain null.
// Two participant additions confirmed by the organization on 2026-11-06 apply to the web only.
// Names and affiliations are shared across locales; only editorial copy is translated.
export const eventPeople = {
  paolo: ["Paolo Moncagatta", "USFQ"], arnaldo: ["Arnaldo Medina", "UNAJ"],
  diego: ["Diego Quiroga Ferri", "USFQ"],
  diana: ["Diana Mosquera", "Diversa"], cheryl: ["Cheryl Martens", "USFQ"],
  horacio: ["Horacio Correa Lucero", "LASTLab / UNAJ"],
  belen: ["María Belén Albornoz", "CTS Lab–FLACSO Ecuador"],
  guanche: ["Julio César Guanche", "FLACSO Ecuador"],
  alexandra: ["Alexandra Belén Gualavisí", "FLACSO Ecuador"], daniel: ["Daniel Riofrío", "Sigma AI Lab, USFQ"],
  roberto: ["Roberto Andrade", "USFQ"],
  farith: ["Farith Simon", "USFQ"], priscilla: ["Priscilla Purtschert", "Taller Comunicación Mujer"],
  ariel: ["Ariel Vercelli", "Universidad Nacional de Mar del Plata"],
  tracey: ["Tracey Tokuhama-Espinosa, Ph.D.", "Conexiones and Harvard University Summer and Extension Schools, Faculty of Arts and Sciences"],
  fernando: ["Fernando Astudillo", "USFQ"], luciana: ["Luciana Musello", "COCOA, USFQ"],
  cristina: ["Cristina Cabezas", "USFQ"], felipe: ["Felipe Grijalva", "Sigma AI Lab, USFQ"],
  edison: ["Edison Loza", "CADE, USFQ"], pierre: ["Pierre Escalante", "USFQ / ZHIDAO GOVTECH"],
  gabriel: ["Gabriel Perdomo", "UADE y UNAJ"], lizette: ["Lizette Aguirre", "UNAJ"],
  jaime: ["Jaime Ramírez", "DINERS"], andres: ["Andrés Domínguez Hernández", "Queen Mary University of London"],
  juan: ["Juan Grigera", "King’s College London"], vizuete: ["Daniel Vizuete", "CTS Lab–FLACSO Ecuador"],
  ernesto: ["Ernesto Vivares", "FLACSO Ecuador"], angel: ["Ángel Alonso Gutiérrez Pérez", "FLACSO Ecuador"],
  emilie: ["Emilie Dupuits", "USFQ"], pablo: ["Pablo Cabrera Barona", "FLACSO Ecuador"],
  miguel: ["Miguel Ángel Contreras Natera", "Universidad Central de Venezuela"],
  julian: ["Julián Posada", "Yale University"], mor: ["Mor Naaman", "Cornell Tech"],
  "salvatore-foti": ["Salvatore Foti", ""],
  "etsa-franklin-sharupi-tapuy": ["Etsa Franklin Sharupi Tapuy", "Naciones originarias Shuar–Quijos"]
} satisfies Record<string, [string, string]>;

type Person = keyof typeof eventPeople;
export const personLine = (id: Person, locale: Locale = "es") => {
  const [name, affiliation] = eventPeople[id];
  const institution = id === "gabriel" && locale === "en" ? "UADE and UNAJ"
    : id === "etsa-franklin-sharupi-tapuy" && locale === "en" ? "Shuar–Quijos Indigenous peoples" : affiliation;
  const role = id === "diego" || id === "arnaldo" ? (locale === "es" ? "rector de " : "Rector of ") : "";
  return institution ? `${name} — ${role}${institution}` : name;
};
// Academic sessions within the four Zoom brackets of the official v9 PDF (pages 3–4).
// Both programme views use these same sessions; logistics are intentionally excluded.
const zoomSessionIds = new Set([
  "welcome", "keynotes-1", "launch", "surveillance", "governance-1",
  "sociotechnical", "coloniality", "author", "closing-keynote"
]);
// Original presentation titles supplied by the organizers, shared across locales.
const individualTalkTitles: Record<string, Partial<Record<Person, string>>> = {
  "keynotes-1": {
    guanche: "Tres vías de herencia: el genoma, la red y la inteligencia artificial",
    horacio: "¿Cómo se configura la inteligencia artificial? Redes sociobiotécnicas, poder y dependencia en América Latina",
  },
  "sociotechnical": {
    andres: "Hacia una ecología sociotécnica de la inteligencia artificial",
    juan: "IA y las leyes del movimiento del capital: comprender la difusión tecnológica desigual",
  },
  "coloniality": {
    miguel: "Aletheia algorítmica: sesgo incorporado, discriminación y colonialidad, o los desafíos estratégicos de la región",
    julian: "Inteligencia artificial, trabajo e infraestructura",
  },
};

const theatre = "Teatro Calderón de la Barca";

export function getProgramme(locale: Locale): ProgrammeDay[] {
  const t = (es: string, en: string) => locale === "es" ? es : en;
  function session(id: string, time: string, es: string, en: string, type: [string, string], people: Person[] = [], room: string | null = null, moderator?: Person, parallel = false, description?: string): ProgrammeSession {
    return { id, time, zoom: zoomSessionIds.has(id), title: t(es, en), type: t(...type), participants: people.map(id => personLine(id, locale)), room,
      talkTitles: Object.fromEntries(Object.entries(individualTalkTitles[id] ?? {}).map(([person, title]) => [personLine(person as Person, locale), title])),
      moderator: moderator ? personLine(moderator, locale) : undefined, parallel, status: "confirmed", description };
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
        session("welcome", "08:50–09:00", "Apertura institucional · Bienvenida", "Institutional opening · Welcome", ["Apertura", "Opening"], ["paolo", "arnaldo", "diego"], theatre, undefined, false,
          t("Diego Quiroga Ferri, rector de USFQ: participación remota desde Valencia.", "Diego Quiroga Ferri, Rector of USFQ: remote participation from Valencia.")),
        session("keynotes-1", "09:00–10:15", "Conferencias magistrales", "Keynote lectures", keynote, ["guanche", "horacio"], theatre),
        session("launch", "10:15–11:00", "Acto institucional de presentación de LASTLab: IA abierta, responsable y crítica en América Latina", "Institutional launch session of LASTLab: Open, responsible and critical AI in Latin America", ["Acto institucional", "Institutional session"], ["diana", "cheryl", "horacio", "belen"], theatre),
        session("coffee-1", "11:00–11:30", "Pausa café", "Coffee break", logistics, [], t("Hall principal", "Main hall")),
        session("surveillance", "11:30–12:45", "Gobernanza de la inteligencia artificial: vigilancia y derechos", "AI governance: surveillance and rights", plenary, ["belen", "alexandra", "daniel"], theatre, "diana"),
        session("lunch-1", "12:45–14:00", "Almuerzo libre", "Lunch break", logistics),
        session("workshop-a", "14:00–15:50", "Taller A · Seguridad, vulnerabilidades y evaluación de modelos de IA", "Workshop A · Security, vulnerabilities and AI model evaluation", workshop, ["roberto"], theatre, undefined, true),
        session("workshop-b", "14:00–15:50", "Taller B · Mapeo de la IA: trabajo, recursos y territorios", "Workshop B · Mapping AI: labour, resources and territories", workshop, ["diana"], "Auditorio Epicuro EP-24", undefined, true),
        session("workshop-c", "14:00–15:50", "Taller C · Enseñanza y proyectos de IA crítica", "Workshop C · Teaching and critical AI projects", workshop, ["farith"], "Patio interno Da Vinci", undefined, true),
        session("workshop-d", "14:00–15:50", "Taller D · Impactos de la IA y las tecnologías digitales: centros de datos, explotación y violencia", "Workshop D · Impacts of AI and digital technologies: data centres, exploitation and violence", workshop, ["priscilla"], "Maxwell M-312", undefined, true),
        session("transition-1", "15:50–16:00", "Transición", "Transition", logistics),
        session("governance-1", "16:00–17:00", "Gobernanza técnica y sostenibilidad de la inteligencia artificial", "Technical governance and sustainability of artificial intelligence", plenary, ["ariel", "cheryl", "etsa-franklin-sharupi-tapuy"], theatre, "farith")
      ] },
    { date: "2026-11-10", label: t("Martes 10 de noviembre", "Tuesday, November 10"),
      theme: t("Conferencias, sesiones paralelas, gobernanza, trabajo, colonialidad e infraestructura de IA", "Keynotes, parallel sessions, governance, labour, coloniality and AI infrastructure"), sessions: [
        session("registration-2", "08:15–08:30", "Registro", "Registration", logistics, [], theatre),
        session("pedagogy", "08:30–09:50", "Pedagogías críticas de IA", "Critical AI pedagogies", parallel, ["tracey", "fernando", "luciana"], theatre, "cristina", true),
        session("security", "08:30–09:50", "Seguridad, vulnerabilidades y evaluación de modelos de IA", "Security, vulnerabilities and AI model evaluation", parallel, ["felipe", "edison", "jaime", "gabriel"], "Auditorio Biblioteca", "daniel", true),
        session("transition-2", "09:50–10:00", "Transición", "Transition", logistics),
        session("sociotechnical", "10:00–11:00", "IA, tecnología y cambio sociotécnico", "AI, technology and sociotechnical change", keynote, ["andres", "juan"], theatre, "horacio", false),
        session("coffee-2", "11:00–11:30", "Pausa café", "Coffee break", logistics, [], t("Hall principal", "Main hall")),
        session("platforms", "11:30–12:45", "La IA y el trabajo", "AI and labour", parallel, ["vizuete", "pierre", "lizette"], "Patio Interno Da Vinci", "belen", true),
        session("governance-2", "11:30–12:45", "Gobernanza de la IA y sostenibilidad", "AI governance and sustainability", parallel, ["ernesto", "angel", "emilie", "pablo"], theatre, "luciana", true),
        session("lunch-2", "12:45–14:15", "Almuerzo libre", "Lunch break", logistics),
        session("coloniality", "14:15–15:15", "Colonialidad, trabajo e infraestructura de inteligencia artificial en América Latina", "Coloniality, labour and AI infrastructure in Latin America", keynote, ["miguel", "julian"], theatre, "salvatore-foti", false),
        { ...session("author", "15:15–15:55", "Conversación con el autor: Platform Extractivism", "In conversation with the author: Platform Extractivism", ["Conversación", "Conversation"], ["julian"], theatre), discussant: personLine("horacio", locale) },
        session("closing-keynote", "16:00–17:00", "The Democratic Costs of AI-Mediated Information", "The Democratic Costs of AI-Mediated Information", keynote, ["mor"], theatre, "cheryl", false,
          t("Mor Naaman — Cornell Tech. Don and Mibs Follett Professor of Information Science and Associate Dean for Faculty Affairs, Cornell Tech.", "Mor Naaman — Cornell Tech. Don and Mibs Follett Professor of Information Science and Associate Dean for Faculty Affairs, Cornell Tech.")),
        session("closing", "17:00–18:00", "Cierre", "Closing", ["Cierre", "Closing"], [], "Hall del Calderón de la Barca")
      ] }
  ];
}
