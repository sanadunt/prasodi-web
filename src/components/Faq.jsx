import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleWaContact = () => {
    const text = encodeURIComponent(
      `Halo Tim Prasodi, saya ingin bertanya lebih lanjut seputar pembuatan website untuk usaha saya.`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pertanyaan yang Sering Diajukan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Semua yang Perlu Anda <span className="text-blue-600">Ketahui</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Punya keraguan seputar website untuk usaha Anda? Temukan jawabannya di bawah ini.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA Box */}
        <div className="mt-12 p-6 rounded-3xl bg-blue-50/80 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Masih punya pertanyaan lain seputar kebutuhan toko Anda?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Konsultasikan gratis dengan tim ahli kami kapan saja via WhatsApp.
            </p>
          </div>
          <button
            onClick={handleWaContact}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Admin Prasodi</span>
          </button>
        </div>

      </div>
    </section>
  );
}
