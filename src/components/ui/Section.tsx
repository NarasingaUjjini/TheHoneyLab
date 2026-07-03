import type { ReactNode } from "react";

type SectionTone = "linen" | "kraft" | "kraft-texture" | "moss" | "white";

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  compact?: boolean;
  bordered?: boolean;
  className?: string;
  id?: string;
}

const toneClass: Record<SectionTone, string> = {
  linen: "surface-linen",
  kraft: "surface-kraft",
  "kraft-texture": "surface-kraft-texture",
  moss: "surface-moss",
  white: "bg-linen",
};

export default function Section({
  children,
  tone = "linen",
  compact = false,
  bordered = false,
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        ${compact ? "section-compact" : "section"}
        ${toneClass[tone]}
        ${bordered ? "border-y border-kraft-deep" : ""}
        ${className}
      `}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`mb-10 md:mb-12 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      <h2 className="font-display text-3xl md:text-4xl text-bark tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-prose text-lg">{subtitle}</p>}
      <hr className="rule-botanical mt-8" />
    </div>
  );
}
