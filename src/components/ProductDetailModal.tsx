import React, { useState, useEffect } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { X, Check, Sparkles, ShieldCheck, ArrowRight, Plus, Minus } from 'lucide-react';
import { ProductVisual } from './ProductVisual';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product, quantity: number, notes?: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToQuote,
  onSelectProduct,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [addedNotice, setAddedNotice] = useState(false);
  const { t, localizeProduct } = useLanguage();

  useEffect(() => {
    setQuantity(1);
    setSelectedColor('');
    setAddedNotice(false);
  }, [product?.id]);

  if (!product) return null;

  const loc = localizeProduct(product);
  const currentColor = selectedColor || product.colors[0] || 'Standard';

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  const handleAdd = () => {
    onAddToQuote(product, quantity, currentColor);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#FBFBFA] border border-[#E8E6E1] shadow-2xl my-auto overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 end-4 z-30 p-2.5 text-stone-700 hover:text-black bg-white/95 hover:bg-white rounded-full shadow-xs transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Visual & Blueprint View */}
          <div className="lg:col-span-7 bg-[#F5F4F0] p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-e border-[#E8E6E1]">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-stone-700 mb-4 font-medium">
                <span>{loc.series}</span>
                <span>/</span>
                <span className="text-stone-900 font-bold">{product.model}</span>
                <span>/</span>
                <span>
                  {t.productModal.cataloguePagePrefix}
                  {product.pageNumber}
                </span>
              </div>

              <ProductVisual
                product={product}
                showBlueprintToggle={true}
                aspect="4:3"
                className="w-full shadow-sm rounded-none border border-stone-200"
              />
            </div>

            <div className="mt-6 pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/90 p-3.5 border border-stone-200/80">
                <span className="text-stone-600 block text-xs uppercase font-semibold">
                  {t.productModal.dimensions}
                </span>
                <span className="text-stone-900 font-bold tabular-nums">{product.dimensions.length}</span>
                {product.dimensions.depth && (
                  <span className="text-stone-700 block text-sm tabular-nums">× {product.dimensions.depth}</span>
                )}
                {product.dimensions.width && (
                  <span className="text-stone-700 block text-sm tabular-nums">× {product.dimensions.width}</span>
                )}
              </div>

              <div className="bg-white/90 p-3.5 border border-stone-200/80">
                <span className="text-stone-600 block text-xs uppercase font-semibold">
                  {t.productModal.frameStructure}
                </span>
                <span className="text-stone-900 font-semibold block">
                  {product.frameSpec ? t.productModal.framePlatform : t.productModal.frameDefault}
                </span>
              </div>

              <div className="bg-white/90 p-3.5 border border-stone-200/80 col-span-2 sm:col-span-1">
                <span className="text-stone-600 block text-xs uppercase font-semibold">
                  {t.productModal.cataloguePageLabel}
                </span>
                <span className="text-stone-900 font-bold tabular-nums">
                  {t.productModal.pageWord} {product.pageNumber}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Information, Options & Quotation CTA */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-[#FBFBFA]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm uppercase tracking-wider font-semibold text-[#005EA8]">
                  {loc.categoryLabel}
                </span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#191919] leading-tight mb-2">
                {loc.name}
              </h2>

              <p className="text-sm font-medium text-stone-700 mb-4">
                {t.productModal.modelPrefix}{' '}
                <span className="text-stone-900 font-bold">{product.model}</span>
              </p>

              {loc.tagline && (
                <div className="mb-5 p-4 bg-[#F5F4F0] border border-[#E8E6E1] text-sm text-stone-800 leading-relaxed font-medium">
                  "{loc.tagline}"
                </div>
              )}

              <p className="text-base text-stone-700 leading-relaxed mb-6">
                {loc.description}
              </p>

              {product.colors.length > 0 && (
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-stone-800 mb-2">
                    {t.productModal.finishesLabel}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`text-sm px-3.5 py-1.5 border transition-all cursor-pointer font-medium ${
                          currentColor === color
                            ? 'bg-[#191919] text-white border-[#191919]'
                            : 'bg-white text-stone-800 border-stone-300 hover:border-stone-500'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-5">
                <span className="block text-sm font-semibold text-stone-800 mb-2">
                  {t.productModal.specsLabel}
                </span>
                <ul className="space-y-2 text-sm text-stone-700">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#005EA8] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  {loc.matchingItems && (
                    <li className="flex items-start gap-2 font-medium text-stone-900 bg-amber-50/90 p-2.5 border border-amber-200">
                      <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{loc.matchingItems}</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="mb-6">
                <span className="block text-sm font-semibold text-stone-800 mb-2">
                  {t.productModal.materialsLabel}
                </span>
                <div className="flex flex-wrap gap-2 text-sm text-stone-800">
                  {loc.materials.map((mat, idx) => (
                    <span key={idx} className="bg-stone-100 px-3 py-1 border border-stone-200 font-medium">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quotation Module */}
            <div className="pt-6 border-t border-[#E8E6E1]">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center border border-stone-300 bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2.5 hover:bg-stone-100 text-stone-800 transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-base font-bold text-stone-900 min-w-[2.75rem] text-center tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2.5 hover:bg-stone-100 text-stone-800 transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  className={`flex-1 py-3.5 px-4 text-sm font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                    addedNotice
                      ? 'bg-emerald-800 text-white'
                      : 'bg-[#191919] hover:bg-[#005EA8] text-white active:scale-[0.98]'
                  }`}
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>{t.cta.addedToQuoteList}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.cta.addToQuoteRequest}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-stone-700 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#005EA8]" />
                  {t.productModal.directQuoteNote}
                </span>
                <span>{t.productModal.parkLocation}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items Footer */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-[#E8E6E1] bg-[#F5F4F0] p-6">
            <h3 className="text-sm uppercase tracking-wider font-semibold text-stone-700 mb-4">
              {t.productModal.relatedHeading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map((rel) => {
                const relLoc = localizeProduct(rel);
                return (
                  <button
                    type="button"
                    key={rel.id}
                    onClick={() => onSelectProduct(rel)}
                    className="bg-white p-3.5 border border-stone-200 hover:border-[#005EA8] transition-all cursor-pointer group flex items-center gap-3 text-start"
                  >
                    <div className="w-16 h-12 flex-shrink-0 bg-stone-100 overflow-hidden">
                      <ProductVisual product={rel} aspect="4:3" className="w-full h-full" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-xs text-[#005EA8] font-bold block">{rel.model}</span>
                      <h4 className="text-sm font-semibold text-stone-900 truncate group-hover:text-[#005EA8] transition-colors">
                        {relLoc.name}
                      </h4>
                      <span className="text-xs text-stone-700 block tabular-nums">
                        {rel.dimensions.length}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
