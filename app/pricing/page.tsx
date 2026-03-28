import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Pricing from "@/components/sections/Pricing";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing — Treasure Drive Fitness",
  description: "Simple, transparent membership plans. No contracts. No hidden fees. Cancel anytime.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Pricing />
        <section className="py-14 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex flex-wrap justify-center gap-x-12 gap-y-5">
              {[
                "No Contracts",
                "No Registration Fee",
                "Unlimited 24/7 Access",
                "Easy App Access",
                "Free Parking",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-sm bg-accent flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12 12"
                      className="w-3 h-3 text-text-inverse"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </span>
                  <span className="font-display text-lg tracking-widest uppercase text-text-primary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
