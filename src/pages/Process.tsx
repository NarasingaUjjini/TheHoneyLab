import PageHeader from "../components/PageHeader";
import { ButtonLink } from "../components/ui/Button";

const steps = [
  {
    title: "Bees forage",
    description: "Our hives travel with the bloom. Orange groves, alfalfa fields, wild hills across California.",
  },
  {
    title: "We harvest",
    description: "Only when the frame is capped and ready. Never rushed, never pulled early.",
  },
  {
    title: "Extract & strain",
    description: "Spun slow, strained once. Raw and unfiltered, the way we've always done it.",
  },
  {
    title: "Jar & label",
    description: "Every batch gets a number, a note, and a taste test. Grandpa still signs off on each one.",
  },
];

export default function Process() {
  return (
    <>
      <PageHeader
        title="Process"
        subtitle="We don't rush honey. Here's how it gets from bloom to your table."
      />

      <div className="container-narrow section !py-16 md:!py-20 space-y-16">
        <section>
          <h2 className="font-display text-2xl md:text-3xl text-bark mb-8">From bloom to jar</h2>
          <ol className="space-y-8">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-6">
                <span className="flex-shrink-0 w-9 h-9 rounded-[var(--radius-sm)] bg-moss/15 text-moss text-sm font-medium flex items-center justify-center font-body">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl text-bark">{step.title}</h3>
                  <p className="mt-2 text-prose leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="pt-12 border-t border-kraft-deep">
          <h2 className="font-display text-2xl text-bark mb-4">The lab table</h2>
          <p className="text-prose leading-relaxed">
            The Lab is our kitchen table with jars lined up and notes
            scribbled on the side. Batch numbers. Harvest dates. Which field, which week.
            We taste every batch side by side before it goes out.
          </p>
        </section>

        <section className="pt-12 border-t border-kraft-deep">
          <h2 className="font-display text-2xl text-bark mb-4">Bees & land</h2>
          <p className="text-prose leading-relaxed mb-4">
            We move hives with the seasons instead of forcing one spot to produce year-round.
            Healthy bees make better honey. We leave enough for them and don't overwork a hive.
          </p>
          <p className="text-prose leading-relaxed">
            California gives us orange blossom in the spring, alfalfa through summer, wildflower
            on the hills when the rain cooperates. We work with what the land offers.
          </p>
        </section>

        <section className="pt-12 border-t border-kraft-deep">
          <h2 className="font-display text-2xl text-bark mb-4">What we don't do</h2>
          <ul className="space-y-3 text-prose">
            <li>Blend honeys to hide where they came from</li>
            <li>Heat past what's needed or over-filter</li>
            <li>Rush a harvest before the frame is ready</li>
          </ul>
        </section>

        <section className="pt-12 border-t border-kraft-deep">
          <h2 className="font-display text-2xl text-bark mb-4">What's next</h2>
          <p className="text-prose leading-relaxed">
            Beeswax from the same hives. Candles and skincare, rendered slow and poured by hand.
            Same table, same care.
          </p>
        </section>

        <ButtonLink to="/products">Browse honey</ButtonLink>
      </div>
    </>
  );
}
