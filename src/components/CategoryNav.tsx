import { Link } from "react-router-dom";
import { categories } from "../data/products";

interface CategoryNavProps {
  active?: "honey" | "beeswax" | "skincare";
}

export default function CategoryNav({ active = "honey" }: CategoryNavProps) {
  return (
    <nav className="flex flex-wrap gap-2 mb-10">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          to={cat.path}
          className={`px-4 py-2 text-sm rounded-[var(--radius-sm)] border transition-colors ${
            active === cat.id
              ? "bg-bark text-linen border-bark"
              : "bg-linen text-bark-soft border-kraft-deep hover:border-honey hover:text-honey"
          }`}
        >
          {cat.name}
          {!cat.available && (
            <span className="ml-1.5 text-xs opacity-60">(soon)</span>
          )}
        </Link>
      ))}
    </nav>
  );
}
