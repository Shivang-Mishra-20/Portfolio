"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/ui/Navbar";
import CursorGlow from "@/components/ui/CursorGlow";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
