import React, { useState, useMemo, useEffect } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search, RotateCcw } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SERIES_TRANSLATIONS } from '../i18n/productTranslations';

interface ShopCollectionProps {
  initialCategory?: 'all' | 'sofas' | 'recliners' | 'beds' | 'chairs-tables';
  onSelectProduct: (product: Product) => void;
  onQuickAddQuote: (product: Product) => void;
  quoteItemIds: string[];
}

export const ShopCollection: React.FC<ShopCollectionProps> = ({
  initialCategory = 'all',
  onSelectProduct,
  onQuickAddQuote,
  quoteItemIds,
}) => {
  const { t, language, localizeProduct } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'sofas' | 'recliners' | 'beds' | 'chairs-tables'>(initialCategory);
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'model' | 'page' | 'name'>('model');

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (selectedSeries !== 'all' && item.series !== selectedSeries) {
        return false;
      }
      if (selectedMaterial !== 'all') {
        const hasMat = item.materials.some((m) =>
          m.toLowerCase().includes(selectedMaterial.toLowerCase())
        );
        if (!hasMat) return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const loc = localizeProduct(item);
        const matchModel = item.model.toLowerCase().includes(query);
        const matchName = item.name.toLowerCase().includes(query) || loc.name.toLowerCase().includes(query);
        const matchCn = language === 'zh' && item.nameCn?.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query) || loc.description.toLowerCase().includes(query);
        const matchDims = item.dimensions.length.toLowerCase().includes(query);
        return matchModel || matchName || matchCn || matchDesc || matchDims;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'page') return a.pageNumber - b.pageNumber;
      if (sortBy === 'name') {
        return localizeProduct(a).name.localeCompare(localizeProduct(b).name);
      }
      return a.model.localeCompare(b.model);
    });
  }, [selectedCategory, selectedSeries, selectedMaterial, searchQuery, sortBy, language, localizeProduct]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedSeries('all');
    setSelectedMaterial('all');
    setSearchQuery('');
  };

  return (
    <div className="py-12 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Page Title */}
        <div className="mb-10 text-center sm:text-start">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm uppercase tracking-widest text-stone-700 mb-2 font-semibold">
            <span className="text-[#005EA8]">{t.collection.kickerBrand}</span>
            <span>·</span>
            <span>{t.collection.kickerCatalog}</span>
            <span>·</span>
            <span className="tabular-nums">
              {PRODUCTS.length} {t.collection.kickerModels}
            </span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#191919]">
            {t.collection.title}
          </h1>
          <p className="text-base text-stone-700 max-w-3xl mt-3 leading-relaxed">
            {t.collection.subtitle}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-[#E8E6E1] p-5 sm:p-6 mb-8 shadow-2xs space-y-5">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-500 absolute start-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.collection.searchPlaceholder}
                className="w-full ps-10 pe-16 py-3 text-base border border-stone-300 focus:border-[#005EA8] focus:outline-hidden bg-stone-50/50"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-sm text-stone-600 hover:text-black font-medium cursor-pointer"
                >
                  {t.cta.clear}
                </button>
              )}
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-stone-700 font-semibold whitespace-nowrap">
                {t.collection.sortBy}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'model' | 'page' | 'name')}
                className="px-3.5 py-2.5 text-sm border border-stone-300 bg-white text-stone-800 focus:border-[#005EA8] focus:outline-hidden font-medium"
              >
                <option value="model">{t.collection.sortModel}</option>
                <option value="page">{t.collection.sortPage}</option>
                <option value="name">{t.collection.sortName}</option>
              </select>
            </div>
          </div>

          {/* Interactive Category Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-stone-200">
            <span className="text-sm font-semibold text-stone-700 me-2">
              {t.collection.categoryLabel}
            </span>
            {[
              { id: 'all', label: `${t.collection.allProducts} (${PRODUCTS.length})` },
              { id: 'sofas', label: `${t.collection.catSofas} (${PRODUCTS.filter((p) => p.category === 'sofas').length})` },
              { id: 'recliners', label: `${t.collection.catRecliners} (${PRODUCTS.filter((p) => p.category === 'recliners').length})` },
              { id: 'beds', label: `${t.collection.catBeds} (${PRODUCTS.filter((p) => p.category === 'beds').length})` },
              { id: 'chairs-tables', label: `${t.collection.catChairs} (${PRODUCTS.filter((p) => p.category === 'chairs-tables').length})` },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as typeof selectedCategory)}
                className={`px-3.5 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#191919] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Secondary Filters: Series & Material */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-stone-200 text-sm">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-stone-700 font-semibold">{t.collection.seriesLabel}</span>
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="px-3 py-1.5 text-sm border border-stone-300 bg-white text-stone-800 font-medium"
              >
                <option value="all">{t.collection.allSeries}</option>
                <option value="Modern Luxury Series">
                  {SERIES_TRANSLATIONS[language]['Modern Luxury Series']}
                </option>
                <option value="High-End Minimalist Series">
                  {SERIES_TRANSLATIONS[language]['High-End Minimalist Series']}
                </option>
                <option value="High-End Simple Luxury Series">
                  {SERIES_TRANSLATIONS[language]['High-End Simple Luxury Series']}
                </option>
              </select>

              <span className="text-stone-700 font-semibold ms-2">{t.collection.materialLabel}</span>
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="px-3 py-1.5 text-sm border border-stone-300 bg-white text-stone-800 font-medium"
              >
                <option value="all">{t.collection.allMaterials}</option>
                <option value="Leather">{t.collection.matLeather}</option>
                <option value="Bouclé">{t.collection.matBoucle}</option>
                <option value="Motorized">{t.collection.matMotorized}</option>
                <option value="Stone">{t.collection.matStone}</option>
                <option value="Walnut">{t.collection.matWalnut}</option>
              </select>
            </div>

            {(selectedCategory !== 'all' || selectedSeries !== 'all' || selectedMaterial !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 text-stone-700 hover:text-black text-sm font-semibold underline cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t.cta.resetFilters}</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-stone-700 mb-6 px-1 font-medium">
          <span>
            {filteredProducts.length} {t.collection.showingCount}
          </span>
          <span>{t.collection.clickHint}</span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white border border-[#E8E6E1] p-8 space-y-4">
            <p className="text-stone-700 text-base">{t.collection.emptyState}</p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-[#191919] text-white text-sm font-semibold uppercase tracking-wider cursor-pointer"
            >
              {t.cta.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onQuickAddQuote={onQuickAddQuote}
                isInQuote={quoteItemIds.includes(product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
