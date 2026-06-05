const stats = [
  { value: "600+", label: "Happy Residents" },
  { value: "7+",   label: "Years Exp." },
  { value: "60+",  label: "Rooms Managed" },
];

export default function Stats() {
  return (
    <section className="py-xl bg-surface px-gutter">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-lg items-center">

        <div className="md:col-span-5 flex flex-col gap-md">
          <h2 className="text-headline-md text-on-surface">
            A Growing <span className="text-primary">Living</span> Ecosystem
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Student living, minus the chaos. Comfortable, safe, fully managed
            spaces so you can focus on what matters most.
          </p>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-sm md:gap-md">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-surface-container-lowest rounded-xl p-6 shadow-warm text-center flex flex-col justify-center gap-xs border border-outline-variant/10 ${
                i === 2 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <span className="text-display-lg-mobile md:text-display-lg text-primary">
                {s.value}
              </span>
              <span className="text-label-caps text-on-surface-variant uppercase tracking-wider">
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
