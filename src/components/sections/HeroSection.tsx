'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { SiriWave } from '@/components/ui/siri-wave';
import { personalInfo, skills } from '@/config/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id='home'
      className='relative flex min-h-screen items-center pt-28 pb-28'
    >
      {/* Waveform sits behind the copy on small screens, beside it on large. */}
      <div
        className='pointer-events-none absolute inset-y-0 right-0 w-full opacity-40 lg:w-[52%] lg:opacity-100'
        aria-hidden='true'
      >
        <SiriWave
          variant='wave'
          fill
          color='#e9a13b'
          className='h-full w-full'
        />
      </div>

      <div className='relative z-10 container mx-auto px-4'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='max-w-2xl'
        >
          <motion.p
            variants={itemVariants}
            className='eyebrow mb-6'
          >
            {personalInfo.location} — {personalInfo.availability}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className='mb-5 text-5xl leading-[0.95] font-extrabold tracking-tight md:text-7xl'
          >
            Arturo Lopez
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='mb-7 font-display text-2xl leading-tight font-semibold text-signal md:text-3xl'
          >
            {personalInfo.role}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className='mb-10 max-w-xl text-base leading-relaxed text-dim md:text-lg'
          >
            {personalInfo.description}
          </motion.p>

          {/* Metric readout: the strongest evidence, above the fold. */}
          <motion.dl
            variants={itemVariants}
            className='mb-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-6 sm:grid-cols-4'
          >
            {skills.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className='readout text-2xl font-medium text-paper md:text-3xl'>
                  {metric.value}
                </dt>
                <dd className='mt-1 text-xs leading-snug text-faint'>{metric.label}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div
            variants={itemVariants}
            className='flex flex-wrap items-center gap-3'
          >
            <Button
              onClick={() => scrollTo('contact')}
              size='lg'
              className='rounded-sm bg-signal font-medium text-[#17130c] hover:bg-[#f0b25c]'
            >
              Get in touch
            </Button>
            <Button
              onClick={() => scrollTo('work')}
              variant='ghost'
              size='lg'
              className='rounded-sm text-paper hover:bg-raised hover:text-paper'
            >
              See the work
              <ArrowDown className='ml-2 h-4 w-4' />
            </Button>

            <div className='ml-1 flex items-center gap-1'>
              <a
                href={personalInfo.social.github}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub profile'
                className='p-2 text-dim transition-colors hover:text-signal'
              >
                <Github className='h-5 w-5' />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn profile'
                className='p-2 text-dim transition-colors hover:text-signal'
              >
                <Linkedin className='h-5 w-5' />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
