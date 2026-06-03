"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { ArrowUpRight, ChevronDown, MapPin } from "lucide-react";

const categories = [
  {
    id: "girls",
    label: "PG for Girls",
    emoji: "👩‍🎓",
    title: "PG for Girls in Ahmedabad",
    description: "Safe, structured, and fully managed accommodations designed to support student life, routines, and everyday comfort.",
    ctaHref: "/pg-for-girls",
    properties: [
      {
        name: "Ansh Girls PG",
        location: "Navrangpura",
        price: "₹9,000/mo",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJFSnFXF_4FTemJnG6wdS9rUF55gneL5XyFAkwZodzJ7u9tyQFtauvN9J0CD20DRnNoq_VYaZsakd4xgKo7F1Zgv9Rf8Adwsp3LeaxIm9xCNDoNMt1dGm7lnSQDTN63wsQoBcsaGuquNbNa2gdU8EiBuNGpiJtkTs5jWAWpDTjJTQsLcCktskQXcmNPxTDR1W0xeQRvncLTR8ugxwJgoSatRlRtmzLKhFh6KRbOAwykMpPXmrpYbvVx7VaIpgzTUDJtFULGG7QX7m6",
        href: "/property/ansh-rentastic-girls-pg",
      },
      {
        name: "Girls Satellite PG",
        location: "Satellite",
        price: "₹11,000/mo",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX2eY9GdvMpDbpti95Wp_MftqfNM1CcxLXGDyp9GARQ1ZTd4zAeBmHxt-jI-otOK6v1Z3vp0rfNPd-c7yPztQsN51neeDMq9ujwruK38LVuLllHvCc0b6PHgJCThk2W4WLndKk9JbmQhgjd4dOSUGQj8dLzxvgZpFrzwFioV2ISTHpNzxU_8a4eoJSiH4kakLBqRwONXBRc7RwxmLHEEkKabuKQKTeSytMJlBBFjXqmzgnJ0FvhyRQOEYK_d9PTuUeOw7v4x6ZPPov",
        href: "/property/rentastic-girls-satellite",
      },
    ],
  },
  {
    id: "boys",
    label: "PG for Boys",
    emoji: "👨‍🎓",
    title: "PG for Boys in Ahmedabad",
    description: "Spacious, fully furnished rooms built for focused living. A safe and energetic community designed exclusively for men.",
    ctaHref: "/pg-for-boys",
    properties: [
      {
        name: "Ansh Boys PG",
        location: "Navrangpura",
        price: "₹9,000/mo",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM9sS6ij3sAlKXVSMWhFqF867U7U3mKeTMeO1PRfynqIq7Nx9lS96CRqEbua5uXtZKaKJk2W3YWQCZGfv_wA7srKg1RBbos515lc4eFUk9EQrxvzfzqHMlDOGlddFphdk2BWAYY2I-MtK-kI_SolRdV78nL11IX0Vt6kk7LQ3cBfxNhkKEi-y59iwW8AqepIUwVP7Nd225mAvvUxD5Kex7hgcjw4OXrLAeEmlIh86RHuJqXm90FdUETIkSNbVR1S0_0JbaFN_TJSbN",
        href: "/property/ansh-boys",
      },
      {
        name: "Gurukul Road PG",
        location: "Gurukul",
        price: "₹11,000/mo",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDerRj5K53NV6TrCCfRJcULYvekoKBYX80tcBOFpLmB0EwP1BI-9q3P772wBh4Hi_VYx0HGZA4xPm3zPiN4bm2RMn6NIlA395I482EWGLXz3ssGJ6AgVw0dE3KyCaGvjmXMoPaB-msyNtNHk_90GIqAcLJoY7tHwYPb14kWIlGfCEmRgNZow1HtefQUoRFDcnHcHaMOeNlm8DUWBQRyxaM_Oxq39bZFQKYgW1u7PibB_8bbOC996fIydVH6uf_m3LoXYvgfO7SYWQze",
        href: "/property/gurukul-road",
      },
    ],
  },
];

