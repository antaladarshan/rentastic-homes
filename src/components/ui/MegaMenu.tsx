"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { ArrowUpRight, ChevronDown, MapPin } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const CATEGORIES = [
  {
    id: "girls",
    label: "PG for Girls",
    icon: "girls",
    viewAllHref: "/pg-for-girls",
    properties: [
      {
        slug: "ansh-rentastic-girls-pg",
        name: "Ansh Girls PG",
        location: "Navrangpura",
        price: "₹9,000/mo",
        img: "/properties/ansh/wp-04.jpg",
      },
      {
        slug: "rentastic-girls-satellite",
        name: "Girls Satellite PG",
        location: "Satellite",
        price: "₹11,000/mo",
        img: "/properties/satellite/4-sharing-01.jpg",
      },
    ],
  },
  {
    id: "boys",
    label: "PG for Boys",
    icon: "boys",
    viewAllHref: "/pg-for-boys",
    properties: [
      {
        slug: "rentastic-ansh-boys-pg",
        name: "Ansh Boys PG",
        location: "Navrangpura",
        price: "₹9,000/mo",
        img: "/properties/ansh/vc-05.jpg",
      },
      {
        slug: "gurukul-road",
        name: "Gurukul Road PG",
        location: "Gurukul",
        price: "₹11,000/mo",
        img: "/properties/gurukul/room-02.jpg",
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
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${cat.icon === "girls" ? "bg-rose-400" : "bg-blue-400"}`} />
                          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${cat.icon === "girls" ? "bg-rose-500" : "bg-blue-500"}`} />
                        </span>
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
                  <a
                    href={buildWhatsAppLink({ enquiryFor: "Book a site visit / property tour" })}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onOpenChange(false)}
                    className="ml-auto text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                  >
                    Book a site visit <ArrowUpRight size={12} />
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
