import React from 'react';
import { Language } from '../types';
import { TEXT_CONTENT } from '../constants';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TEXT_CONTENT[language];

  return (
    <footer id="footer" className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900 dark:text-slate-100">LEV</span>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm text-center">
          {t.footerRights}
        </p>

        <div className="flex space-x-6">
          <a href="" className="text-slate-400 hover:text-brand-500 transition-colors">
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
