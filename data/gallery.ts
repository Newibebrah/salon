import { unsplash } from "@/lib/utils";

export type GalleryCategory = "Haircut" | "Coloring" | "Beauty" | "Styling";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  image: string;
  alt: string;
  /** Tailwind aspect-ratio class for the masonry look */
  aspectClass: string;
};

export const GALLERY_FILTERS: Array<"Semua" | GalleryCategory> = [
  "Semua",
  "Haircut",
  "Coloring",
  "Beauty",
  "Styling",
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    category: "Coloring",
    image: unsplash("1580618672591-eb180b1a973f"),
    alt: "Proses hair coloring premium di Hair La Venia Beauty",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "g2",
    category: "Haircut",
    image: unsplash("1562322140-8baeececf3df"),
    alt: "Stylist memotong rambut pelanggan dengan presisi",
    aspectClass: "aspect-square",
  },
  {
    id: "g3",
    category: "Beauty",
    image: unsplash("1487412947147-5cebf100ffc2"),
    alt: "Sentuhan akhir makeup flawless oleh makeup artist Venia",
    aspectClass: "aspect-[4/5]",
  },
  {
    id: "g4",
    category: "Styling",
    image: unsplash("1522337660859-02fbefca4702"),
    alt: "Hair styling elegan sebelum acara spesial",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "g5",
    category: "Beauty",
    image: unsplash("1512496015851-a90fb38ba796"),
    alt: "Produk beauty pilihan yang digunakan di studio Venia",
    aspectClass: "aspect-square",
  },
  {
    id: "g6",
    category: "Coloring",
    image: unsplash("1519699047748-de8e457a634e"),
    alt: "Hasil coloring natural dengan kilau sehat",
    aspectClass: "aspect-[4/5]",
  },
  {
    id: "g7",
    category: "Haircut",
    image: unsplash("1560066984-138dadb4c035"),
    alt: "Perawatan rambut menyeluruh di kursi salon Venia",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "g8",
    category: "Styling",
    image: unsplash("1595475207225-428b62bda831"),
    alt: "Sanggul modern untuk hari bahagia",
    aspectClass: "aspect-square",
  },
  {
    id: "g9",
    category: "Beauty",
    image: unsplash("1633681926022-84c23e8cb2d6"),
    alt: "Perawatan kuku dan detail beauty terakhir",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "g10",
    category: "Styling",
    image: unsplash("1595476108010-b4d1f102b1b1"),
    alt: "Gaya rambut bergelombang ala Venia untuk photoshoot",
    aspectClass: "aspect-[4/5]",
  },
];
