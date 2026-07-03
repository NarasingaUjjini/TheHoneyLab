import { Link } from "react-router-dom";
import type { Product } from "../data/products";
import BatchStamp from "./ui/BatchStamp";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block card-kraft overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-lifted)] hover:-translate-y-0.5"
    >
      <div
        className="aspect-[4/3] relative overflow-hidden border-b border-kraft-deep"
        style={{
          background: `linear-gradient(160deg, ${product.color}35 0%, ${product.color}12 45%, var(--color-linen) 100%)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-[4.5rem] h-32 rounded-t-full rounded-b-md border border-honey/25 shadow-[inset_0_2px_8px_rgb(181_114_45/0.15)] transition-transform duration-500 group-hover:scale-[1.03]"
            style={{
              background: `linear-gradient(180deg, ${product.color}55 0%, var(--color-honey) 100%)`,
            }}
          />
        </div>
        <div className="absolute top-4 right-4">
          <BatchStamp batchNumber={product.batchNumber} />
        </div>
      </div>

      <div className="p-5 md:p-6">
        <p className="text-label text-bark-soft/70">{product.region}</p>
        <h3 className="mt-1 font-display text-2xl text-bark group-hover:text-honey transition-colors">
          {product.name}
        </h3>
        <p className="mt-3 text-sm text-prose leading-relaxed line-clamp-2">
          {product.flavorNote}
        </p>
        <p className="mt-4 text-label text-honey opacity-0 group-hover:opacity-100 transition-opacity">
          View batch notes
        </p>
      </div>
    </Link>
  );
}
