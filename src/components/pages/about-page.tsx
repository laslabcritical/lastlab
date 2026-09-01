import type { AboutPageContent } from "@/content/schema";
import { Section } from "@/components/ui/section";

interface AboutPageProps {
  page: AboutPageContent;
}

export function AboutPage({ page }: AboutPageProps) {
  const [origin, ...rest] = page.sections;

  return (
    <div className="grid gap-7">
      <Section title={page.seo.title} description={page.intro} index={0} />
      <div className="grid gap-5">
        {origin ? (
          <section className="reveal rounded-lg border border-brand-100 bg-white p-7 shadow-panel">
            <h2 className="font-heading text-3xl font-bold text-ink">{origin.title}</h2>
            <p className="mt-4 max-w-4xl leading-relaxed text-muted">{origin.body}</p>
          </section>
        ) : null}

        <div className="grid gap-5 lg:grid-cols-2">
          {rest.map((section) => (
            <article key={section.title} className="rounded-lg border border-brand-100 bg-brand-50/70 p-7">
              <h2 className="font-heading text-3xl font-bold text-ink">{section.title}</h2>
              <p className="mt-4 leading-relaxed text-muted">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
