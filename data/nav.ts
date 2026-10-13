import {
  Home,
  Images,
  MessageCircle,
  Scissors,
  ShoppingBag,
  Star,
  type LucideIcon,
} from "lucide-react";

export const CONTACT = {
  brand: "Hair La Venia Beauty",
  shortName: "Hair La Venia",
  tagline: "Cantik & Percaya Diri Ala Venia",
  taglineSecondary: "Hair • Beauty • Confidence",
  signature: "Cantik Ala Venia ✨",
  instagram: "@hairlaveniabeauty",
  instagramUrl: "https://instagram.com/hairlaveniabeauty",
  tiktokUrl: "https://tiktok.com/@hairlaveniabeauty",
  phoneDisplay: "+62 812-3456-7890",
  waNumber: "6281234567890",
  address: "Jl. Kemang Raya No. 12, Jakarta Selatan",
  hours: "Setiap Hari · 09.00 – 20.00 WIB",
};

/** Build a WhatsApp deep link, optionally with a pre-filled message */
export function waUrl(message?: string): string {
  const base = `https://wa.me/${CONTACT.waNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

/** Bottom navigation (mobile) — max 5 items, thumb friendly */
export const NAV_ITEMS: NavItem[] = [
  { label: "Beranda", href: "#beranda", icon: Home },
  { label: "Layanan", href: "#layanan", icon: Scissors },
  { label: "Produk", href: "#produk", icon: ShoppingBag },
  { label: "Galeri", href: "#galeri", icon: Images },
  { label: "Kontak", href: "#kontak", icon: MessageCircle },
];

/** Full menu — used in top navbar (desktop) & slide-in sheet (mobile) */
export const MENU_LINKS: NavItem[] = [
  { label: "Beranda", href: "#beranda", icon: Home },
  { label: "Layanan", href: "#layanan", icon: Scissors },
  { label: "Produk", href: "#produk", icon: ShoppingBag },
  { label: "Galeri", href: "#galeri", icon: Images },
  { label: "Testimoni", href: "#testimoni", icon: Star },
  { label: "Kontak", href: "#kontak", icon: MessageCircle },
];
