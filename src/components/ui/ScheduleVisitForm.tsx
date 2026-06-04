"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface ScheduleVisitFormProps {
  propertyName: string;
  whatsappNumber: string;
}

const TIME_SLOTS = [
  "10:00 AM – 11:00 AM",
  "11:00 AM – 12:00 PM",
  "12:00 PM – 1:00 PM",
  "2:00 PM – 3:00 PM",
  "3:00 PM – 4:00 PM",
  "5:00 PM – 6:00 PM",
];

export default function ScheduleVisitForm({ propertyName, whatsappNumber }: ScheduleVisitFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi! I'd like to schedule a site visit to ${propertyName}.`,
      name  ? `Name: ${name}`         : "",
      phone ? `Phone: ${phone}`       : "",
      date  ? `Preferred date: ${date}` : "",
      slot  ? `Time slot: ${slot}`    : "",
      "Please confirm my visit. Thank you!",
    ].filter(Boolean);
    const num = whatsappNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
  };

  return (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 p-lg shadow-sm">
      <div className="flex items-center gap-sm mb-md">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <CalendarDays size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="text-headline-sm text-on-surface font-bold">Schedule a Visit</h3>
          <p className="text-body-sm text-on-surface-variant">Pick a slot and we'll confirm via WhatsApp</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-sm">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-md py-sm rounded-xl border border-outline-variant/30 bg-surface text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-md py-sm rounded-xl border border-outline-variant/30 bg-surface text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <input
          type="date"
          min={today}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full px-md py-sm rounded-xl border border-outline-variant/30 bg-surface text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <select
          value={slot}
          onChange={(e) => setSlot(e.target.value)}
          required
          className="w-full px-md py-sm rounded-xl border border-outline-variant/30 bg-surface text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <option value="">Select a time slot</option>
          {TIME_SLOTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-primary text-on-primary font-semibold text-body-sm py-sm rounded-xl hover:bg-primary/90 transition-colors mt-xs"
        >
          Book via WhatsApp
        </button>
      </form>
    </div>
  );
}
