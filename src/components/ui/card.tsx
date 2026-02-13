import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function Card({ title, description, children }: CardProps) {
  return (
    <article className="rounded-2xl border border-brand-100 bg-white p-6 shadow-panel">
      <h3 className="font-heading text-xl font-bold text-ink">{title}</h3>
      {description ? <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p> : null}
      {children ? <div className="mt-4 text-sm leading-relaxed text-muted">{children}</div> : null}
    </article>
  );
}
