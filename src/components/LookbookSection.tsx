import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { useLanguage } from '../i18n/LanguageContext';

interface LookbookSectionProps {
  onSelectProductById: (id: string) => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({ onSelectProductById }) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-24 bg-[#141312] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-sm uppercase tracking-widest font-semibold text-amber-400 block mb-2">
              {t.lookbook.kicker}
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {t.lookbook.title}
            </h2>
            <p className="font-editorial text-lg sm:text-xl text-amber-200/95 font-medium mt-2">
              {t.lookbook.subtitle}
            </p>
          </div>
          <div className="max-w-md text-base text-stone-200 leading-relaxed">
            <p>{t.lookbook.quotePrimary}</p>
          </div>
        </div>

        {/* Asymmetrical Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: TA9078 Deep Lounge Sofa (Large 7 Cols) */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => onSelectProductById('taq078-big-black-bull-sofa')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onSelectProductById('taq078-big-black-bull-sofa');
            }}
            className="lg:col-span-7 group relative bg-[#1D1C1A] border border-stone-800 hover:border-amber-400/60 transition-colors overflow-hidden cursor-pointer flex flex-col justify-between text-start"
          >
            <div className="relative aspect-[16/11] bg-[#EAE8E3] overflow-hidden flex items-center justify-center">
              <img
                src={IMAGES.taq078}
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-75 pointer-events-none"
              />
              <img
                src={IMAGES.taq078}
                alt="TA9078 Deep Lounge Sofa"
                referrerPolicy="no-referrer"
                className="relative z-10 w-full h-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 h-12 z-20 pointer-events-none bg-gradient-to-t from-[#1D1C1A]/75 to-transparent" />
            </div>

            <div className="p-8 relative z-10 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 text-sm text-[#F7D117] font-semibold mb-2">
                  <span>{t.lookbook.card1Meta}</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-2">
                  {t.lookbook.card1Title}
                </h3>
                <p className="text-base text-stone-200 max-w-xl leading-relaxed mb-4">
                  {t.lookbook.card1Quote}
                </p>
              </div>

              <div className="pt-6 border-t border-stone-800 flex items-center justify-between text-sm text-stone-300">
                <span>{t.lookbook.card1Specs}</span>
                <span className="flex items-center gap-1.5 text-white group-hover:text-[#F7D117] font-semibold transition-colors">
                  {t.lookbook.inspectModel} <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 & 3: Stacked Right Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Bed Card */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => onSelectProductById('taa2188-tufted-wingback-bed')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectProductById('taa2188-tufted-wingback-bed');
              }}
              className="group relative bg-[#1D1C1A] border border-stone-800 hover:border-amber-400/60 transition-colors overflow-hidden cursor-pointer flex-1 flex flex-col justify-between text-start"
            >
              <div className="relative aspect-[4/3] bg-[#141312] overflow-hidden flex items-center justify-center">
                <img
                  src={IMAGES.taa2188}
                  alt=""
                  aria-hidden="true"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-35 pointer-events-none"
                />
                <img
                  src={IMAGES.taa2188}
                  alt="TAA2188 Tufted Wingback Leather Bed"
                  referrerPolicy="no-referrer"
                  className="relative z-10 w-full h-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-14 z-20 pointer-events-none bg-gradient-to-t from-[#1D1C1A] to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#F7D117] font-semibold mb-1">
                  {t.lookbook.card2Meta}
                </div>
                <h4 className="font-editorial text-xl sm:text-2xl font-bold text-white mb-1.5">
                  {t.lookbook.card2Title}
                </h4>
                <p className="text-sm text-stone-300 leading-relaxed mb-4">
                  {t.lookbook.card2Quote}
                </p>
                <div className="flex items-center justify-between text-sm text-stone-300 border-t border-stone-800 pt-3">
                  <span>{t.lookbook.card2Specs}</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-200 group-hover:text-white rtl:-scale-x-100" />
                </div>
              </div>
            </div>

            {/* Cinema Recliner Card */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => onSelectProductById('taq810-dual-recliner-console-sofa')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectProductById('taq810-dual-recliner-console-sofa');
              }}
              className="group relative bg-[#1D1C1A] border border-stone-800 hover:border-amber-400/60 transition-colors overflow-hidden cursor-pointer flex-1 flex flex-col justify-between text-start"
            >
              <div className="relative aspect-[4/3] bg-[#141312] overflow-hidden flex items-center justify-center">
                <img
                  src={IMAGES.taq810}
                  alt=""
                  aria-hidden="true"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-35 pointer-events-none"
                />
                <img
                  src={IMAGES.taq810}
                  alt="TA9810 Dual Power Recliner Console Sofa"
                  referrerPolicy="no-referrer"
                  className="relative z-10 w-full h-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-14 z-20 pointer-events-none bg-gradient-to-t from-[#1D1C1A] to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#F7D117] font-semibold mb-1">
                  {t.lookbook.card3Meta}
                </div>
                <h4 className="font-editorial text-xl sm:text-2xl font-bold text-white mb-1.5">
                  {t.lookbook.card3Title}
                </h4>
                <p className="text-sm text-stone-300 leading-relaxed mb-4">
                  {t.lookbook.card3Quote}
                </p>
                <div className="flex items-center justify-between text-sm text-stone-300 border-t border-stone-800 pt-3">
                  <span>{t.lookbook.card3Specs}</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-200 group-hover:text-white rtl:-scale-x-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
