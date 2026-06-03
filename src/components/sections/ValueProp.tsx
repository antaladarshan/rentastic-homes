import Image from "next/image";

const cards = [
  {
    src:  "https://lh3.googleusercontent.com/aida-public/AB6AXuDerRj5K53NV6TrCCfRJcULYvekoKBYX80tcBOFpLmB0EwP1BI-9q3P772wBh4Hi_VYx0HGZA4xPm3zPiN4bm2RMn6NIlA395I482EWGLXz3ssGJ6AgVw0dE3KyCaGvjmXMoPaB-msyNtNHk_90GIqAcLJoY7tHwYPb14kWIlGfCEmRgNZow1HtefQUoRFDcnHcHaMOeNlm8DUWBQRyxaM_Oxq39bZFQKYgW1u7PibB_8bbOC996fIydVH6uf_m3LoXYvgfO7SYWQze",
    alt:  "Students laughing together in a premium co-living lounge",
    text: "PG Life Feeling Like A Punishment?",
  },
  {
    src:  "https://lh3.googleusercontent.com/aida-public/AB6AXuCV4vzTtPtG_TN9CGmjB8KjIzKTTy0-HHpHUpf3NHWybHzuC3rCcmZeBl7ESk1w6qnwvUn2gRZ9vnrWA8aD8zzMMFTiMxCiLJ-3us52ue_y8WKQFowLx5mO7AY5twskP6oMAASKg7tANef8z_z2uahkS176McQGdc_tosnKqkHb40mQjjMgLmniy6JZE3sGZq79ZdJQdEOK-QA4QxIpU1OUCi2OYt0daOSAsjyT0Wv4_UyqTl2h1Jj09e74WC2ex3417djUZpOjzK6A",
    alt:  "Student relaxing with coffee in a serene quiet room",
    text: "First Time Out... Low-Key Freaking Out?",
  },
  {
    src:  "https://lh3.googleusercontent.com/aida-public/AB6AXuCTyPDL2i6lQi3P2y6z-wBlQRgEchvKTJ24x3ybACLz5AZzM_1tLyXjIvHsFV9oHFFsiT63qWeTL52TquQ7fa1moHK43bAHHOGloEGNvHe0dBSPlxMapuCSAg-VU3NXE0I4SwH1Blel6ya496CZHo6ma3SgxmpA_4_edNTrau-CNTYntbALvI8Idn7iy5zBAK8HQ1xDRtareJI52N-QOcM2ijNDBL9Us27TvCnYXURC82r9TUYa4X9f4GlR15wLU-fz0vLBq1Lv7LFl",
    alt:  "Two friends playing guitar in a vibrant co-living space",
    text: "Life Feeling A Bit... Stuck?",
  },
  {
    src:  "https://lh3.googleusercontent.com/aida-public/AB6AXuDMfygcmYzOQxjXJC2F7miq5OA2qan6Abwv8WVaKfj1euyOhJL5xW_qvpwqdtdVnL55HC3gH7egIMeBsYk9IHoObFDCBWA-A2WHERHzQU9U7UZ1NFb1qlhMfJc9XaH5mN5puoKYe3VpNPDWaa4napuoGhQHtfPDLYNEYC4T6XRU5gqKkGqJMgjmGzNSpoR6dKBfHms0LH2E6LJnkaO91IzB88x1x9TGnz_9WupBTTvaCJ50uq6v8dHn88TeiflVo78bcFThAS9szlBD",
    alt:  "Student working focused at a clean warm study desk",
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
