'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
import { SplineScene } from '@/components/ui/splite';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
    },
  },
};

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center pt-24 pb-32'
    >
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='flex-1 text-center lg:text-left'
          >
            <motion.h1
              variants={itemVariants}
              className='text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4'
            >
              Arturo <span className='text-gradient'>Lopez</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-6'
            >
              <span className='text-white/80'>I am a </span>
              <span className='text-gradient'>Senior Frontend Developer</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className='text-lg text-white/70 mb-8 max-w-lg mx-auto lg:mx-0'
            >
              Full Stack Web Developer (Frontend oriented) with 4+ years of experience specializing
              in React, Next.js, JavaScript, Node and TypeScript. Proven expertise in building
              scalable web applications, optimizing performance, and implementing best practices.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className='flex flex-wrap gap-4 justify-center lg:justify-start mb-12'
            >
              <Button
                onClick={scrollToContact}
                size='lg'
                className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
              >
                Contact me
              </Button>
              <Button
                onClick={scrollToWork}
                variant='ghost'
                size='lg'
                className='text-gradient hover:bg-white/5'
              >
                My Portfolio
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='flex gap-6 text-4xl justify-center lg:justify-start'
            >
              <a
                href='https://github.com/arturolopm'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-200'
              >
                <Github className='w-10 h-10' />
              </a>
              <a
                href='https://www.linkedin.com/in/arturo-lopez-martinez/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-200'
              >
                <Linkedin className='w-10 h-10' />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Robot with Spotlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='flex-1 w-full h-[400px] lg:h-[600px] hidden lg:flex items-center justify-center'
          >
            <div className='w-full h-full'>
              <SplineScene
                scene='https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'
                className='w-full h-full'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
