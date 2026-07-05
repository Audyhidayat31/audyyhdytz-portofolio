'use client';

import { motion } from 'framer-motion';
import { Briefcase, Mail } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FadeUp } from '../animations/fade-up';

const TITLES = [
  'Mahasiswa Informatika',
  'Front-End Developer',
  'UI/UX Enthusiast',
  'Web Developer',
  'AI Enthusiast',
];

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex(prev => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 md:pt-36 px-4 md:px-6"
    >
      <div className="max-w-2xl w-full">
        <FadeUp>
          <div className="neo-card neo-border-green text-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mb-6 w-32 h-32 md:w-40 md:h-40 mx-auto"
            >
              <div className="neo-border neo-border-blue w-full h-full rounded-full overflow-hidden relative bg-gradient-to-br from-yellow-400 via-blue-400 to-red-400">
                <Image 
                  src="/profile.jpg" 
                  alt="Profile" 
                  fill 
                  className="object-cover"
                />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-yellow-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            {/* Name */}
            <h1 className="text-xl md:text-2xl font-black mb-2">Audy Abdillah Hidayat</h1>

            {/* Animated Titles */}
            <motion.div
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-lg md:text-xl font-bold text-yellow-500 dark:text-yellow-400 mb-4 h-8"
            >
              {TITLES[titleIndex]}
            </motion.div>

            {/* Description */}
            <p className="text-sm md:text-base text-foreground/80 mb-6 leading-relaxed">
              Seorang developer dan desainer yang bersemangat dalam menciptakan pengalaman digital yang indah dan fungsional. Spesialisasi dalam teknologi web modern dan prinsip desain yang berpusat pada pengguna.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="neo-border neo-border-red neo-card !p-3 font-bold text-center rounded-lg inline-flex items-center justify-center gap-2 bg-yellow-400 text-black hover:bg-yellow-500 transition-colors text-sm"
              >
                <Mail className="w-5 h-5" />
                Hubungi Saya
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="neo-border neo-border-yellow neo-card !p-3 font-bold text-center rounded-lg inline-flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors text-sm"
              >
                <Briefcase className="w-5 h-5" />
                Lihat Portofolio
              </motion.a>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-foreground/60 text-sm"
            >
              Gulir untuk menjelajah ↓
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
