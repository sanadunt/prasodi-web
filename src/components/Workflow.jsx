import React from 'react';
import { Sparkles, MousePointerClick, Send, Rocket, CheckCircle } from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      step: '01',
      title: 'Pilih Paket & Isi Kebutuhan',
      description: 'Gunakan kalkulator interaktif untuk memilih paket dan fitur tambahan sesuai anggaran bisnis Anda.',
      icon: MousePointerClick,
      color: 'blue'
    },
    {
      step: '02',
      title: 'Kirimkan Foto & Info Usaha',
      description: 'Kirimkan foto produk, daftar harga, dan alamat melalui WhatsApp. Tim kami siap membantu jika belum lengkap.',
      icon: Send,
      color: 'indigo'
    },
    {
      step: '03',
      title: 'Website Jadi & Siap Jualan!',
      description: 'Dalam 3-5 hari, website resmi Anda tayang di Google, terhubung ke WhatsApp, dan siap dipakai promosi.',
      icon: Rocket,
      color: 'emerald'
    }
  ];

  return (
    <section id="alur" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Alur Pengerjaan Praktis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hanya 3 Langkah, <span className="text-blue-600">Terima Beres Tanpa Ribet</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Anda fokus membesarkan usaha dan melayani pesanan, urusan teknis website serahkan sepenuhnya kepada Prasodi.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200 text-left hover:shadow-lg hover:border-blue-200 transition-all group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-blue-200 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-blue-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Didampingi sampai online</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
