"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface SidebarFormProps {
  propertyName:    string;
  sharingTypes:    string[];
  whatsappNumber:  string;
}

const uCls = "w-full bg-transparent border-b border-outline-variant/50 pb-2 text-body-md text-on-surface focus:outline-none focus:border-primary placeholder:text-on-surface-variant/50 transition-colors";

export default function SidebarForm({ propertyName, sharingTypes, whatsappNumber }: SidebarFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", roomType: "" });

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const href = buildWhatsAppLink({ name: form.name, phone: form.phone, email: form.email, property: propertyName, roomType: form.roomType }, whatsappNumber);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  const waChat = buildWhatsAppLink({ property: propertyName }, whatsappNumber);

  return (
    <div className="flex flex-col gap-md">
      {/* Enquiry form card */}
      <div className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant/20 shadow-[0_4px_20px_rgba(59,36,18,0.06)]">
        <p className="text-headline-sm text-on-surface">Find Your</p>
        <p className="text-headline-md text-on-surface mb-lg">
          <span className="text-primary italic">Home</span> Away From Home
        </p>

        <form onSubmit={submit} className="flex flex-col gap-md">
          <input className={uCls} placeholder="Name"       type="text"  value={form.name}  onChange={set("name")}  required />
          <input className={uCls} placeholder="Contact No." type="tel"  value={form.phone} onChange={set("phone")} required />
          <input className={uCls} placeholder="Email ID"   type="email" value={form.email} onChange={set("email")} />

          <div className="pt-sm">
            <select
              className="w-full bg-surface border border-outline-variant/50 rounded-lg p-sm text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none"
              value={form.roomType}
              onChange={set("roomType")}
            >
              <option value="">Enquiry For</option>
              {sharingTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <button type="submit" className="w-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary text-label-caps py-md rounded-full transition-all duration-300 shadow-sm flex items-center justify-center gap-xs mt-sm">
            ENQUIRE NOW <ArrowRight size={16} />
          </button>
        </form>
      </div>

      {/* WhatsApp concierge card */}
      <a
        href={waChat}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-tertiary-container/10 rounded-xl p-md border border-tertiary/20 flex items-center gap-md hover:bg-tertiary-container/20 transition-colors group"
      >
        <div className="bg-tertiary text-on-tertiary w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0">
          {/* WhatsApp SVG */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
        <div>
          <p className="text-label-caps text-tertiary mb-xs">Need Help?</p>
          <p className="text-headline-sm text-on-surface">Chat with Concierge</p>
        </div>
      </a>
    </div>
  );
}
