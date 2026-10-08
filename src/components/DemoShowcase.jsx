import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Eye, Check, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

export default function DemoShowcase({ onSelectDemoCategory }) {
  const [activeTab, setActiveTab] = useState('fnb');
  const [previewModal, setPreviewModal] = useState(null);

  const categories = [
    { id: 'fnb', label: '☕ Kuliner & Kafe' },
    { id: 'fashion', label: '👗 Fashion & Olshop' },
    { id: 'services', label: '🛠️ Jasa & Bengkel/Salon' },
  ];

  const currentTemplate = siteConfig.demoTemplates.find((t) => t.category === activeTab);

  const handleUseThisDesign = (category) => {
    if (onSelectDemoCategory) {
      onSelectDemoCategory(category);
    }
    const elem = document.getElementById('order-calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="demo" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Katalog Desain Siap Pakai</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contoh Tampilan Website Sesuai <span className="text-blue-600">Jenis Bisnis Anda</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Setiap industri memiliki alur pesanan berbeda. Kami merancang tata letak yang pas untuk meningkatkan konversi jualan Anda.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-102'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Template Detail Display */}
        {currentTemplate && (
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 text-left">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Image Preview */}
              <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl shadow-md border border-slate-200">
                <img
                  src={currentTemplate.image}
                  alt={currentTemplate.title}
                  className="w-full h-72 sm:h-84 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {currentTemplate.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/25 backdrop-blur-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-semibold">{currentTemplate.title}</p>
                  </div>
                </div>
              </div>

              {/* Description & Features */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    {currentTemplate.categoryName}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                    {currentTemplate.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {currentTemplate.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Fitur Unggulan Template:
                  </p>
                  {currentTemplate.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleUseThisDesign(currentTemplate.category)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                  >
                    <span>Pakai Desain Ini</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => setPreviewModal(currentTemplate)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Lihat Detail Fitur</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {previewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <h4 className="text-xl font-bold text-slate-900 mb-2">{previewModal.title}</h4>
            <p className="text-sm text-slate-600 mb-6">{previewModal.description}</p>
            
            <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">Dukungan Sistem:</h5>
              <p className="text-xs text-slate-600">✓ Tombol WhatsApp langsung bawa nama produk</p>
              <p className="text-xs text-slate-600">✓ Sudah termasuk hosting & SSL gratis 1 tahun</p>
              <p className="text-xs text-slate-600">✓ Panduan ganti harga dan foto produk sendiri</p>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setPreviewModal(null)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  setPreviewModal(null);
                  handleUseThisDesign(previewModal.category);
                }}
                className="px-5 py-2 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700"
              >
                Pilih di Kalkulator
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
