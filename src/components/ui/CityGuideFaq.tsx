"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function CityGuideFaq({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-sm max-w-3xl">
      {faqs.map((item, i) => (
        <div key={i} className="border border-outline-variant/40 rounded-lg overflow-hidden bg-surface-container-lowest">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center p-md bg-surface-container-low/30 hover:bg-surface-container-low transition-colors text-left"
            aria-expanded={open === i}
          >
            <span className="text-body-md font-semibold text-on-surface pr-md">{item.q}</span>
            <ChevronDown size={20} className={`text-primary shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && (
            <div className="p-md border-t border-outline-variant/20 text-body-md text-on-surface-variant">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
