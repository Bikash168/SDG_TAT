import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ALL_SDG_DETAILS_LIST,
  getSdgBySlug,
  SDG_DETAILS,
} from "@/data/sdgDetails";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(SDG_DETAILS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sdg = getSdgBySlug(slug);

  if (!sdg) {
    return {
      title: "SDG Not Found | Trident Academy of Technology",
    };
  }

  return {
    title: `SDG ${sdg.num}: ${sdg.title} | Trident Academy of Technology`,
    description: `Trident Academy of Technology's institutional initiatives, THE Impact Rankings indicators, and verified evidence reports for UN Sustainable Development Goal ${sdg.num}: ${sdg.title}.`,
  };
}

export default async function SdgDetailPage({ params }: Props) {
  const { slug } = await params;
  const sdg = getSdgBySlug(slug);

  if (!sdg) {
    notFound();
  }

  const prevSdg =
    sdg.num > 1
      ? ALL_SDG_DETAILS_LIST.find((s) => s.num === sdg.num - 1)
      : ALL_SDG_DETAILS_LIST.find((s) => s.num === 17);

  const nextSdg =
    sdg.num < 17
      ? ALL_SDG_DETAILS_LIST.find((s) => s.num === sdg.num + 1)
      : ALL_SDG_DETAILS_LIST.find((s) => s.num === 1);

  return (
    <div className="bg-neutral-50 text-neutral-800">
      {/* Top Banner with Goal Accent Color */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: `linear-gradient(135deg, ${sdg.color} 0%, #171d3d 100%)`,
        }}
      >
        {/* Subtle decorative background watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-16 -right-16 h-80 w-80 opacity-15"
        >
          <Image
            src={sdg.image}
            alt=""
            width={320}
            height={320}
            className="h-full w-full object-cover rounded-full"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-[0.08em] text-white/80 uppercase"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/best-practices/trident-center-for-sustainability-research-tcsr"
              className="hover:text-white transition-colors"
            >
              Sustainability (TCSR)
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-bold">SDG {sdg.num}</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-xs">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  UN Goal {sdg.num}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/95">
                  THE Impact 2025: {sdg.rank}
                </span>
              </div>

              <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                SDG {sdg.num}: {sdg.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                {sdg.unGoal}
              </p>

              {/* Quick Stat Chips */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-xs">
                  <span className="block text-xl font-bold text-white">
                    {sdg.itemCount}
                  </span>
                  <span className="text-[11px] text-white/80 uppercase tracking-wider">
                    Tracked Indicators
                  </span>
                </div>
                <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-xs">
                  <span className="block text-xl font-bold text-white">
                    {sdg.pdfCount}
                  </span>
                  <span className="text-[11px] text-white/80 uppercase tracking-wider">
                    Evidence Reports (PDF)
                  </span>
                </div>
                <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-xs">
                  <span className="block text-xl font-bold text-white">
                    {sdg.rank}
                  </span>
                  <span className="text-[11px] text-white/80 uppercase tracking-wider">
                    THE Impact Standing
                  </span>
                </div>
              </div>
            </div>

            {/* Goal Tile Emblem */}
            <div className="flex justify-center lg:col-span-4 lg:justify-end">
              <div className="relative h-48 w-48 overflow-hidden rounded-2xl bg-white p-2.5 shadow-2xl ring-4 ring-white/25 sm:h-56 sm:w-56">
                <Image
                  src={sdg.image}
                  alt={`SDG ${sdg.num}: ${sdg.title}`}
                  width={224}
                  height={224}
                  priority
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Quick Switcher Bar */}
      <nav
        aria-label="All 17 SDGs Selector"
        className="border-b border-neutral-200 bg-white shadow-xs"
      >
        <div className="mx-auto flex max-w-[1360px] items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          <span className="shrink-0 text-[11px] font-bold tracking-wider text-neutral-500 uppercase">
            All Goals:
          </span>
          <div className="flex items-center gap-1.5">
            {ALL_SDG_DETAILS_LIST.map((item) => {
              const isCurrent = item.num === sdg.num;
              return (
                <Link
                  key={item.num}
                  href={`/best-practices/sustainable-development-goals/${item.slug}`}
                  aria-label={`SDG ${item.num}: ${item.title}`}
                  title={`SDG ${item.num}: ${item.title}`}
                  className={`flex h-8 w-8 items-center justify-center rounded-md text-xs font-bold transition-all shrink-0 ${
                    isCurrent
                      ? "text-white shadow-sm ring-2 ring-neutral-800 scale-105"
                      : "text-white/90 hover:scale-110 opacity-80 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: item.color }}
                >
                  {item.num}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="mx-auto max-w-[1360px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Main Indicators & Evidence Column */}
          <div className="space-y-8 lg:col-span-8">
            {/* Overview Card */}
            <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-xs sm:p-8">
              <span className="text-[11px] font-bold tracking-[0.14em] text-[#1b4699] uppercase">
                Institutional Commitment
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-neutral-900">
                Implementation &amp; Benchmarks at TAT
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
                Trident Academy of Technology actively implements and monitors
                metrics under <strong>SDG {sdg.num} ({sdg.title})</strong> in
                accordance with United Nations Sustainable Development Goals and
                Times Higher Education (THE) Impact Rankings benchmarks. Below
                are the verified institutional criteria, research publications,
                operational policies, and downloadable audit documentation.
              </p>
            </section>

            {/* Indicator Categories */}
            {sdg.categories.map((cat, idx) => (
              <section
                key={idx}
                className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xs"
              >
                <div className="border-b border-neutral-150 bg-neutral-50/80 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white shrink-0"
                      style={{ backgroundColor: sdg.color }}
                    >
                      {idx + 1}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-neutral-900">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <div className="divide-y divide-neutral-100">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex flex-col justify-between gap-3 p-5 transition-colors hover:bg-neutral-50/50 sm:flex-row sm:items-center"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-neutral-400 shrink-0" />
                        <span className="text-sm font-medium leading-relaxed text-neutral-800">
                          {item.text}
                        </span>
                      </div>

                      {item.link && (
                        <div className="shrink-0 self-start sm:self-auto">
                          {item.isPdf ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-md border border-[#c5192d]/30 bg-[#c5192d]/5 px-3.5 py-1.5 text-xs font-bold text-[#c5192d] transition-colors hover:bg-[#c5192d] hover:text-white"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                              >
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" x2="8" y1="13" y2="13" />
                                <line x1="16" x2="8" y1="17" y2="17" />
                              </svg>
                              <span>View Evidence (PDF)</span>
                            </a>
                          ) : (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 transition-colors hover:border-[#1b4699] hover:text-[#1b4699]"
                            >
                              <span>Open Reference</span>
                              <span aria-hidden="true">→</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6 lg:col-span-4">
            {/* Quick Summary Card */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-xs">
              <h3 className="font-serif text-base font-bold text-neutral-900">
                SDG {sdg.num} Overview
              </h3>
              <dl className="mt-4 space-y-3 text-xs">
                <div className="flex justify-between border-b border-neutral-100 pb-2">
                  <dt className="text-neutral-500">Goal Target:</dt>
                  <dd className="font-semibold text-neutral-800 text-right">
                    {sdg.title}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-2">
                  <dt className="text-neutral-500">THE Impact Band:</dt>
                  <dd className="font-semibold text-[#1b4699] text-right">
                    {sdg.rank}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-2">
                  <dt className="text-neutral-500">Audit PDFs:</dt>
                  <dd className="font-semibold text-neutral-800">
                    {sdg.pdfCount} Documents
                  </dd>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-2">
                  <dt className="text-neutral-500">Tracking Criteria:</dt>
                  <dd className="font-semibold text-neutral-800">
                    {sdg.itemCount} Items
                  </dd>
                </div>
              </dl>

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <a
                  href={`https://sdgs.un.org/goals/goal${sdg.num}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#232f7c] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#1b2563]"
                >
                  <span>Official UN SDG {sdg.num} Page</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            {/* Back to Center Card */}
            <div className="rounded-xl border border-neutral-200 bg-neutral-100/70 p-6">
              <h4 className="text-xs font-bold tracking-wider text-neutral-600 uppercase">
                Trident Center for Sustainability Research
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                Explore the overall sustainability ecosystem, campus solar
                targets, circular water management, and SACRED initiatives.
              </p>
              <Link
                href="/best-practices/trident-center-for-sustainability-research-tcsr"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#1b4699] hover:underline"
              >
                <span>← Back to TCSR Center</span>
              </Link>
            </div>
          </aside>
        </div>

        {/* Prev / Next Goal Bottom Navigation */}
        <div className="mt-14 grid grid-cols-1 gap-4 border-t border-neutral-200 pt-8 sm:grid-cols-2">
          {prevSdg && (
            <Link
              href={`/best-practices/sustainable-development-goals/${prevSdg.slug}`}
              className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-xs transition-all hover:border-neutral-300 hover:shadow-sm"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white font-bold"
                style={{ backgroundColor: prevSdg.color }}
              >
                {prevSdg.num}
              </div>
              <div>
                <span className="text-[11px] font-semibold text-neutral-500 uppercase">
                  ← Previous Goal
                </span>
                <p className="font-serif text-sm font-bold text-neutral-900 group-hover:text-[#1b4699]">
                  SDG {prevSdg.num}: {prevSdg.title}
                </p>
              </div>
            </Link>
          )}

          {nextSdg && (
            <Link
              href={`/best-practices/sustainable-development-goals/${nextSdg.slug}`}
              className="group flex items-center justify-between gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-xs transition-all hover:border-neutral-300 hover:shadow-sm text-right"
            >
              <div className="text-left sm:text-right flex-1">
                <span className="text-[11px] font-semibold text-neutral-500 uppercase">
                  Next Goal →
                </span>
                <p className="font-serif text-sm font-bold text-neutral-900 group-hover:text-[#1b4699]">
                  SDG {nextSdg.num}: {nextSdg.title}
                </p>
              </div>
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white font-bold"
                style={{ backgroundColor: nextSdg.color }}
              >
                {nextSdg.num}
              </div>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
