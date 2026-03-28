import type { SocialLink } from "@/types/social";

/** Mindbody purchase / signup link for membership CTAs */
const MINDBODY_SIGNUP_URL =
  "https://clients.mindbodyonline.com/classic/ws?studioid=5734235&stype=43&prodid=100023";

export const siteConfig = {
  name: "Treasure Drive Fitness",
  tagline: ["Your Fitness.", "Your Schedule"],
  description: "24/7 Gym Access",
  email: "",
  phone: "(786)-277-1533",
  location: "North Bay Village, FL",
  rating: 4.5,
  reviewCount: 100,

   /** Physical address */
   address: {
    line1: "7601 E Treasure Dr",
    city: "North Bay Village",
    state: "FL",
    zip: "33141",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Our Gym", href: "/our-gym" },
  ],
  socials: [
    {
      platform: "instagram" as const,
      url: "https://www.instagram.com/treasuredrivefitness/",
    },
  ] satisfies SocialLink[],

  services: [
    {
      icon: "equipment",
      title: "Variety of Equipment",
      description:
        "Cardio, free weights, machines, and more—everything you need to build strength, endurance, and confidence.",
    },
    {
      icon: "group",
      title: "Group Classes",
      description:
        "Stay motivated in high-energy sessions led by expert coaches and built for all fitness levels.",
    },
    {
      icon: "personal",
      title: "Personal Training",
      description:
        "Get 1-on-1 coaching with custom programming focused on your goals, form, and steady progress.",
    },
    {
      icon: "parking",
      title: "Free Parking",
      description:
        "Convenient on-site parking so you can roll in, train, and go—without the stress of hunting for a spot.",
    },
    {
      icon: "bay",
      title: "Great Bay Views",
      description:
        "Work out with open water and skyline in sight—training that feels as good as the view.",
    },
    {
      icon: "community",
      title: "Community",
      description:
        "Train alongside people who lift each other up—support, accountability, and genuine connection.",
    },
  ],

  programs: [
    {
      title: "Foundations",
      duration: "4 Weeks",
      level: "Beginner",
      description:
        "Build a rock-solid base. This program teaches proper form, establishes healthy habits, and ignites your metabolism — perfect for those just starting their journey.",
      featured: false,
      ctaLabel: "Start Here",
      ctaHref: "/#pricing",
    },
    {
      title: "Iron Build",
      duration: "8 Weeks",
      level: "Intermediate",
      description:
        "Designed to maximize muscle and incinerate fat simultaneously. Periodized strength training paired with targeted conditioning to push you past your limits.",
      featured: true,
      ctaLabel: "Get Started",
      ctaHref: "/#pricing",
    },
    {
      title: "Elite Performance",
      duration: "12 Weeks",
      level: "Advanced",
      description:
        "For serious athletes ready to compete with themselves. Advanced programming, biometric tracking, and 1-on-1 coaching to forge peak athletic performance.",
      featured: false,
      ctaLabel: "Apply Now",
      ctaHref: "/#pricing",
    },
  ],

  mindbodySignupUrl: MINDBODY_SIGNUP_URL,

  pricing: [
    {
      tier: "Monthly",
      price: 80,
      period: "month",
      featured: true,
      description: "Flexible recurring membership with full gym access.",
      features: ["Full gym access", "All equipment & amenities", "Cancel anytime"],
      ctaLabel: "Get Started!",
      ctaHref: MINDBODY_SIGNUP_URL,
    },
    {
      tier: "Day Pass",
      price: 15,
      period: "day",
      featured: false,
      description: "Single-day access when you are in town or want to try the gym.",
      features: ["One full day of access", "All equipment", "Great for visitors"],
      ctaLabel: "Get Started!",
      ctaHref: MINDBODY_SIGNUP_URL,
    },
    {
      tier: "Weekly Pass",
      price: 55,
      period: "week",
      featured: false,
      description: "Seven consecutive days of training—ideal for short-term goals.",
      features: ["7 days of full access", "All equipment", "Try before you commit longer term"],
      ctaLabel: "Get Started!",
      ctaHref: MINDBODY_SIGNUP_URL,
    },
    {
      tier: "6 Months Upfront",
      price: 384,
      period: "upfront",
      featured: false,
      description: "Pay for half a year upfront and save versus month-to-month.",
      compareAtPrice: 480,
      features: ["6 months of full access", "Lower effective monthly rate", "Paid in full upfront"],
      ctaLabel: "Get Started!",
      ctaHref: MINDBODY_SIGNUP_URL,
    },
    {
      tier: "1 Year Upfront",
      price: 720,
      period: "upfront",
      featured: false,
      description: "Our best value—full year of access at the lowest effective rate.",
      compareAtPrice: 960,
      features: ["12 months of full access", "Maximum savings vs monthly", "Paid in full upfront"],
      ctaLabel: "Get Started!",
      ctaHref: MINDBODY_SIGNUP_URL,
    },
  ],

  testimonials: [
    {
      name: "Marcus T.",
      role: "Software Engineer",
      quote:
        "I've tried three gyms before TDF and nothing stuck. Coach pushed me beyond what I thought I was capable of — dropped 22 lbs in 10 weeks and I actually enjoy training now.",
      stars: 5,
    },
    {
      name: "Daniela R.",
      role: "Marketing Director",
      quote:
        "As a busy professional, I needed something efficient and results-driven. The online coaching program fit perfectly into my schedule. I'm stronger than I've ever been.",
      stars: 5,
    },
    {
      name: "James K.",
      role: "Entrepreneur",
      quote:
        "The nutrition coaching alone was worth every penny. I had no idea how much my diet was holding me back. Total game-changer. The whole team genuinely cares about your progress.",
      stars: 5,
    },
  ],
};
