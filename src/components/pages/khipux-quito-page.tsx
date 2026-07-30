import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { KhipuxQuitoPageContent } from "@/content/schema";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { withBasePath } from "@/lib/base-path";
import { getSiteUrl } from "@/lib/seo";

interface KhipuxQuitoPageProps {
  locale: Locale;
  page: KhipuxQuitoPageContent;
}

interface SectionShellProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children
}: SectionShellProps) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-brand-100 py-12 md:py-16">
      <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
        <div>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 max-w-[18ch] font-heading text-3xl font-bold leading-tight tracking-normal text-ink md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function StatusPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-accent/40 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-800">
      {children}
    </span>
  );
}

function DisabledAction({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className="inline-flex cursor-not-allowed items-center justify-center rounded-md border border-brand-300 bg-brand-50 px-5 py-2.5 text-sm font-semibold text-muted opacity-80"
    >
      {children}
    </button>
  );
}

function getEffectiveOpenCallStatus(openCall: KhipuxQuitoPageContent["openCall"]) {
  if (openCall.status === "open" && !openCall.submissionUrl) {
    return "draft";
  }

  return openCall.status;
}

function OpenCallAction({
  openCall,
  compact = false
}: {
  openCall: KhipuxQuitoPageContent["openCall"];
  compact?: boolean;
}) {
  const effectiveStatus = getEffectiveOpenCallStatus(openCall);
  const statusContent = openCall.statusContent[effectiveStatus];
  const baseClasses = compact
    ? "inline-flex shrink-0 items-center justify-center rounded-md px-3 py-2 text-xs font-semibold leading-none transition"
    : "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition";

  if (effectiveStatus === "open" && openCall.submissionUrl) {
    return (
      <Link
        href={openCall.submissionUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} bg-brand-700 text-white hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700`}
      >
        {statusContent.actionLabel}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className={`${baseClasses} cursor-not-allowed border border-brand-300 bg-brand-50 text-muted opacity-80`}
    >
      {statusContent.actionLabel}
    </button>
  );
}

function TextCard({
  title,
  description,
  tone = "light"
}: {
  title: string;
  description?: string;
  tone?: "light" | "accent";
}) {
  return (
    <article
      className={`rounded-lg border p-5 ${
        tone === "accent"
          ? "border-accent/40 bg-[#fffaf0]"
          : "border-brand-100 bg-white"
      }`}
    >
      <h3 className="font-heading text-xl font-bold tracking-normal text-ink">{title}</h3>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      ) : null}
    </article>
  );
}

function CompactItem({ label, index }: { label: string; index: number }) {
  return (
    <li className="flex min-h-16 items-center gap-3 rounded-lg border border-brand-100 bg-white p-4">
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand-700 text-xs font-bold text-white"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="text-sm font-semibold leading-snug text-ink">{label}</span>
    </li>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-heading text-xl font-bold tracking-normal text-ink">{title}</h3>
      <ul className="mt-4 grid gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-brand-100 bg-white px-4 py-3 text-sm leading-relaxed text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DateGrid({
  openCall,
  effectiveStatus
}: {
  openCall: KhipuxQuitoPageContent["openCall"];
  effectiveStatus: ReturnType<typeof getEffectiveOpenCallStatus>;
}) {
  const dates = [
    openCall.openingDate,
    openCall.deadline,
    openCall.notificationDate,
    openCall.confirmationDeadline
  ];

  return (
    <div>
      <h3 className="font-heading text-xl font-bold tracking-normal text-ink">
        {openCall.datesTitle}
      </h3>
      {effectiveStatus === "draft" ? (
        <p className="mt-4 rounded-md border border-accent/40 bg-[#fffaf0] px-4 py-3 text-sm font-semibold text-brand-800">
          {openCall.draftDatesLabel}
        </p>
      ) : (
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {dates.map((date) => (
            <div
              key={date.label}
              className="rounded-lg border border-brand-100 bg-white p-4"
            >
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-brand-600">
                {date.label}
              </dt>
              <dd className="mt-2 text-sm font-semibold text-ink">{date.display}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

function ModalityCard({
  modality
}: {
  modality: KhipuxQuitoPageContent["openCall"]["modalities"][number];
}) {
  return (
    <article className="rounded-lg border border-brand-100 bg-white p-5">
      <h3 className="font-heading text-xl font-bold tracking-normal text-ink">
        {modality.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{modality.description}</p>
      <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-brand-700">
        {modality.detailsTitle}
      </p>
      <ul className="mt-3 grid gap-2">
        {modality.details.map((detail) => (
          <li key={detail} className="flex gap-2 text-sm leading-relaxed text-muted">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      {modality.note ? (
        <p className="mt-4 rounded-md bg-brand-50 px-3 py-2 text-sm leading-relaxed text-muted">
          {modality.note}
        </p>
      ) : null}
    </article>
  );
}

function SpeakerAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="grid aspect-square w-20 place-items-center rounded-lg border border-brand-200 bg-brand-50 text-lg font-bold text-brand-800"
      aria-label={`Fotografía pendiente de ${name}`}
      role="img"
    >
      {initials}
    </div>
  );
}

function OrganizerLogo({
  name,
  logoSrc,
  placeholder
}: KhipuxQuitoPageContent["organization"]["organizers"][number]) {
  return (
    <article className="flex min-h-36 flex-col justify-between rounded-lg border border-brand-100 bg-white p-5">
      <div className="flex h-16 items-center">
        {logoSrc ? (
          <Image
            src={withBasePath(logoSrc)}
            alt={name}
            width={220}
            height={80}
            className="max-h-14 w-auto object-contain"
          />
        ) : (
          <div
            className="grid h-14 min-w-24 place-items-center rounded-md border border-dashed border-brand-300 bg-brand-50 px-4 text-xs font-bold uppercase tracking-[0.12em] text-muted"
            aria-label={`${placeholder}: ${name}`}
            role="img"
          >
            {placeholder}
          </div>
        )}
      </div>
      <h3 className="mt-4 text-sm font-bold leading-snug text-ink">{name}</h3>
    </article>
  );
}

function EventStructuredData({
  locale,
  page
}: {
  locale: Locale;
  page: KhipuxQuitoPageContent;
}) {
  const eventUrl = new URL(
    withBasePath(getLocalizedPath(locale, "khipuxQuito")),
    getSiteUrl()
  ).toString();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${page.title}: ${page.subtitle}`,
    description: page.seo.description,
    startDate: page.dates.start,
    endDate: page.dates.end,
    url: eventUrl,
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: page.location.firstVenue,
      address: {
        "@type": "PostalAddress",
        addressLocality: page.location.city,
        addressCountry: "EC"
      }
    },
    organizer: page.organization.organizers.map((organizer) => ({
      "@type": "Organization",
      name: organizer.name
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}

export function KhipuxQuitoPage({ locale, page }: KhipuxQuitoPageProps) {
  const effectiveOpenCallStatus = getEffectiveOpenCallStatus(page.openCall);
  const openCallStatusContent = page.openCall.statusContent[effectiveOpenCallStatus];
  const contactLinks = [
    page.eventContact.email
      ? { label: "Email", href: `mailto:${page.eventContact.email}` }
      : null,
    page.eventContact.formUrl
      ? { label: "Formulario", href: page.eventContact.formUrl }
      : null,
    page.eventContact.instagramUrl
      ? { label: "Instagram", href: page.eventContact.instagramUrl }
      : null,
    page.eventContact.linkedinUrl
      ? { label: "LinkedIn", href: page.eventContact.linkedinUrl }
      : null
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return (
    <article className="grid gap-8">
      <EventStructuredData locale={locale} page={page} />

      <section className="relative overflow-hidden rounded-lg border border-brand-300 bg-brand-900 px-6 py-9 text-white shadow-soft md:px-10 md:py-12">
        <div
          className="absolute inset-0 opacity-25"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
            backgroundSize: "44px 44px"
          }}
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-200">
              {page.hero.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-tight tracking-normal md:text-6xl">
              {page.title}
            </h1>
            <p className="mt-3 font-heading text-2xl font-bold leading-tight tracking-normal text-brand-100 md:text-3xl">
              {page.subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-50">
              {page.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#sobre-evento"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-brand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {page.hero.primaryAction}
              </Link>
              <DisabledAction>{page.hero.secondaryAction}</DisabledAction>
            </div>
          </div>

          <div className="grid gap-3 rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur">
            <Image
              src={withBasePath("/brand/3.svg")}
              alt="LAST Lab"
              width={600}
              height={203}
              className="mb-2 h-12 w-auto max-w-[260px] brightness-0 invert"
              priority
            />
            <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-brand-200">
                  Fechas
                </dt>
                <dd className="mt-1 font-semibold text-white">{page.dates.display}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-brand-200">
                  Ciudad
                </dt>
                <dd className="mt-1 font-semibold text-white">
                  {page.location.city}, {page.location.country}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-brand-200">
                  Modalidad
                </dt>
                <dd className="mt-1 font-semibold text-white">{page.format}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-brand-200">
                  Duración
                </dt>
                <dd className="mt-1 font-semibold text-white">{page.duration}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <nav
        aria-label="Secciones de KHIPUx Quito 2026"
        className="sticky top-24 z-20 overflow-x-auto rounded-lg border border-brand-100 bg-white/95 p-2 shadow-panel backdrop-blur"
      >
        <div className="flex min-w-max gap-1">
          {page.anchors.map((anchor) => (
            <a
              key={anchor.id}
              href={`#${anchor.id}`}
              className="shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-xs font-semibold leading-none text-brand-700 transition hover:bg-brand-50 hover:text-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 md:text-sm"
            >
              {anchor.label}
            </a>
          ))}
          <div className="ml-2 border-l border-brand-100 pl-2">
            <OpenCallAction openCall={page.openCall} compact />
          </div>
        </div>
      </nav>

      <SectionShell id="sobre-evento" eyebrow="Presentación" title={page.overview.title}>
        <div className="grid gap-5 text-base leading-relaxed text-muted">
          {page.overview.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <TextCard title="Sede del primer día" description={page.location.firstVenue} />
          <TextCard
            title="Sede del segundo día"
            description={page.location.secondVenue ?? "Por confirmar"}
            tone="accent"
          />
        </div>
      </SectionShell>

      <SectionShell id="objetivos" title={page.objectives.title}>
        <ol className="grid gap-3 md:grid-cols-2">
          {page.objectives.items.map((item, index) => (
            <CompactItem key={item} label={item} index={index} />
          ))}
        </ol>
      </SectionShell>

      <SectionShell id="ejes" title="Ejes temáticos">
        <div className="grid gap-4 md:grid-cols-2">
          {page.topics.map((topic) => (
            <TextCard
              key={topic.title}
              title={topic.title}
              description={topic.description}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="formato"
        title={page.eventFormat.title}
        description={page.eventFormat.body}
      >
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {page.eventFormat.items.map((item, index) => (
            <CompactItem key={item} label={item} index={index} />
          ))}
        </ul>
      </SectionShell>

      <SectionShell id="programa" title={page.program.title} description={page.program.body}>
        <div className="mb-5">
          <StatusPill>Programa en elaboración</StatusPill>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {page.program.items.map((item) => (
            <TextCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <p className="mt-6 text-sm font-semibold text-muted">{page.program.closing}</p>
        <div className="mt-5">
          <DisabledAction>{page.program.actionLabel}</DisabledAction>
        </div>
      </SectionShell>

      <SectionShell id="personas" title={page.speakers.title}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {page.speakers.people.map((person) => (
            <article
              key={person.name}
              className="flex min-h-full flex-col rounded-lg border border-brand-100 bg-white p-5"
            >
              <SpeakerAvatar name={person.name} />
              <h3 className="mt-5 font-heading text-xl font-bold tracking-normal text-ink">
                {person.name}
              </h3>
              <p className="mt-2 text-sm font-semibold text-brand-700">
                {person.institution}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{person.biography}</p>
            </article>
          ))}
          <article className="flex min-h-full flex-col justify-center rounded-lg border border-dashed border-brand-300 bg-brand-50 p-5">
            <StatusPill>Próximamente</StatusPill>
            <h3 className="mt-4 font-heading text-xl font-bold tracking-normal text-ink">
              {page.speakers.pendingTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {page.speakers.pendingBody}
            </p>
          </article>
        </div>
      </SectionShell>

      <section id="convocatoria" className="scroll-mt-32 border-t border-brand-100 py-12 md:py-16">
        <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
          <div>
            <StatusPill>{openCallStatusContent.label}</StatusPill>
            <h2 className="mt-3 max-w-[18ch] font-heading text-3xl font-bold leading-tight tracking-normal text-ink md:text-4xl">
              {page.openCall.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {openCallStatusContent.body}
            </p>
            <div className="mt-6">
              <OpenCallAction openCall={page.openCall} />
            </div>
          </div>

          <div className="grid gap-8">
            <div className="grid gap-5 text-base leading-relaxed text-muted">
              {page.openCall.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <DateGrid
              openCall={page.openCall}
              effectiveStatus={effectiveOpenCallStatus}
            />

            <div>
              <h3 className="font-heading text-2xl font-bold tracking-normal text-ink">
                {page.openCall.modalitiesTitle}
              </h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {page.openCall.modalities.map((modality) => (
                  <ModalityCard key={modality.title} modality={modality} />
                ))}
              </div>
            </div>

            <div className="grid gap-7 lg:grid-cols-2">
              <ListBlock title={page.openCall.topicsTitle} items={page.openCall.topics} />
              <ListBlock
                title={page.openCall.participantsTitle}
                items={page.openCall.participants}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <TextCard
                title="Alcance de los ejes"
                description={page.openCall.topicsNote}
                tone="accent"
              />
              <TextCard
                title="Postulaciones"
                description={page.openCall.participantsNote}
                tone="accent"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-lg border border-brand-100 bg-white p-5">
                <h3 className="font-heading text-xl font-bold tracking-normal text-ink">
                  {page.openCall.languagesTitle}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {page.openCall.languages.map((language) => (
                    <li
                      key={language}
                      className="rounded-md bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-800"
                    >
                      {language}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {page.openCall.languagesNote}
                </p>
              </article>

              <article className="rounded-lg border border-accent/40 bg-[#fffaf0] p-5">
                <h3 className="font-heading text-xl font-bold tracking-normal text-ink">
                  {page.openCall.participationModeTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {page.openCall.participationModeBody}
                </p>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-brand-800">
                  {page.openCall.participationModeNote}
                </p>
              </article>
            </div>

            <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <ListBlock
                  title={page.openCall.selectionCriteriaTitle}
                  items={page.openCall.selectionCriteria}
                />
                <p className="mt-4 rounded-md border border-brand-100 bg-white px-4 py-3 text-sm leading-relaxed text-muted">
                  {page.openCall.selectionCriteriaNote}
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold tracking-normal text-ink">
                  {page.openCall.googleFormTitle}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {page.openCall.googleFormBody}
                </p>
                <div className="mt-5 grid gap-3">
                  {page.openCall.googleFormFields.map((field) => (
                    <article
                      key={field.title}
                      className="rounded-lg border border-brand-100 bg-white p-4"
                    >
                      <h4 className="text-sm font-bold text-ink">{field.title}</h4>
                      <ul className="mt-3 grid gap-2">
                        {field.items.map((item) => (
                          <li key={item} className="text-sm leading-relaxed text-muted">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        id="inscripciones"
        title={page.registration.title}
        description={page.registration.body}
      >
        <div className="mb-5">
          <StatusPill>{page.registration.statusLabel}</StatusPill>
        </div>
        <ListBlock
          title={page.registration.modalitiesTitle}
          items={page.registration.modalities}
        />
        <div className="mt-6">
          <DisabledAction>{page.registration.statusLabel}</DisabledAction>
        </div>
      </SectionShell>

      <SectionShell id="organizacion" title={page.organization.title}>
        <div className="grid gap-4 md:grid-cols-2">
          {page.organization.organizers.map((organizer) => (
            <OrganizerLogo key={organizer.name} {...organizer} />
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-accent/40 bg-[#fffaf0] p-5">
          <h3 className="font-heading text-2xl font-bold tracking-normal text-ink">
            {page.organization.supportTitle}
          </h3>
          <p className="mt-3 leading-relaxed text-muted">{page.organization.supportText}</p>
        </div>
      </SectionShell>

      <SectionShell id="lastlab" title={page.lastLab.title}>
        <div className="grid gap-5 text-base leading-relaxed text-muted">
          {page.lastLab.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-7">
          <Link
            href={getLocalizedPath(locale, page.lastLab.actionPage)}
            className="inline-flex items-center justify-center rounded-md bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
          >
            {page.lastLab.actionLabel}
          </Link>
        </div>
      </SectionShell>

      <SectionShell id="comunidad" title={page.community.title}>
        <div className="grid gap-5 text-base leading-relaxed text-muted">
          {page.community.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-7">
          <DisabledAction>{page.community.actionLabel}</DisabledAction>
        </div>
      </SectionShell>

      <SectionShell id="contacto" title={page.contact.title} description={page.contact.body}>
        {contactLinks.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md border border-brand-300 bg-white px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </SectionShell>

      <section className="rounded-lg bg-brand-900 px-6 py-8 text-white md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <p className="font-heading text-3xl font-black leading-tight tracking-normal">
              {page.eventFooter.title}
            </p>
            <p className="mt-2 font-heading text-xl font-bold tracking-normal text-brand-100">
              {page.eventFooter.subtitle}
            </p>
            <p className="mt-4 text-sm font-semibold text-brand-100">
              {page.eventFooter.location}
            </p>
            <p className="mt-1 text-sm font-semibold text-brand-100">
              {page.eventFooter.dates}
            </p>
          </div>
          <div className="text-sm leading-relaxed text-brand-100">
            <p>{page.eventFooter.organizationText}</p>
            <p className="mt-2">{page.eventFooter.supportText}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="#programa"
                className="rounded-md border border-white/50 px-4 py-2 font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Programa
              </Link>
              <Link
                href="#organizacion"
                className="rounded-md border border-white/50 px-4 py-2 font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Organización
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
