import {
  Wind, Wifi, UtensilsCrossed, Sparkles, Shirt,
  Droplets, Archive, BookOpen, Flame, Dumbbell, Users,
} from "lucide-react";

const amenities = [
  { icon: <Wind size={28} />,           label: "AC Rooms" },
  { icon: <Wifi size={28} />,           label: "Wi-Fi" },
  { icon: <UtensilsCrossed size={28} />,label: "Nutritious Meals" },
  { icon: <Sparkles size={28} />,       label: "Housekeeping" },
  { icon: <Shirt size={28} />,          label: "Laundry" },
  { icon: <Droplets size={28} />,       label: "Attached Washroom" },
  { icon: <Archive size={28} />,        label: "Wardrobe" },
  { icon: <BookOpen size={28} />,       label: "Study Table" },
  { icon: <Flame size={28} />,          label: "Hot Water" },
  { icon: <Dumbbell size={28} />,       label: "Gym" },
  { icon: <Users size={28} />,          label: "Hangout Zones", wide: true },
];

export default function AmenityGrid() {
  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-xl">
      <div className="text-center mb-lg space-y-sm">
        <h2 className="text-headline-md-mobile md:text-headline-md text-on-surface">
          Designed For You
        </h2>
        <p className="text-body-md text-on-surface-variant">
          Everything you need for a comfortable stay.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-md">
        {amenities.map((a) => (
          <div
            key={a.label}
            className={`bg-surface-container-low p-md rounded-xl flex flex-col items-center justify-center gap-sm hover:bg-surface-container transition-colors border border-outline-variant/20 text-center ${
              a.wide ? "lg:col-span-2" : ""
            }`}
          >
            <span className="text-primary">{a.icon}</span>
            <span className="text-label-caps text-on-surface">{a.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
