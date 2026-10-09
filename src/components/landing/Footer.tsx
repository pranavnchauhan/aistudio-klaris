"use client";

import Link from "next/link";
import Image from "next/image";

import { KLARIS_SOCIALS, SOCIAL_ICON_PATHS } from "@/lib/social";

const primaryLinks = [
  { label: "About", href: "/about" },
  { label: "For Accountants", href: "/for-accountants" },
  { label: "For Financial Advisers", href: "/for-financial-advisors" },
  { label: "For Families", href: "/for-families" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Security", href: "/security" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300">
      <div className="max-w-[1200px] mx-auto px-5 py-12">
        {/* Row 1: Logo + tagline + social */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <Link href="/" aria-label="Klaris home">
            <Image
              src="/klaris-logo.webp"
              alt="Klaris logo"
              width={120}
              height={40}
              className="h-10 brightness-0 invert object-contain"
            />
          </Link>
          <p className="text-sm text-gray-400 text-center max-w-md">
            Wealth structure visualisation software for Australian families, accountants,
            and financial advisers who need clearer structure, asset, loan, and document records.
          </p>
          <div className="flex items-center gap-4">
            {KLARIS_SOCIALS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Klaris on ${social.name}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d={SOCIAL_ICON_PATHS[social.name]} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Row 2: Nav links */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-3">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Row 3: Legal line */}
        <p className="mt-6 text-xs text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Krrisp Pty Ltd (ABN 38 609 221 570
          &middot; ACN 609 221 570) trading as Klaris AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
