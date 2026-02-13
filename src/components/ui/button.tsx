import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light" | "lightGhost";
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-600 focus-visible:outline-brand-700",
  secondary:
    "bg-white text-brand-800 ring-1 ring-brand-300 hover:bg-brand-50 focus-visible:outline-brand-700",
  ghost:
    "bg-transparent text-brand-700 ring-1 ring-brand-300 hover:bg-brand-50 focus-visible:outline-brand-700",
  light:
    "bg-white text-brand-800 hover:bg-brand-100 focus-visible:outline-white",
  lightGhost:
    "bg-transparent text-white ring-1 ring-white/70 hover:bg-white/10 focus-visible:outline-white"
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]}`}
    >
      {children}
    </Link>
  );
}
