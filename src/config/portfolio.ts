// Portfolio Configuration File
// Single source of truth for portfolio content. The sections import from here,
// so edit this file rather than the components.

export const personalInfo = {
  name: 'Arturo Lopez',
  title: 'Senior Software Engineer',
  role: 'Senior Full Stack Engineer (Frontend-Focused)',
  tagline: 'I own multi-tenant SaaS products end to end',
  description:
    "Senior full stack engineer (frontend-focused) with 5+ years in React, Next.js, TypeScript and Node.js. I own products end to end — scoping with stakeholders, architecting the solution, and driving delivery — most recently the entire frontend of a multi-tenant SaaS platform serving enterprise and university clients. Over the past year that work has also involved hands-on LLM and agent integration, which is where I'm deliberately going deeper.",
  location: 'Medellin, Colombia',
  availability: 'Open to remote roles worldwide',
  email: 'carturolopezm@gmail.com',
  phone: '+57 301 386 6300',
  // Served from public/cv/. Self-hosted rather than a Google Drive link so the
  // CV is versioned with the site, needs no sign-in, and cannot go stale
  // independently. Update the file, not this path.
  // NOTE: the file must exist at public/cv/arturo-lopez-cv.pdf or these links 404.
  resumeUrl: '/cv/arturo-lopez-cv.pdf',
  resumeFilename: 'Arturo-Lopez-CV.pdf',
  social: {
    github: 'https://github.com/arturolopm',
    linkedin: 'https://www.linkedin.com/in/arturo-lopezm/',
  },
};

export const about = {
  title: 'About me',
  subtitle: 'Senior Full Stack Engineer (Frontend-Focused)',
  description:
    "Over 5+ years I've gone from building MVPs from scratch to owning the entire frontend of a company's flagship platform. At Xertify I architected a multi-tenant SaaS product on Next.js 16 — subdomain tenant isolation, granular per-tenant RBAC, dual-token auth with Microsoft and Google SSO, and a request-intake and case-tracking workflow — and shipped it to enterprise and university clients including Universidad del Rosario and Universidad de los Andes. Part of that build was an AI assistant layered on top, my first production work integrating LLM and agent frameworks. Before Xertify I spent two years at Globant, promoted from the Ernst & Young account onto NFL+, driving frontend architecture on both. What I care about most is owning the whole problem: scoping it with stakeholders, deciding the architecture, and leaving standards behind that outlast me.",
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

export interface SkillCategory {
  name: string;
  items: string[];
  /** Optional qualifier rendered beside the category heading. */
  note?: string;
}

// Ordered by depth, strongest first. AI stays last on purpose: it is real
// production experience, but it is the newest of these, not the foundation.
const skillCategories: SkillCategory[] = [
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
      name: 'Backend & Data',
      items: ['Node.js', 'MySQL', 'PostgreSQL', 'REST APIs', 'Repository Pattern', 'Firebase'],
    },
    {
      name: 'Performance',
      items: [
        'SSR',
        'Dynamic Imports',
        'Lazy Loading',
        'Memoization Strategy',
        'Core Web Vitals',
        'Bundle Analysis',
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
      name: 'AI Integration & Real-Time',
      note: 'Recent — production work over the past year',
      items: [
        'LLM / Agent Integration',
        'Anthropic Claude',
        'Google ADK Agents',
        'Gemini',
        'SSE Streaming',
        'WebSockets',
        'Claude Code',
      ],
    },
];

export const skills = {
  title: 'Skills & Expertise',
  description:
    'The core is frontend architecture and end-to-end product ownership across React, Next.js and TypeScript. The AI integration work is recent, hands-on, and something I am actively going deeper on — listed last because that is where it honestly sits today.',
  categories: skillCategories,
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
      "I take products from stakeholder scoping through architecture to delivery. At Xertify I owned the entire frontend of the company's flagship platform, negotiating scope, timelines and information architecture directly with enterprise and university clients.",
    icon: 'Compass',
    links: ['Architecture', 'Scoping', 'Delivery'],
  },
  {
    title: 'Multi-Tenant SaaS Architecture',
    description:
      'Subdomain-based tenant routing and isolation, a shared component system serving distinct tenant experiences from one codebase, granular per-tenant RBAC, and dual-token authentication with Microsoft and Google SSO over a repository-pattern data layer.',
    icon: 'Layers',
    links: ['Multi-tenancy', 'RBAC', 'SSO'],
  },
  {
    title: 'Performance & Quality Standards',
    description:
      'Measurable performance work — a 57% Time to Interactive improvement on NFL+ through SSR, dynamic imports, lazy loading and memoization — plus the testing and documentation standards that keep those gains from eroding.',
    icon: 'Gauge',
    links: ['Core Web Vitals', 'Vitest', 'Playwright'],
  },
  {
    title: 'LLM & Agent Integration',
    description:
      'My newest area, and the one I am pushing hardest on. Over the past year I have shipped production LLM features into a real product: SSE-streamed chat, conversation history and resume-context handling across Anthropic Claude, Google ADK agents and Gemini. This is integration and product engineering — not model training or MLOps.',
    icon: 'Sparkles',
    links: ['Claude', 'Google ADK', 'SSE Streaming'],
  },
];

