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
        <div className="rounded-lg border border-brand-200 bg-brand-50 p-5 text-sm font-semibold leading-relaxed text-brand-800">
          {page.catalogStatus}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {page.areas.map((area) => (
            <Card key={area.title} title={area.title} description={area.description} />
          ))}
        </div>
      </Section>
    </div>
  );
}
