import type { Metadata } from "next";
import { Armchair, Sparkles, Users, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import PropertyGrid from "@/components/sections/PropertyGrid";
import AmenityGrid from "@/components/sections/AmenityGrid";
import WhatsAppFab from "@/components/ui/WhatsAppFab";
import type { Property } from "@/components/sections/PropertyGrid";

export const metadata: Metadata = {
  title: "Premium Residences in Ahmedabad | Rentastic Homes",
  description: "Premium co-living spaces for working professionals in Navrangpura and Gurukul. Fully furnished, all-inclusive rent.",
};

const properties: Property[] = [
  {
    id: "ansh-residences",
    name: "Rentastic Homes Ansh Residences",
    description: "Premium co-living at Navrangpura. ₹9,000 - ₹12,799/month. Perfect for working professionals and students.",
    badge: "Limited Seats Available",
    href: "/property/rentastic-ansh-boys-pg",
    whatsappNumber: siteConfig.whatsapp,
    imageSrc: "/properties/ansh/vc-05.jpg",
    imageAlt: "Common area at Rentastic Homes Ansh Residences",
  },
  {
    id: "gurukul-residences",
    name: "Rentastic Homes Gurukul Residences",
    description: "Premium residences on Gurukul Road. ₹11,000 - ₹17,000/month. Premium location with excellent connectivity.",
    badge: "Limited Seats Available",
    href: "/property/gurukul-road",
    whatsappNumber: siteConfig.whatsappGurukul,
    imageSrc: "/properties/gurukul/lifestyle-05.jpg",
    imageAlt: "Study zone at Rentastic Homes Gurukul Residences",
  },
];

const features = [
  {
    icon: <Armchair size={32} />,
    title: "Premium Furnishings",
    description: "Fully furnished with high-quality furniture and appliances",
  },
  {
    icon: <Sparkles size={32} />,
    title: "Luxury Amenities",
    description: "AC, Wi-Fi, Housekeeping, and premium facilities included",
  },
  {
    icon: <Users size={32} />,
    title: "Community Living",
    description: "Common zones designed for networking and relaxation",
  },
  {
    icon: <MapPin size={32} />,
    title: "Prime Locations",
    description: "Strategically located in the heart of the city",
  },
];

export default function ResidencesPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="bg-surface-container-low py-xl px-gutter text-center pt-20 md:pt-32">
          <div className="max-w-3xl mx-auto mb-lg">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-md">
              Premium Residences for Professionals
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Experience luxury co-living designed for working professionals. Fully managed, all-inclusive rent, premium amenities.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-xl px-gutter max-w-[1280px] mx-auto">
          <h2 className="text-headline-md text-center mb-lg text-on-surface">Why Choose Our Residences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface-container-lowest p-lg rounded-xl shadow-warm border border-outline-variant/20 flex flex-col items-center text-center gap-sm"
              >
                <div className="text-primary">{feature.icon}</div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{feature.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Properties */}
        <section className="py-xl px-gutter max-w-[1280px] mx-auto">
          <h2 className="font-headline-md text-headline-md text-center mb-lg text-on-surface">Our Residences</h2>
          <PropertyGrid properties={properties} />
        </section>

        {/* Amenities */}
        <section className="bg-surface-container py-xl px-gutter">
          <div className="max-w-[1280px] mx-auto">
            <AmenityGrid />
          </div>
        </section>

        {/* CTA */}
        <section className="py-xl px-gutter bg-primary-container/10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Ready to Move In?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
              Get in touch with us today to book your premium residence
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-on-primary font-label-caps text-label-caps px-lg py-sm rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-warm"
            >
              Enquire Now
            </a>
          </div>
        </section>
      </main>
      <WhatsAppFab />
    </>
  );
}
