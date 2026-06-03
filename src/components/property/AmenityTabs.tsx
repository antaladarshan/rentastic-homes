"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface AmenityTabsProps {
  roomAmenities:     string[];
  propertyAmenities: string[];
}

export default function AmenityTabs({ roomAmenities, propertyAmenities }: AmenityTabsProps) {
  const [tab, setTab] = useState<"room" | "property">("room");
  const items = tab === "room" ? roomAmenities : propertyAmenities;

  return (
    <section>
      <h2 className="text-headline-md text-on-background mb-md">
        Everything You Need,<br />
        <span className="text-primary">Inside Your Place</span>
      </h2>
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/20 overflow-hidden shadow-[0_4px_20px_rgba(59,36,18,0.06)]">
        {/* Tab headers */}
        <div className="flex border-b border-outline-variant/30">
          {(["room", "property"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-sm px-md text-center text-label-caps border-b-2 transition-colors ${
                tab === t
                  ? "border-primary text-primary bg-primary/5"
                  : "border-transparent text-on-surface-variant hover:text-primary bg-surface-container-low/50"
              }`}
            >
              {t === "room" ? "Room Amenities" : "Property Amenities"}
            </button>
          ))}
        </div>

        {/* Checklist */}
        <div className="p-lg grid grid-cols-1 md:grid-cols-2 gap-y-sm gap-x-xl">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-sm">
              <CheckCircle2 size={20} className="text-primary/70 shrink-0" />
              <span className="text-body-md text-on-surface">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
