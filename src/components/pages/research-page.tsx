import type { ResearchPageContent } from "@/content/schema";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

interface ResearchPageProps {
  page: ResearchPageContent;
}

export function ResearchPage({ page }: ResearchPageProps) {
  return (
    <div className="grid gap-7">
      <Section title={page.seo.title} description={page.intro} index={0}>
        <div className="grid gap-4 md:grid-cols-2">
          {page.areas.map((area) => (
            <Card key={area.title} title={area.title} description={area.description} />
          ))}
        </div>
      </Section>
    </div>
  );
}
