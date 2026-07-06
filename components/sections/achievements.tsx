'use client';

import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp } from '../animations/fade-up';

const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Pemenang Hackathon',
    description: 'Juara 1 - Hackathon Inovasi Teknologi 2023',
    icon: '🏆',
    category: 'Kompetisi',
  },
  {
    id: 2,
    title: 'Pembicara di Konferensi Teknologi',
    description: 'Mempresentasikan tentang Pengembangan Web Modern di National Tech Summit',
    icon: '🎤',
    category: 'Pembicara',
  },
  {
    id: 3,
    title: 'Kontributor Open Source',
    description: 'Berkontribusi pada 10+ proyek open source populer',
    icon: '⭐',
    category: 'Open Source',
  },
  {
    id: 4,
    title: 'Lulusan Bootcamp',
    description: '5% Lulusan Terbaik - Bootcamp Pengembangan Full-Stack',
    icon: '🎓',
    category: 'Pelatihan',
  },
  {
    id: 5,
    title: 'Mentor Teknologi',
    description: 'Membimbing 20+ developer junior dalam pengembangan web',
    icon: '👨‍🏫',
    category: 'Mentoring',
  },
  {
    id: 6,
    title: 'Pemimpin Komunitas',
    description: 'Mendirikan dan memimpin komunitas developer JavaScript lokal',
    icon: '🤝',
    category: 'Komunitas',
  },
];

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative py-20 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-xl md:text-2xl font-black mb-10">Prestasi</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achievement, idx) => (
            <FadeUp key={achievement.id} delay={idx * 0.08}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="neo-card neo-border-emerald"
              >
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {achievement.description}
                </p>
                <span 
                  className="inline-block text-xs font-bold neo-border px-3 py-1 rounded-full" 
                  style={{ backgroundColor: achievement.color + '20', color: achievement.color, borderColor: achievement.color }}
                >
                  {achievement.category}
                </span>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
