"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, Instagram, Facebook, Youtube, Linkedin, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: swap to Mailchimp/Formspree for a real list
    window.open(`mailto:${siteConfig.email}?subject=Newsletter Subscription&body=Please subscribe me: ${email}`, "_blank");
    setEmail("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-xs mt-sm">
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 min-w-0 px-md py-xs rounded-lg bg-surface-variant/10 border border-surface-variant/20 text-primary-fixed text-body-sm placeholder:text-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary-fixed/30"
      />
      <button
        type="submit"
        className="shrink-0 w-9 h-9 rounded-lg bg-primary-fixed text-inverse-surface flex items-center justify-center hover:opacity-90 transition-opacity"
        aria-label="Subscribe"
      >
        <Send size={15} />
      </button>
    </form>
  );
}

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
          <p className="text-body-sm text-surface-variant/70 mt-3">Get student living tips:</p>
          <NewsletterSignup />
          <div className="flex gap-sm mt-3">
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
            { label: "Home",       href: "/" },
            { label: "About Us",   href: "/about" },
            { label: "Blog",       href: "/blog" },
            { label: "City Guide", href: "/city-guide" },
            { label: "Contact",    href: "/contact" },
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
            { label: "PG for Girls",  href: "/pg-for-girls" },
            { label: "PG for Boys",   href: "/pg-for-boys" },
            { label: "Navrangpura",   href: "/navrangpura" },
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
