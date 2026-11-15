import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';

interface CategorySectionProps {
  onSelectCategory: (category: 'all' | 'sofas' | 'recliners' | 'beds' | 'chairs-tables') => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  const { t } = useLanguage();

  const countByCat = (cat: 'sofas' | 'recliners' | 'beds' | 'chairs-tables') =>
    PRODUCTS.filter((p) => p.category === cat).length;

  const categories = [
    {
      id: 'sofas' as const,
      title: t.categoriesSection.items.sofas.title,
      subtitle: t.categoriesSection.items.sofas.subtitle,
      count: `${countByCat('sofas')} ${t.categoriesSection.modelsUnit}`,
      desc: t.categoriesSection.items.sofas.desc,
      highlightModel: 'TA-M04 · TA-EX01 · TA9106',
      bgClass: 'bg-[#F2EFE9]',
    },
    {
      id: 'recliners' as const,
      title: t.categoriesSection.items.recliners.title,
      subtitle: t.categoriesSection.items.recliners.subtitle,
      count: `${countByCat('recliners')} ${t.categoriesSection.modelsUnit}`,
      desc: t.categoriesSection.items.recliners.desc,
      highlightModel: 'TA9810 · TA9102',
      bgClass: 'bg-[#EAE7DF]',
    },
    {
      id: 'beds' as const,
      title: t.categoriesSection.items.beds.title,
      subtitle: t.categoriesSection.items.beds.subtitle,
      count: `${countByCat('beds')} ${t.categoriesSection.modelsUnit}`,
      desc: t.categoriesSection.items.beds.desc,
      highlightModel: 'TAA2188 · TA2576 · BED-01',
      bgClass: 'bg-[#E5E1D7]',
    },
    {
      id: 'chairs-tables' as const,
      title: t.categoriesSection.items['chairs-tables'].title,
      subtitle: t.categoriesSection.items['chairs-tables'].subtitle,
      count: `${countByCat('chairs-tables')} ${t.categoriesSection.modelsUnit}`,
      desc: t.categoriesSection.items['chairs-tables'].desc,
      highlightModel: 'TA-M02 · 9808 · DINING-01',
      bgClass: 'bg-[#DFDBD0]',
    },
  ];

  return (
    <section className="py-20 bg-[#FBFBFA] border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-sm uppercase tracking-widest font-semibold text-[#005EA8] block mb-2">
              {t.categoriesSection.kicker}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191919]">
              {t.categoriesSection.title}
            </h2>
          </div>
          <p className="text-base text-stone-700 max-w-md leading-relaxed">
            {t.categoriesSection.subtitle}
          </p>
        </div>

        {/* 4 Editorial Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`p-8 border border-stone-300/80 hover:border-[#005EA8] transition-all duration-300 flex flex-col justify-between min-h-[310px] cursor-pointer group text-start ${cat.bgClass}`}
            >
              <div>
                <div className="flex items-center justify-between text-sm text-stone-700 mb-6 font-semibold">
                  <span>0{index + 1}</span>
                  <span className="text-stone-900 tabular-nums">{cat.count}</span>
                </div>

                <h3 className="font-editorial text-2xl font-bold text-stone-900 group-hover:text-[#005EA8] transition-colors">
                  {cat.title}
                </h3>
                <span className="text-sm font-medium text-stone-700 block mt-1.5">
                  {cat.subtitle}
                </span>

                <p className="text-sm text-stone-700 mt-4 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-stone-300 flex items-center justify-between text-sm w-full">
                <span className="text-stone-800 font-medium truncate pe-2">{cat.highlightModel}</span>
                <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-stone-900 group-hover:bg-[#005EA8] group-hover:text-white transition-all shadow-xs shrink-0">
                  <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
