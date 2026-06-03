import Image from "next/image";
import Link  from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export interface Property {
  id:               string;
  name:             string;
  description:      string;
  badge:            string;
  href:             string;
  imageSrc:         string;
  imageAlt:         string;
  whatsappNumber?:  string; // override per-property (digits + country code)
}

interface PropertyGridProps {
  heading?:    string;
  subheading?: string;
  properties:  Property[];
}

export default function PropertyGrid({ heading = "Explore Our Stays", subheading = "Premium residences curated for safety and comfort.", properties }: PropertyGridProps) {
  return (
    <section className="bg-surface-container-lowest py-xl">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="text-center mb-lg space-y-sm">
          <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface">{heading}</h2>
          {subheading && <p className="text-body-md text-on-surface-variant">{subheading}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-lg">
          {properties.map((p) => {
            const waHref = buildWhatsAppLink({ property: p.name, enquiryFor: "PG accommodation" }, p.whatsappNumber);
            return (
              <div key={p.id} className="bg-surface rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(59,36,18,0.06)] group flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={p.imageSrc} alt={p.imageAlt} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  {/* Badge */}
                  <div className="absolute top-sm left-sm bg-surface-container/90 backdrop-blur-sm text-on-surface px-sm py-xs rounded-full text-label-caps border border-outline-variant/20 flex items-center gap-xs">
                    <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
                    {p.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-md flex flex-col gap-sm flex-1">
                  <h3 className="text-headline-sm text-on-surface">{p.name}</h3>
                  <p className="text-body-sm text-on-surface-variant line-clamp-2">{p.description}</p>

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-sm mt-auto border-t border-outline-variant/30">
                    <Link
                      href={p.href}
                      className="text-primary text-label-caps hover:text-primary-container transition-colors flex items-center gap-xs"
                    >
                      View detail <ArrowRight size={14} />
                    </Link>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-tertiary text-on-tertiary px-sm py-xs rounded-lg text-label-caps flex items-center gap-xs hover:bg-tertiary-container hover:text-on-tertiary-container transition-colors"
                    >
                      <MessageCircle size={14} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
