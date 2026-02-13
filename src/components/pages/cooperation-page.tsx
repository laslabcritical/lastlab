import type { CooperationPageContent } from "@/content/schema";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

interface CooperationPageProps {
  page: CooperationPageContent;
}

export function CooperationPage({ page }: CooperationPageProps) {
  return (
    <div className="grid gap-7">
      <Section title={page.seo.title} description={page.intro} index={0} />

      <Section title={page.partnerTitle} index={1}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.partners.map((partner) => (
            <Card key={partner} title={partner} />
          ))}
        </div>
      </Section>

      <Section title={page.principlesTitle} description={page.principles} index={2} />

      <Section title={page.fundingTitle} index={3}>
        <div className="grid gap-4 md:grid-cols-2">
          {page.fundingSources.map((source) => (
            <Card key={source} title={source} />
          ))}
        </div>
      </Section>

      <Section
        title={page.operationsTitle}
        description={`${page.operations} ${page.contactPrompt}`}
        index={4}
      />
    </div>
  );
}
