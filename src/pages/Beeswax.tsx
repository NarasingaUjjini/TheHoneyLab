import PageHeader from "../components/PageHeader";
import CategoryNav from "../components/CategoryNav";
import EmailSignup from "../components/EmailSignup";
import { ProseBlock } from "../components/ui/ProseBlock";
import { Link } from "react-router-dom";

export default function Beeswax() {
  return (
    <>
      <PageHeader
        title="Beeswax"
        subtitle="From the same hives. Rendered slow. Poured by hand."
      />

      <div className="container-narrow section !py-16">
        <CategoryNav active="beeswax" />

        <div
          className="aspect-[16/9] img-placeholder mb-10 flex items-center justify-center"
          style={{ background: "linear-gradient(145deg, var(--color-wax), var(--color-kraft))" }}
          role="img"
          aria-label="Beeswax products coming soon"
        >
          <p className="text-label text-bark-soft/50">Beeswax products — coming soon</p>
        </div>

        <ProseBlock>
          <p>
            The wax from our hives doesn&apos;t go to waste. We&apos;re working on candles and
            small goods from the same source, poured by hand at our table in El Cajon.
          </p>
          <p>Candles first. More to come.</p>
          <p>
            <Link to="/products/skincare" className="link-natural">
              Skincare →
            </Link>
          </p>
        </ProseBlock>

        <div className="mt-12 pt-10 border-t border-kraft-deep">
          <EmailSignup
            heading="Be the first to know"
            subtext="We'll email when beeswax products are ready."
          />
        </div>
      </div>
    </>
  );
}
