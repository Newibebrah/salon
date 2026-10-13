import {
  BadgeCheck,
  Gem,
  HeartHandshake,
  Leaf,
  Star,
  type LucideIcon,
} from "lucide-react";

type TrustItem = {
  icon: LucideIcon;
  text: string;
};

const ITEMS: TrustItem[] = [
  { icon: Star, text: "4.9/5 dari 2.400+ pelanggan setia" },
  { icon: BadgeCheck, text: "Stylist bersertifikat & berpengalaman" },
  { icon: Leaf, text: "Produk halal & ber-BPOM" },
  { icon: Gem, text: "Hair extension kualitas premium" },
  { icon: HeartHandshake, text: "10+ tahun melayani dengan sepenuh hati" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Kepercayaan pelanggan"
      className="border-y border-pink-100 bg-white/70 py-4 backdrop-blur"
    >
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...ITEMS, ...ITEMS].map(({ icon: Icon, text }, index) => (
            <span
              key={`${text}-${index}`}
              aria-hidden={index >= ITEMS.length}
              className="mr-12 flex items-center gap-2.5 whitespace-nowrap text-xs font-medium text-charcoal/70"
            >
              <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
