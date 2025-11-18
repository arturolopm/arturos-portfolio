import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WorkSection from '@/components/sections/WorkSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className='min-h-screen bg-black text-white'>
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

      <footer className='py-8 border-t border-white/10'>
        <div className='container mx-auto px-4 text-center text-white/60'>
          <p>© {new Date().getFullYear()} Arturo Lopez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
