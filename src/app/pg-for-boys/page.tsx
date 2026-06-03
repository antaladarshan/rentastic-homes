import type { Metadata } from "next";
import ListingHero    from "@/components/sections/ListingHero";
import StayToggle     from "@/components/ui/StayToggle";
import PropertyGrid   from "@/components/sections/PropertyGrid";
import AmenityGrid    from "@/components/sections/AmenityGrid";
import EnquiryWithFaq from "@/components/ui/EnquiryWithFaq";
import WhatsAppFab    from "@/components/ui/WhatsAppFab";
import type { Property } from "@/components/sections/PropertyGrid";

export const metadata: Metadata = {
  title: "#1 PG for Boys in [City] | Rentastic Homes",
  description: "Fully furnished, secure, thoughtfully managed PG for boys. Rentastic Ansh Boys PG — your home away from home.",
};

const properties: Property[] = [
  {
    id:             "ansh-boys",
    name:           "Rentastic Ansh Boys PG",
    description:    "Spacious, fully furnished rooms built for focused living. A safe and energetic community designed exclusively for men.",
    badge:          "Limited Seats Available",
    href:           "/property/rentastic-ansh-boys-pg",
    whatsappNumber: "918282823372",
    imageSrc:       "https://lh3.googleusercontent.com/aida-public/AB6AXuCM9sS6ij3sAlKXVSMWhFqF867U7U3mKeTMeO1PRfynqIq7Nx9lS96CRqEbua5uXtZKaKJk2W3YWQCZGfv_wA7srKg1RBbos515lc4eFUk9EQrxvzfzqHMlDOGlddFphdk2BWAYY2I-MtK-kI_SolRdV78nL11IX0Vt6kk7LQ3cBfxNhkKEi-y59iwW8AqepIUwVP7Nd225mAvvUxD5Kex7hgcjw4OXrLAeEmlIh86RHuJqXm90FdUETIkSNbVR1S0_0JbaFN_TJSbN",
    imageAlt:       "Two male students in a modern stylish co-living lounge",
  },
  {
    id:             "ansh-boys-2",
    name:           "Rentastic Ansh Boys PG — Room 2",
    description:    "Private and twin-sharing rooms with study zones, high-speed Wi-Fi, and all amenities included. Built for students and professionals.",
    badge:          "Seats Filling Fast",
    href:           "/property/rentastic-ansh-boys-pg",
    whatsappNumber: "918282823372",
    imageSrc:       "https://lh3.googleusercontent.com/aida-public/AB6AXuDerRj5K53NV6TrCCfRJcULYvekoKBYX80tcBOFpLmB0EwP1BI-9q3P772wBh4Hi_VYx0HGZA4xPm3zPiN4bm2RMn6NIlA395I482EWGLXz3ssGJ6AgVw0dE3KyCaGvjmXMoPaB-msyNtNHk_90GIqAcLJoY7tHwYPb14kWIlGfCEmRgNZow1HtefQUoRFDcnHcHaMOeNlm8DUWBQRyxaM_Oxq39bZFQKYgW1u7PibB_8bbOC996fIydVH6uf_m3LoXYvgfO7SYWQze",
    imageAlt:       "Clean modern shared room for male students",
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
  { value: "Rentastic Ansh Boys PG", label: "Rentastic Ansh Boys PG" },
];

const formLocations = [
  { value: "Navrangpura",  label: "Navrangpura" },
  { value: "Gulbai Tekra", label: "Gulbai Tekra" },
];

export default function PgForBoysPage() {
  return (
    <>
      <ListingHero
        title="#1 PG for Boys in [City]"
        subtitle="Fully furnished, secure, thoughtfully managed living for male students and professionals. Checked In, Worries Out!"
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCM9sS6ij3sAlKXVSMWhFqF867U7U3mKeTMeO1PRfynqIq7Nx9lS96CRqEbua5uXtZKaKJk2W3YWQCZGfv_wA7srKg1RBbos515lc4eFUk9EQrxvzfzqHMlDOGlddFphdk2BWAYY2I-MtK-kI_SolRdV78nL11IX0Vt6kk7LQ3cBfxNhkKEi-y59iwW8AqepIUwVP7Nd225mAvvUxD5Kex7hgcjw4OXrLAeEmlIh86RHuJqXm90FdUETIkSNbVR1S0_0JbaFN_TJSbN"
        imageAlt="Male students in a stylish modern co-living lounge"
        enquiryFor="PG for Boys"
      />
      <StayToggle active="students" />
      <PropertyGrid properties={properties} />
      <AmenityGrid />
      <EnquiryWithFaq faqs={faqs} properties={formProperties} locations={formLocations} />
      <WhatsAppFab />
    </>
  );
}
