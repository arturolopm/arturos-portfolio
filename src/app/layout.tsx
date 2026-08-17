import type { Metadata } from 'next';
import { Archivo, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Display: an industrial grotesque, tight and wide-set. Carries the headings.
const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  display: 'swap',
});

// Body copy only.
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

// Metrics, eyebrows and labels. Tabular numerals for the readouts.
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arturo Lopez - Senior Software Engineer | React, Next.js & AI Integration',
  description:
    "Senior full stack engineer (frontend-focused) with 5+ years in React, Next.js, TypeScript and Node.js. Designed and shipped the AI assistant at the core of Xertify's multi-tenant platform — SSE-streamed chat across Anthropic Claude, Google ADK agents and Gemini. Also a 57% Time to Interactive improvement on NFL+ and 85% test coverage at Ernst & Young.",
  keywords: [
    'Senior Software Engineer',
    'Senior Frontend Engineer',
    'Senior Full Stack Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Frontend Architecture',
    'Multi-tenant SaaS',
    'RBAC',
    'Performance Optimization',
    'LLM Integration',
    'Anthropic Claude',
    'Xertify',
    'Globant',
    'NFL Plus',
    'Ernst & Young',
  ],
  authors: [{ name: 'Arturo Lopez', url: 'https://www.linkedin.com/in/arturo-lopezm/' }],
  openGraph: {
    title: 'Arturo Lopez - Senior Software Engineer',
    description:
      '5+ years building multi-tenant SaaS products with React, Next.js and TypeScript, lately focused on shipping LLM and agent integrations into production. Enterprise delivery at Xertify, NFL+ and Ernst & Young.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='dark'
    >
      <body
        className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
