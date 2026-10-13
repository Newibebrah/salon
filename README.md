# Hair La Venia Beauty 💅

> **Cantik & Percaya Diri Ala Venia ✨**
> Landing page mobile-first untuk salon hair & beauty premium di Jakarta.

Landing page ini dirancang **mobile-first** (375px–430px sebagai target utama,
terasa seperti native app), lalu ditingkatkan secara progresif untuk tablet
(`md:`) dan desktop (`lg:`).

---

## ⚙️ Tech Stack

| Teknologi | Peran |
| --- | --- |
| Next.js 14 (App Router, TypeScript) | Framework & routing |
| Tailwind CSS v3 | Design system & utility mobile-first |
| shadcn/ui (Radix) | Button, Card, Accordion, Sheet, Tabs, Dialog, Drawer |
| framer-motion | Animasi 60fps, auto-hide navbar, reveal on scroll (hormati `prefers-reduced-motion`) |
| embla-carousel (+ autoplay) | Carousel swipe: layanan, testimoni, lightbox galeri |
| vaul | Bottom sheet lightbox galeri (swipe-to-dismiss) |
| lucide-react | Ikon |
| next/font | Playfair Display (heading) + Inter (body) |

---

## 🚀 Menjalankan Proyek

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Build produksi:

```bash
npm run build
npm start
```

> Gambar di-load dari Unsplash (`images.unsplash.com` sudah di-whitelist di
> `next.config.js`). Butuh koneksi internet saat pertama kali render.

---

## 📁 Struktur Proyek

```
/app
  layout.tsx          # Fonts, viewport (viewport-fit=cover), metadata & OG
  page.tsx            # Merangkai semua section
  globals.css         # Tailwind, scrollbar-hide, safe-area, reduced-motion
  icon.svg            # Favicon monogram "HLV"
/components
  /layout
    TopNavbar.tsx     # Navbar kaca, auto-hide saat scroll turun + Sheet menu
    BottomNav.tsx     # Bottom nav mobile (5 tab, glass, spring pill)
    FloatingWhatsApp.tsx
  /sections
    Hero.tsx          # Stack vertikal, CTA full-width, trust row snap
    TrustBar.tsx      # Marquee badge kepercayaan
    Services.tsx      # Carousel embla (mobile) → grid 3 kolom (md+)
    WhyUs.tsx         # 2x2 grid mobile → 4 kolom desktop
    Products.tsx      # Grid 2 kolom + filter chips scrollable
    Gallery.tsx       # Masonry 2 kolom + lightbox vaul (swipe)
    Testimonials.tsx  # Carousel autoplay 5s (mobile) → grid 3 kolom
    CTASection.tsx    # CTA booking + info kontak
    Footer.tsx        # Accordion link (mobile) → kolom (desktop)
  /ui                 # Komponen shadcn/ui
  Reveal.tsx          # Scroll-reveal (respect prefers-reduced-motion)
  SectionHeading.tsx
/data                 # Static data: nav, services, products, testimonials, gallery
/lib/utils.ts         # cn(), formatRupiah(), unsplash()
```

---

## 📱 Mobile Testing Checklist

Test di Chrome DevTools device toolbar **dan** perangkat asli bila memungkinkan.

### Viewport utama
- [ ] **375px** (iPhone SE) — tidak ada horizontal scroll, teks tidak terpotong
- [ ] **390px** (iPhone 12/13/14) — hero & carousel proporsional
- [ ] **430px** (iPhone Pro Max) — CTA & bottom nav tetap nyaman

### Navigasi
- [ ] Navbar kaca muncul; scroll turun → sembunyi; scroll naik → muncul lagi
- [ ] Hamburger membuka Sheet dari kanan; setiap link menutup sheet
- [ ] Bottom nav: tab aktif berpindah mengikuti section yang sedang dilihat
- [ ] Bottom nav tersembunyi di `md:` ke atas
- [ ] Scroll ke anchor tidak tertutup navbar (`scroll-padding-top`)

### Sentuhan & thumb-zone
- [ ] Semua tap target ≥ 44×44px (tombol, chip, dot, item nav)
- [ ] `active:scale` terasa pada semua tombol & kartu (umpan balik haptic)
- [ ] Tidak ada zoom otomatis saat mengetuk — semua teks interaktif ≥ 16px
- [ ] Tidak ada highlight biru iOS (`-webkit-tap-highlight-color: transparent`)

### Carousel & lightbox
- [ ] Layanan: swipe halus, peek kartu berikutnya, dot indikator akurat
- [ ] Testimoni: auto-play 5s, berhenti saat disentuh/di-hover
- [ ] Galeri: ketuk foto → bottom sheet; swipe kiri/kanan ganti foto;
      swipe ke bawah / ketuk backdrop / tombol ✕ menutup

### Detail native-app
- [ ] `safe-area-inset-bottom` dihormati di iPhone ber-notch (bottom nav & WhatsApp FAB)
- [ ] Hero memakai `100dvh` — tidak ada lompatan saat address bar iOS muncul/hilang
- [ ] `prefers-reduced-motion: reduce` → marquee & animasi berhenti
- [ ] Tidak ada horizontal scroll dari blob dekoratif (`overflow-x-hidden`)

### Aksesibilitas
- [ ] Semua tombol ikon punya `aria-label`
- [ ] Navigasi keyboard: focus ring terlihat (`ring-rose-300`)
- [ ] Kontras teks AA (charcoal di cream, white di rose-500)
- [ ] Struktur semantik: `nav`, `main`, `section`, `article`, `footer`

---

## 🎨 Design Tokens

| Token | Nilai | Kegunaan |
| --- | --- | --- |
| Primary Pink | `#EC4899` | CTA, ikon aktif |
| Soft Pink | `#FBCFE8` / `pink-100/200` | Badge, ikon container |
| Blush | `#FDF2F8` | Background section |
| Deep Rose | `#9F1239` | Heading |
| Cream | `#FFFBF7` | Background utama |
| Charcoal | `#1F1F1F` | Body text |
| Gold | `#D4AF37` | Divider, aksen "Beauty", eyebrow |

Font: **Playfair Display** (heading, italic wordmark) + **Inter** (body).

---

© 2025 Hair La Venia Beauty. All rights reserved.
