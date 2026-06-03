"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface FaqItem { q: string; a: string; }
interface EnquiryWithFaqProps {
  faqs:       FaqItem[];
  properties: { value: string; label: string }[];
  locations:  { value: string; label: string }[];
}

const inputCls =
  "bg-surface border border-outline-variant rounded-lg px-sm py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-body-md text-on-surface w-full";
const labelCls = "text-label-caps text-on-surface-variant";

export default function EnquiryWithFaq({ faqs, properties, locations }: EnquiryWithFaqProps) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", enquiryFor: "", property: "", location: "" });
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const href = buildWhatsAppLink({
      name: form.name, phone: form.phone, email: form.email,
      enquiryFor: form.enquiryFor || "PG accommodation",
      property: form.property, location: form.location,
    });
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-surface-container-lowest py-xl">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">

          {/* ── Enquiry Form ── */}
          <div className="bg-surface p-lg rounded-xl shadow-[0_10px_30px_rgba(59,36,18,0.08)] border border-outline-variant/10">
            <h2 className="text-headline-sm text-on-surface mb-xs">Find Your Home Away From Home</h2>
            <p className="text-body-sm text-on-surface-variant mb-md">Fill out the form and our team will get back to you shortly.</p>

            <form onSubmit={submit} className="flex flex-col gap-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className={labelCls}>Name</label>
                  <input className={inputCls} placeholder="Your Name" type="text" value={form.name} onChange={set("name")} required />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className={labelCls}>Phone</label>
                  <input className={inputCls} placeholder="Your Phone" type="tel" value={form.phone} onChange={set("phone")} required />
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <label className={labelCls}>Email</label>
                <input className={inputCls} placeholder="Your Email" type="email" value={form.email} onChange={set("email")} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className={labelCls}>Enquiry For</label>
                  <select className={inputCls} value={form.enquiryFor} onChange={set("enquiryFor")}>
                    <option value="">Select Option</option>
                    <option value="Student">Student</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className={labelCls}>Property</label>
                  <select className={inputCls} value={form.property} onChange={set("property")}>
                    <option value="">Select Property</option>
                    {properties.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className={labelCls}>Location</label>
                  <select className={inputCls} value={form.location} onChange={set("location")}>
                    <option value="">Select Location</option>
                    {locations.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary-container text-on-secondary-container py-md rounded-full text-label-caps font-semibold hover:bg-secondary-fixed transition-colors flex items-center justify-center gap-sm"
              >
                Enquire Now <ArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* ── FAQ Accordion ── */}
          <div className="flex flex-col gap-sm">
            <h2 className="text-headline-sm text-on-surface mb-md">Frequently Asked Questions</h2>
            {faqs.map((item, i) => (
              <div key={i} className="bg-surface-container-low rounded-lg border border-outline-variant/30 overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full text-left px-md py-sm flex justify-between items-center hover:bg-surface-container transition-colors focus:outline-none"
                  aria-expanded={openIdx === i}
                >
                  <span className="text-body-md font-semibold text-on-surface pr-md">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-primary shrink-0 transition-transform duration-200 ${openIdx === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openIdx === i && (
                  <div className="px-md pb-sm text-body-sm text-on-surface-variant bg-surface-container-low">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
