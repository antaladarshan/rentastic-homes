import type { Metadata } from "next";
import { MapPin, School, Utensils, Shield, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";
import ListingHero from "@/components/sections/ListingHero";
import PropertyGrid from "@/components/sections/PropertyGrid";
import AmenityGrid from "@/components/sections/AmenityGrid";
import WhatsAppFab from "@/components/ui/WhatsAppFab";
import type { Property } from "@/components/sections/PropertyGrid";

export const metadata: Metadata = {
  title: "Best PG in Navrangpura, Ahmedabad | Rentastic Homes",
  description: "Premium co-living spaces in Navrangpura near universities and transport hubs. Experience comfort, community, and convenience with Rentastic Homes.",
};

const properties: Property[] = [
  {
    id: "ansh-girls",
    name: "Rentastic Homes Ansh Girls",
    description: "Fully furnished, secure girls PG at Navrangpura. Meals, Wi-Fi, and 24/7 security included. Starting ₹9,000/month.",
    badge: "Limited Seats Available",
    href: "/property/ansh-rentastic-girls-pg",
    whatsappNumber: siteConfig.whatsapp,
    imageSrc: "/properties/ansh/wp-04.jpg",
    imageAlt: "Rentastic Homes Ansh Girls PG",
  },
  {
    id: "ansh-boys",
    name: "Rentastic Homes Ansh Boys",
    description: "Premium boys PG at Navrangpura with spacious furnished rooms, daily meals, and round-the-clock security. Starting ₹9,000/month.",
    badge: "Limited Seats Available",
    href: "/property/rentastic-ansh-boys-pg",
    whatsappNumber: siteConfig.whatsapp,
    imageSrc: "/properties/ansh/vc-05.jpg",
    imageAlt: "Rentastic Homes Ansh Boys PG",
  },
];

const whyLiveHere = [
  {
    icon: School,
    title: "Education Hub",
    description: "Near GU and HL",
  },
  {
    icon: Zap,
    title: "Excellent Transit",
    description: "BRTS & Metro connectivity",
  },
  {
    icon: Utensils,
    title: "Foodie's Paradise",
    description: "Best street food & cafes",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Well-lit, secure neighborhood",
  },
];

export default function NavrangpuraPage() {
  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-gutter py-xl max-w-[1280px] mx-auto text-center">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-md">
            Best PG in Navrangpura, Ahmedabad
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-lg">
            Premium co-living spaces perfectly situated near Ahmedabad's top universities and transport hubs. Experience comfort,
            community, and convenience.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-container text-on-primary-container font-label-caps text-label-caps px-lg py-sm rounded-full hover:bg-primary hover:text-on-primary transition-colors shadow-warm"
          >
            Enquire Now
          </a>
        </section>

        {/* Why Live Here */}
        <section className="bg-surface-container-low py-xl px-gutter">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="font-headline-md text-headline-md text-center mb-lg text-on-background">Why Live in Navrangpura</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
              {whyLiveHere.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-surface-container-lowest p-lg rounded-xl shadow-warm border border-outline-variant/20 flex flex-col items-center text-center">
                    <Icon size={32} className="text-primary mb-sm" />
                    <h3 className="font-headline-sm text-headline-sm text-on-background mb-xs">{item.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Stays */}
        <section className="py-xl px-gutter max-w-[1280px] mx-auto">
          <h2 className="font-headline-md text-headline-md text-center mb-lg text-on-background">Our Stays in Navrangpura</h2>
          <PropertyGrid properties={properties} />
        </section>

        {/* Amenities */}
        <section className="bg-surface-container py-xl px-gutter">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="font-headline-md text-headline-md text-center mb-lg text-on-background">Designed For You</h2>
            <AmenityGrid />
          </div>
        </section>
      </main>
      <WhatsAppFab />
    </>
  );
}
