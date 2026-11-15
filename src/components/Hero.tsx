import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  FileText,
} from 'lucide-react';
import { IMAGES } from '../assets/images';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroProps {
  onExplore: () => void;
  onRequestQuote: () => void;
  onOpenCatalogue: () => void;
  onSelectCategory?: (category: 'all' | 'sofas' | 'recliners' | 'beds' | 'chairs-tables') => void;
  onSelectProductById?: (id: string) => void;
}

interface HeroSlideMedia {
  id: string;
  image: string;
  imageAlt: string;
  badgeModel: string;
  framing: 'room' | 'studio';
  productId?: string;
}

const HERO_SLIDE_MEDIA: HeroSlideMedia[] = [
  {
    id: 'slide-1-executive',
    image: IMAGES.executiveSuite1,
    imageAlt: 'TIANAO Espresso Leather 1+1+3 Executive and Lounge Sofa Suite',
    badgeModel: 'TA-EX01',
    framing: 'room',
    productId: 'ta-executive-reception-suite',
  },
  {
    id: 'slide-2-boucle-chair-angle',
    image: IMAGES.boucleChairAngle,
    imageAlt: 'TIANAO Sculpted Walnut and Ivory Boucle Lounge Armchair Angle View',
    badgeModel: 'TA-M02',
    framing: 'studio',
    productId: 'ta-minimalist-walnut-boucle-chair',
  },
  {
    id: 'slide-3-boucle-chair-front',
    image: IMAGES.boucleChairFront,
    imageAlt: 'TIANAO Sculpted Walnut and Ivory Boucle Lounge Armchair Front View',
    badgeModel: 'TA-M02',
    framing: 'studio',
    productId: 'ta-minimalist-walnut-boucle-chair',
  },
  {
    id: 'slide-4-boucle-sofa',
    image: IMAGES.boucleSofaRoom,
    imageAlt: 'TIANAO Sculpted Walnut and Ivory Boucle 3-Seater Sofa in living room',
    badgeModel: 'TA-M04',
    framing: 'room',
    productId: 'ta-minimalist-walnut-boucle-sofa',
  },
];

