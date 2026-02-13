import type { HomePageContent } from "@/content/schema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

interface HomePageProps {
  locale: Locale;
  page: HomePageContent;
}

export function HomePage({ locale, page }: HomePageProps) {
  return (
    <div className="grid gap-7">
      <section className="reveal overflow-hidden rounded-[1.75rem] border border-brand-300 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 px-8 pb-10 pt-8 text-white shadow-soft md:px-12 md:pb-12 md:pt-10">
        <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:items-end lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">{page.hero.subtitle}</p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-black leading-tight md:text-5xl">
              {page.hero.title}
            </h1>
            <p className="mt-5 max-w-3xl leading-relaxed text-brand-100">{page.hero.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {page.hero.actions.map((action, index) => (
                <Button
                  key={action.label}
                  href={getLocalizedPath(locale, action.page)}
                  variant={index === 0 ? "light" : "lightGhost"}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur md:p-8 lg:ml-auto lg:max-w-[34rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">{page.whatWeDo.eyebrow}</p>
            <h2 className="mt-3 max-w-[16ch] font-heading text-[1.95rem] font-semibold leading-[1.12] tracking-[-0.012em] text-white md:text-[2.25rem] lg:text-[2.4rem]">{page.whatWeDo.title}</h2>
            <p className="mt-5 max-w-[36ch] text-[0.98rem] leading-[1.65] text-brand-100 md:text-[1.03rem]">{page.whatWeDo.body}</p>
          </div>
        </div>
      </section>

      <Section
        eyebrow={page.strategic.eyebrow}
        title={page.strategic.title}
        description={page.strategic.body}
        index={1}
      />

      <Section title={page.pillars.title} index={2}>
        <div className="grid gap-4 md:grid-cols-2">
          {page.pillars.items.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      <Section title={page.network.title} description={page.network.body} index={3} />

      <Section title={page.foundation.title} description={page.foundation.body} index={4} />

      <Section title={page.cta.title} index={5}>
        <div className="mt-6 flex flex-wrap gap-3">
          {page.cta.actions.map((action) => (
            <Button key={action.label} href={getLocalizedPath(locale, action.page)}>
              {action.label}
            </Button>
          ))}
        </div>
      </Section>
    </div>
  );
}
