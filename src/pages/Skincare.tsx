import PageHeader from "../components/PageHeader";
import CategoryNav from "../components/CategoryNav";
import EmailSignup from "../components/EmailSignup";
import { ProseBlock } from "../components/ui/ProseBlock";
import { Link } from "react-router-dom";

export default function Skincare() {
  return (
    <>
      <PageHeader
        title="Skincare"
        subtitle="Balms and salves from the same hives. Simple ingredients. No shortcuts."
      />

      <div className="container-narrow section !py-16">
        <CategoryNav active="skincare" />

        <div
          className="aspect-[16/9] img-placeholder mb-10 flex items-center justify-center surface-moss"
          role="img"
          aria-label="Skincare products coming soon"
        >
          <p className="text-label text-bark-soft/50">Skincare — coming soon</p>
        </div>

        <ProseBlock>
          <p>
            Beeswax balms and salves are on the way, rendered from our own hives
            and mixed in small batches.
          </p>
          <p>Same table. Same standards. Launching soon.</p>
          <p>
            <Link to="/products/beeswax" className="link-natural">
              Beeswax →
            </Link>
          </p>
        </ProseBlock>

        <div className="mt-12 pt-10 border-t border-kraft-deep">
          <EmailSignup
            heading="Be the first to know"
            subtext="We'll email when skincare is ready."
          />
        </div>
      </div>
    </>
  );
}
