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
    ["about", "programme", "participants", "venue", "materials"].includes(
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

          <Link href={getLocalizedPath(page.locale === "es" ? "en" : "es", "khipuxQuito")} hrefLang={page.locale === "es" ? "en" : "es"} className="font-bold text-khipu-orange">{page.locale === "es" ? "EN" : "ES"}</Link>
          <div className="relative hidden shrink-0 items-center justify-center xl:flex">
            <MaskedAsset
              src={circle}
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 text-khipu-orange opacity-40"
              label="Khipu Circle"
            />
            <a href={page.links.registrationUrl ?? "#participation"} className="relative z-10 whitespace-nowrap rounded-full border border-khipu-orange px-4 py-2 text-xs font-bold text-khipu-orange">{page.hero.primaryAction}</a>
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
          <Link href={getLocalizedPath(page.locale === "es" ? "en" : "es", "khipuxQuito")} hrefLang={page.locale === "es" ? "en" : "es"} className="p-2 font-bold text-khipu-orange">{page.locale === "es" ? "EN" : "ES"}</Link>
          <button
            type="button"
            className="flex items-center justify-end p-2 font-bold text-khipu-orange"
            onClick={() => setMenuOpen(true)}
            aria-label={page.ui.openMenu}
            aria-expanded={menuOpen}
            aria-controls="khipux-mobile-menu"
          >
            <BarsIcon />
          </button>
        </div>
      </nav>

      <div
        id="khipux-mobile-menu"
        inert={!menuOpen}
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
            aria-label={page.ui.closeMenu}
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
              href={page.links.registrationUrl ?? "#participation"}
              className="rounded-full bg-khipu-orange px-6 py-3 font-bold text-khipu-white transition hover:opacity-90 md:px-8 md:py-4"
            >
              {page.hero.primaryAction}
            </a>
            <a
              href="#programme"
              onClick={(event) => scrollToSection(event, "#programme")}
              className="rounded-full border-2 border-khipu-orange px-6 py-3 font-bold text-khipu-white transition hover:bg-khipu-orange/15 md:px-8 md:py-4"
            >
              {page.hero.secondaryAction}
            </a>
            <a href={page.links.scholarshipUrl} className="rounded-full border-2 border-khipu-orange px-6 py-3 font-bold text-khipu-white hover:bg-khipu-orange/15 md:px-8 md:py-4">{page.ui.scholarship}</a>
          </div>
        </div>

        <div className="border-l-4 border-khipu-orange bg-white/10 p-6 backdrop-blur">
          <dl className="grid gap-5">
            <div>
              <dt className="text-sm font-bold uppercase tracking-wider text-khipu-orange">
                {page.ui.venue}
              </dt>
              <dd className="mt-1 text-2xl font-bold">{page.location.firstVenue}</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-wider text-khipu-orange">
                {page.ui.mainRoom}
              </dt>
              <dd className="mt-1 text-2xl font-bold">{page.location.mainRoom}</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-wider text-khipu-orange">
                {page.ui.city}
              </dt>
              <dd className="mt-1 text-2xl font-bold">
                {page.location.city}, {page.location.country}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-wider text-khipu-orange">
                {page.ui.format}
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
            {page.overview.title}
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

function RegistrationActions({ page }: { page: KhipuxQuitoPageContent }) {
  return <div className="flex flex-wrap gap-3">
    {page.links.registrationUrl && <a className="rounded-full bg-khipu-orange px-6 py-3 font-bold text-white hover:opacity-90" href={page.links.registrationUrl}>{page.hero.primaryAction}</a>}
    <a className="rounded-full border-2 border-khipu-orange px-6 py-3 font-bold hover:bg-khipu-orange/15" href={page.links.scholarshipUrl}>{page.ui.scholarship}</a>
  </div>;
}

function Launch({ page }: { page: KhipuxQuitoPageContent }) {
  return <section id="launch" className="scroll-mt-24 bg-khipu-orange py-14 text-white">
    <div className="khipux-content-container">
      <p className="font-bold">{page.launch.date}</p>
      <h2 className="mt-4 max-w-4xl text-3xl font-bold md:text-5xl">{page.launch.title}</h2>
      <h3 className="mt-6 text-xl font-bold">{page.launch.activity}</h3>
      <p className="mt-2">{page.location.mainRoom}</p>
      <ul className="mt-5 grid gap-2 md:grid-cols-2">{page.launch.participants.map(person => <li key={person}>{person}</li>)}</ul>
      <p className="mt-6 max-w-4xl text-lg leading-relaxed">{page.launch.description}</p>
    </div>
  </section>;
}

function Programme({ page }: { page: KhipuxQuitoPageContent }) {
  const [activeDay, setActiveDay] = useState(0);
  return <section id="programme" className="scroll-mt-24 bg-khipu-gray py-14 text-khipu-white" data-published-sessions={page.programmeDays.reduce((n, day) => n + day.sessions.length, 0)}>
    <div className="khipux-content-container">
      <h2 className="text-4xl font-bold md:text-6xl">{page.program.title}</h2>
      <p className="mt-5 max-w-4xl leading-relaxed text-white/80">{page.program.body}</p>
      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/70">{page.scheduleNote}</p>
      <div role="tablist" aria-label={page.program.title} className="my-8 flex gap-3">
        {page.programmeDays.map((day, index) => <button key={day.date} type="button" role="tab" id={`day-tab-${index}`} aria-controls={`day-panel-${index}`} aria-selected={activeDay === index} tabIndex={activeDay === index ? 0 : -1}
          onClick={() => setActiveDay(index)} onKeyDown={event => {
            let next = activeDay;
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") next = (activeDay + 1) % page.programmeDays.length;
            else if (event.key === "Home") next = 0;
            else if (event.key === "End") next = page.programmeDays.length - 1;
            else return;
            event.preventDefault(); setActiveDay(next); document.getElementById(`day-tab-${next}`)?.focus();
          }} className={cx("flex-1 rounded-lg border-2 border-khipu-orange px-4 py-4 text-left font-bold", activeDay === index ? "bg-khipu-orange" : "hover:bg-white/10")}>{day.label}</button>)}
      </div>
      {page.programmeDays.map((day, index) => <div key={day.date} role="tabpanel" id={`day-panel-${index}`} aria-labelledby={`day-tab-${index}`} hidden={activeDay !== index}>
        <h3 className="mb-6 text-xl font-bold text-khipu-orange md:text-2xl">{day.theme}</h3>
        <div className="space-y-3">{day.sessions.map(session => <details key={session.id} className={cx("group rounded-lg border-l-4 bg-black/20", session.parallel ? "border-khipu-orange" : "border-white/30")}>
          <summary className="cursor-pointer p-5 marker:text-khipu-orange">
            <span className="ml-2 inline-block font-bold text-khipu-orange">{session.time}</span>
            <span className="ml-3 text-sm text-white/70">{session.type}{session.parallel ? ` · ${page.ui.parallel}` : ""}{session.status === "draft" ? ` · ${page.ui.draft}` : ""}</span>
            <span className="mt-2 block text-lg font-bold">{session.title}</span>
          </summary>
          <div className="space-y-3 border-t border-white/10 p-5 text-white/85">
            {session.participants.length > 0 && <div><p className="mb-2 font-bold text-khipu-orange">{page.ui.participants}</p><ul className="space-y-1">{session.participants.map(person => <li key={person}>{person}</li>)}</ul></div>}
            {session.moderator && <p><strong>{page.ui.moderator}:</strong> {session.moderator}</p>}
            <p><strong>{page.ui.room}:</strong> {session.room ?? page.ui.pendingRoom}</p>
            {session.description && <p className="leading-relaxed">{session.description}</p>}
          </div>
        </details>)}</div>
      </div>)}
      <div className="mt-8"><MaterialLinks page={page} /></div>
    </div>
  </section>;
}

function MaterialLinks({ page }: { page: KhipuxQuitoPageContent }) {
  return <div className="flex flex-wrap gap-3">
    {page.links.fullProgramUrl && <>
      <a href={withBasePath(page.links.fullProgramUrl)} download className="rounded-full bg-khipu-orange px-5 py-3 font-bold hover:opacity-90">{page.ui.downloadProgram}</a>
      <a href={withBasePath(page.links.fullProgramUrl)} target="_blank" rel="noopener noreferrer" className="rounded-full border border-khipu-orange px-5 py-3 font-bold hover:bg-white/10">{page.ui.viewProgram}</a>
    </>}
    {page.links.posterUrl && <>
      <a href={withBasePath(page.links.posterUrl)} download className="rounded-full bg-khipu-orange px-5 py-3 font-bold hover:opacity-90">{page.ui.downloadPoster}</a>
      <a href={withBasePath(page.links.posterUrl)} target="_blank" rel="noopener noreferrer" className="rounded-full border border-khipu-orange px-5 py-3 font-bold hover:bg-white/10">{page.ui.viewPoster}</a>
    </>}
  </div>;
}

function Materials({ page }: { page: KhipuxQuitoPageContent }) {
  return <section id="materials" className="scroll-mt-24 bg-khipu-black py-16"><div className="khipux-content-container">
    <h2 className="mb-8 text-4xl font-bold md:text-5xl">{page.ui.materials}</h2>
    <MaterialLinks page={page} />
    {page.links.posterUrl && <a href={withBasePath(page.links.posterUrl)} target="_blank" rel="noopener noreferrer" className="mt-8 block max-w-2xl"><Image src={withBasePath(page.links.posterUrl)} alt={page.ui.posterAlt} width={1200} height={1700} className="h-auto w-full rounded-lg" /></a>}
  </div></section>;
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
      aria-label={name}
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
          <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">
            {page.participants.people.map((person) => (
              <article
                key={person.id}
                className="group relative flex cursor-default flex-col gap-4 border-l-4 border-khipu-orange bg-white/5 p-5"
              >
                <div className="relative w-20 shrink-0">
                  <div className="absolute -inset-2 rounded-lg bg-khipu-orange/0 blur-xl transition-all duration-500 ease-out group-hover:bg-khipu-orange/20" />
                  <div className="relative transition-all duration-500 ease-out group-hover:-translate-x-3 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-khipu-orange/30">
                    <PersonMark name={person.name} photoSrc={person.photoSrc} />
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-center transition-all duration-300 md:text-left md:group-hover:translate-x-1">
                  <h3 className="text-xl font-bold text-khipu-orange">
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
                  {person.biography ? <p className="mt-3 text-white/75">{person.biography}</p> : null}
                  {person.talkTitle ? (
                    <div className="mt-4 border-l-4 border-khipu-orange bg-white/10 p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                        {page.ui.talk}
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
                      {page.ui.profile}
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
            {page.ui.organization}
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
            <RegistrationActions page={page} />
            {page.links.paymentUrl && (
              <a href={page.links.paymentUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full border border-khipu-orange px-5 py-3 font-bold text-khipu-orange hover:bg-white/10">
                {page.locale === "es" ? "Pago de inscripción (USFQ)" : "Registration payment (USFQ)"}
              </a>
            )}
            <p className="text-white/75">{page.scheduleNote}</p>
            <div className="rounded-xl border-2 border-khipu-orange bg-khipu-orange/20 px-6 py-5">
              <p className="text-sm font-medium uppercase tracking-wider text-khipu-white/80">
                {page.ui.status}
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
  return <section id="venue" className="scroll-mt-24 bg-khipu-black py-14 text-khipu-white"><div className="khipux-content-container">
    <h2 className="mb-8 text-4xl font-bold md:text-6xl">{page.ui.venue}</h2>
    <div className="grid items-center gap-8 md:grid-cols-2"><div className="space-y-5 text-lg leading-relaxed">
      <p className="font-bold text-khipu-orange">{page.location.firstVenue} · {page.location.city}</p>
      <p>{page.venueDescription}</p><p>{page.scheduleNote}</p>
    </div><div className="aspect-video overflow-hidden rounded-lg"><iframe src={page.location.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={page.ui.mapTitle} /></div></div>
  </div></section>;
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
                    <div className="flex h-24 items-center rounded bg-white p-3">
                      {institution.logoSrc ? (
                        <Image
                          src={withBasePath(institution.logoSrc)}
                          alt={institution.name}
                          width={260}
                          height={90}
                          className="max-h-20 w-auto object-contain"
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
            {page.eventFooter.title} · {page.eventFooter.dates}<br />{page.eventFooter.location}
          </p>
          <Link
            href={getLocalizedPath(locale, "home")}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-khipu-gray transition-all hover:bg-white/90 md:text-base"
          >
            <img src={withBasePath("/brand/lastlab-logo-negro.svg")} width="1200" height="360" alt="LASTLab — For Critical AI &amp; Digital Technologies" className="h-auto w-48 max-w-full" />
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
    offers: [25, 18].map((price, index) => ({
      "@type": "Offer", price, priceCurrency: "USD", url: page.links.registrationUrl,
      name: index === 0 ? (locale === "es" ? "Público general" : "General admission") : (locale === "es" ? "Estudiantes y comunidad USFQ" : "Students and USFQ community"),
      availability: "https://schema.org/InStock"
    })),
    organizer:
      page.organization.groups
        .find((group) => ["ORGANIZAN", "ORGANIZERS"].includes(group.label))
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
      <Launch page={page} />
      <AboutEvent page={page} />
      <Themes page={page} />
      <Programme page={page} />
      <Participants page={page} />
      <OrganizingTeam page={page} />
      <Participation page={page} />
      <Venue page={page} />
      <Partners page={page} />
      <Materials page={page} />
      <KhipuxFooter page={page} locale={locale} />
    </article>
  );
}
