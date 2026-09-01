"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useMemo,
  useState,
  type CSSProperties,
  type MouseEvent
} from "react";
import type { KhipuxQuitoPageContent } from "@/content/schema";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { withBasePath } from "@/lib/base-path";
import { getSiteUrl } from "@/lib/seo";

interface KhipuxQuitoPageProps {
  locale: Locale;
  page: KhipuxQuitoPageContent;
}

interface ProgrammeSession {
  time?: string;
  title: string;
  type?: string;
  participants?: string[];
  moderator?: string;
  room?: string;
  description?: string;
  status: "confirmed" | "draft" | "coming_soon";
}

interface ProgrammeDay {
  date?: string;
  sessions: ProgrammeSession[];
}

interface ProgrammeModel {
  days: ProgrammeDay[];
}

const futureProgrammeModel: ProgrammeModel = {
  days: []
};

function assetPath(path: string) {
  return withBasePath(`/khipux/assets/${path}`);
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function scrollToHash(hash: string) {
  const target = document.querySelector(hash);
  if (!target) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start"
  });
}

function scrollToSection(event: MouseEvent<HTMLAnchorElement>, hash: string) {
  event.preventDefault();
  scrollToHash(hash);
}

function MaskedAsset({
  src,
  className,
  label
}: {
  src: string;
  className: string;
  label?: string;
}) {
  const maskStyles: CSSProperties = {
    WebkitMaskImage: `url("${src}")`,
    maskImage: `url("${src}")`,
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    backgroundColor: "currentColor"
  };

  return (
    <span
      className={cx("inline-block", className)}
      style={maskStyles}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}

function CriticalAiIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 8.25h13.5m-13.5 7.5h13.5M7.5 4.5v15m9-15v15M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
      />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
      />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  );
}

function BarsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

