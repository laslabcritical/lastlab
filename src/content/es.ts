import type { LocaleContent } from "@/content/schema";
import { khipuxQuito2026 } from "@/content/khipux-quito-2026";
import { esPeople } from "@/content/people";

export const esContent: LocaleContent = {
  siteName: "LAST Lab for Critical AI & Digital Technologies",
  siteSubtitle:
    "Latin American Socio-Technical Laboratory for Critical AI and Digital Technologies",
  navLabels: {
    home: "Inicio",
    khipuxQuito: "KHIPUx Quito 2026",
    about: "Sobre LAST Lab",
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
      es: "Ver en español",
      en: "Ver en inglés"
    },
    footerRights: "Todos los derechos reservados"
  },
  footerLinks: ["contact", "governance", "cooperation"],
  pages: {
    khipuxQuito: khipuxQuito2026,
    home: {
      seo: {
        title: "LAST Lab for Critical AI & Digital Technologies",
        description:
          "Red multinodal latinoamericana de investigación crítica, experimentación y acción sobre inteligencia artificial y tecnologías digitales."
      },
      hero: {
        title: "LAST Lab for Critical AI & Digital Technologies",
        subtitle:
          "Red multinodal latinoamericana de investigación crítica, experimentación y acción sobre inteligencia artificial y tecnologías digitales.",
        description:
          "Investigamos la inteligencia artificial y las tecnologías digitales como configuraciones sociotécnicas que reorganizan conocimiento, poder, trabajo, instituciones y formas de vida en América Latina y el Sur Global.",
        actions: [
          { label: "Explorar la Red", page: "network" },
          { label: "Investigación y Acción", page: "research" }
        ]
      },
      strategic: {
        eyebrow: "Problema estratégico",
        title: "¿Por qué una mirada latinoamericana sobre la IA?",
        body:
          "La expansión de la inteligencia artificial está reconfigurando instituciones, economías y formas de vida en la región. Buena parte de las infraestructuras, modelos, marcos regulatorios y categorías con las que se organiza esta transformación se producen fuera de América Latina. LAST Lab busca generar conocimiento situado, investigar las relaciones de poder que atraviesan estos procesos, experimentar con alternativas y contribuir al debate público y a la construcción de capacidades regionales."
      },
      whatWeDo: {
        eyebrow: "Qué hacemos",
        title: "Investigación, experimentación e incidencia",
        body:
          "LAST Lab articula producción académica rigurosa, análisis técnico, experimentación tecnológica, formación e incidencia pública desde una perspectiva crítica, interdisciplinaria y latinoamericana."
      },
      pillars: {
        title: "Pilares",
        items: [
          {
            title: "Investigación",
            description:
              "Investigación crítica interdisciplinaria sobre inteligencia artificial, tecnologías digitales, poder, desigualdades, trabajo, infraestructura y dependencia tecnológica."
          },
          {
            title: "Experimentación e innovación",
            description:
              "Desarrollo, evaluación y experimentación con tecnologías y modelos alternativos, inclusivos, feministas y críticos."
          },
          {
            title: "Incidencia",
            description:
              "Informes estratégicos, policy briefs y materiales orientados a debates públicos, regulatorios, institucionales y sociales."
          },
          {
            title: "Formación",
            description:
              "Cursos, seminarios y espacios de capacitación sobre ética, política, gobernanza y crítica de la inteligencia artificial y las tecnologías digitales."
          }
        ]
      },
      network: {
        title: "Red multinodal",
        body:
          "LAST Lab es una red autónoma y multinodal, de origen binacional, con nodos institucionales fundacionales en Ecuador y Argentina e integración de organizaciones de la sociedad civil. Su arquitectura permite incorporar nuevos nodos en América Latina y otras regiones sin perder su foco regional."
      },
      foundation: {
        title: "Origen",
        body:
          "LAST Lab comenzó a gestarse en 2024 por iniciativa de Horacio Correa Lucero. Desde sus primeras etapas, Cheryl Martens se incorporó al desarrollo de la iniciativa y a su articulación institucional desde el Instituto de Estudios Avanzados en Desigualdades de la Universidad San Francisco de Quito. Durante la etapa fundacional se sumó Diversa, ampliando la articulación entre investigación académica, capacidades técnicas y sociedad civil. Sobre esa base, LAST Lab se consolidó como una red multinodal."
      },
      cta: {
        title: "Colaborar con LAST Lab",
        actions: [
          { label: "Proponer una alianza", page: "cooperation" },
          { label: "Canales institucionales", page: "contact" }
        ]
      }
    },
    about: {
      seo: {
        title: "Sobre LAST Lab",
        description:
          "Naturaleza, misión, visión y origen de LAST Lab como red multinodal autónoma de investigación crítica sobre inteligencia artificial y tecnologías digitales."
      },
      intro:
        "LAST Lab for Critical AI & Digital Technologies (Latin American Socio-Technical Laboratory for Critical AI and Digital Technologies) es una red multinodal, interdisciplinaria y autónoma de cooperación académica y sociotécnica. Investiga críticamente la inteligencia artificial y las tecnologías digitales como configuraciones que reestructuran los entornos de acción, conocimiento y reproducción social en América Latina y el Sur Global. LAST Lab articula investigación académica, análisis técnico, experimentación tecnológica, formación e incidencia pública, combinando perspectivas de las ciencias sociales, la filosofía, los estudios de ciencia y tecnología y otras áreas técnicas e interdisciplinarias.",
      sections: [
        {
          title: "Origen",
          body:
            "LAST Lab comenzó a gestarse en 2024 por iniciativa de Horacio Correa Lucero. Desde sus primeras etapas, Cheryl Martens se incorporó al desarrollo de la iniciativa y a su articulación institucional desde el IEAD–USFQ. Durante la etapa fundacional se incorporó Diversa, fortaleciendo la articulación entre investigación académica, capacidades técnicas y sociedad civil. La red se estructuró con nodos institucionales fundacionales en IEAD–USFQ, Ecuador, e ICSyA–UNAJ, Argentina."
        },
        {
          title: "Misión",
          body:
            "Constituir un espacio crítico, interdisciplinario y multinodal, arraigado en América Latina y el Sur Global, para investigar, experimentar y contribuir a transformar la inteligencia artificial y las tecnologías digitales; producir conocimiento situado sobre sus dimensiones éticas, políticas, sociales, económicas y culturales; fortalecer capacidades, desarrollar alternativas tecnológicas e incidir en debates y políticas públicas y privadas."
        },
        {
          title: "Visión",
          body:
            "Consolidar LAST Lab como un espacio de referencia regional e internacional para la investigación crítica, la formación especializada y la elaboración de propuestas estratégicas sobre inteligencia artificial y tecnologías digitales, fortaleciendo capacidades y redes desde América Latina y el Sur Global."
        }
      ]
    },
    network: {
      seo: {
        title: "Red",
        description:
          "Nodos institucionales fundacionales, nodo organizacional y equipo de LAST Lab como red multinodal autónoma."
      },
      intro:
        "LAST Lab funciona como una red autónoma y multinodal de cooperación académica, sociotécnica y organizacional, con foco prioritario en América Latina y el Sur Global.",
      structure: {
        title: "Estructura multinodal",
        body:
          "La red integra nodos institucionales, organizacionales e individuales bajo principios compartidos de investigación crítica, justicia social, autonomía intelectual y cooperación. Este modelo permite crecer sin perder articulación, memoria institucional ni foco regional."
      },
      seats: {
        title: "Sedes académicas y alcance",
        body:
          "El IEAD–USFQ y el ICSyA–UNAJ son los nodos institucionales fundacionales de LAST Lab y funcionan como sedes académicas de la red en sus respectivas instituciones. Esta articulación no altera la autonomía organizativa de LAST Lab. La red puede incorporar nuevos nodos en América Latina y otras regiones, manteniendo su foco prioritario en América Latina y el Sur Global."
      },
      nodes: {
        title: "Nodos de la red",
        institutionalTitle: "Nodos institucionales fundacionales",
        institutional: [
          {
            name: "IEAD–USFQ",
            institution:
              "Instituto de Estudios Avanzados en Desigualdades, Universidad San Francisco de Quito",
            location: "Ecuador"
          },
          {
            name: "ICSyA–UNAJ",
            institution:
              "Instituto de Ciencias Sociales y Administración, Universidad Nacional Arturo Jauretche",
            location: "Argentina"
          }
        ],
        organizationalTitle:
          "Nodo organizacional integrante desde la etapa fundacional",
        organizational: [
          {
            name: "Diversa",
            location: "Quito, Ecuador",
            description:
              "Organización de la sociedad civil que fortalece la articulación entre capacidades técnicas, perspectivas críticas y acción pública."
          }
        ]
      },
      nodeTypes: {
        title: "Tipos de nodo",
        items: [
          {
            title: "Nodo institucional",
            description:
              "Universidad, instituto o centro de investigación que integra la red y puede funcionar como sede académica cuando así sea reconocido."
          },
          {
            title: "Nodo organizacional",
            description:
              "ONG, colectivo u organización de la sociedad civil que participa en la red desde sus capacidades, agendas y principios compartidos."
          },
          {
            title: "Nodo individual",
            description:
              "Persona que se incorpora a título personal y participa como unidad propia dentro de la red multinodal."
          }
        ]
      },
      people: {
        title: "Equipo y miembros",
        items: esPeople
      },
      governance: {
        title: "Modelo de gobernanza",
        body:
          "LAST Lab combina Dirección General, direcciones de nodos institucionales y representación de nodos organizacionales con el Consejo Asesor Multinodal (CAM). Este esquema preserva la autonomía organizativa de LAST Lab y, al mismo tiempo, respeta las competencias propias de las instituciones y organizaciones integrantes."
      }
    },
    research: {
      seo: {
        title: "Investigación y Acción",
        description:
          "Áreas de investigación crítica, experimentación tecnológica e incidencia de LAST Lab sobre inteligencia artificial y tecnologías digitales."
      },
      intro:
        "LAST Lab articula investigación crítica, experimentación tecnológica, cartografías, producción estratégica y modelos colaborativos para intervenir en debates y prácticas sobre inteligencia artificial y tecnologías digitales en América Latina y el Sur Global.",
      areas: [
        {
          title: "Investigación crítica interdisciplinaria",
          description:
            "Investigamos la inteligencia artificial y las tecnologías digitales como configuraciones sociotécnicas atravesadas por desigualdades, poder, gobernanza, trabajo, infraestructura y dependencia tecnológica."
        },
        {
          title: "Experimentación y alternativas tecnológicas",
          description:
            "Investigamos, diseñamos y experimentamos con tecnologías y modelos alternativos, inclusivos, feministas y críticos, sin asumir la neutralidad de los sistemas digitales."
        },
        {
          title: "Cartografías y análisis de datos",
          description:
            "Desarrollamos metodologías para mapear dinámicas tecnológicas, cadenas de valor, desigualdades, infraestructuras y formas de gobernanza en la región."
        },
        {
          title: "Producción editorial y estratégica",
          description:
            "Elaboramos informes, documentos de trabajo, policy briefs y materiales pedagógicos que conectan investigación, debate público y toma de decisiones."
        },
        {
          title: "Modelos organizativos y tecnologías cooperativas",
          description:
            "Exploramos formas de organización, cooperación y producción tecnológica que prioricen justicia social, sostenibilidad, autonomía intelectual y beneficio colectivo."
        }
      ]
    },
    publications: {
      seo: {
        title: "Publicaciones",
        description:
          "Producción académica, estratégica y documentos de trabajo de LAST Lab, con series públicas en desarrollo."
      },
      intro:
        "LAST Lab está organizando sus líneas de producción académica, estratégica y metodológica. Las series públicas se publicarán cuando existan materiales institucionales listos para circulación.",
      collections: [
        {
          title: "Producción académica",
          description:
            "Artículos y publicaciones vinculadas a integrantes, proyectos y líneas de investigación de la red.",
          status: "En desarrollo"
        },
        {
          title: "Producción estratégica",
          description:
            "Policy briefs, informes y white papers orientados al debate público, institucional y regulatorio.",
          status: "En desarrollo"
        },
        {
          title: "Documentos de trabajo",
          description:
            "Working papers, materiales metodológicos y avances de investigación para discusión especializada.",
          status: "En desarrollo"
        }
      ],
      repositoryTitle: "Repositorio público",
      repositoryNote:
        "Cuando exista un repositorio público verificable, LAST Lab publicará aquí los enlaces y criterios de acceso correspondientes."
    },
    training: {
      seo: {
        title: "Formación",
        description:
          "Áreas de formación de LAST Lab sobre ética, política, gobernanza y estudios críticos de inteligencia artificial y tecnologías digitales."
      },
      intro:
        "LAST Lab desarrolla propuestas de formación para fortalecer capacidades críticas, técnicas e interdisciplinarias sobre inteligencia artificial y tecnologías digitales en América Latina.",
      areas: [
        {
          title: "Ética, política y gobernanza de la inteligencia artificial",
          description:
            "Marcos críticos para analizar decisiones, instituciones, regulaciones y responsabilidades en torno a la IA."
        },
        {
          title: "Estudios críticos de tecnología",
          description:
            "Perspectivas sociotécnicas, filosóficas y latinoamericanas para comprender tecnologías digitales en contexto."
        },
        {
          title: "Justicia algorítmica, desigualdades y poder",
          description:
            "Herramientas conceptuales y metodológicas para estudiar sesgos, exclusiones, asimetrías y disputas de poder."
        },
        {
          title: "Métodos sociotécnicos y análisis crítico de IA",
          description:
            "Aproximaciones para investigar sistemas, datos, infraestructuras, trabajo y condiciones de implementación."
        },
        {
          title: "Diseño y experimentación tecnológica inclusiva y crítica",
          description:
            "Criterios para imaginar, evaluar y experimentar alternativas tecnológicas compatibles con justicia social."
        }
      ],
      catalogStatus:
        "El catálogo de cursos se encuentra en preparación. LAST Lab publicará contenidos, cronogramas y cohortes cuando estén formalmente definidos."
    },
    governance: {
      seo: {
        title: "Gobernanza",
        description:
          "Estructura de gobernanza, principios y claves estatutarias de LAST Lab como red multinodal autónoma."
      },
      intro:
        "LAST Lab cuenta con una estructura de gobernanza que combina conducción estratégica y articulación multinodal, preservando su autonomía organizativa y las competencias propias de las instituciones y organizaciones que integran la red.",
      principlesTitle: "Principios rectores",
      principles:
        "El funcionamiento de LAST Lab se orienta por ética académica, justicia social, inclusión, no discriminación, prevención del acoso, protección de datos, autonomía intelectual, transparencia e independencia frente a condicionamientos externos.",
      statutesNotesTitle: "Claves estatutarias",
      statutesNotes: [
        "LAST Lab es una red multinodal autónoma.",
        "LAST Lab puede constituirse como persona jurídica propia.",
        "Mientras no cuente con personería jurídica, los proyectos que requieran administración jurídica o financiera pueden ejecutarse mediante entidades administradoras elegidas caso por caso.",
        "Los Estatutos de LAST Lab no sustituyen ni modifican las competencias o normas de las instituciones y organizaciones integrantes.",
        "El español es el idioma oficial de trabajo y el inglés funciona como traducción de cortesía.",
        "Existe preferencia por acceso abierto cuando sea posible."
      ],
      leadershipTitle: "Estructura de gobernanza",
      leadership: [
        {
          role: "Dirección General",
          person: "Dr. Horacio Correa Lucero"
        },
        {
          role: "Dirección del nodo IEAD–USFQ",
          person: "Dra. Cheryl Martens",
          affiliation:
            "Instituto de Estudios Avanzados en Desigualdades, Universidad San Francisco de Quito"
        },
        {
          role: "Dirección del nodo ICSyA–UNAJ",
          person: "Dr. Horacio Correa Lucero",
          affiliation:
            "Instituto de Ciencias Sociales y Administración, Universidad Nacional Arturo Jauretche"
        },
        {
          role: "Representación del nodo Diversa",
          person: "Diana Mosquera",
          affiliation: "Diversa, Quito"
        }
      ],
      membersTitle: "Personas de la red",
      members: esPeople,
      cam: {
        title: "Consejo Asesor Multinodal (CAM)",
        body:
          "Órgano de articulación y consulta integrado por representantes de los nodos de LAST Lab. Acompaña a la Dirección General, formula recomendaciones y participa de manera vinculante en los casos específicamente previstos por los Estatutos."
      }
    },
    cooperation: {
      seo: {
        title: "Cooperación",
        description:
          "Alianzas académicas, sociales e institucionales compatibles con la autonomía intelectual y los principios de LAST Lab."
      },
      intro:
        "LAST Lab promueve colaboraciones académicas, sociales, institucionales y tecnológicas compatibles con sus principios de investigación crítica, justicia social, transparencia y autonomía intelectual.",
      partnerTitle: "Buscamos colaborar con",
      partners: [
        "Universidades y centros de investigación",
        "Organizaciones de sociedad civil",
        "Organismos multilaterales",
        "Fundaciones",
        "Redes académicas",
        "Comunidades y colectivos",
        "Instituciones públicas",
        "Iniciativas tecnológicas compatibles con sus principios"
      ],
      principlesTitle: "Principios de cooperación",
      principles:
        "Toda cooperación debe preservar la independencia académica, la autonomía intelectual, la transparencia institucional y la coherencia ética con los objetivos de LAST Lab.",
      fundingTitle: "Sostenibilidad compatible con principios",
      fundingSources: [
        "Convocatorias nacionales e internacionales de investigación, formación, innovación crítica y cooperación.",
        "Convenios con universidades, centros de investigación, instituciones públicas, organismos multilaterales y fundaciones.",
        "Consorcios y redes académicas regionales orientados a fortalecer capacidades compartidas.",
        "Programas de formación y actividades especializadas cuando estén formalmente definidos.",
        "Colaboraciones con iniciativas tecnológicas u organizaciones privadas sólo cuando sean compatibles con la autonomía intelectual y los principios de LAST Lab."
      ],
      operationsTitle: "Marco operativo",
      operations:
        "Mientras LAST Lab no cuente con personería jurídica propia, los proyectos o convenios que requieran administración jurídica o financiera podrán ejecutarse mediante una entidad administradora definida para cada iniciativa, de acuerdo con los Estatutos y los acuerdos específicos correspondientes.",
      contactPrompt:
        "Los canales oficiales para proponer colaboraciones serán publicados cuando estén confirmados."
    },
    contact: {
      seo: {
        title: "Contacto",
        description:
          "Estado de canales institucionales y sedes académicas de LAST Lab."
      },
      intro:
        "LAST Lab está actualizando sus canales institucionales de contacto para consultas, colaboraciones e invitaciones académicas.",
      statusTitle: "Canales institucionales en actualización",
      status:
        "Para consultas institucionales, los canales oficiales serán publicados próximamente. Hasta contar con una vía confirmada, LAST Lab no muestra direcciones de correo, formularios de envío ni redes sociales genéricas.",
      locationsTitle: "Nodos y sedes académicas",
      locations: [
        {
          name: "IEAD–USFQ",
          institution: "Universidad San Francisco de Quito",
          location: "Quito, Ecuador"
        },
        {
          name: "ICSyA–UNAJ",
          institution: "Universidad Nacional Arturo Jauretche",
          location: "Florencio Varela, Argentina"
        },
        {
          name: "Diversa",
          location: "Quito, Ecuador"
        }
      ],
      socialTitle: "Redes institucionales",
      socialStatus:
        "Los perfiles oficiales serán publicados cuando estén confirmados.",
      socialLinks: []
    }
  }
};
