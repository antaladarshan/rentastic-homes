import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-xl bg-primary-fixed px-gutter my-xl">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center gap-lg">

        {/* Rating badge */}
        <div className="flex items-center gap-sm bg-surface-container-lowest px-6 py-2 rounded-full shadow-warm">
          <span className="text-headline-sm text-primary font-bold">4.4</span>
          <div className="flex items-center gap-0.5 text-primary">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="none" className="opacity-50" />
          </div>
          <span className="text-label-caps text-on-surface-variant">500+ Reviews</span>
        </div>

        <h2 className="text-headline-md text-on-primary-fixed">Voices of Our Community</h2>

        {/* Quote */}
        <div className="max-w-3xl w-full mx-auto bg-surface-container-lowest/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-warm text-left relative overflow-hidden">
          <div className="absolute top-3 left-4 text-8xl text-primary/10 font-serif leading-none select-none pointer-events-none">
            &ldquo;
          </div>
          <p className="text-body-lg text-on-surface italic mb-6 mt-4 relative z-10">
            &ldquo;Every time I walk past the common lounge, I feel a burst of motivation.
            It&apos;s filled with people pushing forward, dreaming big. This space has
            such positive energy — a perfect place to recharge your mind and spirit!&rdquo;
          </p>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg shrink-0">
              KG
            </div>
            <div>
              <p className="text-body-md font-bold text-on-surface">Keval Goswami</p>
              <p className="text-body-sm text-on-surface-variant">Resident at Aspire</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
