import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  Clock, 
  ShieldCheck, 
  ShoppingBag,
  Star,
  MapPin,
  TrendingUp
} from 'lucide-react';

export default function Hero({ onStartOrder }) {
  const handleWaClick = () => {
    const text = encodeURIComponent(
      `Halo Prasodi, saya tertarik ingin membuat website untuk usaha UMKM saya. Boleh tanya-tanya dulu?`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Solusi Digital Terpercaya Khusus UMKM Indonesia</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Bikin Website UMKM{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Siap Jualan
              </span>{' '}
              via WhatsApp, Mulai 300 Ribuan!
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Tingkatkan omzet dan kepercayaan pelanggan toko Anda. Website langsung dilengkapi{' '}
              <strong className="text-slate-800 font-semibold">katalog produk</strong>,{' '}
              <strong className="text-slate-800 font-semibold">tombol checkout ke WhatsApp</strong>, dan terdaftar di{' '}
              <strong className="text-slate-800 font-semibold">Google Maps</strong>. Siap pakai dalam 3 hari, tanpa perlu pusing mikirin koding!
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#order-calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all transform active:scale-98"
              >
                <span>Simulasi & Pesan Sekarang</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={handleWaClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-emerald-800 bg-white hover:bg-emerald-50 border-2 border-emerald-500/40 shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Konsultasi Gratis via WA</span>
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-200/80">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <span>3 Hari Selesai</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <Smartphone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>100% Pas di HP</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Garansi Revisi</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <Star className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0" />
                <span>Rating 4.9/5</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Visual Preview Mockup */}
          <div className="lg:col-span-5 relative">
            
            {/* Phone/Card Frame */}
            <div className="relative mx-auto max-w-sm rounded-3xl bg-slate-900 p-3 shadow-2xl ring-1 ring-slate-900/10">
              
              {/* Screen Top Bar */}
              <div className="flex items-center justify-between px-4 py-2 text-xs text-slate-400 bg-slate-950 rounded-t-2xl">
                <span>09:41</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  <span>prasodi.com/kedai-senja</span>
                </div>
              </div>

              {/* Website Inside Phone Screen */}
              <div className="bg-white rounded-b-2xl overflow-hidden p-4 space-y-3.5 text-left">
                
                {/* Header Mockup */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs">
                      KS
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-none">Kedai Kopi Senja</h4>
                      <span className="text-[10px] text-emerald-600 font-medium">Buka Hari Ini • 08.00-22.00</span>
                    </div>
                  </div>
                  <div className="p-1.5 bg-slate-100 rounded-lg text-slate-600">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                </div>

                {/* Promo Banner */}
                <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60">
                  <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-600 text-white uppercase tracking-wider">
                    Menu Favorit
                  </span>
                  <p className="text-xs font-bold text-slate-900 mt-1">
                    Es Kopi Susu Gula Aren Asli
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Biji kopi arabika pilihan dengan gula aren organik Garut.
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs font-extrabold text-blue-700">Rp 18.000</span>
                    <button className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-emerald-600 text-white flex items-center gap-1 shadow-xs">
                      <MessageCircle className="w-3 h-3" />
                      <span>Pesan ke WA</span>
                    </button>
                  </div>
                </div>

                {/* Features Inside App */}
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-1.5 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Petunjuk Maps</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-1.5 text-slate-700">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Rating Google 4.9</span>
                  </div>
                </div>

                {/* Realtime WA Order Pop-up Simulation */}
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Auto-Format Pesanan WA:</span>
                  </div>
                  <p className="text-[10px] text-slate-600 font-mono bg-white/80 p-1.5 rounded border border-emerald-100">
                    "Halo Kedai Senja, saya pesan 2x Es Kopi Susu Aren. Alamat: Jl. Melati No. 12..."
                  </p>
                </div>

              </div>
            </div>

            {/* Floating Floating Badges */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">+1 Order Baru Masuk!</p>
                <p className="text-[11px] text-slate-500">Notifikasi langsung ke WA</p>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-2.5">
              <img
                src="/logo-icon-square.jpeg"
                alt="Prasodi Partner"
                className="w-8 h-8 rounded-lg object-contain border border-slate-100"
              />
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">Partner Resmi Prasodi</p>
                <p className="text-[10px] text-emerald-600 font-semibold">Website Terverifikasi</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
