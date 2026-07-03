import { Link } from "react-router-dom";
import { honeyProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
import BatchCard from "../components/BatchCard";
import SeasonalNote from "../components/SeasonalNote";
import EmailSignup from "../components/EmailSignup";
import Section, { SectionHeader } from "../components/ui/Section";
import { ProseBlock } from "../components/ui/ProseBlock";
import { ButtonLink } from "../components/ui/Button";

export default function Home() {
  const featured = honeyProducts[0];

  return (
    <>
      {/* Hero */}
      <section className="hero-glow relative overflow-hidden">
        <div className="container-main py-24 md:py-32 lg:py-36">
          <div className="max-w-2xl">
            <p className="text-label text-moss mb-4">El Cajon, California</p>
            <h1 className="font-display text-[2.75rem] md:text-5xl lg:text-6xl text-bark leading-[1.08] tracking-tight">
              From Bloom to Jar
            </h1>
            <p className="mt-6 text-lg md:text-xl text-prose leading-relaxed max-w-lg">
              Small-batch honey from our family hives in El Cajon, and from
              whatever is blooming across California that week.
            </p>
            <div className="mt-10">
              <ButtonLink to="/products">See our honey</ButtonLink>
            </div>
          </div>
        </div>
        <hr className="rule-botanical" />
      </section>

      {/* Intro */}
      <Section>
        <div className="container-narrow">
          <ProseBlock>
            <p className="text-lg text-bark/90">
              The Honey Lab is run by my grandfather and me. He kept bees long before
              I showed up, and I am still learning when to open a hive and when to
              walk away. We jar everything by hand at our place in El Cajon.
            </p>
            <p>
              People ask about the name. Most days the lab is just the kitchen table:
              jars in a row, a pen, and a notebook with hive numbers and dates. We
              taste each batch before it goes out. Grandpa usually has an opinion.
            </p>
          </ProseBlock>
        </div>
      </Section>

      {/* Batch concept */}
      <Section tone="kraft-texture" bordered>
        <div className="container-main">
          <SectionHeader title="Honey by batch" />
          <div className="container-narrow !px-0">
            <ProseBlock>
              <p>
                We do not sell one generic honey. Each jar comes from a specific
                harvest and gets a batch number. Orange Blossom Batch 01 means the
                bees were working orange trees in a particular field at a particular
                time. Alfalfa Batch 02 is a different story.
              </p>
              <p>
                The label tells you where they foraged and when we pulled the frame.
                We write a few tasting notes because batches vary. Some run sweeter,
                some have a sharper finish. That is normal.
              </p>
            </ProseBlock>
          </div>

          <div className="container-narrow mt-12 !px-0">
            <BatchCard
              batchNumber={featured.batchNumber}
              season={featured.season}
              name={featured.name}
              region={featured.region}
              note={featured.flavorNote}
            />
          </div>

          <p className="mt-10 text-center">
            <Link to="/products" className="link-natural text-sm">
              Browse all batches →
            </Link>
          </p>
        </div>
      </Section>

      {/* Products */}
      <Section>
        <div className="container-main">
          <SectionHeader title="Current batches" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {honeyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Section>

      {/* Beekeeping */}
      <Section tone="moss" bordered>
        <div className="container-narrow">
          <SectionHeader title="How we keep the bees" />
          <ProseBlock>
            <p>
              The hives move with the seasons. Orange in spring, alfalfa through
              summer, wildflower on the hills when the rain was decent. We would
              rather relocate than push one yard to produce all year.
            </p>
            <p>
              We harvest when the comb is capped. We leave enough honey on the hive
              for the bees to get through the slower months. If a colony looks
              stressed, we back off. There is no point in pulling honey from a hive
              that is struggling.
            </p>
            <p>
              <Link to="/process" className="link-natural">
                Read more about our process →
              </Link>
            </p>
          </ProseBlock>
        </div>
      </Section>

      {/* Future products */}
      <Section tone="kraft">
        <div className="container-narrow">
          <SectionHeader title="Coming from the same hives" />
          <ProseBlock>
            <p>
              We render wax from our own hives and we are working on a few things
              with it. Candles first. Some balms and salves after that. Same small
              batches, same notebook, same table.
            </p>
            <p>Nothing is for sale yet. When it is ready, it will show up here.</p>
            <p>
              <Link to="/products/beeswax" className="link-natural">
                Beeswax & skincare →
              </Link>
            </p>
          </ProseBlock>
        </div>
      </Section>

      {/* Local */}
      <Section bordered>
        <div className="container-narrow">
          <SectionHeader title="Rooted in El Cajon" />
          <ProseBlock>
            <p>
              Our home base is El Cajon. The bees travel around California, but
              this is where we extract, strain, jar, and label. This is also where
              we taste-test and sometimes disagree about whether a batch is ready.
            </p>
            <p>
              Most of what we make stays local for now. Farmers markets, word of
              mouth, neighbors who knock on the door. California is a big state and
              the honey changes depending on which part of it the bees were in.
            </p>
          </ProseBlock>
        </div>
      </Section>

      <SeasonalNote />

      {/* CTA */}
      <Section>
        <div className="container-narrow text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-bark">
            Pickup and shipping soon
          </h2>
          <p className="mt-4 text-prose leading-relaxed">
            We are setting up local pickup in El Cajon and figuring out shipping
            for the rest of California. Online ordering is not live yet. If you
            need honey now,{" "}
            <Link to="/contact" className="link-natural">
              send us a message
            </Link>
            .
          </p>
        </div>
        <EmailSignup />
      </Section>
    </>
  );
}
