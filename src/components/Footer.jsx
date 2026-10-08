import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block bg-white p-2 rounded-xl shadow-sm">
              <img
                src="/logo-prasodi.jpeg"
                alt="Prana Solusi Digital"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Mitra digital terpercaya untuk UMKM Indonesia. Kami berkomitmen membantu pelaku usaha lokal memiliki website profesional, katalog online WhatsApp, dan siap bersaing di era digital.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garansi Pengerjaan Tepat Waktu & Pendampingan Penuh</span>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#keunggulan" className="hover:text-white transition-colors">
                  Keunggulan Website UMKM
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition-colors">
                  Contoh Demo Industri
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-white transition-colors">
                  Pilihan Paket & Harga
                </a>
              </li>
              <li>
                <a href="#order-calculator" className="hover:text-white transition-colors">
                  Kalkulator Simulasi Order
                </a>
              </li>
              <li>
                <a href="#alur" className="hover:text-white transition-colors">
                  Alur & Langkah Pemesanan
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak & Jam Operasional (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Kontak Resmi
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{siteConfig.whatsappDisplay} (Konsultasi Cepat)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{siteConfig.operationalHours}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.companyName}. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-1">
            <span>Dibuat dengan dedikasi untuk kemajuan UMKM Indonesia</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
