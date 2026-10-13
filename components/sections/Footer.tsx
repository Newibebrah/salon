import { Instagram, MessageCircle, Music2 } from "lucide-react";

import { Logo } from "@/components/layout/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACT, MENU_LINKS, waUrl } from "@/data/nav";
import { SERVICES } from "@/data/services";

const SOCIALS = [
  { label: "Instagram Hair La Venia Beauty", href: CONTACT.instagramUrl, icon: Instagram },
  { label: "WhatsApp Hair La Venia Beauty", href: waUrl(), icon: MessageCircle },
  { label: "TikTok Hair La Venia Beauty", href: CONTACT.tiktokUrl, icon: Music2 },
];

export function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-white pb-28 md:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand block */}
          <div>
            <Logo />
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
              {CONTACT.taglineSecondary}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Salon hair & beauty premium di Jakarta. Kami percaya setiap
              orang berhak merasa cantik & percaya diri — {CONTACT.tagline}.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-pink-200 text-rose-500 transition-all hover:bg-rose-500 hover:text-white active:scale-95"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile: accordion link groups */}
          <div className="md:hidden">
            <Accordion type="multiple" defaultValue={["menu"]}>
              <AccordionItem value="menu">
                <AccordionTrigger>Menu</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2.5">
                    {MENU_LINKS.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-sm text-gray-500 transition-colors hover:text-rose-600"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="layanan">
                <AccordionTrigger>Layanan</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2.5">
                    {SERVICES.map((service) => (
                      <li key={service.id}>
                        <a
                          href="#layanan"
                          className="text-sm text-gray-500 transition-colors hover:text-rose-600"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="kontak">
                <AccordionTrigger>Kontak</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2.5 text-sm text-gray-500">
                    <li>{CONTACT.address}</li>
                    <li>{CONTACT.hours}</li>
                    <li>
                      <a
                        href={waUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-rose-600"
                      >
                        {CONTACT.phoneDisplay}
                      </a>
                    </li>
                    <li>{CONTACT.instagram}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Desktop: static columns */}
          <nav aria-label="Tautan menu" className="hidden md:block">
            <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">
              Menu
            </h3>
            <ul className="mt-4 space-y-2.5">
              {MENU_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-rose-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">
              Layanan
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#layanan"
                    className="text-sm text-gray-500 transition-colors hover:text-rose-600"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <address className="hidden not-italic md:block">
            <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">
              Kontak
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-500">
              <li>{CONTACT.address}</li>
              <li>{CONTACT.hours}</li>
              <li>
                <a
                  href={waUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-rose-600"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>{CONTACT.instagram}</li>
            </ul>
          </address>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-pink-50 pt-6 text-center">
          <p className="text-xs text-gray-400">
            © 2025 Hair La Venia Beauty. All rights reserved.
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            {CONTACT.taglineSecondary}
          </p>
        </div>
      </div>
    </footer>
  );
}
