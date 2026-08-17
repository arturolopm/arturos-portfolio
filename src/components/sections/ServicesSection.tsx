'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Compass, Gauge, Layers, Sparkles, type LucideIcon } from 'lucide-react';
import { services } from '@/config/portfolio';

const icons: Record<string, LucideIcon> = {
  Compass,
  Sparkles,
  Layers,
  Gauge,
};

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 120, damping: 18 },
    },
  };

  return (
    <section
      id='services'
      className='py-20 lg:py-28'
    >
      <div className='container mx-auto px-4'>
        <div className='grid gap-12 border-t border-line pt-12 lg:grid-cols-12 lg:gap-16'>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className='lg:col-span-4 lg:sticky lg:top-28 lg:h-fit'
          >
            <p className='eyebrow mb-6'>03 / What I do</p>
            <h2 className='mb-5 text-3xl font-bold md:text-4xl'>
              Four things I am genuinely good at
            </h2>
            <p className='mb-8 text-base leading-relaxed text-dim'>
              Each one is backed by shipped work at Xertify, NFL+ or Ernst &amp; Young — not a
              list of interests.
            </p>
            <Button
              onClick={scrollToWork}
              variant='ghost'
              size='lg'
              className='rounded-sm px-0 text-signal hover:bg-transparent hover:text-[#f0b25c]'
            >
              See the work &rarr;
            </Button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className='lg:col-span-8'
          >
            {services.map((service, index) => {
              const Icon = icons[service.icon] ?? Compass;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className='border-t border-line py-8 first:border-t-0 first:pt-0'
                >
                  <div className='mb-4 flex items-baseline gap-4'>
                    <span
                      className='readout text-xs text-faint'
                      aria-hidden='true'
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Icon
                      className='h-5 w-5 shrink-0 text-signal'
                      aria-hidden='true'
                    />
                    <h3 className='font-display text-xl font-semibold text-paper md:text-2xl'>
                      {service.title}
                    </h3>
                  </div>
                  <p className='mb-4 max-w-2xl pl-0 text-base leading-relaxed text-dim md:pl-12'>
                    {service.description}
                  </p>
                  <div className='flex flex-wrap gap-x-5 gap-y-2 md:pl-12'>
                    {service.links.map((link) => (
                      <span
                        key={link}
                        className='readout text-xs text-faint'
                      >
                        {link}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
