export interface CoreGoal {
  number: number;
  title: string;
  description: string;
  image: string;
  accentColor: string;
  href: string;
}

export interface CampusAction {
  id: string;
  tag: string;
  title: string;
  description: string;
  highlight: string;
}

export interface SdgGoalItem {
  number: number;
  title: string;
  image: string;
  href: string;
  rank?: string;
}

export const KEY_METRICS = [
  {
    value: "6 Goals",
    label: "Core Campus SDGs Adopted (4–7, 13 & 17)",
  },
  {
    value: "250 kWp",
    label: "Campus-Wide Rooftop Solar PV Target",
  },
  {
    value: "10 kWp",
    label: "Grid-Interactive Net-Metered Pilot on Block-5",
  },
  {
    value: "1501+",
    label: "THE Impact Rankings 2025 Global Band",
  },
];

export const CORE_GOALS: CoreGoal[] = [
  {
    number: 4,
    title: "Quality Education",
    description: "Ensure inclusive and equitable quality education",
    image: "/images/sdg/goal-4.jpg",
    accentColor: "#c5192d",
    href: "https://tat.ac.in/sdg-4-quality-education/",
  },
  {
    number: 5,
    title: "Gender Equality",
    description: "Achieve gender equality",
    image: "/images/sdg/goal-5.jpg",
    accentColor: "#ff3a21",
    href: "https://tat.ac.in/sdg-5-gender-equality/",
  },
  {
    number: 6,
    title: "Clean Water & Sanitation",
    description:
      "Ensure availability and sustainable management of water and sanitation for all",
    image: "/images/sdg/goal-6.jpg",
    accentColor: "#26bde2",
    href: "https://tat.ac.in/sdg-6-clean-water-sanitation/",
  },
  {
    number: 7,
    title: "Affordable & Clean Energy",
    description:
      "Ensure access to affordable, reliable, carbon free, renewable, sustainable and modern energy for all",
    image: "/images/sdg/goal-7.jpg",
    accentColor: "#fcc30b",
    href: "https://tat.ac.in/sdg-7-affordable-clean-energy/",
  },
  {
    number: 13,
    title: "Climate Action",
    description:
      "Take urgent action to combat climate change and its impacts across campus and community",
    image: "/images/sdg/goal-13.jpg",
    accentColor: "#3f7e44",
    href: "https://tat.ac.in/sdg-13-climate-action/",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    description:
      "Strengthen implementation and revitalize global partnerships for sustainable development",
    image: "/images/sdg/goal-17.jpg",
    accentColor: "#19486a",
    href: "https://tat.ac.in/sdg-17-partnership-to-achieve-the-goal/",
  },
];

export const CAMPUS_ACTIONS: CampusAction[] = [
  {
    id: "led-lighting",
    tag: "SDG 7 · Energy Efficiency",
    title: "LED Illumination Upgrade",
    highlight: "Zero Lumen Loss",
    description:
      "Replaced legacy energy-consuming FTLs across campus with energy-efficient LED bulbs without sacrificing total lumens for illumination.",
  },
  {
    id: "bldc-fans",
    tag: "SDG 7 · Cooling Efficiency",
    title: "BLDC Fan Retrofitting",
    highlight: "Low Power Draw",
    description:
      "Replaced conventional energy-consuming ceiling fans with energy-efficient BLDC fans while maintaining full air circulation.",
  },
  {
    id: "smart-grid-ai",
    tag: "SDG 7 · Smart Grid & AI",
    title: "Energy Audit, IoT Grid & AI Optimization",
    highlight: "Certified Audit",
    description:
      "Instituted an energy audit by certified auditor Mr. Mir Manjur Elahi for air conditioning loads; transitioning to an IoT and Wireless Sensor Network (WSN) smart grid paired with AI-driven demand-side load optimization.",
  },
  {
    id: "solar-pv",
    tag: "SDG 7 · Renewable Generation",
    title: "250 kWp Rooftop Solar & Hybrid Farm",
    highlight: "Govt. of India MoU",
    description:
      "Signed an MoU with the Green Jobs Sector Skill Council of India. Following a 2 kWp hybrid demo and a grid-interactive, net-metered 10 kWp pilot plant on Block-5, full 250 kWp rooftop PV installation is underway alongside plans for a MWp solar land farm and hybrid canal-top solar + wind farm.",
  },
  {
    id: "ev-fleet",
    tag: "SDG 7 & 13 · Clean Mobility",
    title: "Hybrid & Full EV Transport Fleet",
    highlight: "Fleet Transition",
    description:
      "Actively converting the institution's transport vehicle fleet from petrol and diesel powertrains to hybrid and full electric vehicle (EV) types.",
  },
  {
    id: "circular-water",
    tag: "SDG 6 · Circular Economy",
    title: "Water Harvesting & Kitchen Waste Recycling",
    highlight: "4 Borewells Recharged",
    description:
      "Deploying circular economy models for daily kitchen waste, Sewage Treatment Plant (STP) discharge water reuse, and rooftop plus field-level rainwater harvesting to recharge all four campus groundwater borewells.",
  },
  {
    id: "plastic-free",
    tag: "SDG 12 & 13 · Zero Waste",
    title: "Plastic-Free Campus Policy",
    highlight: "Strict Ban",
    description:
      "Strictly forbidden the use of single-use plastics and other non-biodegradable packaging items throughout the campus.",
  },
];

