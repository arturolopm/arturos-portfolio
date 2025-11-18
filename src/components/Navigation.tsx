'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Sparkles, label: 'Skills' },
  { id: 'services', icon: Code, label: 'Services' },
  { id: 'work', icon: Briefcase, label: 'Work' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-fit"
    >
      <div className="glass-effect rounded-full px-6 py-4 shadow-2xl">
        <div className="flex items-center gap-2 md:gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="icon"
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-all duration-300 hover:scale-110 ${
                  isActive ? 'text-purple-500' : 'text-white/70 hover:text-white'
                }`}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}

