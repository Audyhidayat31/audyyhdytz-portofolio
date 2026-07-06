'use client';

import { Navbar } from '@/components/navbar';

import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { CertificatesSection } from '@/components/sections/certificates';
import { ExperienceSection } from '@/components/sections/experience';
import { EducationSection } from '@/components/sections/education';
import { ContactSection } from '@/components/sections/contact';
import { FooterSection } from '@/components/sections/footer';

const Divider = () => (
  <div className="w-full border-t border-slate-800/50 relative z-10" />
);

export default function Page() {
  return (
    <>

      <Navbar />
      <main className="relative">
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <CertificatesSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <EducationSection />
        <Divider />
        <ContactSection />
        <Divider />
        <FooterSection />
      </main>
    </>
  );
}
