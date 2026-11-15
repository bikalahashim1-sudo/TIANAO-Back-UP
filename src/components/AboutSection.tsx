import React from 'react';
import { IMAGES } from '../assets/images';
import { useLanguage } from '../i18n/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-24 bg-[#FBFBFA] border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Official Brand Logo */}
        <div className="max-w-4xl mb-14 flex items-start gap-5">
          <div className="h-16 sm:h-20 w-auto flex-shrink-0 bg-white border border-stone-200/90 px-3 py-1.5 shadow-xs rounded-xs flex items-center justify-center">
            <img
              src={IMAGES.brandLogo}
              alt="TIANAO Furniture Logo"
              className="h-full w-auto max-h-14 sm:max-h-16 object-contain"
            />
          </div>
          <div>
            <span className="text-sm uppercase tracking-widest font-semibold text-[#005EA8] block mb-1">
              {t.about.kicker}
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#191919] leading-tight">
              {t.about.companyName}
            </h2>
            <p className="text-stone-700 text-sm uppercase tracking-wider mt-1.5 font-medium">
              {t.about.companySubline}
            </p>
          </div>
        </div>

        {/* Split Showcase: Factory Image + Single Localized Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden bg-stone-200 border border-stone-300 shadow-sm sticky top-28">
              <img
                src={IMAGES.factoryFacility}
                alt="Sino-Uganda Mbale Industrial Park - TIANAO Furniture 20,000 sqm Manufacturing Plant"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
              <div className="p-6 bg-[#191919] text-white text-sm space-y-3">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2.5 gap-2">
                  <span className="text-amber-400 font-bold uppercase tracking-wider">
                    {t.about.plantTitle}
                  </span>
                  <span className="text-stone-300 shrink-0">{t.about.plantDate}</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center pt-1">
                  <div>
                    <span className="text-white font-bold block text-base tabular-nums">20,000 m²</span>
                    <span className="text-stone-300 text-xs">{t.about.factoryAreaLabel}</span>
                  </div>
                  <div>
                    <span className="text-white font-bold block text-base tabular-nums">1,000 m²</span>
                    <span className="text-stone-300 text-xs">{t.about.showroomAreaLabel}</span>
                  </div>
                  <div>
                    <span className="text-white font-bold block text-base tabular-nums">100+</span>
                    <span className="text-stone-300 text-xs">{t.about.staffLabel}</span>
                  </div>
                </div>
                <div className="border-t border-stone-800 pt-2.5 text-sm text-stone-300">
                  <p>{t.about.jointVenture}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 sm:p-10 bg-white border border-[#E8E6E1] shadow-2xs space-y-5">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3.5 gap-4">
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900">
                  {t.about.profileTitle}
                </h3>
                <span className="text-sm text-[#005EA8] uppercase tracking-wider font-semibold shrink-0">
                  {t.about.profileBadge}
                </span>
              </div>
              <p className="text-base text-stone-800 leading-relaxed font-normal">
                {t.about.profileBody}
              </p>
              <div className="p-5 bg-[#005EA8]/5 border border-[#005EA8]/20 text-base text-stone-800 leading-relaxed space-y-1">
                <span className="text-sm font-bold text-[#005EA8] block uppercase tracking-wider">
                  {t.about.seriesHeading}
                </span>
                <span className="font-medium">{t.about.seriesLine}</span>
              </div>
            </div>
          </div>
        </div>

        {/* The 5 Excellence Strategy */}
        <div className="pt-12 border-t border-[#E8E6E1]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm uppercase tracking-widest text-[#005EA8] font-semibold block mb-2">
              {t.about.pillarsKicker}
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
              {t.about.pillarsTitle}
            </h3>
            <p className="text-base text-stone-700 mt-2 font-medium">
              {t.about.pillarsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {t.about.pillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#E8E6E1] hover:border-[#005EA8] transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-sm text-stone-600 mb-3 font-semibold">
                    <span>{item.tag}</span>
                    <span className="text-[#005EA8]">5GOOD</span>
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-stone-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200 flex items-center text-xs font-semibold text-stone-600 tracking-wider">
                  <span>{t.about.standardBadge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
