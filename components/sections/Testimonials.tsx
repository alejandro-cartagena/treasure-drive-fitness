"use client";

import { useInView } from "@/hooks/useInView";
import { siteConfig } from "@/config/site";

const DELAY_CLASSES = ["", "delay-200", "delay-400"] as const;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < count ? "text-accent" : "text-border"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [sectionRef, isInView] = useInView();

  return (
    <section
      id="testimonials"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-14 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-display text-accent text-lg tracking-[0.3em] uppercase mb-2">
            Real Results
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-text-primary uppercase tracking-wide mb-6">
            What Members Say
          </h2>

          {/* Aggregate rating */}
          <div className="inline-flex flex-col items-center gap-2 bg-background border border-border px-8 py-4">
            <div className="font-display text-5xl text-text-primary leading-none">
              {siteConfig.rating}
            </div>
            <Stars count={Math.round(siteConfig.rating)} />
            <p className="text-sm text-text-muted">
              Based on <span className="text-text-primary font-medium">{siteConfig.reviewCount}+</span> verified reviews
            </p>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((review, i) => (
            <div
              key={review.name}
              className={`
                bg-background border border-border p-7 flex flex-col gap-5
                hover:border-accent transition-colors duration-300
                ${isInView ? `animate-fade-in-up ${DELAY_CLASSES[i]}` : "opacity-0"}
              `}
            >
              <Stars count={review.stars} />
              <blockquote className="text-sm text-text-secondary leading-relaxed flex-1 italic">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-sm text-text-primary">{review.name}</p>
                <p className="text-xs text-text-muted uppercase tracking-wider mt-0.5">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
