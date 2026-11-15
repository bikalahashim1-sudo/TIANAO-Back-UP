import React from 'react';
import { Product } from '../data/products';
import { ProductVisual } from './ProductVisual';
import { ArrowUpRight, Plus, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickAddQuote: (product: Product) => void;
  isInQuote?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickAddQuote,
  isInQuote = false,
}) => {
  const { t, localizeProduct } = useLanguage();
  const loc = localizeProduct(product);

  return (
    <article
      className="group relative flex flex-col bg-white border border-[#E8E6E1] hover:border-[#005EA8] transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer text-start"
      onClick={() => onSelect(product)}
    >
      {/* Product Image / Visual Showcase */}
      <div className="relative w-full overflow-hidden bg-[#F5F4F0]">
        <ProductVisual
          product={product}
          aspect="4:3"
          showBlueprintToggle={true}
          className="w-full"
        />

        {/* Quick Action Overlay on hover */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="px-3.5 py-2 bg-white/95 hover:bg-white text-stone-900 text-xs font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>{t.cta.details}</span>
            <ArrowUpRight className="w-3.5 h-3.5 rtl:-scale-x-100" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickAddQuote(product);
            }}
            className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1 transition-all cursor-pointer ${
              isInQuote
                ? 'bg-emerald-800 text-white'
                : 'bg-[#191919] hover:bg-[#005EA8] text-white active:scale-95'
            }`}
            title={t.cta.addToQuoteRequest}
          >
            {isInQuote ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{t.cta.inQuote}</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>{t.cta.quote}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          {/* Clean Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-700 mb-2">
            <span className="uppercase tracking-wider font-bold text-[#005EA8]">
              {loc.model}
            </span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span className="uppercase tracking-wide font-medium">{loc.categoryLabel}</span>
          </div>

          {/* Product Name */}
          <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#191919] group-hover:text-[#005EA8] transition-colors leading-snug line-clamp-2">
            {loc.name}
          </h3>

          {/* Dimensions & Specifications */}
          <p className="text-sm text-stone-700 font-medium mt-1.5 tabular-nums">
            {product.dimensions.length}
            {product.dimensions.depth
              ? ` × ${product.dimensions.depth}`
              : product.dimensions.width
              ? ` × ${product.dimensions.width}`
              : ''}
            {product.dimensions.height ? ` · ${t.productModal.heightShort} ${product.dimensions.height}` : ''}
          </p>

          {/* Short description / tagline */}
          <p className="text-sm text-stone-700 line-clamp-2 mt-2.5 leading-relaxed">
            {loc.tagline || loc.description}
          </p>
        </div>

        {/* Footer info: Materials & Catalogue page reference */}
        <div className="pt-3.5 border-t border-[#F0EFEB] flex items-center justify-between text-xs text-stone-700 font-medium">
          <span className="truncate max-w-[70%]">{loc.materials[0]}</span>
          <span className="font-semibold text-stone-800 shrink-0">
            {t.productModal.pdfPageShort}
            {product.pageNumber}
          </span>
        </div>
      </div>
    </article>
  );
};
