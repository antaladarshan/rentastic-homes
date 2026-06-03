"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { PolicyItem } from "@/data/properties";

export default function PoliciesAccordion({ policies }: { policies: PolicyItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section>
      <h2 className="text-headline-md text-on-background mb-md">Policies &amp; Guidelines</h2>
      <div className="flex flex-col gap-sm">
        {policies.map((p, i) => (
          <div key={i} className="border border-outline-variant/40 rounded-lg overflow-hidden bg-surface-container-lowest">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center p-md bg-surface-container-low/30 hover:bg-surface-container-low transition-colors text-left"
              aria-expanded={open === i}
            >
              <span className="text-headline-sm text-on-surface">{p.title}</span>
              <ChevronDown size={20} className={`text-on-surface-variant transition-transform duration-200 ${open === i ? "rotate-180 text-primary" : ""}`} />
            </button>
            {open === i && (
              <div className="p-md border-t border-outline-variant/20">
                <ul className="list-disc list-inside flex flex-col gap-2">
                  {p.points.map((pt, j) => (
                    <li key={j} className="text-body-sm text-on-surface-variant">{pt}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
