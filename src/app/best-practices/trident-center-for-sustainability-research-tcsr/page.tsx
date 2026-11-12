import type { Metadata } from "next";
import { TcsrPageContent } from "@/components/TcsrPageContent";

export const metadata: Metadata = {
  title:
    "Trident Center for Sustainability Research (TCSR) | Trident Academy of Technology",
  description:
    "Sustainability And Climate Research Economics Department (SACRED) under TCSR at Trident Academy of Technology — advancing the UN Sustainable Development Goals and campus climate action.",
};

export default function TcsrPage() {
  return <TcsrPageContent />;
}

