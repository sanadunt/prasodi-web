import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Check, Sparkles, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Pricing({ onSelectPackage }) {
  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleSelect = (planId) => {
    if (onSelectPackage) {
      onSelectPackage(planId);
    }
    const elem = document.getElementById('order-calculator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="harga" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Biaya Transparan & Terjangkau</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pilihan Paket Website <span className="text-blue-600">Sesuai Kebutuhan & Budget</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Tanpa biaya tersembunyi. Sudah lengkap dengan hosting aktif, garansi pengerjaan, dan pendampingan sampai website siap dipakai jualan.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {siteConfig.pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between text-left transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-blue-900 to-slate-900 text-white shadow-2xl shadow-blue-900/30 ring-2 ring-blue-500 scale-102 sm:scale-105 z-10'
                  : 'bg-white text-slate-900 border border-slate-200/90 shadow-md hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              {/* Header Info */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-xl font-extrabold ${plan.isPopular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <div
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      plan.isPopular ? 'bg-white/10 text-slate-200' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{plan.turnaround}</span>
                  </div>
                </div>

                <p className={`text-xs mb-6 ${plan.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-slate-200/40">
                  <span className={`text-xs line-through ${plan.isPopular ? 'text-slate-400' : 'text-slate-400'}`}>
                    {formatRupiah(plan.originalPrice)}
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      {formatRupiah(plan.price)}
                    </span>
                    <span className={`text-xs ${plan.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                      / sekali bayar
                    </span>
                  </div>
                </div>

                {/* Checklist */}
                <div className="space-y-3 mb-8">
                  <p className={`text-xs font-bold uppercase tracking-wider ${plan.isPopular ? 'text-slate-300' : 'text-slate-700'}`}>
                    Fasilitas yang didapat:
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.isPopular ? 'bg-emerald-400 text-slate-950' : 'bg-emerald-100 text-emerald-600'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className={`text-xs sm:text-sm leading-snug ${plan.isPopular ? 'text-slate-200' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div>
                <div className={`p-3 rounded-xl mb-4 text-xs ${plan.isPopular ? 'bg-white/10 text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
                  <strong>Cocok untuk:</strong> {plan.idealFor}
                </div>

                <button
                  onClick={() => handleSelect(plan.id)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.isPopular
                      ? 'bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-900 hover:bg-blue-600 text-white shadow-sm'
                  }`}
                >
                  <span>Pilih {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center gap-3 text-emerald-800 text-xs sm:text-sm font-medium">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Garansi revisi desain & garansi uang kembali jika website tidak selesai tepat waktu.</span>
        </div>

      </div>
    </section>
  );
}