interface MegaMenuProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MegaMenu({ isOpen, onOpenChange }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const activeData =
    categories.find((c) => c.id === activeCategory) || categories[0];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    if (isOpen) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onOpenChange]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        triggerRef.current &&
        panelRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        !panelRef.current.contains(e.target as Node)
      ) {
        onOpenChange(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onOpenChange]);

  const handleMouseEnter = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    onOpenChange(true);
  }, [onOpenChange]);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => onOpenChange(false), 150);
  }, [onOpenChange]);

  return (
    <div className="relative hidden lg:block">
      {/* Trigger */}
      <div ref={triggerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button
          onClick={() => onOpenChange(!isOpen)}
          className="flex items-center gap-xs py-2 text-body-md text-on-surface-variant hover:text-primary transition-colors"
          aria-expanded={isOpen}
        >
          Properties
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Mega Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: easeOut }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 top-full w-screen -ml-gutter z-50"
            style={{ left: "50%", transform: "translateX(-50%)", width: "100vw" }}
          >
            {/* Top accent line */}
            <div className="h-[3px] bg-gradient-to-r from-primary via-primary/60 to-secondary-container" />

            <div className="bg-white shadow-[0_24px_60px_rgba(30,15,5,0.14)]">
              <div className="max-w-[1280px] mx-auto px-gutter py-xl">
                <div className="grid grid-cols-[220px_1fr] gap-xl">

                  {/* ── LEFT SIDEBAR ── */}
                  <div className="flex flex-col gap-xs">
                    <p className="text-label-caps text-on-surface-variant/50 px-sm mb-xs tracking-widest">
                      Browse by type
                    </p>

                    {categories.map((cat) => {
                      const active = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          onMouseEnter={() => setActiveCategory(cat.id)}
                          className={`w-full text-left px-md py-md rounded-xl transition-all duration-200 flex items-center gap-sm group/tab ${
                            active
                              ? "bg-primary text-on-primary shadow-md"
                              : "text-on-surface hover:bg-surface-container"
                          }`}
                        >
                          <span className="text-xl leading-none">{cat.emoji}</span>
                          <div className="flex-1 min-w-0">
                            <p className={`font-semibold text-body-md leading-tight ${active ? "text-on-primary" : "text-on-surface"}`}>
                              {cat.label}
                            </p>
                            <p className={`text-label-sm mt-[2px] ${active ? "text-on-primary/70" : "text-on-surface-variant"}`}>
                              {cat.properties.length} properties
                            </p>
                          </div>
                          <ArrowUpRight
                            size={15}
                            className={`shrink-0 transition-all duration-200 ${
                              active
                                ? "opacity-100 text-on-primary"
                                : "opacity-0 group-hover/tab:opacity-60 text-on-surface-variant"
                            }`}
                          />
                        </button>
                      );
                    })}

                    {/* Book a visit CTA */}
                    <div className="mt-auto pt-md border-t border-outline-variant/20">
                      <Link
                        href="/contact"
                        onClick={() => onOpenChange(false)}
                        className="flex items-center justify-center gap-xs w-full py-sm px-md rounded-xl bg-surface-container text-on-surface text-body-sm font-medium hover:bg-surface-container-high transition-colors"
                      >
                        Book a Site Visit
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>

                  {/* ── RIGHT CONTENT ── */}
                  <div>
                    {/* Section header */}
                    <div className="flex items-start justify-between mb-lg">
                      <div>
                        <h3 className="text-headline-sm text-on-surface font-bold">
                          {activeData.title}
                        </h3>
                        <p className="text-body-sm text-on-surface-variant mt-xs max-w-sm">
                          {activeData.description}
                        </p>
                      </div>
                      <Link
                        href={activeData.ctaHref}
                        onClick={() => onOpenChange(false)}
                        className="shrink-0 flex items-center gap-xs text-primary font-semibold text-body-sm hover:gap-sm transition-all"
                      >
                        View all
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>

                    {/* Property Cards */}
                    <div className="grid grid-cols-2 gap-md">
                      {activeData.properties.map((property) => (
                        <Link
                          key={property.href}
                          href={property.href}
                          onClick={() => onOpenChange(false)}
                        >
                          <div className="relative h-[200px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
                            <img
                              src={property.image}
                              alt={property.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                            {/* Location badge — top left */}
                            <div className="absolute top-3 left-3">
                              <span className="inline-flex items-center gap-[3px] px-sm py-[3px] bg-black/40 backdrop-blur-sm text-white text-label-sm rounded-full border border-white/20">
                                <MapPin size={10} />
                                {property.location}
                              </span>
                            </div>

                            {/* Bottom row: name + price + arrow */}
                            <div className="absolute bottom-0 left-0 right-0 p-md flex items-end justify-between gap-sm">
                              <div className="min-w-0">
                                <p className="text-white font-semibold text-body-md leading-snug line-clamp-1">
                                  {property.name}
                                </p>
                                <p className="text-white/70 text-label-sm mt-[2px]">
                                  Starting {property.price}
                                </p>
                              </div>
                              <div className="shrink-0 w-9 h-9 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                <ArrowUpRight size={16} strokeWidth={2.5} />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom info strip */}
                    <div className="mt-md pt-md border-t border-outline-variant/15 flex items-center gap-md">
                      <span className="text-label-sm text-on-surface-variant">
                        🏠 All properties in Ahmedabad
                      </span>
                      <span className="text-label-sm text-on-surface-variant">
                        ✓ Fully managed &amp; furnished
                      </span>
                      <span className="text-label-sm text-on-surface-variant">
                        🔒 24/7 Security
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
