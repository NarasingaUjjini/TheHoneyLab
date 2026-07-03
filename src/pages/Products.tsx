import { honeyProducts } from "../data/products";
import PageHeader from "../components/PageHeader";
import CategoryNav from "../components/CategoryNav";
import ProductCard from "../components/ProductCard";
import EmailSignup from "../components/EmailSignup";
import ShopPlaceholder from "../components/ShopPlaceholder";

export default function Products() {
  return (
    <>
      <PageHeader
        title="Products"
        subtitle="Each jar reflects where the bees worked. Labeled with floral source, region, and season."
      />

      <div className="container-main section !py-16 md:!py-20">
        <CategoryNav active="honey" />

        <p className="text-prose mb-10 max-w-2xl">
          Every jar is batch-tracked and tasted before it leaves our table.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {honeyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-kraft-deep">
          <EmailSignup
            compact
            heading="New batches sell out fast"
            subtext="Get notified when something new is ready."
          />
        </div>

        <div className="mt-10 text-center">
          <ShopPlaceholder variant="inline" />
        </div>
      </div>
    </>
  );
}
