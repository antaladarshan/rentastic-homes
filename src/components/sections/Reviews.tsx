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
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setReviewOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-5"
            style={{ width: "min(420px, 92vw)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-label-caps text-primary tracking-widest uppercase text-xs mb-1">Leave a review</p>
                <h3 className="text-xl font-bold text-on-surface leading-snug">Which home are you reviewing?</h3>
                <p className="text-sm text-on-surface-variant mt-1">Pick your property — you&apos;ll be taken to Google Maps to leave your review.</p>
              </div>
              <button
                onClick={() => setReviewOpen(false)}
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors text-on-surface-variant"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Property list */}
            <div className="flex flex-col gap-3">
              {REVIEW_PROPERTIES.map((p) => (
                <a
                  key={p.url}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setReviewOpen(false)}
                  className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-primary/50 hover:bg-amber-50/40 transition-all group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-on-surface text-sm leading-snug">{p.name}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">{p.location}, Ahmedabad</p>
                  </div>
                  <ArrowUpRight size={18} className="shrink-0 text-primary opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>

            {/* Footer note */}
            <p className="text-xs text-center text-on-surface-variant/60">Opens Google Maps in a new tab</p>
          </div>
        </div>
      )}
    </section>
  );
}
