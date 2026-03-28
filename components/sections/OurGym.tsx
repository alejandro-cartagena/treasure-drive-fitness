"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { siteConfig } from "@/config/site";
import { FaChevronLeft, FaChevronRight, FaPlay, FaTimes } from "react-icons/fa";
import gymView1 from "@/public/images/treasure-drive-fitness-gym-view1.jpg";
import gymView2 from "@/public/images/treasure-drive-fitness-gym-view2.jpg";
import gymView3 from "@/public/images/treasure-drive-fitness-gym-view3.jpg";
import equipment from "@/public/images/treasure-drive-fitness-equipment.jpg";
import equipment2 from "@/public/images/treasure-drive-fitness-equipment-2.jpg";
import cardioEquipment3 from "@/public/images/treasure-drive-fitness-cardio-equipment3.jpg";
import cardioEquipment4 from "@/public/images/treasure-drive-fitness-cardio-equipment4.jpg";
import lifting from "@/public/images/treasure-drive-fitness-lifting.jpg";
import lifting2 from "@/public/images/treasure-drive-fitness-lifting2.jpg";
import training from "@/public/images/treasure-drive-fitness-training.jpg";
import workOut from "@/public/images/treasure-drive-fitness-work-out.jpg";
import workOut2 from "@/public/images/treasure-drive-fitness-work-out-2.jpg";
import workOut3 from "@/public/images/treasure-drive-fitness-work-out-3.jpg";
import workOut4 from "@/public/images/treasure-drive-fitness-work-out-4.jpg";
import treadmill from "@/public/images/treasure-drive-fitness-treadmill.jpg";

const TOUR_VIDEO_PLACEHOLDER = {
  title: "Gym Tour Video",
  subtitle: "A full walkthrough of Treasure Drive Fitness",
};

const GYM_CAROUSEL_ITEMS = [
  { label: "Main Training Floor", image: gymView1, imageAlt: "Main training floor at Treasure Drive Fitness" },
  { label: "Gym View", image: gymView2, imageAlt: "Gym view at Treasure Drive Fitness" },
  { label: "Gym Space", image: gymView3, imageAlt: "Gym space at Treasure Drive Fitness" },
  { label: "Equipment", image: equipment, imageAlt: "Fitness equipment at Treasure Drive Fitness" },
  { label: "Equipment Area", image: equipment2, imageAlt: "Equipment area at Treasure Drive Fitness" },
  { label: "Cardio Equipment", image: cardioEquipment3, imageAlt: "Cardio equipment at Treasure Drive Fitness" },
  { label: "Cardio Zone", image: cardioEquipment4, imageAlt: "Cardio zone at Treasure Drive Fitness" },
  { label: "Lifting", image: lifting, imageAlt: "Weight lifting at Treasure Drive Fitness" },
  { label: "Strength Training", image: lifting2, imageAlt: "Strength training at Treasure Drive Fitness" },
  { label: "Training", image: training, imageAlt: "Training at Treasure Drive Fitness" },
  { label: "Workout", image: workOut, imageAlt: "Workout at Treasure Drive Fitness" },
  { label: "Workout Space", image: workOut2, imageAlt: "Workout space at Treasure Drive Fitness" },
  { label: "Training Floor", image: workOut3, imageAlt: "Training floor at Treasure Drive Fitness" },
  { label: "Fitness Area", image: workOut4, imageAlt: "Fitness area at Treasure Drive Fitness" },
  { label: "Treadmills", image: treadmill, imageAlt: "Treadmills at Treasure Drive Fitness" },
] as const;

