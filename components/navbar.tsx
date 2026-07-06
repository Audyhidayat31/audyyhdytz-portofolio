'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'BERANDA', id: 'hero' },
  { label: 'TENTANG', id: 'about' },
  { label: 'KEAHLIAN', id: 'skills' },
  { label: 'PROYEK', id: 'projects' },
  { label: 'SERTIFIKAT', id: 'certificates' },
  { label: 'PENGALAMAN', id: 'experience' },
  { label: 'PENDIDIKAN', id: 'education' },
  { label: 'KONTAK', id: 'contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => {
        const element = document.getElementById(item.id);
        return {
          id: item.id,
          element,
          offset: element?.offsetTop || 0,
        };
      });

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur neo-border neo-border-emerald border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="text-4xl font-normal"
            style={{ fontFamily: 'var(--font-great-vibes)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portofolio.
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-all text-sm font-medium ${activeSection === item.id
                  ? 'bg-foreground text-background'
                  : 'hover:bg-muted'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden neo-border neo-border-red w-10 h-10 flex items-center justify-center rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 pt-4 border-t neo-border neo-border-yellow flex flex-col gap-2"
          >
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all font-medium ${activeSection === item.id
                  ? 'bg-foreground text-background'
                  : 'hover:bg-muted'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
