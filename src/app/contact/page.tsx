import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import ContactForm from "@/components/ui/ContactForm";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

export const metadata: Metadata = {
  title: "Contact Us — Find Your Space",
  description: "Get in touch with Rentastic Homes. We'll help you find the perfect PG or co-living space.",
};

const contactDetails = [
  {
    icon: <Phone size={24} />,
    label: "Call / WhatsApp",
    value: `+${siteConfig.whatsapp}`,
    href:  `https://wa.me/${siteConfig.whatsapp}`,
  },
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: siteConfig.email,
    href:  `mailto:${siteConfig.email}`,
  },
  {
    icon: <MapPin size={24} />,
    label: "Offices",
    value: "Navrangpura, Satellite & Gurukul",
    href:  "https://maps.google.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-surface-container-low py-xl px-gutter text-center">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-md">
            <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface">Contact Us</h1>
            <p className="text-body-lg text-on-surface-variant">
              Find your space at Rentastic Homes. We&apos;re here to help.
            </p>
          </div>
        </section>

        {/* Contact cards */}
        <section className="py-xl px-gutter max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {contactDetails.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="bg-surface-container-lowest rounded-xl p-lg shadow-warm border border-outline-variant/20 flex flex-col items-center text-center gap-md hover:scale-[1.02] transition-transform group"
              >
                <div className="w-14 h-14 rounded-full bg-primary-container/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  {c.icon}
                </div>
                <div>
                  <p className="text-label-caps text-on-surface-variant mb-xs">{c.label}</p>
                  <p className="text-headline-sm text-on-surface">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* WhatsApp CTA banner */}
        <section className="bg-primary-fixed py-lg px-gutter">
          <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-md">
            <div className="flex flex-col gap-xs">
              <p className="text-label-caps text-on-primary-fixed">FASTEST RESPONSE</p>
              <h2 className="text-headline-sm text-on-primary-fixed">Chat with us directly on WhatsApp</h2>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-tertiary text-on-tertiary px-lg py-sm rounded-full text-label-caps font-semibold flex items-center gap-sm hover:scale-[1.02] transition-transform shadow-warm"
            >
              <MessageCircle size={18} fill="currentColor" /> Chat on WhatsApp
            </a>
          </div>
        </section>

        {/* Form + Info grid */}
        <section className="py-xl px-gutter max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            {/* Form */}
            <div className="bg-surface-container-lowest rounded-xl p-lg shadow-warm border border-outline-variant/10">
              <h2 className="text-headline-sm text-on-surface mb-xs">Get in Touch</h2>
              <p className="text-body-sm text-on-surface-variant mb-md">
                Reach out with your requirements and we&apos;ll guide you every step of the way.
              </p>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-lg">
              <div className="flex flex-col gap-sm">
                <h3 className="text-headline-sm text-on-surface">Our Properties</h3>
                {siteConfig.properties.map((p) => (
                  <div key={p.id} className="flex items-start gap-sm p-md bg-surface-container-low rounded-lg border border-outline-variant/10">
                    <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-body-md font-semibold text-on-surface">{p.name}</p>
                      <p className="text-body-sm text-on-surface-variant">{p.location}, Ahmedabad</p>
                      <a href={`https://wa.me/${p.whatsapp}`} target="_blank" rel="noopener noreferrer"
                        className="text-body-sm text-primary hover:text-primary-container transition-colors">
                        +{p.whatsapp}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Operating hours */}
              <div className="bg-surface-container-low rounded-xl p-md border border-outline-variant/10">
                <h4 className="text-headline-sm text-on-surface mb-sm">Office Hours</h4>
                {[
                  { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
                  { day: "Sunday",            time: "10:00 AM – 4:00 PM" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-xs border-b border-outline-variant/20 last:border-0">
                    <span className="text-body-sm text-on-surface-variant">{h.day}</span>
                    <span className="text-body-sm font-semibold text-on-surface">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppFab />
    </>
  );
}
