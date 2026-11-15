import React, { useState } from 'react';
import { Product } from '../data/products';
import { X, Trash2, Send, CheckCircle, Plus, Minus, PhoneCall, Building } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export interface QuoteItem {
  product: Product;
  quantity: number;
  notes?: string;
}

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll,
}) => {
  const { t, localizeProduct } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    location: '',
    projectType: 'Residential',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClearAll();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-xl bg-[#FBFBFA] h-full shadow-2xl flex flex-col border-s border-[#E8E6E1]">
        {/* Header */}
        <div className="p-6 border-b border-[#E8E6E1] flex items-center justify-between bg-white">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#005EA8] font-semibold">
              {t.quoteDrawer.kicker}
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#191919]">
              {t.quoteDrawer.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-700 hover:text-black transition-colors cursor-pointer"
            aria-label="Close quote drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {submitted ? (
            <div className="py-12 px-4 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center border border-emerald-200">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-editorial text-3xl font-bold text-stone-900">
                {t.quoteDrawer.successTitle}
              </h3>
              <p className="text-base text-stone-700 max-w-md mx-auto leading-relaxed">
                {t.quoteDrawer.successBodyPrefix}{' '}
                <strong className="text-stone-900">{formData.fullName}</strong>.{' '}
                {t.quoteDrawer.successBodySuffix}
              </p>

              <div className="bg-[#F5F4F0] p-5 text-start border border-stone-200 text-sm space-y-1.5 my-6 max-w-md mx-auto">
                <p className="font-bold text-stone-900 uppercase">{t.quoteDrawer.refSummaryTitle}</p>
                <p>
                  {t.quoteDrawer.refContact} {formData.phone} · {formData.email}
                </p>
                <p>
                  {t.quoteDrawer.refLocation} {formData.location || 'Uganda / International'}
                </p>
                <p>
                  {t.quoteDrawer.refItems}{' '}
                  {items.reduce((acc, i) => acc + i.quantity, 0)} {t.quoteDrawer.unitsWord} (
                  {items.map((i) => i.product.model).join(', ')})
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+256744477777"
                  dir="ltr"
                  className="px-5 py-3 bg-[#191919] hover:bg-[#005EA8] text-white text-sm font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{t.cta.callShowroomDirect}</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-3 border border-stone-300 hover:border-stone-500 text-stone-800 text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {t.cta.returnToCatalogue}
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Selected Items Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-stone-700">
                    {t.quoteDrawer.selectedItems} ({items.length})
                  </h3>
                  {items.length > 0 && (
                    <button
                      type="button"
                      onClick={onClearAll}
                      className="text-sm text-stone-600 hover:text-rose-700 transition-colors underline cursor-pointer font-medium"
                    >
                      {t.quoteDrawer.clearList}
                    </button>
                  )}
                </div>

                {items.length === 0 ? (
                  <div className="p-6 bg-[#F5F4F0] border border-dashed border-stone-300 text-center space-y-1.5">
                    <p className="text-base text-stone-800 font-semibold">{t.quoteDrawer.emptyTitle}</p>
                    <p className="text-sm text-stone-700 leading-relaxed">{t.quoteDrawer.emptyHint}</p>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {items.map((item) => {
                      const itemLoc = localizeProduct(item.product);
                      return (
                        <div
                          key={item.product.id}
                          className="p-4 bg-white border border-stone-200 flex items-center justify-between gap-3 text-sm"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[#005EA8]">{item.product.model}</span>
                              <span className="text-stone-400">·</span>
                              <span className="truncate text-stone-900 font-semibold">{itemLoc.name}</span>
                            </div>
                            <p className="text-xs text-stone-700 truncate mt-1">
                              {item.notes || `${item.product.dimensions.length} · ${itemLoc.series}`}
                            </p>
                          </div>

                          <div className="flex items-center gap-3 flex-shrink-0">
                            <div className="flex items-center border border-stone-300 bg-stone-50">
                              <button
                                type="button"
                                onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                                className="p-1.5 hover:bg-stone-200 text-stone-800 cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="px-2.5 font-bold text-stone-900 text-sm tabular-nums">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="p-1.5 hover:bg-stone-200 text-stone-800 cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => onRemoveItem(item.product.id)}
                              className="p-1.5 text-stone-600 hover:text-rose-700 transition-colors cursor-pointer"
                              aria-label={`Remove ${itemLoc.name}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-[#E8E6E1]">
                <h3 className="text-sm uppercase tracking-wider font-semibold text-stone-700">
                  {t.quoteDrawer.customerHeading}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-sm font-semibold text-stone-800 mb-1">
                      {t.quoteDrawer.fullNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={t.quoteDrawer.fullNamePlaceholder}
                      className="w-full px-3.5 py-2.5 text-base border border-stone-300 focus:border-[#005EA8] focus:outline-hidden bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-stone-800 mb-1">
                      {t.quoteDrawer.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+256 700 000 000"
                      className="w-full px-3.5 py-2.5 text-base border border-stone-300 focus:border-[#005EA8] focus:outline-hidden bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-sm font-semibold text-stone-800 mb-1">
                      {t.quoteDrawer.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      dir="ltr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-base border border-stone-300 focus:border-[#005EA8] focus:outline-hidden bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-stone-800 mb-1">
                      {t.quoteDrawer.locationLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder={t.quoteDrawer.locationPlaceholder}
                      className="w-full px-3.5 py-2.5 text-base border border-stone-300 focus:border-[#005EA8] focus:outline-hidden bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-sm font-semibold text-stone-800 mb-1">
                      {t.quoteDrawer.companyLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t.quoteDrawer.companyPlaceholder}
                      className="w-full px-3.5 py-2.5 text-base border border-stone-300 focus:border-[#005EA8] focus:outline-hidden bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-stone-800 mb-1">
                      {t.quoteDrawer.projectTypeLabel}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-base border border-stone-300 focus:border-[#005EA8] focus:outline-hidden bg-white"
                    >
                      {t.quoteDrawer.projectTypes.map((pt) => (
                        <option key={pt.value} value={pt.value}>
                          {pt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-1">
                    {t.quoteDrawer.notesLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.quoteDrawer.notesPlaceholder}
                    className="w-full px-3.5 py-2.5 text-base border border-stone-300 focus:border-[#005EA8] focus:outline-hidden bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-[#191919] hover:bg-[#005EA8] text-white text-sm font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    {loading ? (
                      <span>{t.cta.submittingQuoteRequest}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.cta.submitQuoteRequest}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Footer Factory Info */}
        <div className="p-4 bg-[#F5F4F0] border-t border-[#E8E6E1] text-sm text-stone-700 flex items-center justify-between font-medium">
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-[#005EA8]" />
            <span>{t.quoteDrawer.footerScale}</span>
          </div>
          <span dir="ltr" className="font-bold text-stone-900">
            +256 744 477 777
          </span>
        </div>
      </div>
    </div>
  );
};
