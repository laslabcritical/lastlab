import Link from "next/link";
import type { ContactPageContent } from "@/content/schema";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

interface ContactPageProps {
  page: ContactPageContent;
}

export function ContactPage({ page }: ContactPageProps) {
  return (
    <div className="grid gap-7">
      <Section title={page.seo.title} description={page.intro} index={0}>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr]">
          <aside className="rounded-lg border border-brand-200 bg-brand-50 p-6">
            <h3 className="font-heading text-2xl font-bold text-ink">{page.statusTitle}</h3>
            <p className="mt-4 leading-relaxed text-muted">{page.status}</p>

            <div className="mt-6 border-t border-brand-200 pt-5">
              <h3 className="font-heading text-xl font-bold text-ink">{page.socialTitle}</h3>
              {page.socialLinks.length > 0 ? (
                <ul className="mt-3 grid gap-2">
                  {page.socialLinks.map((social) => (
                    <li key={social.label}>
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-brand-700 transition hover:text-brand-900"
                      >
                        {social.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm leading-relaxed text-muted">{page.socialStatus}</p>
              )}
            </div>
          </aside>

          <div>
            <h3 className="font-heading text-2xl font-bold text-ink">{page.locationsTitle}</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {page.locations.map((location) => (
                <Card
                  key={`${location.name}-${location.location}`}
                  title={location.name}
                  description={location.institution}
                >
                  <p className="font-semibold text-brand-700">{location.location}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
