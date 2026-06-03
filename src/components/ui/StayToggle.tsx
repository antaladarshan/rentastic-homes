import Link from "next/link";

interface StayToggleProps {
  active: "students" | "residences";
}

export default function StayToggle({ active }: StayToggleProps) {
  return (
    <div className="max-w-[1280px] mx-auto px-gutter pb-xl flex justify-center gap-sm">
      <Link
        href="/students"
        className={`px-lg py-sm rounded-full text-label-caps border transition-colors ${
          active === "students"
            ? "bg-surface-container-high text-primary border-outline-variant/30"
            : "bg-surface-container text-on-surface-variant border-transparent hover:bg-surface-container-high"
        }`}
      >
        Students
      </Link>
      <Link
        href="/residences"
        className={`px-lg py-sm rounded-full text-label-caps border transition-colors ${
          active === "residences"
            ? "bg-surface-container-high text-primary border-outline-variant/30"
            : "bg-surface-container text-on-surface-variant border-transparent hover:bg-surface-container-high"
        }`}
      >
        Residences
      </Link>
    </div>
  );
}
