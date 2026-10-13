"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { waUrl } from "@/data/nav";

/**
 * Floating WhatsApp booking pill.
 * Sits above the bottom nav on mobile, bottom-right on desktop.
 */
export function FloatingWhatsApp() {
  return (
    <motion.a
      href={waUrl("Halo Hair La Venia Beauty! Saya mau tanya-tanya dulu ya ✨")}
      target="_blank"
      rel="noreferrer"
      aria-label="Booking via WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.9, type: "spring", stiffness: 260, damping: 18 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-24 right-4 z-40 flex min-h-[44px] items-center gap-2 rounded-full bg-rose-500 px-4 py-3 text-sm font-semibold text-white shadow-rose-glow md:bottom-6 md:right-6"
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-rose-400 opacity-30 [animation-duration:2.2s]"
      />
      <MessageCircle className="h-5 w-5" aria-hidden />
      <span className="text-xs font-bold uppercase tracking-wide">Booking</span>
    </motion.a>
  );
}
