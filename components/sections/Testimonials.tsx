"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5 text-amber-400"
      aria-label={`Rating ${rating} dari 5 bintang`}
      role="img"
    >
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" aria-hidden />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-pink-100 bg-white p-6 shadow-rose-soft">
      <Stars rating={testimonial.rating} />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-pink-50 pt-4">
        <span
          style={{ backgroundColor: testimonial.avatarBg }}
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-rose-600"
        >
          {testimonial.initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-charcoal">
            {testimonial.name}
          </span>
          <span className="block text-xs text-gray-400">
            {testimonial.service}
          </span>
        </span>
      </figcaption>
    </article>
  );
}

export function Testimonials() {
  // Auto-play 5s, pause while user is touching / hovering
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "center", loop: true },
    [autoplay]
  );
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(TESTIMONIALS.length);

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
    <section
      id="testimoni"
      aria-label="Testimoni pelanggan"
      className="border-y border-pink-100 bg-blush/60 px-5 py-14 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Testimoni"
            title="Cerita Cantik dari Mereka"
            description="2.400+ pelanggan setia sudah membuktikan. Sekarang giliranmu ✨"
          />
        </Reveal>

        {/* Mobile: one-per-view swipe carousel with autoplay */}
        <div className="mt-8 md:hidden">
          <div
            ref={emblaRef}
            data-vaul-no-drag
            className="touch-scroll -mx-5 cursor-grab overflow-hidden active:cursor-grabbing"
          >
            <div className="flex px-5">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-0 flex-[0_0_100%] pl-3 first:pl-0"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-col items-center gap-2">
            <div className="flex gap-1.5">
              {Array.from({ length: snapCount }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Ke testimoni ${index + 1}`}
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
            <p className="text-[11px] text-gray-400">Geser untuk melihat →</p>
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="mt-12 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.06}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
