'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Palette, Server } from 'lucide-react';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), {
  ssr: false,
  loading: () => <div className='w-full h-full bg-gradient-accent rounded-full animate-pulse' />,
});

const skills = [
  {
    category: 'Frontend Development',
    icon: Code2,
    items: ['React', 'Next.js 15', 'TypeScript', 'JavaScript', 'Redux', 'Zustand'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Styling & UI',
    icon: Palette,
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'Storybook', 'Responsive Design'],
    color: 'from-pink-500 to-red-500',
  },
  {
    category: 'Backend & APIs',
    icon: Server,
    items: ['Node.js', 'RESTful APIs', 'OAuth', 'WebSockets', 'MERN Stack'],
    color: 'from-red-500 to-orange-500',
  },
  {
    category: 'Tools & Testing',
    icon: Database,
    items: ['Git/GitHub', 'Vitest', 'Jest', 'Performance Optimization', 'SEO'],
    color: 'from-orange-500 to-yellow-500',
  },
];

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id='skills'
      className='py-20 lg:py-32 relative overflow-hidden'
    >
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent' />

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          ref={ref}
          initial={{ y: -30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
            Skills & <span className='text-gradient'>Expertise</span>
          </h2>
          <p className='text-lg text-white/70 max-w-2xl mx-auto'>
            Frontend-oriented Full Stack Developer with 4+ years of experience specializing in
            React, Next.js, and TypeScript. Proven track record of delivering scalable web
            applications with focus on performance optimization, accessibility, and best practices.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left Side - 3D Spline Scene */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className='relative h-[400px] lg:h-[600px] order-2 lg:order-1'
          >
            <div className='absolute inset-0 bg-gradient-accent rounded-3xl' />
            <div className='relative h-full rounded-3xl overflow-hidden glass-effect'>
              <Scene3D />
            </div>
          </motion.div>

          {/* Right Side - Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className='order-1 lg:order-2'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.category}
                    variants={itemVariants}
                  >
                    <Card className='glass-effect border-2 border-white/10 hover:border-purple-500/50 transition-all duration-300 group h-full'>
                      <CardContent className='p-6'>
                        <div className='flex items-center gap-3 mb-4'>
                          <div
                            className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform`}
                          >
                            <Icon className='w-5 h-5 text-white' />
                          </div>
                          <h3 className='text-xl font-bold text-white'>{skill.category}</h3>
                        </div>
                        <ul className='space-y-2'>
                          {skill.items.map((item) => (
                            <li
                              key={item}
                              className='text-white/70 text-sm flex items-center gap-2'
                            >
                              <span className='w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500' />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Stats */}
            <motion.div
              variants={itemVariants}
              className='mt-8 grid grid-cols-3 gap-4'
            >
              <Card className='glass-effect border border-white/10 text-center hover:border-purple-500/30 transition-all'>
                <CardContent className='p-4'>
                  <div className='text-2xl font-bold text-gradient'>4+</div>
                  <div className='text-xs text-white/60'>Years Experience</div>
                </CardContent>
              </Card>
              <Card className='glass-effect border border-white/10 text-center hover:border-purple-500/30 transition-all'>
                <CardContent className='p-4'>
                  <div className='text-2xl font-bold text-gradient'>57%</div>
                  <div className='text-xs text-white/60'>TTI Improvement</div>
                </CardContent>
              </Card>
              <Card className='glass-effect border border-white/10 text-center hover:border-purple-500/30 transition-all'>
                <CardContent className='p-4'>
                  <div className='text-2xl font-bold text-gradient'>85%</div>
                  <div className='text-xs text-white/60'>Test Coverage</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
