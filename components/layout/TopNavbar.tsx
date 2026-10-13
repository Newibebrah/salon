"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { CalendarHeart } from "lucide-react";

import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CONTACT, MENU_LINKS, waUrl } from "@/data/nav";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export function TopNavbar() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  // Auto-hide on scroll down, reveal on scroll up (mobile-app feel)
  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(y > previous && y > 96);
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed inset-x-0 top-0 z-50 h-14 md:h-16"
    >
      <div className="h-full border-b border-pink-100/70 bg-white/70 backdrop-blur-xl">
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 md:px-8"
        >
          <Logo />

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {MENU_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-charcoal/75 transition-colors hover:bg-pink-50 hover:text-rose-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button size="sm" className="hidden md:inline-flex" asChild>
              <a href={waUrl()} target="_blank" rel="noreferrer">
                <CalendarHeart className="h-4 w-4" aria-hidden />
                Booking Sekarang
              </a>
            </Button>

            {/* Mobile hamburger → slide-in sheet */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-charcoal md:hidden"
                  aria-label="Buka menu navigasi"
                >
                  <Menu className="h-6 w-6" aria-hidden />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[86vw] max-w-xs border-pink-100 bg-cream/95 p-0"
              >
                <SheetTitle className="sr-only">
                  Menu navigasi Hair La Venia Beauty
                </SheetTitle>
                <div className="flex h-full flex-col overflow-y-auto p-6 pt-5">
                  <div className="flex items-center justify-between pr-10">
                    <Logo />
                  </div>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
                    Beauty · {CONTACT.signature}
                  </p>

                  <nav
                    aria-label="Menu navigasi"
                    className="mt-8 flex flex-col gap-1"
                  >
                    {MENU_LINKS.map((link, index) => (
                      <SheetClose asChild key={link.href}>
                        <a
                          href={link.href}
                          className="group flex min-h-[52px] items-center justify-between rounded-2xl px-4 transition-colors hover:bg-pink-50 active:bg-pink-100"
                        >
                          <span className="font-display text-xl text-rose-800">
                            {link.label}
                          </span>
                          <span className="flex items-center gap-2.5 text-[11px] font-medium text-gray-400">
                            0{index + 1}
                            <link.icon
                              className="h-4 w-4 text-rose-400"
                              aria-hidden
                            />
                          </span>
                        </a>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="mt-auto space-y-4 pt-8">
                    <SheetClose asChild>
                      <a
                        href={waUrl(
                          "Halo Hair La Venia Beauty! Saya ingin booking jadwal salon ✨"
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="block"
                      >
                        <Button className="h-12 w-full text-base">
                          <CalendarHeart className="h-5 w-5" aria-hidden />
                          Booking Sekarang
                        </Button>
                      </a>
                    </SheetClose>
                    <p className="text-center text-xs text-gray-400">
                      {CONTACT.instagram}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
