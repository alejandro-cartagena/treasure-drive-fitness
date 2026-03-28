import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import OurGym from "@/components/sections/OurGym";
import Location from "@/components/sections/Location";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Gym — Treasure Drive Fitness",
  description: `Take a look inside Treasure Drive Fitness — a 5,000+ sq ft training space located in ${siteConfig.location}. Open 24/7.`,
};

export default function OurGymPage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <OurGym />
        <Location />
      </main>
      <Footer />
    </>
  );
}
