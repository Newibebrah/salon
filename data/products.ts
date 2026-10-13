import { unsplash } from "@/lib/utils";

export type ProductCategory = "Hair" | "Beauty" | "Aksesoris";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  rating: number;
  sold: string;
};

export const PRODUCT_CATEGORIES: Array<"Semua" | ProductCategory> = [
  "Semua",
  "Hair",
  "Beauty",
  "Aksesoris",
];

export const PRODUCTS: Product[] = [
  {
    id: "venia-silk-shampoo",
    name: "Venia Silk Shampoo",
    category: "Hair",
    price: 129000,
    image: unsplash("1556228720-195a672e8a03"),
    rating: 4.9,
    sold: "1rb+ terjual",
  },
  {
    id: "argan-repair-serum",
    name: "Argan Repair Serum",
    category: "Hair",
    price: 159000,
    image: unsplash("1620916566398-39f1143ab7be"),
    rating: 4.8,
    sold: "800+ terjual",
  },
  {
    id: "hair-vitamin-mist",
    name: "Hair Vitamin Mist",
    category: "Hair",
    price: 99000,
    image: unsplash("1526947425960-945c6e72858f"),
    rating: 4.7,
    sold: "600+ terjual",
  },
  {
    id: "scalp-therapy-tonic",
    name: "Scalp Therapy Tonic",
    category: "Hair",
    price: 175000,
    image: unsplash("1571781926291-c477ebfd024b"),
    rating: 4.9,
    sold: "1,2rb terjual",
  },
  {
    id: "glow-cushion-foundation",
    name: "Glow Cushion Foundation",
    category: "Beauty",
    price: 249000,
    image: unsplash("1596462502278-27bfdc403348"),
    rating: 4.8,
    sold: "900+ terjual",
  },
  {
    id: "rose-lip-tint",
    name: "Rosé Lip Tint",
    category: "Beauty",
    price: 89000,
    image: unsplash("1586495777744-4413f21062fa"),
    rating: 4.9,
    sold: "2rb+ terjual",
  },
  {
    id: "pro-makeup-brush-set",
    name: "Pro Makeup Brush Set",
    category: "Beauty",
    price: 329000,
    image: unsplash("1522335789203-aabd1fc54bc9"),
    rating: 4.8,
    sold: "500+ terjual",
  },
  {
    id: "makeup-sponge-duo",
    name: "Makeup Sponge Duo",
    category: "Aksesoris",
    price: 59000,
    image: unsplash("1608248543803-ba4f8c70ae0b"),
    rating: 4.7,
    sold: "1,5rb terjual",
  },
];
