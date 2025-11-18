'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'NFL Plus',
    description:
      'Developing and maintaining web applications for the NFL Plus platform running on Next 15 framework. Achieved 57% improvement in Time to Interactive (TTI) by implementing lazy loading, dynamic imports, Server-Side Rendering (SSR), and proper memoization. Maintained 100% documentation rate for new UI components using Storybook. Mentored junior developers and collaborated with cross-functional teams to deliver high-quality user experience.',
    category: 'Senior Frontend Developer',
    logo: '/logos/nfl-logo.svg',
    company: 'Globant',
    period: 'May 2025 - Present',
    liveUrl: null,
    githubUrl: null,
    tags: ['Next.js 15', 'React', 'TypeScript', 'SSR', 'Performance', 'Storybook'],
  },
  {
    title: 'Ernst & Young',
    description:
      'Refactored large-scale components in a regression analysis application, prioritizing performance and accessibility improvements using React and TypeScript. Achieved 85% unit test coverage for the new regression analysis tool using Vitest, with direct responsibility for 35% of the test suite. Coordinated cross-team efforts to transition the tool from development to production release, scaling from local (Germany-based) to global deployment. Integrated application into a larger federated development environment. Mentored junior developers on best practices, performance optimization, and code quality standards. Oversaw incorporation of third-party tools and external team components into the primary application.',
    category: 'Ssr Advanced Frontend Developer',
    logo: '/logos/ey-logo.svg',
    company: 'Globant',
    period: 'Jan 2024 - Apr 2025',
    liveUrl: null,
    githubUrl: null,
    tags: ['React', 'TypeScript', 'Vitest', 'Accessibility', 'Federated Apps', 'Mentorship'],
  },
];

export default function WorkSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="work" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: -30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My Latest <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            My recent experience at Globant, working on enterprise-level projects for 
            industry-leading clients. Focused on performance optimization, code quality, 
            and delivering exceptional user experiences.
          </p>
          <a
            href="https://github.com/arturolopm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              <Github className="w-4 h-4 mr-2" />
              View projects on GitHub
            </Button>
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="glass-effect border-2 border-white/10 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden h-full">
                <CardContent className="p-0">
                  {/* Project Image or Logo */}
                  <div className="relative h-48 bg-gradient-accent overflow-hidden">
                    {project.logo ? (
                      <div className="absolute inset-0 flex items-center justify-center p-8 bg-white">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          width={200}
                          height={100}
                          className="object-contain max-h-32 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
                          {project.title.charAt(0)}
                        </div>
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all" />
                      </>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm text-gradient font-medium">
                        {project.category}
                      </span>
                      {project.company && (
                        <span className="text-xs text-white/50">
                          @ {project.company}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    
                    {project.period && (
                      <p className="text-xs text-white/50 mb-3">
                        {project.period}
                      </p>
                    )}
                    
                    <p className="text-sm text-white/70 mb-4 line-clamp-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 glass-effect rounded-full text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-white/20 hover:border-purple-500/50"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live
                          </Button>
                        </a>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          disabled
                          className="flex-1 border-white/20"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Enterprise Project
                        </Button>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-white/20 hover:border-purple-500/50"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

