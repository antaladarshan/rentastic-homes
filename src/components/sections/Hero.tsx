import Image from "next/image";
import Link  from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const cards = [
  {
    label: "PG for Girls",
    href:  "/pg-for-girls",
    src:   "/properties/ansh/wp-01.jpg",
    alt:   "Girls PG at Rentastic Homes Ansh, Navrangpura",
  },
  {
    label: "PG for Boys",
    href:  "/pg-for-boys",
    src:   "/properties/ansh/vc-01.jpg",
    alt:   "Boys PG at Rentastic Homes Ansh, Navrangpura",
  },
];

export default function Hero() {
  const waHref = buildWhatsAppLink({ enquiryFor: "PG / co-living accommodation" });

  return (
    <section className="relative pt-20 md:pt-32 pb-xl min-h-[70vh] md:min-h-[921px] flex flex-col justify-center items-center text-center px-gutter overflow-hidden">

      {/* Background image + gradient */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEapUaBEGypiFzhuo4ktphUQIRiPcvz4I8DAzpziPBYBzgfM3KIZtZHxMe1QJuJqwiTBJn4ebiKxG2pl5mABxH67PuEgidkiodWe_mTzpriyeAfyt_tOw40jcoV6tApeVhul1l1oJrJPta1sMYFNpXS7y55eV-Hz0vLQjbJE5U1FDsdewPgNYnFHSm_Lk4jvmV0i5w54XfEGoH9ty5EUZOUm7EZSnoDAhYsuUwqXf6irlSNFt149qGuA8TzWUaA6myyDzYjM4xHBz1"
          alt="Diverse students in a warm sunlit co-living space"
          fill priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface" />
      </div>

      {/* Headline + CTA */}
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-md z-10">
        <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight">
          You Focus on <span className="text-primary italic">Living</span>,<br />
          We&apos;ll Handle the Rest.
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl hidden sm:block">
          Experience a premium co-living ecosystem designed for students and young
          professionals. Minus the chaos, plus the comfort.
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-sm bg-primary text-on-primary text-body-md font-semibold px-8 py-3 rounded-full hover:scale-[1.02] transition-transform shadow-warm"
        >
          Enquire Now <ArrowRight size={18} />
        </a>
      </div>

      {/* Preview cards */}
      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg mt-12 md:mt-16 z-10">
        {cards.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="group relative rounded-xl overflow-hidden h-40 md:h-64 shadow-warm cursor-pointer hover:-translate-y-1 transition-transform duration-300"
          >
            <Image
              src={c.src} alt={c.alt} fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 flex justify-between items-end">
              <h3 className="text-headline-sm md:text-headline-md text-white">{c.label}</h3>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
