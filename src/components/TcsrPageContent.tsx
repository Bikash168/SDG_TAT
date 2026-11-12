import Image from "next/image";
import Link from "next/link";
import {
  ALL_17_SDGS,
  CAMPUS_ACTIONS,
  CORE_GOALS,
  KEY_METRICS,
} from "@/data/tcsr";

export function TcsrPageContent() {
  return (
    <div className="bg-white text-neutral-800 w-full overflow-hidden">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#19235c] via-[#232f7c] to-[#13424c] text-white">
        {/* Subtle decorative SDG wheel watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-24 -right-24 h-64 w-64 sm:h-[440px] sm:w-[440px] opacity-[0.05] sm:opacity-[0.07]"
        >
          <Image
            src="/images/trident-logo.png"
            alt=""
            width={440}
            height={440}
            className="h-full w-full object-contain"
          />
        </div>

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
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] text-[#ebc059] uppercase backdrop-blur-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Institutional Best Practice · UN 2030 Agenda
              </span>

              <h1 className="mt-3 sm:mt-4 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight text-white">
                Trident Center for Sustainability Research (TCSR)
              </h1>

              <p className="mt-3 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/85 sm:text-[17px]">
                Advancing climate resilience, ESG-aligned innovation, clean
                renewable energy, and circular resource stewardship through the{" "}
                <strong className="font-semibold text-white">
                  Sustainability And Climate Research Economics Department
                  (SACRED)
                </strong>{" "}
                at Trident Academy of Technology.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#campus-actions"
                  className="rounded-[4px] bg-[#d74444] px-6 py-3 text-center text-xs font-bold tracking-[0.08em] text-white uppercase shadow-sm transition-colors hover:bg-[#bf3737]"
                >
                  Explore Campus Actions
                </a>
                <a
                  href="https://tat.ac.in/wp-content/uploads/2025/07/TRIDENT-Sustainability-Initiatives.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-white/30 bg-white/10 px-5 py-3 text-center text-xs font-semibold tracking-[0.06em] text-white uppercase backdrop-blur-xs transition-colors hover:bg-white/20"
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  <span>Sustainability Report 2025</span>
                </a>
              </div>
            </div>

            {/* Hero Visual Card (Web-searched Wikimedia UN SDG Infographic) */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-white/15 bg-white p-2.5 sm:p-3 shadow-2xl">
                <div className="overflow-hidden rounded-lg bg-white">
                  <Image
                    src="/images/sdg/sdg-wheel.png"
                    alt="United Nations 17 Sustainable Development Goals framework"
                    width={1200}
                    height={720}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="mt-2.5 flex items-center justify-between border-t border-neutral-100 px-1 pt-2 text-[10px] sm:text-[11px] text-neutral-600">
                  <span className="font-medium text-neutral-800 truncate">
                    UN Sustainable Development Goals
                  </span>
                  <a
                    href="https://sdgs.un.org/goals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#1b4699] hover:underline shrink-0 ml-2"
                  >
                    sdgs.un.org →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Strip (Responsive 2-col on mobile, 4-col on desktop) */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-2.5 sm:gap-4 border-t border-white/15 pt-6 sm:pt-8 lg:grid-cols-4">
            {KEY_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-3 sm:px-5 sm:py-4 backdrop-blur-xs"
              >
                <div className="font-serif text-lg sm:text-2xl font-bold text-[#ebc059]">
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

      {/* SACRED Department & Global Partnerships */}
      <section className="mx-auto max-w-[1360px] px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Narrative Content */}
          <div className="lg:col-span-8">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#155e49] uppercase">
              About SACRED &amp; TCSR
            </span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
              Sustainability And Climate Research Economics Department (SACRED)
            </h2>

            <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5 text-sm sm:text-[15px] leading-[1.75] text-neutral-700">
              <p>
                <strong>
                  Sustainability And Climate Research Economics Department
                  (SACRED)
                </strong>{" "}
                is a department under the{" "}
                <strong>
                  Trident Center for Sustainability Research (TCSR)
                </strong>
                , which also hosts associated sustainability start-ups{" "}
                <strong>Decarb Climate Action Research LLP</strong> and{" "}
                <strong>WWS Energy LLP</strong> as partner sustainability units.
              </p>

              <p>
                At <strong>SACRED</strong>, we focus on developing innovative,
                practical, and equitable solutions to the challenges posed by
                carbonised climate change and environmental harms. The
                department is inherently interdisciplinary — a dynamic
                conglomeration of faculty members from diversified academic
                departments bringing unique domain expertise. Together, we
                drive capacity building and institutional value addition through
                innovations that help students and stakeholders recognize their
                roles and responsibilities in solving the climate crisis and
                building a learning ecosystem aligned with nature for future
                generations.
              </p>

              <p>
                Our work centers on advancing science and innovation for the
                Sustainable Development Goals adopted by world governments at
                Paris in 2015, while advocating the principles of{" "}
                <a
                  href="https://www.investopedia.com/terms/e/environmental-social-and-governance-esg-criteria.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#1b4699] underline decoration-[#1b4699]/40 underline-offset-2 hover:decoration-[#1b4699]"
                >
                  ESG business investing
                </a>
                . The 2030 milestone in the Agenda for Sustainable Development
                adopted by all United Nations Member States provides a shared
                blueprint for peace and prosperity for people and the planet,
                centered around the{" "}
                <a
                  href="https://sdgs.un.org/goals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#1b4699] underline decoration-[#1b4699]/40 underline-offset-2 hover:decoration-[#1b4699]"
                >
                  17 Sustainable Development Goals (SDGs)
                </a>{" "}
                and the urgent global pathway toward achieving{" "}
                <a
                  href="https://www.un.org/en/climatechange/net-zero-coalition"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#1b4699] underline decoration-[#1b4699]/40 underline-offset-2 hover:decoration-[#1b4699]"
                >
                  Net Zero
                </a>
                .
              </p>

              <div className="rounded-xl border border-emerald-900/15 bg-emerald-50/50 p-4 sm:p-6">
                <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-900">
                  UN Frameworks &amp; Capacity Building
                </h3>
                <ul className="mt-3 space-y-2.5 text-xs sm:text-sm leading-relaxed text-neutral-700">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full bg-[#155e49]" />
                    <span>
                      Established a dedicated Centre for Sustainability Research
                      and partnered with the United Nations under the{" "}
                      <strong>HESI</strong> (Higher Education Sustainability
                      Initiative) and <strong>UNAI</strong> (United Nations
                      Academic Impact) frameworks.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full bg-[#155e49]" />
                    <span>
                      Set an immediate focus on short-term global member-country
                      targets aimed at measurable achievements by{" "}
                      <strong>2030</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full bg-[#155e49]" />
                    <span>
                      Joined the{" "}
                      <strong>
                        United Nations Institute for Training and Research
                        (UNITAR)
                      </strong>{" "}
                      for specialized sustainability training programs.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Sidebar: SACRED Emblem & Member of HESI */}
          <aside className="space-y-6 sm:space-y-8 lg:col-span-4">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-5 sm:p-6 text-center shadow-xs">
              <div className="mx-auto flex h-44 w-44 sm:h-56 sm:w-56 items-center justify-center rounded-full bg-white p-3 shadow-xs ring-1 ring-neutral-200">
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
              <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                Sustainability And Climate Research Economics Department under
                TCSR
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-[#232f7c]/10 px-3 py-1 text-[11px] font-semibold text-[#232f7c]">
                  Decarb Climate Action Research LLP
                </span>
                <span className="rounded-full bg-emerald-700/10 px-3 py-1 text-[11px] font-semibold text-emerald-800">
                  WWS Energy LLP
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-xs">
              <p className="text-[11px] font-bold tracking-[0.14em] text-[#232f7c] uppercase">
                Member Of
              </p>
              <a
                href="https://partnershipaccelerator.org/hesi/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-lg border border-neutral-100 bg-neutral-50 p-3 sm:p-4 transition-shadow hover:shadow-sm"
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
                Participating in UN HESI, UNAI, and UNITAR initiatives to align
                higher education with the 2030 Agenda.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Six Core Adopted SDGs */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-10 sm:py-16">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#232f7c] uppercase">
              Institutional Commitment
            </span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
              Six Priority SDGs Adopted at Trident
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-[15px] leading-relaxed text-neutral-600">
              Towards transforming technological processes, achieving sustainable
              reorientation, and moving toward Net Zero, TAT has formally
              adopted six UN Sustainable Development Goals (Goals 4 to 7, 13,
              and 17).
            </p>
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {CORE_GOALS.map((goal) => (
              <Link
                key={goal.number}
                href={goal.href}
                className="group flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-xs transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-lg shadow-xs">
                      <Image
                        src={goal.image}
                        alt={`SDG ${goal.number}: ${goal.title}`}
                        width={150}
                        height={150}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-wider text-white uppercase"
                      style={{ backgroundColor: goal.accentColor }}
                    >
                      Goal {goal.number}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#1b4699]">
                    {goal.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                    {goal.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#1b4699]">
                  <span>View Goal Initiatives &amp; Indicators</span>
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

      {/* Measurable Campus Actions */}
      <section
        id="campus-actions"
        className="mx-auto max-w-[1360px] px-4 py-10 sm:py-16 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#155e49] uppercase">
              On-Campus Implementation
            </span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
              Measurable Actions Under SDG 7, SDG 6 &amp; Zero-Plastic Policy
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-[15px] leading-relaxed text-neutral-600">
              Verified operational upgrades across energy efficiency, smart
              grids, solar generation, EV transport, circular water economy, and
              single-use plastic elimination.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-700/20 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-900 md:self-auto shrink-0">
            7 Active Campus Programs
          </span>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAMPUS_ACTIONS.map((action, index) => (
            <article
              key={action.id}
              className={`flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-xs transition-shadow hover:shadow-md ${
                index === 3
                  ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-amber-50/40"
                  : ""
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.08em] text-[#232f7c] uppercase">
                    {action.tag}
                  </span>
                  <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-neutral-700">
                    {action.highlight}
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-base sm:text-lg font-bold text-neutral-900">
                  {action.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                  {action.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SACRED Inauguration & Official UN SDG Poster */}
      <section className="border-y border-neutral-200 bg-[#f8f9fc] py-10 sm:py-16">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
            {/* Inauguration Photo + Video Link */}
            <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xs lg:col-span-6">
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src="/images/sdg/tcsr-banner.jpg"
                    alt="Inauguration of Sustainability and Climate Research Economics Department (SACRED) at Trident Academy of Technology"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.12em] text-[#d74444] uppercase">
                    Institutional Milestone
                  </span>
                  <h3 className="mt-2 font-serif text-lg sm:text-xl font-bold text-neutral-900">
                    Inauguration of SACRED at Trident Academy of Technology
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                    Faculty leadership and department representatives coming
                    together to launch the interdisciplinary Sustainability And
                    Climate Research Economics Department under TCSR.
                  </p>
                </div>
              </div>
              <div className="border-t border-neutral-100 px-5 sm:px-6 py-3.5">
                <a
                  href="https://www.youtube.com/watch?v=CHpRWp5tWE8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.06em] text-[#1b4699] uppercase hover:underline"
                >
                  <span>Watch Ceremony on YouTube</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* UN SDG Poster Card */}
            <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xs lg:col-span-6">
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
                    Embedding the 2030 Agenda across curriculum, research,
                    scholarships, clean energy infrastructure, and community
                    outreach initiatives.
                  </p>
                </div>
              </div>
              <div className="border-t border-neutral-100 px-5 sm:px-6 py-3.5">
                <a
                  href="https://sdgs.un.org/goals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.06em] text-[#1b4699] uppercase hover:underline"
                >
                  <span>Explore Official UN SDG Goals</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trident Sustainability Initiatives & THE Impact Rankings */}
      <section className="mx-auto max-w-[1360px] px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 border-b border-neutral-200 pb-6 sm:pb-8 md:flex-row md:items-center">
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#232f7c] uppercase">
              Global Benchmarking
            </span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
              Trident Sustainability Initiatives &amp; THE Impact Rankings
            </h2>
          </div>

          <a
            href="https://tat.ac.in/wp-content/uploads/2025/07/TRIDENT-Sustainability-Initiatives.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-[4px] border border-[#1b4699] bg-[#1b4699] px-5 py-3 text-xs font-bold tracking-[0.06em] text-white uppercase transition-colors hover:bg-[#15377a] shrink-0"
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

        {/* THE Impact Rankings Scorecard Image (Responsive container) */}
        <div className="mt-6 sm:mt-8 overflow-hidden rounded-xl border border-neutral-200 bg-white p-2.5 sm:p-5 shadow-sm">
          <div className="overflow-x-auto">
            <a
              href="https://www.timeshighereducation.com/world-university-rankings/trident-academy-technology"
              target="_blank"
              rel="noopener noreferrer"
              className="block min-w-[500px] md:min-w-0 overflow-hidden rounded-lg"
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
          <p className="mt-2 text-center text-[11px] text-neutral-400 md:hidden">
            Scroll horizontally to view complete scorecard
          </p>
        </div>

        {/* Narrative Details */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 sm:gap-8 text-sm sm:text-[15px] leading-[1.8] text-neutral-700 lg:grid-cols-2">
          <div className="space-y-4">
            <p>
              As Trident Academy of Technology (TAT) applies for the{" "}
              <strong>THE Impact Rankings</strong> for the first time, our
              commitment to the SDGs reflects our dedication to fostering an
              environment that prioritizes sustainable practices, social
              responsibility, and inclusive education.
            </p>
            <p>
              Our institution is actively embedding the SDGs across various
              dimensions of campus life, recognizing that the goals are not just
              aspirations but a blueprint for positive transformation. From
              promoting <strong>Quality Education (SDG 4)</strong> by innovating
              teaching methodologies to fostering{" "}
              <strong>Gender Equality (SDG 5)</strong> through inclusive
              policies, TAT aims to create an academic culture that supports
              equitable learning for all students. Through scholarships and
              outreach programs, we address{" "}
              <strong>No Poverty (SDG 1)</strong> and{" "}
              <strong>Zero Hunger (SDG 2)</strong> by supporting students from
              disadvantaged backgrounds and ensuring they have access to
              essential resources.
            </p>
          </div>

          <div className="space-y-4">
            <p>
              In addressing <strong>Climate Action (SDG 13)</strong>, we have
              undertaken campus-wide initiatives to reduce carbon emissions and
              foster environmental awareness among students and staff. The
              integration of renewable energy sources and waste management
              practices aligns with{" "}
              <strong>Affordable and Clean Energy (SDG 7)</strong> and{" "}
              <strong>Responsible Consumption and Production (SDG 12)</strong>,
              ensuring that TAT minimizes its environmental footprint.
            </p>
            <p>
              Partnerships play a crucial role in achieving these objectives. By
              collaborating with industries, local organizations, and other
              educational institutions, TAT supports{" "}
              <strong>Partnerships for the Goals (SDG 17)</strong> to foster
              community-driven solutions. Our outreach initiatives, like
              plantation drives and health awareness campaigns, demonstrate our
              commitment to <strong>Good Health and Well-being (SDG 3)</strong>{" "}
              and <strong>Life on Land (SDG 15)</strong>, creating a safer and
              healthier environment for both campus and community while producing
              responsible, future-ready graduates.
            </p>
          </div>
        </div>
      </section>

      {/* All 17 SDG Goals Grid (Responsive 2-to-6 columns) */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-10 sm:py-16">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#232f7c] uppercase">
              Complete SDG Directory
            </span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
              Explore All 17 Sustainable Development Goals at TAT
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-neutral-600">
              Select any Sustainable Development Goal below to inspect Trident
              Academy of Technology&apos;s institutional activities and progress
              reports.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
            {ALL_17_SDGS.map((sdg) => (
              <Link
                key={sdg.number}
                href={sdg.href}
                className="group flex flex-col overflow-hidden rounded-lg sm:rounded-xl border border-neutral-200 bg-white p-2 sm:p-2.5 shadow-xs transition-all hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-md sm:rounded-lg">
                  <Image
                    src={sdg.image}
                    alt={`SDG ${sdg.number}: ${sdg.title}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-2 flex flex-1 flex-col justify-between px-0.5">
                  <p className="text-[11px] sm:text-xs font-semibold leading-snug text-neutral-800 group-hover:text-[#1b4699]">
                    {sdg.number}. {sdg.title}
                  </p>
                  {sdg.rank && (
                    <span className="mt-1.5 inline-block self-start rounded bg-neutral-100 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold text-neutral-600">
                      THE 2025: {sdg.rank}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-6 sm:mt-8 text-center text-[10px] sm:text-[11px] text-neutral-500">
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
