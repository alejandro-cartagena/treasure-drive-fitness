import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import MeetYourCoaches from "@/components/sections/MeetYourCoaches";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import OurGym from "@/components/sections/OurGym";
import Testimonials from "@/components/sections/Testimonials";
import GoogleMarquee from "@/components/sections/GoogleMarquee";
import Instagram from "@/components/sections/Instagram";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <OurGym />
        <MeetYourCoaches />
        <Pricing />
        <GoogleMarquee />
        <Instagram />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
