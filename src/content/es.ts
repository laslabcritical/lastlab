import type { LocaleContent } from "@/content/schema";

export const esContent: LocaleContent = {
  siteName: "LAST Lab for Critical AI",
  siteSubtitle: "Latin American SocioTechnical Laboratory for Critical AI & Digital Technologies",
  navLabels: {
    home: "Inicio",
    about: "Sobre el Lab",
    network: "Red",
    research: "Investigación y Acción",
    publications: "Publicaciones",
    training: "Formación",
    governance: "Gobernanza",
    cooperation: "Cooperación",
    contact: "Contacto"
  },
  ui: {
    menuLabel: "Menú",
    switchTo: {
      es: "Ver en Español",
      en: "Ver en Inglés"
    },
    footerRights: "Todos los derechos reservados"
  },
  footerLinks: ["contact", "governance", "cooperation"],
  pages: {
    home: {
      seo: {
        title: "Inicio",
        description:
          "Red latinoamericana multinodal de investigación, innovación e incidencia en inteligencia artificial y tecnologías digitales."
      },
      hero: {
        title: "LAST Lab for Critical AI",
        subtitle:
          "Red latinoamericana multinodal de investigación, innovación e incidencia en inteligencia artificial.",
        description:
          "Repensamos la inteligencia artificial como mediación socio-técnica que transforma los entornos de conocimiento, poder y reproducción social en América Latina y el Sur Global.",
        actions: [
          { label: "Explorar la Red", page: "network" },
          { label: "Investigación y Acción", page: "research" }
        ]
      },
      strategic: {
        eyebrow: "Problema estratégico",
        title: "¿Por qué una mirada latinoamericana sobre la IA?",
        body:
          "La expansión de la inteligencia artificial está reconfigurando instituciones, economías y formas de vida en la región. Sin embargo, los marcos conceptuales, regulatorios y tecnológicos que estructuran esta transformación se producen mayoritariamente fuera de América Latina. El LAST Lab surge para producir conocimiento situado, desarrollar alternativas tecnológicas y contribuir estratégicamente al debate público regional."
      },
      whatWeDo: {
        eyebrow: "Qué hacemos",
        title: "Investigación, prototipado e incidencia",
        body:
          "El LAST Lab combina producción académica rigurosa, experimentación tecnológica y elaboración de propuestas estratégicas."
      },
      pillars: {
        title: "Pilares",
        items: [
          {
            title: "Investigación",
            description:
              "Investigación crítica interdisciplinaria que integra filosofía, ciencias sociales y análisis técnico."
          },
          {
            title: "Innovación",
            description:
              "Desarrollo y prototipado de IA inclusiva, feminista y crítica."
          },
          {
            title: "Incidencia",
            description:
              "Policy briefs, informes estratégicos y materiales orientados a decisores públicos, organismos multilaterales y actores privados."
          },
          {
            title: "Formación",
            description:
              "Cursos, seminarios y espacios de capacitación en ética, política y crítica de la IA."
          }
        ]
      },
      network: {
        title: "Red binacional",
        body:
          "Una red multinodal con nodos fundacionales en Ecuador y Argentina que articula universidad y sociedad civil bajo un modelo de gobernanza flexible y resiliente."
      },
      foundation: {
        title: "Fundación",
        body:
          "Concebido en 2024 por iniciativa académica del Dr. Horacio Correa Lucero y con el apoyo intelectual e institucional fundacional de la Dra. Cheryl Martens (IEAD-USFQ)."
      },
      cta: {
        title: "Colaborar con el LAST Lab",
        actions: [
          { label: "Proponer una alianza", page: "cooperation" },
          { label: "Solicitar información", page: "contact" }
        ]
      }
    },
    about: {
      seo: {
        title: "Sobre el Lab",
        description:
          "Origen, misión y visión del LAST Lab for Critical AI como red multinodal de investigación crítica en IA."
      },
      intro:
        "El LAST Lab fue concebido en 2024 a partir de la iniciativa académica del Dr. Horacio Correa Lucero y del apoyo intelectual e institucional fundacional de la Dra. Cheryl Martens (IEAD-USFQ), cuyo respaldo temprano fue decisivo para la consolidación del proyecto.",
      sections: [
        {
          title: "Origen",
          body:
            "Su colaboración dio forma a una red multinodal, binacional y autónoma con nodos fundacionales en IEAD-USFQ (Ecuador) y UNAJ (Argentina), e integración de Diversa (Quito), articulando universidad y sociedad civil desde su origen."
        },
        {
          title: "Misión",
          body:
            "Constituir un espacio crítico, interdisciplinario y multinodal arraigado en la realidad latinoamericana y del Sur Global para el estudio, experimentación y transformación de la inteligencia artificial y las tecnologías digitales como configuraciones socio-técnicas de mediación que reestructuran entornos sociales, económicos e institucionales."
        },
        {
          title: "Visión",
          body:
            "Consolidarse como referente regional y proyección global en investigación crítica sobre inteligencia artificial, formación especializada y elaboración de propuestas estratégicas capaces de incidir en el diseño, regulación y aplicación de tecnologías digitales en América Latina y el Sur Global."
        }
      ]
    },
    network: {
      seo: {
        title: "Red",
        description:
          "Estructura multinodal, nodos fundacionales y modelo de gobernanza del LAST Lab."
      },
      intro:
        "El LAST Lab funciona como una red descentralizada de nodos institucionales, organizacionales e individuales.",
      structure: {
        title: "Estructura multinodal",
        body:
          "Este modelo garantiza flexibilidad, resiliencia y expansión regional, evitando centralismos y permitiendo continuidad más allá de cambios institucionales o personales."
      },
      seats: {
        title: "Sedes formales y alcance",
        body:
          "De acuerdo con el Acta Constitutiva, IEAD-USFQ y UNAJ son sedes formales del Lab. La red mantiene foco en América Latina y el Sur Global, con apertura a nuevos nodos internacionales alineados con su enfoque crítico."
      },
      nodes: {
        title: "Nodos fundacionales",
        items: [
          "IEAD - Universidad San Francisco de Quito (Ecuador)",
          "ICSyA - Universidad Nacional Arturo Jauretche (Argentina)",
          "Diversa (Quito, organización de la sociedad civil)"
        ]
      },
      nodeTypes: {
        title: "Tipos de nodo",
        items: [
          {
            title: "Nodo institucional",
            description:
              "Universidades, institutos o centros de investigación que albergan o participan en el Lab."
          },
          {
            title: "Nodo organizacional",
            description:
              "Organizaciones sociales, ONG o colectivos que se integran en la red multinodal."
          },
          {
            title: "Nodo individual",
            description:
              "Personas que participan a título personal, constituyendo un nodo propio dentro de la red."
          }
        ]
      },
      participants: {
        title: "Nodos participantes (registro preliminar)",
        items: [
          {
            node: "USFQ",
            country: "Ecuador",
            participants: "1 integrante"
          },
          {
            node: "UNAJ",
            country: "Argentina",
            participants: "3 integrantes"
          },
          {
            node: "Diversa",
            country: "Ecuador",
            participants: "1 integrante"
          }
        ]
      },
      governance: {
        title: "Modelo de gobernanza",
        body:
          "El LAST Lab cuenta con una Dirección General responsable de la conducción estratégica y académica, y con un Consejo Asesor Multinodal (CAM) integrado por representantes de los nodos. Este modelo combina liderazgo definido con consulta multinodal para asegurar coherencia institucional y participación en las decisiones estratégicas."
      }
    },
    research: {
      seo: {
        title: "Investigación y Acción",
        description:
          "Líneas de investigación crítica, prototipado e incidencia estratégica del LAST Lab en América Latina."
      },
      intro:
        "El LAST Lab articula investigación crítica, experimentación tecnológica e incidencia estratégica para intervenir en los procesos de diseño, regulación y aplicación de la inteligencia artificial en América Latina.",
      areas: [
        {
          title: "Investigación crítica interdisciplinaria",
          description:
            "Desarrollamos investigaciones que integran filosofía, ciencias sociales y análisis técnico para comprender la inteligencia artificial como configuración socio-técnica de mediación que reestructura relaciones de poder, conocimiento y reproducción social."
        },
        {
          title: "Prototipado de IA alternativa",
          description:
            "Exploramos y desarrollamos modelos tecnológicos inclusivos, feministas y críticos, experimentando con alternativas al paradigma corporativo dominante."
        },
        {
          title: "Cartografías y análisis de datos",
          description:
            "Diseñamos metodologías para mapear desigualdades en el acceso, diseño, implementación y gobernanza de tecnologías digitales, generando insumos para investigación e incidencia pública."
        },
        {
          title: "Producción editorial y estratégica",
          description:
            "Elaboramos policy briefs, informes técnicos, white papers y materiales de orientación destinados a decisores públicos, organismos multilaterales y actores institucionales."
        },
        {
          title: "Exploración de cooperativas tecnológicas",
          description:
            "Impulsamos el estudio y la experimentación de modelos cooperativos de producción digital para priorizar colaboración, sostenibilidad y beneficio colectivo."
        }
      ]
    },
    publications: {
      seo: {
        title: "Publicaciones",
        description:
          "Repositorio editorial del LAST Lab para publicaciones académicas y materiales estratégicos."
      },
      intro:
        "El LAST Lab produce y difunde conocimiento académico y estratégico orientado tanto a la comunidad científica como a actores institucionales y públicos.",
      collections: [
        {
          title: "Publicaciones académicas",
          status: "Próximamente"
        },
        {
          title: "Policy briefs",
          status: "Próximamente"
        },
        {
          title: "White papers",
          status: "Próximamente"
        },
        {
          title: "Working papers",
          status: "Próximamente"
        },
        {
          title: "Series editoriales",
          status: "Próximamente"
        }
      ],
      repositoryTitle: "Repositorio descargable",
      repositoryNote:
        "La estructura del repositorio descargable está preparada para futuras publicaciones."
    },
    training: {
      seo: {
        title: "Formación",
        description:
          "Programas de formación y capacitación del LAST Lab en ética, política y crítica de la IA."
      },
      intro:
        "El LAST Lab desarrolla programas de formación y capacitación orientados a fortalecer capacidades críticas y técnicas en inteligencia artificial y tecnologías digitales en América Latina.",
      areas: [
        "Ética y política de la inteligencia artificial",
        "Estudios críticos de tecnología",
        "Justicia algorítmica y análisis de desigualdades",
        "Diseño tecnológico inclusivo y crítico"
      ],
      catalogStatus:
        "Catálogo de cursos en preparación. Próximamente se publicarán cohortes, contenidos y cronogramas."
    },
    governance: {
      seo: {
        title: "Gobernanza",
        description:
          "Estructura de gobernanza, dirección y consejo asesor multinodal del LAST Lab."
      },
      intro:
        "El LAST Lab cuenta con una estructura de gobernanza que combina dirección estratégica definida y participación multinodal, garantizando coherencia institucional, transparencia y capacidad de expansión regional e internacional.",
      principlesTitle: "Principios rectores",
      principles:
        "Su funcionamiento se rige por Estatutos propios y por principios de ética académica, autonomía intelectual, inclusión, justicia social, no discriminación, antiacoso, protección de datos y transparencia institucional.",
      statutesNotesTitle: "Claves estatutarias",
      statutesNotes: [
        "El CAM es un órgano consultivo y no vinculante, salvo en los casos expresamente previstos por Estatuto.",
        "La lengua oficial de trabajo es el español; la versión en inglés opera como traducción de cortesía.",
        "La propiedad intelectual se reconoce por contribución efectiva, con preferencia por acceso abierto cuando sea posible.",
        "Cada proyecto define su entidad administradora y se publica un resumen anual de financiamiento y ejecución agregada."
      ],
      leadershipTitle: "Estructura de gobernanza",
      leadership: [
        {
          role: "Dirección General",
          person: "Dr. Horacio Correa Lucero"
        },
        {
          role: "Co-fundación y Dirección de Nodo IEAD-USFQ",
          person: "Dra. Cheryl Martens - IEAD-USFQ"
        },
        {
          role: "Dirección de Nodo UNAJ",
          person: "Dr. Horacio Correa Lucero - UNAJ"
        },
        {
          role: "Representación Nodo Diversa",
          person: "Dra. Diana Mosquera - Diversa (Quito)"
        }
      ],
      membersTitle: "Miembros activos (registro preliminar)",
      members: [
        {
          name: "Cheryl Martens",
          role: "Directora de nodo",
          node: "USFQ"
        },
        {
          name: "Horacio Correa Lucero",
          role: "Director General y director de nodo",
          node: "UNAJ"
        },
        {
          name: "Gabriel Perdomo",
          role: "Miembro institucional",
          node: "UNAJ"
        },
        {
          name: "Mónica Casanova",
          role: "Miembro institucional",
          node: "UNAJ"
        },
        {
          name: "Diana Mosquera",
          role: "Miembro organizacional",
          node: "Diversa"
        }
      ],
      cam: {
        title: "Consejo Asesor Multinodal (CAM)",
        body: "Órgano consultivo integrado por representantes de los nodos del Lab."
      }
    },
    cooperation: {
      seo: {
        title: "Cooperación",
        description:
          "Alianzas académicas, institucionales y sociales para investigación crítica y responsabilidad pública en IA."
      },
      intro:
        "El LAST Lab promueve alianzas académicas, institucionales y sociales que compartan sus principios de investigación crítica, autonomía intelectual y responsabilidad pública.",
      partnerTitle: "Buscamos colaborar con",
      partners: [
        "Universidades y centros de investigación",
        "Organismos multilaterales",
        "Fundaciones y programas de cooperación internacional",
        "Organizaciones de la sociedad civil",
        "Iniciativas tecnológicas comprometidas con criterios de inclusión y justicia social"
      ],
      principlesTitle: "Principios de cooperación",
      principles:
        "Toda cooperación se desarrolla bajo principios de independencia académica, transparencia institucional y coherencia ética con los objetivos del Lab.",
      fundingTitle: "Estrategia financiera y sostenibilidad",
      fundingSources: [
        "Convocatorias competitivas nacionales e internacionales en IA y tecnologías digitales.",
        "Alianzas con organismos multilaterales y fundaciones orientadas a innovación crítica.",
        "Vinculación con empresas privadas bajo criterios de responsabilidad social corporativa.",
        "Consorcios y redes académicas regionales para cofinanciar actividades.",
        "Programas de cursos y formación especializada en IA crítica para sostener operaciones."
      ],
      operationsTitle: "Marco operativo",
      operations:
        "Los proyectos específicos podrán gestionarse a través de las entidades administradoras correspondientes, conforme a la normativa aplicable y a los Estatutos del Lab.",
      contactPrompt:
        "Las instituciones interesadas en explorar posibilidades de colaboración pueden contactarnos a través del formulario institucional."
    },
    contact: {
      seo: {
        title: "Contacto",
        description:
          "Canales oficiales del LAST Lab para consultas institucionales, colaboraciones e invitaciones académicas."
      },
      intro:
        "El LAST Lab recibe consultas institucionales, propuestas de colaboración, invitaciones académicas y solicitudes de información a través de sus canales oficiales.",
      form: {
        nameLabel: "Nombre",
        emailLabel: "Correo electrónico",
        institutionLabel: "Institución / Organización",
        messageLabel: "Mensaje",
        submitLabel: "Enviar consulta"
      },
      emailTitle: "Email institucional",
      email: "info@lastlab.org",
      locationsTitle: "Nodos y ubicaciones",
      locations: [
        "Nodo IEAD-USFQ: Edificio Maxwell, oficina M-301, Campus Cumbayá, Universidad San Francisco de Quito (Ecuador).",
        "Nodo UNAJ: Instituto de Ciencias Sociales y Administración, Florencio Varela (Argentina).",
        "Nodo Diversa: Quito (Ecuador)."
      ],
      socialTitle: "Redes",
      socialLinks: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/"
        }
      ]
    }
  }
};
