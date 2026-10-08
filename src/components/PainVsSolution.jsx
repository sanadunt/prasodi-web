import React from 'react';
import { XCircle, CheckCircle2, TrendingUp, AlertCircle, Sparkles } from 'lucide-react';

export default function PainVsSolution() {
  const painPoints = [
    'Calon pembeli sering ragu apakah toko Anda masih aktif atau fiktif.',
    'Capek membalas pertanyaan harga & ukuran yang sama puluhan kali setiap hari.',
    'Rawan kehilangan seluruh pelanggan jika akun media sosial terkena banned/hack.',
    'Bisnis tidak muncul saat calon pembeli sekitar mencari di Google Maps.',
    'Terlihat seperti penjual musiman karena tidak memiliki alamat website resmi.'
  ];

  const solutions = [
    'Kredibilitas toko naik drastis! Pelanggan percaya dan tidak ragu transfer.',
    'Hemat waktu! Pembeli bisa lihat katalog lengkap & langsung checkout rapi ke WA.',
    'Aset digital resmi milik Anda sendiri selamanya, aman dari pemblokiran medsos.',
    'Mudah ditemukan pembeli baru di sekitar Anda lewat Google Search & Maps.',
    'Bisa digunakan untuk pasang link di bio Instagram, TikTok, Facebook, dan kartu nama.'
  ];

  return (
    <section id="keunggulan" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fakta Nyata UMKM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kenapa Toko Anda <span className="text-blue-600">Wajib Punya Website</span> Sekarang?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Jual beli sekarang serba cepat. Pembeli mencari yang praktis, transparan, dan terpercaya sebelum memutuskan mengeluarkan uang.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          
          {/* Box 1: Cara Lama */}
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-50 border border-slate-200/90 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Hanya Jualan di Medsos & Chat</h3>
                <p className="text-xs text-rose-600 font-medium">Banyak peluang terbuang sia-sia</p>
              </div>
            </div>

            <ul className="space-y-4">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2: Solusi Website Prasodi */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white shadow-xl shadow-blue-950/20 relative overflow-hidden ring-2 ring-blue-500/30">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Punya Website Resmi di Prasodi</h3>
                <p className="text-xs text-emerald-400 font-semibold">Toko siap jualan otomatis 24 jam</p>
              </div>
            </div>

            <ul className="space-y-4">
              {solutions.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 leading-snug">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-slate-700/80 flex items-center justify-between">
              <span className="text-xs text-slate-300">Biaya mulai Rp 349.000 sekali bayar</span>
              <a
                href="#order-calculator"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                Cek Paket Sekarang &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
