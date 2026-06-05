"use client";

import { Phone, MessageCircle, ClipboardList } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export default function MobileActionBar() {
  const waHref = buildWhatsAppLink({ enquiryFor: "PG Accommodation" });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-white border-t border-outline-variant/20 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-md py-sm flex items-center gap-sm safe-area-inset-bottom">
        <a
          href={`tel:+${siteConfig.whatsapp}`}
          className="flex-1 flex flex-col items-center gap-[3px] py-xs text-on-surface-variant hover:text-primary transition-colors"
          aria-label="Call us"
        >
          <Phone size={20} />
          <span className="text-[10px] font-medium">Call</span>
        </a>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center gap-[3px] py-xs text-green-600 hover:text-green-700 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} />
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>

        <a
          href={buildWhatsAppLink({ enquiryFor: "PG / co-living accommodation" })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] flex items-center justify-center gap-xs bg-primary text-on-primary rounded-xl py-sm font-semibold text-body-sm hover:bg-primary/90 transition-colors"
          aria-label="Enquire now"
        >
          <ClipboardList size={16} />
          Enquire Now
        </a>
      </div>
    </div>
  );
}
