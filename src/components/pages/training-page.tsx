import type { TrainingPageContent } from "@/content/schema";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

interface TrainingPageProps {
  page: TrainingPageContent;
}

export function TrainingPage({ page }: TrainingPageProps) {
  return (
    <div className="grid gap-7">
      <Section title={page.seo.title} description={page.intro} index={0}>
        <div className="grid gap-4 md:grid-cols-2">
          {page.areas.map((area) => (
            <Card key={area} title={area} description={page.catalogStatus} />
          ))}
        </div>
      </Section>
    </div>
  );
}
