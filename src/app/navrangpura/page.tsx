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
    id: "haven-residency",
    name: "The Haven Residency",
    description: "Premium single and twin sharing rooms with modern amenities. A comfortable community designed for students.",
    badge: "Limited Seats Available",
    href: "/property/haven-residency",
    whatsappNumber: siteConfig.whatsapp,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtJk8QI8SMGaCx45K78wrvh_GSh4Oaev81yCyy1wRIQFZmM_g3_lCn90lt013ZkjyJRVhBFhkXcWMUqSWJ58sCuhBmTUARuIAuZic2BQ4dvNTZAaCCdkgSU8qz_rwzU6tP1FNoHN9nMQk1JHeFYXA2AcWDqNJlEhWB8GnO572B24F5WJQ2jMqAVOIjP9SyLDUQ1WPrDNsuuYxvBABic8b-RUiOM_GKGGxEoFl94J23xoQILYGSW7XW3poA1I09CvOMOk1lZpy-Atbi",
    imageAlt: "The Haven Residency interior",
  },
  {
    id: "serene-living",
    name: "Serene Living",
    description: "Spacious twin and multi-sharing rooms with premium amenities and excellent community spaces.",
    badge: "Limited Seats Available",
    href: "/property/serene-living",
    whatsappNumber: siteConfig.whatsapp,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEIEtrOwE76g_IAJvc0Xpg-v9EEQReH9J95AktCTH9Y_b-2BFrrIHuS-HJlitcADBlCxrVlFPXQVeY8YftXbAAj_uYRmQCJ5caz4PpIjPZh9-AJPoUjRCAJGwLbj5PhxFdoHV1uJQ90_KJU09z3PBxeSdWpZzRZa5wbgkJDilRfyU6VF_6GFhuhPyKxx2h4nY3IXBAkAGE0OliEucJrJo2LFhobwnPsbbnw8IsnCOiQCjWEbqD4gxdyQ8tTympEnegeYwYlbyKIRi_",
    imageAlt: "Serene Living interior",
  },
  {
    id: "oasis-coliving",
    name: "Oasis Co-living",
    description: "Vibrant community space with multi-sharing options and excellent communal facilities.",
    badge: "Limited Seats Available",
    href: "/property/oasis-coliving",
    whatsappNumber: siteConfig.whatsapp,
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8hn--gg3Aukp0b6Tc6iQ6JorIjTn2knDbhcaJwNURmhjCAEcDl2rJdGzKwHRc6QW6fWAwWFW0ZyZjIEHR-e3ps3ORLXxLDL3pABpkx9LMRNrpwMl1B3ikYqg_kFYJQG4rP9D_PFUGcUhZnJpU-_lVeeTncZ2gwxPFw9_EXsjI8DYu0bVR4x9QCui3oyUGd0ogq5o86TIvtvrK86d_54JyBV94EtM7TOV2aYdyG0lI9gTqjFSc8fge3JXWeY8Zq6FJzfuW7t5hex2N",
    imageAlt: "Oasis Co-living interior",
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
