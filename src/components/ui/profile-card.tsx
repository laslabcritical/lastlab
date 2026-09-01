import Image from "next/image";
import Link from "next/link";
import type { PersonProfile } from "@/content/schema";
import { withBasePath } from "@/lib/base-path";

interface ProfileCardProps {
  person: PersonProfile;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function ProfileCard({ person }: ProfileCardProps) {
  const avatar = person.photoSrc ? (
    <Image
      src={withBasePath(person.photoSrc)}
      alt={person.name}
      width={96}
      height={96}
      className="h-16 w-16 rounded-full object-cover"
    />
  ) : (
    <div
      aria-hidden="true"
      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50 font-heading text-xl font-bold text-brand-800"
    >
      {getInitials(person.name)}
    </div>
  );

  return (
    <article className="grid gap-4 rounded-lg border border-brand-100 bg-white p-5 shadow-panel sm:grid-cols-[auto_1fr]">
      <div>{avatar}</div>
      <div className="min-w-0">
        <h3 className="font-heading text-xl font-bold leading-tight text-ink">
          {person.externalUrl ? (
            <Link
              href={person.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-brand-700"
            >
              {person.name}
            </Link>
          ) : (
            person.name
          )}
        </h3>
        <p className="mt-2 text-sm font-semibold leading-snug text-brand-700">
          {person.role}
        </p>
        <ul className="mt-3 grid gap-1">
          {person.affiliations.map((affiliation) => (
            <li key={affiliation} className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              {affiliation}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted">{person.bio}</p>
      </div>
    </article>
  );
}
