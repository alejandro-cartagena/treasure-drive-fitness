"use client";

import Image from "next/image";
import { FaCheckCircle, FaDumbbell, FaHeartbeat, FaShieldAlt } from "react-icons/fa";
import { useInView } from "@/hooks/useInView";

import treasureDriveFitnessMaria from "@/public/images/maria-pose-2.jpg";
import treasureDriveFitnessNico from "@/public/images/nico-pose.jpg";
import treasureDriveFitnessJack from "@/public/images/treasure-drive-fitness-work-out-2.jpg";

const coaches = [
  {
    name: "Maria",
    role: "Personal Trainer",
    focus: "Strength, physique coaching, and contest prep fundamentals.",
    qualifications: [
      "NASM Certified Personal Trainer",
      "Precision Nutrition Level 1 Coach",
      "Former competitive bodybuilder",
    ],
    icon: FaDumbbell,
    image: treasureDriveFitnessMaria,
    imageAlt: "Maria, personal trainer at Treasure Drive Fitness",
  },
  {
    name: "Nico",
    role: "Personal Trainer",
    focus: "Sustainable fat loss, mobility, and long-term training habits.",
    qualifications: [
      "NASM Certified Personal Trainer",
      "Corrective Exercise Specialist",
      "Certified in mobility and recovery methods",
    ],
    icon: FaHeartbeat,
    image: treasureDriveFitnessNico,
    imageAlt: "Nico, personal trainer at Treasure Drive Fitness",
  },
  {
    name: "Jack",
    role: "Personal Trainer",
    focus: "Athletic performance, conditioning, and movement quality.",
    qualifications: [
      "NASM Certified Personal Trainer",
      "CPR/AED Certified",
      "Functional movement and injury-prevention specialist",
    ],
    icon: FaShieldAlt,
    image: treasureDriveFitnessJack,
    imageAlt: "Jack, personal trainer at Treasure Drive Fitness",
  },
];

export default function MeetYourCoaches() {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <section
      id="coaches"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-background border-b border-border"
      aria-label="Meet your coaches"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-display text-accent text-lg tracking-[0.3em] uppercase mb-3">Team Treasure Drive</p>
          <h2 className="font-display text-4xl md:text-6xl text-text-primary uppercase tracking-wide mb-4">
            Meet Your Coaches
          </h2>
          <p className="max-w-3xl mx-auto text-text-secondary leading-relaxed">
            Our coaching team combines proven credentials with real-world experience to help you train smarter,
            stay consistent, and keep progressing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {coaches.map((coach, index) => {
            const Icon = coach.icon;
            const delayClass = index === 0 ? "" : index === 1 ? "delay-100" : "delay-200";

            return (
              <article
                key={coach.name}
                className={`
                  group rounded-2xl border border-border bg-surface p-6 md:p-7
                  transition-all duration-300 hover:border-accent hover:shadow-lg
                  ${isInView ? `animate-fade-in-up ${delayClass}` : "opacity-0"}
                `}
              >
                <div className="mb-5 relative aspect-[3/3] w-full rounded-xl overflow-hidden border border-border">
                  <Image
                    src={coach.image}
                    alt={coach.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="w-11 h-11 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>

                <h3 className="font-display text-3xl uppercase tracking-wide text-text-primary mb-1">{coach.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">{coach.role}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{coach.focus}</p>

                <ul className="space-y-2.5">
                  {coach.qualifications.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <FaCheckCircle className="w-3.5 h-3.5 text-accent/75 mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-sm text-text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
