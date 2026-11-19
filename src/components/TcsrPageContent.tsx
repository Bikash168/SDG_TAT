"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ALL_17_SDGS,
  CAMPUS_ACTIONS,
  CORE_GOALS,
  KEY_METRICS,
} from "@/data/tcsr";
import { SDG_DETAILS } from "@/data/sdgDetails";

// UN SDG Category Clusters for quick intuitive filtering
type SdgCategory = "all" | "priority" | "people" | "planet" | "prosperity";

const CATEGORY_TABS: { id: SdgCategory; label: string; count: number }[] = [
  { id: "all", label: "All 17 Goals", count: 17 },
  { id: "priority", label: "TAT Priority Adopted", count: 6 },
  { id: "planet", label: "Planet & Climate", count: 6 },
  { id: "people", label: "People & Community", count: 6 },
  { id: "prosperity", label: "Economy & Institutions", count: 5 },
];

const PEOPLE_GOALS = [1, 2, 3, 4, 5, 10];
const PLANET_GOALS = [6, 7, 12, 13, 14, 15];
const PROSPERITY_GOALS = [8, 9, 11, 16, 17];
const PRIORITY_GOALS = [4, 5, 6, 7, 13, 17];

// Campus Action Category filter
type ActionCategory = "all" | "energy" | "water" | "waste";

