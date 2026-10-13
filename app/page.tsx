import { BottomNav } from "@/components/layout/BottomNav";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <TopNavbar />

      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Products />
        <Gallery />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />

      {/* Mobile-only sticky bottom navigation */}
      <BottomNav />

      {/* Floating booking CTA (mobile + desktop) */}
      <FloatingWhatsApp />
    </>
  );
}
