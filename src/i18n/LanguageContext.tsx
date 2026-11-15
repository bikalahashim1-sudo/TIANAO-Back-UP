import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, getLocalizedProduct } from './productTranslations';
import { AppTranslations, TRANSLATIONS, getDirection, isValidLanguage } from './translations';
import { Product } from '../data/products';

const STORAGE_KEY = 'tianao_language';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
  t: AppTranslations;
  localizeProduct: (product: Product) => ReturnType<typeof getLocalizedProduct>;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isValidLanguage(saved)) return saved;
    } catch {
      // Ignore storage access errors in restricted environments
    }
    return 'en';
  });

  const dir = getDirection(language);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage access errors
    }
  }, [language, dir]);

  const setLanguage = (lang: Language) => {
    if (isValidLanguage(lang)) {
      setLanguageState(lang);
    }
  };

  const value: LanguageContextValue = {
    language,
    setLanguage,
    dir,
    t: TRANSLATIONS[language],
    localizeProduct: (product: Product) => getLocalizedProduct(product, language),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
