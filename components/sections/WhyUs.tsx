import {
  BadgePercent,
  Leaf,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Stylist Bersertifikat",
    description:
      "Tim stylist tersertifikasi dengan pengalaman 10+ tahun menangani berbagai jenis rambut.",
  },
  {
    icon: Leaf,
    title: "Produk Halal Premium",
    description:
      "Hanya menggunakan produk halal & ber-BPOM yang aman untuk rambut dan kulitmu.",
  },
  {
    icon: BadgePercent,
    title: "Harga Transparan",
    description:
      "Tanpa biaya tersembunyi. Kamu tahu harga sejak awal, tanpa kejutan di kasir.",
  },
  {
    icon: Sparkles,
    title: "Hasil Instagramable",
    description:
      "Interior estetik dan hasil tata rambut yang selalu siap untuk dipamerkan.",
  },
];

export function WhyUs() {
  return (
    <section
      aria-label="Kenapa memilih Hair La Venia Beauty"
      className="border-y border-pink-100 bg-blush/60 px-5 py-14 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Kenapa Venia?"
            title="Alasan Pelanggan Setia Kembali"
            description="Lebih dari sekadar salon — kami merawat rambutmu sekaligus menumbuhkan rasa percaya dirimu."
          />
        </Reveal>

        <div className="mt-9 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-4 md:gap-6">
          {FEATURES.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-3xl border border-pink-100 bg-gradient-to-b from-white to-pink-50/40 p-4 transition-transform duration-200 active:scale-[0.98] md:p-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-100 text-rose-500 md:h-12 md:w-12">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
                </span>
                <h3 className="mt-3.5 text-sm font-bold leading-snug text-charcoal md:text-base">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500 md:text-sm">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
