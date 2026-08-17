'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Lock } from 'lucide-react';
import Image from 'next/image';
import { projects, personalInfo } from '@/config/portfolio';

export default function WorkSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
      id='work'
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
          <div className='mb-12 flex flex-wrap items-end justify-between gap-6'>
            <div>
              <p className='eyebrow mb-6'>04 / Work</p>
              <h2 className='mb-4 text-3xl font-bold md:text-4xl'>Selected work</h2>
              <p className='max-w-xl text-base leading-relaxed text-dim'>
                Reverse chronological. The enterprise projects are under NDA, so the detail here
                is the architecture and the measured outcome rather than screenshots.
              </p>
            </div>
            <a
              href={personalInfo.social.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button
                variant='ghost'
                className='rounded-sm text-paper hover:bg-raised hover:text-paper'
              >
                <Github className='mr-2 h-4 w-4' />
                GitHub
              </Button>
            </a>
          </div>

          {/* A typed timeline: each row is one engagement, newest first. */}
          <motion.ol
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
          >
            {projects.map((project) => (
              <motion.li
                key={project.title}
                variants={itemVariants}
                className='grid gap-5 border-t border-line py-8 lg:grid-cols-12 lg:gap-10'
              >
                {/* Meta rail */}
                <div className='lg:col-span-3'>
                  <p className='readout mb-2 text-xs text-signal'>{project.period}</p>
                  <p className='font-display text-base font-semibold text-paper'>
                    {project.company}
                  </p>
                  <p className='mt-1 text-xs text-faint'>{project.category}</p>

                  {project.logo && (
                    <div className='mt-4 hidden w-fit rounded-sm bg-paper px-3 py-2 lg:block'>
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={120}
                        height={48}
                        className='h-8 w-auto object-contain'
                      />
                    </div>
                  )}
                </div>

                {/* Detail */}
                <div className='lg:col-span-9'>
                  <h3 className='mb-3 font-display text-xl font-semibold text-paper md:text-2xl'>
                    {project.title}
                  </h3>
                  <p className='mb-5 max-w-3xl text-sm leading-relaxed text-dim md:text-base'>
                    {project.description}
                  </p>

                  <div className='mb-5 flex flex-wrap gap-x-5 gap-y-2'>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className='readout text-xs text-faint'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className='flex flex-wrap items-center gap-4'>
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 text-sm text-signal transition-colors hover:text-[#f0b25c]'
                      >
                        <ExternalLink className='h-4 w-4' />
                        Visit site
                      </a>
                    ) : (
                      <span className='inline-flex items-center gap-2 text-sm text-faint'>
                        <Lock className='h-3.5 w-3.5' />
                        Private / enterprise
                      </span>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 text-sm text-signal transition-colors hover:text-[#f0b25c]'
                      >
                        <Github className='h-4 w-4' />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>
      </div>
    </section>
  );
}
