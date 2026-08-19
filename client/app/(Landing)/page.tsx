"use client";
import Hero from "@/components/landing/Hero";
import WhyCareerPilot from "@/components/landing/WhyCareerPilot";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import CreditBundles from "@/components/landing/CreditBundles";
import FaqSection from "@/components/landing/FaqSection";
import Resources from "@/components/landing/Resources";
import { useState } from "react";
import { useSidebarStore } from "@/store/sidebarStore";

export default function Home() {
  const { open } = useSidebarStore();
  const [startX, setStartX] = useState(0);

  const handleStart = (e: React.TouchEvent) => {
    if (window.innerWidth >= 768) return;
    setStartX(e.touches[0].clientX);
  };

  const handleEnd = (e: React.TouchEvent) => {
    if (window.innerWidth >= 768) return;

    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (deltaX > 100) {
      open();
    }

  };

  return (
    <main
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      className="bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_25%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.10),transparent_35%),linear-gradient(180deg,#f8fbff_0%,#f8fafc_32%,#f8fafc_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_25%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_35%),linear-gradient(180deg,#020817_0%,#0f172a_100%)] dark:text-slate-100 transition-colors duration-200"
    >
      <Hero />
      <WhyCareerPilot />
      <Features />
      <HowItWorks />
      <Pricing />
      <CreditBundles />
      <FaqSection />
      <Resources />
    </main>
  );
}
