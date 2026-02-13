import Link from "next/link";
import type { ContactPageContent } from "@/content/schema";
import { ContactForm } from "@/components/forms/contact-form";
import { Section } from "@/components/ui/section";

interface ContactPageProps {
  page: ContactPageContent;
}

export function ContactPage({ page }: ContactPageProps) {
  return (
    <div className="grid gap-7">
      <Section title={page.seo.title} description={page.intro} index={0}>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm form={page.form} />
          <aside className="grid gap-5 rounded-2xl border border-brand-100 bg-white p-6 shadow-panel">
            <div>
              <h3 className="font-heading text-xl font-bold text-ink">{page.emailTitle}</h3>
              <Link href={`mailto:${page.email}`} className="mt-2 inline-flex text-brand-700 hover:text-brand-900">
                {page.email}
              </Link>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-ink">{page.locationsTitle}</h3>
              <ul className="mt-2 grid gap-2">
                {page.locations.map((location) => (
                  <li key={location} className="text-sm leading-relaxed text-muted">
                    {location}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-ink">{page.socialTitle}</h3>
              <ul className="mt-2 grid gap-2">
                {page.socialLinks.map((social) => (
                  <li key={social.label}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-700 hover:text-brand-900"
                    >
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}
