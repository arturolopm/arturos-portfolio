// Portfolio Configuration File
// Edit this file to customize your portfolio content

export const personalInfo = {
  name: 'Arturo Lopez',
  title: 'Senior Frontend Web Developer',
  tagline: 'Building scalable web applications with React & Next.js',
  description:
    "Full Stack Web Developer (Frontend oriented) with 4+ years of experience specializing in React, Next.js, JavaScript, Node and TypeScript. Proven expertise in building scalable web applications, optimizing performance, and implementing best practices in unit testing, accessibility and AI assisted development.",
  location: 'Medellin, Colombia',
  email: 'carturolopezm@gmail.com',
  phone: '+57 3013866300',
  resumeUrl: 'https://drive.google.com/file/d/1CUEmCnDOpBAjZ-OxTlj9e1mJm_7TVlkN/view?usp=sharing',
  social: {
    github: 'https://github.com/arturolopm',
    linkedin: 'https://www.linkedin.com/in/arturo-lopezm/',
  },
};

export const about = {
  title: 'About me',
  subtitle: 'Full Stack Web Developer (Frontend Oriented)',
  description:
    "With 4+ years of experience, I specialize in building scalable web applications using React, Next.js, and TypeScript. I've delivered high-impact projects at Globant for clients like NFL Plus and Ernst & Young, achieving significant performance improvements and maintaining high code quality standards. My expertise spans from frontend optimization to full-stack development, with a strong focus on user-centered solutions and best practices.",
  yearsOfExperience: '4+',
  education: {
    degree: 'Business Management',
    institution: 'Universidad Nacional de Colombia',
    year: '2019',
  },
  languages: [
    { name: 'English', level: 'Advanced (C1)' },
    { name: 'Spanish', level: 'Native (C2)' },
  ],
  technologies: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Redux',
    'Zustand',
    'Tailwind CSS',
  ],
};

export const skills = {
  title: 'Skills & Expertise',
  description:
    'Frontend-oriented Full Stack Developer with 4+ years of experience specializing in React, Next.js, and TypeScript. Proven track record of delivering scalable web applications with focus on performance optimization, accessibility, and best practices.',
  categories: [
    {
      name: 'Frontend Development',
      items: ['React', 'Next.js 15', 'TypeScript', 'JavaScript', 'Redux', 'Zustand'],
    },
    {
      name: 'Styling & UI',
      items: ['HTML5', 'CSS3', 'Tailwind CSS', 'Storybook', 'Responsive Design'],
    },
    {
      name: 'Backend & APIs',
      items: ['Node.js', 'RESTful APIs', 'OAuth', 'WebSockets', 'MERN Stack'],
    },
    {
      name: 'Tools & Testing',
      items: ['Git/GitHub', 'Vitest', 'Jest', 'Performance Optimization', 'SEO'],
    },
  ],
  stats: {
    experience: '4+',
    expertise: 'React',
    focus: 'Frontend',
  },
  highlights: [
    '57% improvement in Time to Interactive (TTI)',
    '85% unit test coverage achieved',
    '100% documentation rate for UI components',
  ],
  // Spline 3D scene URL - using an interactive robot scene with spotlight
  splineSceneUrl: 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode',
};

export const services = [
  {
    title: 'Frontend Development',
    description:
      'Building scalable web applications with React, Next.js 15, and TypeScript. Expertise in performance optimization, achieving 57% improvement in TTI through lazy loading, SSR, and dynamic imports.',
    icon: 'Code',
    links: ['React', 'Next.js', 'TypeScript'],
  },
  {
    title: 'Performance Optimization',
    description:
      'Implementing best practices for web performance including lazy loading, Server-Side Rendering, memoization, and code splitting. Proven track record of significant performance improvements.',
    icon: 'Zap',
    links: ['Optimization', 'SSR', 'Performance'],
  },
  {
    title: 'Testing & Quality',
    description:
      'Maintaining high code quality with comprehensive unit testing using Vitest and Jest. Achieved 85% test coverage and 100% documentation rate using Storybook for UI components.',
    icon: 'CheckCircle',
    links: ['Testing', 'Vitest', 'Storybook'],
  },
  {
    title: 'Mentorship & Leadership',
    description:
      'Mentoring junior developers on best practices, code quality standards, and performance optimization. Leading code reviews and enforcing architectural patterns across teams.',
    icon: 'Users',
    links: ['Leadership', 'Mentoring', 'Code Review'],
  },
];

