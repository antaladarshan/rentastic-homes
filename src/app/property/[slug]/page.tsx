import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MapPin, Heart, Star, Users } from "lucide-react";
import { propertiesData } from "@/data/properties";
import Gallery            from "@/components/property/Gallery";
import RoomCards          from "@/components/property/RoomCards";
import AmenityTabs        from "@/components/property/AmenityTabs";
import PoliciesAccordion  from "@/components/property/PoliciesAccordion";
import SidebarForm        from "@/components/property/SidebarForm";
import PropertyMap        from "@/components/property/PropertyMap";
import ScheduleVisitForm  from "@/components/ui/ScheduleVisitForm";
import TrustBadges        from "@/components/sections/TrustBadges";
import WhatsAppFab        from "@/components/ui/WhatsAppFab";

export function generateStaticParams() {
  return propertiesData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = propertiesData.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name} — PG in ${p.address.split(",")[0]}`,
    description: p.about[0],
  };
}

const TRUST_ICONS = [
  <Heart size={32} className="text-primary" key="heart" />,
  <Star  size={32} className="text-primary-container" fill="currentColor" key="star" />,
  <Users size={32} className="text-secondary" key="users" />,
];

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = propertiesData.find((p) => p.slug === slug);
  if (!property) notFound();

  return (
    <>
      <main className="flex-grow pt-20 pb-xl px-gutter md:px-lg max-w-[1280px] mx-auto w-full">

        {/* Gallery */}
        <section className="mt-md mb-xl relative">
          <Gallery images={property.gallery} />
        </section>

        {/* Content + Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">

          {/* ── Left column ── */}
          <div className="lg:col-span-8 flex flex-col gap-xl">

            {/* Title block */}
            <section>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-md mb-md">
                <div>
                  <h1 className="text-display-lg-mobile md:text-display-lg text-on-background mb-xs">
                    {property.name}
                  </h1>
                  <div className="flex items-center text-on-surface-variant text-body-sm gap-xs mt-sm">
                    <MapPin size={16} className="text-primary shrink-0" />
                    <span>{property.address}</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-xs bg-error-container/30 text-error px-sm py-xs rounded-full text-label-caps whitespace-nowrap self-start border border-error/20">
                  <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
                  Limited Seats Available
                </div>
              </div>
              <div className="flex flex-wrap gap-sm mt-md">
                {property.sharingTypes.map((t) => (
                  <span key={t} className="bg-secondary-fixed/50 text-on-secondary-fixed px-sm py-xs rounded-md border border-outline-variant/30 text-body-sm">
                    {t}
                  </span>
                ))}
              </div>
            </section>

            {/* Trust stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-sm">
              {property.trustStats.map((s, i) => (
                <div key={i} className="bg-surface-container-lowest rounded-xl p-md flex flex-col items-center text-center border border-outline-variant/20 shadow-[0_4px_20px_rgba(59,36,18,0.06)] hover:scale-[1.02] transition-transform">
                  {TRUST_ICONS[i]}
                  <h3 className="text-headline-sm text-on-surface mt-sm mb-xs">{s.label}</h3>
                  <p className="text-body-sm text-on-surface-variant">{s.sub}</p>
                </div>
              ))}
            </section>

            {/* About */}
            <section>
              <h2 className="text-headline-md text-on-background mb-md">About the Property</h2>
              <div className="flex flex-col gap-md text-body-md text-on-surface-variant">
                {property.about.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </section>

            {/* Room cards */}
            <RoomCards
              rooms={property.rooms}
              propertyName={property.name}
              whatsappNumber={property.whatsappNumber}
            />

            {/* Amenity tabs */}
            <AmenityTabs
              roomAmenities={property.roomAmenities}
              propertyAmenities={property.propertyAmenities}
            />

            {/* Map */}
            <PropertyMap address={property.address} name={property.name} />

            {/* Policies */}
            <PoliciesAccordion policies={property.policies} />
          </div>

          {/* ── Right column (sticky sidebar) ── */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 flex flex-col gap-lg">
              <div id="enquire">
                <SidebarForm
                  propertyName={property.name}
                  sharingTypes={property.sharingTypes}
                  whatsappNumber={property.whatsappNumber}
                />
              </div>
              <ScheduleVisitForm
                propertyName={property.name}
                whatsappNumber={property.whatsappNumber}
              />
            </div>
          </div>

        </div>

        {/* Trust badges */}
        <TrustBadges />
      </main>

      <WhatsAppFab />
    </>
  );
}
