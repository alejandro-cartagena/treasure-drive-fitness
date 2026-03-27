"use client";

import { useInView } from "@/hooks/useInView";
import { siteConfig } from "@/config/site";

export default function CTA() {
  const [sectionRef, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-20 md:py-28 bg-accent overflow-hidden"
      aria-label="Call to action"
    >
      {/* Dark overlay to tone down the red */}
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

      {/* Background texture — subtle diagonal lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className={`font-display text-text-inverse/60 text-lg tracking-[0.4em] uppercase mb-4 ${
            isInView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Ready to Start?
        </p>
        <h2
          className={`font-display text-5xl sm:text-6xl md:text-7xl text-text-inverse uppercase leading-none tracking-widest mb-6 ${
            isInView ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          {siteConfig.tagline.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p
          className={`text-text-inverse/75 text-base md:text-lg max-w-xl mx-auto mb-10 ${
            isInView ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          Take the first step to your fitness journey today.
        </p>
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
            isInView ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          <a
            href="/#pricing"
            className="inline-flex items-center justify-center px-10 py-4 bg-background text-accent text-sm font-semibold uppercase tracking-widest hover:bg-surface transition-colors duration-200 w-full sm:w-auto"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
