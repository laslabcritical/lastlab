import type { KhipuxQuitoPageContent } from "@/content/schema";
import type { Locale } from "@/lib/i18n";
import { eventPeople, getProgramme, personLine } from "@/content/khipux-programme";

function createEvent(locale: Locale): KhipuxQuitoPageContent {
  const t = (es: string, en: string) => locale === "es" ? es : en;
  const venue = "Campus Santiago Gangotena, Universidad San Francisco de Quito (USFQ)";
  const dates = t("9 y 10 de noviembre de 2026", "November 9–10, 2026");
  const subtitle = t("Inteligencia Artificial Abierta, Responsable y Crítica", "Open, Responsible and Critical AI");
  const description = t("Encuentro académico y público sobre inteligencia artificial abierta, responsable y crítica desde perspectivas latinoamericanas.", "An academic and public gathering on open, responsible and critical artificial intelligence from Latin American perspectives.");
  const register = t("Inscribite al evento", "Register for the event");
  const programmeDays = getProgramme(locale);
  const participantKeys = ["andres", "mor", "juan", "julian", "miguel", ...Object.keys(eventPeople).filter(k => !["andres", "mor", "juan", "julian", "miguel"].includes(k))] as (keyof typeof eventPeople)[];
  const institution = (name: string, logo: string | null) => ({ name, logoSrc: logo, placeholder: name });
  return {
    locale, slug: "khipux-quito", title: "KHIPUx Quito 2026", subtitle, description,
    dates: { start: "2026-11-09T08:30:00-05:00", end: "2026-11-10T18:00:00-05:00", display: dates, shortDisplay: "9–10 NOV 2026" },
    location: { city: "Quito", country: "Ecuador", firstVenue: venue, secondVenue: null, mainRoom: "Teatro Calderón de la Barca", mapUrl: "https://www.google.com/maps?q=Campus%20Santiago%20Gangotena%20USFQ%20Cumbaya%20Ecuador&output=embed" },
    format: t("Híbrida", "Hybrid"), duration: t("Dos jornadas", "Two days"),
    status: { program: "published", registration: "open" },
    links: { registrationUrl: "https://forms.cloud.microsoft/r/kWQWfU7vmU", scholarshipUrl: "https://forms.cloud.microsoft/r/dwSWizyVe9", fullProgramUrl: "/khipux/descargas/programa-khipux-quito-2026.pdf", posterUrl: null },
    eventContact: { email: null, formUrl: null, instagramUrl: null, linkedinUrl: null },
    seo: { title: "KHIPUx Quito 2026 | LASTLab", description: t("KHIPUx Quito 2026: Inteligencia Artificial Abierta, Responsable y Crítica. 9 y 10 de noviembre en Campus Santiago Gangotena, USFQ, Quito. Evento híbrido y lanzamiento de LASTLab.", "KHIPUx Quito 2026: Open, Responsible and Critical AI. November 9–10 at Campus Santiago Gangotena, USFQ, Quito. Hybrid event and official LASTLab launch.") },
    ui: {
      venue: t("Sede", "Venue"), mainRoom: t("Sala principal", "Main room"), city: t("Ciudad", "City"), format: t("Modalidad", "Format"),
      openMenu: t("Abrir menú", "Open menu"), closeMenu: t("Cerrar menú", "Close menu"), moderator: t("Moderación", "Moderator"),
      participants: t("Participantes", "Participants"), room: t("Sala", "Room"), pendingRoom: t("Sala por confirmar", "Room to be confirmed"),
      parallel: t("En paralelo", "Parallel"), plenary: t("Plenaria", "Plenary"), draft: t("Por confirmar", "To be confirmed"),
      profile: t("Perfil académico", "Academic profile"), talk: t("Actividad en la agenda", "Activity in the agenda"), organization: t("Organización", "Organization"), status: t("Estado", "Status"),
      scholarship: t("Postulá a una beca", "Apply for a scholarship"), materials: t("Materiales oficiales", "Official materials"),
      downloadProgram: t("Descargar programa completo (PDF)", "Download full programme (PDF)"), viewProgram: t("Ver programa (PDF)", "View programme (PDF)"),
      downloadPoster: t("Descargar afiche oficial (JPG)", "Download official poster (JPG)"), viewPoster: t("Ver afiche", "View poster"),
      posterAlt: t("Afiche oficial de KHIPUx Quito 2026", "Official KHIPUx Quito 2026 poster"), mapTitle: t("Mapa del Campus Santiago Gangotena, USFQ", "Map of Campus Santiago Gangotena, USFQ")
    },
    anchors: [ { id: "about", label: t("Sobre", "About") }, { id: "themes", label: t("Ejes", "Themes") }, { id: "programme", label: t("Programa", "Programme") }, { id: "participants", label: t("Participantes", "Participants") }, { id: "venue", label: t("Sede", "Venue") }, { id: "partners", label: t("Instituciones", "Partners") }, { id: "materials", label: t("Materiales", "Materials") }, { id: "participation", label: register } ],
    hero: { eyebrow: "Quito, Ecuador", primaryAction: register, secondaryAction: t("Ver programa", "Explore the programme"), launchNote: t("Con el lanzamiento oficial de LASTLab for Critical AI & Digital Technologies", "Featuring the official launch of LASTLab for Critical AI & Digital Technologies") },
    overview: { title: t("Sobre el evento", "About the event"), paragraphs: [
      t("¿Cómo podemos desarrollar una inteligencia artificial más abierta, responsable y conectada con las realidades de América Latina?", "How can we develop artificial intelligence that is more open, responsible and connected to Latin American realities?"),
      t("🌎 KHIPUx reúne a investigadores, especialistas, estudiantes y actores estratégicos nacionales e internacionales para compartir conocimientos, debatir ideas y construir nuevas perspectivas sobre la inteligencia artificial, los datos y las tecnologías digitales.", "🌎 KHIPUx brings together researchers, specialists, students and national and international stakeholders to share knowledge, debate ideas and develop new perspectives on artificial intelligence, data and digital technologies."),
      t("Además, este encuentro será el escenario del lanzamiento de LASTLab, una iniciativa que busca fortalecer la investigación, la colaboración regional y el desarrollo de tecnologías desde una perspectiva crítica y responsable.", "The gathering will also host the launch of LASTLab, an initiative that aims to strengthen research, regional collaboration and technological development from a critical and responsible perspective."),
      t("Un espacio para conectar ideas, generar alianzas y pensar en conjunto el futuro tecnológico de nuestra región.", "A space to connect ideas, build partnerships and think together about our region’s technological future."),
      t("¡Sé parte de esta conversación!", "Join the conversation!")
    ] },
    objectives: { title: t("Objetivos del encuentro", "Event objectives"), items: [
      t("Promover una discusión latinoamericana sobre inteligencia artificial abierta, responsable y crítica.", "Promote a Latin American discussion on open, responsible and critical AI."),
      t("Conectar investigación académica, sociedad civil, sector público y comunidades tecnológicas.", "Connect academic research, civil society, the public sector and technology communities."),
      t("Analizar las relaciones entre inteligencia artificial, trabajo, desigualdad, derechos, infraestructura y sostenibilidad.", "Examine relationships between AI, labour, inequality, rights, infrastructure and sustainability."),
      t("Fortalecer redes y cooperación regional en investigación, formación y discusión pública.", "Strengthen regional networks and cooperation in research, training and public debate."),
      t("Presentar públicamente LASTLab for Critical AI & Digital Technologies.", "Publicly introduce LASTLab for Critical AI & Digital Technologies.")
    ] },
    themes: { eyebrow: t("Tres ejes", "Three themes"), title: t("Ejes temáticos", "Themes"), intro: t("Tres ejes articulan las actividades del encuentro.", "Three themes connect the activities throughout the event."), note: t("Las perspectivas críticas, latinoamericanas, decoloniales y sobre dependencia atraviesan transversalmente los tres ejes.", "Critical, Latin American, decolonial and dependency perspectives run across all three themes.") },
    topics: [
      { title: t("Vigilancia algorítmica y seguridad de la IA", "Algorithmic Surveillance and AI Security"), description: t("Derechos, privacidad, auditoría, vulnerabilidades, evaluación de modelos, robustez y seguridad de sistemas de inteligencia artificial.", "Rights, privacy, auditing, vulnerabilities, model evaluation, robustness and AI system security.") },
      { title: t("IA, trabajo y plataformas digitales", "AI, Labour and Digital Platforms"), description: t("Automatización, gestión algorítmica, cadenas de producción de IA, desigualdad y alternativas tecnológicas y laborales.", "Automation, algorithmic management, AI production chains, inequality and technological and labour alternatives.") },
      { title: t("Gobernanza y sostenibilidad de la IA", "AI Governance and Sustainability"), description: t("Regulación, infraestructura, documentación, capacidades institucionales, energía, recursos e impactos ambientales.", "Regulation, infrastructure, documentation, institutional capacities, energy, resources and environmental impacts.") }
    ],
    program: { title: t("Programa 2026", "2026 Programme"), body: t("Consultá las actividades de ambas jornadas. Horarios de Quito (UTC−5). Programa sujeto a actualizaciones; los datos pendientes se indican en cada actividad.", "Explore both days of activities. All times are Quito local time (UTC−5). The programme is subject to updates; pending details are identified in each activity."), actionLabel: t("Programa publicado", "Programme available") },
    programmeDays,
    scheduleNote: t("Lunes 9 desde las 08:30; martes 10 desde las 08:15. Finalización general prevista a las 18:00. La última actividad detallada del lunes termina a las 17:00 según la agenda oficial.", "Monday 9 from 08:30; Tuesday 10 from 08:15. The event is expected to finish at 18:00. The last scheduled Monday activity ends at 17:00 in the official agenda."),
    launch: { title: t("Lanzamiento oficial de LASTLab for Critical AI & Digital Technologies", "Official launch of LASTLab for Critical AI & Digital Technologies"), date: t("Lunes 9 de noviembre · 09:00–09:50 · Quito (UTC−5)", "Monday, November 9 · 09:00–09:50 · Quito (UTC−5)"), activity: t("Conferencia inaugural «IA abierta, responsable y crítica en América Latina»", "Opening keynote ‘Open, responsible and critical AI in Latin America’"), participants: ["diana", "cheryl", "belen", "horacio"].map(k => personLine(k as keyof typeof eventPeople)), description: t("LASTLab es una iniciativa latinoamericana independiente, de estructura multinodal y proyección internacional, dedicada a la investigación crítica de la inteligencia artificial y las tecnologías digitales, la cooperación académica, el desarrollo de capacidades y la incidencia en políticas públicas.", "LASTLab is an independent Latin American initiative with a multinodal structure and international reach, dedicated to critical research on artificial intelligence and digital technologies, academic cooperation, capacity building and public policy engagement.") },
    participants: { title: t("Conferencistas, panelistas y moderadores", "Speakers, panellists and moderators"), pendingBody: t("Participantes e instituciones según la agenda oficial. Las fotografías, biografías y enlaces académicos se incorporarán cuando estén disponibles y autorizados.", "Participants and affiliations follow the official agenda. Photographs, biographies and academic links will be added when available and authorized."), people: participantKeys.map(key => {
      const [name, institution] = eventPeople[key];
      const sessions = programmeDays.flatMap(d => d.sessions).filter(s => s.participants.includes(personLine(key)) || s.moderator === personLine(key));
      return { id: key, name, institution, photoSrc: null, externalUrl: null, biography: "", confirmationStatus: t("En la agenda oficial", "Listed in the official agenda"), modality: ["juan", "julian"].includes(key) ? t("Participación online", "Online participation") : null, talkTitle: sessions[0]?.title ?? null };
    }) },
    organizingTeam: { title: t("Equipo organizador", "Organizing team"), body: t("Coordinación y organización del encuentro.", "Event organization and coordination."), people: (["horacio", "diana", "cheryl", "belen", "pablo"] as const).map(key => ({ id: key, name: eventPeople[key][0], role: null, affiliations: [eventPeople[key][1]], photoSrc: null })) },
    registration: { title: t("Participación", "Participation"), body: t("Entradas: USD 25 público general y USD 18 estudiantes y comunidad USFQ. Inscribite mediante el formulario oficial o postulá a una beca.", "Tickets: USD 25 general admission and USD 18 for students and the USFQ community. Register through the official form or apply for a scholarship."), modalitiesTitle: t("Formas de participación", "Ways to participate"), modalities: [t("Asistencia presencial en USFQ", "In-person attendance at USFQ"), t("Participación online", "Online participation"), t("Talleres y actividades", "Workshops and activities")], statusLabel: t("Inscripciones abiertas", "Registration open") },
    venueDescription: t("El Teatro Calderón de la Barca será la sala principal. Las actividades paralelas se distribuirán en los espacios indicados en el programa; las salas pendientes están identificadas como por confirmar.", "Teatro Calderón de la Barca is the main room. Parallel activities take place in the spaces listed in the programme; pending room assignments are marked as to be confirmed."),
    organization: { title: t("Instituciones", "Institutions"), groups: [
      { label: t("ORGANIZAN", "ORGANIZERS"), items: [institution("Diversa", "/khipux/partners/diversa.png"), institution("Universidad San Francisco de Quito · IEAD", "/khipux/partners/usfq.png"), institution("CTS Lab–FLACSO Ecuador", "/khipux/partners/cts-lab.png"), institution("Universidad Nacional Arturo Jauretche", "/khipux/partners/unaj.png")] },
      { label: t("SEDE ANFITRIONA", "HOST VENUE"), items: [institution(venue, "/khipux/partners/usfq.png")] },
      { label: t("CON EL APOYO DE", "WITH SUPPORT FROM"), items: [institution("KHIPU", "/khipux/partners/khipu.png")] }
    ] },
    contact: { title: t("KHIPUx Quito 2026", "KHIPUx Quito 2026"), body: t("Información e inscripción en el formulario oficial del evento.", "Event information and registration through the official event form.") },
    eventFooter: { title: "KHIPUx Quito 2026", subtitle, location: venue, dates, organizationText: description, supportText: t("Con el lanzamiento oficial de LASTLab.", "Featuring the official LASTLab launch.") }
  };
}

export const khipuxQuito2026 = createEvent("es");
export const khipuxQuito2026En = createEvent("en");
