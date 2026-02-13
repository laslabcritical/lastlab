import type { LocaleContent } from "@/content/schema";

export const esContent: LocaleContent = {
  siteName: "LAST Lab for Critical AI",
  siteSubtitle: "Latin American SocioTechnical Laboratory for Critical AI & Digital Technologies",
  navLabels: {
    home: "Inicio",
    about: "Sobre el Lab",
    network: "Red",
    research: "Investigacion y Accion",
    publications: "Publicaciones",
    training: "Formacion",
    governance: "Gobernanza",
    cooperation: "Cooperacion",
    contact: "Contacto"
  },
  ui: {
    menuLabel: "Menu",
    switchTo: {
      es: "Ver en Espanol",
      en: "Ver en Ingles"
    },
    footerRights: "Todos los derechos reservados"
  },
  footerLinks: ["contact", "governance", "cooperation"],
  pages: {
    home: {
      seo: {
        title: "Inicio",
        description:
          "Red latinoamericana multinodal de investigacion, innovacion e incidencia en inteligencia artificial y tecnologias digitales."
      },
      hero: {
        title: "LAST Lab for Critical AI",
        subtitle:
          "Red latinoamericana multinodal de investigacion, innovacion e incidencia en inteligencia artificial.",
        description:
          "Repensamos la inteligencia artificial como mediacion socio-tecnica que transforma los entornos de conocimiento, poder y reproduccion social en America Latina y el Sur Global.",
        actions: [
          { label: "Explorar la Red", page: "network" },
          { label: "Investigacion y Accion", page: "research" }
        ]
      },
      strategic: {
        eyebrow: "Problema estrategico",
        title: "Por que una mirada latinoamericana sobre la IA?",
        body:
          "La expansion de la inteligencia artificial esta reconfigurando instituciones, economias y formas de vida en la region. Sin embargo, los marcos conceptuales, regulatorios y tecnologicos que estructuran esta transformacion se producen mayoritariamente fuera de America Latina. El LAST Lab surge para producir conocimiento situado, desarrollar alternativas tecnologicas y contribuir estrategicamente al debate publico regional."
      },
      whatWeDo: {
        eyebrow: "Que hacemos",
        title: "Investigacion, prototipado e incidencia",
        body:
          "El LAST Lab combina produccion academica rigurosa, experimentacion tecnologica y elaboracion de propuestas estrategicas."
      },
      pillars: {
        title: "Pilares",
        items: [
          {
            title: "Investigacion",
            description:
              "Investigacion critica interdisciplinaria que integra filosofia, ciencias sociales y analisis tecnico."
          },
          {
            title: "Innovacion",
            description:
              "Desarrollo y prototipado de IA inclusiva, feminista y critica."
          },
          {
            title: "Incidencia",
            description:
              "Policy briefs, informes estrategicos y materiales orientados a decisores publicos, organismos multilaterales y actores privados."
          },
          {
            title: "Formacion",
            description:
              "Cursos, seminarios y espacios de capacitacion en etica, politica y critica de la IA."
          }
        ]
      },
      network: {
        title: "Red binacional",
        body:
          "Una red multinodal con nodos fundacionales en Ecuador y Argentina que articula universidad y sociedad civil bajo un modelo de gobernanza flexible y resiliente."
      },
      foundation: {
        title: "Fundacion",
        body:
          "Concebido en 2024 por iniciativa academica del Dr. Horacio Correa Lucero y con el apoyo intelectual e institucional fundacional de la Dra. Cheryl Martens (IEAD-USFQ)."
      },
      cta: {
        title: "Colaborar con el LAST Lab",
        actions: [
          { label: "Proponer una alianza", page: "cooperation" },
          { label: "Solicitar informacion", page: "contact" }
        ]
      }
    },
    about: {
      seo: {
        title: "Sobre el Lab",
        description:
          "Origen, mision y vision del LAST Lab for Critical AI como red multinodal de investigacion critica en IA."
      },
      intro:
        "El LAST Lab fue concebido en 2024 a partir de la iniciativa academica del Dr. Horacio Correa Lucero y del apoyo intelectual e institucional fundacional de la Dra. Cheryl Martens (IEAD-USFQ), cuyo respaldo temprano fue decisivo para la consolidacion del proyecto.",
      sections: [
        {
          title: "Origen",
          body:
            "Su colaboracion dio forma a una red multinodal, binacional y autonoma con nodos fundacionales en IEAD-USFQ (Ecuador) y UNAJ (Argentina), e integracion de Diversa (Quito), articulando universidad y sociedad civil desde su origen."
        },
        {
          title: "Mision",
          body:
            "Constituir un espacio critico, interdisciplinario y multinodal arraigado en la realidad latinoamericana y del Sur Global para el estudio, experimentacion y transformacion de la inteligencia artificial y las tecnologias digitales como configuraciones socio-tecnicas de mediacion que reestructuran entornos sociales, economicos e institucionales."
        },
        {
          title: "Vision",
          body:
            "Consolidarse como referente regional y proyeccion global en investigacion critica sobre inteligencia artificial, formacion especializada y elaboracion de propuestas estrategicas capaces de incidir en el diseno, regulacion y aplicacion de tecnologias digitales en America Latina y el Sur Global."
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
          "Este modelo garantiza flexibilidad, resiliencia y expansion regional, evitando centralismos y permitiendo continuidad mas alla de cambios institucionales o personales."
      },
      seats: {
        title: "Sedes formales y alcance",
        body:
          "De acuerdo con el Acta Constitutiva, IEAD-USFQ y UNAJ son sedes formales del Lab. La red mantiene foco en America Latina y el Sur Global, con apertura a nuevos nodos internacionales alineados con su enfoque critico."
      },
      nodes: {
        title: "Nodos fundacionales",
        items: [
          "IEAD - Universidad San Francisco de Quito (Ecuador)",
          "ICSyA - Universidad Nacional Arturo Jauretche (Argentina)",
          "Diversa (Quito, organizacion de la sociedad civil)"
        ]
      },
      nodeTypes: {
        title: "Tipos de nodo",
        items: [
          {
            title: "Nodo institucional",
            description:
              "Universidades, institutos o centros de investigacion que albergan o participan en el Lab."
          },
          {
            title: "Nodo organizacional",
            description:
              "Organizaciones sociales, ONG o colectivos que se integran en la red multinodal."
          },
          {
            title: "Nodo individual",
            description:
              "Personas que participan a titulo personal, constituyendo un nodo propio dentro de la red."
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
          "El LAST Lab cuenta con una Direccion General responsable de la conduccion estrategica y academica, y con un Consejo Asesor Multinodal (CAM) integrado por representantes de los nodos. Este modelo combina liderazgo definido con consulta multinodal para asegurar coherencia institucional y participacion en las decisiones estrategicas."
      }
    },
    research: {
      seo: {
        title: "Investigacion y Accion",
        description:
          "Lineas de investigacion critica, prototipado e incidencia estrategica del LAST Lab en America Latina."
      },
      intro:
        "El LAST Lab articula investigacion critica, experimentacion tecnologica e incidencia estrategica para intervenir en los procesos de diseno, regulacion y aplicacion de la inteligencia artificial en America Latina.",
      areas: [
        {
          title: "Investigacion critica interdisciplinaria",
          description:
            "Desarrollamos investigaciones que integran filosofia, ciencias sociales y analisis tecnico para comprender la inteligencia artificial como configuracion socio-tecnica de mediacion que reestructura relaciones de poder, conocimiento y reproduccion social."
        },
        {
          title: "Prototipado de IA alternativa",
          description:
            "Exploramos y desarrollamos modelos tecnologicos inclusivos, feministas y criticos, experimentando con alternativas al paradigma corporativo dominante."
        },
        {
          title: "Cartografias y analisis de datos",
          description:
            "Disenamos metodologias para mapear desigualdades en el acceso, diseno, implementacion y gobernanza de tecnologias digitales, generando insumos para investigacion e incidencia publica."
        },
        {
          title: "Produccion editorial y estrategica",
          description:
            "Elaboramos policy briefs, informes tecnicos, white papers y materiales de orientacion destinados a decisores publicos, organismos multilaterales y actores institucionales."
        },
        {
          title: "Exploracion de cooperativas tecnologicas",
          description:
            "Impulsamos el estudio y la experimentacion de modelos cooperativos de produccion digital para priorizar colaboracion, sostenibilidad y beneficio colectivo."
        }
      ]
    },
    publications: {
      seo: {
        title: "Publicaciones",
        description:
          "Repositorio editorial del LAST Lab para publicaciones academicas y materiales estrategicos."
      },
      intro:
        "El LAST Lab produce y difunde conocimiento academico y estrategico orientado tanto a la comunidad cientifica como a actores institucionales y publicos.",
      collections: [
        {
          title: "Publicaciones academicas",
          status: "Proximamente"
        },
        {
          title: "Policy briefs",
          status: "Proximamente"
        },
        {
          title: "White papers",
          status: "Proximamente"
        },
        {
          title: "Working papers",
          status: "Proximamente"
        },
        {
          title: "Series editoriales",
          status: "Proximamente"
        }
      ],
      repositoryTitle: "Repositorio descargable",
      repositoryNote:
        "La estructura del repositorio descargable esta preparada para futuras publicaciones."
    },
    training: {
      seo: {
        title: "Formacion",
        description:
          "Programas de formacion y capacitacion del LAST Lab en etica, politica y critica de la IA."
      },
      intro:
        "El LAST Lab desarrolla programas de formacion y capacitacion orientados a fortalecer capacidades criticas y tecnicas en inteligencia artificial y tecnologias digitales en America Latina.",
      areas: [
        "Etica y politica de la inteligencia artificial",
        "Estudios criticos de tecnologia",
        "Justicia algoritmica y analisis de desigualdades",
        "Diseno tecnologico inclusivo y critico"
      ],
      catalogStatus:
        "Catalogo de cursos en preparacion. Proximamente se publicaran cohortes, contenidos y cronogramas."
    },
    governance: {
      seo: {
        title: "Gobernanza",
        description:
          "Estructura de gobernanza, direccion y consejo asesor multinodal del LAST Lab."
      },
      intro:
        "El LAST Lab cuenta con una estructura de gobernanza que combina direccion estrategica definida y participacion multinodal, garantizando coherencia institucional, transparencia y capacidad de expansion regional e internacional.",
      principlesTitle: "Principios rectores",
      principles:
        "Su funcionamiento se rige por Estatutos propios y por principios de etica academica, autonomia intelectual, inclusion, justicia social, no discriminacion, antiacoso, proteccion de datos y transparencia institucional.",
      statutesNotesTitle: "Claves estatutarias",
      statutesNotes: [
        "El CAM es un organo consultivo y no vinculante, salvo en los casos expresamente previstos por Estatuto.",
        "La lengua oficial de trabajo es el espanol; la version en ingles opera como traduccion de cortesia.",
        "La propiedad intelectual se reconoce por contribucion efectiva, con preferencia por acceso abierto cuando sea posible.",
        "Cada proyecto define su entidad administradora y se publica un resumen anual de financiamiento y ejecucion agregada."
      ],
      leadershipTitle: "Estructura de gobernanza",
      leadership: [
        {
          role: "Direccion General",
          person: "Dr. Horacio Correa Lucero"
        },
        {
          role: "Co-fundacion y Direccion de Nodo IEAD-USFQ",
          person: "Dra. Cheryl Martens - IEAD-USFQ"
        },
        {
          role: "Direccion de Nodo UNAJ",
          person: "Dr. Horacio Correa Lucero - UNAJ"
        },
        {
          role: "Representacion Nodo Diversa",
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
          name: "Monica Casanova",
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
        body: "Organo consultivo integrado por representantes de los nodos del Lab."
      }
    },
    cooperation: {
      seo: {
        title: "Cooperacion",
        description:
          "Alianzas academicas, institucionales y sociales para investigacion critica y responsabilidad publica en IA."
      },
      intro:
        "El LAST Lab promueve alianzas academicas, institucionales y sociales que compartan sus principios de investigacion critica, autonomia intelectual y responsabilidad publica.",
      partnerTitle: "Buscamos colaborar con",
      partners: [
        "Universidades y centros de investigacion",
        "Organismos multilaterales",
        "Fundaciones y programas de cooperacion internacional",
        "Organizaciones de la sociedad civil",
        "Iniciativas tecnologicas comprometidas con criterios de inclusion y justicia social"
      ],
      principlesTitle: "Principios de cooperacion",
      principles:
        "Toda cooperacion se desarrolla bajo principios de independencia academica, transparencia institucional y coherencia etica con los objetivos del Lab.",
      fundingTitle: "Estrategia financiera y sostenibilidad",
      fundingSources: [
        "Convocatorias competitivas nacionales e internacionales en IA y tecnologias digitales.",
        "Alianzas con organismos multilaterales y fundaciones orientadas a innovacion critica.",
        "Vinculacion con empresas privadas bajo criterios de responsabilidad social corporativa.",
        "Consorcios y redes academicas regionales para cofinanciar actividades.",
        "Programas de cursos y formacion especializada en IA critica para sostener operaciones."
      ],
      operationsTitle: "Marco operativo",
      operations:
        "Los proyectos especificos podran gestionarse a traves de las entidades administradoras correspondientes, conforme a la normativa aplicable y a los Estatutos del Lab.",
      contactPrompt:
        "Las instituciones interesadas en explorar posibilidades de colaboracion pueden contactarnos a traves del formulario institucional."
    },
    contact: {
      seo: {
        title: "Contacto",
        description:
          "Canales oficiales del LAST Lab para consultas institucionales, colaboraciones e invitaciones academicas."
      },
      intro:
        "El LAST Lab recibe consultas institucionales, propuestas de colaboracion, invitaciones academicas y solicitudes de informacion a traves de sus canales oficiales.",
      form: {
        nameLabel: "Nombre",
        emailLabel: "Correo electronico",
        institutionLabel: "Institucion / Organizacion",
        messageLabel: "Mensaje",
        submitLabel: "Enviar consulta"
      },
      emailTitle: "Email institucional",
      email: "info@lastlab.org",
      locationsTitle: "Nodos y ubicaciones",
      locations: [
        "Nodo IEAD-USFQ: Edificio Maxwell, oficina M-301, Campus Cumbaya, Universidad San Francisco de Quito (Ecuador).",
        "Nodo UNAJ: Instituto de Ciencias Sociales y Administracion, Florencio Varela (Argentina).",
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
