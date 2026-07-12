'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'BERANDA', id: 'hero' },
  { label: 'TENTANG & SKILLS', id: 'about' },
  { label: 'PROYEK', id: 'projects' },
  { label: 'SERTIFIKAT', id: 'certificates' },
  { label: 'KONTAK', id: 'contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

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

      setIsScrolled(window.scrollY > 20);

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
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/60 backdrop-blur-md neo-border neo-border-emerald border-b' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-center w-full">
          {/* Navigation */}
          <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 md:gap-4 w-full">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg transition-all text-xs sm:text-sm md:text-base font-bold whitespace-nowrap ${activeSection === item.id
                  ? 'bg-foreground text-background'
                  : 'hover:bg-muted/50'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
