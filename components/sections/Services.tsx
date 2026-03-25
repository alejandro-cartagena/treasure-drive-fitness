"use client";

import { useInView } from "@/hooks/useInView";
import { siteConfig } from "@/config/site";
import {
  FaArrowRight,
  FaDumbbell,
  FaHandsHelping,
  FaImage,
  FaParking,
  FaUserTie,
  FaUsers,
  FaWater,
} from "react-icons/fa";

const DELAY_CLASSES = ["", "delay-100", "delay-200", "delay-300", "delay-400", "delay-500"] as const;

function ServiceIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "parking":
      return <FaParking className="w-8 h-8" aria-hidden="true" />;
    case "bay":
      return <FaWater className="w-8 h-8" aria-hidden="true" />;
    case "equipment":
      return <FaDumbbell className="w-8 h-8" aria-hidden="true" />;
    case "group":
      return <FaUsers className="w-8 h-8" aria-hidden="true" />;
    case "personal":
      return <FaUserTie className="w-8 h-8" aria-hidden="true" />;
    case "community":
      return <FaHandsHelping className="w-8 h-8" aria-hidden="true" />;
    default:
      return <FaDumbbell className="w-8 h-8" aria-hidden="true" />;
  }
}

function ImagePlaceholder() {
  return (
    <div
      className="aspect-[4/3] w-full bg-surface-alt border border-dashed border-border flex flex-col items-center justify-center gap-2 text-text-muted"
      aria-hidden="true"
    >
      <FaImage className="w-10 h-10 opacity-50" aria-hidden="true" />
      <span className="text-xs font-medium uppercase tracking-widest">Photo coming soon</span>
    </div>
  );
}

export default function Services() {
  const [sectionRef, isInView] = useInView();
  const hasFiveCards = siteConfig.services.length === 5;

  return (
    <section
      id="services"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-14 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-display text-accent text-lg tracking-[0.3em] uppercase mb-2">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-text-primary uppercase tracking-wide">
            Our Services
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {siteConfig.services.map((service, i) => (
            <div
              key={service.title}
              className={`
                group bg-background border border-border overflow-hidden flex flex-col md:col-span-2
                hover:border-accent hover:shadow-lg transition-all duration-300
                ${isInView ? `animate-fade-in-up ${DELAY_CLASSES[i]}` : "opacity-0"}
              `}
            >
              <ImagePlaceholder />
              <div className="p-7 flex flex-col gap-4 flex-1">
                <div className="text-accent group-hover:scale-110 transition-transform duration-200 w-fit">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="font-display text-xl tracking-wider uppercase text-text-primary">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-1">{service.description}</p>
                <a
                  href="/#pricing"
                  className="mt-auto text-xs font-semibold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors duration-150 flex items-center gap-1"
                >
                  Learn more
                  <FaArrowRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
