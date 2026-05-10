import { useEffect } from 'react';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Process from './components/Process.jsx';
import Projects from './components/Projects.jsx';
import SectionIndicator from './components/SectionIndicator.jsx';
import Services from './components/Services.jsx';
import WhyWork from './components/WhyWork.jsx';

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    sections.forEach((section) => {
      section.classList.add('reveal-section');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <SectionIndicator />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <About />
        <WhyWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
