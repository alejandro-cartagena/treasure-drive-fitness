"use client";

import { useInView } from "@/hooks/useInView";
import { FaHeart, FaImage, FaMedal } from "react-icons/fa";

export default function About() {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-background border-b border-border"
      aria-label="About the gym"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Copy */}
          <div className={isInView ? "animate-fade-in-up" : "opacity-0"}>
            <p className="flex items-center gap-2 font-display text-accent text-sm tracking-[0.35em] uppercase mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
              About the gym
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-text-primary uppercase tracking-wide leading-[1.05] mb-6">
              Founded by a Fitness Champion
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10">
              Treasure Drive Fitness was founded by Maria, a former competitive bodybuilder and passionate advocate for fitness. As a woman-owned business, we&apos;re dedicated to sharing Maria&apos;s expertise and creating a gym where everyone feels welcome and inspired to achieve their goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent mb-3">
                  <FaMedal className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg uppercase tracking-wide text-text-primary mb-2">
                  Champion heritage
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Coaching rooted in real competitive experience—not trends.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent mb-3">
                  <FaHeart className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg uppercase tracking-wide text-text-primary mb-2">
                  Woman-owned
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  A welcoming space built for every body and every goal.
                </p>
              </div>
            </div>
          </div>

          {/* Bento media */}
          <div
            className={`grid grid-cols-2 gap-3 sm:gap-4 ${isInView ? "animate-fade-in-up delay-100" : "opacity-0"}`}
          >
            <div className="col-span-2 relative rounded-2xl overflow-hidden border border-border bg-surface-alt aspect-[16/10] flex flex-col items-center justify-center gap-2 text-text-muted">
              <FaImage className="w-12 h-12 opacity-40" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-widest">Gym floor — photo soon</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-border bg-surface-alt aspect-square flex flex-col items-center justify-center gap-2 text-text-muted">
              <FaImage className="w-10 h-10 opacity-40" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-widest text-center px-2">Coach — photo soon</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-accent flex flex-col items-center justify-center aspect-square p-6 text-center text-text-inverse">
              <p className="font-display text-xs tracking-[0.3em] uppercase text-text-inverse/80 mb-2">Founded by</p>
              <p className="font-display text-4xl sm:text-5xl uppercase leading-none mb-1">Maria</p>
              <p className="text-sm text-text-inverse/85 font-sans">Champion & coach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
