'use client';

import { ExternalLink, Code2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HoverLift } from '../animations/hover-lift';
import { FadeUp } from '../animations/fade-up';

const PROJECTS = [
  {
    id: 1,
    title: 'MedConnect',
    description: 'Platform layanan kesehatan terpadu untuk konsultasi dokter online dan pemesanan obat dari apotek terverifikasi dengan layanan 24/7.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Framer Motion'],
    image: '/projects/medconnect.png',
    demo: 'https://layanankesehatan-project-p.vercel.app/',
    github: 'https://github.com/Audyhidayat31/layanankesehatan-project/tree/main',
  },
  {
    id: 2,
    title: 'Basic Skincare Ingredient Analyzer',
    description: 'Aplikasi analisis skincare cerdas untuk memindai komposisi produk (Single Ingredient) dan mengecek kecocokan kombinasi antar produk berdasarkan profil kulit pengguna.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Gemini AI', 'Typescript'],
    image: '/projects/Basic Skincare Ingredient Analyzer.png',
    demo: 'https://basic-skincare-ingredient-analyzier.vercel.app/',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'Sistem Manajemen Laundry Real-time',
    description: 'Aplikasi sistem informasi dan manajemen laundry yang memfasilitasi pengecekan resi pelanggan, informasi paket layanan, serta sistem login khusus staff untuk pengelolaan data.',
    tech: ['PHP (CodeIgniter)', 'Bootstrap 5', 'MySQL', 'JavaScript', 'CSS'],
    image: '/projects/Sistem Manajemen Laundry Real-time.png',
    demo: 'https://laundrykuporject.great-site.net/',
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'dyyLEARNING',
    description: 'Platform e-learning generasi baru untuk menguasai skill masa depan lewat ribuan kursus interaktif. Menyediakan pengalaman belajar tanpa batas secara gratis.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Drizzle ORM', 'NeonDB'],
    image: '/projects/dyyLEARNING.png',
    demo: 'https://dyylearning-project.vercel.app/',
    github: 'https://github.com/Audyhidayat31/dyylearning-project',
  },
  {
    id: 5,
    title: 'RemovedBG',
    description: 'Aplikasi web cerdas berbasis AI untuk menghapus latar belakang gambar secara otomatis. Memberikan hasil potongan beresolusi tinggi (HD) dengan proses super cepat di bawah 5 detik secara gratis.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'AI Technology'],
    image: '/projects/RemovedBG.png',
    demo: 'https://project-removedbg.vercel.app/',
    github: 'https://github.com/Audyhidayat31/project.removebg',
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-xl md:text-2xl font-black mb-10">PROYEK</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <HoverLift key={project.id} delay={idx * 0.1} className="h-full">
              <div className="neo-card neo-border-emerald flex flex-col h-full">
                {/* Project Image */}
                <div className="relative neo-border neo-border-emerald rounded-lg overflow-hidden mb-6 h-40 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="text-xs font-medium neo-border neo-border-emerald px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 neo-border flex items-center justify-center gap-2 py-2 rounded-lg font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Website
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 neo-border neo-border-emerald flex items-center justify-center gap-2 py-2 rounded-lg font-medium border-foreground/20 hover:bg-muted transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    Github
                  </motion.a>
                </div>
              </div>
            </HoverLift>
          ))}
        </div>
      </div>
    </section>
  );
}
