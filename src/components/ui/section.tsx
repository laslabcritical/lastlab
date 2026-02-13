import type { CSSProperties, ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  index?: number;
}

export function Section({
  eyebrow,
  title,
  description,
  children,
  index = 0
}: SectionProps) {
  const style: CSSProperties = {
    animationDelay: `${index * 120}ms`
  };

  return (
    <section className="reveal rounded-2xl border border-brand-100 bg-white p-7 shadow-panel" style={style}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-heading text-3xl font-bold text-ink">{title}</h2>
      {description ? <p className="mt-4 max-w-4xl leading-relaxed text-muted">{description}</p> : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}
