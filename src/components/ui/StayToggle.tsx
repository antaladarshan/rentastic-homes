import Link from "next/link";

interface StayToggleProps {
  active: "girls" | "boys";
}

export default function StayToggle({ active }: StayToggleProps) {
  return (
    <div className="max-w-[1280px] mx-auto px-gutter pb-xl flex justify-center gap-sm">
      <Link
        href="/pg-for-girls"
        className={`px-lg py-sm rounded-full text-label-caps border transition-colors ${
          active === "girls"
            ? "bg-surface-container-high text-primary border-outline-variant/30"
            : "bg-surface-container text-on-surface-variant border-transparent hover:bg-surface-container-high"
        }`}
      >
        PG for Girls
      </Link>
      <Link
        href="/pg-for-boys"
        className={`px-lg py-sm rounded-full text-label-caps border transition-colors ${
          active === "boys"
            ? "bg-surface-container-high text-primary border-outline-variant/30"
            : "bg-surface-container text-on-surface-variant border-transparent hover:bg-surface-container-high"
        }`}
      >
        PG for Boys
      </Link>
    </div>
  );
}
