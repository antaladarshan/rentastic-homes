import Link from "next/link";
import { Mail, Phone, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg max-w-[1280px] mx-auto px-gutter py-xl">

        {/* Brand */}
        <div className="flex flex-col gap-sm">
          <span className="text-headline-md text-primary-fixed font-bold">Rentastic Homes</span>
          <p className="text-body-sm text-surface-variant/80 mt-2 max-w-[220px] leading-relaxed">
            Premium student living designed for comfort, community, and peace of mind.
          </p>
          <div className="flex gap-sm mt-2">
            {[
              { icon: <Instagram size={16} />, href: siteConfig.socials.instagram, label: "Instagram" },
              { icon: <Facebook  size={16} />, href: siteConfig.socials.facebook,  label: "Facebook"  },
              { icon: <Youtube   size={16} />, href: "#",                           label: "YouTube"   },
              { icon: <Linkedin  size={16} />, href: "#",                           label: "LinkedIn"  },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-9 h-9 rounded-full bg-surface-variant/10 flex items-center justify-center text-primary-fixed hover:bg-primary-fixed hover:text-inverse-surface transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-sm">
          <h4 className="text-body-md font-semibold text-primary-fixed mb-2">Quick Links</h4>
          {[
            { label: "Home",      href: "/" },
            { label: "About Us",  href: "/about" },
            { label: "Students",  href: "/students" },
            { label: "City Guide",href: "/city-guide" },
            { label: "Contact",   href: "/contact" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="text-body-sm text-surface-variant/80 hover:text-primary-fixed-dim transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Property Lists */}
        <div className="flex flex-col gap-sm">
          <h4 className="text-body-md font-semibold text-primary-fixed mb-2">Property Lists</h4>
          {[
            { label: "PG for Girls",   href: "/pg-for-girls" },
            { label: "PG for Boys",    href: "/pg-for-boys" },
            { label: "Co-living Spaces",href: "/residences" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="text-body-sm text-surface-variant/80 hover:text-primary-fixed-dim transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-sm">
          <h4 className="text-body-md font-semibold text-primary-fixed mb-2">Contact Info</h4>
          <a href={`mailto:${siteConfig.email}`}
            className="text-body-sm text-surface-variant/80 hover:text-primary-fixed-dim transition-colors flex items-center gap-2">
            <Mail size={14} /> {siteConfig.email}
          </a>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="text-body-sm text-surface-variant/80 hover:text-primary-fixed-dim transition-colors flex items-center gap-2">
            <Phone size={14} /> +{siteConfig.whatsapp}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-outline/20 max-w-[1280px] mx-auto px-gutter py-md flex flex-col sm:flex-row justify-between items-center gap-sm">
        <p className="text-body-sm text-surface-variant/80">© {new Date().getFullYear()} Rentastic Homes. All rights reserved.</p>
        <div className="flex flex-wrap gap-md text-body-sm text-surface-variant/60">
          {[
            { label: "Privacy Policy",      href: "/privacy-policy" },
            { label: "Terms & Conditions",  href: "/terms-conditions" },
            { label: "Refund Policy",       href: "/refund-policy" },
            { label: "Cancellation Policy", href: "/cancellation-policy" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-primary-fixed transition-colors">{l.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
