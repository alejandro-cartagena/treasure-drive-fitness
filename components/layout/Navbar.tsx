"use client";

import { useLayoutEffect, useState } from "react";
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

const MD_QUERY = "(min-width: 768px)";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const showSolid = !isDesktop || scrolled || isOpen;

  useLayoutEffect(() => {
    const mq = window.matchMedia(MD_QUERY);
    const updateDesktop = () => setIsDesktop(mq.matches);
    const updateScroll = () => setScrolled(window.scrollY > 10);

    updateDesktop();
    updateScroll();
    mq.addEventListener("change", updateDesktop);
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      mq.removeEventListener("change", updateDesktop);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <header
      className={
        showSolid
          ? "fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-md bg-background/90 border-b border-border"
          : "fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-transparent border-b border-transparent"
      }
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="/" className="flex-shrink-0 flex items-center" aria-label={siteConfig.name}>
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={120}
            height={120}
            priority
            className="-mb-4 h-30 w-auto object-contain transition-all duration-300"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                showSolid
                  ? "text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-150 tracking-wide uppercase"
                  : "text-sm font-medium text-text-inverse hover:text-accent transition-colors duration-150 tracking-wide uppercase"
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
          {siteConfig.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${social.platform}`}
              className={
                showSolid
                  ? "text-text-muted hover:text-accent transition-colors duration-150"
                  : "text-text-inverse/70 hover:text-accent transition-colors duration-150"
              }
            >
              <SocialIcon platform={social.platform} />
            </a>
          ))}
          <a
            href="/#pricing"
            className="inline-flex items-center px-5 py-2 bg-accent text-text-inverse text-sm font-semibold uppercase tracking-widest hover:bg-accent-hover transition-colors duration-150 rounded-none"
          >
            Start Today
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-text-secondary hover:text-accent transition-colors duration-150"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 pt-4 pb-6 flex flex-col gap-4">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-text-secondary hover:text-accent transition-colors duration-150 tracking-wide uppercase py-1"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2">
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
          <a
            href="/#pricing"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center px-5 py-3 bg-accent text-text-inverse text-sm font-semibold uppercase tracking-widest hover:bg-accent-hover transition-colors duration-150 mt-2"
          >
            Start Today
          </a>
        </div>
      )}
    </header>
  );
}
