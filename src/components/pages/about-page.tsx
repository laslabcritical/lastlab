import type { AboutPageContent } from "@/content/schema";
import { Section } from "@/components/ui/section";

interface AboutPageProps {
  page: AboutPageContent;
}

export function AboutPage({ page }: AboutPageProps) {
  return (
    <div className="grid gap-7">
      <Section title={page.seo.title} description={page.intro} index={0} />
      <div className="grid gap-5 md:grid-cols-3">
        {page.sections.map((section, index) => (
          <Section
            key={section.title}
            title={section.title}
            description={section.body}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
}
