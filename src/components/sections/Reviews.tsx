"use client";

import { useState } from "react";
import { Star, X, MapPin, ArrowUpRight } from "lucide-react";
import { reviews, aggregateRating } from "@/data/reviews";

const REVIEW_PROPERTIES = [
  { name: "Rentastic Homes Ansh", location: "Navrangpura", url: "https://maps.app.goo.gl/pM9WXJDypDDUZHx58" },
  { name: "Rentastic Homes Gurukul Road", location: "Gurukul", url: "https://maps.app.goo.gl/Th3TWRFNADi1Qziv6" },
  { name: "Rentastic Homes Girls Satellite", location: "Satellite", url: "https://maps.app.goo.gl/Phnw5GBsrmtMAYnT8" },
];

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

function ReviewCard({ r }: { r: typeof reviews[number] }) {
  return (
    <div className="shrink-0 w-[300px] md:w-[340px] bg-white rounded-2xl p-lg border border-outline-variant/20 shadow-sm flex flex-col gap-sm mx-3">
      <div className="flex items-center justify-between">
        <Stars rating={r.rating} />
        <span className="text-label-sm text-on-surface-variant">{r.date}</span>
      </div>
      <p className="text-body-sm text-on-surface-variant leading-relaxed flex-1">
        &ldquo;{r.text}&rdquo;
      </p>
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
  );
}

export default function Reviews() {
  const doubled = [...reviews, ...reviews];
  const [reviewOpen, setReviewOpen] = useState(false);

  return (
    <section className="py-xl bg-surface-container-low overflow-hidden">
      {/* Header */}
      <div className="px-gutter max-w-[1280px] mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-md mb-xl">
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
        <button
          onClick={() => setReviewOpen(true)}
          className="shrink-0 inline-flex items-center gap-xs px-lg py-sm rounded-full border border-outline-variant/30 text-body-sm font-medium text-on-surface hover:bg-surface-container transition-colors"
        >
          Write a Review →
        </button>
      </div>

      {/* Auto-scrolling strip */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-surface-container-low to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-surface-container-low to-transparent" />

        <div className="flex w-max animate-reviews-scroll">
          {doubled.map((r, i) => (
            <ReviewCard key={`${r.id}-${i}`} r={r} />
          ))}
        </div>
      </div>

      {/* Property picker modal */}
      {reviewOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setReviewOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-headline-sm text-on-surface font-semibold">Which home are you reviewing?</h3>
                <p className="text-body-sm text-on-surface-variant mt-1">Pick your property to leave a Google review.</p>
              </div>
              <button
                onClick={() => setReviewOpen(false)}
                className="p-1.5 rounded-full hover:bg-neutral-100 transition-colors text-on-surface-variant"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {REVIEW_PROPERTIES.map((p) => (
                <a
                  key={p.url}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setReviewOpen(false)}
                  className="flex items-center justify-between gap-3 p-3 rounded-xl border border-outline-variant/30 hover:bg-surface-container hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <MapPin size={16} className="text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-body-sm font-semibold text-on-surface truncate">{p.name}</p>
                      <p className="text-label-sm text-on-surface-variant">{p.location}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-primary shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
