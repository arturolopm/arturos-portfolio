'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiriWave } from '@/components/ui/siri-wave';
import { skills } from '@/config/portfolio';

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 120, damping: 18 },
    },
  };

  return (
    <section
      id='skills'
      className='py-20 lg:py-28'
    >
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='border-t border-line pt-12'
        >
          <div className='mb-12 grid gap-8 lg:grid-cols-12 lg:items-end'>
            <div className='lg:col-span-7'>
              <p className='eyebrow mb-6'>02 / Capabilities</p>
              <h2 className='mb-5 text-3xl font-bold md:text-4xl'>{skills.title}</h2>
              <p className='max-w-xl text-base leading-relaxed text-dim'>
                {skills.description}
              </p>
            </div>

            {/* The fluid-dots variant of the same shader component: merging,
                scattering, gathering. Second and last use of the accent. */}
            <div className='hidden lg:col-span-5 lg:flex lg:justify-end'>
              <SiriWave
                variant='fluid-dots'
                size={260}
                color='#e9a13b'
                speed={0.85}
              />
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className='grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'
          >
            {skills.categories.map((category) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className='border-t border-line pt-5'
              >
                <div className='mb-4'>
                  <h3 className='font-display text-base font-semibold text-paper'>
                    {category.name}
                  </h3>
                  {category.note && (
                    <p className='mt-1 text-xs text-faint italic'>{category.note}</p>
                  )}
                </div>
                <ul className='space-y-2'>
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className='readout text-sm text-dim'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlights as a plain list. The numbers are the point; they do not
              need cards around them. */}
          <div className='mt-14 border-t border-line pt-6'>
            <p className='eyebrow-dim mb-4'>Selected outcomes</p>
            <ul className='grid gap-x-10 gap-y-3 sm:grid-cols-2'>
              {skills.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className='flex gap-3 text-sm text-dim'
                >
                  <span
                    aria-hidden='true'
                    className='mt-2 h-px w-4 shrink-0 bg-signal'
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
