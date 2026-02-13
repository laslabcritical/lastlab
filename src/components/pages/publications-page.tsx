import type { PublicationsPageContent } from "@/content/schema";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

interface PublicationsPageProps {
  page: PublicationsPageContent;
}

export function PublicationsPage({ page }: PublicationsPageProps) {
  return (
    <div className="grid gap-7">
      <Section title={page.seo.title} description={page.intro} index={0}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.collections.map((collection) => (
            <Card key={collection.title} title={collection.title} description={collection.status} />
          ))}
        </div>
      </Section>
      <Section title={page.repositoryTitle} description={page.repositoryNote} index={1} />
    </div>
  );
}
