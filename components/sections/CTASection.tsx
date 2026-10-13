import { CalendarHeart, Clock, Instagram, MapPin } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { CONTACT, waUrl } from "@/data/nav";

export function CTASection() {
  return (
    <section
      id="kontak"
      className="px-5 py-14 md:px-8 md:py-24"
      aria-label="Booking dan kontak"
    >
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-100 via-rose-50 to-white p-8 text-center shadow-rose-soft md:p-14">
          {/* Decorative blobs */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 -right-10 h-52 w-52 rounded-full bg-rose-200/60 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-pink-200/70 blur-3xl" />
          </div>

          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              {CONTACT.signature}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] text-rose-800 md:text-5xl">
              Siap Tampil Lebih
              <br className="sm:hidden" /> Percaya Diri?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-600 md:text-base">
              Booking sekarang dan rasakan sentuhan premium dari stylist Hair
              La Venia Beauty. Jadwalmu menanti ✨
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a
                  href={waUrl(
                    "Halo Hair La Venia Beauty! Saya ingin booking jadwal salon ✨"
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <CalendarHeart className="h-5 w-5" aria-hidden />
                  Booking Sekarang
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <a
                  href={waUrl("Halo! Saya mau konsultasi layanan dulu ya.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat Konsultasi
                </a>
              </Button>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
              <div className="flex items-start gap-2.5 rounded-2xl border border-pink-100 bg-white/70 p-3.5 backdrop-blur">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" aria-hidden />
                <span className="text-xs leading-relaxed text-charcoal/75">
                  {CONTACT.address}
                </span>
              </div>
              <div className="flex items-start gap-2.5 rounded-2xl border border-pink-100 bg-white/70 p-3.5 backdrop-blur">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" aria-hidden />
                <span className="text-xs leading-relaxed text-charcoal/75">
                  {CONTACT.hours}
                </span>
              </div>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 rounded-2xl border border-pink-100 bg-white/70 p-3.5 backdrop-blur transition-transform active:scale-[0.98]"
              >
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" aria-hidden />
                <span className="text-xs leading-relaxed text-charcoal/75">
                  {CONTACT.instagram}
                </span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
