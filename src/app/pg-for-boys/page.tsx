import type { Metadata } from "next";
import ListingHero    from "@/components/sections/ListingHero";
import StayToggle     from "@/components/ui/StayToggle";
import PropertyGrid   from "@/components/sections/PropertyGrid";
import AmenityGrid    from "@/components/sections/AmenityGrid";
import EnquiryWithFaq from "@/components/ui/EnquiryWithFaq";
import WhatsAppFab    from "@/components/ui/WhatsAppFab";
import type { Property } from "@/components/sections/PropertyGrid";

export const metadata: Metadata = {
  title: "#1 PG for Boys in Ahmedabad | Rentastic Homes",
  description: "Fully furnished, secure, thoughtfully managed PG for boys in Ahmedabad. Rentastic Homes Ansh Boys & Gurukul properties — your home away from home.",
};

const properties: Property[] = [
  {
    id:             "ansh-boys",
    name:           "Rentastic Homes Ansh Boys",
    description:    "Spacious, fully furnished rooms built for focused living. A safe and energetic community at Navrangpura. ₹9,000 - ₹12,799/month",
    badge:          "Limited Seats Available",
    href:           "/property/rentastic-ansh-boys-pg",
    whatsappNumber: "918282823372",
    imageSrc:       "/properties/ansh/vc-05.jpg",
    imageAlt:       "Common area at Rentastic Homes Ansh Boys PG",
  },
  {
    id:             "gurukul-boys",
    name:           "Rentastic Homes Gurukul Road",
    description:    "Premium co-living spaces on Gurukul Road with modern facilities. ₹11,000 - ₹17,000/month. Premium location with excellent connectivity.",
    badge:          "Limited Seats Available",
    href:           "/property/gurukul-road",
    whatsappNumber:  "917359678751",
    imageSrc:       "/properties/gurukul/lifestyle-05.jpg",
    imageAlt:       "Study zone at Rentastic Homes Gurukul Road",
  },
];

const faqs = [
  { q: "Is the premises secure 24/7?",    a: "Yes, we have round-the-clock security guards, CCTV surveillance, and biometric entry systems at all entry points." },
  { q: "What kind of meals are provided?", a: "We provide three nutritious, home-cooked meals a day with a rotating menu catering to diverse preferences." },
  { q: "Is laundry service included?",    a: "Yes, professional laundry services are available twice a week for all residents." },
  { q: "Can I have guests over?",         a: "Guests are welcome in designated common areas during visiting hours. Overnight stays for guests are not permitted." },
  { q: "Are there any hidden charges?",   a: "No, our monthly rent is all-inclusive of utilities, Wi-Fi, meals, and standard housekeeping." },
];

const formProperties = [
  { value: "Rentastic Homes Ansh Boys", label: "Rentastic Homes Ansh Boys" },
  { value: "Rentastic Homes Gurukul Road", label: "Rentastic Homes Gurukul Road" },
];

const formLocations = [
  { value: "Navrangpura",  label: "Navrangpura" },
  { value: "Gurukul", label: "Gurukul" },
];

export default function PgForBoysPage() {
  return (
    <>
      <ListingHero
        title="Premium PG for Boys in Ahmedabad"
        subtitle="Fully furnished, secure, thoughtfully managed living for male students and professionals at Navrangpura and Gurukul Road."
        imageSrc="/properties/ansh/vc-05.jpg"
        imageAlt="Common area at Rentastic Homes Boys PG"
        enquiryFor="PG for Boys"
      />
      <StayToggle active="boys" />
      <PropertyGrid properties={properties} />
      <AmenityGrid />
      <EnquiryWithFaq faqs={faqs} properties={formProperties} locations={formLocations} />
      <WhatsAppFab />
    </>
  );
}
