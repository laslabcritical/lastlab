import type { LocaleContent } from "@/content/schema";
import type { Locale, PageKey } from "@/lib/i18n";
import { AboutPage } from "@/components/pages/about-page";
import { ContactPage } from "@/components/pages/contact-page";
import { CooperationPage } from "@/components/pages/cooperation-page";
import { GovernancePage } from "@/components/pages/governance-page";
import { HomePage } from "@/components/pages/home-page";
import { NetworkPage } from "@/components/pages/network-page";
import { PublicationsPage } from "@/components/pages/publications-page";
import { ResearchPage } from "@/components/pages/research-page";
import { TrainingPage } from "@/components/pages/training-page";

interface PageContentProps {
  locale: Locale;
  pageKey: PageKey;
  content: LocaleContent;
}

export function PageContent({ locale, pageKey, content }: PageContentProps) {
  switch (pageKey) {
    case "home":
      return <HomePage locale={locale} page={content.pages.home} />;
    case "about":
      return <AboutPage page={content.pages.about} />;
    case "network":
      return <NetworkPage page={content.pages.network} />;
    case "research":
      return <ResearchPage page={content.pages.research} />;
    case "publications":
      return <PublicationsPage page={content.pages.publications} />;
    case "training":
      return <TrainingPage page={content.pages.training} />;
    case "governance":
      return <GovernancePage page={content.pages.governance} />;
    case "cooperation":
      return <CooperationPage page={content.pages.cooperation} />;
    case "contact":
      return <ContactPage page={content.pages.contact} />;
    default:
      return null;
  }
}
