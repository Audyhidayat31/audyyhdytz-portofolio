'use client';

import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp } from '../animations/fade-up';

const EDUCATION = [
  {
    id: 1,
    school: 'Universitas Bina Sarana Informatika',
    degree: 'Sarjana Komputer dalam Informatika',
    period: '2022 - 2026',
    description: 'Fokus pada pengembangan perangkat lunak, algoritma, dan teknologi web.',
    gpa: '3.8/4.0',
  },
  {
    id: 2,
    school: 'Bootcamp Coding',
    degree: 'Sertifikasi Pengembangan Web Full-Stack',
    period: '2025',
    description: 'Program intensif yang mencakup seluruh teknologi pengembangan web modern.',
    gpa: 'Selesai',
  },
  {
    id: 3,
    school: 'Platform Pembelajaran Online',
    degree: 'React & TypeScript Tingkat Lanjut',
    period: '2026',
    description: 'Kursus spesialisasi dalam pengembangan frontend dan JavaScript modern.',
    gpa: 'Selesai',
  },
];

export function EducationSection() {
  return (
    <section
      id="education"
      className="relative py-20 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="text-xl md:text-2xl font-black mb-10">Pendidikan</h2>
        </FadeUp>

        <div className="space-y-6">
          {EDUCATION.map((edu, idx) => (
            <FadeUp key={edu.id} delay={idx * 0.15}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="neo-card neo-border-yellow"
              >
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-foreground/60 font-medium mb-2">
                      {edu.school}
                    </p>
                    <p className="text-foreground/70 text-sm mb-3">
                      {edu.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-foreground/50">
                        {edu.period}
                      </span>
                      <span className="text-xs font-bold text-blue-500">
                        {edu.gpa}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
