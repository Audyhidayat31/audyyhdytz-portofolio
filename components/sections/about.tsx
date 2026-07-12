'use client';

import { FadeUp } from '../animations/fade-up';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative pt-20 md:pt-32 pb-10 px-4 md:px-6"
    >
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Profil Singkat</h2>
            <p className="text-foreground/70 leading-relaxed text-lg sm:text-xl font-medium">
              Terampil merancang aplikasi modern berbasis web dan mobile, serta memiliki kemampuan <span className="text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">analytical & problem solving</span> yang kuat dalam debugging maupun troubleshooting hardware/software.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
