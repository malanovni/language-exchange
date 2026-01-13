
import React, { useState } from 'react';
import { Moon, Sun, Languages, X, Mail } from 'lucide-react';
import { Language, Theme } from '../types';
import { NAV_LINKS, TEXT_CONTENT } from '../constants';
import Button from './Button';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, theme, setTheme }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === Language.ENGLISH ? Language.SPANISH : Language.ENGLISH);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof NAV_LINKS[number]) => {
    e.preventDefault();

    if (link.key === 'navContact') {
      setIsContactOpen(true);
      return;
    }

    if (link.key === 'navHome') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Extract ID from href (e.g., "#about" -> "about")
    const targetId = link.href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const t = TEXT_CONTENT[language];

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/75 dark:bg-slate-900/75 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                LEPV
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                >
                  {t[link.key]}
                </a>
              ))}
            </nav>

            {/* Toggles */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-label="Toggle Language"
              >
                <div className="flex items-center gap-1">
                  <Languages size={20} />
                  <span className="text-sm font-semibold w-6">{language === Language.ENGLISH ? 'EN' : 'ES'}</span>
                </div>
              </button>

              <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-label="Toggle Theme"
              >
                {theme === Theme.LIGHT ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Popup Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-opacity" onClick={() => setIsContactOpen(false)}>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full mx-auto relative animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-full mb-4">
                <Mail size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {language === Language.ENGLISH ? 'Contact Us' : 'Contáctanos'}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Email: chloe.jasinski@acil.education
              </p>

              <Button 
                onClick={() => setIsContactOpen(false)}
                variant="outline"
              >
                {language === Language.ENGLISH ? 'Close' : 'Cerrar'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
