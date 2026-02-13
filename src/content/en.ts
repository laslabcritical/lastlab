import type { LocaleContent } from "@/content/schema";

export const enContent: LocaleContent = {
  siteName: "LAST Lab for Critical AI",
  siteSubtitle: "Latin American SocioTechnical Laboratory for Critical AI & Digital Technologies",
  navLabels: {
    home: "Home",
    about: "About the Lab",
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
    home: {
      seo: {
        title: "Home",
        description:
          "Multinodal Latin American network for research, innovation, and policy engagement in artificial intelligence and digital technologies."
      },
      hero: {
        title: "LAST Lab for Critical AI",
        subtitle:
          "A multinodal Latin American network for research, innovation, and policy engagement in artificial intelligence.",
        description:
          "We rethink artificial intelligence as a socio-technical mediation that transforms knowledge, power, and social reproduction across Latin America and the Global South.",
        actions: [
          { label: "Explore the Network", page: "network" },
          { label: "Research and Action", page: "research" }
        ]
      },
      strategic: {
        eyebrow: "Strategic challenge",
        title: "Why a Latin American perspective on AI?",
        body:
          "The expansion of artificial intelligence is reshaping institutions, economies, and everyday life in the region. Yet the conceptual, regulatory, and technological frameworks driving this shift are mostly produced outside Latin America. LAST Lab was established to generate situated knowledge, develop technological alternatives, and contribute strategically to regional public debate."
      },
      whatWeDo: {
        eyebrow: "What we do",
        title: "Research, prototyping, and policy engagement",
        body:
          "LAST Lab combines rigorous academic production, technological experimentation, and strategic proposal design."
      },
      pillars: {
        title: "Pillars",
        items: [
          {
            title: "Research",
            description:
              "Critical interdisciplinary research integrating philosophy, social sciences, and technical analysis."
          },
          {
            title: "Innovation",
            description:
              "Development and prototyping of inclusive, feminist, and critical AI."
          },
          {
            title: "Policy Engagement",
            description:
              "Policy briefs, strategic reports, and materials for public decision-makers, multilateral organizations, and private actors."
          },
          {
            title: "Training",
            description:
              "Courses, seminars, and training spaces in ethics, politics, and critical AI studies."
          }
        ]
      },
      network: {
        title: "Binational network",
        body:
          "A multinodal network with founding nodes in Ecuador and Argentina, articulating academia and civil society through a flexible and resilient governance model."
      },
      foundation: {
        title: "Foundation",
        body:
          "Conceived in 2024 through the academic initiative of Dr. Horacio Correa Lucero, with decisive founding intellectual and institutional support from Dr. Cheryl Martens (IEAD-USFQ)."
      },
      cta: {
        title: "Collaborate with LAST Lab",
        actions: [
          { label: "Propose an alliance", page: "cooperation" },
          { label: "Request information", page: "contact" }
        ]
      }
    },
    about: {
      seo: {
        title: "About the Lab",
        description:
          "Origin, mission, and vision of LAST Lab for Critical AI as a multinodal network for critical AI research."
      },
      intro:
        "LAST Lab was conceived in 2024 through the academic initiative of Dr. Horacio Correa Lucero and the founding intellectual and institutional support of Dr. Cheryl Martens (IEAD-USFQ), whose early endorsement was decisive for consolidating the project.",
      sections: [
        {
          title: "Origin",
          body:
            "Their collaboration shaped a multinodal, binational, and autonomous network with founding nodes at IEAD-USFQ (Ecuador) and UNAJ (Argentina), with Diversa (Quito) integrated from the outset, connecting university and civil society."
        },
        {
          title: "Mission",
          body:
            "To build a critical, interdisciplinary, and multinodal space rooted in Latin American and Global South realities for the study, experimentation, and transformation of artificial intelligence and digital technologies as socio-technical mediations reshaping social, economic, and institutional environments."
        },
        {
          title: "Vision",
          body:
            "To consolidate as a regional reference with global projection in critical AI research, specialized training, and strategic proposals that can influence the design, regulation, and deployment of digital technologies in Latin America and the Global South."
        }
      ]
    },
    network: {
      seo: {
        title: "Network",
        description:
          "Multinodal structure, founding nodes, and governance model of LAST Lab."
      },
      intro:
        "LAST Lab operates as a decentralized network of institutional, organizational, and individual nodes.",
      structure: {
        title: "Multinodal structure",
        body:
          "This model ensures flexibility, resilience, and regional expansion, avoiding centralization and enabling continuity beyond institutional or personal changes."
      },
      seats: {
        title: "Formal seats and scope",
        body:
          "According to the Constitutive Act, IEAD-USFQ and UNAJ are formal Lab seats. The network keeps its focus on Latin America and the Global South while remaining open to aligned international nodes."
      },
      nodes: {
        title: "Founding nodes",
        items: [
          "IEAD - Universidad San Francisco de Quito (Ecuador)",
          "ICSyA - Universidad Nacional Arturo Jauretche (Argentina)",
          "Diversa (Quito, civil society organization)"
        ]
      },
      nodeTypes: {
        title: "Node types",
        items: [
          {
            title: "Institutional node",
            description:
              "Universities, institutes, or research centers that host or participate in the Lab."
          },
          {
            title: "Organizational node",
            description:
              "Civil society organizations, NGOs, or collectives integrated into the multinodal network."
          },
          {
            title: "Individual node",
            description:
              "Individuals participating in a personal capacity, constituting their own node in the network."
          }
        ]
      },
      participants: {
        title: "Participating nodes (preliminary registry)",
        items: [
          {
            node: "USFQ",
            country: "Ecuador",
            participants: "1 member"
          },
          {
            node: "UNAJ",
            country: "Argentina",
            participants: "3 members"
          },
          {
            node: "Diversa",
            country: "Ecuador",
            participants: "1 member"
          }
        ]
      },
      governance: {
        title: "Governance model",
        body:
          "LAST Lab has a General Directorate responsible for strategic and academic leadership, and a Multinodal Advisory Council (CAM) composed of representatives from the nodes. This model combines defined leadership with multinodal consultation to ensure institutional coherence and participation in strategic decisions."
      }
    },
    research: {
      seo: {
        title: "Research and Action",
        description:
          "Critical research lines, prototyping, and strategic engagement of LAST Lab in Latin America."
      },
      intro:
        "LAST Lab articulates critical research, technological experimentation, and strategic policy engagement to intervene in AI design, regulation, and implementation processes across Latin America.",
      areas: [
        {
          title: "Critical interdisciplinary research",
          description:
            "We develop studies integrating philosophy, social sciences, and technical analysis to understand AI as a socio-technical mediation that restructures power, knowledge, and social reproduction."
        },
        {
          title: "Alternative AI prototyping",
          description:
            "We explore and develop inclusive, feminist, and critical technological models, experimenting with alternatives to dominant corporate paradigms."
        },
        {
          title: "Mapping and data analysis",
          description:
            "We design methodologies to map inequalities in access, design, implementation, and governance of digital technologies, generating inputs for research and public engagement."
        },
        {
          title: "Editorial and strategic production",
          description:
            "We produce policy briefs, technical reports, white papers, and guidance materials for public decision-makers, multilateral agencies, and institutional actors."
        },
        {
          title: "Technology cooperatives exploration",
          description:
            "We promote analysis and experimentation with cooperative digital production models focused on collaboration, sustainability, and collective benefit."
        }
      ]
    },
    publications: {
      seo: {
        title: "Publications",
        description:
          "Editorial repository for academic publications and strategic materials produced by LAST Lab."
      },
      intro:
        "LAST Lab produces and disseminates academic and strategic knowledge for scientific communities and institutional/public stakeholders.",
      collections: [
        {
          title: "Academic publications",
          status: "Coming soon"
        },
        {
          title: "Policy briefs",
          status: "Coming soon"
        },
        {
          title: "White papers",
          status: "Coming soon"
        },
        {
          title: "Working papers",
          status: "Coming soon"
        },
        {
          title: "Editorial series",
          status: "Coming soon"
        }
      ],
      repositoryTitle: "Downloadable repository",
      repositoryNote:
        "The downloadable repository structure is ready for future uploads."
    },
    training: {
      seo: {
        title: "Training",
        description:
          "Training and capacity-building programs in ethics, policy, and critical perspectives on AI."
      },
      intro:
        "LAST Lab develops training and capacity-building programs aimed at strengthening critical and technical capabilities in AI and digital technologies in Latin America.",
      areas: [
        "Ethics and politics of artificial intelligence",
        "Critical technology studies",
        "Algorithmic justice and inequality analysis",
        "Inclusive and critical technology design"
      ],
      catalogStatus:
        "Course catalog under development. Upcoming updates will publish cohorts, curricula, and schedules."
    },
    governance: {
      seo: {
        title: "Governance",
        description:
          "Governance structure, leadership, and Multinodal Advisory Council of LAST Lab."
      },
      intro:
        "LAST Lab relies on a governance structure combining defined strategic leadership and multinodal participation, ensuring institutional coherence, transparency, and regional/international expansion capacity.",
      principlesTitle: "Guiding principles",
      principles:
        "Its operation is governed by internal Statutes and principles of academic ethics, intellectual autonomy, inclusion, social justice, non-discrimination, anti-harassment, data protection, and institutional transparency.",
      statutesNotesTitle: "Statutory highlights",
      statutesNotes: [
        "CAM is a consultative and non-binding body, except in cases explicitly defined by Statute.",
        "Spanish is the official working language; English is provided as a courtesy translation.",
        "Intellectual property is recognized by effective contribution, with preference for open access whenever feasible.",
        "Each project defines its administrative entity, and an annual summary of funding and aggregated execution is published."
      ],
      leadershipTitle: "Governance structure",
      leadership: [
        {
          role: "General Directorate",
          person: "Dr. Horacio Correa Lucero"
        },
        {
          role: "Co-founding and Direction of IEAD-USFQ Node",
          person: "Dr. Cheryl Martens - IEAD-USFQ"
        },
        {
          role: "Direction of UNAJ Node",
          person: "Dr. Horacio Correa Lucero - UNAJ"
        },
        {
          role: "Diversa Node Representation",
          person: "Dr. Diana Mosquera - Diversa (Quito)"
        }
      ],
      membersTitle: "Active members (preliminary registry)",
      members: [
        {
          name: "Cheryl Martens",
          role: "Node director",
          node: "USFQ"
        },
        {
          name: "Horacio Correa Lucero",
          role: "General director and node director",
          node: "UNAJ"
        },
        {
          name: "Gabriel Perdomo",
          role: "Institutional member",
          node: "UNAJ"
        },
        {
          name: "Monica Casanova",
          role: "Institutional member",
          node: "UNAJ"
        },
        {
          name: "Diana Mosquera",
          role: "Organizational member",
          node: "Diversa"
        }
      ],
      cam: {
        title: "Multinodal Advisory Council (CAM)",
        body: "Consultative body composed of representatives from the Lab nodes."
      }
    },
    cooperation: {
      seo: {
        title: "Cooperation",
        description:
          "Academic, institutional, and social alliances aligned with critical AI research and public responsibility."
      },
      intro:
        "LAST Lab promotes academic, institutional, and social partnerships that share its principles of critical research, intellectual autonomy, and public responsibility.",
      partnerTitle: "We seek collaboration with",
      partners: [
        "Universities and research centers",
        "Multilateral organizations",
        "Foundations and international cooperation programs",
        "Civil society organizations",
        "Technology initiatives committed to inclusion and social justice"
      ],
      principlesTitle: "Cooperation principles",
      principles:
        "All cooperation is developed under principles of academic independence, institutional transparency, and ethical coherence with Lab objectives.",
      fundingTitle: "Financial strategy and sustainability",
      fundingSources: [
        "Competitive national and international calls focused on AI and digital technologies.",
        "Alliances with multilateral organizations and foundations supporting critical innovation.",
        "Engagement with private companies under corporate social responsibility criteria.",
        "Regional academic consortia and networks to co-finance activities.",
        "Specialized training and educational programs on critical AI to sustain operations."
      ],
      operationsTitle: "Operational framework",
      operations:
        "Specific projects may be managed through corresponding administrative entities, according to applicable regulations and Lab Statutes.",
      contactPrompt:
        "Institutions interested in exploring collaboration opportunities can contact us through the institutional form."
    },
    contact: {
      seo: {
        title: "Contact",
        description:
          "Official communication channels for institutional requests, collaborations, and academic invitations."
      },
      intro:
        "LAST Lab receives institutional inquiries, collaboration proposals, academic invitations, and information requests through official channels.",
      form: {
        nameLabel: "Name",
        emailLabel: "Email",
        institutionLabel: "Institution / Organization",
        messageLabel: "Message",
        submitLabel: "Send inquiry"
      },
      emailTitle: "Institutional email",
      email: "info@lastlab.org",
      locationsTitle: "Nodes and locations",
      locations: [
        "IEAD-USFQ Node: Maxwell Building, office M-301, Cumbaya Campus, Universidad San Francisco de Quito (Ecuador).",
        "UNAJ Node: Institute of Social Sciences and Administration, Florencio Varela (Argentina).",
        "Diversa Node: Quito (Ecuador)."
      ],
      socialTitle: "Social",
      socialLinks: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/"
        }
      ]
    }
  }
};
