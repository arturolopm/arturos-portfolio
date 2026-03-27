'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const technologies = [
  'React', 'Next.js 15', 'TypeScript', 'JavaScript', 
  'Node.js', 'Redux', 'Zustand', 'Tailwind CSS',
  'HTML5', 'CSS3', 'Vitest', 'Jest', 'Storybook'
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Side - Image/Visual */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <Card className="glass-effect p-8 lg:p-12 border-2 border-white/10">
              <div className="aspect-square bg-gradient-accent rounded-2xl flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-6xl lg:text-8xl font-bold text-gradient mb-4">
                    4+
                  </div>
                  <div className="text-xl lg:text-2xl text-white/80 mb-6">
                    Years of Experience
                  </div>
                  <div className="space-y-2 text-sm text-white/60">
                    <div>🎓 Business Management</div>
                    <div>Universidad Nacional de Colombia</div>
                    <div className="mt-4">🌍 English (C1) • Spanish (C2)</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
              About me
            </h2>
            
            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
              Full Stack Web Developer (Frontend Oriented)
            </h3>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              With 5+ years of experience, I specialize in building scalable web 
              applications using React, Next.js, and TypeScript. I've delivered 
              high-impact projects at Globant for clients like NFL Plus and Ernst & Young, 
              achieving significant performance improvements and maintaining high code 
              quality standards. My expertise spans from frontend optimization to 
              full-stack development, with a strong focus on user-centered solutions 
              and best practices.
            </p>

            {/* Technology Stack */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 glass-effect rounded-full text-sm text-white/80 hover:text-white hover:scale-105 transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1CUEmCnDOpBAjZ-OxTlj9e1mJm_7TVlkN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  Get My Resume
                </Button>
              </a>
              <Button
                onClick={scrollToWork}
                variant="ghost"
                size="lg"
                className="text-gradient hover:bg-white/5"
              >
                My Portfolio
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

