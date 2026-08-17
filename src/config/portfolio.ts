// Portfolio Configuration File
// Single source of truth for portfolio content. The sections import from here,
// so edit this file rather than the components.

export const personalInfo = {
  name: 'Arturo Lopez',
  title: 'Senior Software Engineer',
  role: 'Senior Full Stack Engineer (Frontend-Focused)',
  tagline: 'I build AI-powered, multi-tenant SaaS products end to end',
  description:
    'Senior full stack engineer (frontend-focused) with 5+ years building scalable, multi-tenant SaaS platforms and AI-powered products. I lead products end to end — scoping with stakeholders, architecting the solution, and driving delivery — in React, Next.js, TypeScript and Node.js, with hands-on experience integrating LLM agents into production.',
  location: 'Medellin, Colombia',
  availability: 'Open to remote roles worldwide',
  email: 'carturolopezm@gmail.com',
  phone: '+57 301 386 6300',
  resumeUrl:
    'https://drive.google.com/file/d/1CUEmCnDOpBAjZ-OxTlj9e1mJm_7TVlkN/view?usp=sharing',
  social: {
    github: 'https://github.com/arturolopm',
    linkedin: 'https://www.linkedin.com/in/arturo-lopezm/',
  },
};

export const about = {
  title: 'About me',
  subtitle: 'Senior Full Stack Engineer (Frontend-Focused)',
  description:
    "Over 5+ years I've gone from building MVPs from scratch to owning the entire frontend of a company's flagship AI product. At Xertify I architected a multi-tenant conversational assistant on Next.js 16 — SSE-streamed chat across Anthropic Claude, Google ADK agents and Gemini, granular per-tenant RBAC, and a dual-token auth flow — and shipped it to enterprise and education clients. Before that, at Globant, I drove frontend architecture for NFL+ and Ernst & Young. I care most about owning the whole problem: scoping it with stakeholders, deciding the architecture, and leaving standards behind that outlast me.",
  yearsOfExperience: '5+',
  education: {
    degree: 'Bachelor of Business Management',
    institution: 'Universidad Nacional de Colombia',
    year: '2019',
  },
  languages: [
    { name: 'Spanish', level: 'Native (C2)' },
    { name: 'English', level: 'Advanced (C1)' },
  ],
  technologies: [
    'React',
    'Next.js 16',
    'TypeScript',
    'Node.js',
    'Zustand',
    'React Query',
    'Zod',
    'MySQL',
    'PostgreSQL',
    'Docker',
    'AWS',
    'Anthropic Claude',
    'Playwright',
    'Vitest',
  ],
};

export const skills = {
  title: 'Skills & Expertise',
  description:
    'Senior engineer with deep React/Next.js architecture experience and hands-on production work integrating LLMs and agent frameworks into real products.',
  categories: [
    {
      name: 'Frontend & Architecture',
      items: [
        'React',
        'Next.js 16 (App Router)',
        'TypeScript',
        'Zustand',
        'TanStack React Query',
        'React Hook Form + Zod',
      ],
    },
    {
      name: 'AI & Real-Time',
      items: [
        'Anthropic Claude',
        'Google ADK Agents',
        'Gemini',
        'LLM / Agent Integration',
        'SSE Streaming',
        'WebSockets',
      ],
    },
    {
      name: 'Backend & Data',
      items: ['Node.js', 'MySQL', 'PostgreSQL', 'REST APIs', 'Repository Pattern', 'Firebase'],
    },
    {
      name: 'Platform & Security',
      items: [
        'Multi-tenant SaaS',
        'Granular RBAC',
        'JWT + OAuth',
        'Google / Microsoft SSO',
        'Docker',
        'AWS (ECR, SQS)',
      ],
    },
    {
      name: 'Quality & Testing',
      items: [
        'Vitest',
        'Jest',
        'Playwright',
        'Storybook',
        'GitHub Actions CI/CD',
        'Accessibility & SEO',
      ],
    },
    {
      name: 'Performance',
      items: [
        'SSR',
        'Dynamic Imports',
        'Lazy Loading',
        'Memoization Strategy',
        'Core Web Vitals',
        'Claude Code',
      ],
    },
  ],
  // Verified numbers only. Each maps to a specific role.
  metrics: [
    { value: '5+', label: 'Years shipping production software' },
    { value: '57%', label: 'Time to Interactive gain on NFL+' },
    { value: '85%', label: 'Unit test coverage at Ernst & Young' },
    { value: '30%', label: 'Faster PR reviews via Claude in CI' },
  ],
  highlights: [
    '57% improvement in Time to Interactive (NFL+)',
    '85% unit test coverage, 35% personally authored (Ernst & Young)',
    '30% faster code review via Claude-based automation in CI/CD',
    '100% Storybook coverage of new UI components',
  ],
};

