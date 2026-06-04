"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { ArrowUpRight, ChevronDown, MapPin } from "lucide-react";

const CATEGORIES = [
  {
    id: "girls",
    label: "PG for Girls",
    icon: "👩‍🎓",
    viewAllHref: "/pg-for-girls",
    properties: [
      {
        slug: "ansh-rentastic-girls-pg",
        name: "Ansh Girls PG",
        location: "Navrangpura",
        price: "₹9,000/mo",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJFSnFXF_4FTemJnG6wdS9rUF55gneL5XyFAkwZodzJ7u9tyQFtauvN9J0CD20DRnNoq_VYaZsakd4xgKo7F1Zgv9Rf8Adwsp3LeaxIm9xCNDoNMt1dGm7lnSQDTN63wsQoBcsaGuquNbNa2gdU8EiBuNGpiJtkTs5jWAWpDTjJTQsLcCktskQXcmNPxTDR1W0xeQRvncLTR8ugxwJgoSatRlRtmzLKhFh6KRbOAwykMpPXmrpYbvVx7VaIpgzTUDJtFULGG7QX7m6",
      },
      {
        slug: "rentastic-girls-satellite",
        name: "Girls Satellite PG",
        location: "Satellite",
        price: "₹11,000/mo",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX2eY9GdvMpDbpti95Wp_MftqfNM1CcxLXGDyp9GARQ1ZTd4zAeBmHxt-jI-otOK6v1Z3vp0rfNPd-c7yPztQsN51neeDMq9ujwruK38LVuLllHvCc0b6PHgJCThk2W4WLndKk9JbmQhgjd4dOSUGQj8dLzxvgZpFrzwFioV2ISTHpNzxU_8a4eoJSiH4kakLBqRwONXBRc7RwxmLHEEkKabuKQKTeSytMJlBBFjXqmzgnJ0FvhyRQOEYK_d9PTuUeOw7v4x6ZPPov",
      },
    ],
  },
  {
    id: "boys",
    label: "PG for Boys",
    icon: "👨‍🎓",
    viewAllHref: "/pg-for-boys",
    properties: [
      {
        slug: "rentastic-ansh-boys-pg",
        name: "Ansh Boys PG",
        location: "Navrangpura",
        price: "₹9,000/mo",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM9sS6ij3sAlKXVSMWhFqF867U7U3mKeTMeO1PRfynqIq7Nx9lS96CRqEbua5uXtZKaKJk2W3YWQCZGfv_wA7srKg1RBbos515lc4eFUk9EQrxvzfzqHMlDOGlddFphdk2BWAYY2I-MtK-kI_SolRdV78nL11IX0Vt6kk7LQ3cBfxNhkKEi-y59iwW8AqepIUwVP7Nd225mAvvUxD5Kex7hgcjw4OXrLAeEmlIh86RHuJqXm90FdUETIkSNbVR1S0_0JbaFN_TJSbN",
      },
      {
        slug: "gurukul-road",
        name: "Gurukul Road PG",
        location: "Gurukul",
        price: "₹11,000/mo",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDerRj5K53NV6TrCCfRJcULYvekoKBYX80tcBOFpLmB0EwP1BI-9q3P772wBh4Hi_VYx0HGZA4xPm3zPiN4bm2RMn6NIlA395I482EWGLXz3ssGJ6AgVw0dE3KyCaGvjmXMoPaB-msyNtNHk_90GIqAcLJoY7tHwYPb14kWIlGfCEmRgNZow1HtefQUoRFDcnHcHaMOeNlm8DUWBQRyxaM_Oxq39bZFQKYgW1u7PibB_8bbOC996fIydVH6uf_m3LoXYvgfO7SYWQze",
      },
    ],
  },
];

interface MegaMenuProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MegaMenu({ isOpen, onOpenChange }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const active = CATEGORIES.find((c) => c.id === activeTab)!;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onOpenChange(false);
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onOpenChange]);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        !triggerRef.current?.contains(e.target as Node) &&
        !panelRef.current?.contains(e.target as Node)
      )
        onOpenChange(false);
    };
    if (isOpen) document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [isOpen, onOpenChange]);

  const onEnter = useCallback(() => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    onOpenChange(true);
  }, [onOpenChange]);

  const onLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => onOpenChange(false), 150);
  }, [onOpenChange]);

  return (
    <div className="relative hidden lg:block">
      {/* Trigger */}
      <div ref={triggerRef} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <button
          onClick={() => onOpenChange(!isOpen)}
          aria-expanded={isOpen}
          className="flex items-center gap-1 py-2 text-body-md text-on-surface-variant hover:text-primary transition-colors"
        >
          Properties
          <ChevronDown size={15} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Panel — fixed so it always spans full viewport width */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: prefersReduced ? 0 : 0.16, ease: easeOut }}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="fixed left-0 right-0 z-40"
            style={{ top: 64 }}
          >
            {/* Accent line */}
            <div className="h-[2px] bg-gradient-to-r from-primary/80 via-primary to-primary/40" />

            <div className="bg-white shadow-[0_16px_48px_rgba(0,0,0,0.10)] border-b border-neutral-100">
              <div className="max-w-[1200px] mx-auto px-8 py-6">

                {/* Top row: heading + category tabs + view-all */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-label-caps text-on-surface-variant/50 tracking-widest uppercase text-xs">
                    Our Properties
                  </span>

                  {/* Category tabs */}
                  <div className="flex items-center gap-2 bg-neutral-100 rounded-full p-1">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onMouseEnter={() => setActiveTab(cat.id)}
                        onClick={() => setActiveTab(cat.id)}
                        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                          activeTab === cat.id
                            ? "bg-white text-primary shadow-sm"
                            : "text-on-surface-variant hover:text-on-surface"
                        }`}
                      >
                        <span>{cat.icon}</span>
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  <Link
                    href={active.viewAllHref}
                    onClick={() => onOpenChange(false)}
                    className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    View all <ArrowUpRight size={14} />
                  </Link>
                </div>

                {/* Property cards */}
                <div className="grid grid-cols-2 gap-4">
                  {active.properties.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/property/${p.slug}`}
                      onClick={() => onOpenChange(false)}
                      className="group block"
                    >
                      <div className="relative h-[190px] rounded-2xl overflow-hidden">
                        {/* Image */}
                        <img
                          src={p.img}
                          alt={p.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                        {/* Location chip — top left */}
                        <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                          <MapPin size={10} />
                          {p.location}
                        </div>

                        {/* Bottom: name + price + arrow */}
                        <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between gap-2">
                          <div>
                            <p className="text-white font-semibold text-[15px] leading-snug">{p.name}</p>
                            <p className="text-white/65 text-xs mt-0.5">Starting {p.price}</p>
                          </div>
                          <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            <ArrowUpRight size={15} strokeWidth={2.5} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Trust signals footer */}
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center gap-6">
                  {["🏠 All properties in Ahmedabad", "✓ Fully managed & furnished", "🔒 24/7 Security"].map((s) => (
                    <span key={s} className="text-xs text-on-surface-variant">{s}</span>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => onOpenChange(false)}
                    className="ml-auto text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                  >
                    Book a site visit <ArrowUpRight size={12} />
                  </Link>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
