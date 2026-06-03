"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const links = [
  { label: "Home",        href: "/" },
  { label: "About Us",    href: "/about" },
  { label: "PG for Girls",href: "/pg-for-girls" },
  { label: "PG for Boys", href: "/pg-for-boys" },
  { label: "Residences",  href: "/residences" },
  { label: "City Guide",  href: "/city-guide" },
  { label: "Contact",     href: "/contact" },
];

export default function Nav() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mobile menu on outside click */
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  const waHref = buildWhatsAppLink({});

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-surface/95 backdrop-blur-md shadow-sm border-b border-outline-variant/30"
               : "bg-surface/90 backdrop-blur-sm border-b border-outline-variant/20"
    }`}>
      <div className="flex items-center justify-between max-w-[1280px] mx-auto px-gutter h-16">

        {/* Logo */}
        <Link href="/" className="text-headline-sm text-primary font-bold shrink-0 tracking-tight">
          Rentastic Homes
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-md">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-sm">
          <a href={waHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest text-on-surface hover:text-primary transition-colors">
            <MessageCircle size={20} />
          </a>
          <a href={waHref} target="_blank" rel="noopener noreferrer"
            className="bg-primary text-on-primary text-body-sm font-semibold px-6 py-2.5 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-warm">
            Enquire Now
          </a>
        </div>

        {/* Mobile burger */}
        <button onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
          aria-label="Toggle menu" aria-expanded={open}
          className="md:hidden p-2 text-primary">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-surface border-t border-outline-variant/30 px-gutter py-md flex flex-col gap-md"
          onClick={(e) => e.stopPropagation()}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-body-md text-on-surface-variant hover:text-primary transition-colors py-1">
              {l.label}
            </Link>
          ))}
          <a href={waHref} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
            className="mt-2 bg-primary text-on-primary text-center text-body-md font-semibold py-3 rounded-full">
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}
