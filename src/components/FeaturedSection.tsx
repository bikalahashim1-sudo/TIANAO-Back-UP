import React from 'react';
import { Product, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface FeaturedSectionProps {
  onSelectProduct: (product: Product) => void;
  onQuickAddQuote: (product: Product) => void;
  onViewAll: () => void;
  quoteItemIds: string[];
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  onSelectProduct,
  onQuickAddQuote,
  onViewAll,
  quoteItemIds,
}) => {
  const { t } = useLanguage();
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 6);
  const viewAllLabel = `${t.cta.viewAllProducts} (${PRODUCTS.length})`;

  return (
    <section className="py-20 sm:py-24 bg-[#F5F4F0] border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-sm uppercase tracking-widest font-semibold text-[#005EA8] block mb-2">
              {t.featured.kicker}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191919]">
              {t.featured.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onViewAll}
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-stone-900 hover:text-[#005EA8] transition-colors cursor-pointer group whitespace-nowrap shrink-0"
          >
            <span>{viewAllLabel}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
          </button>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onQuickAddQuote={onQuickAddQuote}
              isInQuote={quoteItemIds.includes(product.id)}
            />
          ))}
        </div>

        {/* Editorial Quote Banner */}
        <div className="mt-16 p-8 bg-white border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-start">
            <span className="text-sm uppercase tracking-widest text-[#005EA8] font-semibold block">
              {t.featured.bannerKicker}
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900">
              {t.featured.bannerTitle}
            </h3>
            <p className="text-base text-stone-700 leading-relaxed">
              {t.featured.bannerDesc}
            </p>
          </div>
          <button
            type="button"
            onClick={onViewAll}
            className="px-6 py-3.5 bg-[#191919] hover:bg-[#005EA8] text-white text-sm font-semibold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.cta.browseCompleteCatalogue}
          </button>
        </div>
      </div>
    </section>
  );
};
