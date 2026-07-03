import { ButtonLink } from "../components/ui/Button";

function SectionPlaceholder() {
  return (
    <div className="img-placeholder px-8 py-16 text-center">
      <p className="text-label text-bark-soft/50">Section placeholder</p>
    </div>
  );
}

export default function About() {
  return (
    <>
      <div className="surface-kraft-texture border-b border-kraft-deep">
        <div className="container-main section-compact">
          <p className="text-label text-moss mb-3">The Honey Lab</p>
          <h1 className="font-display text-4xl md:text-5xl text-bark tracking-tight">
            Our story
          </h1>
          <hr className="rule-botanical mt-8 max-w-xs" />
        </div>
      </div>

      <div className="container-narrow section space-y-10 !py-16 md:!py-20">
        <div
          className="aspect-[16/9] img-placeholder flex items-center justify-center"
          role="img"
          aria-label="Photo placeholder"
        >
          <p className="text-label text-bark-soft/50">Photo placeholder</p>
        </div>

        <SectionPlaceholder />
        <SectionPlaceholder />
        <SectionPlaceholder />

        <div className="pt-4 flex flex-wrap gap-4">
          <ButtonLink to="/products">See what we make</ButtonLink>
          <ButtonLink to="/process" variant="secondary">
            How we work
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
