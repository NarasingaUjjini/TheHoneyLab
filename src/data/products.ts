export type ProductCategory = "honey" | "beeswax" | "skincare";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  origin: string;
  region: string;
  season: string;
  flavorNote: string;
  description: string;
  batchNumber: string;
  tastingNotes: string[];
  suggestedUse: string;
  available: boolean;
  color: string;
}

export const honeyProducts: Product[] = [
  {
    id: "orange-blossom",
    name: "Orange Blossom",
    slug: "orange-blossom",
    category: "honey",
    origin: "Orange groves",
    region: "Kern County",
    season: "Spring 2026",
    flavorNote: "Light citrus upfront. Finishes clean.",
    description:
      "Our bees worked the orange groves of Kern County through spring bloom. Golden, bright, and unmistakably citrus — the way orange blossom should taste.",
    batchNumber: "01",
    tastingNotes: [
      "Aroma: soft orange peel and warm sunshine",
      "Flavor: light citrus, not overpowering",
      "Finish: clean and mild",
      "Pairs well with: yogurt, tea, soft cheese",
    ],
    suggestedUse: "Stir into Greek yogurt or drizzle over warm biscuits.",
    available: true,
    color: "#e8a84c",
  },
  {
    id: "alfalfa",
    name: "Alfalfa",
    slug: "alfalfa",
    category: "honey",
    origin: "Alfalfa fields",
    region: "Imperial Valley",
    season: "Summer 2026",
    flavorNote: "Mild, smooth, and easygoing.",
    description:
      "Collected from alfalfa fields stretching across the Imperial Valley. One of our most approachable honeys — mild, smooth, and good on almost everything.",
    batchNumber: "02",
    tastingNotes: [
      "Aroma: gentle and grassy",
      "Flavor: mild sweetness, no sharp edges",
      "Finish: smooth and lingering",
      "Pairs well with: toast, oatmeal, baking",
    ],
    suggestedUse: "Everyday table honey. Good in tea and on toast.",
    available: true,
    color: "#d4b896",
  },
  {
    id: "wildflower",
    name: "Wildflower",
    slug: "wildflower",
    category: "honey",
    origin: "Mixed wild blooms",
    region: "California hills",
    season: "Late summer 2026",
    flavorNote: "Varied, floral, changes with the season.",
    description:
      "When the bees roam hillside wildflowers, no two harvests taste exactly alike. This batch carries a mix of whatever was blooming — varied, floral, and honest about it.",
    batchNumber: "03",
    tastingNotes: [
      "Aroma: mixed wildflowers, earthy undertone",
      "Flavor: layered floral notes, slightly complex",
      "Finish: warm and rounded",
      "Pairs well with: cheese boards, marinades, bread",
    ],
    suggestedUse: "Try on a cheese board or swirled into salad dressing.",
    available: true,
    color: "#c9a66b",
  },
];

export const currentBloom = "Alfalfa, Imperial Valley";

export const categories = [
  {
    id: "honey" as const,
    name: "Honey",
    description: "Each jar reflects where the bees worked.",
    available: true,
    path: "/products",
  },
  {
    id: "beeswax" as const,
    name: "Beeswax",
    description: "Candles and goods from the same hives. Coming soon.",
    available: false,
    path: "/products/beeswax",
  },
  {
    id: "skincare" as const,
    name: "Skincare",
    description: "Balms and salves, rendered slow. Coming soon.",
    available: false,
    path: "/products/skincare",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return honeyProducts.find((p) => p.slug === slug);
}
