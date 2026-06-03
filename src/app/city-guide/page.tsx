import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Train, Bus, Car, Coffee, Landmark, ArrowRight } from "lucide-react";
import { propertiesData } from "@/data/properties";
import WhatsAppFab from "@/components/ui/WhatsAppFab";
import CityGuideFaq from "@/components/ui/CityGuideFaq";

export const metadata: Metadata = {
  title: "Student City Guide — Ahmedabad 2025",
  description: "Everything you need to know about living in Ahmedabad as a student or young professional — from localities and transport to food and must-visit spots.",
};

const localities = [
  { name: "Navrangpura",       desc: "The academic heart of Ahmedabad. Home to Gujarat University, IIMA, and CEPT, making it the most popular locality for students. Buzzing cafes, bookstores, and coaching centres line every street." },
  { name: "Satellite",         desc: "Premium residential zone popular with working professionals and students. Excellent connectivity, top malls like Iscon Mega Mall, and proximity to SG Highway make it highly desirable." },
  { name: "Gulbai Tekra",      desc: "An affordable, student-friendly neighbourhood adjacent to Navrangpura. Close to several colleges and packed with budget eateries, stationery shops, and coaching classes." },
  { name: "Prahladnagar",      desc: "Modern, upscale area loved by young professionals. Excellent social infrastructure — restaurants, gyms, co-working spaces — and easy access to the western business districts." },
  { name: "Vastrapur",         desc: "Vibrant locality around the beautiful Vastrapur Lake. Great for evening walks, a thriving food scene, and strong connectivity via BRTS to most colleges and offices." },
];

const restaurants = [
  { name: "Banjara",       type: "Multi-cuisine",  area: "Navrangpura" },
  { name: "The Dark Roast",type: "Café & Coffee",  area: "Satellite" },
  { name: "VarieTea",      type: "Tea & Snacks",   area: "Paldi" },
  { name: "Java+",         type: "Café",           area: "Vastrapur" },
  { name: "Sphere Lounge", type: "Rooftop Dining", area: "SG Highway" },
  { name: "The Project Café", type: "All-day Dining", area: "Prahlad Nagar" },
];

const attractions = [
  { name: "Sabarmati Ashram",   type: "Heritage",    desc: "Mahatma Gandhi's historic residence on the banks of the Sabarmati river." },
  { name: "Kankaria Lake",      type: "Recreation",  desc: "A 500-year-old lake with a zoo, water park, and evening light shows." },
  { name: "Adalaj Stepwell",    type: "Heritage",    desc: "A stunning 15th-century stepwell — a masterpiece of Indo-Islamic architecture." },
  { name: "Law Garden",         type: "Market & Park", desc: "Famous for its vibrant night market selling handicrafts, clothes, and street food." },
  { name: "Gandhi Ashram",      type: "Heritage",    desc: "A peaceful museum and heritage complex celebrating Gandhian philosophy." },
  { name: "Science City",       type: "Education",   desc: "One of Asia's largest science parks — perfect for a curious mind." },
];

const faqs = [
  { q: "What does the Ahmedabad City Guide cover?",      a: "It covers the best localities for students, transport options, top restaurants and cafes, tourist attractions, and accommodation options across Ahmedabad." },
  { q: "What are the best areas for students in Ahmedabad?", a: "Navrangpura and Gulbai Tekra are the top picks for students due to proximity to universities, affordable living, and a student-friendly vibe." },
  { q: "What should I consider when choosing a PG in Ahmedabad?", a: "Key factors include proximity to your college, safety, included amenities (meals, Wi-Fi, housekeeping), price, and the reputation of the management." },
  { q: "How is Ahmedabad for first-time students?",     a: "Ahmedabad is one of the safest cities in India with excellent food, a strong student community, and a relatively low cost of living compared to Mumbai or Bengaluru." },
  { q: "Is Ahmedabad safe for female students?",        a: "Ahmedabad consistently ranks among the safest cities in India, especially in student-heavy areas like Navrangpura and Satellite with well-lit roads and active neighbourhoods." },
];

