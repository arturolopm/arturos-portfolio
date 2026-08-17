'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'What I do' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      aria-label='Section navigation'
      className='fixed bottom-5 left-1/2 z-50 w-fit -translate-x-1/2'
    >
      <ul className='panel-raised flex items-center gap-1 rounded-sm px-1.5 py-1.5 shadow-xl'>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <button
                type='button'
                onClick={() => scrollToSection(item.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`readout relative rounded-sm px-3 py-1.5 text-xs transition-colors ${
                  isActive ? 'text-[#17130c]' : 'text-dim hover:text-paper'
                }`}
              >
                {/* No negative z-index here: the nav panel paints its own
                    background, so -z-10 would hide the pill behind it. DOM
                    order plus `relative` on the label is enough. */}
                {isActive && (
                  <motion.span
                    layoutId='navActive'
                    aria-hidden='true'
                    className='absolute inset-0 rounded-sm bg-signal'
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className='relative'>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
