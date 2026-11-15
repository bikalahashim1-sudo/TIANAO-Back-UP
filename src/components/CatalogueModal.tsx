import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, FileText, ArrowRight, Download } from 'lucide-react';
import { PRODUCTS, COMPANY_INFO, Product } from '../data/products';
import { IMAGES } from '../assets/images';
import { useLanguage } from '../i18n/LanguageContext';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const CatalogueModal: React.FC<CatalogueModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 36;
  const { t, localizeProduct } = useLanguage();

  if (!isOpen) return null;

  const pageProducts = PRODUCTS.filter((p) => p.pageNumber === currentPage);

  const getPageInfo = (page: number) => {
    const s = t.catalogueModal.sections;
    if (page === 1) return { title: s.coverTitle, section: s.coverSection };
    if (page === 2) return { title: s.profileTitle, section: s.profileSection };
    if (page >= 3 && page <= 19) return { title: s.sofasTitle, section: s.sofasSection };
    if (page >= 20 && page <= 26) return { title: s.reclinersTitle, section: s.reclinersSection };
    if (page === 27) return { title: s.chairsTitle, section: s.chairsSection };
    if (page >= 28 && page <= 36) return { title: s.bedsTitle, section: s.bedsSection };
    return { title: t.catalogueModal.title, section: t.catalogueModal.sections.sofasSection };
  };

  const currentInfo = getPageInfo(currentPage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-[#FBFBFA] border border-[#E8E6E1] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8E6E1] bg-white flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#005EA8]" />
            <div>
              <h2 className="font-editorial text-xl sm:text-2xl font-bold text-stone-900 leading-none">
                {t.catalogueModal.title}
              </h2>
              <span className="text-xs text-stone-700 uppercase tracking-wider font-medium mt-1 block">
                {t.catalogueModal.subtitle}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={COMPANY_INFO.pdfPath}
              download="TIANAO-Furniture-Official-Catalogue.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#005EA8] hover:bg-[#00457C] text-white text-sm font-semibold uppercase tracking-wider transition-colors whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>{t.cta.downloadPdf}</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-stone-700 hover:text-black transition-colors cursor-pointer"
              aria-label="Close catalogue viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Content & Viewer */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#F5F4F0] flex flex-col justify-between">
          <div className="bg-white border border-stone-300 p-6 sm:p-10 shadow-sm relative min-h-[380px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3.5 mb-6 gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#005EA8] font-semibold block">
                  {currentInfo.section} · {t.catalogueModal.pageWord} {String(currentPage).padStart(2, '0')} / {totalPages}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  {currentInfo.title}
                </h3>
              </div>
              <span className="text-sm font-bold text-stone-800 bg-stone-100 px-3 py-1.5 shrink-0 tabular-nums">
                P.{currentPage}
              </span>
            </div>

            <div className="space-y-6">
              {currentPage === 1 && (
                <div className="space-y-4">
                  <div className="p-6 bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-auto flex-shrink-0 bg-white border border-stone-200 px-2 py-1 shadow-xs rounded-xs flex items-center justify-center">
                        <img
                          src={IMAGES.brandLogo}
                          alt="TIANAO Furniture Logo"
                          className="h-full w-auto max-h-12 object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-xl text-stone-900">{t.brandTitle}</p>
                        <p className="text-sm text-stone-700 font-medium">{t.catalogueModal.companyFull}</p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-stone-200/80 space-y-1.5 text-sm text-stone-700">
                      <p>{t.catalogueModal.addressLine}</p>
                      <p dir="ltr" className="text-start font-medium">{t.catalogueModal.phoneLine}</p>
                      <p dir="ltr" className="text-start font-medium">{t.catalogueModal.webLine}</p>
                    </div>
                  </div>
                </div>
              )}

              {currentPage === 2 && (
                <div className="space-y-4 text-base text-stone-800 leading-relaxed">
                  <div className="p-5 bg-white border border-stone-200 space-y-2">
                    <p className="font-bold text-stone-900 text-lg">
                      {t.catalogueModal.profileTitle}
                    </p>
                    <p className="text-stone-800 leading-relaxed">{t.about.profileBody}</p>
                  </div>

                  <div className="bg-[#005EA8]/5 p-4 border border-[#005EA8]/20 text-sm">
                    <p className="font-bold text-[#005EA8] mb-1 uppercase tracking-wider">
                      {t.catalogueModal.fiveGoodTitle}
                    </p>
                    <p className="text-stone-900 font-medium">{t.about.pillarsSub}</p>
                  </div>
                </div>
              )}

              {currentPage >= 3 && pageProducts.length > 0 && (
                <div className="space-y-4">
                  <p className="text-sm text-stone-700 font-medium">
                    {t.catalogueModal.productsOnPage}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pageProducts.map((p) => {
                      const pLoc = localizeProduct(p);
                      return (
                        <button
                          type="button"
                          key={p.id}
                          onClick={() => {
                            onClose();
                            onSelectProduct(p);
                          }}
                          className="p-4 bg-stone-50 border border-stone-200 hover:border-[#005EA8] transition-all cursor-pointer group text-start"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm font-bold text-[#005EA8]">{p.model}</span>
                            <span className="text-xs text-stone-700 font-medium">{pLoc.categoryLabel}</span>
                          </div>
                          <h4 className="font-semibold text-stone-900 text-base group-hover:text-[#005EA8] transition-colors">
                            {pLoc.name}
                          </h4>
                          <p className="text-sm text-stone-700 mt-1 tabular-nums">
                            {p.dimensions.length} {p.dimensions.depth ? `× ${p.dimensions.depth}` : ''}
                          </p>
                          <div className="mt-3 flex items-center text-sm font-semibold text-stone-900 group-hover:text-[#005EA8]">
                            <span>{t.cta.viewFullSpecs}</span>
                            <ArrowRight className="w-4 h-4 ms-1 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {currentPage >= 3 && pageProducts.length === 0 && (
                <div className="py-8 text-center text-stone-700 text-base space-y-2">
                  <p>{t.catalogueModal.editorialSpreadTitle}</p>
                  <p className="text-sm text-stone-600">{t.catalogueModal.editorialSpreadHint}</p>
                </div>
              )}
            </div>

            {/* Page Bottom watermark */}
            <div className="pt-6 border-t border-stone-200 mt-6 flex items-center justify-between text-xs text-stone-600 font-medium">
              <span>{t.catalogueModal.watermark}</span>
              <span>
                {t.catalogueModal.pageWord} {currentPage} {t.catalogueModal.ofWord} {totalPages}
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2.5 border border-stone-300 bg-white hover:bg-stone-50 disabled:opacity-40 text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                <span>{t.cta.previousPage}</span>
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2.5 border border-stone-300 bg-white hover:bg-stone-50 disabled:opacity-40 text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{t.cta.nextPage}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-stone-700 font-medium">
              <span>{t.catalogueModal.jumpToPage}</span>
              <select
                value={currentPage}
                onChange={(e) => setCurrentPage(Number(e.target.value))}
                className="px-3 py-1.5 border border-stone-300 bg-white text-sm font-medium"
              >
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                  <option key={pg} value={pg}>
                    {t.catalogueModal.pageWord} {pg} - {getPageInfo(pg).section}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