function KhipuxNavbar({ page }: { page: KhipuxQuitoPageContent }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const logo = assetPath("khipu-logo.svg");
  const circle = assetPath("khipu-circle.svg");
  const links = page.anchors.filter((anchor) =>
    ["about", "themes", "programme", "participants", "venue", "partners"].includes(
      anchor.id
    )
  );

  function handleMobileClick(event: MouseEvent<HTMLAnchorElement>, hash: string) {
    event.preventDefault();
    setMenuOpen(false);
    window.setTimeout(() => scrollToHash(hash), 180);
  }

  return (
    <>
      <nav className="sticky top-0 z-50 hidden w-full overflow-hidden bg-khipu-black py-4 md:block">
        <div className="khipux-content-container flex items-center gap-x-5">
          <div className="flex shrink-0 items-center gap-x-8">
            <MaskedAsset
              src={logo}
              className="h-16 w-8 origin-center -rotate-90 text-khipu-orange lg:h-20 lg:w-10"
              label="Khipu Logo"
            />
            <p className="text-2xl font-bold text-khipu-white">
              KHIPUx Quito
            </p>
          </div>

          <div className="flex min-w-0 flex-1 flex-nowrap items-center justify-center gap-x-4 text-sm font-bold text-khipu-white lg:gap-x-6 lg:text-base">
            {links.map((anchor) => (
              <a
                key={anchor.id}
                href={`#${anchor.id}`}
                onClick={(event) => scrollToSection(event, `#${anchor.id}`)}
                className="whitespace-nowrap transition-colors hover:text-khipu-orange"
              >
                {anchor.label}
              </a>
            ))}
          </div>

          <div className="relative hidden shrink-0 items-center justify-center xl:flex">
            <MaskedAsset
              src={circle}
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 text-khipu-orange opacity-40"
              label="Khipu Circle"
            />
            <span
              className="relative z-10 whitespace-nowrap rounded-full border border-khipu-orange px-4 py-2 text-xs font-bold text-khipu-orange"
              aria-label={page.hero.secondaryAction}
            >
              {page.hero.secondaryAction}
            </span>
          </div>
        </div>
      </nav>

      <nav className="sticky top-0 z-50 bg-khipu-black py-4 md:hidden">
        <div className="khipux-content-container flex items-center">
          <div className="flex grow items-center justify-center gap-x-8">
            <MaskedAsset
              src={logo}
              className="h-20 w-10 origin-center -rotate-90 text-khipu-orange"
              label="Khipu Logo"
            />
            <p className="whitespace-nowrap text-2xl font-bold text-khipu-white">
              KHIPUx Quito
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-end p-2 font-bold text-khipu-orange"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            aria-controls="khipux-mobile-menu"
          >
            <BarsIcon />
          </button>
        </div>
      </nav>

      <div
        id="khipux-mobile-menu"
        className={cx(
          "fixed inset-0 z-[60] max-h-screen bg-khipu-black p-8 transition-opacity duration-200 md:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div
          className={cx(
            "flex flex-col justify-center gap-y-8 transition duration-200",
            menuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
          )}
        >
          <button
            type="button"
            className="flex items-center justify-end p-2 text-khipu-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <CloseIcon />
          </button>
          <div className="flex flex-col gap-y-4 text-right text-2xl font-bold uppercase text-khipu-white">
            {links.map((anchor) => (
              <a
                key={anchor.id}
                href={`#${anchor.id}`}
                onClick={(event) => handleMobileClick(event, `#${anchor.id}`)}
                className="transition-colors hover:text-khipu-orange"
              >
                {anchor.label}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <MaskedAsset
              src={logo}
              className="aspect-[409/803] w-full max-w-xs text-khipu-white"
              label="Khipu Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Hero({ page }: { page: KhipuxQuitoPageContent }) {
  return (
    <section className="relative flex min-h-[max(80vh,560px)] w-full items-center overflow-hidden bg-khipu-black">
      <div
        className="absolute inset-0 opacity-25"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(233,91,48,0.22) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "54px 54px"
        }}
      />
      <MaskedAsset
        src={assetPath("khipu-circle.svg")}
        className="pointer-events-none absolute -right-24 -top-28 h-[360px] w-[360px] text-khipu-orange opacity-90 md:-right-10 md:h-[520px] md:w-[520px]"
      />
      <MaskedAsset
        src={assetPath("khipu-logo-horizontal.svg")}
        className="pointer-events-none absolute bottom-4 left-1/2 h-[190px] w-[min(1000px,90vw)] -translate-x-1/2 text-white opacity-[0.06]"
      />

      <div className="khipux-content-container relative z-10 grid gap-12 py-16 text-khipu-white lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <span className="inline-block rounded-sm bg-khipu-orange px-5 py-2 text-lg font-bold uppercase tracking-wider text-khipu-white md:text-xl">
            {page.dates.shortDisplay}
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            KHIPUx Quito
          </h1>
          <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight md:text-4xl">
            {page.subtitle}
          </h2>

          <p className="mt-6 max-w-3xl text-lg font-semibold leading-relaxed text-white/80 md:text-xl">
            {page.hero.launchNote}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#programme"
              onClick={(event) => scrollToSection(event, "#programme")}
              className="rounded-full bg-khipu-orange px-6 py-3 font-bold text-khipu-white transition hover:opacity-90 md:px-8 md:py-4"
            >
              {page.hero.primaryAction}
            </a>
            <a
              href="#participation"
              onClick={(event) => scrollToSection(event, "#participation")}
              className="rounded-full border-2 border-khipu-orange px-6 py-3 font-bold text-khipu-white transition hover:bg-khipu-orange/15 md:px-8 md:py-4"
            >
              {page.hero.secondaryAction}
            </a>
          </div>
        </div>

        <div className="border-l-4 border-khipu-orange bg-white/10 p-6 backdrop-blur">
          <dl className="grid gap-5">
            <div>
              <dt className="text-sm font-bold uppercase tracking-wider text-khipu-orange">
                Sede
              </dt>
              <dd className="mt-1 text-2xl font-bold">{page.location.firstVenue}</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-wider text-khipu-orange">
                Sala principal
              </dt>
              <dd className="mt-1 text-2xl font-bold">Hemiciclo</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-wider text-khipu-orange">
                Ciudad
              </dt>
              <dd className="mt-1 text-2xl font-bold">
                {page.location.city}, {page.location.country}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-wider text-khipu-orange">
                Formato
              </dt>
              <dd className="mt-1 text-2xl font-bold">{page.format}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function AboutEvent({ page }: { page: KhipuxQuitoPageContent }) {
  return (
    <section id="about" className="scroll-mt-24 bg-khipu-gray py-16 text-khipu-white md:py-24">
      <div className="khipux-content-container">
        <div className="mb-12 max-w-4xl">
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Sobre el <span className="text-khipu-orange">evento</span>
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-white/80 md:text-lg">
            {page.overview.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
          {page.objectives.items.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-5 border-l-4 border-khipu-orange bg-white/10 px-5 py-4"
            >
              <span className="text-2xl font-bold text-khipu-orange">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base font-semibold leading-relaxed text-white/80 md:text-lg">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Themes({ page }: { page: KhipuxQuitoPageContent }) {
  const icons = [
    <CriticalAiIcon key="critical" />,
    <RocketIcon key="labour" />,
    <ScaleIcon key="governance" />
  ];

  return (
    <section id="themes" className="scroll-mt-24 bg-khipu-black py-16 text-khipu-white">
      <div className="khipux-content-container">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-khipu-orange">
              {page.themes.eyebrow}
            </p>
            <h2 className="mt-2 text-4xl font-bold md:text-6xl">{page.themes.title}</h2>
          </div>
          <p className="max-w-xl text-sm font-semibold leading-relaxed text-white/65 md:text-base">
            {page.themes.intro}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
          {page.topics.map((topic, index) => (
            <div
              key={topic.title}
              className="flex items-start gap-5 border-l-4 border-khipu-orange bg-white/10 px-5 py-4 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="shrink-0 text-khipu-orange">{icons[index] ?? icons[0]}</span>
              <div className="flex-1">
                <h3 className="text-base font-bold text-khipu-white md:text-lg">
                  {topic.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 border-l-4 border-khipu-orange bg-white/10 px-5 py-4 text-base font-semibold leading-relaxed text-white/75">
          {page.themes.note}
        </p>
      </div>
    </section>
  );
}

function Programme({ page }: { page: KhipuxQuitoPageContent }) {
  const publishedSessionsCount = futureProgrammeModel.days.reduce(
    (count, day) => count + day.sessions.length,
    0
  );

  return (
    <section
      id="programme"
      className="scroll-mt-24 bg-khipu-gray py-12 text-khipu-white"
      data-published-sessions={publishedSessionsCount}
    >
      <div className="khipux-content-container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-6xl">
          Programa <span className="text-khipu-orange">2026</span>
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-base font-semibold leading-relaxed text-white/75 md:text-lg">
          {page.program.body}
        </p>

        <div className="mx-auto flex max-w-3xl flex-col items-center border-l-4 border-khipu-orange bg-black/20 p-6 text-center md:p-8">
          <Image
            src={assetPath("desc-bulletpoint-1.svg")}
            alt=""
            width={64}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-12 w-auto opacity-80"
            aria-hidden="true"
          />
          <p className="mt-5 text-sm font-bold uppercase tracking-wider text-khipu-orange">
            Estado del programa
          </p>
          <h3 className="mt-2 text-3xl font-bold">{page.program.actionLabel}</h3>
        </div>
      </div>
    </section>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function PersonMark({
  name,
  photoSrc,
  compact = false
}: {
  name: string;
  photoSrc: string | null;
  compact?: boolean;
}) {
  if (photoSrc) {
    return (
      <Image
        src={withBasePath(photoSrc)}
        alt={name}
        width={compact ? 96 : 224}
        height={compact ? 96 : 224}
        className={cx(
          "aspect-square rounded-sm border-l-4 border-khipu-orange object-cover",
          compact ? "w-16" : "w-full"
        )}
      />
    );
  }

  return (
    <div
      className={cx(
        "relative grid aspect-square place-items-center rounded-sm border-l-4 border-khipu-orange bg-white/10 font-bold text-khipu-orange shadow-lg",
        compact ? "w-16 text-xl" : "w-full text-4xl"
      )}
      aria-label={`Fotografía pendiente de ${name}`}
      role="img"
    >
      {initials(name)}
    </div>
  );
}

function Participants({ page }: { page: KhipuxQuitoPageContent }) {
  return (
    <section id="participants" className="scroll-mt-24 bg-khipu-black py-16 text-khipu-white">
      <div className="khipux-content-container flex flex-col items-center">
        <h2 className="mb-12 text-center text-4xl font-bold italic md:text-6xl">
          {page.participants.title}
        </h2>

        {page.participants.people.length > 0 ? (
          <div className="flex w-full max-w-4xl flex-col gap-12">
            {page.participants.people.map((person) => (
              <article
                key={person.id}
                className="group relative flex cursor-default flex-col items-center gap-6 md:flex-row md:items-start md:gap-8"
              >
                <div className="relative w-48 shrink-0 md:w-56">
                  <div className="absolute -inset-2 rounded-lg bg-khipu-orange/0 blur-xl transition-all duration-500 ease-out group-hover:bg-khipu-orange/20" />
                  <div className="relative transition-all duration-500 ease-out group-hover:-translate-x-3 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-khipu-orange/30">
                    <PersonMark name={person.name} photoSrc={person.photoSrc} />
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-center transition-all duration-300 md:text-left md:group-hover:translate-x-1">
                  <h3 className="text-2xl font-bold text-khipu-orange transition-all duration-300 group-hover:text-khipu-white md:text-3xl">
                    {person.name}
                  </h3>
                  <p className="text-base italic text-khipu-orange md:text-lg">
                    {person.institution}
                  </p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-khipu-orange via-khipu-orange/50 to-transparent" />
                  <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                    <span className="rounded-full border border-khipu-orange/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/80">
                      {person.confirmationStatus}
                    </span>
                    {person.modality ? (
                      <span className="rounded-full bg-khipu-orange/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-khipu-orange">
                        {person.modality}
                      </span>
                    ) : null}
                  </div>
                  {person.talkTitle ? (
                    <div className="mt-4 border-l-4 border-khipu-orange bg-white/10 p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                        Título confirmado
                      </p>
                      <p className="mt-2 text-sm font-semibold italic leading-relaxed text-white/85 md:text-base">
                        “{person.talkTitle}”
                      </p>
                    </div>
                  ) : null}
                  {person.externalUrl ? (
                    <a
                      href={person.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 w-fit self-center rounded-full border border-khipu-orange px-4 py-2 text-sm font-bold text-khipu-white transition hover:bg-khipu-orange/15 md:self-start"
                    >
                      Perfil
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="w-full max-w-3xl border-l-4 border-khipu-orange bg-white/10 p-6 text-center">
            <p className="mt-3 text-base font-semibold leading-relaxed text-white/75">
              {page.participants.pendingBody}
            </p>
          </div>
        )}

        <p className="mt-12 w-full max-w-4xl border-l-4 border-khipu-orange bg-white/10 px-5 py-4 text-center text-base font-semibold leading-relaxed text-white/75">
          {page.participants.pendingBody}
        </p>
      </div>
    </section>
  );
}

function organizerLines(
  person: KhipuxQuitoPageContent["organizingTeam"]["people"][number]
) {
  if (person.role && person.affiliations.length === 1) {
    return [`${person.role}, ${person.affiliations[0]}`];
  }

  return person.role ? [person.role, ...person.affiliations] : person.affiliations;
}

function OrganizingTeam({ page }: { page: KhipuxQuitoPageContent }) {
  return (
    <section className="bg-khipu-black pb-16 text-khipu-white">
      <div className="khipux-content-container">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-khipu-orange">
            Organización
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            {page.organizingTeam.title}
          </h2>
          <p className="mt-4 text-sm font-semibold leading-relaxed text-white/65 md:text-base">
            {page.organizingTeam.body}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {page.organizingTeam.people.map((person) => (
            <article
              key={person.id}
              className="flex flex-col gap-4 border border-white/10 bg-white/[0.06] p-4"
            >
              <PersonMark
                name={person.name}
                photoSrc={person.photoSrc}
                compact
              />
              <div>
                <h3 className="text-base font-bold text-khipu-white">
                  {person.name}
                </h3>
                <div className="mt-3 space-y-1 text-sm font-semibold leading-relaxed text-white/65">
                  {organizerLines(person).map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Participation({ page }: { page: KhipuxQuitoPageContent }) {
  return (
    <section id="participation" className="scroll-mt-24 bg-khipu-gray py-16 text-khipu-white">
      <div className="khipux-content-container">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-6xl">
          {page.registration.title}
        </h2>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-lg font-semibold leading-relaxed md:text-xl">
              {page.registration.body}
            </p>
            <div className="rounded-xl border-2 border-khipu-orange bg-khipu-orange/20 px-6 py-5">
              <p className="text-sm font-medium uppercase tracking-wider text-khipu-white/80">
                Estado
              </p>
              <p className="mt-1 text-3xl font-bold text-khipu-orange">
                {page.registration.statusLabel}
              </p>
            </div>
            <div className="space-y-4">
              {page.registration.modalities.map((item) => (
                <div key={item} className="flex items-start gap-5">
                  <Image
                    src={assetPath("khipu-square.svg")}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="mt-1 h-10 w-10 shrink-0 md:h-12 md:w-12"
                    aria-hidden="true"
                  />
                  <p className="text-lg font-semibold leading-relaxed md:text-xl">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <Image
              src={assetPath("khipu.svg")}
              alt=""
              width={362}
              height={332}
              loading="lazy"
              decoding="async"
              className="h-auto w-full"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Venue({ page }: { page: KhipuxQuitoPageContent }) {
  return (
    <section id="venue" className="scroll-mt-24 bg-khipu-black py-12 text-khipu-white">
      <div className="khipux-content-container flex flex-col gap-8">
        <h2 className="text-center text-4xl font-bold md:text-6xl">Sede</h2>

        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="text-lg font-semibold leading-relaxed md:w-1/2 md:text-xl">
            <p>
              El encuentro se realizará en{" "}
              <span className="text-khipu-orange">{page.location.firstVenue}</span>,
              en Quito.
            </p>
            <p className="mt-5">
              El Hemiciclo será la sala principal durante ambas jornadas. Otras
              salas de FLACSO se utilizarán para actividades paralelas, con las
              asignaciones específicas a confirmar junto con el programa
              definitivo.
            </p>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-lg md:w-1/2">
            <iframe
              src="https://www.google.com/maps?q=FLACSO%20Ecuador%2C%20Quito&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de FLACSO Ecuador, Quito"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners({ page }: { page: KhipuxQuitoPageContent }) {
  return (
    <section id="partners" className="scroll-mt-24 bg-khipu-gray py-16 text-khipu-white">
      <div className="khipux-content-container">
        <h2 className="mb-12 text-center text-4xl font-bold italic md:text-6xl">
          {page.organization.title}
        </h2>

        <div className="space-y-10">
          {page.organization.groups.map((group) => (
            <div key={group.label}>
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-khipu-orange">
                {group.label}
              </p>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {group.items.map((institution) => (
                  <article
                    key={`${group.label}-${institution.name}`}
                    className="flex min-h-40 flex-col justify-between border-l-4 border-khipu-orange bg-white/10 p-5"
                  >
                    <div className="flex h-16 items-center">
                      {institution.logoSrc ? (
                        <Image
                          src={withBasePath(institution.logoSrc)}
                          alt={institution.name}
                          width={260}
                          height={90}
                          className="max-h-14 w-auto brightness-0 invert"
                        />
                      ) : (
                        <div className="grid h-14 min-w-28 place-items-center border border-dashed border-khipu-orange/60 px-4 text-xs font-bold uppercase tracking-wider text-white/65">
                          {institution.placeholder}
                        </div>
                      )}
                    </div>
                    <h3 className="mt-5 text-base font-bold leading-snug text-khipu-white">
                      {institution.name}
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KhipuxFooter({ page, locale }: { page: KhipuxQuitoPageContent; locale: Locale }) {
  return (
    <footer className="relative overflow-hidden bg-khipu-orange py-6 md:py-8">
      <div className="khipux-content-container">
        <div className="relative z-10 text-khipu-white">
          <p className="text-lg font-bold md:text-xl">{page.contact.title}</p>
          <p className="mt-1 text-lg font-bold md:text-xl">{page.contact.body}</p>
        </div>

        <div className="pointer-events-none mt-5 flex justify-center">
          <MaskedAsset
            src={assetPath("khipu-logo-horizontal.svg")}
            className="aspect-[801/406] h-24 max-w-full text-khipu-white opacity-80 md:h-32"
            label="Khipu Logo"
          />
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-5 sm:flex-row">
          <p className="text-sm font-semibold text-khipu-white md:text-base">
            {page.eventFooter.title} · {page.eventFooter.dates}
          </p>
          <Link
            href={getLocalizedPath(locale, "about")}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-khipu-gray transition-all hover:bg-white/90 md:text-base"
          >
            LAST Lab
          </Link>
        </div>
      </div>
    </footer>
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
    organizer:
      page.organization.groups
        .find((group) => group.label === "ORGANIZAN")
        ?.items.map((institution) => ({
          "@type": "Organization",
          name: institution.name
        })) ?? []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}

export function KhipuxQuitoPage({ locale, page }: KhipuxQuitoPageProps) {
  const pageTitle = useMemo(() => `${page.title}: ${page.subtitle}`, [page]);

  return (
    <article
      className="khipux-site min-h-screen bg-khipu-black font-montserrat text-khipu-white"
      lang={locale}
      aria-label={pageTitle}
    >
      <EventStructuredData locale={locale} page={page} />
      <KhipuxNavbar page={page} />
      <Hero page={page} />
      <AboutEvent page={page} />
      <Themes page={page} />
      <Programme page={page} />
      <Participants page={page} />
      <OrganizingTeam page={page} />
      <Participation page={page} />
      <Venue page={page} />
      <Partners page={page} />
      <KhipuxFooter page={page} locale={locale} />
    </article>
  );
}
