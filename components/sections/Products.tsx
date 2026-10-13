"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  type Product,
  type ProductCategory,
} from "@/data/products";
import { waUrl } from "@/data/nav";
import { cn, formatRupiah } from "@/lib/utils";

type Filter = "Semua" | ProductCategory;

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition-transform duration-200 active:scale-[0.98]"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-2.5 top-2.5 rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-semibold text-rose-600 backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className="p-3 md:p-4">
        <h3 className="line-clamp-1 text-sm font-semibold text-charcoal">
          {product.name}
        </h3>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="text-sm font-bold text-rose-600">
            {formatRupiah(product.price)}
          </p>
          <p className="shrink-0 text-[10px] text-gray-400">
            ⭐ {product.rating.toFixed(1)} · {product.sold}
          </p>
        </div>
        <a
          href={waUrl(
            `Halo! Saya mau beli ${product.name} (${formatRupiah(product.price)}) di Hair La Venia Beauty.`
          )}
          target="_blank"
          rel="noreferrer"
          aria-label={`Beli ${product.name} via WhatsApp`}
          className="mt-3 flex h-10 items-center justify-center rounded-full bg-pink-100 text-xs font-semibold text-rose-700 transition-all hover:bg-rose-500 hover:text-white active:scale-95"
        >
          Beli
        </a>
      </div>
    </motion.article>
  );
}

export function Products() {
  const [filter, setFilter] = useState<Filter>("Semua");

  const filtered =
    filter === "Semua"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === filter);

  return (
    <section id="produk" className="px-5 py-14 md:px-8 md:py-24" aria-label="Produk kami">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Venia Shop"
            title="Produk Pilihan di Rumah"
            description="Rangkaian hair care & beauty halal yang kami pakai di salon — sekarang bisa kamu bawa pulang."
          />
        </Reveal>

        {/* Scrollable filter chips */}
        <Reveal className="mt-7" delay={0.05}>
          <div
            role="group"
            aria-label="Filter kategori produk"
            className="scrollbar-hide touch-scroll -mx-5 overflow-x-auto px-5 pb-1"
          >
            <div className="flex w-max gap-2">
              {PRODUCT_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={filter === category}
                  onClick={() => setFilter(category)}
                  className={cn(
                    "h-10 rounded-full border px-4 text-sm font-medium transition-all active:scale-95",
                    filter === category
                      ? "border-rose-500 bg-rose-500 text-white shadow-rose-glow"
                      : "border-pink-200 bg-white text-gray-500 hover:border-rose-300 hover:text-rose-600"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 2-col mobile → 4-col desktop */}
        <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
