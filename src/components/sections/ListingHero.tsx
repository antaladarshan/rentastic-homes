import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface ListingHeroProps {
  title:     string;
  subtitle:  string;
  imageSrc:  string;
  imageAlt:  string;
  enquiryFor: string;
}

export default function ListingHero({ title, subtitle, imageSrc, imageAlt, enquiryFor }: ListingHeroProps) {
  const waHref = buildWhatsAppLink({ enquiryFor });

  return (
    <section className="relative max-w-[1280px] mx-auto px-gutter pt-24 md:pt-[120px] pb-xl flex flex-col md:flex-row items-center gap-lg">
      {/* Text */}
      <div className="flex-1 flex flex-col gap-md z-10">
        <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface">
          {title}
        </h1>
        <p className="text-body-lg text-on-surface-variant">
          {subtitle}
        </p>
        <div className="pt-sm">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-sm bg-secondary-container text-on-secondary-container px-xl py-md rounded-full text-label-caps font-semibold hover:bg-secondary-fixed hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Enquire Now <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 w-full">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-warm">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
