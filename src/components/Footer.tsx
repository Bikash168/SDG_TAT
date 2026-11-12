import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { SocialIcon, type SocialPlatform } from "./SocialIcons";

const ACADEMICS_LINKS = [
  { label: "Library", href: "/library" },
  { label: "IQAC", href: "/iqac" },
  { label: "Placement", href: "/placement" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Student Clubs", href: "/student-clubs" },
  { label: "CISCO thingQbator", href: "/cisco-thingqbator" },
  { label: "E-Governance Portal", href: "/e-governance" },
  { label: "Grievance", href: "/grievance" },
  { label: "ICC", href: "/icc" },
];

const INSTITUTION_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "NAAC", href: "/naac" },
  { label: "NBA", href: "/nba" },
  { label: "NIRF", href: "/nirf" },
  { label: "SIRO (DSIR)", href: "/siro-dsir" },
  { label: "AICTE Approvals", href: "/aicte-approvals" },
  { label: "Career", href: "/career" },
  { label: "Information Brochure", href: "/information-brochure" },
];

const GROUP_WEBSITES = [
  {
    label: "Trident Academy of Creative Technology (TACT)",
    href: "https://tact.ac.in",
  },
  {
    label: "Trident Academy of Professional Studies (TAPS)",
    href: "https://taps.ac.in",
  },
  {
    label: "Trident School of Biotech Sciences (TSBS)",
    href: "https://tsbs.ac.in",
  },
  {
    label: "Trident Institute of Pharmaceutical Sciences & Research (TIPH)",
    href: "https://tiph.ac.in",
  },
  {
    label: "The DF Group",
    href: "https://trident.ac.in",
  },
];

const LEGAL_LINKS = [
  { label: "PRIVACY POLICY", href: "/privacy-policy" },
  { label: "DISCLAIMER", href: "/disclaimer" },
  { label: "TERMS OF USE", href: "/terms-of-use" },
];

const FOOTER_SOCIALS: {
  platform: SocialPlatform;
  label: string;
  href: string;
}[] = [
  { platform: "facebook", label: "Facebook", href: "https://facebook.com" },
  { platform: "x", label: "X", href: "https://x.com" },
  { platform: "youtube", label: "YouTube", href: "https://youtube.com" },
  { platform: "instagram", label: "Instagram", href: "https://instagram.com" },
  { platform: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
];

function FooterSectionHeading({ title }: { title: string }) {
  return (
    <h2 className="mb-5 inline-block bg-gradient-to-r from-white/[0.07] via-white/[0.03] to-transparent px-3 py-1.5 font-serif text-[12px] font-bold tracking-[0.08em] text-white uppercase">
      {title}
    </h2>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#181717] text-neutral-300">
      {/* Subtle Bottom-Right Logo Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-16 -right-12 h-[290px] w-[290px] opacity-[0.06]"
      >
        <Image
          src="/images/trident-logo.png"
          alt=""
          width={290}
          height={290}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.95fr_0.9fr_1.15fr] lg:gap-8">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:pr-6">
            <BrandLogo variant="dark" />

            <p className="mt-5 max-w-[310px] text-[13px] leading-[1.65] text-neutral-300">
              Where Education Meets Excellence — Trident Academy of Technology
              empowers future professionals with quality education, innovation,
              and industry-ready skills.
            </p>

            <div className="mt-7 space-y-4 text-[12.5px] text-neutral-300">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-neutral-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <address className="not-italic leading-[1.55] pt-0.5 text-neutral-300">
                  F2/A, Chandaka Industrial Estate,
                  <br />
                  In front of Infocity, Bhubaneswar,
                  <br />
                  Odisha, Pin: 751024, India
                </address>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-neutral-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a
                  href="tel:+919861191195"
                  className="transition-colors hover:text-white"
                >
                  +91 98611 91195
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-neutral-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <a
                  href="mailto:info@trident.ac.in"
                  className="transition-colors hover:text-white"
                >
                  info@trident.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Academics & Student Life */}
          <div>
            <FooterSectionHeading title="ACADEMICS & STUDENT LIFE" />
            <ul className="space-y-3 text-[13px]">
              {ACADEMICS_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About The Institution */}
          <div>
            <FooterSectionHeading title="ABOUT THE INSTITUTION" />
            <ul className="space-y-3 text-[13px]">
              {INSTITUTION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Trident Group Websites */}
          <div>
            <FooterSectionHeading title="TRIDENT GROUP WEBSITES" />
            <ul className="space-y-3.5 text-[13px] leading-[1.45]">
              {GROUP_WEBSITES.map((site) => (
                <li key={site.label}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 transition-colors hover:text-white"
                  >
                    {site.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright, Legal & Social Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-8 sm:text-left">
            <p className="text-[10.5px] font-semibold tracking-[0.12em] text-neutral-200 uppercase">
              © 2026 TRIDENT ACADEMY OF TECHNOLOGY. ALL RIGHTS RESERVED.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 text-[10.5px] tracking-[0.1em] text-neutral-400 uppercase">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5 text-neutral-300">
            {FOOTER_SOCIALS.map((item) => (
              <a
                key={item.platform}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="transition-colors hover:text-white"
              >
                <SocialIcon platform={item.platform} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

