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
            <Card key={collection.title} title={collection.title} description={collection.description}>
              <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
                {collection.status}
              </span>
            </Card>
          ))}
        </div>
      </Section>
      <Section title={page.repositoryTitle} description={page.repositoryNote} index={1} />
    </div>
  );
}
