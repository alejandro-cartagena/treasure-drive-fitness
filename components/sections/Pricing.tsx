"use client";

import { useInView } from "@/hooks/useInView";
import { siteConfig } from "@/config/site";

const DELAY_TOP = ["", "delay-100", "delay-200"] as const;
const DELAY_BOTTOM = ["delay-300", "delay-400"] as const;

type PricingPlan = (typeof siteConfig.pricing)[number];

function PricingCard({
  plan,
  delayClass,
  isInView,
}: {
  plan: PricingPlan;
  delayClass: string;
  isInView: boolean;
}) {
  const isUpfront = plan.period === "upfront" && plan.compareAtPrice != null;

  return (
    <div
      className={`
        relative flex flex-col h-full bg-background border-2 p-8 transition-all duration-300
        ${plan.featured ? "border-accent shadow-2xl md:-mt-4 md:-mb-4" : "border-border hover:border-accent"}
        ${isInView ? `animate-scale-in ${delayClass}` : "opacity-0"}
      `}
    >
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent px-4 py-1">
          <span className="font-display text-xs tracking-widest uppercase text-text-inverse whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display text-2xl tracking-widest uppercase text-text-primary mb-1">{plan.tier}</h3>
        <p className="text-sm text-text-muted">{plan.description}</p>
      </div>

      {isUpfront ? (
        <div className="mb-6">
          <div className="flex items-end gap-1">
            <span className="font-display text-6xl text-text-primary leading-none">${plan.price}</span>
            <span className="text-text-muted text-sm mb-2 uppercase tracking-wider">total</span>
          </div>
          <p className="mt-2 text-sm text-text-muted">
            Instead of ${plan.compareAtPrice}
          </p>
        </div>
      ) : (
        <div className="flex items-end gap-1 mb-6">
          <span className="font-display text-6xl text-text-primary leading-none">${plan.price}</span>
          <span className="text-text-muted text-sm mb-2">/ {plan.period}</span>
        </div>
      )}

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
            <span className="text-accent font-bold mt-0.5 flex-shrink-0">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={plan.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          mt-auto inline-flex items-center justify-center px-6 py-3
          text-sm font-semibold uppercase tracking-widest
          transition-colors duration-200
          ${plan.featured
            ? "bg-accent text-text-inverse hover:bg-accent-hover"
            : "bg-surface border border-border text-text-primary hover:bg-accent hover:text-text-inverse hover:border-accent"
          }
        `}
      >
        {plan.ctaLabel}
      </a>
    </div>
  );
}

export default function Pricing() {
  const [sectionRef, isInView] = useInView();
  const plans = siteConfig.pricing;
  const topPlans = plans.slice(0, 3);
  const bottomPlans = plans.slice(3, 5);

  return (
    <section
      id="pricing"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-display text-accent text-lg tracking-[0.3em] uppercase mb-2">Simple &amp; Transparent</p>
          <h2 className="font-display text-4xl md:text-6xl text-text-primary uppercase tracking-wide">
            Membership Plans
          </h2>
          <p className="mt-4 text-text-muted text-base max-w-md mx-auto">
            No contracts. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {topPlans.map((plan, i) => (
              <PricingCard
                key={plan.tier}
                plan={plan}
                delayClass={DELAY_TOP[i] ?? ""}
                isInView={isInView}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {bottomPlans.map((plan, i) => (
              <PricingCard
                key={plan.tier}
                plan={plan}
                delayClass={DELAY_BOTTOM[i] ?? ""}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
