import Image from "next/image";

const cards = [
  {
    src:  "/properties/gurukul/lifestyle-01.jpg",
    alt:  "Students enjoying community life at Rentastic Homes",
    text: "PG Life Feeling Like A Punishment?",
  },
  {
    src:  "/properties/gurukul/lifestyle-02.jpg",
    alt:  "Comfortable private room at Rentastic Homes",
    text: "First Time Out... Low-Key Freaking Out?",
  },
  {
    src:  "/properties/gurukul/room-02.jpg",
    alt:  "Furnished room at Rentastic Homes Gurukul Road",
    text: "Life Feeling A Bit... Stuck?",
  },
  {
    src:  "/properties/gurukul/lifestyle-04.jpg",
    alt:  "Safe and secure living at Rentastic Homes",
    text: "Freedom For You. Peace Of Mind For Parents.",
  },
];

export default function ValueProp() {
  return (
    <section className="py-xl bg-surface px-gutter border-t border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-headline-md text-center text-on-surface mb-12">
          What Are You Really <span className="text-primary">Looking For?</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          {cards.map((c) => (
            <div key={c.text} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-warm p-4 flex flex-col gap-4 group">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src={c.src} alt={c.alt} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <p className="text-headline-sm text-on-surface leading-tight px-1 pb-1">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
