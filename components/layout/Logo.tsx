import { cn } from "@/lib/utils";

/**
 * Brand wordmark for "Hair La Venia Beauty".
 * - "Hair La"  : italic, rose-500
 * - "Venia"    : bold, rose-800 (deep rose), with a gold underline accent
 * - "Beauty"   : small caps, gold, letter-spaced (hidden on compact)
 */
export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href="#beranda"
      aria-label="Hair La Venia Beauty — kembali ke beranda"
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span className="font-display text-lg sm:text-xl">
        <span className="font-medium italic text-rose-500">Hair La </span>
        <span className="relative font-bold text-rose-800">
          Venia
          <span
            aria-hidden
            className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-gold to-gold/20 transition-all duration-300 group-hover:from-gold group-hover:to-gold"
          />
        </span>
        {!compact && (
          <span className="ml-1.5 align-middle text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            Beauty
          </span>
        )}
      </span>
    </a>
  );
}
