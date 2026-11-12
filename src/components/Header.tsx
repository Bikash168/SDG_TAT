"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { SocialIcon, type SocialPlatform } from "./SocialIcons";

const TOP_SOCIALS: {
  platform: SocialPlatform;
  label: string;
  href: string;
}[] = [
  { platform: "facebook", label: "Facebook", href: "https://facebook.com" },
  { platform: "x", label: "X", href: "https://x.com" },
  { platform: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { platform: "instagram", label: "Instagram", href: "https://instagram.com" },
  { platform: "youtube", label: "YouTube", href: "https://youtube.com" },
];

const DISCLOSURE_LINKS = [
  { label: "AICTE Mandatory Disclosure", href: "/mandatory-disclosure" },
  { label: "NAAC Accreditation", href: "/naac" },
  { label: "NIRF Ranking Data", href: "/nirf" },
  { label: "Statutory Approvals", href: "/aicte-approvals" },
];

const NAV_ITEMS = [
  { label: "ABOUT", href: "/about" },
  { label: "ADMISSIONS", href: "/admissions" },
  { label: "ACADEMICS", href: "/academics" },
  { label: "RESEARCH", href: "/research" },
  { label: "CAMPUS LIFE", href: "/campus-life" },
  { label: "PLACEMENT", href: "/placement" },
  { label: "CONTACT US", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const disclosureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        disclosureRef.current &&
        !disclosureRef.current.contains(event.target as Node)
      ) {
        setDisclosureOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDisclosureOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleSearchSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Indigo Utility Bar */}
      <div className="bg-[#232f7c] text-white">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          {/* Left Social Circles */}
          <div className="flex items-center gap-2">
            {TOP_SOCIALS.map((item) => (
              <a
                key={item.platform}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/95 transition-colors hover:bg-white/20 hover:text-white"
              >
                <SocialIcon platform={item.platform} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>

          {/* Right Utility Links & Search */}
          <div className="hidden items-center gap-5 md:flex">
            {/* Mandatory Disclosure Dropdown */}
            <div className="relative" ref={disclosureRef}>
              <button
                type="button"
                onClick={() => setDisclosureOpen((prev) => !prev)}
                aria-expanded={disclosureOpen}
                className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.06em] uppercase text-white/95 transition-colors hover:text-white cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 text-white/85"
                  aria-hidden="true"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                </svg>
                <span>MANDATORY DISCLOSURE</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-3 w-3 transition-transform ${
                    disclosureOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {disclosureOpen && (
                <div className="absolute right-0 mt-2.5 w-60 rounded-md border border-neutral-200 bg-white py-1.5 text-neutral-800 shadow-lg z-50">
                  {DISCLOSURE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setDisclosureOpen(false)}
                      className="block px-4 py-2 text-xs font-medium text-neutral-700 transition-colors hover:bg-[#232f7c]/5 hover:text-[#232f7c]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ICC */}
            <Link
              href="/icc"
              className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.06em] uppercase text-white/95 transition-colors hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 text-white/85"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>ICC</span>
            </Link>

            {/* ALUMNI (Gold Accent) */}
            <Link
              href="/alumni"
              className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.06em] uppercase text-[#ebc059] transition-colors hover:text-[#f6d37b]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>ALUMNI</span>
            </Link>

            {/* Pill Search Box */}
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 transition-colors focus-within:border-white/55 focus-within:bg-white/15"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 text-white/80 shrink-0"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                aria-label="Search"
                className="w-24 bg-transparent text-xs text-white placeholder:text-white/80 focus:w-36 focus:outline-none transition-all"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Main White Navigation Bar */}
      <div className="border-b border-neutral-200/90 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
        <div className="mx-auto flex h-[78px] max-w-[1360px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <BrandLogo variant="light" />

          {/* Desktop Primary Nav + CTA */}
          <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
            <nav
              aria-label="Primary Navigation"
              className="flex items-center gap-5 xl:gap-7"
            >
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`border-b-2 py-1 text-[12.5px] xl:text-[13px] font-semibold tracking-[0.06em] uppercase whitespace-nowrap transition-colors ${
                      isActive
                        ? "border-[#1b4699] text-[#1b4699]"
                        : "border-transparent text-[#333333] hover:border-[#1b4699] hover:text-[#1b4699]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/admissions"
              className="rounded-[4px] bg-[#d74444] px-6 py-3 text-[12.5px] font-bold tracking-[0.06em] uppercase text-white shadow-xs transition-colors hover:bg-[#bf3737] whitespace-nowrap shrink-0"
            >
              APPLY NOW
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 lg:hidden"
          >
            {mobileMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-neutral-200 bg-white px-4 py-4 lg:hidden">
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col gap-1"
            >
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-md px-3 py-2.5 text-xs font-semibold tracking-[0.06em] uppercase ${
                      isActive
                        ? "bg-[#1b4699]/10 text-[#1b4699]"
                        : "text-[#333333] hover:bg-neutral-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-neutral-200 pt-4 text-xs font-semibold uppercase">
              <Link
                href="/mandatory-disclosure"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#232f7c]"
              >
                Mandatory Disclosure
              </Link>
              <Link
                href="/icc"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#232f7c]"
              >
                ICC
              </Link>
              <Link
                href="/alumni"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#b8861e]"
              >
                Alumni
              </Link>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-3.5 py-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 text-neutral-500"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  aria-label="Search"
                  className="w-full bg-transparent text-xs text-neutral-800 placeholder:text-neutral-500 focus:outline-none"
                />
              </form>
              <Link
                href="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-[4px] bg-[#d74444] px-5 py-3 text-center text-xs font-bold tracking-[0.06em] uppercase text-white hover:bg-[#bf3737]"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

