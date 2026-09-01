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
  speakers?: string[];
  moderator?: string;
  room?: string;
  description?: string;
  status: "confirmed" | "draft" | "coming_soon";
}

interface ProgrammeDay {
  name: string;
  date: string;
  mainRoom: string;
  availableRooms: string[];
  sessions: ProgrammeSession[];
}

const programmeDays: ProgrammeDay[] = [
  {
    name: "Día 1",
    date: "19 de noviembre de 2026",
    mainRoom: "Hemiciclo",
    availableRooms: ["Hemiciclo", "Sala 2", "Sala 3"],
    sessions: []
  },
  {
    name: "Día 2",
    date: "20 de noviembre de 2026",
    mainRoom: "Hemiciclo",
    availableRooms: [
      "Hemiciclo",
      "Sala 1",
      "Sala 2",
      "Sala de reuniones de Casa de Doctorados"
    ],
    sessions: []
  }
];

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

function GlobeIcon() {
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
        d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
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
    ["about", "themes", "programme", "speakers", "venue", "partners"].includes(
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
        <div className="khipux-content-container flex items-center gap-x-4">
          <div className="flex shrink-0 items-center gap-x-8">
            <MaskedAsset
              src={logo}
              className="h-20 w-10 origin-center -rotate-90 text-khipu-orange"
              label="Khipu Logo"
            />
            <p className="text-2xl font-bold text-khipu-white md:text-3xl">
              KHIPUx Quito
            </p>
          </div>

          <div className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-x-8 text-lg font-bold text-khipu-white">
            {links.map((anchor) => (
              <a
                key={anchor.id}
                href={`#${anchor.id}`}
                onClick={(event) => scrollToSection(event, `#${anchor.id}`)}
                className="transition-colors hover:text-khipu-orange"
              >
                {anchor.label}
              </a>
            ))}
          </div>

          <div className="relative flex shrink-0 items-center justify-center">
            <MaskedAsset
              src={circle}
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 text-khipu-orange"
              label="Khipu Circle"
            />
            <a
              href="#programme"
              onClick={(event) => scrollToSection(event, "#programme")}
              className="relative z-10 whitespace-nowrap rounded-full bg-khipu-orange px-8 py-4 font-bold text-khipu-white transition-opacity hover:opacity-90"
            >
              Programa
            </a>
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
            {page.dates.display}
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            KHIPUx Quito
          </h1>
          <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight md:text-4xl">
            {page.subtitle}
          </h2>

          <p className="mt-6 max-w-3xl text-lg font-semibold leading-relaxed text-white/80 md:text-xl">
            Lanzamiento de LAST Lab for Critical AI & Digital Technologies
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
                Ciudad
              </dt>
              <dd className="mt-1 text-2xl font-bold">
                {page.location.city}, {page.location.country}
              </dd>
            </div>
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
    <ScaleIcon key="justice" />,
    <RocketIcon key="labour" />,
    <GlobeIcon key="latin-america" />
  ];

  return (
    <section id="themes" className="scroll-mt-24 bg-khipu-black py-16 text-khipu-white">
      <div className="khipux-content-container">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-khipu-orange">
              Ejes provisionales
            </p>
            <h2 className="mt-2 text-4xl font-bold md:text-6xl">Ejes temáticos</h2>
          </div>
          <p className="max-w-xl text-sm font-semibold leading-relaxed text-white/65 md:text-base">
            Estos ejes orientan la construcción del programa y no constituyen una
            taxonomía definitiva.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
          {page.topics.map((topic, index) => (
            <div
              key={topic.title}
              className="flex items-center gap-5 border-l-4 border-khipu-orange bg-white/10 px-5 py-4 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="shrink-0 text-khipu-orange">{icons[index]}</span>
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
      </div>
    </section>
  );
}

function Programme({ page }: { page: KhipuxQuitoPageContent }) {
  const [activeDay, setActiveDay] = useState(0);
  const day = programmeDays[activeDay];

  return (
    <section id="programme" className="scroll-mt-24 bg-khipu-gray py-12 text-khipu-white">
      <div className="khipux-content-container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-6xl">
          Programa <span className="text-khipu-orange">2026</span>
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-base font-semibold leading-relaxed text-white/75 md:text-lg">
          {page.program.body}
        </p>

        <div className="mb-8 flex justify-center gap-6">
          {programmeDays.map((programDay, index) => (
            <button
              key={programDay.name}
              type="button"
              className={cx(
                "relative pb-2 text-2xl font-bold transition-colors md:text-3xl",
                index === activeDay
                  ? "text-khipu-orange"
                  : "text-khipu-white hover:text-khipu-orange"
              )}
              onClick={() => setActiveDay(index)}
            >
              {programDay.name}
              <span
                className={cx(
                  "absolute bottom-0 left-0 h-[3px] w-full origin-left bg-khipu-orange transition-transform duration-300",
                  index === activeDay ? "scale-x-100" : "scale-x-0"
                )}
              />
            </button>
          ))}
        </div>

        <div className="mb-8 flex items-center justify-center gap-4">
          <Image
            src={assetPath(activeDay === 0 ? "desc-bulletpoint-1.svg" : "desc-bulletpoint-2.svg")}
            alt=""
            width={64}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-12 w-auto opacity-80 md:h-16"
            aria-hidden="true"
          />
          <div className="text-center">
            <h3 className="text-xl font-bold md:text-2xl">{day.date}</h3>
            <p className="mt-1 text-sm font-semibold text-white/65">
              Sala principal: {day.mainRoom}
            </p>
          </div>
          <Image
            src={assetPath(activeDay === 0 ? "desc-bulletpoint-1.svg" : "desc-bulletpoint-2.svg")}
            alt=""
            width={64}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-12 w-auto scale-x-[-1] opacity-80 md:h-16"
            aria-hidden="true"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="relative rounded-lg border border-white/15 bg-black/20 p-6">
            <div className="absolute -inset-1 rounded-lg bg-khipu-orange/10 blur-xl" />
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-wider text-khipu-orange">
                Estado del programa
              </p>
              <h3 className="mt-3 text-3xl font-bold">{page.program.actionLabel}</h3>
              <p className="mt-4 text-base font-semibold leading-relaxed text-white/75">
                {page.program.closing}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {page.program.items.map((item) => (
                  <article key={item.title} className="border-l-4 border-khipu-orange bg-white/10 p-4">
                    <h4 className="text-lg font-bold text-khipu-white">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/15 bg-white/10 p-6">
            <p className="text-sm font-bold uppercase tracking-wider text-khipu-orange">
              Salas disponibles
            </p>
            <ul className="mt-5 grid gap-3">
              {day.availableRooms.map((room) => (
                <li key={room} className="flex items-center gap-3 text-base font-semibold text-white/80">
                  <Image
                    src={assetPath("khipu-square.svg")}
                    alt=""
                    width={18}
                    height={18}
                    className="h-4 w-4 shrink-0 rotate-45"
                    aria-hidden="true"
                  />
                  {room}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold leading-relaxed text-white/65">
              Las salas adicionales para sesiones paralelas serán anunciadas con
              el programa final.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-white/50">
              La estructura interna del programa ya admite campos para horario,
              título, tipo de actividad, personas participantes, moderación,
              sala, descripción y estado de confirmación.
            </p>
          </div>
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

function Speakers({ page }: { page: KhipuxQuitoPageContent }) {
  return (
    <section id="speakers" className="scroll-mt-24 bg-khipu-black py-16 text-khipu-white">
      <div className="khipux-content-container flex flex-col items-center">
        <h2 className="mb-12 text-center text-4xl font-bold italic md:text-6xl">
          {page.speakers.title}
        </h2>

        {page.speakers.people.length > 0 ? (
          <div className="flex w-full max-w-4xl flex-col gap-12">
            {page.speakers.people.map((person) => (
              <article
                key={person.name}
                className="group relative flex cursor-default flex-col items-center gap-6 md:flex-row md:items-start md:gap-8"
              >
                <div className="relative w-48 shrink-0 md:w-56">
                  <div className="absolute -inset-2 rounded-lg bg-khipu-orange/0 blur-xl transition-all duration-500 ease-out group-hover:bg-khipu-orange/20" />
                  <div className="relative grid aspect-square w-full place-items-center rounded-sm border-l-4 border-khipu-orange bg-white/10 text-4xl font-bold text-khipu-orange shadow-lg transition-all duration-500 ease-out group-hover:-translate-x-3 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-khipu-orange/30">
                    {initials(person.name)}
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
                  <p className="mt-4 text-sm font-semibold leading-relaxed text-white/80 transition-all duration-300 group-hover:text-white md:text-base">
                    {person.biography}
                  </p>
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
            <h3 className="text-2xl font-bold text-khipu-orange">
              {page.speakers.pendingTitle}
            </h3>
            <p className="mt-3 text-base font-semibold leading-relaxed text-white/75">
              {page.speakers.pendingBody}
            </p>
          </div>
        )}
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
              El encuentro se realizará en <span className="text-khipu-orange">{page.location.firstVenue}</span>,
              en Quito, Ecuador.
            </p>
            <p className="mt-5">
              El Hemiciclo será la sala principal ambos días. Las salas
              adicionales disponibles se utilizarán para sesiones paralelas, con
              asignaciones específicas a confirmar en el programa final.
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

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {page.organization.organizers.map((organizer) => (
            <article
              key={organizer.name}
              className="flex min-h-48 flex-col justify-between border-l-4 border-khipu-orange bg-white/10 p-5"
            >
              <div className="flex h-20 items-center">
                {organizer.logoSrc ? (
                  <Image
                    src={withBasePath(organizer.logoSrc)}
                    alt={organizer.name}
                    width={260}
                    height={90}
                    className="max-h-16 w-auto brightness-0 invert"
                  />
                ) : (
                  <div className="grid h-16 min-w-28 place-items-center border border-dashed border-khipu-orange/60 px-4 text-xs font-bold uppercase tracking-wider text-white/65">
                    {organizer.placeholder}
                  </div>
                )}
              </div>
              <h3 className="mt-5 text-base font-bold leading-snug text-khipu-white">
                {organizer.name}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-8 border-l-4 border-khipu-orange bg-black/20 p-6">
          <h3 className="text-2xl font-bold text-khipu-orange">
            {page.organization.supportTitle}
          </h3>
          <p className="mt-3 text-base font-semibold leading-relaxed text-white/75">
            {page.organization.supportText}
          </p>
        </div>
      </div>
    </section>
  );
}

function KhipuxFooter({ page, locale }: { page: KhipuxQuitoPageContent; locale: Locale }) {
  return (
    <footer className="relative overflow-hidden bg-khipu-orange py-10">
      <div className="khipux-content-container">
        <div className="relative z-10 text-khipu-white">
          <p className="text-xl font-bold md:text-2xl">{page.contact.title}</p>
          <p className="mt-2 text-xl font-bold md:text-2xl">{page.contact.body}</p>
        </div>

        <div className="pointer-events-none mt-8">
          <MaskedAsset
            src={assetPath("khipu-logo-horizontal.svg")}
            className="aspect-[801/406] w-full text-khipu-white"
            label="Khipu Logo"
          />
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 sm:flex-row">
          <p className="text-base text-khipu-white md:text-lg">
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
    }
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
      <Speakers page={page} />
      <Participation page={page} />
      <Venue page={page} />
      <Partners page={page} />
      <KhipuxFooter page={page} locale={locale} />
    </article>
  );
}