export const services = [
  {
    title: 'End-to-End Product Ownership',
    description:
      "I take products from stakeholder scoping through architecture to delivery. At Xertify I owned the entire frontend of the company's flagship AI product, negotiating scope, timelines and information architecture directly with enterprise and education clients.",
    icon: 'Compass',
    links: ['Architecture', 'Scoping', 'Delivery'],
  },
  {
    title: 'AI Product Engineering',
    description:
      'Hands-on production integration of LLMs and agent frameworks into product surfaces: SSE-streamed chat UIs, conversation history and resume-context handling across Anthropic Claude, Google ADK agents and Gemini. Integration and product work, not model training.',
    icon: 'Sparkles',
    links: ['Claude', 'Google ADK', 'SSE Streaming'],
  },
  {
    title: 'Multi-Tenant SaaS Architecture',
    description:
      'Subdomain-based tenant routing and isolation, a shared component system serving distinct tenant experiences from one codebase, granular per-tenant RBAC, and dual-token authentication over a repository-pattern data layer.',
    icon: 'Layers',
    links: ['Multi-tenancy', 'RBAC', 'Auth'],
  },
  {
    title: 'Performance & Quality Standards',
    description:
      'Measurable performance work — a 57% Time to Interactive improvement on NFL+ through SSR, dynamic imports, lazy loading and memoization — plus the testing and documentation standards that keep gains from eroding.',
    icon: 'Gauge',
    links: ['Core Web Vitals', 'Vitest', 'Playwright'],
  },
];

export const projects = [
  {
    title: 'Xertiflow AI Assistant',
    description:
      "Led the end-to-end build of Xertify's flagship AI product: a conversational assistant for case management and student/customer service-request intake, delivered to enterprise and education clients. Built on Next.js 16 with an SSE-streamed chat UI, conversation history and resume-context handling across Anthropic Claude, Google ADK agents and Gemini. Architected the multi-tenant frontend with subdomain tenant isolation, granular per-tenant RBAC, and dual-token auth (Firebase + custom JWT) over a repository-pattern MySQL layer.",
    category: 'Senior Full Stack Engineer',
    company: 'Xertify',
    period: 'Feb 2026 - Present',
    logo: null,
    liveUrl: null,
    githubUrl: null,
    tags: [
      'Next.js 16',
      'Anthropic Claude',
      'Google ADK',
      'Gemini',
      'SSE Streaming',
      'Multi-tenant',
      'RBAC',
      'Docker',
    ],
  },
  {
    title: 'NFL Plus',
    description:
      'Drove frontend architecture and technical decisions for the NFL+ streaming platform on Next.js 15, defining patterns and standards adopted across the team. Led a performance initiative that improved Time to Interactive by 57% through SSR, dynamic imports, lazy loading and memoization strategy. Collaborated on integrating Claude-based automated code review into the CI/CD pipeline, cutting review turnaround by 30%. Established Storybook documentation and testing standards with 100% coverage of new UI components, and mentored engineers on architecture and performance.',
    category: 'Senior Frontend Engineer',
    company: 'Globant',
    period: 'May 2025 - Dec 2025',
    logo: '/logos/nfl-logo.svg',
    liveUrl: null,
    githubUrl: null,
    tags: ['Next.js 15', 'React', 'Performance', 'SSR', 'Storybook', 'Claude in CI'],
  },
  {
    title: 'Ernst & Young',
    description:
      'Led refactoring of large-scale components in a regression-analysis platform (React, TypeScript), prioritizing performance and accessibility. Drove the tool from a regional Germany-based deployment to global release inside a federated development environment. Achieved 85% unit test coverage with Vitest, personally owning 35% of the suite, and oversaw integration of third-party and external-team components.',
    category: 'Semi-Senior Advanced Frontend Engineer',
    company: 'Globant',
    period: 'Jan 2024 - Apr 2025',
    logo: '/logos/ey-logo.svg',
    liveUrl: null,
    githubUrl: null,
    tags: ['React', 'TypeScript', 'Vitest', 'Accessibility', 'Federated Apps'],
  },
  {
    title: 'Studio5 E-Commerce',
    description:
      'Led end-to-end development of an e-commerce platform on the MERN stack with payment integrations, performance and SEO optimization, and full unit-test coverage.',
    category: 'Full Stack Developer',
    company: 'Studio5',
    period: '2023',
    logo: null,
    liveUrl: 'https://studiocincomaquillaje.com/',
    githubUrl: null,
    tags: ['MERN', 'E-commerce', 'SEO', 'Testing'],
  },
  {
    title: 'Sunquwan E-Commerce',
    description:
      'Built a full e-commerce application from scratch with secure payment integration (PayPal, MercadoPago) and improved SEO positioning through semantic HTML.',
    category: 'Full Stack Developer',
    company: 'Sunquwan',
    period: '2022 - 2023',
    logo: null,
    liveUrl: 'https://www.sunquwan.com/',
    githubUrl: 'https://github.com/arturolopm/ReactEcommerce',
    tags: ['React', 'PayPal', 'MercadoPago', 'SEO'],
  },
  {
    title: 'Myjou Social Platform',
    description:
      'Built the MVP core structure from scratch with OAuth authentication and WebSockets for real-time features — a social platform for goal tracking and peer feedback.',
    category: 'Full Stack Developer',
    company: 'Myjou',
    period: '2023',
    logo: null,
    liveUrl: 'https://myjou.tech/',
    githubUrl: null,
    tags: ['MERN', 'OAuth', 'WebSockets', 'Real-time'],
  },
];

