import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ConversionSectionProps {
  onRequestQuote: () => void;
  onExplore: () => void;
}

export const ConversionSection: React.FC<ConversionSectionProps> = ({
  onRequestQuote,
  onExplore,
}) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-24 bg-[#F2EFE9] border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2 text-sm tracking-widest uppercase text-[#005EA8] font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>{t.conversion.kicker}</span>
          </div>

          <div className="space-y-3">
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#191919] leading-tight text-balance">
              {t.conversion.title}
            </h2>
            <p className="font-editorial text-xl text-stone-800 font-medium">
              {t.conversion.subtitle}
            </p>
          </div>

          <div className="space-y-2 max-w-xl mx-auto text-base text-stone-700 leading-relaxed">
            <p>{t.conversion.quote}</p>
            <p className="text-sm text-stone-700">{t.conversion.description}</p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="px-8 py-4 bg-[#005EA8] hover:bg-[#00457C] text-white text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer flex items-center gap-2 active:scale-95 whitespace-nowrap shrink-0"
            >
              <span>{t.cta.requestQuote}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>

            <button
              type="button"
              onClick={onExplore}
              className="px-8 py-4 bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {t.conversion.browseAll}
            </button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-stone-700 font-medium">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#005EA8]" />
              {t.conversion.location}
            </span>
            <span>·</span>
            <a
              href="tel:+256744477777"
              dir="ltr"
              className="flex items-center gap-2 hover:text-[#005EA8]"
            >
              <PhoneCall className="w-4 h-4 text-[#005EA8]" />
              +256 744 477 777
            </a>
            <span>·</span>
            <span>{t.conversion.delivery}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
