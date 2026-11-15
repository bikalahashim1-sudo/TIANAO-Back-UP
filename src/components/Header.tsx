import React, { useState } from 'react';
import { Menu, X, FileText, PhoneCall, ChevronRight } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  activeView: 'home' | 'collection' | 'categories' | 'about' | 'contact';
  onNavigate: (view: 'home' | 'collection' | 'categories' | 'about' | 'contact') => void;
  quoteItemsCount: number;
  onOpenQuoteDrawer: () => void;
  onOpenCatalogueModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onNavigate,
  quoteItemsCount,
  onOpenQuoteDrawer,
  onOpenCatalogueModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks: { id: 'home' | 'collection' | 'categories' | 'about' | 'contact'; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'collection', label: t.nav.collection },
    { id: 'categories', label: t.nav.categories },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (view: 'home' | 'collection' | 'categories' | 'about' | 'contact') => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBFA]/95 backdrop-blur-md border-b border-[#E8E6E1] transition-all duration-200">
      {/* Top Bar Announcement / Location Bar (Desktop/Tablet) */}
      <div className="hidden sm:block bg-[#005EA8] text-white text-sm py-2 px-4 sm:px-8 border-b border-[#00457C]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-bold text-[#F7D117] tracking-wider whitespace-nowrap">
              {t.brandTitle}
            </span>
            <span className="text-white/50">·</span>
            <span className="text-white/95 truncate">{t.topBarLocation}</span>
          </div>
          <div className="flex items-center gap-5 text-sm text-white/95 shrink-0">
            <a
              href="tel:+256744477777"
              dir="ltr"
              className="hover:text-[#F7D117] transition-colors flex items-center gap-1.5 whitespace-nowrap font-medium"
            >
              <PhoneCall className="w-4 h-4 text-[#F7D117]" />
              <span>+256 744 477 777</span>
            </a>
            <span className="hidden md:inline text-white/35">|</span>
            <button
              type="button"
              onClick={onOpenCatalogueModal}
              className="hidden md:flex items-center gap-1.5 hover:text-[#F7D117] transition-colors cursor-pointer whitespace-nowrap font-medium"
            >
              <FileText className="w-4 h-4 text-[#F7D117]" />
              <span>{t.officialCatalogueBtn}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-8 h-16 sm:h-22 flex items-center justify-between gap-2 sm:gap-6">
        {/* Zone 1: Brand Wordmark & Emblem */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group min-w-0 shrink text-start"
        >
          <div className="h-10 sm:h-13 w-auto flex-shrink-0 flex items-center justify-center rounded-xs border border-stone-200/90 bg-white px-1.5 sm:px-2 py-1 shadow-xs transition-transform duration-200 group-hover:scale-105">
            <img
              src={IMAGES.brandLogo}
              alt="TIANAO Furniture Logo"
              className="h-full w-auto max-h-8 sm:max-h-11 object-contain"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <span
              dir="ltr"
              className="font-editorial text-xl sm:text-[26px] font-bold tracking-tight text-[#191919] uppercase leading-none group-hover:text-[#005EA8] transition-colors"
            >
              TIANAO
            </span>
            <span
              dir="ltr"
              className="text-[11px] sm:text-xs tracking-[0.14em] text-stone-700 font-sans uppercase font-semibold mt-1 inline-flex items-center gap-1 whitespace-nowrap"
            >
              <span>FURNITURE</span>
              <span aria-hidden="true">·</span>
              <span lang="zh" className="tracking-normal font-medium">天奥家具</span>
            </span>
          </div>
        </button>

        {/* Zone 2: Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm xl:text-base font-medium text-stone-700">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer hover:text-[#005EA8] ${
                activeView === link.id ? 'text-[#005EA8] font-bold' : 'text-stone-700'
              }`}
            >
              {link.label}
              {activeView === link.id && (
                <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#005EA8]" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Language Switcher + Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <LanguageSwitcher variant="header" />

          <button
            type="button"
            onClick={onOpenQuoteDrawer}
            className="hidden sm:flex items-center gap-2 px-4 sm:px-5 py-2.5 text-sm font-semibold tracking-wide uppercase text-white bg-[#191919] hover:bg-[#005EA8] transition-colors rounded-none whitespace-nowrap shrink-0 cursor-pointer shadow-xs active:scale-[0.98]"
          >
            <span>{t.cta.requestQuote}</span>
            {quoteItemsCount > 0 && (
              <span className="w-6 h-6 rounded-full bg-[#F7D117] text-[#141312] text-xs font-bold flex items-center justify-center tabular-nums">
                {quoteItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-800 hover:text-black lg:hidden cursor-pointer shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E6E1] bg-[#FBFBFA] px-6 py-6 space-y-4">
          <LanguageSwitcher variant="mobile" onSelectComplete={() => setMobileMenuOpen(false)} />

          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center justify-between py-3.5 text-base text-start transition-colors border-b border-stone-200/70 ${
                  activeView === link.id ? 'text-[#005EA8] font-bold' : 'text-stone-800 font-medium'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-5 h-5 text-stone-500 rtl:rotate-180" />
              </button>
            ))}
          </div>

          <div className="pt-3 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteDrawer();
              }}
              className="w-full py-3.5 text-center text-sm font-semibold tracking-wider uppercase text-white bg-[#191919] hover:bg-black transition-colors rounded-none"
            >
              {t.cta.requestQuotationCount} {quoteItemsCount > 0 ? `(${quoteItemsCount})` : ''}
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCatalogueModal();
              }}
              className="w-full py-3.5 text-center text-sm font-semibold tracking-wider uppercase text-stone-900 bg-[#EFECE6] hover:bg-[#E5E1D8] transition-colors rounded-none flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>{t.cta.browsePdfCatalogue}</span>
            </button>
          </div>

          <div className="pt-4 text-sm text-stone-700 space-y-1 border-t border-stone-200">
            <p className="font-semibold">{t.contact.companyTitle}</p>
            <p>{t.topBarLocation}</p>
            <p dir="ltr" className="text-stone-900 font-semibold text-start">
              +256 744 477 777 · +256 744 377 777
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