export const contact = {
  title: 'Get in touch',
  heading: "Let's build something",
  description:
    "I'm open to senior frontend and full stack roles, remote worldwide, especially where AI is part of the product. If you're hiring or want to talk architecture, my inbox is open.",
};

export const experience = [
  {
    company: 'Xertify',
    position: 'Senior Full Stack (Frontend Oriented) Software Engineer',
    project: 'Xertiflow',
    location: 'Medellin, Colombia',
    period: 'February 2026 - Present',
    highlights: [
      "Led the end-to-end build of the company's flagship AI product, owning all frontend codebase decisions",
      'Built an SSE-streamed chat UI across Anthropic Claude, Google ADK agents and Gemini on Next.js 16',
      'Architected multi-tenant frontend with subdomain isolation, per-tenant RBAC and dual-token auth',
      "Established Vitest/Playwright coverage as the team's testing standard",
      'Shipped multi-stage Docker builds to Amazon ECR via GitHub Actions CI/CD',
    ],
  },
  {
    company: 'Globant',
    position: 'Senior Frontend Software Engineer',
    project: 'NFL Plus',
    location: 'Medellin, Colombia',
    period: 'May 2025 - December 2025',
    highlights: [
      'Drove frontend architecture for the NFL+ streaming platform on Next.js 15',
      'Improved Time to Interactive by 57% through SSR, dynamic imports, lazy loading and memoization',
      'Cut PR review turnaround 30% by integrating Claude-based automated review into CI/CD',
      'Maintained 100% Storybook documentation coverage for new UI components',
      'Mentored engineers on architecture, performance and code quality',
    ],
  },
  {
    company: 'Globant',
    position: 'Semi-Senior Advanced Frontend Engineer',
    project: 'Ernst & Young',
    location: 'Medellin, Colombia',
    period: 'January 2024 - April 2025',
    highlights: [
      'Refactored large-scale components prioritizing performance and accessibility',
      'Achieved 85% unit test coverage with Vitest, personally owning 35% of the suite',
      'Drove the tool from Germany-based regional deployment to global release',
      'Integrated the application into a federated development environment',
    ],
  },
  {
    company: 'Studio5 / Freelance',
    position: 'Full Stack Web Developer',
    location: 'Bogota, Colombia',
    period: 'January 2021 - November 2023',
    highlights: [
      'Led development of a MERN e-commerce platform with payment integrations and full test coverage',
      'Built MVPs from scratch for Myjou and Sunquwan: OAuth, WebSockets, PayPal and MercadoPago',
      'Optimized performance and SEO positioning across client projects',
    ],
  },
];
