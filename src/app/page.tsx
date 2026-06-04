import type { Metadata } from "next";
import Hero        from "@/components/sections/Hero";
import Stats       from "@/components/sections/Stats";
import ValueProp   from "@/components/sections/ValueProp";
import Testimonial from "@/components/sections/Testimonial";
import Reviews     from "@/components/sections/Reviews";
import TrustBadges from "@/components/sections/TrustBadges";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

export const metadata: Metadata = {
  title: "Premium PG & Co-living — Checked In, Worries Out!",
  description:
    "Find your perfect PG or co-living space with Rentastic Homes. Fully furnished, safe, managed. PG for girls & boys, residences for professionals.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ValueProp />
      <Testimonial />
      <Reviews />
      <TrustBadges />
      <WhatsAppFab />
    </>
  );
}
