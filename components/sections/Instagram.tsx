"use client";

import { useEffect } from "react";
import { useInView } from "@/hooks/useInView";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

export default function Instagram() {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  useEffect(() => {
    const SCRIPT_SRC = "https://www.instagram.com/embed.js";
    const processEmbed = () => window.instgrm?.Embeds?.process();

    const existing = document.querySelector(
      `script[src="${SCRIPT_SRC}"]`
    ) as HTMLScriptElement | null;

    if (existing) {
      if (window.instgrm?.Embeds) {
        // Script already loaded — process immediately
        processEmbed();
      } else {
        // Script tag is in the DOM but still loading — wait for it
        existing.addEventListener("load", processEmbed);
        return () => existing.removeEventListener("load", processEmbed);
      }
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = processEmbed;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="instagram"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-background border-b border-border"
      aria-label="Treasure Drive Fitness Instagram"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-display text-accent text-sm tracking-[0.35em] uppercase mb-3">Follow Along</p>
          <h2 className="font-display text-4xl md:text-6xl text-text-primary uppercase tracking-wide mb-4">
            On Instagram
          </h2>
          <p className="max-w-3xl mx-auto text-text-secondary leading-relaxed">
            Check out workouts, gym updates, and the Treasure Drive Fitness community in action.
          </p>
        </div>

        <blockquote
          className={`instagram-media ${isInView ? "animate-fade-in-up delay-100" : "opacity-0"}`}
          data-instgrm-permalink="https://www.instagram.com/treasuredrivefitness/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: 0,
            minWidth: "326px",
            padding: 0,
            width: "100%",
          }}
        />
      </div>
    </section>
  );
}
