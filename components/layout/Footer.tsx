import Image from "next/image";
import { siteConfig } from "@/config/site";
import type { SocialLink } from "@/types/social";

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SocialIcon({ platform }: { platform: SocialLink["platform"] }) {
  if (platform === "instagram") return <InstagramIcon />;
  return null;
}

export default function Footer() {
  return (
    <footer className="bg-text-primary text-text-inverse" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand — same full-color logo as navbar (no invert on dark bg) */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <a href="/" className="inline-flex sm:-ml-6" aria-label={siteConfig.name}>
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                width={120}
                height={120}
                className="h-28 sm:h-33 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs text-center md:text-left">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 mt-1">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.platform}`}
                  className="text-text-muted hover:text-accent transition-colors duration-150"
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-display text-xl tracking-widest uppercase mb-5 text-text-inverse">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors duration-150 uppercase tracking-wide"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-display text-xl tracking-widest uppercase mb-5 text-text-inverse">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-text-muted items-center md:items-start">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent transition-colors duration-150"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="hover:text-accent transition-colors duration-150"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-center md:text-left">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${siteConfig.address.line1}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-150 leading-relaxed"
                >
                  {siteConfig.address.line1}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span className="uppercase tracking-widest font-display text-sm">
            Built for Champions
          </span>
        </div>
      </div>
    </footer>
  );
}
