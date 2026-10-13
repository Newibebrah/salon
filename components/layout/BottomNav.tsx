"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { NAV_ITEMS } from "@/data/nav";
import { cn } from "@/lib/utils";

/**
 * Mobile-only sticky bottom navigation.
 * Glass blur, rounded island, safe-area aware, spring pill on active change.
 */
export function BottomNav() {
  const [active, setActive] = useState<string>("beranda");
  const ids = NAV_ITEMS.map((item) => item.href.replace("#", ""));

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const probe = window.scrollY + window.innerHeight * 0.4;
        let current = ids[0];

        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= probe) current = id;
        }

        // Snap to the last item when reaching the bottom of the page
        const bottomReached =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 24;
        if (bottomReached) current = ids[ids.length - 1];

        setActive(current);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.nav
      aria-label="Navigasi bawah"
      initial={{ y: 96 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 26 }}
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
    >
      <div className="mx-3 mb-2 rounded-3xl border border-pink-100/80 bg-white/80 shadow-nav backdrop-blur-xl">
        <ul
          className="flex items-stretch px-1 pt-1.5"
          style={{ paddingBottom: "calc(0.375rem + env(safe-area-inset-bottom))" }}
        >
          {NAV_ITEMS.map(({ icon: Icon, ...item }) => {
            const isActive = active === item.href.replace("#", "");
            return (
              <li key={item.href} className="flex-1">
                <a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-2xl px-1 py-1.5 transition-colors duration-200",
                    isActive ? "text-rose-500" : "text-gray-400"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="bottom-nav-pill"
                      aria-hidden
                      className="absolute inset-0 rounded-2xl bg-pink-100/80"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  <motion.span
                    aria-hidden
                    whileTap={{ scale: 0.85 }}
                    transition={{ type: "spring", stiffness: 500, damping: 18 }}
                    className="relative"
                  >
                    <Icon
                      className="h-[22px] w-[22px]"
                      strokeWidth={isActive ? 2.4 : 2}
                    />
                  </motion.span>
                  <span className="relative text-[10px] font-semibold uppercase tracking-wide">
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
