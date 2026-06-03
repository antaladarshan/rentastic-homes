"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import MegaMenu from "@/components/ui/MegaMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "City Guide", href: "/city-guide" },
  { label: "Contact", href: "/contact" },
];

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = () => setMobileOpen(false);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [mobileOpen]);

  if (!mounted) return null;

  const waHref = buildWhatsAppLink({});

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-lg shadow-sm border-b border-outline-variant/20"
          : "bg-surface/80 backdrop-blur-md border-b border-outline-variant/10"
      }`}
    >
      <nav className="max-w-container-max mx-auto px-gutter h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-headline-sm font-bold text-primary shrink-0 hover:text-primary-container transition-colors"
        >
          Rentastic Homes
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-md text-on-surface-variant hover:text-primary transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}

          {/* Mega Menu */}
          <MegaMenu isOpen={megaMenuOpen} onOpenChange={setMegaMenuOpen} />
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-sm">
          {/* Desktop Actions */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high hover:text-primary transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-primary text-on-primary text-label-caps font-semibold px-lg py-2 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm"
          >
            Enquire
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen(!mobileOpen);
            }}
            className="md:hidden p-2 text-primary hover:text-primary-container transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden bg-surface border-t border-outline-variant/10 overflow-y-auto max-h-[calc(100vh-64px)]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-gutter py-md space-y-xs">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-md py-sm text-body-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Properties Accordion */}
            <MobilePropertiesAccordion />

            <div className="border-t border-outline-variant/20 pt-md mt-md">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block w-full bg-primary text-on-primary text-center text-body-md font-semibold py-2 rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-colors"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobilePropertiesAccordion() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "girls",
      label: "PG for Girls",
      href: "/pg-for-girls",
    },
    {
      id: "boys",
      label: "PG for Boys",
      href: "/pg-for-boys",
    },
    {
      id: "residences",
      label: "Residences",
      href: "/residences",
    },
  ];

  return (
    <div className="space-y-xs">
      <div className="px-md py-sm text-body-md font-semibold text-on-surface">
        Properties
      </div>
      <div className="pl-md space-y-xs border-l-2 border-outline-variant/30">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="block px-md py-sm text-body-md text-on-surface-variant hover:text-primary transition-colors"
          >
            {category.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
