import { ShieldCheck, Utensils, Camera, Fingerprint, IndianRupee } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Police-Verified Staff", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Utensils,    label: "FSSAI-Licensed Kitchen", color: "text-green-600", bg: "bg-green-50" },
  { icon: Camera,      label: "24/7 CCTV + Guard",     color: "text-amber-600", bg: "bg-amber-50" },
  { icon: Fingerprint, label: "Biometric Entry",        color: "text-purple-600", bg: "bg-purple-50" },
  { icon: IndianRupee, label: "All-Inclusive Rent",     color: "text-primary",    bg: "bg-primary/8" },
];

export default function TrustBadges() {
  return (
    <section className="py-lg px-gutter">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-sm">
          {badges.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.label}
                className={`flex items-center gap-xs px-md py-sm rounded-full border border-outline-variant/20 ${b.bg}`}
              >
                <Icon size={16} className={b.color} />
                <span className={`text-label-sm font-medium ${b.color}`}>{b.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