export const projects = [
  {
    title: 'Xertiflow — Administrative Workflow Platform',
    description:
      "Owned the entire frontend of Xertify's flagship platform: a multi-tenant system for submitting, routing and tracking administrative requests, delivered to enterprise and university clients including Universidad del Rosario and Universidad de los Andes. Architected it on Next.js 16 with subdomain-based tenant isolation and a shared component system serving distinct tenant experiences from one codebase. Built the authentication layer — dual-token auth (Firebase + custom JWT) with Microsoft and Google SSO plus an unauthenticated path for case-status lookup by filing number — and a granular per-tenant RBAC system whose roles and profiles drive live permission gating throughout the app. Also built the request-intake and case-tracking workflows (React Hook Form + Zod), a scheduling and capacity-planning calendar, and an AI assistant layered on top with SSE-streamed chat across Anthropic Claude, Google ADK agents and Gemini.",
    category: 'Senior Full Stack Engineer',
    company: 'Xertify',
    period: 'Feb 2026 - Present',
    logo: null,
    // Deliberately not linked: the only reachable deployment is a client
    // staging environment. See DESIGN.md.
    liveUrl: null,
    githubUrl: null,
    tags: [
      'Next.js 16',
      'Multi-tenant',
      'RBAC',
      'SSO',
      'TypeScript',
      'MySQL',
      'Docker',
      'LLM Integration',
    ],
  },
  {
    title: 'NFL Plus',
    description:
      'Drove frontend architecture and technical decisions for the NFL+ streaming platform on Next.js 15, defining patterns and standards adopted across the team. Led a performance initiative that improved Time to Interactive by 57% through SSR, dynamic imports, lazy loading and memoization strategy. Collaborated on integrating Claude-based automated code review into the CI/CD pipeline, cutting review turnaround by 30%. Established Storybook documentation and testing standards with 100% coverage of new UI components, and mentored engineers on architecture and performance.',
    category: 'Senior Frontend Engineer',
    company: 'Globant · NFL+ account',
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
    company: 'Globant · Ernst & Young account',
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

export interface Engagement {
  position: string;
  project: string;
  period: string;
  highlights: string[];
}

export interface Role {
  company: string;
  position: string;
  location: string;
  period: string;
  project?: string;
  /** Flat bullet list, for a single-engagement role. */
  highlights?: string[];
  /**
   * Sub-engagements within one continuous employment. Use this instead of
   * `highlights` when one employer covered several distinct accounts or
   * products, so the tenure reads as one job rather than several short ones.
   */
  engagements?: Engagement[];
}

export const experience: Role[] = [
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
  // One continuous two-year employment, not two jobs: Arturo was promoted and
  // moved internally from the Ernst & Young account onto NFL+. Keep it as a
  // single entry with two engagements so it never reads as short tenures.
  {
    company: 'Globant',
    position: 'Semi-Senior Advanced Frontend Engineer → Senior Frontend Software Engineer',
    project: 'Ernst & Young, then NFL+',
    location: 'Medellin, Colombia',
    period: 'January 2024 - December 2025',
    engagements: [
      {
        position: 'Senior Frontend Software Engineer',
        project: 'NFL+ account',
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
        position: 'Semi-Senior Advanced Frontend Engineer',
        project: 'Ernst & Young account',
        period: 'January 2024 - April 2025',
        highlights: [
          'Refactored large-scale components prioritizing performance and accessibility',
          'Achieved 85% unit test coverage with Vitest, personally owning 35% of the suite',
          'Drove the tool from Germany-based regional deployment to global release',
          'Integrated the application into a federated development environment',
        ],
      },
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
