import { Star } from "lucide-react";
import { reviews, aggregateRating } from "@/data/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-[2px]">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={14}
          className={n <= rating ? "text-amber-400 fill-amber-400" : "text-neutral-300 fill-neutral-300"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-xl px-gutter bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-md mb-xl">
          <div>
            <h2 className="text-headline-md text-on-surface">What Residents Say</h2>
            <div className="flex items-center gap-sm mt-sm">
              <span className="text-display-lg-mobile font-bold text-on-surface">{aggregateRating.score}</span>
              <div>
                <Stars rating={Math.round(aggregateRating.score)} />
                <p className="text-body-sm text-on-surface-variant mt-[2px]">
                  Based on {aggregateRating.count}+ Google reviews
                </p>
              </div>
            </div>
          </div>
          <a
            href="https://g.co/kgs/rentastichomes"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-xs px-lg py-sm rounded-full border border-outline-variant/30 text-body-sm font-medium text-on-surface hover:bg-surface-container transition-colors"
          >
            Write a Review →
          </a>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl p-lg border border-outline-variant/20 shadow-sm flex flex-col gap-sm"
            >
              {/* Stars + date */}
              <div className="flex items-center justify-between">
                <Stars rating={r.rating} />
                <span className="text-label-sm text-on-surface-variant">{r.date}</span>
              </div>

              {/* Review text */}
              <p className="text-body-sm text-on-surface-variant leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-sm pt-sm border-t border-outline-variant/15">
                <div className="w-9 h-9 rounded-full bg-primary/15 text-primary flex items-center justify-center text-label-sm font-bold shrink-0">
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-body-sm font-semibold text-on-surface truncate">{r.name}</p>
                  <p className="text-label-sm text-on-surface-variant truncate">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
