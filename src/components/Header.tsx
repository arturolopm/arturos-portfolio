'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/config/portfolio';

export default function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className='fixed top-0 right-0 left-0 z-40 border-b border-line bg-ink/85 backdrop-blur-sm'
    >
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          <button
            type='button'
            onClick={scrollToTop}
            className='font-display text-lg font-bold tracking-tight text-paper transition-colors hover:text-signal'
          >
            Arturo Lopez
            <span className='readout ml-3 hidden text-xs font-normal text-faint sm:inline'>
              {personalInfo.title}
            </span>
          </button>

          <Button
            onClick={scrollToContact}
            className='rounded-sm bg-signal font-medium text-[#17130c] hover:bg-[#f0b25c]'
          >
            Work with me
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
