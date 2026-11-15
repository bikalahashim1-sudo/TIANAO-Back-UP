import React, { useState } from 'react';
import { MapPin, Phone, Globe, CheckCircle, Send, Building2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Schedule a Showroom Visit',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FBFBFA] border-b border-[#E8E6E1]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-sm uppercase tracking-widest font-semibold text-[#005EA8] block mb-2">
            {t.contact.kicker}
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#191919] leading-tight">
            {t.contact.title}
          </h2>
          <p className="text-base text-stone-700 mt-3 max-w-xl leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white border border-[#E8E6E1] p-8 space-y-6 shadow-2xs">
              <div>
                <h3 className="font-editorial text-2xl font-bold text-stone-900 border-b border-stone-200 pb-3">
                  {t.contact.companyTitle}
                </h3>
                <p className="text-sm text-[#005EA8] font-semibold mt-2">{t.contact.companySub}</p>
              </div>

              <div className="space-y-5 text-base text-stone-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">
                      {t.contact.addressLabel}
                    </strong>
                    <span>{t.contact.addressValue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">
                      {t.contact.phonesLabel}
                    </strong>
                    <div
                      dir="ltr"
                      className="flex flex-col sm:flex-row gap-2 sm:gap-5 text-stone-900 font-medium text-start"
                    >
                      <a href="tel:+256744477777" className="hover:text-[#005EA8] underline">
                        +256 744 477 777
                      </a>
                      <a href="tel:+256744377777" className="hover:text-[#005EA8] underline">
                        +256 744 377 777
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">
                      {t.contact.websiteLabel}
                    </strong>
                    <a
                      href="https://tianaofurniture.co.ug"
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                      className="text-stone-900 hover:text-[#005EA8] underline font-medium"
                    >
                      https://tianaofurniture.co.ug
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">
                      {t.contact.scaleLabel}
                    </strong>
                    <span>{t.contact.scaleValue}</span>
                  </div>
                </div>
              </div>

              {/* Showroom Hours */}
              <div className="border-t border-stone-200 text-sm text-stone-700 space-y-1.5 bg-[#F5F4F0] p-5">
                <p className="font-bold text-stone-900 text-base">{t.contact.hoursTitle}</p>
                <p className="font-medium">{t.contact.hoursValue}</p>
                <p className="text-stone-700">{t.contact.hoursNote}</p>
              </div>
            </div>

            {/* Strategic Hub Card */}
            <div className="bg-[#141312] text-white p-6 border border-stone-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-amber-400 uppercase tracking-widest font-semibold block">
                  {t.contact.hubKicker}
                </span>
                <h4 className="font-editorial text-xl font-bold mt-1">{t.contact.hubTitle}</h4>
                <p className="text-sm text-stone-300 mt-1">{t.contact.hubDesc}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center flex-shrink-0 text-amber-400 text-sm font-bold">
                UG
              </div>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="lg:col-span-6 bg-white border border-[#E8E6E1] p-8 shadow-2xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900">
                  {t.contact.successTitle}
                </h4>
                <p className="text-base text-stone-700 max-w-sm mx-auto leading-relaxed">
                  {t.contact.successDesc}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 border border-stone-300 hover:border-black text-sm font-semibold uppercase tracking-wider cursor-pointer"
                >
                  {t.cta.sendAnotherNote}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#005EA8] block mb-1">
                    {t.contact.formKicker}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900">
                    {t.contact.formTitle}
                  </h3>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-1.5">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3.5 py-2.5 text-base border border-stone-300 focus:border-[#005EA8] focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-stone-800 mb-1.5">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+256..."
                      className="w-full px-3.5 py-2.5 text-base border border-stone-300 focus:border-[#005EA8] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-stone-800 mb-1.5">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      dir="ltr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full px-3.5 py-2.5 text-base border border-stone-300 focus:border-[#005EA8] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-1.5">
                    {t.contact.subjectLabel}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-base border border-stone-300 focus:border-[#005EA8] focus:outline-hidden bg-white"
                  >
                    {t.contact.subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-1.5">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 text-base border border-stone-300 focus:border-[#005EA8] focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#191919] hover:bg-[#005EA8] text-white text-sm font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.cta.sendDirectMessage}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
