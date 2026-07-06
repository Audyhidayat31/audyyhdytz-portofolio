'use client';

import { FadeLeft } from '../animations/fade-left';
import { FadeRight } from '../animations/fade-right';
import { motion } from 'framer-motion';
import { 
  User, 
  GraduationCap, 
  Heart, 
  Sparkles, 
  Briefcase, 
  Monitor, 
  Code2, 
  Users 
} from 'lucide-react';

const whatIDo = [
  {
    title: 'Desain & Pengembangan Web',
    description: 'Merancang dan membangun antarmuka web yang responsif, modern, dan user-friendly.',
    icon: Monitor,
  },
  {
    title: 'Pengembangan Front-End',
    description: 'Membuat aplikasi web dengan performa tinggi menggunakan teknologi terbaru.',
    icon: Code2,
  },
  {
    title: 'Pengalaman Pengguna (UI/UX)',
    description: 'Merancang pengalaman pengguna yang intuitif dan menarik untuk meningkatkan kepuasan pengguna.',
    icon: Users,
  },
  {
    title: 'Pembelajaran & Pengembangan Diri',
    description: 'Terus belajar dan mengeksplorasi teknologi baru untuk mengembangkan kemampuan dan menciptakan solusi yang lebih baik.',
    icon: GraduationCap,
  },
];

const badges = [
  {
    title: 'Mahasiswa',
    subtitle: 'Informatika',
    icon: GraduationCap,
  },
  {
    title: 'Fokus',
    subtitle: 'Web & UI/UX',
    icon: Heart,
  },
  {
    title: 'Passion',
    subtitle: 'Inovasi & Teknologi',
    icon: Sparkles,
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <FadeLeft>
          <div className="mb-10">
            <h4 className="text-emerald-500 font-bold uppercase tracking-wider text-sm mb-2">TENTANG SAYA</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Mengenal Saya Lebih Dekat</h2>
          </div>
        </FadeLeft>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column */}
          <FadeLeft delay={0.2} className="h-full">
            <div className="neo-card neo-border-emerald h-full flex flex-col relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-emerald-500/10 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-500 ring-1 ring-emerald-500/30">
                  <User size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Tentang Saya</h3>
              </div>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed flex-grow">
                <p>
                  Saya adalah mahasiswa Informatika yang memiliki ketertarikan mendalam dalam pengembangan web, desain antarmuka, dan teknologi digital. Saya percaya bahwa teknologi yang baik tidak hanya berfungsi dengan optimal, tetapi juga memberikan pengalaman yang bermakna bagi penggunanya.
                </p>
                <p>
                  Saya senang belajar hal baru, memecahkan masalah kompleks, dan berkolaborasi, untuk mewujudkan solusi digital yang inovatif dan berdampak.
                </p>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10">
                {badges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <badge.icon className="text-emerald-500 shrink-0" size={20} />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white leading-tight">{badge.title}</span>
                      <span className="text-xs text-foreground/60">{badge.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeLeft>

          {/* Right Column */}
          <FadeRight delay={0.2} className="h-full">
            <div className="neo-card neo-border-blue h-full flex flex-col relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-full text-blue-500 ring-1 ring-blue-500/30">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Apa yang Saya Lakukan</h3>
              </div>

              <ul className="space-y-6 flex-grow flex flex-col justify-center">
                {whatIDo.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group/item hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="p-3 bg-blue-500/5 rounded-full text-blue-400 shrink-0 mt-1 ring-1 ring-blue-500/20 group-hover/item:bg-blue-500/10 group-hover/item:text-blue-300 group-hover/item:ring-blue-500/40 transition-all">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1 group-hover/item:text-blue-300 transition-colors">{item.title}</h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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
