'use client';

import { motion } from 'framer-motion';

export function FooterSection() {
  return (
    <footer className="relative footer-glow-border py-12 px-4 md:px-6 mt-12 mx-4 md:mx-6 mb-4 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black mb-2">Portofolio</h3>
            <p className="text-foreground/60 text-sm">
              Wadah unjuk karya dan hasrat saya dalam menciptakan pengalaman digital yang indah.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Tautan Langsung</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'TENTANG', id: 'about' },
                { label: 'PROYEK', id: 'projects' },
                { label: 'KEAHLIAN', id: 'skills' },
                { label: 'KONTAK', id: 'contact' },
              ].map(link => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Dibangun Dengan</h4>
            <ul className="space-y-2 text-sm">
              {['Next.js 16', 'React 19', 'Tailwind CSS', 'Framer Motion'].map(
                tech => (
                  <li key={tech}>
                    <span className="text-foreground/60">{tech}</span>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-emerald-500/50 relative z-10 my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-foreground/60 text-sm"
        >
          <p>© 2026 Audy Abdillah Hidayat. Hak cipta dilindungi undang-undang.</p>
          <p className="mt-2">
            Didesain & Dibuat dengan sepenuh hati menggunakan teknologi web modern
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
