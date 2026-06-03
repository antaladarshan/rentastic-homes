"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFab() {
  return (
    <a
      href={buildWhatsAppLink({})}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-tertiary text-on-tertiary px-4 py-3 rounded-full shadow-[0_4px_12px_rgba(0,109,47,0.35)] hover:scale-105 active:scale-95 transition-transform flex items-center gap-0 group overflow-hidden"
    >
      <MessageCircle size={24} fill="currentColor" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-[5rem] transition-all duration-300 whitespace-nowrap text-label-caps group-hover:ml-2 group-hover:mr-1">
        Concierge
      </span>
    </a>
  );
}