export const projects = [
  {
    title: 'NFL Plus Platform',
    description:
      'Senior Frontend Developer at Globant working on NFL Plus web applications using Next.js 15. Achieved 57% improvement in Time to Interactive through performance optimization and SSR implementation.',
    category: 'Enterprise',
    company: 'Globant',
    period: 'May 2025 - Present',
    image: '/projects/nfl.jpg',
    liveUrl: null,
    githubUrl: null,
    tags: ['Next.js 15', 'React', 'Performance', 'SSR', 'TypeScript'],
  },
  {
    title: 'Ernst & Young Regression Analysis Tool',
    description:
      'Refactored large-scale components prioritizing performance and accessibility. Achieved 85% unit test coverage using Vitest and coordinated global deployment from Germany-based to worldwide release.',
    category: 'Enterprise',
    company: 'Globant',
    period: 'Jan 2024 - Apr 2025',
    image: '/projects/ey.jpg',
    liveUrl: null,
    githubUrl: null,
    tags: ['React', 'TypeScript', 'Vitest', 'Accessibility', 'Testing'],
  },
  {
    title: 'Studio5 E-Commerce',
    description:
      'Led end-to-end development of e-commerce platform using MERN stack with comprehensive unit testing. Integrated payment processors, optimized performance and SEO positioning.',
    category: 'Full Stack',
    company: 'Studio5',
    period: 'May 2023 - Nov 2023',
    image: '/projects/studio5.jpg',
    liveUrl: 'https://studiocincomaquillaje.com/',
    githubUrl: null,
    tags: ['MERN', 'TypeScript', 'E-commerce', 'SEO', 'Testing'],
  },
  {
    title: 'Myjou Social Platform',
    description:
      'Built MVP core structure from scratch with OAuth authentication and WebSockets for real-time features. Social platform for goal tracking and peer feedback.',
    category: 'Full Stack',
    company: 'Myjou',
    period: 'Mar 2023 - May 2023',
    image: '/projects/myjou.jpg',
    liveUrl: 'https://myjou.tech/',
    githubUrl: null,
    tags: ['MERN', 'OAuth', 'WebSockets', 'Real-time'],
  },
  {
    title: 'Sunquwan E-Commerce',
    description:
      'Developed comprehensive e-commerce application with secure payment integration (PayPal, MercadoPago). Improved SEO positioning through semantic HTML implementation.',
    category: 'Full Stack',
    company: 'Sunquwan',
    period: 'Nov 2022 - Mar 2023',
    image: '/projects/sunquwan.jpg',
    liveUrl: 'https://www.sunquwan.com/',
    githubUrl: 'https://github.com/arturolopm/ReactEcommerce',
    tags: ['React', 'PayPal', 'MercadoPago', 'SEO'],
  },
];

export const contact = {
  title: 'Get in touch',
  heading: "Let's work together!",
  description:
    "Interested in collaborating on a project or discussing opportunities? I'm always open to new challenges in frontend development, performance optimization, and building scalable web applications.",
};

export const experience = [
  {
    company: 'Globant',
    position: 'Senior Frontend Web Developer',
    project: 'NFL Plus',
    location: 'Medellin, Colombia',
    period: 'May 2025 - Present',
    highlights: [
      'Developing and maintaining web applications for NFL Plus platform using Next.js 15',
      'Achieved 57% improvement in Time to Interactive (TTI) through optimization',
      'Maintained 100% documentation rate for UI components using Storybook',
      'Mentored junior developers on best practices and performance optimization',
    ],
  },
  {
    company: 'Globant',
    position: 'Ssr Advanced Frontend Web Developer',
    project: 'Ernst & Young',
    location: 'Medellin, Colombia',
    period: 'January 2024 - April 2025',
    highlights: [
      'Refactored large-scale components prioritizing performance and accessibility',
      'Achieved 85% unit test coverage using Vitest',
      'Coordinated global deployment from Germany to worldwide release',
      'Integrated application into federated development environment',
    ],
  },
  {
    company: 'Studio5',
    position: 'Full Stack Web Developer',
    location: 'Bogotá, Colombia',
    period: 'May 2023 - November 2023',
    highlights: [
      'Led end-to-end development of e-commerce platform using MERN stack',
      'Integrated payment processors and optimized performance',
      'Mentored junior developers and increased test coverage',
    ],
  },
  {
    company: 'Myjou',
    position: 'Full Stack Web Developer',
    location: 'Bogotá, Colombia',
    period: 'March 2023 - May 2023',
    highlights: [
      'Built MVP core structure with OAuth authentication',
      'Implemented WebSockets for real-time features',
    ],
  },
  {
    company: 'Sunquwan',
    position: 'Full Stack Web Developer',
    location: 'Bogotá, Colombia',
    period: 'November 2022 - March 2023',
    highlights: [
      'Developed e-commerce with secure payment integration',
      'Improved SEO through semantic HTML implementation',
    ],
  },
];

