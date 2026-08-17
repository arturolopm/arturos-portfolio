import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WorkSection from '@/components/sections/WorkSection';
import ContactSection from '@/components/sections/ContactSection';
import { personalInfo } from '@/config/portfolio';

export default function Home() {
  return (
    <div className='min-h-screen bg-ink text-paper'>
      <a
        href='#home'
        className='sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-signal focus:px-3 focus:py-2 focus:text-sm focus:text-[#17130c]'
      >
        Skip to content
      </a>

      <Header />
      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <WorkSection />
        <ContactSection />
      </main>

      <footer className='border-t border-line py-8'>
        <div className='container mx-auto flex flex-wrap items-center justify-between gap-4 px-4'>
          <p className='readout text-xs text-faint'>
            © {new Date().getFullYear()} Arturo Lopez
          </p>
          <p className='readout text-xs text-faint'>
            Built with Next.js, TypeScript and Tailwind
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className='readout text-xs text-dim transition-colors hover:text-signal'
          >
            {personalInfo.email}
          </a>
        </div>
      </footer>
    </div>
  );
}
