
import React, { useState } from 'react';
import { SectionId, Language, UILabels } from '../types';
import { Menu, X, Code2, Globe } from 'lucide-react';

interface NavbarProps {
  activeSection: SectionId;
  scrollToSection: (section: SectionId) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  ui: UILabels;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection, language, setLanguage, ui }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: ui.nav[SectionId.HOME], value: SectionId.HOME },
    { label: ui.nav[SectionId.CV], value: SectionId.CV },
    { label: ui.nav[SectionId.PROJECTS], value: SectionId.PROJECTS },
    { label: ui.nav[SectionId.RESEARCH], value: SectionId.RESEARCH },
    { label: ui.nav[SectionId.BLOG], value: SectionId.BLOG },
  ];

  const handleNavClick = (section: SectionId) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => handleNavClick(SectionId.HOME)}
            >
              <Code2 className="h-8 w-8 text-accent" />
              <span className="ml-2 text-xl font-bold text-slate-900">DevPortfolio</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.value
                    ? 'text-white bg-slate-900 shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Switcher Desktop */}
            <div className="ml-4 pl-4 border-l border-slate-200">
              <button
                onClick={toggleLanguage}
                className="flex items-center px-3 py-2 rounded-md text-slate-600 hover:text-accent hover:bg-slate-50 transition-colors text-sm font-semibold"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === 'vi' ? 'VN' : 'EN'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <button
                onClick={toggleLanguage}
                className="flex items-center px-2 py-1 rounded-md text-slate-600 hover:text-accent border border-slate-200 text-xs font-bold"
              >
                {language === 'vi' ? 'VN' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium border-l-4 ${
                  activeSection === item.value
                    ? 'border-accent bg-slate-50 text-accent'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
