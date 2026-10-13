"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, CalendarHeart, Leaf, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { unsplash } from "@/lib/utils";

const HERO_IMAGE = unsplash("1560066984-138dadb4c035", 1200);

const TRUST_BADGES = [
  { icon: Star, label: "4.9/5 · 2.400+ ulasan" },
  { icon: BadgeCheck, label: "Stylist bersertifikat" },
  { icon: Leaf, label: "Produk halal & BPOM" },
];

const AVATARS = [
  { initials: "SP", bg: "#FCE7F3" },
  { initials: "AK", bg: "#FDF2F8" },
  { initials: "NR", bg: "#FBE4EF" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="beranda"
      aria-label="Beranda Hair La Venia Beauty"
      className="relative flex min-h-[calc(100dvh-3.5rem)] items-center overflow-hidden px-5 pb-14 pt-20 md:pt-24 lg:pb-24"
    >
      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-15%] h-72 w-72 rounded-full bg-pink-200 opacity-60 blur-3xl" />
        <div className="absolute left-[-20%] top-40 h-80 w-80 rounded-full bg-rose-100 opacity-70 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[10%] h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Copy */}
        <div>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-rose-500 backdrop-blur"
          >
            <span aria-hidden>✨</span> Hair • Beauty • Confidence
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="mt-5 font-display text-4xl font-bold leading-[1.15] text-rose-800 sm:text-5xl lg:text-6xl"
          >
            Cantik & Percaya Diri,
            <br />
            Ala <span className="italic text-rose-500">Venia</span> Beauty
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
            className="mt-4 max-w-md text-base leading-relaxed text-gray-500"
          >
            Salon hair & beauty premium dengan stylist bersertifikat &
            produk halal berkualitas.
          </motion.p>

          {/* Stacked full-width CTAs on mobile */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.24 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#kontak">
                <CalendarHeart className="h-5 w-5" aria-hidden />
                Booking Sekarang
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <a href="#layanan">
                Lihat Layanan
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
            </Button>
          </motion.div>

          {/* Trust row — horizontal scroll-snap badges */}
          <motion.ul
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.32 }}
            aria-label="Keunggulan salon"
            className="scrollbar-hide touch-scroll -mx-5 mt-7 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1"
          >
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex shrink-0 snap-start items-center gap-2 rounded-full border border-pink-100 bg-white/80 py-2 pl-3 pr-4 text-xs font-medium text-charcoal/75 backdrop-blur"
              >
                <Icon className="h-4 w-4 text-gold" aria-hidden />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Hero image — full width on mobile, aspect 4/5 */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 1.05, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-rose-soft lg:aspect-[4/5]">
            <Image
              src={HERO_IMAGE}
              alt="Stylist Hair La Venia Beauty merawat rambut pelanggan di studio yang tenang"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-rose-900/35 via-transparent to-transparent"
            />

            {/* Floating social-proof card */}
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-white/40 bg-white/75 p-3 backdrop-blur-md">
              <div className="flex -space-x-2.5" aria-hidden>
                {AVATARS.map((a) => (
                  <span
                    key={a.initials}
                    style={{ backgroundColor: a.bg }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white font-display text-[11px] font-bold text-rose-600"
                  >
                    {a.initials}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-xs font-bold text-charcoal">
                  2.400+ pelanggan setia
                </p>
                <p className="flex items-center gap-1 text-[11px] text-gray-500">
                  <span className="text-amber-400" aria-hidden>
                    ★★★★★
                  </span>
                  4.9/5 rating
                </p>
              </div>
            </div>
          </div>

          {/* Gold accent chip */}
          <div className="absolute -right-2 top-6 rotate-3 rounded-2xl border border-pink-100 bg-white/95 px-3.5 py-2 shadow-lg md:-right-4">
            <p className="font-display text-sm font-bold text-rose-800">
              Est. 2015
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
              Premium Salon
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
