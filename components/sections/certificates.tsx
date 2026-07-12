'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from '../animations/fade-up';

const CERTIFICATES = [
  {
    id: 1,
    name: 'Profesional Programmer With Golang',
    issuer: 'Course / Bootcamp',
    year: 2023,
    description: 'Pengembangan backend menggunakan bahasa pemrograman Golang',
    link: '/certificates/Profesional Programmer With Golang.pdf',
    colorHex: 'text-blue-500',
    borderColor: 'border-blue-500',
    shadowColor: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'Pengembangan Aplikasi AI',
    issuer: 'Workshop',
    year: 2024,
    description: 'Workshop programming untuk pengembangan aplikasi AI',
    link: '/certificates/Workshop Programming Untuk Pengembangan Aplikasi AI.pdf',
    colorHex: 'text-purple-500',
    borderColor: 'border-purple-500',
    shadowColor: 'bg-purple-500',
  },
  {
    id: 3,
    name: 'Programming Essentials in Python',
    issuer: 'Cisco Networking Academy',
    year: 2024,
    description: 'Dasar-dasar pemrograman dengan Python (PCAP)',
    link: '/certificates/PCAP - Programming Essentials in Python.pdf',
    colorHex: 'text-cyan-400',
    borderColor: 'border-cyan-400',
    shadowColor: 'bg-cyan-400',
  },
  {
    id: 4,
    name: 'CCNA Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    year: 2025,
    description: 'Dasar-dasar jaringan komputer dan routing',
    link: '/certificates/CCNA Introduction to Networks.pdf',
    colorHex: 'text-orange-500',
    borderColor: 'border-orange-500',
    shadowColor: 'bg-orange-500',
  },
  {
    id: 5,
    name: 'MikroTik MTCNA',
    issuer: 'MikroTik',
    year: 2026,
    description: 'MikroTik Certified Network Associate',
    link: '/certificates/Mikrotik MTCNA.pdf',
    colorHex: 'text-yellow-500',
    borderColor: 'border-yellow-500',
    shadowColor: 'bg-yellow-500',
  },
  {
    id: 6,
    name: 'Transformasi Digital: IoT & AI',
    issuer: 'Seminar',
    year: 2025,
    description: 'Integrasi IoT dan Kecerdasan Buatan untuk masa depan',
    link: '/certificates/Transformasi Digital  Integrasi IoT & Kecerdasan Buatan Untuk Solusi Masa Depan.pdf',
    colorHex: 'text-emerald-500',
    borderColor: 'border-emerald-500',
    shadowColor: 'bg-emerald-500',
  },
  {
    id: 7,
    name: 'Learning Manajemen Sistem SPADA',
    issuer: 'SPADA',
    year: 2024,
    description: 'Sistem manajemen pembelajaran SPADA',
    link: '/certificates/Learning Manajemen Sistem SPADA.pdf',
    colorHex: 'text-teal-500',
    borderColor: 'border-teal-500',
    shadowColor: 'bg-teal-500',
  },
  {
    id: 8,
    name: 'Entrepreneurship',
    issuer: 'Seminar',
    year: 2023,
    description: 'Kewirausahaan untuk masa depan yang lebih baik',
    link: '/certificates/Entrepreneurship For a Better Future.pdf',
    colorHex: 'text-rose-500',
    borderColor: 'border-rose-500',
    shadowColor: 'bg-rose-500',
  }
];

export function CertificatesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="certificates"
      className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 uppercase tracking-wider">Achievement / Sertifikat</h2>
          </div>
        </FadeUp>

        <div className="relative w-full max-w-4xl mx-auto py-10">
          {/* Animated pulsing gradient line */}
          <motion.div
            className="block absolute left-8 md:left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 bg-gradient-to-b from-purple-500 via-cyan-500 to-emerald-500 rounded-full z-0"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              boxShadow: [
                "0 0 8px rgba(168, 85, 247, 0.3)",
                "0 0 16px rgba(6, 182, 212, 0.6)",
                "0 0 8px rgba(16, 185, 129, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="space-y-12 md:space-y-24">
            {CERTIFICATES.map((cert, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = hoveredId === cert.id;
              
              return (
                <div key={cert.id} className={`relative flex items-start justify-between ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col md:gap-16 pl-16 md:pl-0`}>
                  
                  {/* Node with pulse effect */}
                  <div className="flex absolute left-8 md:left-1/2 top-12 -translate-y-1/2 -translate-x-1/2 z-10 items-center justify-center">
                    {/* Pulsing ring */}
                    <div className={`absolute w-12 h-12 rounded-full animate-ping opacity-40 ${cert.shadowColor}`} />
                    {/* Solid center node */}
                    <div className={`w-6 h-6 border-[4px] rounded-full bg-[#030712] relative z-10 ${cert.borderColor}`} />
                  </div>
                  
                  {/* Empty div for spacing on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Card matching Alfareza styling */}
                  <motion.div 
                    layout
                    onMouseEnter={() => setHoveredId(cert.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`w-full md:w-1/2 cursor-pointer ${isEven ? 'md:text-right text-left' : 'text-left'}`}
                  >
                    <div className="bg-[#0B1120] p-6 sm:p-8 rounded-[1.5rem] hover:bg-[#0f172a] transition-colors border border-white/[0.05] relative overflow-hidden group shadow-2xl">
                      
                      <div className={`text-sm font-bold mb-3 ${cert.colorHex}`}>
                        {cert.year}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">{cert.name}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed mb-2">{cert.description}</p>
                      <p className="text-foreground/50 text-xs italic">{cert.issuer}</p>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 mt-6 border-t border-white/5 flex flex-col items-center">
                              <iframe 
                                src={`${cert.link}#view=FitH`}
                                title={cert.name}
                                className="w-full h-64 md:h-80 rounded-lg mb-6 bg-black/20 border border-white/5" 
                              />
                              <a 
                                href={cert.link} 
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-6 py-3 rounded-full font-bold transition-colors w-full justify-center shadow-lg shadow-cyan-400/20"
                              >
                                <Download className="w-5 h-5" />
                                UNDUH PDF
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
