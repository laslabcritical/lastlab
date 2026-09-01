import type { PageKey } from "@/lib/i18n";

export interface SeoFields {
  title: string;
  description: string;
}

export interface ActionLink {
  label: string;
  page: PageKey;
}

export interface ContentCard {
  title: string;
  description: string;
}

export interface HomePageContent {
  seo: SeoFields;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    actions: ActionLink[];
  };
  strategic: {
    eyebrow: string;
    title: string;
    body: string;
  };
  whatWeDo: {
    eyebrow: string;
    title: string;
    body: string;
  };
  pillars: {
    title: string;
    items: ContentCard[];
  };
  network: {
    title: string;
    body: string;
  };
  foundation: {
    title: string;
    body: string;
  };
  cta: {
    title: string;
    actions: ActionLink[];
  };
}

export interface AboutPageContent {
  seo: SeoFields;
  intro: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
}

export interface NetworkPageContent {
  seo: SeoFields;
  intro: string;
  structure: {
    title: string;
    body: string;
  };
  seats: {
    title: string;
    body: string;
  };
  nodes: {
    title: string;
    items: string[];
  };
  nodeTypes: {
    title: string;
    items: ContentCard[];
  };
  participants: {
    title: string;
    items: Array<{
      node: string;
      country: string;
      participants: string;
    }>;
  };
  governance: {
    title: string;
    body: string;
  };
}

export interface ResearchPageContent {
  seo: SeoFields;
  intro: string;
  areas: ContentCard[];
}

export interface PublicationsPageContent {
  seo: SeoFields;
  intro: string;
  collections: Array<{
    title: string;
    status: string;
  }>;
  repositoryTitle: string;
  repositoryNote: string;
}

export interface TrainingPageContent {
  seo: SeoFields;
  intro: string;
  areas: string[];
  catalogStatus: string;
}

export interface GovernancePageContent {
  seo: SeoFields;
  intro: string;
  principlesTitle: string;
  principles: string;
  statutesNotesTitle: string;
  statutesNotes: string[];
  leadershipTitle: string;
  leadership: Array<{
    role: string;
    person: string;
  }>;
  membersTitle: string;
  members: Array<{
    name: string;
    role: string;
    node: string;
  }>;
  cam: {
    title: string;
    body: string;
  };
}

export interface CooperationPageContent {
  seo: SeoFields;
  intro: string;
  partnerTitle: string;
  partners: string[];
  principlesTitle: string;
  principles: string;
  fundingTitle: string;
  fundingSources: string[];
  operationsTitle: string;
  operations: string;
  contactPrompt: string;
}

export interface ContactPageContent {
  seo: SeoFields;
  intro: string;
  form: {
    nameLabel: string;
    emailLabel: string;
    institutionLabel: string;
    messageLabel: string;
    submitLabel: string;
  };
  emailTitle: string;
  email: string;
  locationsTitle: string;
  locations: string[];
  socialTitle: string;
  socialLinks: Array<{
    label: string;
    href: string;
  }>;
}

export interface EventContactFields {
  email: string | null;
  formUrl: string | null;
  instagramUrl: string | null;
  linkedinUrl: string | null;
}

export interface EventParticipantPerson {
  id: string;
  name: string;
  institution: string;
  biography: string;
  photoSrc: string | null;
  externalUrl: string | null;
  confirmationStatus: string;
  modality: string | null;
  talkTitle: string | null;
}

export interface EventOrganizerPerson {
  id: string;
  name: string;
  role: string | null;
  affiliations: string[];
  photoSrc: string | null;
}

export interface EventInstitution {
  name: string;
  logoSrc: string | null;
  placeholder: string;
}

export interface KhipuxQuitoPageContent {
  seo: SeoFields;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  dates: {
    start: string;
    end: string;
    display: string;
    shortDisplay: string;
  };
  location: {
    city: string;
    country: string;
    firstVenue: string;
    secondVenue: string | null;
  };
  format: string;
  duration: string;
  status: {
    program: "in_progress";
    registration: "coming_soon";
  };
  links: {
    registrationUrl: string | null;
    fullProgramUrl: string | null;
  };
  eventContact: EventContactFields;
  anchors: Array<{
    id: string;
    label: string;
  }>;
  hero: {
    eyebrow: string;
    primaryAction: string;
    secondaryAction: string;
    launchNote: string;
  };
  overview: {
    title: string;
    paragraphs: string[];
  };
  objectives: {
    title: string;
    items: string[];
  };
  themes: {
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
  };
  topics: ContentCard[];
  program: {
    title: string;
    body: string;
    actionLabel: string;
  };
  participants: {
    title: string;
    people: EventParticipantPerson[];
    pendingBody: string;
  };
  organizingTeam: {
    title: string;
    body: string;
    people: EventOrganizerPerson[];
  };
  registration: {
    title: string;
    body: string;
    modalitiesTitle: string;
    modalities: string[];
    statusLabel: string;
  };
  organization: {
    title: string;
    groups: Array<{
      label: string;
      items: EventInstitution[];
    }>;
  };
  contact: {
    title: string;
    body: string;
  };
  eventFooter: {
    title: string;
    subtitle: string;
    location: string;
    dates: string;
    organizationText: string;
    supportText: string;
  };
}

export interface LocaleContent {
  siteName: string;
  siteSubtitle: string;
  navLabels: Record<PageKey, string>;
  ui: {
    menuLabel: string;
    switchTo: Record<"es" | "en", string>;
    footerRights: string;
  };
  footerLinks: PageKey[];
  pages: {
    home: HomePageContent;
    khipuxQuito: KhipuxQuitoPageContent;
    about: AboutPageContent;
    network: NetworkPageContent;
    research: ResearchPageContent;
    publications: PublicationsPageContent;
    training: TrainingPageContent;
    governance: GovernancePageContent;
    cooperation: CooperationPageContent;
    contact: ContactPageContent;
  };
}
