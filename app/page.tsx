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

export default function Page() {
  return (
    <>

      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
