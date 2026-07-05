'use client';

import { FadeLeft } from '../animations/fade-left';
import { FadeRight } from '../animations/fade-right';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <FadeLeft>
          <h2 className="text-xl md:text-2xl font-black mb-10">TENTANG SAYA</h2>
        </FadeLeft>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <FadeLeft delay={0.2} className="h-full">
            <div className="neo-card neo-border-yellow h-full">
              <h3 className="text-2xl font-bold mb-6">Siapa Saya</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Saya merupakan mahasiswa Informatika yang berdedikasi dalam mengembangkan solusi digital yang estetis dan fungsional. Melalui perpaduan keahlian di bidang teknologi web modern dan desain antarmuka, saya berkomitmen untuk mentransformasikan gagasan menjadi produk digital yang bernilai tinggi.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Ketertarikan saya dalam industri teknologi berakar pada keinginan yang kuat untuk memecahkan berbagai tantangan dunia nyata. Saya terus mengeksplorasi inovasi terbaru guna memberikan pengalaman pengguna yang optimal dan berdampak positif.
              </p>
            </div>
          </FadeLeft>

          {/* Right Column */}
          <FadeRight delay={0.2} className="h-full">
            <div className="neo-card neo-border-blue h-full">
              <h3 className="text-2xl font-bold mb-6">Apa yang Saya Lakukan</h3>
              <ul className="space-y-4">
                {[
                  'Mendesain antarmuka web yang responsif dan aksesibel',
                  'Mengembangkan aplikasi front-end yang terukur',
                  'Menciptakan pengalaman pengguna yang menarik',
                  'Membimbing developer junior',
                  'Menjelajahi AI dan teknologi baru',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-2xl text-yellow-500 mt-1">→</span>
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
