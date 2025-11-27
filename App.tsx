
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import CV from './views/CV';
import Blog from './views/Blog';
import Projects from './views/Projects';
import Research from './views/Research';
import { SectionId, Language } from './types';
import { VI_DATA, EN_DATA } from './data';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);
  const [language, setLanguage] = useState<Language>('vi');

  const data = language === 'vi' ? VI_DATA : EN_DATA;

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset

      const sections = Object.values(SectionId);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: SectionId) => {
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(section);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        language={language}
        setLanguage={setLanguage}
        ui={data.ui}
      />
      
      <main className="flex-grow">
        <section id={SectionId.HOME} className="min-h-screen">
          <Home 
            scrollToSection={scrollToSection} 
            profile={data.profile}
            ui={data.ui}
          />
        </section>

        <section id={SectionId.CV} className="scroll-mt-24">
          <CV 
            experience={data.experience}
            education={data.education}
            ui={data.ui}
          />
        </section>

        <section id={SectionId.PROJECTS} className="bg-slate-50 scroll-mt-24">
          <Projects 
            projects={data.projects}
            ui={data.ui}
          />
        </section>

        <section id={SectionId.RESEARCH} className="bg-white scroll-mt-24">
           <Research 
             research={data.research}
             ui={data.ui}
           />
        </section>

        <section id={SectionId.BLOG} className="bg-slate-50 scroll-mt-24 pb-20">
          <Blog 
            blog={data.blog}
            ui={data.ui}
          />
        </section>
      </main>

      <Footer profile={data.profile} />
    </div>
  );
};

export default App;