export const Hero: React.FC<HeroProps> = ({
  onExplore,
  onRequestQuote,
  onOpenCatalogue,
  onSelectProductById,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t, dir } = useLanguage();

  useEffect(() => {
    if (!isAutoPlaying) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDE_MEDIA.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [isAutoPlaying, activeSlide]);

  const currentMedia = HERO_SLIDE_MEDIA[activeSlide];
  const currentCopy = t.hero.slides[activeSlide];

  return (
    <section className="w-full bg-[#F7F6F2] text-[#191919] overflow-hidden">
      {/* Full-Bleed Edge-to-Edge Split Carousel Stage (Images Left, Editorial Copy Right) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Carousel Viewport (dir="ltr" keeps horizontal track translation intact in both LTR and RTL modes) */}
        <div
          dir="ltr"
          className="order-1 lg:col-span-7 relative w-full h-[280px] sm:h-[420px] lg:h-[540px] xl:h-[570px] bg-[#F7F6F2] overflow-hidden"
        >
          {/* Horizontal Sliding Track */}
          <div
            className="flex w-full h-full transition-transform duration-700 ease-out"
            style={{ transform: `translate3d(-${activeSlide * 100}%, 0, 0)` }}
          >
            {HERO_SLIDE_MEDIA.map((slide) => (
              <div
                key={slide.id}
                className={`relative w-full h-full shrink-0 overflow-hidden flex items-center justify-center ${
                  slide.framing === 'studio' ? 'bg-white' : 'bg-[#EFECE6]'
                }`}
              >
                {slide.framing === 'room' && (
                  <img
                    src={slide.image}
                    alt=""
                    aria-hidden="true"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-35 pointer-events-none"
                  />
                )}

                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  referrerPolicy="no-referrer"
                  className={`relative z-10 w-full h-full object-contain object-center ${
                    slide.framing === 'studio' ? 'p-4 sm:p-8 lg:p-10' : 'p-0'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Soft Feather Blend Seam */}
          <div
            className={`hidden lg:block pointer-events-none absolute inset-y-0 w-24 z-20 from-[#F7F6F2] via-[#F7F6F2]/50 to-transparent ${
              dir === 'rtl' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l'
            }`}
            aria-hidden="true"
          />
          <div
            className="lg:hidden pointer-events-none absolute inset-x-0 bottom-0 h-10 z-20 bg-gradient-to-t from-[#F7F6F2] to-transparent"
            aria-hidden="true"
          />

          {/* Refined Light Model Tag Overlay */}
          <div
            dir={dir}
            className={`absolute top-4 sm:top-6 z-30 flex items-center gap-2 text-sm tracking-wide uppercase text-[#005EA8] bg-white/95 backdrop-blur-xs px-3.5 py-1.5 border border-stone-200/90 shadow-xs ${
              dir === 'rtl' ? 'right-4 sm:right-6' : 'left-4 sm:left-6'
            }`}
          >
            <span className="font-bold">{currentMedia.badgeModel}</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span className="text-stone-900 font-medium truncate max-w-[200px] sm:max-w-xs">
              {currentCopy.badgeLabel}
            </span>
          </div>

          {/* Carousel Prev / Next Controls */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-30 flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setActiveSlide((prev) => (prev - 1 + HERO_SLIDE_MEDIA.length) % HERO_SLIDE_MEDIA.length)
              }
              className="w-11 h-11 bg-white/95 hover:bg-[#005EA8] text-stone-900 hover:text-white border border-stone-300 shadow-xs flex items-center justify-center transition-colors cursor-pointer"
              aria-label={t.hero.prevSlideAria}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_SLIDE_MEDIA.length)}
              className="w-11 h-11 bg-white/95 hover:bg-[#005EA8] text-stone-900 hover:text-white border border-stone-300 shadow-xs flex items-center justify-center transition-colors cursor-pointer"
              aria-label={t.hero.nextSlideAria}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Editorial Copy Panel */}
        <div className="order-2 lg:col-span-5 bg-[#F7F6F2] flex flex-col justify-between px-4 sm:px-8 lg:ps-8 lg:pe-[max(2rem,calc((100vw-80rem)/2+2rem))] py-7 sm:py-9">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm tracking-widest uppercase text-[#005EA8] font-bold">
                5GOOD · {currentMedia.badgeModel}
              </span>
              <span className="text-sm tabular-nums text-stone-700 font-semibold">
                {String(activeSlide + 1).padStart(2, '0')} / {String(HERO_SLIDE_MEDIA.length).padStart(2, '0')}
              </span>
            </div>

            <p className="text-sm tracking-wider uppercase text-stone-700 font-semibold">
              {currentCopy.kicker}
            </p>

            <div className="space-y-2.5">
              <h1 className="font-editorial text-3xl sm:text-4xl xl:text-[2.75rem] font-bold tracking-tight text-[#191919] leading-[1.15] text-balance">
                {currentCopy.title}
              </h1>
              <p className="font-editorial text-lg sm:text-xl text-stone-800 font-medium leading-snug">
                {currentCopy.subtitle}
              </p>
            </div>

            <p className="text-base text-stone-700 font-normal leading-relaxed">
              {currentCopy.description}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onExplore}
                className="px-6 py-3.5 bg-[#005EA8] hover:bg-[#00457C] text-white text-sm font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shadow-sm whitespace-nowrap shrink-0"
              >
                <span>{t.cta.exploreCollection}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <button
                type="button"
                onClick={onRequestQuote}
                className="px-6 py-3.5 bg-[#F7D117] hover:bg-amber-300 text-[#191919] text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
              >
                {t.cta.requestQuote}
              </button>

              {currentMedia.productId && onSelectProductById && (
                <button
                  type="button"
                  onClick={() => onSelectProductById(currentMedia.productId!)}
                  className="px-5 py-3.5 bg-white hover:bg-stone-50 text-[#191919] border border-stone-300 text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>
                    {t.cta.inspectModel} {currentMedia.badgeModel}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#005EA8] rtl:-scale-x-100" />
                </button>
              )}

              <button
                type="button"
                onClick={onOpenCatalogue}
                className="px-3 py-3 text-stone-800 hover:text-[#005EA8] text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4 text-[#005EA8]" />
                <span>{t.cta.browsePdfCatalogue}</span>
              </button>
            </div>
          </div>

          {/* Slide Navigation Dots & Playback Control */}
          <div className="pt-5 mt-5 border-t border-[#E8E6E1] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 min-w-0">
              {HERO_SLIDE_MEDIA.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`${idx + 1}: ${t.hero.slides[idx].badgeLabel}`}
                  className={`h-2 transition-all duration-300 cursor-pointer shrink-0 ${
                    idx === activeSlide ? 'w-10 bg-[#005EA8]' : 'w-4 bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              ))}
              <span className="ms-2 text-sm text-stone-700 font-medium truncate">
                {currentCopy.badgeLabel}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              className="text-sm uppercase tracking-wider text-stone-700 hover:text-[#005EA8] font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {isAutoPlaying ? t.hero.autoOn : t.hero.autoPaused}
            </button>
          </div>
        </div>
      </div>

      {/* Words Running Dynamically Right-to-Left Right Below the Hero Section */}
      <div
        dir="ltr"
        className="marquee-wrapper bg-[#005EA8] text-white border-y border-[#F7D117]/40 py-3.5 overflow-hidden select-none"
        aria-label={t.hero.marquee}
      >
        <div className="animate-tianao-marquee flex items-center">
          {[0, 1].map((dupIndex) => (
            <div key={dupIndex} className="flex items-center shrink-0">
              {[0, 1, 2].map((idx) => (
                <div key={`${dupIndex}-${idx}`} className="flex items-center shrink-0">
                  <span
                    dir={dir}
                    className="text-sm sm:text-base font-semibold tracking-wide px-6 whitespace-nowrap"
                  >
                    {t.hero.marquee}
                  </span>
                  <span
                    className="w-2 h-2 bg-[#F7D117] rotate-45 inline-block shrink-0"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Full-Width 4-Column Proof Metrics Ribbon with Living Room Backdrop */}
      <div className="relative w-full overflow-hidden border-b border-[#E8E6E1] bg-[#141312]">
        <img
          src={IMAGES.heroLiving}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#141312]/78 via-[#141312]/68 to-[#141312]/78"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-9 sm:py-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white">
          <div className="bg-black/25 sm:bg-black/20 backdrop-blur-[2px] p-4 border-s-2 border-[#F7D117]">
            <span className="tabular-nums text-2xl sm:text-3xl font-bold text-white block">
              20,000 m²
            </span>
            <span className="text-sm sm:text-base text-stone-100 font-medium mt-1 block">
              {t.hero.metrics.factoryLabel}
            </span>
          </div>
          <div className="bg-black/25 sm:bg-black/20 backdrop-blur-[2px] p-4 border-s-2 border-[#F7D117]">
            <span className="tabular-nums text-2xl sm:text-3xl font-bold text-white block">
              1,000 m²
            </span>
            <span className="text-sm sm:text-base text-stone-100 font-medium mt-1 block">
              {t.hero.metrics.showroomLabel}
            </span>
          </div>
          <div className="bg-black/25 sm:bg-black/20 backdrop-blur-[2px] p-4 border-s-2 border-[#F7D117]">
            <span className="tabular-nums text-2xl sm:text-3xl font-bold text-white block">
              100+
            </span>
            <span className="text-sm sm:text-base text-stone-100 font-medium mt-1 block">
              {t.hero.metrics.staffLabel}
            </span>
          </div>
          <div className="bg-black/25 sm:bg-black/20 backdrop-blur-[2px] p-4 border-s-2 border-[#F7D117]">
            <span className="tabular-nums text-2xl sm:text-3xl font-bold text-[#F7D117] block">
              {t.hero.metrics.fiveGoodTitle}
            </span>
            <span className="text-sm sm:text-base text-stone-100 font-medium mt-1 block">
              {t.hero.metrics.fiveGoodLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
