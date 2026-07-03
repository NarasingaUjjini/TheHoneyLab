import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";
import BatchCard from "../components/BatchCard";
import BatchStamp from "../components/ui/BatchStamp";
import { Button, ButtonLink } from "../components/ui/Button";
import { honeyProducts } from "../data/products";

const colors = [
  { name: "Honey", hex: "#B5722D", token: "honey" },
  { name: "Honey Light", hex: "#D4A054", token: "honey-light" },
  { name: "Honey Glow", hex: "#E8C88A", token: "honey-glow" },
  { name: "Linen", hex: "#FAF6EE", token: "linen" },
  { name: "Kraft", hex: "#E8DFD0", token: "kraft" },
  { name: "Kraft Deep", hex: "#D9CEBA", token: "kraft-deep" },
  { name: "Bark", hex: "#2C2118", token: "bark" },
  { name: "Bark Soft", hex: "#5C4D42", token: "bark-soft" },
  { name: "Moss", hex: "#4F5E48", token: "moss" },
  { name: "Moss Light", hex: "#C5D4BC", token: "moss-light" },
  { name: "Clay", hex: "#A65D3E", token: "clay" },
  { name: "Wax", hex: "#F0E6D0", token: "wax" },
];

const spacing = [
  { token: "4px", use: "Tight gaps, label padding" },
  { token: "8px", use: "Inline spacing" },
  { token: "16px", use: "Card padding (mobile)" },
  { token: "24px", use: "Component gaps" },
  { token: "32px", use: "Grid gaps" },
  { token: "64px", use: "Section padding (mobile)" },
  { token: "96px", use: "Section padding (desktop)" },
];

export default function StyleGuide() {
  return (
    <>
      <PageHeader
        title="Design system"
        subtitle="Visual language for The Honey Lab. Handcrafted, organic, California small-batch."
      />

      <div className="container-main section !py-16 space-y-20">
        {/* Colors */}
        <section>
          <h2 className="font-display text-3xl text-bark mb-2">Color palette</h2>
          <p className="text-prose mb-8 max-w-2xl">
            Warm natural tones inspired by raw honey, kraft labels, and California hills.
            Avoid pure white, neon gold, or clinical gray.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {colors.map((c) => (
              <div key={c.hex} className="card-paper overflow-hidden">
                <div className="h-20" style={{ backgroundColor: c.hex }} />
                <div className="p-3">
                  <p className="text-sm font-medium text-bark">{c.name}</p>
                  <p className="text-xs text-bark-soft font-mono">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="pt-12 border-t border-kraft-deep">
          <h2 className="font-display text-3xl text-bark mb-8">Typography</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="card-kraft p-8">
              <p className="text-label text-bark-soft mb-4">Display — Cormorant Garamond</p>
              <p className="font-display text-4xl text-bark">Orange Blossom</p>
              <p className="font-display text-2xl text-bark mt-4">Batch 01 · Kern County</p>
              <p className="text-sm text-prose mt-4">Headlines, product names, pull quotes</p>
            </div>
            <div className="card-kraft p-8">
              <p className="text-label text-bark-soft mb-4">Body — Karla</p>
              <p className="text-prose leading-relaxed">
                We jar everything by hand at our place in El Cajon. Each batch gets a number,
                a note, and a taste test before it leaves the table.
              </p>
              <p className="text-label text-moss mt-6">Label style</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="pt-12 border-t border-kraft-deep">
          <h2 className="font-display text-3xl text-bark mb-8">Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <ButtonLink to="/products">Primary</ButtonLink>
            <ButtonLink to="/contact" variant="secondary">Secondary</ButtonLink>
            <ButtonLink to="/about" variant="ghost">Ghost link</ButtonLink>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
          <p className="text-sm text-prose mt-6 max-w-xl">
            2px radius. Paper shadow, not floating SaaS cards. No pill shapes or gradients on buttons.
          </p>
        </section>

        {/* Spacing */}
        <section className="pt-12 border-t border-kraft-deep">
          <h2 className="font-display text-3xl text-bark mb-8">Spacing</h2>
          <p className="text-prose mb-6">4px base unit. Sections use 64px / 96px vertical rhythm.</p>
          <ul className="space-y-3">
            {spacing.map((s) => (
              <li key={s.token} className="flex gap-4 text-sm">
                <span className="text-label text-honey w-12">{s.token}</span>
                <span className="text-prose">{s.use}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Product card */}
        <section className="pt-12 border-t border-kraft-deep">
          <h2 className="font-display text-3xl text-bark mb-4">Product cards</h2>
          <p className="text-prose mb-8 max-w-2xl">
            Kraft surface, batch stamp in corner (slight rotation), region in label style,
            serif product name. Hover lifts like picking up a jar label.
          </p>
          <div className="max-w-sm">
            <ProductCard product={honeyProducts[0]} />
          </div>
        </section>

        {/* Batch card & stamp */}
        <section className="pt-12 border-t border-kraft-deep">
          <h2 className="font-display text-3xl text-bark mb-8">Batch elements</h2>
          <div className="flex flex-wrap gap-6 items-start mb-8">
            <BatchStamp batchNumber="01" />
            <BatchStamp batchNumber="14" className="rotate-1" />
          </div>
          <div className="max-w-xl">
            <BatchCard
              batchNumber="01"
              season="Spring 2026"
              name="Orange Blossom"
              region="Kern County"
              note="Light citrus upfront. Finishes clean."
            />
          </div>
        </section>

        {/* Surfaces & texture */}
        <section className="pt-12 border-t border-kraft-deep">
          <h2 className="font-display text-3xl text-bark mb-8">Surfaces & texture</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="surface-linen border border-kraft-deep p-8 rounded-[var(--radius-sm)]">
              <p className="text-label">Linen — page background</p>
            </div>
            <div className="surface-kraft border border-kraft-deep p-8 rounded-[var(--radius-sm)]">
              <p className="text-label">Kraft — cards, footer</p>
            </div>
            <div className="surface-kraft-texture border border-kraft-deep p-8 rounded-[var(--radius-sm)]">
              <p className="text-label">Kraft texture — headers, batch section</p>
            </div>
            <div className="surface-moss border border-moss/20 p-8 rounded-[var(--radius-sm)]">
              <p className="text-label">Moss tint — seasonal, process</p>
            </div>
          </div>
          <p className="text-prose mt-6 max-w-2xl">
            Subtle paper grain on all pages. Botanical gradient dividers between sections.
            Product photos: warm natural light, 2px radius, kraft border. No heavy filters.
          </p>
        </section>

        {/* Image placeholder */}
        <section className="pt-12 border-t border-kraft-deep">
          <h2 className="font-display text-3xl text-bark mb-8">Image treatment</h2>
          <div className="aspect-video max-w-lg img-placeholder flex items-center justify-center">
            <p className="text-label text-bark-soft/50">Photo placeholder</p>
          </div>
          <ul className="mt-6 space-y-2 text-prose text-sm max-w-xl">
            <li>Worn wood, linen backdrops, fields, hands, jars on table</li>
            <li>Warm color temperature. Slight grain acceptable.</li>
            <li>2px border radius max. No circular product crops.</li>
          </ul>
        </section>
      </div>
    </>
  );
}
