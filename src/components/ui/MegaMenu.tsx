"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, easeOut, easeIn } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

const categories = [
  {
    id: "girls",
    label: "PG for Girls",
    emoji: "👩‍🎓",
    title: "PG for Girls",
    description: "Safe, structured, and fully managed accommodations designed to support student life, routines, and everyday comfort.",
    ctaHref: "/pg-for-girls",
    properties: [
      {
        name: "Rentastic Homes Ansh Girls",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJFSnFXF_4FTemJnG6wdS9rUF55gneL5XyFAkwZodzJ7u9tyQFtauvN9J0CD20DRnNoq_VYaZsakd4xgKo7F1Zgv9Rf8Adwsp3LeaxIm9xCNDoNMt1dGm7lnSQDTN63wsQoBcsaGuquNbNa2gdU8EiBuNGpiJtkTs5jWAWpDTjJTQsLcCktskQXcmNPxTDR1W0xeQRvncLTR8ugxwJgoSatRlRtmzLKhFh6KRbOAwykMpPXmrpYbvVx7VaIpgzTUDJtFULGG7QX7m6",
        href: "/property/ansh-rentastic-girls-pg",
      },
      {
        name: "Rentastic Homes Girls Satellite",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX2eY9GdvMpDbpti95Wp_MftqfNM1CcxLXGDyp9GARQ1ZTd4zAeBmHxt-jI-otOK6v1Z3vp0rfNPd-c7yPztQsN51neeDMq9ujwruK38LVuLllHvCc0b6PHgJCThk2W4WLndKk9JbmQhgjd4dOSUGQj8dLzxvgZpFrzwFioV2ISTHpNzxU_8a4eoJSiH4kakLBqRwONXBRc7RwxmLHEEkKabuKQKTeSytMJlBBFjXqmzgnJ0FvhyRQOEYK_d9PTuUeOw7v4x6ZPPov",
        href: "/property/rentastic-girls-satellite",
      },
    ],
  },
  {
    id: "boys",
    label: "PG for Boys",
    emoji: "👨‍🎓",
    title: "PG for Boys",
    description: "Spacious, fully furnished rooms built for focused living. A safe and energetic community designed exclusively for men.",
    ctaHref: "/pg-for-boys",
    properties: [
      {
        name: "Rentastic Homes Ansh Boys",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM9sS6ij3sAlKXVSMWhFqF867U7U3mKeTMeO1PRfynqIq7Nx9lS96CRqEbua5uXtZKaKJk2W3YWQCZGfv_wA7srKg1RBbos515lc4eFUk9EQrxvzfzqHMlDOGlddFphdk2BWAYY2I-MtK-kI_SolRdV78nL11IX0Vt6kk7LQ3cBfxNhkKEi-y59iwW8AqepIUwVP7Nd225mAvvUxD5Kex7hgcjw4OXrLAeEmlIh86RHuJqXm90FdUETIkSNbVR1S0_0JbaFN_TJSbN",
        href: "/property/ansh-boys",
      },
      {
        name: "Rentastic Homes Gurukul Road",
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
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const activeData = categories.find((c) => c.id === activeCategory) || categories[0];

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    if (isOpen) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onOpenChange]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && triggerRef.current && panelRef.current && !triggerRef.current.contains(e.target as Node) && !panelRef.current.contains(e.target as Node)) {
        onOpenChange(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onOpenChange]);

  const handleMouseEnter = () => onOpenChange(true);
  const handleMouseLeave = () => setTimeout(() => onOpenChange(false), 100);

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
          <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Mega Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: easeOut }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 right-0 top-full mt-0 w-screen -ml-gutter z-50"
          >
            <div className="bg-white shadow-[0_20px_40px_rgba(59,36,18,0.12)] border-t border-outline-variant/20">
              <div className="max-w-[1280px] mx-auto px-gutter py-xl">
                <div className="grid grid-cols-[280px_1fr] gap-xl">
                  {/* LEFT COLUMN - Category Navigation */}
                  <div className="space-y-md">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        onMouseEnter={() => setActiveCategory(cat.id)}
                        className={`w-full text-left p-lg rounded-xl transition-all ${
                          activeCategory === cat.id ? "bg-primary/10 border-2 border-primary" : "hover:bg-surface-container border-2 border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-sm mb-xs">
                          <span className="text-2xl">{cat.emoji}</span>
                          <span className="font-semibold text-on-surface text-body-md">{cat.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* RIGHT COLUMN - Category Content */}
                  <div>
                    {/* Header */}
                    <div className="mb-lg flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-headline-sm text-on-surface mb-xs">{activeData.title}</h3>
                        <p className="text-body-sm text-on-surface-variant max-w-md">{activeData.description}</p>
                      </div>
                      <Link
                        href={activeData.ctaHref}
                        className="shrink-0 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors"
                      >
                        <ArrowUpRight size={18} />
                      </Link>
                    </div>

                    {/* Property Cards */}
                    <div className="grid grid-cols-2 gap-md">
                      {activeData.properties.map((property) => (
                        <Link key={property.href} href={property.href}>
                          <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                            <motion.img
                              src={property.image}
                              alt={property.name}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-md text-white">
                              <p className="text-body-md font-semibold line-clamp-2">{property.name}</p>
                            </div>
                            <motion.div
                              className="absolute bottom-md right-md w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg"
                              whileHover={{ x: 4, y: -4 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ArrowUpRight size={20} strokeWidth={2.5} />
                            </motion.div>
                          </div>
                        </Link>
                      ))}
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
