"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GALLERY_FILTERS,
  GALLERY_ITEMS,
  type GalleryCategory,
} from "@/data/gallery";
import { cn } from "@/lib/utils";

type Filter = "Semua" | GalleryCategory;

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("Semua");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filtered = useMemo(
    () =>
      filter === "Semua"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === filter),
    [filter]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Scroll the lightbox carousel to the tapped item when opening
  useEffect(() => {
    if (openIndex === null || !emblaApi) return;
    emblaApi.scrollTo(openIndex, true);
    setCurrentSlide(openIndex);
  }, [openIndex, emblaApi]);

  const open = openIndex !== null;
  const current = openIndex !== null ? filtered[openIndex] : null;

  return (
    <section
      id="galeri"
      className="px-5 py-14 md:px-8 md:py-24"
      aria-label="Galeri karya kami"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Galeri"
            title="Karya yang Bicara Sendiri"
            description="Ketuk foto untuk melihat lebih dekat — geser untuk menjelajahi karya kami."
          />
        </Reveal>

        {/* Sticky filter tabs */}
        <div className="sticky top-14 z-30 -mx-5 mt-7 bg-cream/90 px-5 py-3 backdrop-blur-xl md:top-16">
          <Tabs
            value={filter}
            onValueChange={(value) => {
              setFilter(value as Filter);
              setOpenIndex(null);
            }}
          >
            <div className="scrollbar-hide touch-scroll -mx-1 overflow-x-auto px-1">
              <TabsList className="w-max">
                {GALLERY_FILTERS.map((item) => (
                  <TabsTrigger key={item} value={item}>
                    {item}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </div>

        {/* 2-col masonry on mobile → 4-col on desktop */}
        <div className="mt-4 columns-2 gap-3 md:columns-3 xl:columns-4">
          {filtered.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Lihat foto: ${item.alt}`}
              className={cn(
                "group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-pink-100 shadow-sm transition-transform duration-200 active:scale-[0.98]",
                item.aspectClass
              )}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-2 bottom-2 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-medium text-white opacity-100 backdrop-blur transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                {item.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Full-screen lightbox (vaul bottom drawer with swipe navigation) */}
      <Drawer open={open} onOpenChange={(isOpen) => !isOpen && setOpenIndex(null)}>
        <DrawerContent className="h-[92dvh] border-none bg-[#141414]">
          <DrawerTitle className="sr-only">
            {current ? current.alt : "Galeri Hair La Venia Beauty"}
          </DrawerTitle>
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 px-5 pb-2 text-white">
              <span className="text-xs font-medium tabular-nums text-white/70">
                {(currentSlide ?? 0) + 1} / {filtered.length}
              </span>
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Tutup galeri"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors active:scale-95 hover:bg-white/20"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            {/* Swipeable image carousel (drag excluded from drawer drag) */}
            <div ref={emblaRef} data-vaul-no-drag className="flex-1 overflow-hidden">
              <div className="flex h-full">
                {filtered.map((item) => (
                  <div
                    key={item.id}
                    className="relative min-w-0 flex-[0_0_100%]"
                  >
                    <div className="relative h-full w-full p-3">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        loading="lazy"
                        sizes="100vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer: caption + dots + arrows */}
            <div className="space-y-3 px-5 pb-6 pt-3 text-center">
              <p className="text-sm text-white/85">
                {current ? current.alt : ""}
              </p>
              {current && (
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-200">
                  {current.category}
                </span>
              )}
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollPrev()}
                  aria-label="Foto sebelumnya"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition active:scale-90 hover:bg-white/20"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden />
                </button>
                <div className="flex gap-1.5">
                  {filtered.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`Ke foto ${index + 1}`}
                      onClick={() => emblaApi?.scrollTo(index)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        currentSlide === index
                          ? "w-5 bg-rose-400"
                          : "w-1.5 bg-white/30"
                      )}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollNext()}
                  aria-label="Foto berikutnya"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition active:scale-90 hover:bg-white/20"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
}
