"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const inputCls = "w-full bg-surface border border-outline-variant rounded-lg px-sm py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface text-body-md";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const href = buildWhatsAppLink({ name: form.name, phone: form.phone, email: form.email, enquiryFor: form.message });
    window.location.href = href;
  }

  function sendEmail(e: React.MouseEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Enquiry – Rentastic Homes");
    const body = encodeURIComponent(
      `Hi Rentastic Homes!\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}\n\nThank you!`
    );
    window.location.href = `mailto:rentastichomes2025@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-md">
      <div className="grid md:grid-cols-2 gap-md">
        <div className="flex flex-col gap-xs">
          <label className="text-label-caps text-on-surface-variant">FULL NAME</label>
          <input className={inputCls} type="text" placeholder="Your name" value={form.name} onChange={set("name")} required />
        </div>
        <div className="flex flex-col gap-xs">
          <label className="text-label-caps text-on-surface-variant">PHONE</label>
          <input className={inputCls} type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set("phone")} required />
        </div>
      </div>
      <div className="flex flex-col gap-xs">
        <label className="text-label-caps text-on-surface-variant">EMAIL</label>
        <input className={inputCls} type="email" placeholder="your@email.com" value={form.email} onChange={set("email")} />
      </div>
      <div className="flex flex-col gap-xs">
        <label className="text-label-caps text-on-surface-variant">MESSAGE</label>
        <textarea
          className={`${inputCls} resize-none`}
          placeholder="Tell us what you're looking for…"
          rows={4}
          value={form.message}
          onChange={set("message")}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-sm">
        <button type="submit" className="flex-1 bg-primary-container text-on-primary-container py-md rounded-full text-label-caps font-semibold hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-xs">
          Send on WhatsApp <ArrowRight size={16} />
        </button>
        <a
          href="#"
          onClick={sendEmail}
          className="flex-1 border border-outline-variant text-on-surface py-md rounded-full text-label-caps font-semibold hover:bg-surface-container transition-colors flex items-center justify-center gap-xs"
        >
          Send Email <ArrowRight size={16} />
        </a>
      </div>
    </form>
  );
}
