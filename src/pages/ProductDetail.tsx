import { useParams, Link, Navigate } from "react-router-dom";
import { getProductBySlug, honeyProducts } from "../data/products";
import BatchCard from "../components/BatchCard";
import ProductCard from "../components/ProductCard";
import EmailSignup from "../components/EmailSignup";
import BatchStamp from "../components/ui/BatchStamp";
import { ButtonLink } from "../components/ui/Button";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const related = honeyProducts.filter((p) => p.id !== product.id).slice(0, 2);

  return (
    <>
      <div className="border-b border-kraft-deep surface-linen">
        <div className="container-main py-6">
          <Link to="/products" className="link-natural text-sm">
            ← All honey
          </Link>
        </div>
      </div>

      <div className="container-main section !py-12 md:!py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div
            className="aspect-square img-placeholder overflow-hidden flex items-center justify-center"
            style={{
              background: `linear-gradient(160deg, ${product.color}45 0%, ${product.color}15 45%, var(--color-linen) 100%)`,
            }}
          >
            <div
              className="w-32 h-44 rounded-t-full rounded-b-md border border-honey/25 shadow-[var(--shadow-lifted)]"
              style={{
                background: `linear-gradient(180deg, ${product.color}55 0%, var(--color-honey) 100%)`,
              }}
            />
          </div>

          <div>
            <div className="mb-4">
              <BatchStamp batchNumber={product.batchNumber} />
            </div>
            <p className="text-label text-bark-soft/60 mt-4">{product.season}</p>
            <h1 className="mt-2 font-display text-4xl md:text-5xl text-bark">
              {product.name}
            </h1>
            <p className="mt-3 text-lg text-bark-soft">
              {product.origin} · {product.region}
            </p>
            <p className="mt-6 text-prose leading-relaxed">{product.description}</p>

            <div className="mt-8 p-6 card-kraft">
              <p className="text-label text-bark-soft mb-4">Tasting notes</p>
              <ul className="space-y-2">
                {product.tastingNotes.map((note) => (
                  <li key={note} className="text-sm text-prose">
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-sm text-prose">
              <span className="font-medium text-bark">Try it on:</span> {product.suggestedUse}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink to="/contact">Contact to order</ButtonLink>
              <button
                type="button"
                className="btn btn-secondary opacity-50 cursor-not-allowed"
                disabled
                title="Coming soon"
              >
                Add to cart (soon)
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 container-narrow !px-0">
          <BatchCard
            batchNumber={product.batchNumber}
            season={product.season}
            name={product.name}
            region={product.region}
            note={product.flavorNote}
          />
        </div>

        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-kraft-deep">
            <h2 className="font-display text-2xl text-bark mb-8">More honey</h2>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 pt-12 border-t border-kraft-deep">
          <EmailSignup compact subtext="We'll let you know when this varietal is back in stock." />
        </div>
      </div>
    </>
  );
}
