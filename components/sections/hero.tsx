'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FadeUp } from '../animations/fade-up';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 z-10 pb-8"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-500/10 rounded-full blur-[100px] sm:blur-[120px] -z-10"></div>

      <FadeUp delay={0.1}>
        {/* Profile Image */}
        <div className="relative z-10 mb-8">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="relative w-32 h-32 md:w-36 md:h-36 overflow-hidden rounded-full cursor-pointer bg-slate-900 border-2 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 mx-auto">
              <Image
                src="/profile.jpg"
                alt="Foto Profil Audy Abdillah Hidayat"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        {/* Heading */}
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-center md:text-5xl lg:text-5xl text-slate-100">
          Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Audy Abdillah Hidayat.</span>
        </h1>
      </FadeUp>

      <FadeUp delay={0.3}>
        {/* Description */}
        <p className="max-w-2xl mt-6 text-sm sm:text-base leading-relaxed text-center text-slate-400">
          Mahasiswa Informatika yang memiliki minat di bidang Web Development dan UI/UX Design. Berpengalaman mengembangkan aplikasi web menggunakan teknologi modern dengan fokus pada desain yang menarik, performa yang optimal, serta pengalaman pengguna yang nyaman dan mudah digunakan
        </p>
      </FadeUp>

      <FadeUp delay={0.4}>
        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="px-8 py-3 text-sm font-semibold tracking-wider text-slate-950 uppercase transition-all rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] hover:scale-105 active:scale-95"
          >
            Lihat Project
          </a>
          <a
            href="#contact"
            className="px-8 py-3 text-sm font-semibold tracking-wider text-emerald-400 uppercase transition-all border border-emerald-500/50 rounded-full hover:bg-emerald-500/10 active:scale-95 bg-slate-900"
          >
            Hubungi Saya
          </a>
        </div>
      </FadeUp>
    </section>
  );
}
