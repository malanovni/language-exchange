import React, { useState } from 'react';
import { Sparkles, MessageCircle, RotateCw } from 'lucide-react';
import { Language, IcebreakerResponse } from '../types';
import { generateIcebreaker } from '../services/geminiService';
import Button from './Button';

interface IcebreakerProps {
  language: Language;
  content: {
    title: string;
    description: string;
    buttonText: string;
  };
}

const Icebreaker: React.FC<IcebreakerProps> = ({ language, content }) => {
  const [data, setData] = useState<IcebreakerResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateIcebreaker();
      setData(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700">
      <div className="p-8 md:p-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-300">
            <Sparkles size={24} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {content.title}
          </h3>
        </div>
        
        <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
          {content.description}
        </p>

        {data && (
          <div className="mb-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 animate-fade-in">
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="inline-block px-2 py-1 text-xs font-bold tracking-wide text-brand-600 bg-brand-100 rounded uppercase">
                  EN
                </span>
                <p className="text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  {data.english}
                </p>
              </div>
              <div className="h-px bg-slate-200 dark:bg-slate-700 w-full" />
              <div className="flex gap-4 items-start">
                <span className="inline-block px-2 py-1 text-xs font-bold tracking-wide text-secondary-600 bg-secondary-100 rounded uppercase">
                  ES
                </span>
                <p className="text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  {data.spanish}
                </p>
              </div>
            </div>
          </div>
        )}

        <Button 
          onClick={handleGenerate} 
          disabled={loading}
          fullWidth
          variant="secondary"
          className="group relative overflow-hidden"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <RotateCw className="animate-spin" size={20} />
              Generating...
            </span>
          ) : (
             <span className="flex items-center gap-2">
              <MessageCircle size={20} />
              {content.buttonText}
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Icebreaker;
