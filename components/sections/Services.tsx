"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, Clock } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES, type Service } from "@/data/services";
import { waUrl } from "@/data/nav";
import { cn, formatRupiah } from "@/lib/utils";

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-pink-100 bg-white p-5 shadow-rose-soft transition-transform duration-200 active:scale-[0.98] md:hover:-translate-y-1">
      {service.popular && (
        <span className="absolute right-4 top-4 rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold">
          Populer
        </span>
      )}

      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-rose-500">
        <Icon className="h-6 w-6" aria-hidden />
      </span>

      <h3 className="mt-4 font-display text-xl font-bold text-rose-800">
        {service.name}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-500">
        {service.description}
      </p>

      <div className="mt-4 flex items-end justify-between gap-3 border-t border-pink-50 pt-4">
        <div>
          <p className="text-sm font-bold text-rose-600">
            {formatRupiah(service.price)}
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-[11px] text-gray-400">
            <Clock className="h-3 w-3" aria-hidden />
            {service.duration}
          </p>
        </div>
        <a
          href={waUrl(
            `Halo! Saya mau booking layanan ${service.name} di Hair La Venia Beauty ✨`
          )}
          target="_blank"
          rel="noreferrer"
          aria-label={`Booking layanan ${service.name} via WhatsApp`}
          className="inline-flex h-10 shrink-0 items-center rounded-full bg-rose-500 px-4 text-xs font-semibold text-white shadow-rose-glow transition-all hover:bg-rose-600 active:scale-95"
        >
          Booking
        </a>
      </div>
    </article>
  );
}

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
  });
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const updateSnaps = () => setSnapCount(emblaApi.scrollSnapList().length);
    updateSnaps();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      updateSnaps();
      onSelect();
    });
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section id="layanan" className="px-5 py-14 md:px-8 md:py-24" aria-label="Layanan kami">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="Layanan Kami"
              title="Perawatan Terbaik untuk Rambutmu"
              description="Dari potongan klasik hingga transformasi warna — semuanya dikerjakan stylist bersertifikat."
              className="max-w-md"
            />
            <a
              href={waUrl("Halo! Saya mau tanya katalog layanan lengkap Hair La Venia Beauty.")}
              target="_blank"
              rel="noreferrer"
              className="hidden shrink-0 items-center gap-1.5 pb-1 text-sm font-semibold text-rose-600 transition-colors hover:text-rose-700 md:inline-flex"
            >
              Lihat semua
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Reveal>

        {/* Mobile: horizontal swipe carousel with peek */}
        <div className="mt-8 md:hidden">
          <div
            ref={emblaRef}
            data-vaul-no-drag
            className="touch-scroll -mx-5 cursor-grab overflow-hidden active:cursor-grabbing"
          >
            <div className="flex px-5">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="min-w-0 flex-[0_0_280px] pl-3 first:pl-0"
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="mt-5 flex justify-center gap-1.5">
            {Array.from({ length: snapCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Ke slide layanan ${index + 1}`}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  selected === index
                    ? "w-5 bg-rose-500"
                    : "w-2 bg-pink-200 hover:bg-pink-300"
                )}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="mt-10 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
