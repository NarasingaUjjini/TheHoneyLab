import { ButtonLink } from "./ui/Button";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="surface-kraft-texture border-b border-kraft-deep">
      <div className="container-main section-compact">
        <p className="text-label text-moss mb-3">The Honey Lab</p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] text-bark tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-prose max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <hr className="rule-botanical mt-8 max-w-xl" />
      </div>
    </div>
  );
}

export { ButtonLink };