export default function CityGuidePage() {
  const featuredProps = propertiesData.slice(0, 3);

  return (
    <>
      <main className="pt-16">
        {/* Hero */}
        <section className="relative min-h-[500px] flex flex-col justify-center items-center text-center px-gutter py-xl overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZKk6PKXFvq9vAxl4k3od7RM85tBG_hjh-Aya87inic3AH789jmquHtRgvwpFUSwDZXproavwVVelh_QqczgBATyOhrRqGIswPffMwW0yFjwHGRx7Spfhp-uPKNcm0m_KvEFMWi9y7dm8Qo8Nv5QDE8frDUrQLygcJeCqNH1VfONXzS1GxFuog1BAxp80182lERkxpH5JHo25Nxea-3T2U1fghGQHvHd-GMzmw0MJRohf39HZ603RfFRihyXXN9KIkI5bA4XGvtW-k"
            alt="Ahmedabad cityscape"
            fill priority className="object-cover -z-10"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-on-surface/50 -z-10" />
          <div className="relative z-10 flex flex-col gap-md max-w-3xl">
            <span className="text-label-caps text-white/70 uppercase tracking-widest">Student City Guide</span>
            <h1 className="text-display-lg-mobile md:text-display-lg text-white">Reside and Explore Ahmedabad</h1>
            <p className="text-body-lg text-white/80">India&apos;s first UNESCO World Heritage City — and one of its best student cities.</p>
            <a href="#about" className="inline-flex items-center gap-sm bg-white/20 backdrop-blur-sm border border-white/30 text-white px-lg py-sm rounded-full text-label-caps hover:bg-white/30 transition-colors w-fit mx-auto">
              Explore the Guide <ArrowRight size={14} />
            </a>
          </div>
        </section>

        {/* Sticky sub-nav */}
        <nav className="sticky top-16 z-40 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 shadow-sm overflow-x-auto">
          <div className="max-w-[1280px] mx-auto px-gutter py-sm flex gap-sm whitespace-nowrap">
            {[
              { label: "About",          href: "#about" },
              { label: "Best PG",        href: "#accommodation" },
              { label: "Localities",     href: "#localities" },
              { label: "Living Here",    href: "#living" },
              { label: "Food & Cafes",   href: "#food" },
              { label: "Attractions",    href: "#attractions" },
              { label: "FAQ",            href: "#faq" },
            ].map((n) => (
              <a key={n.href} href={n.href}
                className="px-md py-xs rounded-full text-label-caps text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors shrink-0">
                {n.label}
              </a>
            ))}
          </div>
        </nav>

        {/* About Ahmedabad */}
        <section id="about" className="py-xl px-gutter max-w-[1280px] mx-auto scroll-mt-32">
          <div className="max-w-3xl">
            <h2 className="text-headline-md text-on-surface mb-md">About Ahmedabad</h2>
            <p className="text-body-lg text-on-surface-variant mb-md">
              Ahmedabad is the largest city in Gujarat and a major hub for education, startups, textiles, and healthcare.
              Home to world-class institutions like IIM Ahmedabad, CEPT University, Nirma University, and Gujarat
              University, the city draws students and professionals from across India. In 2017, UNESCO designated
              Ahmedabad as India&apos;s first World Heritage City, recognising its extraordinary blend of history,
              architecture, and vibrant street life.
            </p>
            <div className="grid md:grid-cols-2 gap-md mt-md">
              <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant/10">
                <h3 className="text-headline-sm text-on-surface mb-xs">Geography</h3>
                <p className="text-body-sm text-on-surface-variant">
                  The Sabarmati river flows through the heart of the city, dividing it into the historic East bank and
                  the modern West bank. The western suburbs — Satellite, Prahladnagar, and Bopal — are where most
                  students and professionals choose to live today.
                </p>
              </div>
              <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant/10">
                <h3 className="text-headline-sm text-on-surface mb-xs">Weather</h3>
                <p className="text-body-sm text-on-surface-variant">
                  Three seasons: Hot (March–June), Monsoon (July–September), and Winter (October–February). Winter
                  is particularly pleasant at 10–20°C. Summer temperatures can reach 40°C+, so a good AC room
                  is essential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Accommodation */}
        <section id="accommodation" className="bg-surface-container-low py-xl px-gutter scroll-mt-32">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-headline-md text-on-surface mb-sm">Best Accommodation in Ahmedabad</h2>
            <p className="text-body-md text-on-surface-variant mb-lg">Carefully curated properties designed around student and professional life.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {featuredProps.map((p) => (
                <Link key={p.slug} href={`/property/${p.slug}`}
                  className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-warm group hover:-translate-y-1 transition-transform">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={p.gallery[0].src} alt={p.gallery[0].alt} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
                  </div>
                  <div className="p-md">
                    <h3 className="text-headline-sm text-on-surface mb-xs">{p.name}</h3>
                    <p className="text-body-sm text-on-surface-variant flex items-center gap-xs">
                      <MapPin size={14} className="text-primary" /> {p.address}
                    </p>
                    <span className="inline-block mt-sm text-label-caps text-primary hover:text-primary-container">
                      View property →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top Localities */}
        <section id="localities" className="py-xl px-gutter max-w-[1280px] mx-auto scroll-mt-32">
          <h2 className="text-headline-md text-on-surface mb-lg">Top Localities in Ahmedabad</h2>
          <div className="flex flex-col gap-sm">
            {localities.map((l) => (
              <div key={l.name} className="bg-surface-container-low rounded-xl p-md border border-outline-variant/10 flex gap-md items-start">
                <div className="w-2 h-2 rounded-full bg-primary-container mt-2 shrink-0" />
                <div>
                  <h3 className="text-headline-sm text-on-surface mb-xs">{l.name}</h3>
                  <p className="text-body-sm text-on-surface-variant">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Living in Ahmedabad */}
        <section id="living" className="bg-surface-container py-xl px-gutter scroll-mt-32">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-xl items-start">
            <div>
              <h2 className="text-headline-md text-on-surface mb-lg">Living in Ahmedabad</h2>
              {[
                { icon: <Train size={20} />, title: "Ahmedabad Metro",  body: "The Metro connects Vastral to Thaltej (East–West corridor) and Motera to APMC (North–South). Navrangpura station is one of the busiest stops." },
                { icon: <Bus   size={20} />, title: "BRTS Network",     body: "Ahmedabad's Bus Rapid Transit System (BRTS) is one of India's best — reliable, affordable, and covers most student-heavy routes." },
                { icon: <Car   size={20} />, title: "Auto & App Cabs",  body: "Auto-rickshaws are everywhere and affordable. Ola and Uber are widely available for late-night travel." },
              ].map((t) => (
                <div key={t.title} className="flex gap-md items-start mb-md p-md bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                  <div className="text-primary mt-0.5 shrink-0">{t.icon}</div>
                  <div>
                    <h3 className="text-headline-sm text-on-surface mb-xs">{t.title}</h3>
                    <p className="text-body-sm text-on-surface-variant">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-primary-fixed rounded-xl p-lg flex flex-col gap-md">
              <h3 className="text-headline-sm text-on-surface">Quick Facts</h3>
              {[
                ["Population", "8+ Million"],
                ["Key Colleges", "IIM-A, CEPT, Nirma, Gujarat University"],
                ["Average PG Rent", "₹8,000 – ₹20,000 / month"],
                ["Best Season to Visit", "October – February"],
                ["Language", "Gujarati, Hindi, English"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-outline-variant/20 pb-xs last:border-0">
                  <span className="text-body-sm text-on-surface-variant">{k}</span>
                  <span className="text-body-sm font-semibold text-on-surface">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurants & Cafes */}
        <section id="food" className="py-xl px-gutter max-w-[1280px] mx-auto scroll-mt-32">
          <div className="flex items-center gap-sm mb-lg">
            <Coffee size={24} className="text-primary" />
            <h2 className="text-headline-md text-on-surface">Best Restaurants &amp; Cafés</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-md">
            {restaurants.map((r) => (
              <div key={r.name} className="bg-surface-container-lowest rounded-xl p-md shadow-warm border border-outline-variant/10 flex flex-col gap-xs hover:-translate-y-0.5 transition-transform">
                <h3 className="text-headline-sm text-on-surface">{r.name}</h3>
                <span className="text-label-caps text-primary-container">{r.type}</span>
                <p className="text-body-sm text-on-surface-variant flex items-center gap-xs">
                  <MapPin size={12} /> {r.area}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tourist Attractions */}
        <section id="attractions" className="bg-surface-container-low py-xl px-gutter scroll-mt-32">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-center gap-sm mb-lg">
              <Landmark size={24} className="text-primary" />
              <h2 className="text-headline-md text-on-surface">Tourist Attractions</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-md">
              {attractions.map((a) => (
                <div key={a.name} className="bg-surface-container-lowest rounded-xl p-md shadow-warm border border-outline-variant/10 flex flex-col gap-sm">
                  <span className="text-label-caps text-primary">{a.type}</span>
                  <h3 className="text-headline-sm text-on-surface">{a.name}</h3>
                  <p className="text-body-sm text-on-surface-variant">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-primary-container py-xl px-gutter text-center">
          <div className="max-w-3xl mx-auto flex flex-col gap-md">
            <h2 className="text-headline-md text-on-primary-container">Ahmedabad — A City That Grows With You</h2>
            <p className="text-body-lg text-on-primary-container/80">
              Whether you&apos;re here to study, start a career, or simply explore — Ahmedabad offers a quality of life
              that few Indian cities can match. And with Rentastic Homes, you can focus entirely on your goals while
              we handle every detail of your living experience.
            </p>
            <Link href="/pg-for-girls" className="inline-flex items-center gap-sm bg-on-primary-container text-primary-container px-lg py-sm rounded-full text-label-caps font-semibold hover:opacity-90 transition-opacity w-fit mx-auto">
              Find Your PG in Ahmedabad <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-xl px-gutter max-w-[1280px] mx-auto scroll-mt-32">
          <h2 className="text-headline-md text-on-surface mb-lg">Frequently Asked Questions</h2>
          <CityGuideFaq faqs={faqs} />
        </section>
      </main>
      <WhatsAppFab />
    </>
  );
}
