import {
  Flower2,
  Gem,
  Palette,
  Scissors,
  Sparkles,
  Wand2,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  icon: LucideIcon;
  popular?: boolean;
};

export const SERVICES: Service[] = [
  {
    id: "hair-cut",
    name: "Hair Cut",
    description:
      "Potongan presisi yang disesuaikan dengan bentuk wajah & kepribadianmu.",
    price: 85000,
    duration: "± 45 menit",
    icon: Scissors,
    popular: true,
  },
  {
    id: "coloring",
    name: "Hair Coloring",
    description:
      "Pewarnaan premium formula amonia rendah — berkilau, natural & tahan lama.",
    price: 450000,
    duration: "± 2 jam",
    icon: Palette,
    popular: true,
  },
  {
    id: "hair-spa",
    name: "Hair Spa",
    description:
      "Relaksasi kulit kepala dengan pijatan lembut & aroma terapi yang menenangkan.",
    price: 150000,
    duration: "± 1 jam",
    icon: Flower2,
  },
  {
    id: "smoothing",
    name: "Smoothing",
    description:
      "Rambut lurus natural, halus & mudah diatur tanpa merusak tekstur asli.",
    price: 550000,
    duration: "± 2,5 jam",
    icon: Wand2,
  },
  {
    id: "extension",
    name: "Hair Extension",
    description:
      "Tambah panjang & volume dengan hairpiece premium yang ringan & seamless.",
    price: 1200000,
    duration: "± 3 jam",
    icon: Gem,
  },
  {
    id: "beauty-makeup",
    name: "Beauty & Makeup",
    description:
      "Makeup flawless untuk momen spesial — wisuda, pernikahan, hingga photoshoot.",
    price: 350000,
    duration: "± 1,5 jam",
    icon: Sparkles,
    popular: true,
  },
];
