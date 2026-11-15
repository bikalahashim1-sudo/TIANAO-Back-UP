import React from 'react';
import { IMAGES } from '../assets/images';
import { ArrowUp, Phone, MapPin, Globe, FileText } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SERIES_TRANSLATIONS } from '../i18n/productTranslations';

interface FooterProps {
  onNavigate: (view: 'home' | 'collection' | 'categories' | 'about' | 'contact') => void;
  onRequestQuote: () => void;
  onOpenCatalogue: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onRequestQuote,
  onOpenCatalogue,
}) => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141312] text-stone-200 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-auto flex-shrink-0 flex items-center justify-center rounded-xs bg-white px-2 py-1 shadow-sm border border-stone-700/60">
                <img
                  src={IMAGES.brandLogo}
                  alt="TIANAO Furniture Logo"
                  className="h-full w-auto max-h-10 object-contain"
                />
              </div>
              <div>
                <h3
                  dir="ltr"
                  className="font-editorial text-2xl font-bold text-white tracking-tight uppercase leading-none"
                >
                  TIANAO
                </h3>
                <p
                  dir="ltr"
                  className="text-xs tracking-[0.16em] text-stone-300 uppercase font-medium mt-1.5 inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>FURNITURE</span>
                  <span aria-hidden="true">·</span>
                  <span lang="zh" className="tracking-normal">天奥家具</span>
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-sm">
              {t.footer.summary}
            </p>

            <div className="pt-2 text-sm text-amber-400 font-medium">
              <p>{t.footer.strategy}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm uppercase tracking-widest text-white font-semibold">
              {t.footer.navHeading}
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <button type="button" onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  {t.footer.navHome}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('collection')} className="hover:text-white transition-colors cursor-pointer">
                  {t.footer.navCatalogue}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('categories')} className="hover:text-white transition-colors cursor-pointer">
                  {t.footer.navCategories}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  {t.footer.navAbout}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  {t.footer.navContact}
                </button>
              </li>
            </ul>
          </div>

          {/* Product Series */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm uppercase tracking-widest text-white font-semibold">
              {t.footer.seriesHeading}
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>{SERIES_TRANSLATIONS[language]['Modern Luxury Series']}</li>
              <li>{SERIES_TRANSLATIONS[language]['High-End Minimalist Series']}</li>
              <li>{SERIES_TRANSLATIONS[language]['High-End Simple Luxury Series']}</li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={onOpenCatalogue}
                  className="text-amber-400 hover:underline flex items-center gap-1.5 cursor-pointer font-medium"
                >
                  <FileText className="w-4 h-4" />
                  <span>{t.footer.catalogueIndex}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Manufacturing Location & Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm uppercase tracking-widest text-white font-semibold">
              {t.footer.plantHeading}
            </h4>
            <div className="space-y-3 text-sm text-stone-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                <span>{t.topBarLocation}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="tel:+256744477777" dir="ltr" className="hover:text-white">
                  +256 744 477 777
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="tel:+256744377777" dir="ltr" className="hover:text-white">
                  +256 744 377 777
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a
                  href="https://tianaofurniture.co.ug"
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="hover:text-white truncate"
                >
                  https://tianaofurniture.co.ug
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onRequestQuote}
                className="w-full py-3 bg-stone-800 hover:bg-[#005EA8] text-white text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                {t.cta.requestQuote}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-400">
          <p>
            © {new Date().getFullYear()} {t.contact.companyTitle} {t.footer.copyright}
          </p>
          <div className="flex items-center gap-5">
            <span>{t.footer.locationShort}</span>
            <span>·</span>
            <span>{t.footer.foundersShort}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
              aria-label={t.cta.scrollToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