export default function OurGym() {
  const [sectionRef, isInView] = useInView();
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => ((i ?? 0) + 1) % GYM_CAROUSEL_ITEMS.length);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => ((i ?? 0) - 1 + GYM_CAROUSEL_ITEMS.length) % GYM_CAROUSEL_ITEMS.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  const STEP = 3;

  const goPrevious = () => {
    setActiveIndex((current) => (current - STEP + GYM_CAROUSEL_ITEMS.length) % GYM_CAROUSEL_ITEMS.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + STEP) % GYM_CAROUSEL_ITEMS.length);
  };

  return (
    <section
      id="our-gym"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`mb-14 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="font-display text-accent text-lg tracking-[0.3em] uppercase mb-2">
                The Space
              </p>
              <h2 className="font-display text-4xl md:text-6xl text-text-inverse uppercase tracking-wide">
                Our Gym
              </h2>
            </div>
            <div className="flex items-center gap-2 text-text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span className="text-sm font-medium uppercase tracking-widest">
                {siteConfig.location}
              </span>
            </div>
          </div>
        </div>

        {/* Video placeholder */}
        <div
          className={`relative overflow-hidden rounded-2xl border border-border bg-surface mb-20 ${
            isInView ? "animate-fade-in delay-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-black via-text-secondary/80 to-black"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

          <div className="relative z-10 min-h-[320px] md:min-h-[520px] flex flex-col justify-between p-6 md:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-xs sm:text-sm text-accent tracking-[0.3em] uppercase mb-3">
                  Video Tour
                </p>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-text-inverse uppercase tracking-wide leading-tight">
                  {TOUR_VIDEO_PLACEHOLDER.title}
                </h3>
                <p className="text-sm sm:text-base text-text-inverse/80 mt-3 max-w-xl leading-relaxed">
                  {TOUR_VIDEO_PLACEHOLDER.subtitle}
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-text-inverse/80 text-xs uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                Placeholder
              </div>
            </div>

            <div className="flex items-center justify-center py-6">
              <div className="w-20 h-20 rounded-full bg-accent/85 text-text-inverse flex items-center justify-center shadow-[0_0_0_8px_rgba(220,38,38,0.2)]">
                <FaPlay className="w-7 h-7 ml-1" aria-hidden="true" />
              </div>
            </div>

            <div className="flex items-center justify-between text-text-inverse/75 text-xs sm:text-sm uppercase tracking-[0.2em] border-t border-white/20 pt-4">
              <span>Tour footage coming soon</span>
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className={`mt-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 sm:px-6 md:px-8 ${
            isInView ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-center justify-center mb-4">
              <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide text-text-inverse mt-6">
                Gym Gallery
              </h3>
              
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={goPrevious}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/30 bg-black/40 text-text-inverse hover:border-accent hover:bg-black/60 transition-colors duration-200 flex items-center justify-center"
                aria-label="Show previous gym image"
              >
                <FaChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/30 bg-black/40 text-text-inverse hover:border-accent hover:bg-black/60 transition-colors duration-200 flex items-center justify-center"
                aria-label="Show next gym image"
              >
                <FaChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {GYM_CAROUSEL_ITEMS.map((item, index) => {
                  const slot = (index - activeIndex + GYM_CAROUSEL_ITEMS.length) % GYM_CAROUSEL_ITEMS.length;
                  const isVisible = slot < STEP;
                  return (
                    <article
                      key={item.label}
                      className={`relative overflow-hidden rounded-xl border border-border bg-surface group cursor-pointer${isVisible ? "" : " hidden"}`}
                      onClick={() => setLightboxIndex(index)}
                    >
                      <div className="relative h-56 sm:h-64 md:h-96 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-5" aria-label="Gym highlights carousel indicators">
              {GYM_CAROUSEL_ITEMS.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    index === activeIndex ? "w-8 bg-accent" : "w-2 bg-border hover:bg-accent/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 ${
            isInView ? "animate-fade-in-up delay-300" : "opacity-0"
          }`}
        >
          {[
            { value: "5,000+", label: "Sq Ft" },
            { value: "50+", label: "Equipment Pieces" },
            { value: "24/7", label: "Hours of Operation" },
          ].map((stat, i, arr) => (
            <div
              key={stat.label}
              className={`text-center border border-border p-5 ${
                i === arr.length - 1
                  ? "col-span-2 md:col-span-1 max-w-[calc(50%-12px)] md:max-w-none w-full mx-auto"
                  : ""
              }`}
            >
              <div className="font-display text-3xl md:text-4xl text-accent tracking-wide">
                {stat.value}
              </div>
              <div className="text-xs text-text-inverse uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
            aria-label="Close lightbox"
          >
            <FaTimes className="w-4 h-4" />
          </button>

          <button
            type="button"
            className="absolute left-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:border-accent transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + GYM_CAROUSEL_ITEMS.length) % GYM_CAROUSEL_ITEMS.length); }}
            aria-label="Previous image"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[85vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GYM_CAROUSEL_ITEMS[lightboxIndex].image}
              alt={GYM_CAROUSEL_ITEMS[lightboxIndex].imageAlt}
              className="object-contain max-h-[85vh] w-full"
              width={1200}
              height={800}
              priority
            />
            <p className="text-center text-white/70 text-sm mt-3 uppercase tracking-widest">
              {GYM_CAROUSEL_ITEMS[lightboxIndex].label} &mdash; {lightboxIndex + 1} / {GYM_CAROUSEL_ITEMS.length}
            </p>
          </div>

          <button
            type="button"
            className="absolute right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:border-accent transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % GYM_CAROUSEL_ITEMS.length); }}
            aria-label="Next image"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
}
