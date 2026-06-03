"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import Link from "next/link";

export default function AboutEnquiryForm() {
  const [tab,  setTab]  = useState<"students" | "residences">("students");
  const [form, setForm] = useState({ name: "", phone: "", city: "" });

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const href = buildWhatsAppLink({
      name: form.name, phone: form.phone,
      enquiryFor: tab === "students" ? "PG / Students" : "Residences / Professionals",
      location: form.city,
    });
    window.open(href, "_blank", "noopener,noreferrer");
  }

  const inputCls = "w-full bg-surface border border-outline-variant rounded-lg px-sm py-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all text-on-surface text-body-md";

  return (
    <section className="py-xl px-gutter max-w-[42rem] mx-auto flex flex-col gap-xl">
      {/* Stay toggle */}
      <div className="flex justify-center">
        <div className="bg-surface-container-high p-xs rounded-full inline-flex shadow-inner gap-xs">
          <button
            onClick={() => setTab("students")}
            className={`px-lg py-sm rounded-full text-label-caps transition-all ${tab === "students" ? "bg-surface-container-lowest text-primary shadow-warm" : "text-on-surface-variant hover:text-primary"}`}
          >
            Students
          </button>
          <button
            onClick={() => setTab("residences")}
            className={`px-lg py-sm rounded-full text-label-caps transition-all ${tab === "residences" ? "bg-surface-container-lowest text-primary shadow-warm" : "text-on-surface-variant hover:text-primary"}`}
          >
            Residences
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="bg-surface-container-lowest p-lg rounded-xl shadow-warm border border-outline-variant/30">
        <div className="text-center mb-lg">
          <h3 className="text-headline-md text-on-surface mb-sm">Find Your Home Away From Home</h3>
          <p className="text-body-md text-on-surface-variant">We&apos;ll help you find the perfect match.</p>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-md">
          <div className="grid md:grid-cols-2 gap-md">
            <div className="flex flex-col gap-xs">
              <label className="text-label-caps text-on-surface-variant uppercase tracking-wider">Full Name</label>
              <input className={inputCls} type="text" value={form.name} onChange={set("name")} required />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="text-label-caps text-on-surface-variant uppercase tracking-wider">Phone Number</label>
              <input className={inputCls} type="tel" value={form.phone} onChange={set("phone")} required />
            </div>
          </div>
          <div className="flex flex-col gap-xs">
            <label className="text-label-caps text-on-surface-variant uppercase tracking-wider">Preferred Location</label>
            <select className={`${inputCls} appearance-none`} value={form.city} onChange={set("city")}>
              <option value="">Select a location</option>
              <option>Navrangpura, Ahmedabad</option>
              <option>Satellite, Ahmedabad</option>
              <option>Gulbai Tekra, Ahmedabad</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-primary-container text-on-primary-container py-sm rounded-full text-label-caps hover:opacity-90 transition-opacity mt-sm flex items-center justify-center gap-xs">
            Submit Enquiry <ArrowRight size={16} />
          </button>
        </form>

        <p className="text-center text-body-sm text-on-surface-variant mt-md">
          Or view our{" "}
          <Link href={tab === "students" ? "/pg-for-girls" : "/residences"} className="text-primary underline underline-offset-2">
            {tab === "students" ? "student PG options" : "professional residences"}
          </Link>
        </p>
      </div>
    </section>
  );
}
