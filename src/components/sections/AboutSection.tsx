'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { about, personalInfo } from '@/config/portfolio';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id='about'
      className='py-20 lg:py-28'
    >
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='grid gap-12 border-t border-line pt-12 lg:grid-cols-12 lg:gap-16'
        >
          {/* Left rail: the facts, as a spec sheet. */}
          <div className='lg:col-span-4'>
            <p className='eyebrow mb-8'>01 / About</p>

            <dl className='space-y-6'>
              <div>
                <dt className='eyebrow-dim mb-2'>Experience</dt>
                <dd className='readout text-4xl font-medium text-paper'>
                  {about.yearsOfExperience}
                  <span className='ml-2 font-sans text-sm font-normal text-faint'>years</span>
                </dd>
              </div>

              <div className='border-t border-line pt-5'>
                <dt className='eyebrow-dim mb-2'>Education</dt>
                <dd className='text-sm text-paper'>{about.education.degree}</dd>
                <dd className='mt-1 text-sm text-faint'>
                  {about.education.institution}, {about.education.year}
                </dd>
              </div>

              <div className='border-t border-line pt-5'>
                <dt className='eyebrow-dim mb-2'>Languages</dt>
                {about.languages.map((lang) => (
                  <dd
                    key={lang.name}
                    className='flex justify-between text-sm text-paper'
                  >
                    <span>{lang.name}</span>
                    <span className='readout text-faint'>{lang.level}</span>
                  </dd>
                ))}
              </div>

              <div className='border-t border-line pt-5'>
                <dt className='eyebrow-dim mb-2'>Based in</dt>
                <dd className='text-sm text-paper'>{personalInfo.location}</dd>
                <dd className='mt-1 text-sm text-faint'>{personalInfo.availability}</dd>
              </div>
            </dl>
          </div>

          {/* Right: the narrative. */}
          <div className='lg:col-span-8'>
            <h2 className='mb-6 text-3xl font-bold md:text-4xl'>{about.subtitle}</h2>

            <p className='mb-10 max-w-2xl text-base leading-relaxed text-dim md:text-lg'>
              {about.description}
            </p>

            <div className='mb-10'>
              <p className='eyebrow-dim mb-4'>Stack</p>
              <div className='flex flex-wrap gap-x-5 gap-y-2'>
                {about.technologies.map((tech) => (
                  <span
                    key={tech}
                    className='readout text-sm text-dim'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className='flex flex-wrap gap-3'>
              <a
                href={personalInfo.resumeUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  size='lg'
                  className='rounded-sm bg-signal font-medium text-[#17130c] hover:bg-[#f0b25c]'
                >
                  Download CV
                </Button>
              </a>
              <Button
                onClick={scrollToWork}
                variant='ghost'
                size='lg'
                className='rounded-sm text-paper hover:bg-raised hover:text-paper'
              >
                See the work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
