'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Zap, CheckCircle, Users, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description:
      'Building scalable web applications with React, Next.js 15, and TypeScript. Expertise in performance optimization, achieving 57% improvement in TTI through lazy loading, SSR, and dynamic imports.',
    links: ['React', 'Next.js', 'TypeScript'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Implementing best practices for web performance including lazy loading, Server-Side Rendering, memoization, and code splitting. Proven track record of significant performance improvements.',
    links: ['Optimization', 'SSR', 'Performance'],
  },
  {
    icon: CheckCircle,
    title: 'Testing & Quality',
    description:
      'Maintaining high code quality with comprehensive unit testing using Vitest and Jest. Achieved 85% test coverage and 100% documentation rate using Storybook for UI components.',
    links: ['Testing', 'Vitest', 'Storybook'],
  },
  {
    icon: Users,
    title: 'Mentorship & Leadership',
    description:
      'Mentoring junior developers on best practices, code quality standards, and performance optimization. Leading code reviews and enforcing architectural patterns across teams.',
    links: ['Leadership', 'Mentoring', 'Code Review'],
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Header */}
          <motion.div
            ref={ref}
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
              What I do
            </h2>
            <h3 className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed">
              Specializing in React, Next.js, and TypeScript with a proven track record 
              of delivering high-performance web applications for enterprise clients like 
              NFL Plus and Ernst & Young.
            </h3>
            <Button
              onClick={scrollToWork}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              See my work
            </Button>
          </motion.div>

          {/* Right Side - Services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} variants={itemVariants}>
                  <Card className="glass-effect border-2 border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-accent rounded-lg group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-purple-400" />
                          </div>
                          <h4 className="text-xl lg:text-2xl font-semibold text-white">
                            {service.title}
                          </h4>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white/50 hover:text-white group-hover:scale-110 transition-transform"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </Button>
                      </div>
                      <p className="text-white/70 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex gap-3">
                        {service.links.map((link) => (
                          <span
                            key={link}
                            className="text-sm text-gradient font-medium"
                          >
                            {link}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

