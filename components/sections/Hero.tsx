"use client";

import { useRef } from "react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      className="relative min-h-[100vh] h-[100vh] flex items-center justify-center overflow-hidden bg-black pt-20"
      aria-label="Hero"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-55"
        aria-hidden="true"
      >
        <source src="/videos/treasure-drive-fitness-hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/85"
        aria-hidden="true"
      />

      {/* Red accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-accent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <p className="animate-fade-in font-display text-accent text-xl md:text-2xl tracking-[0.2em] uppercase mb-4">
          {siteConfig.location}
        </p>
        <h1 className="animate-fade-in-up delay-100 font-display text-6xl sm:text-7xl md:text-8xl text-text-inverse uppercase leading-none tracking-widest mb-6">
          {siteConfig.tagline.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-text-inverse uppercase tracking-[0.2em] font-semibold max-w-xl mx-auto mb-10 leading-relaxed">
          {siteConfig.description}
        </p>
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/#pricing"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-text-inverse text-sm font-semibold uppercase tracking-widest hover:bg-accent-hover transition-colors duration-200 w-full sm:w-auto"
          >
            Start Now
          </a>
          <a
            href="/#about"
            className="inline-flex items-center justify-center px-8 py-4 border border-text-inverse/40 text-text-inverse text-sm font-semibold uppercase tracking-widest hover:border-accent hover:text-accent transition-colors duration-200 w-full sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-text-muted text-xs uppercase tracking-widest font-sans">Scroll</span>
        <div className="animate-bounce-subtle text-text-muted/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
