import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hairlaveniabeauty.vercel.app"),
  title: "Hair La Venia Beauty — Salon Hair & Beauty Premium Jakarta",
  description:
    "Salon hair & beauty premium dengan stylist profesional & produk halal. Booking sekarang di Hair La Venia Beauty — cantik & percaya diri ala Venia ✨",
  keywords: [
    "hair la venia beauty",
    "salon jakarta",
    "hair salon premium",
    "beauty salon",
    "salon rambut jakarta",
  ],
  authors: [{ name: "Hair La Venia Beauty" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://hairlaveniabeauty.vercel.app",
    siteName: "Hair La Venia Beauty",
    title: "Hair La Venia Beauty — Salon Hair & Beauty Premium Jakarta",
    description:
      "Salon hair & beauty premium dengan stylist profesional & produk halal. Booking sekarang di Hair La Venia Beauty — cantik & percaya diri ala Venia ✨",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Hair La Venia Beauty — premium hair & beauty salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hair La Venia Beauty — Salon Hair & Beauty Premium Jakarta",
    description:
      "Salon hair & beauty premium dengan stylist profesional & produk halal. Cantik & percaya diri ala Venia ✨",
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#EC4899",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
