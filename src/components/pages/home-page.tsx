import Image from "next/image";
import type { HomePageContent } from "@/content/schema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { withBasePath } from "@/lib/base-path";

interface HomePageProps {
  locale: Locale;
  page: HomePageContent;
}

export function HomePage({ locale, page }: HomePageProps) {
  return (
    <div className="grid gap-7">
      <section className="reveal overflow-hidden rounded-[1.75rem] border border-brand-300 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-8 text-white shadow-soft md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <Image
              src={withBasePath("/brand/logo.svg")}
              alt="LAST Lab logo"
              width={76}
              height={76}
              className="h-16 w-16 rounded-full bg-white/95 p-2"
              priority
            />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">{page.hero.subtitle}</p>
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
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">{page.whatWeDo.eyebrow}</p>
            <h2 className="mt-2 font-heading text-2xl font-bold">{page.whatWeDo.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-100">{page.whatWeDo.body}</p>
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
