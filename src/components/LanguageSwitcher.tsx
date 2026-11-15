import React, { useEffect, useRef, useState } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/productTranslations';

interface LanguageOption {
  code: Language;
  nativeLabel: string;
  englishLabel: string;
  shortCode: string;
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', nativeLabel: 'English', englishLabel: 'English', shortCode: 'EN' },
  { code: 'zh', nativeLabel: '中文', englishLabel: 'Chinese', shortCode: 'ZH' },
  { code: 'ar', nativeLabel: 'العربية', englishLabel: 'Arabic', shortCode: 'AR' },
];

interface LanguageSwitcherProps {
  variant?: 'header' | 'mobile';
  onSelectComplete?: () => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'header',
  onSelectComplete,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentOption =
    LANGUAGE_OPTIONS.find((opt) => opt.code === language) || LANGUAGE_OPTIONS[0];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setOpen(false);
    onSelectComplete?.();
  };

  if (variant === 'mobile') {
    return (
      <div className="py-3 border-b border-stone-200">
        <div className="flex items-center gap-2 text-sm font-semibold text-stone-700 mb-3">
          <Globe className="w-4 h-4 text-[#005EA8]" />
          <span>{t.languageSelectorLabel}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {LANGUAGE_OPTIONS.map((opt) => (
            <button
              key={opt.code}
              type="button"
              onClick={() => handleSelect(opt.code)}
              aria-pressed={language === opt.code}
              className={`py-2.5 px-3 text-sm font-semibold border transition-colors cursor-pointer ${
                language === opt.code
                  ? 'bg-[#005EA8] text-white border-[#005EA8]'
                  : 'bg-white text-stone-800 border-stone-300 hover:border-[#005EA8]'
              }`}
            >
              {opt.nativeLabel}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.languageSelectorLabel}: ${currentOption.nativeLabel}`}
        className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 hover:border-[#005EA8] transition-colors cursor-pointer whitespace-nowrap"
      >
        <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#005EA8] shrink-0" />
        <span>{currentOption.nativeLabel}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-500 transition-transform duration-150 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t.languageSelectorLabel}
          className="absolute end-0 mt-1.5 w-48 bg-white border border-stone-300 shadow-lg z-50 py-1"
        >
          {LANGUAGE_OPTIONS.map((opt) => {
            const isSelected = language === opt.code;
            return (
              <button
                key={opt.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt.code)}
                className={`w-full px-4 py-2.5 text-sm flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#005EA8]/10 text-[#005EA8] font-semibold'
                    : 'text-stone-800 hover:bg-stone-100 font-medium'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{opt.nativeLabel}</span>
                  {opt.code !== 'en' && (
                    <span className="text-xs text-stone-500 font-normal">({opt.englishLabel})</span>
                  )}
                </span>
                {isSelected && <Check className="w-4 h-4 text-[#005EA8] shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
