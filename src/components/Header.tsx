'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Header() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 py-6 glass-effect"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="https://www.linkedin.com/in/arturo-lopez-martinez/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-2xl font-bold hover:scale-105 transition-transform"
          >
            <span className="text-white">Arturo</span>
            <span className="ml-2 text-gradient">Lopez</span>
          </a>
          
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            Work with me
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

