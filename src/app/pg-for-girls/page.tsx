import type { Metadata } from "next";
import ListingHero    from "@/components/sections/ListingHero";
import StayToggle     from "@/components/ui/StayToggle";
import PropertyGrid   from "@/components/sections/PropertyGrid";
import AmenityGrid    from "@/components/sections/AmenityGrid";
import EnquiryWithFaq from "@/components/ui/EnquiryWithFaq";
import WhatsAppFab    from "@/components/ui/WhatsAppFab";
import type { Property } from "@/components/sections/PropertyGrid";

export const metadata: Metadata = {
  title: "#1 PG for Girls in Ahmedabad | Rentastic Homes",
  description: "Fully furnished, secure, thoughtfully managed PG for girls in Ahmedabad. Ansh Rentastic Girls PG & Rentastic Girls Satellite — your home away from home.",
};

const properties: Property[] = [
  {
    id:              "ansh-girls",
    name:            "Rentastic Homes Ansh Girls",
    description:     "Spacious, fully furnished rooms with premium amenities. A safe and welcoming community designed exclusively for women at Navrangpura.",
    badge:           "Limited Seats Available",
    href:            "/property/ansh-rentastic-girls-pg",
    whatsappNumber:  "918282823372",
    imageSrc:        "https://lh3.googleusercontent.com/aida-public/AB6AXuDJFSnFXF_4FTemJnG6wdS9rUF55gneL5XyFAkwZodzJ7u9tyQFtauvN9J0CD20DRnNoq_VYaZsakd4xgKo7F1Zgv9Rf8Adwsp3LeaxIm9xCNDoNMt1dGm7lnSQDTN63wsQoBcsaGuquNbNa2gdU8EiBuNGpiJtkTs5jWAWpDTjJTQsLcCktskQXcmNPxTDR1W0xeQRvncLTR8ugxwJgoSatRlRtmzLKhFh6KRbOAwykMpPXmrpYbvVx7VaIpgzTUDJtFULGG7QX7m6",
    imageAlt:        "Premium bedroom in Rentastic Homes Ansh Girls PG",
  },
  {
    id:              "satellite-girls",
    name:            "Rentastic Homes Girls Satellite",
    description:     "Premium 3 & 4-sharing AC rooms at Satellite location. Starting from ₹11,000/month with world-class safety and amenities.",
    badge:           "Limited Seats Available",
    href:            "/property/rentastic-girls-satellite",
    whatsappNumber:  "918511671066",
    imageSrc:        "https://lh3.googleusercontent.com/aida-public/AB6AXuDX2eY9GdvMpDbpti95Wp_MftqfNM1CcxLXGDyp9GARQ1ZTd4zAeBmHxt-jI-otOK6v1Z3vp0rfNPd-c7yPztQsN51neeDMq9ujwruK38LVuLllHvCc0b6PHgJCThk2W4WLndKk9JbmQhgjd4dOSUGQj8dLzxvgZpFrzwFioV2ISTHpNzxU_8a4eoJSiH4kakLBqRwONXBRc7RwxmLHEEkKabuKQKTeSytMJlBBFjXqmzgnJ0FvhyRQOEYK_d9PTuUeOw7v4x6ZPPov",
    imageAlt:        "Bedroom in Rentastic Homes Girls Satellite",
  },
];

const faqs = [
  { q: "Is the premises secure 24/7?",    a: "Yes, we have round-the-clock security guards, CCTV surveillance, and secure biometric entry systems." },
  { q: "What kind of meals are provided?", a: "We provide three nutritious, home-cooked meals a day with a rotating menu that accommodates basic dietary preferences." },
  { q: "Is laundry service included?",    a: "Yes, professional laundry services are available twice a week for all residents." },
  { q: "What is the visitor policy?",     a: "Female visitors are allowed in designated areas during specific visiting hours to ensure everyone's privacy and comfort." },
  { q: "Are there any hidden charges?",   a: "No, our monthly rent is all-inclusive of utilities, Wi-Fi, meals, and standard housekeeping." },
];

const formProperties = [
  { value: "Ansh Rentastic Girls PG",    label: "Ansh Rentastic Girls PG" },
  { value: "Rentastic Girls Satellite",  label: "Rentastic Girls Satellite" },
];

const formLocations = [
  { value: "Navrangpura",      label: "Navrangpura" },
  { value: "Satellite",        label: "Satellite" },
  { value: "Gulbai Tekra",     label: "Gulbai Tekra" },
];

export default function PgForGirlsPage() {
  return (
    <>
      <ListingHero
        title="#1 PG for Girls in [City]"
        subtitle="Fully furnished, secure, thoughtfully managed living. Experience a home away from home designed for comfort and peace of mind."
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Q6J0ZSBzXsg4-k_dHjlYGo6KIVGgrzMypu3FaFoNJ7-3KqYx-6mkGazVgJVYedWRmDGnXtUWA80fLl8BIkhKbyKIf90W0il-owI5H96k14P8p1buTdmOsrCWjC9xiEthVp2k_gTVzImuG1Y7u4K45EKu5gLq7TGZjIQOSTeeUhovU-iq2SZblgfa5NIccbqrBObAi-7cBDR4tpBq9biYqRPxAHLyJPCFpx29oUyXKsPhT2V0fSqg7n3vorsOTtuJyJmqGz2DwgGl"
        imageAlt="Bright modern co-living space for women"
        enquiryFor="PG for Girls"
      />
      <StayToggle active="students" />
      <PropertyGrid properties={properties} />
      <AmenityGrid />
      <EnquiryWithFaq faqs={faqs} properties={formProperties} locations={formLocations} />
      <WhatsAppFab />
    </>
  );
}