export const ALL_17_SDGS: SdgGoalItem[] = [
  {
    number: 1,
    title: "No Poverty",
    image: "/images/sdg/goal-1.jpg",
    href: "https://tat.ac.in/sdg-1-no-poverty/",
    rank: "601-800th",
  },
  {
    number: 2,
    title: "Zero Hunger",
    image: "/images/sdg/goal-2.jpg",
    href: "https://tat.ac.in/sdg-2-zero-hunger/",
    rank: "601-800th",
  },
  {
    number: 3,
    title: "Good Health & Well-being",
    image: "/images/sdg/goal-3.jpg",
    href: "https://tat.ac.in/sdg-3-good-health-well-being/",
    rank: "1501+",
  },
  {
    number: 4,
    title: "Quality Education",
    image: "/images/sdg/goal-4.jpg",
    href: "https://tat.ac.in/sdg-4-quality-education/",
    rank: "1001-1500th",
  },
  {
    number: 5,
    title: "Gender Equality",
    image: "/images/sdg/goal-5.jpg",
    href: "https://tat.ac.in/sdg-5-gender-equality/",
    rank: "1001-1500th",
  },
  {
    number: 6,
    title: "Clean Water & Sanitation",
    image: "/images/sdg/goal-6.jpg",
    href: "https://tat.ac.in/sdg-6-clean-water-sanitation/",
    rank: "601-800th",
  },
  {
    number: 7,
    title: "Affordable & Clean Energy",
    image: "/images/sdg/goal-7.jpg",
    href: "https://tat.ac.in/sdg-7-affordable-clean-energy/",
    rank: "601-800th",
  },
  {
    number: 8,
    title: "Decent Work & Economic Growth",
    image: "/images/sdg/goal-8.jpg",
    href: "https://tat.ac.in/sdg-8-decent-work-and-economic-growth",
    rank: "801-1000th",
  },
  {
    number: 9,
    title: "Industry, Innovation & Infrastructure",
    image: "/images/sdg/goal-9.jpg",
    href: "https://tat.ac.in/sdg-9-industry-innovation-and-infrastructure",
    rank: "601-800th",
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    image: "/images/sdg/goal-10.jpg",
    href: "https://tat.ac.in/sdg-10-reducing-inequalities",
    rank: "1001+",
  },
  {
    number: 11,
    title: "Sustainable Cities & Communities",
    image: "/images/sdg/goal-11.jpg",
    href: "https://tat.ac.in/sdg-11-sustainable-cities-communities",
    rank: "601-800th",
  },
  {
    number: 12,
    title: "Responsible Consumption & Production",
    image: "/images/sdg/goal-12.jpg",
    href: "https://tat.ac.in/sdg-12-responsible-consumption-production",
    rank: "601-800th",
  },
  {
    number: 13,
    title: "Climate Action",
    image: "/images/sdg/goal-13.jpg",
    href: "https://tat.ac.in/sdg-13-climate-action/",
    rank: "601-800th",
  },
  {
    number: 14,
    title: "Life Below Water",
    image: "/images/sdg/goal-14.jpg",
    href: "https://tat.ac.in/sdg-14-life-below-water/",
  },
  {
    number: 15,
    title: "Life on Land",
    image: "/images/sdg/goal-15.jpg",
    href: "https://tat.ac.in/sdg-15-life-on-land/",
    rank: "601-800th",
  },
  {
    number: 16,
    title: "Peace, Justice & Strong Institutions",
    image: "/images/sdg/goal-16.jpg",
    href: "https://tat.ac.in/sdg-16-peace-justice-strong-institutions/",
    rank: "1001+",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    image: "/images/sdg/goal-17.jpg",
    href: "https://tat.ac.in/sdg-17-partnership-to-achieve-the-goal/",
    rank: "1501+",
  },
];

