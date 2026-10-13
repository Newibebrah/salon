import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number as Indonesian Rupiah, e.g. 150000 -> "Rp 150.000" */
export function formatRupiah(value: number): string {
  return `Rp ${value.toLocaleString("id-ID")}`;
}

/** Build an Unsplash CDN URL from a photo id */
export function unsplash(id: string, width = 900): string {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${width}&auto=format&fit=crop`;
}
