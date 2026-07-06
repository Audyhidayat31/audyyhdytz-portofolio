'use client';

import { motion } from 'framer-motion';
import { FadeUp } from '../animations/fade-up';
import {
  IconHTML5,
  IconCSS3,
  IconJavaScript,
  IconTypeScript,
  IconReact,
  IconNextjs,
  IconTailwind,
  IconNodejs,
  IconPython,
  IconDatabase,
  IconFigma,
  IconGitHub,
} from '../ui/icons';
import { Zap, Palette } from 'lucide-react';

const CATEGORIES = [
  { id: 'frontend', name: 'FRONTEND', color: 'bg-blue-500', hex: '#3b82f6' },
  { id: 'backend', name: 'BACKEND', color: 'bg-emerald-500', hex: '#10b981' },
  { id: 'database', name: 'BASIS DATA', color: 'bg-orange-500', hex: '#f97316' },
  { id: 'tools', name: 'ALAT & DESAIN', color: 'bg-purple-500', hex: '#a855f7' },
];

const SKILLS_DATA = [
  // Frontend
  { name: 'HTML5', category: 'frontend', icon: IconHTML5, color: 'text-orange-500', glow: 'hover:border-orange-500 hover:shadow-orange-500/20' },
  { name: 'CSS3', category: 'frontend', icon: IconCSS3, color: 'text-blue-500', glow: 'hover:border-blue-500 hover:shadow-blue-500/20' },
  { name: 'JavaScript', category: 'frontend', icon: IconJavaScript, color: 'text-yellow-400', glow: 'hover:border-yellow-400 hover:shadow-yellow-400/20' },
  { name: 'TypeScript', category: 'frontend', icon: IconTypeScript, color: '', glow: 'hover:border-blue-600 hover:shadow-blue-600/20' },
  { name: 'React', category: 'frontend', icon: IconReact, color: 'text-cyan-400', glow: 'hover:border-cyan-400 hover:shadow-cyan-400/20' },
  { name: 'Next.js', category: 'frontend', icon: IconNextjs, color: 'text-foreground', glow: 'hover:border-foreground hover:shadow-foreground/20' },
  { name: 'Tailwind', category: 'frontend', icon: IconTailwind, color: 'text-teal-400', glow: 'hover:border-teal-400 hover:shadow-teal-400/20' },
  
  // Backend
  { name: 'Node.js', category: 'backend', icon: IconNodejs, color: 'text-emerald-500', glow: 'hover:border-emerald-500 hover:shadow-emerald-500/20' },
  { name: 'Python', category: 'backend', icon: IconPython, color: 'text-yellow-500', glow: 'hover:border-yellow-500 hover:shadow-yellow-500/20' },
  { name: 'API / REST', category: 'backend', icon: Zap, color: 'text-gray-400', glow: 'hover:border-gray-400 hover:shadow-gray-400/20' },
  
  // Database
  { name: 'PostgreSQL', category: 'database', icon: IconDatabase, color: 'text-blue-400', glow: 'hover:border-blue-400 hover:shadow-blue-400/20' },

  // Tools
  { name: 'Figma', category: 'tools', icon: IconFigma, color: 'text-pink-500', glow: 'hover:border-pink-500 hover:shadow-pink-500/20' },
  { name: 'Git / GitHub', category: 'tools', icon: IconGitHub, color: 'text-foreground', glow: 'hover:border-foreground hover:shadow-foreground/20' },
  { name: 'UI/UX Design', category: 'tools', icon: Palette, color: 'text-purple-500', glow: 'hover:border-purple-500 hover:shadow-purple-500/20' },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">Skills</span> | Tech
            </h2>
            <p className="text-foreground/60 text-lg">
              Matriks teknologi yang dikuasai dalam ranah digital
            </p>
            
            {/* Legend / Category Filter Indicator */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${cat.color} shadow-sm`} />
                  <span className="text-xs md:text-sm font-bold tracking-widest text-foreground/80">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {SKILLS_DATA.map((skill, idx) => {
            const Icon = skill.icon;
            
            // Get category color for a subtle dot indicator in the card
            const cat = CATEGORIES.find(c => c.id === skill.category);
            
            return (
              <FadeUp 
                key={idx} 
                delay={idx * 0.05} 
                className="h-full w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.66rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(16.666%-1.25rem)]"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`neo-card skill-card-glow flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 h-full ${skill.glow} relative group cursor-default`}
                  style={{ '--neo-card-border': cat?.hex } as React.CSSProperties}
                >
                  {/* Subtle category dot */}
                  <div className={`absolute top-3 right-3 w-2 h-2 rounded-full ${cat?.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="flex items-center justify-center w-14 h-14 mb-4">
                    <Icon className={`w-12 h-12 ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                  </div>
                  <h3 className="text-sm font-bold text-center leading-tight text-foreground/90">
                    {skill.name}
                  </h3>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
