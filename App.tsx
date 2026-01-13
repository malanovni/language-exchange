
import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { TEXT_CONTENT } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Icebreaker from './components/Icebreaker';
import { MapPin, Clock } from 'lucide-react';

const MAPS_URL = "https://maps.app.goo.gl/RpvCWS9fbgr9SsUN6";

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.ENGLISH);
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(Theme.DARK);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const t = TEXT_CONTENT[language];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        theme={theme} 
        setTheme={setTheme} 
      />

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden">
          <div className="absolute inset-0 -z-10">
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl" />
             <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-secondary-500 dark:from-brand-400 dark:to-secondary-400">
                {t.heroTitle}
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300">
              {t.heroSubtitle}
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSdLRzzLYjrEKlEzsFzMfVCiwARUGGzEZLt3id16k1K2-DeISg/viewform' target="_blank" rel="noopener noreferrer">
                <Button>
                  {t.ctaButton}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  {t.aboutTitle}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  {t.aboutText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.detailsTitle}</h2>
             </div>

             <div className="grid lg:grid-cols-3 gap-8">
                {/* Event Card */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                   <div className="space-y-8">
                      {/* Dates Detail */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl">
                          <Clock size={28} />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{t.detailsWhenTxt}</h4>
                          {[t.detailsWhen, t.detailsWhen2, t.detailsWhen3].map((text, idx) => (
                            <a 
                              key={idx} 
                              href={MAPS_URL} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors mb-1 last:mb-0"
                            >
                              {text}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Locations Detail */}
                      <div className="flex items-start gap-4">
                         <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl">
                          <MapPin size={28} />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{t.detailsWhereTxt}</h4>
                          {[t.detailsWhere, t.detailsWhere2, t.detailsWhere3].map((text, idx) => (
                            <a 
                              key={idx} 
                              href={MAPS_URL} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors mb-1 last:mb-0"
                            >
                              {text}
                            </a>
                          ))}
                        </div>
                      </div>
                   </div>
                </div>

                {/* AI Widget */}
                <div className="lg:col-span-1">
                  <Icebreaker 
                    language={language}
                    content={{
                      title: t.aiTitle,
                      description: t.aiDescription,
                      buttonText: t.aiButton
                    }}
                  />
                </div>
             </div>
          </div>
        </section>

      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;
