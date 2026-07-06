'use client';

import { useState } from 'react';
import { Award, Download, Eye, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp } from '../animations/fade-up';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CERTIFICATES = [
  {
    id: 1,
    name: 'Profesional Programmer With Golang',
    issuer: 'Course / Bootcamp',
    year: 2023,
    description: 'Pengembangan backend menggunakan bahasa pemrograman Golang',
    color: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-500',
    link: '/certificates/Profesional Programmer With Golang.pdf',
    image: '/certificates/Profesional Programmer With Golang.pdf',
    icon: '🐹'
  },
  {
    id: 2,
    name: 'Pengembangan Aplikasi AI',
    issuer: 'Workshop',
    year: 2024,
    description: 'Workshop programming untuk pengembangan aplikasi AI',
    color: 'from-purple-500/20 to-purple-600/10',
    borderColor: 'border-purple-500',
    link: '/certificates/Workshop Programming Untuk Pengembangan Aplikasi AI.pdf',
    image: '/certificates/Workshop Programming Untuk Pengembangan Aplikasi AI.pdf',
    icon: '🤖'
  },
  {
    id: 3,
    name: 'Programming Essentials in Python',
    issuer: 'Cisco Networking Academy',
    year: 2024,
    description: 'Dasar-dasar pemrograman dengan Python (PCAP)',
    color: 'from-emerald-500/20 to-emerald-600/10',
    borderColor: 'border-emerald-500',
    link: '/certificates/PCAP - Programming Essentials in Python.pdf',
    image: '/certificates/PCAP - Programming Essentials in Python.pdf',
    icon: '🐍'
  },
  {
    id: 4,
    name: 'CCNA Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    year: 2025,
    description: 'Dasar-dasar jaringan komputer dan routing',
    color: 'from-orange-500/20 to-orange-600/10',
    borderColor: 'border-orange-500',
    link: '/certificates/CCNA Introduction to Networks.pdf',
    image: '/certificates/CCNA Introduction to Networks.pdf',
    icon: '🌐'
  },
  {
    id: 5,
    name: 'MikroTik MTCNA',
    issuer: 'MikroTik',
    year: 2026,
    description: 'MikroTik Certified Network Associate',
    color: 'from-yellow-500/20 to-yellow-600/10',
    borderColor: 'border-yellow-500',
    link: '/certificates/Mikrotik MTCNA.pdf',
    image: '/certificates/Mikrotik MTCNA.pdf',
    icon: '📡'
  },
  {
    id: 6,
    name: 'Transformasi Digital: IoT & AI',
    issuer: 'Seminar',
    year: 2025,
    description: 'Integrasi IoT dan Kecerdasan Buatan untuk masa depan',
    color: 'from-amber-500/20 to-amber-600/10',
    borderColor: 'border-amber-500',
    link: '/certificates/Transformasi Digital  Integrasi IoT & Kecerdasan Buatan Untuk Solusi Masa Depan.pdf',
    image: '/certificates/Transformasi Digital  Integrasi IoT & Kecerdasan Buatan Untuk Solusi Masa Depan.pdf',
    icon: '💡'
  },
  {
    id: 7,
    name: 'Learning Manajemen Sistem SPADA',
    issuer: 'SPADA',
    year: 2024,
    description: 'Sistem manajemen pembelajaran SPADA',
    color: 'from-teal-500/20 to-teal-600/10',
    borderColor: 'border-teal-500',
    link: '/certificates/Learning Manajemen Sistem SPADA.pdf',
    image: '/certificates/Learning Manajemen Sistem SPADA.pdf',
    icon: '📚'
  },
  {
    id: 8,
    name: 'Entrepreneurship',
    issuer: 'Seminar',
    year: 2023,
    description: 'Kewirausahaan untuk masa depan yang lebih baik',
    color: 'from-rose-500/20 to-rose-600/10',
    borderColor: 'border-rose-500',
    link: '/certificates/Entrepreneurship For a Better Future.pdf',
    image: '/certificates/Entrepreneurship For a Better Future.pdf',
    icon: '💼'
  }
];

export function CertificatesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <section
      id="certificates"
      className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <h2 className="text-xl md:text-2xl font-black mb-10 text-center">SERTIFIKAT</h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="relative w-full max-w-5xl mx-auto">
            <style jsx global>{`
              .swiper-pagination-custom .swiper-pagination-bullet {
                background: hsl(var(--foreground));
                opacity: 0.3;
                width: 8px;
                height: 8px;
                margin: 0 6px !important;
                transition: all 0.3s ease;
              }
              .swiper-pagination-custom .swiper-pagination-bullet-active {
                opacity: 1;
                background: hsl(var(--primary));
                transform: scale(1.3);
              }
            `}</style>

            <Swiper
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 25,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{
                el: '.swiper-pagination-custom',
                clickable: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="w-full"
            >
              {CERTIFICATES.map((cert) => (
                <SwiperSlide key={cert.id} className="!w-[260px] sm:!w-[340px] md:!w-[420px] transition-transform duration-300">
                  <div className={`aspect-[4/3] w-full rounded-xl border-2 ${cert.borderColor} bg-gradient-to-br ${cert.color} p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-md relative overflow-hidden bg-card/40`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                    <Award className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary mb-2 sm:mb-4 opacity-80" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2 relative z-10 leading-snug">{cert.name}</h3>
                    <p className="text-xs sm:text-sm text-foreground/70 font-medium relative z-10">{cert.issuer}</p>
                    <div className="mt-3 sm:mt-6 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-background/80 border border-border/50 text-xs sm:text-sm font-semibold relative z-10 shadow-sm">
                      {cert.year}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex items-center justify-center h-4 mt-6"></div>

            {/* Active Certificate Details with Integrated Navigation */}
            <div className="mt-8 text-center max-w-2xl mx-auto flex flex-col items-center w-full">

              {/* Navigation and Year Badge (Static wrapper to preserve Swiper listeners) */}
              <div className="flex items-center justify-center gap-6 mb-4 w-full z-20">
                <button
                  onClick={() => swiperInstance?.slidePrev()}
                  className="swiper-button-prev-custom w-12 h-12 rounded-full border border-primary/20 flex flex-shrink-0 items-center justify-center text-primary hover:bg-primary/10 transition-colors cursor-pointer pointer-events-auto"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <motion.div
                  key={`year-${activeIndex}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex items-center justify-center gap-2 text-primary font-bold text-lg min-w-[120px]"
                >
                  <span>{CERTIFICATES[activeIndex]?.icon}</span>
                  <span>{CERTIFICATES[activeIndex]?.year}</span>
                </motion.div>

                <button
                  onClick={() => swiperInstance?.slideNext()}
                  className="swiper-button-next-custom w-12 h-12 rounded-full border border-primary/20 flex flex-shrink-0 items-center justify-center text-primary hover:bg-primary/10 transition-colors cursor-pointer pointer-events-auto"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <motion.div
                key={`details-${activeIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                className="w-full px-4"
              >
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-foreground tracking-tight">
                  {CERTIFICATES[activeIndex]?.issuer}
                </h3>
                <p className="text-foreground/60 text-lg mb-8 font-medium">
                  {CERTIFICATES[activeIndex]?.description}
                </p>

                <div className="flex gap-4 justify-center items-center">
                  <motion.a
                    href={CERTIFICATES[activeIndex]?.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full text-primary hover:text-primary/80 transition-colors font-bold text-sm border-b border-transparent hover:border-primary/50"
                  >
                    SERTIFIKAT <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={CERTIFICATES[activeIndex]?.image || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-semibold text-sm"
                  >
                    <Eye className="w-4 h-4" /> Lihat Gambar
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
