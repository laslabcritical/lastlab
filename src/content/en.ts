import type { LocaleContent } from "@/content/schema";
import { khipuxQuito2026 } from "@/content/khipux-quito-2026";
import { enPeople } from "@/content/people";

export const enContent: LocaleContent = {
  siteName: "LAST Lab for Critical AI & Digital Technologies",
  siteSubtitle:
    "Latin American Socio-Technical Laboratory for Critical AI and Digital Technologies",
  navLabels: {
    home: "Home",
    khipuxQuito: "KHIPUx Quito 2026",
    about: "About LAST Lab",
    network: "Network",
    research: "Research and Action",
    publications: "Publications",
    training: "Training",
    governance: "Governance",
    cooperation: "Cooperation",
    contact: "Contact"
  },
  ui: {
    menuLabel: "Menu",
    switchTo: {
      es: "View in Spanish",
      en: "View in English"
    },
    footerRights: "All rights reserved"
  },
  footerLinks: ["contact", "governance", "cooperation"],
  pages: {
    khipuxQuito: khipuxQuito2026,
    home: {
      seo: {
        title: "LAST Lab for Critical AI & Digital Technologies",
        description:
          "A multinodal Latin American network for critical research, experimentation, and action on artificial intelligence and digital technologies."
      },
      hero: {
        title: "LAST Lab for Critical AI & Digital Technologies",
        subtitle:
          "A multinodal Latin American network for critical research, experimentation, and action on artificial intelligence and digital technologies.",
        description:
          "We investigate artificial intelligence and digital technologies as sociotechnical configurations that reorganize knowledge, power, labor, institutions, and forms of life in Latin America and the Global South.",
        actions: [
          { label: "Explore the Network", page: "network" },
          { label: "Research and Action", page: "research" }
        ]
      },
      strategic: {
        eyebrow: "Strategic challenge",
        title: "Why a Latin American perspective on AI?",
        body:
          "The expansion of artificial intelligence is reshaping institutions, economies, and forms of life across the region. Many of the infrastructures, models, regulatory frameworks, and categories that organize this transformation are produced outside Latin America. LAST Lab seeks to generate situated knowledge, investigate the power relations running through these processes, experiment with alternatives, and contribute to public debate and regional capacity-building."
      },
      whatWeDo: {
        eyebrow: "What we do",
        title: "Research, experimentation, and public engagement",
        body:
          "LAST Lab brings together rigorous academic work, technical analysis, technological experimentation, training, and public engagement from a critical, interdisciplinary, and Latin American perspective."
      },
      pillars: {
        title: "Pillars",
        items: [
          {
            title: "Research",
            description:
              "Critical interdisciplinary research on artificial intelligence, digital technologies, power, inequalities, labor, infrastructure, and technological dependency."
          },
          {
            title: "Experimentation and innovation",
            description:
              "Development, assessment, and experimentation with alternative, inclusive, feminist, and critical technologies and models."
          },
          {
            title: "Public engagement",
            description:
              "Strategic reports, policy briefs, and materials for public, regulatory, institutional, and social debates."
          },
          {
            title: "Training",
            description:
              "Courses, seminars, and capacity-building spaces on ethics, politics, governance, and critical approaches to artificial intelligence and digital technologies."
          }
        ]
      },
      network: {
        title: "Multinodal network",
        body:
          "LAST Lab is an autonomous and multinodal network, binational in origin, with founding institutional nodes in Ecuador and Argentina and integration of civil society organizations. Its architecture makes it possible to incorporate new nodes in Latin America and other regions while preserving its regional focus."
      },
      foundation: {
        title: "Origin",
        body:
          "LAST Lab began to take shape in 2024 through the initiative of Horacio Correa Lucero. From its early stages, Cheryl Martens joined the development of the initiative and its institutional articulation through the Instituto de Estudios Avanzados en Desigualdades at Universidad San Francisco de Quito. During the foundational stage, Diversa joined the process, expanding the connection among academic research, technical capacities, and civil society. On this basis, LAST Lab consolidated itself as a multinodal network."
      },
      cta: {
        title: "Collaborate with LAST Lab",
        actions: [
          { label: "Propose an alliance", page: "cooperation" },
          { label: "Institutional channels", page: "contact" }
        ]
      }
    },
    about: {
      seo: {
        title: "About LAST Lab",
        description:
          "Nature, mission, vision, and origin of LAST Lab as an autonomous multinodal network for critical research on artificial intelligence and digital technologies."
      },
      intro:
        "LAST Lab for Critical AI & Digital Technologies (Latin American Socio-Technical Laboratory for Critical AI and Digital Technologies) is a multinodal, interdisciplinary, and autonomous network for academic and sociotechnical cooperation. It critically investigates artificial intelligence and digital technologies as configurations that restructure environments of action, knowledge, and social reproduction in Latin America and the Global South. LAST Lab brings together academic research, technical analysis, technological experimentation, training, and public engagement, combining perspectives from the social sciences, philosophy, science and technology studies, and other technical and interdisciplinary fields.",
      sections: [
        {
          title: "Origin",
          body:
            "LAST Lab began to take shape in 2024 through the initiative of Horacio Correa Lucero. From its early stages, Cheryl Martens joined the development of the initiative and its institutional articulation through IEAD–USFQ. During the foundational stage, Diversa joined the process, strengthening the connection among academic research, technical capacities, and civil society. The network was structured with founding institutional nodes at IEAD–USFQ, Ecuador, and ICSyA–UNAJ, Argentina."
        },
        {
          title: "Mission",
          body:
            "To constitute a critical, interdisciplinary, and multinodal space rooted in Latin America and the Global South to research, experiment with, and help transform artificial intelligence and digital technologies; to produce situated knowledge on their ethical, political, social, economic, and cultural dimensions; to strengthen capacities, develop technological alternatives, and contribute to public and private policy debates."
        },
        {
          title: "Vision",
          body:
            "To consolidate LAST Lab as a regional and international reference space for critical research, specialized training, and the development of strategic proposals on artificial intelligence and digital technologies, strengthening capacities and networks from Latin America and the Global South."
        }
      ]
    },
    network: {
      seo: {
        title: "Network",
        description:
          "Founding institutional nodes, organizational node, and people connected to LAST Lab as an autonomous multinodal network."
      },
      intro:
        "LAST Lab operates as an autonomous and multinodal network for academic, sociotechnical, and organizational cooperation, with a priority focus on Latin America and the Global South.",
      structure: {
        title: "Multinodal structure",
        body:
          "The network integrates institutional, organizational, and individual nodes under shared principles of critical research, social justice, intellectual autonomy, and cooperation. This model enables growth while preserving articulation, institutional memory, and regional focus."
      },
      seats: {
        title: "Academic seats and scope",
        body:
          "IEAD–USFQ and ICSyA–UNAJ are the founding institutional nodes of LAST Lab and function as academic seats of the network within their respective institutions. This articulation does not alter the organizational autonomy of LAST Lab. The network may incorporate new nodes in Latin America and other regions, while maintaining its priority focus on Latin America and the Global South."
      },
      nodes: {
        title: "Network nodes",
        institutionalTitle: "Founding institutional nodes",
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
          "Organizational node integrated since the foundational stage",
        organizational: [
          {
            name: "Diversa",
            location: "Quito, Ecuador",
            description:
              "Civil society organization that strengthens the connection among technical capacities, critical perspectives, and public action."
          }
        ]
      },
      nodeTypes: {
        title: "Node types",
        items: [
          {
            title: "Institutional node",
            description:
              "A university, institute, or research center that joins the network and may serve as an academic seat when formally recognized as such."
          },
          {
            title: "Organizational node",
            description:
              "An NGO, collective, or civil society organization that participates in the network through its capacities, agendas, and shared principles."
          },
          {
            title: "Individual node",
            description:
              "A person who joins in an individual capacity and participates as their own unit within the multinodal network."
          }
        ]
      },
      people: {
        title: "Team and members",
        items: enPeople
      },
      governance: {
        title: "Governance model",
        body:
          "LAST Lab combines a General Directorate, institutional node directorates, organizational node representation, and the Multinodal Advisory Council (CAM). This structure preserves the organizational autonomy of LAST Lab while respecting the competencies of the institutions and organizations that participate in the network."
      }
    },
    research: {
      seo: {
        title: "Research and Action",
        description:
          "Critical research, technological experimentation, and public engagement areas of LAST Lab on artificial intelligence and digital technologies."
      },
      intro:
        "LAST Lab brings together critical research, technological experimentation, mapping, strategic production, and collaborative models to intervene in debates and practices around artificial intelligence and digital technologies in Latin America and the Global South.",
      areas: [
        {
          title: "Critical interdisciplinary research",
          description:
            "We investigate artificial intelligence and digital technologies as sociotechnical configurations shaped by inequalities, power, governance, labor, infrastructure, and technological dependency."
        },
        {
          title: "Experimentation and technological alternatives",
          description:
            "We research, design, and experiment with alternative, inclusive, feminist, and critical technologies and models, without assuming the neutrality of digital systems."
        },
        {
          title: "Mapping and data analysis",
          description:
            "We develop methodologies to map technological dynamics, value chains, inequalities, infrastructures, and forms of governance across the region."
        },
        {
          title: "Editorial and strategic production",
          description:
            "We prepare reports, working papers, policy briefs, and pedagogical materials connecting research, public debate, and decision-making."
        },
        {
          title: "Organizational models and cooperative technologies",
          description:
            "We explore forms of organization, cooperation, and technological production that prioritize social justice, sustainability, intellectual autonomy, and collective benefit."
        }
      ]
    },
    publications: {
      seo: {
        title: "Publications",
        description:
          "Academic production, strategic materials, and working documents from LAST Lab, with public series under development."
      },
      intro:
        "LAST Lab is organizing its academic, strategic, and methodological production lines. Public series will be published when institutional materials are ready for circulation.",
      collections: [
        {
          title: "Academic production",
          description:
            "Articles and publications connected to members, projects, and research lines of the network.",
          status: "In development"
        },
        {
          title: "Strategic production",
          description:
            "Policy briefs, reports, and white papers aimed at public, institutional, and regulatory debate.",
          status: "In development"
        },
        {
          title: "Working documents",
          description:
            "Working papers, methodological materials, and research advances for specialized discussion.",
          status: "In development"
        }
      ],
      repositoryTitle: "Public repository",
      repositoryNote:
        "When a verifiable public repository is available, LAST Lab will publish the corresponding links and access criteria here."
    },
    training: {
      seo: {
        title: "Training",
        description:
          "Training areas of LAST Lab on ethics, policy, governance, and critical studies of artificial intelligence and digital technologies."
      },
      intro:
        "LAST Lab develops training proposals to strengthen critical, technical, and interdisciplinary capacities around artificial intelligence and digital technologies in Latin America.",
      areas: [
        {
          title: "Ethics, politics, and governance of artificial intelligence",
          description:
            "Critical frameworks for analyzing decisions, institutions, regulations, and responsibilities around AI."
        },
        {
          title: "Critical technology studies",
          description:
            "Sociotechnical, philosophical, and Latin American perspectives for understanding digital technologies in context."
        },
        {
          title: "Algorithmic justice, inequalities, and power",
          description:
            "Conceptual and methodological tools for studying bias, exclusions, asymmetries, and disputes over power."
        },
        {
          title: "Sociotechnical methods and critical AI analysis",
          description:
            "Approaches for researching systems, data, infrastructures, labor, and implementation conditions."
        },
        {
          title: "Inclusive and critical technological design and experimentation",
          description:
            "Criteria for imagining, assessing, and experimenting with technological alternatives compatible with social justice."
        }
      ],
      catalogStatus:
        "The course catalog is under development. LAST Lab will publish content, schedules, and cohorts once they are formally defined."
    },
    governance: {
      seo: {
        title: "Governance",
        description:
          "Governance structure, principles, and statutory highlights of LAST Lab as an autonomous multinodal network."
      },
      intro:
        "LAST Lab has a governance structure that combines strategic leadership and multinodal articulation, preserving its organizational autonomy and the competencies of the institutions and organizations that participate in the network.",
      principlesTitle: "Guiding principles",
      principles:
        "LAST Lab is guided by academic ethics, social justice, inclusion, non-discrimination, harassment prevention, data protection, intellectual autonomy, transparency, and independence from external conditioning.",
      statutesNotesTitle: "Statutory highlights",
      statutesNotes: [
        "LAST Lab is an autonomous multinodal network.",
        "LAST Lab may become its own legal entity.",
        "Until LAST Lab has legal personality, projects requiring legal or financial administration may be carried out through administrative entities selected case by case.",
        "The Statutes of LAST Lab do not replace or modify the competencies or rules of participating institutions and organizations.",
        "Spanish is the official working language, and English functions as a courtesy translation.",
        "There is a preference for open access whenever possible."
      ],
      leadershipTitle: "Governance structure",
      leadership: [
        {
          role: "General Directorate",
          person: "Dr. Horacio Correa Lucero"
        },
        {
          role: "IEAD–USFQ Node Directorate",
          person: "Dr. Cheryl Martens",
          affiliation:
            "Instituto de Estudios Avanzados en Desigualdades, Universidad San Francisco de Quito"
        },
        {
          role: "ICSyA–UNAJ Node Directorate",
          person: "Dr. Horacio Correa Lucero",
          affiliation:
            "Instituto de Ciencias Sociales y Administración, Universidad Nacional Arturo Jauretche"
        },
        {
          role: "Diversa Node Representation",
          person: "Diana Mosquera",
          affiliation: "Diversa, Quito"
        }
      ],
      membersTitle: "People in the network",
      members: enPeople,
      cam: {
        title: "Multinodal Advisory Council (CAM)",
        body:
          "A coordination and consultation body composed of representatives from LAST Lab nodes. It accompanies the General Directorate, formulates recommendations, and participates in a binding manner in the specific cases established by the Statutes."
      }
    },
    cooperation: {
      seo: {
        title: "Cooperation",
        description:
          "Academic, social, and institutional partnerships compatible with LAST Lab principles and intellectual autonomy."
      },
      intro:
        "LAST Lab promotes academic, social, institutional, and technological collaborations compatible with its principles of critical research, social justice, transparency, and intellectual autonomy.",
      partnerTitle: "We seek collaboration with",
      partners: [
        "Universities and research centers",
        "Civil society organizations",
        "Multilateral organizations",
        "Foundations",
        "Academic networks",
        "Communities and collectives",
        "Public institutions",
        "Technological initiatives compatible with its principles"
      ],
      principlesTitle: "Cooperation principles",
      principles:
        "Every collaboration must preserve academic independence, intellectual autonomy, institutional transparency, and ethical coherence with the objectives of LAST Lab.",
      fundingTitle: "Sustainability aligned with principles",
      fundingSources: [
        "National and international calls for research, training, critical innovation, and cooperation.",
        "Agreements with universities, research centers, public institutions, multilateral organizations, and foundations.",
        "Regional academic consortia and networks aimed at strengthening shared capacities.",
        "Training programs and specialized activities once they are formally defined.",
        "Collaborations with technological initiatives or private organizations only when compatible with the intellectual autonomy and principles of LAST Lab."
      ],
      operationsTitle: "Operational framework",
      operations:
        "Until LAST Lab has its own legal personality, projects or agreements that require legal or financial administration may be executed through an administrative entity defined for each initiative, in accordance with the Statutes and the corresponding specific agreements.",
      contactPrompt:
        "Official channels for proposing collaborations will be published once confirmed."
    },
    contact: {
      seo: {
        title: "Contact",
        description:
          "Status of institutional channels and academic seats of LAST Lab."
      },
      intro:
        "LAST Lab is updating its institutional contact channels for inquiries, collaborations, and academic invitations.",
      statusTitle: "Institutional channels being updated",
      status:
        "For institutional inquiries, official channels will be published soon. Until a confirmed channel is available, LAST Lab does not display email addresses, submission forms, or generic social media profiles.",
      locationsTitle: "Nodes and academic seats",
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
      socialTitle: "Institutional social profiles",
      socialStatus:
        "Official profiles will be published once they are confirmed.",
      socialLinks: []
    }
  }
};