export function TcsrPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<SdgCategory>("all");
  const [selectedActionCategory, setSelectedActionCategory] =
    useState<ActionCategory>("all");

  // Filter 17 SDGs dynamically based on Category + Search
  const filteredSdgs = useMemo(() => {
    return ALL_17_SDGS.filter((sdg) => {
      // Category filter check
      if (selectedCategory === "priority" && !PRIORITY_GOALS.includes(sdg.number))
        return false;
      if (selectedCategory === "people" && !PEOPLE_GOALS.includes(sdg.number))
        return false;
      if (selectedCategory === "planet" && !PLANET_GOALS.includes(sdg.number))
        return false;
      if (
        selectedCategory === "prosperity" &&
        !PROSPERITY_GOALS.includes(sdg.number)
      )
        return false;

      // Search query check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesNum = String(sdg.number) === query;
        const matchesTitle = sdg.title.toLowerCase().includes(query);
        const detail = SDG_DETAILS[sdg.slug];
        const matchesGoal = detail?.unGoal.toLowerCase().includes(query);
        return matchesNum || matchesTitle || matchesGoal;
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  // Filter Campus Actions
  const filteredActions = useMemo(() => {
    if (selectedActionCategory === "all") return CAMPUS_ACTIONS;
    if (selectedActionCategory === "energy") {
      return CAMPUS_ACTIONS.filter((a) =>
        ["led-lighting", "bldc-fans", "smart-grid-ai", "solar-pv"].includes(a.id)
      );
    }
    if (selectedActionCategory === "water") {
      return CAMPUS_ACTIONS.filter((a) => a.id === "circular-water");
    }
    if (selectedActionCategory === "waste") {
      return CAMPUS_ACTIONS.filter((a) =>
        ["ev-fleet", "plastic-free"].includes(a.id)
      );
    }
    return CAMPUS_ACTIONS;
  }, [selectedActionCategory]);

  return (
    <div className="bg-white text-neutral-800 w-full overflow-hidden">
      {/* Hero Banner with Modern Lighting and Glass Accents */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#19235c] via-[#232f7c] to-[#0f343d] text-white">
        {/* Subtle decorative watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-24 -right-24 h-72 w-72 sm:h-[460px] sm:w-[460px] opacity-[0.06]"
        >
          <Image
            src="/images/trident-logo.png"
            alt=""
            width={460}
            height={460}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Ambient radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,189,226,0.15),transparent_55%)]"
        />

        <div className="relative z-10 mx-auto max-w-[1360px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-4 sm:mb-6 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] sm:tracking-[0.1em] text-white/75 uppercase"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <a
              href="https://tat.ac.in/best-practices/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Best Practices
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-[#ebc059]">Sustainability (TCSR)</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Hero Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] text-[#ebc059] uppercase backdrop-blur-xs shadow-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Institutional Best Practice · UN 2030 Agenda
              </div>

              <h1 className="mt-3 sm:mt-4 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight tracking-tight text-white">
                Trident Center for Sustainability Research (TCSR)
              </h1>

              <p className="mt-3 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/90 sm:text-[17px]">
                Advancing climate resilience, ESG-aligned innovation, clean
                renewable energy, and circular resource stewardship through the{" "}
                <strong className="font-semibold text-white underline decoration-emerald-400/50 underline-offset-4">
                  Sustainability And Climate Research Economics Department
                  (SACRED)
                </strong>{" "}
                at Trident Academy of Technology.
              </p>

              {/* CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#sdg-directory"
                  className="rounded-md bg-[#d74444] px-6 py-3 text-center text-xs font-bold tracking-[0.08em] text-white uppercase shadow-md transition-all hover:bg-[#bf3737] hover:shadow-lg hover:-translate-y-0.5"
                >
                  Explore 17 SDGs Directory
                </a>
                <a
                  href="#campus-actions"
                  className="rounded-md border border-white/30 bg-white/10 px-5 py-3 text-center text-xs font-semibold tracking-[0.06em] text-white uppercase backdrop-blur-xs transition-all hover:bg-white/20 hover:-translate-y-0.5"
                >
                  Campus Initiatives
                </a>
                <a
                  href="https://tat.ac.in/wp-content/uploads/2025/07/TRIDENT-Sustainability-Initiatives.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-md border border-[#ebc059]/40 bg-[#ebc059]/15 px-4 py-3 text-center text-xs font-semibold tracking-[0.06em] text-[#ebc059] uppercase backdrop-blur-xs transition-colors hover:bg-[#ebc059]/25"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  <span>2025 PDF Report</span>
                </a>
              </div>
            </div>

            {/* Hero Visual Card (UN SDG Wheel) */}
            <div className="lg:col-span-5">
              <div className="group relative rounded-2xl border border-white/20 bg-gradient-to-b from-white/95 to-white/90 p-3 sm:p-4 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-[1.01]">
                <div className="overflow-hidden rounded-xl bg-white p-2">
                  <Image
                    src="/images/sdg/sdg-wheel.png"
                    alt="United Nations 17 Sustainable Development Goals framework"
                    width={1200}
                    height={720}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-neutral-200/80 px-1 pt-2.5 text-[11px] text-neutral-600">
                  <div className="flex items-center gap-1.5 font-medium text-neutral-800 truncate">
                    <span className="h-2 w-2 rounded-full bg-[#1b4699]" />
                    <span>UN 2030 Sustainable Development Framework</span>
                  </div>
                  <a
                    href="https://sdgs.un.org/goals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#1b4699] hover:underline shrink-0 ml-2"
                  >
                    sdgs.un.org →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 border-t border-white/15 pt-6 sm:pt-8 lg:grid-cols-4">
            {KEY_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="group rounded-xl border border-white/15 bg-white/[0.08] p-4 sm:px-5 sm:py-4.5 backdrop-blur-xs transition-colors hover:bg-white/[0.12]"
              >
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#ebc059] tracking-tight">
                  {metric.value}
                </div>
                <div className="mt-1 text-[11px] sm:text-xs leading-snug text-white/85">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky In-Page Quick Navigation Bar (Better UX for seamless jumping) */}
      <nav
        aria-label="Section Quick Jump"
        className="sticky top-0 z-30 border-b border-neutral-200/90 bg-white/95 px-4 py-2.5 backdrop-blur-md shadow-xs sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-2 overflow-x-auto no-scrollbar text-xs font-semibold">
          <span className="hidden lg:inline-flex items-center gap-1.5 text-neutral-400 font-medium text-[11px] uppercase tracking-wider shrink-0 pr-2 border-r border-neutral-200">
            Quick Jump
          </span>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href="#overview"
              className="rounded-full px-3 py-1.5 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-[#1b4699]"
            >
              About SACRED
            </a>
            <a
              href="#priority-goals"
              className="rounded-full px-3 py-1.5 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-[#1b4699]"
            >
              Priority Goals (6)
            </a>
            <a
              href="#campus-actions"
              className="rounded-full px-3 py-1.5 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-[#1b4699]"
            >
              Campus Actions (7)
            </a>
            <a
              href="#the-rankings"
              className="rounded-full px-3 py-1.5 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-[#1b4699]"
            >
              THE Rankings
            </a>
            <a
              href="#sdg-directory"
              className="rounded-full bg-[#1b4699] px-3.5 py-1.5 text-white transition-colors hover:bg-[#15377a] shadow-xs"
            >
              All 17 SDGs Directory
            </a>
          </div>
          <a
            href="https://tat.ac.in/wp-content/uploads/2025/07/TRIDENT-Sustainability-Initiatives.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-[#155e49] hover:underline shrink-0"
          >
            <span>Evidence PDF</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>

      {/* Section 1: SACRED Department & Global Frameworks */}
      <section
        id="overview"
        className="mx-auto max-w-[1360px] px-4 py-12 sm:py-16 sm:px-6 lg:px-8 scroll-mt-14"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Narrative Content */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.14em] text-[#155e49] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#155e49]" />
              About SACRED &amp; TCSR
            </div>
            <h2 className="mt-2 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
              Sustainability And Climate Research Economics Department
            </h2>

            <div className="mt-5 space-y-4 text-sm sm:text-[15px] leading-[1.8] text-neutral-700">
              <p>
                <strong>
                  Sustainability And Climate Research Economics Department
                  (SACRED)
                </strong>{" "}
                is an institutional unit established under the{" "}
                <strong>
                  Trident Center for Sustainability Research (TCSR)
                </strong>
                . It also hosts associated sustainability start-ups{" "}
                <span className="font-semibold text-neutral-900">
                  Decarb Climate Action Research LLP
                </span>{" "}
                and{" "}
                <span className="font-semibold text-neutral-900">
                  WWS Energy LLP
                </span>{" "}
                as dedicated incubation partners.
              </p>

              <p>
                At <strong>SACRED</strong>, we focus on developing innovative,
                practical, and equitable solutions to the challenges posed by
                carbonised climate change and environmental harms. The
                department is inherently interdisciplinary — a dynamic
                conglomeration of faculty members from diversified engineering,
                science, and management departments bringing unique domain
                expertise.
              </p>

              {/* 3 Executive Pillars Grid */}
              <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/70 p-4 transition-colors hover:border-[#1b4699]/30 hover:bg-white">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1b4699]/10 text-[#1b4699] font-bold text-xs">
                    01
                  </div>
                  <h4 className="mt-2.5 font-serif text-sm font-bold text-neutral-900">
                    Interdisciplinary R&amp;D
                  </h4>
                  <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                    Faculty-led research combining engineering, circular economy,
                    and carbon abatement models.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/70 p-4 transition-colors hover:border-emerald-600/30 hover:bg-white">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-800 font-bold text-xs">
                    02
                  </div>
                  <h4 className="mt-2.5 font-serif text-sm font-bold text-neutral-900">
                    Startup Incubation
                  </h4>
                  <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                    Hosting Decarb Climate Action &amp; WWS Energy LLP for clean-tech
                    commercialization.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/70 p-4 transition-colors hover:border-amber-600/30 hover:bg-white">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600/10 text-amber-800 font-bold text-xs">
                    03
                  </div>
                  <h4 className="mt-2.5 font-serif text-sm font-bold text-neutral-900">
                    Global Accreditation
                  </h4>
                  <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                    Active signatory to UN HESI, UNAI, and UNITAR training
                    frameworks.
                  </p>
                </div>
              </div>

              {/* UN Frameworks Callout Box */}
              <div className="mt-6 rounded-xl border border-emerald-900/15 bg-gradient-to-br from-emerald-50/80 to-teal-50/40 p-4 sm:p-5">
                <h3 className="font-serif text-sm sm:text-base font-bold text-neutral-900 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-white text-[10px]">
                    ✓
                  </span>
                  UN Frameworks &amp; International Alignments
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#155e49]" />
                    <span>
                      Partnered with the United Nations under the{" "}
                      <strong>HESI</strong> (Higher Education Sustainability
                      Initiative) and <strong>UNAI</strong> (United Nations
                      Academic Impact) frameworks.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#155e49]" />
                    <span>
                      Member of{" "}
                      <strong>
                        United Nations Institute for Training and Research
                        (UNITAR)
                      </strong>{" "}
                      for targeted sustainability capacity building.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#155e49]" />
                    <span>
                      Active institutional focus on the global 2030 Agenda and
                      measurable progress toward campus Net Zero.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Sidebar: SACRED Emblem & Member of HESI */}
          <aside className="space-y-5 lg:col-span-4">
            <div className="rounded-2xl border border-neutral-200/90 bg-white p-5 sm:p-6 text-center shadow-xs">
              <div className="mx-auto flex h-40 w-40 sm:h-48 sm:w-48 items-center justify-center rounded-full bg-neutral-50 p-2 shadow-xs ring-1 ring-neutral-200/80">
                <Image
                  src="/images/sdg/sacred-logo.png"
                  alt="SACRED - Sustainability And Climate Research Economics Department Logo"
                  width={220}
                  height={220}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-4 font-serif text-base font-bold text-neutral-900">
                SACRED Emblem
              </h3>
              <p className="mt-1 text-xs text-neutral-600">
                Sustainability And Climate Research Economics Department under
                TCSR
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                <span className="rounded-full bg-[#232f7c]/10 px-2.5 py-1 text-[10px] font-semibold text-[#232f7c]">
                  Decarb Climate Action LLP
                </span>
                <span className="rounded-full bg-emerald-700/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-800">
                  WWS Energy LLP
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200/90 bg-white p-5 sm:p-6 shadow-xs">
              <span className="text-[10px] font-bold tracking-[0.14em] text-[#232f7c] uppercase block">
                Official Signatory
              </span>
              <a
                href="https://partnershipaccelerator.org/hesi/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50/70 p-3.5 transition-all hover:bg-neutral-100/70 hover:shadow-xs"
              >
                <Image
                  src="/images/sdg/hesi-logo.png"
                  alt="Higher Education Sustainability Initiative (HESI)"
                  width={420}
                  height={102}
                  className="h-auto w-full object-contain"
                />
              </a>
              <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                Aligning higher education curricula, campus infrastructure, and
                faculty publications with UN HESI targets.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Section 2: Six Priority Adopted SDGs */}
      <section
        id="priority-goals"
        className="border-y border-neutral-200 bg-neutral-50/70 py-12 sm:py-16 scroll-mt-14"
      >
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="text-[11px] font-bold tracking-[0.14em] text-[#232f7c] uppercase">
                Institutional Core
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
                Six Priority SDGs Adopted at Trident
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                TAT has formally focused and committed resources to six core
                Sustainable Development Goals (Goals 4, 5, 6, 7, 13, and 17) to
                drive measurable impact across research, operations, and policy.
              </p>
            </div>
            <a
              href="#sdg-directory"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#1b4699] hover:underline shrink-0"
            >
              <span>Explore All 17 Goals</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_GOALS.map((goal) => (
              <Link
                key={goal.number}
                href={goal.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#1b4699]/30 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="h-16 w-16 sm:h-18 sm:w-18 shrink-0 overflow-hidden rounded-xl bg-neutral-100/60 p-0.5 shadow-xs ring-1 ring-black/5">
                      <Image
                        src={goal.image}
                        alt={`SDG ${goal.number}: ${goal.title}`}
                        width={160}
                        height={160}
                        unoptimized
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-wider text-white uppercase shadow-xs"
                      style={{ backgroundColor: goal.accentColor }}
                    >
                      Goal {goal.number}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#1b4699] transition-colors">
                    {goal.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                    {goal.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-neutral-100 pt-3 flex items-center justify-between text-xs font-semibold text-[#1b4699]">
                  <span>Inspect Indicators &amp; PDFs</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Measurable Campus Actions (SDG 7, SDG 6 & Zero Plastic) */}
      <section
        id="campus-actions"
        className="mx-auto max-w-[1360px] px-4 py-12 sm:py-16 sm:px-6 lg:px-8 scroll-mt-14"
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#155e49] uppercase">
              On-Campus Execution
            </span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
              Measurable Campus Actions
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Verified operational upgrades across solar generation, smart grid
              AI, EV mobility, circular water recycling, and single-use plastic
              elimination.
            </p>
          </div>

          {/* Action Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto shrink-0">
            {[
              { id: "all" as ActionCategory, label: "All (7)" },
              { id: "energy" as ActionCategory, label: "Clean Energy & Grid (4)" },
              { id: "water" as ActionCategory, label: "Water & STP (1)" },
              { id: "waste" as ActionCategory, label: "Zero Waste & EV (2)" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedActionCategory(tab.id)}
                className={`cursor-pointer rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  selectedActionCategory === tab.id
                    ? "bg-[#155e49] text-white shadow-xs"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredActions.map((action) => (
            <article
              key={action.id}
              className="group flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-emerald-600/30 hover:shadow-md"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.08em] text-[#232f7c] uppercase">
                    {action.tag}
                  </span>
                  <span className="rounded-md bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-emerald-800">
                    {action.highlight}
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#155e49] transition-colors">
                  {action.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                  {action.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-medium text-neutral-500">
                <span>Campus Verification</span>
                <span className="font-semibold text-emerald-700">Active ✓</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 4: SACRED Inauguration & Global Framework Poster */}
      <section className="border-y border-neutral-200 bg-[#f8f9fc] py-12 sm:py-16">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
            {/* Inauguration Photo + Video Link */}
            <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-xs lg:col-span-6 transition-shadow hover:shadow-md">
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src="/images/sdg/tcsr-banner.jpg"
                    alt="Inauguration of Sustainability and Climate Research Economics Department (SACRED) at Trident Academy of Technology"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <span className="rounded-full bg-red-600/90 text-white text-[10px] font-bold tracking-wider px-2.5 py-0.5 uppercase backdrop-blur-xs">
                      Official Ceremony
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.12em] text-[#d74444] uppercase">
                    Institutional Milestone
                  </span>
                  <h3 className="mt-2 font-serif text-lg sm:text-xl font-bold text-neutral-900">
                    Inauguration of SACRED at Trident Academy of Technology
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                    Faculty leadership and department representatives launching the
                    interdisciplinary Sustainability And Climate Research Economics
                    Department under TCSR.
                  </p>
                </div>
              </div>
              <div className="border-t border-neutral-100 px-5 sm:px-6 py-3.5 bg-neutral-50/50">
                <a
                  href="https://www.youtube.com/watch?v=CHpRWp5tWE8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.06em] text-[#1b4699] uppercase hover:underline"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-red-600"
                    aria-hidden="true"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  <span>Watch Ceremony Recording on YouTube</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* UN SDG Poster Card */}
            <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-xs lg:col-span-6 transition-shadow hover:shadow-md">
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-white p-3 sm:p-4">
                  <Image
                    src="/images/sdg/sdg-poster.png"
                    alt="United Nations 17 Sustainable Development Goals Poster"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-2 sm:p-3"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.12em] text-[#155e49] uppercase">
                    Global Blueprint
                  </span>
                  <h3 className="mt-2 font-serif text-lg sm:text-xl font-bold text-neutral-900">
                    The 17 Sustainable Development Goals Framework
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                    Embedding the UN 2030 Agenda across academic curriculum,
                    faculty research, student projects, clean campus energy, and
                    community outreach initiatives.
                  </p>
                </div>
              </div>
              <div className="border-t border-neutral-100 px-5 sm:px-6 py-3.5 bg-neutral-50/50">
                <a
                  href="https://sdgs.un.org/goals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.06em] text-[#1b4699] uppercase hover:underline"
                >
                  <span>Explore Official UN SDG Portal</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: THE Impact Rankings & Evidence PDF Hub */}
      <section
        id="the-rankings"
        className="mx-auto max-w-[1360px] px-4 py-12 sm:py-16 sm:px-6 lg:px-8 scroll-mt-14"
      >
        <div className="flex flex-col items-start justify-between gap-4 border-b border-neutral-200 pb-6 md:flex-row md:items-center">
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#232f7c] uppercase">
              Global Benchmarking
            </span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
              Times Higher Education (THE) Impact Rankings 2025
            </h2>
          </div>

          <a
            href="https://tat.ac.in/wp-content/uploads/2025/07/TRIDENT-Sustainability-Initiatives.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-[#1b4699] bg-[#1b4699] px-5 py-3 text-xs font-bold tracking-[0.06em] text-white uppercase transition-all hover:bg-[#15377a] hover:shadow-md shrink-0"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 shrink-0"
              aria-hidden="true"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span>Trident Sustainability Initiatives (PDF)</span>
          </a>
        </div>

        {/* 4 Summary Stat Chips for THE */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-neutral-200/90 bg-neutral-50/70 p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              Overall Global Band
            </span>
            <div className="mt-1 font-serif text-xl sm:text-2xl font-bold text-[#1b4699]">
              1501+
            </div>
            <p className="mt-0.5 text-[11px] text-neutral-600">
              First-year overall assessment
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200/90 bg-neutral-50/70 p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              SDG 1 &amp; 2 (Poverty &amp; Hunger)
            </span>
            <div className="mt-1 font-serif text-xl sm:text-2xl font-bold text-emerald-700">
              601–800th
            </div>
            <p className="mt-0.5 text-[11px] text-neutral-600">
              Student scholarship support
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200/90 bg-neutral-50/70 p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              SDG 6 &amp; 7 (Water &amp; Energy)
            </span>
            <div className="mt-1 font-serif text-xl sm:text-2xl font-bold text-[#fcc30b] text-amber-800">
              601–800th
            </div>
            <p className="mt-0.5 text-[11px] text-neutral-600">
              Rooftop solar &amp; water recycling
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200/90 bg-neutral-50/70 p-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              SDG 11 &amp; 15 (Cities &amp; Land)
            </span>
            <div className="mt-1 font-serif text-xl sm:text-2xl font-bold text-emerald-800">
              601–800th
            </div>
            <p className="mt-0.5 text-[11px] text-neutral-600">
              Green campus &amp; plantation
            </p>
          </div>
        </div>

        {/* THE Impact Rankings Scorecard Graphic */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-3 sm:p-5 shadow-sm">
          <div className="overflow-x-auto">
            <a
              href="https://www.timeshighereducation.com/world-university-rankings/trident-academy-technology"
              target="_blank"
              rel="noopener noreferrer"
              className="block min-w-[520px] md:min-w-0 overflow-hidden rounded-xl border border-neutral-100 transition-opacity hover:opacity-95"
              aria-label="View Trident Academy of Technology on Times Higher Education Impact Rankings"
            >
              <Image
                src="/images/sdg/the-impact-ranking.jpg"
                alt="Times Higher Education Impact Rankings 2025 results for Trident Academy of Technology"
                width={1597}
                height={700}
                className="h-auto w-full object-contain"
              />
            </a>
          </div>
          <div className="mt-3 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 px-1 gap-2">
            <span>
              Official THE Impact Rankings assessment across participating SDGs.
            </span>
            <a
              href="https://www.timeshighereducation.com/world-university-rankings/trident-academy-technology"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#1b4699] hover:underline shrink-0"
            >
              Verify on TimesHigherEducation.com →
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Interactive 17 Sustainable Development Goals Hub */}
      <section
        id="sdg-directory"
        className="border-t border-neutral-200 bg-neutral-50/80 py-12 sm:py-16 scroll-mt-14"
      >
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#232f7c] uppercase">
              Comprehensive Directory
            </span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
              Explore All 17 UN Sustainable Development Goals
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600">
              Interactive directory of Trident Academy of Technology&apos;s
              institutional indicators, research outputs, and verified evidence
              documentation for each UN goal.
            </p>
          </div>

          {/* Interactive Search + Category Filters Bar (Plane & Clean UX) */}
          <div className="mt-8 rounded-2xl border border-neutral-200/90 bg-white p-3 sm:p-4 shadow-sm">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Real-time Search Box */}
              <div className="relative flex-1 max-w-md">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter goals (e.g., water, solar, climate, 7, poverty)..."
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50/80 py-2.5 pl-10 pr-9 text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 transition-colors focus:border-[#1b4699] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1b4699]/15"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-neutral-400 hover:text-neutral-700"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 text-xs text-neutral-500 justify-between md:justify-end">
                <span>
                  Showing{" "}
                  <strong className="text-neutral-900 font-bold">
                    {filteredSdgs.length}
                  </strong>{" "}
                  of 17 Goals
                </span>
                {(selectedCategory !== "all" || searchQuery) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchQuery("");
                    }}
                    className="cursor-pointer text-xs font-semibold text-[#d74444] hover:underline ml-2"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="mt-3.5 pt-3 border-t border-neutral-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {CATEGORY_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`cursor-pointer shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                    selectedCategory === tab.id
                      ? "bg-[#1b4699] text-white shadow-xs"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          {filteredSdgs.length > 0 ? (
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {filteredSdgs.map((sdg) => {
                const detail = SDG_DETAILS[sdg.slug];
                const goalColor = detail?.color || "#1b4699";
                const isAdopted = PRIORITY_GOALS.includes(sdg.number);

                return (
                  <Link
                    key={sdg.number}
                    href={sdg.href}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-2.5 sm:p-3 shadow-xs transition-all duration-200 hover:-translate-y-1.5 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-900/5"
                  >
                    {/* Top Goal Color Ambient Bar */}
                    <div
                      className="absolute top-0 inset-x-0 h-1 transition-all group-hover:h-1.5"
                      style={{ backgroundColor: goalColor }}
                    />

                    <div>
                      {/* Crisp UN Official Vector SVG Tile */}
                      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-100/60 ring-1 ring-black/5 mt-0.5">
                        <Image
                          src={sdg.image}
                          alt={`SDG ${sdg.number}: ${sdg.title}`}
                          fill
                          unoptimized
                          sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 15vw"
                          className="object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                        />
                      </div>

                      {/* Info & Badges */}
                      <div className="mt-2.5 px-0.5">
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className="inline-flex h-4 items-center rounded px-1.5 text-[9px] font-bold text-white shadow-xs"
                            style={{ backgroundColor: goalColor }}
                          >
                            SDG {sdg.number}
                          </span>
                          {isAdopted && (
                            <span className="rounded bg-amber-50 border border-amber-200/60 px-1 py-0.2 text-[8px] font-bold text-amber-800 uppercase tracking-tight">
                              TAT Core
                            </span>
                          )}
                        </div>

                        <p className="mt-1.5 font-serif text-xs sm:text-[13px] font-bold leading-snug text-neutral-900 group-hover:text-[#1b4699] transition-colors line-clamp-2">
                          {sdg.title}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Metadata & Link */}
                    <div className="mt-2.5 border-t border-neutral-100 pt-2 px-0.5">
                      <div className="flex items-center justify-between text-[10px] text-neutral-500">
                        {sdg.rank ? (
                          <span className="font-semibold text-emerald-700 truncate max-w-[85px] sm:max-w-none">
                            THE: {sdg.rank}
                          </span>
                        ) : (
                          <span className="text-neutral-400">TAT Action</span>
                        )}
                        <span className="font-bold text-[#1b4699] transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                      {detail && (
                        <div className="mt-1 text-[9px] text-neutral-400 font-medium">
                          {detail.itemCount} items · {detail.pdfCount} reports
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            /* Empty state for search */
            <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 text-lg">
                🔍
              </div>
              <h3 className="mt-3 font-serif text-base font-bold text-neutral-900">
                No matching Sustainable Development Goals
              </h3>
              <p className="mt-1 text-xs text-neutral-600">
                No goals found matching &quot;{searchQuery}&quot;. Try adjusting your
                keywords or category filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 cursor-pointer rounded-md bg-[#1b4699] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#15377a]"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* UN Reference Disclaimer */}
          <p className="mt-8 text-center text-[10px] sm:text-[11px] text-neutral-500 max-w-3xl mx-auto">
            Reference:{" "}
            <a
              href="https://www.un.org/sustainabledevelopment"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-700"
            >
              United Nations Sustainable Development Goals
            </a>
            . The content of this page has not been approved by the United
            Nations and does not reflect the views of the United Nations or its
            officials or Member States.
          </p>
        </div>
      </section>
    </div>
  );
}
