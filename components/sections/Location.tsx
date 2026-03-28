"use client";

import { useInView } from "@/hooks/useInView";
import { siteConfig } from "@/config/site";

export default function Location() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="location"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-background border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-10 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-display text-accent text-lg tracking-[0.3em] uppercase mb-2">
            Find Us
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-text-primary uppercase tracking-wide">
            Our Location
          </h2>
          <p className="mt-3 text-text-muted text-base">{siteConfig.location}</p>
        </div>

        <div
          className={`relative overflow-hidden border border-border rounded-none ${
            isInView ? "animate-fade-in delay-100" : "opacity-0"
          }`}
        >
          <div className="aspect-16/7 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.6491221606834!2d-80.14534479999999!3d25.848104900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b255289a47f1%3A0x2793a9427198225c!2sTreasure%20Drive%20Fitness!5e0!3m2!1sen!2sus!4v1774636874377!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Treasure Drive Fitness on Google Maps"
            />
          </div>
        </div>

        <div
          className={`mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 ${
            isInView ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-accent shrink-0"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className="text-sm text-text-secondary uppercase tracking-widest font-medium">
              {siteConfig.location}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-accent shrink-0"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="text-sm text-text-secondary uppercase tracking-widest font-medium">
              Open 24/7
            </span>
          </div>

          <a
            href="https://maps.google.com/?q=Treasure+Drive+Fitness"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:ml-auto inline-flex items-center px-5 py-2 bg-accent text-text-inverse text-sm font-semibold uppercase tracking-widest hover:bg-accent-hover transition-colors duration-150"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
