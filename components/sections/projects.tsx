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
    title: 'Manajemen Tugas',
    description: 'Alat manajemen tugas kolaboratif dengan pembaruan real-time dan fitur tim.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    image: '/projects/project-4.png',
    demo: '#',
    github: 'https://github.com',
  },
  {
    id: 5,
    title: 'Antarmuka Obrolan AI',
    description: 'Antarmuka obrolan modern yang didukung oleh AI dengan kemampuan pemrosesan bahasa alami.',
    tech: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind'],
    image: '/projects/project-5.png',
    demo: '#',
    github: 'https://github.com',
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
          <h2 className="text-xl md:text-2xl font-black mb-10">Proyek</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <HoverLift key={project.id} delay={idx * 0.1} className="h-full">
              <div className="neo-card neo-border-green flex flex-col h-full">
                {/* Project Image */}
                <div className="relative neo-border neo-border-yellow rounded-lg overflow-hidden mb-6 h-40 w-full">
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
                      className="text-xs font-medium neo-border neo-border-red px-3 py-1 rounded-full"
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
                    className="flex-1 neo-border neo-border-blue flex items-center justify-center gap-2 py-2 rounded-lg font-medium bg-yellow-400 text-black hover:bg-yellow-500 transition-colors"
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
                    className="flex-1 neo-border neo-border-red flex items-center justify-center gap-2 py-2 rounded-lg font-medium border-foreground/20 hover:bg-muted transition-colors"
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
