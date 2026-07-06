'use client';

import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp } from '../animations/fade-up';

const EXPERIENCE = [
  {
    id: 1,
    title: 'Front-End Developer',
    company: 'Tech Company Inc',
    period: '2025 - Sekarang',
    description: 'Membangun antarmuka web yang responsif, modern, dan berorientasi pada pengalaman pengguna.',
    type: 'Profesional',
  },
  {
    id: 2,
    title: 'Freelance Web Developer',
    company: 'Independent Developer',
    period: '2025 - Sekarang',
    description: 'Mengembangkan website sesuai kebutuhan klien dengan mengutamakan performa, kualitas, dan desain yang responsif.',
    type: 'Freelance',
  },
  {
    id: 3,
    title: 'Full-Stack Project Developer',
    company: 'Personal Project',
    period: '2025 - 2026',
    description: 'Mengembangkan aplikasi web full-stack dengan mengintegrasikan frontend, backend, database, dan fitur-fitur modern.',
    type: 'Project',
  },
];

const TYPE_COLORS = {
  Profesional: 'text-yellow-500',
  Freelance: 'text-blue-500',
  Proyek: 'text-red-500',
  Organisasi: 'text-purple-500',
  Hackathon: 'text-emerald-500',
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="text-xl md:text-2xl font-black mb-10">PENGALAMAN</h2>
        </FadeUp>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="block absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 bg-gradient-to-b from-yellow-400 via-blue-500 to-red-400 rounded-full"
            animate={{
              opacity: [0.2, 0.8, 0.2],
              boxShadow: [
                "0 0 4px rgba(234, 179, 8, 0.2)",
                "0 0 12px rgba(59, 130, 246, 0.6)",
                "0 0 4px rgba(234, 179, 8, 0.2)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, idx) => (
              <FadeUp key={exp.id} delay={idx * 0.1}>
                <div className={`relative pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                  {/* Timeline dot */}
                  <div className="flex absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 items-center justify-center">
                    {/* Pulsing ring */}
                    <div className={`absolute w-6 h-6 rounded-full animate-ping opacity-50 ${idx === 0 ? 'bg-yellow-400' : idx === 1 ? 'bg-blue-500' : 'bg-red-400'
                      }`} />
                    <div className={`w-4 h-4 neo-border rounded-full bg-background relative z-10 ${idx === 0 ? 'neo-border-yellow' : idx === 1 ? 'neo-border-blue' : 'neo-border-red'}`} />
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`neo-card ${idx === 0 ? 'neo-border-yellow' : idx === 1 ? 'neo-border-blue' : 'neo-border-red'} ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} md:w-[calc(50%-1rem)]`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase
                        className={`w-5 h-5 flex-shrink-0 mt-1 ${TYPE_COLORS[exp.type as keyof typeof TYPE_COLORS]
                          }`}
                      />
                      <div>
                        <h3 className="text-lg font-bold">{exp.title}</h3>
                        <p className="text-sm text-foreground/60">{exp.company}</p>
                      </div>
                    </div>

                    <p className="text-foreground/70 text-sm mb-3">
                      {exp.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-foreground/50">
                        {exp.period}
                      </span>
                      <span
                        className={`text-xs font-bold ${TYPE_COLORS[exp.type as keyof typeof TYPE_COLORS]
                          }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
