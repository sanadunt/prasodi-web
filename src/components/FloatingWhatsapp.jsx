import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsapp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const text = encodeURIComponent(
      `Halo Tim Prasodi, saya ingin tanya-tanya seputar pembuatan website untuk usaha saya.`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Tooltip Notification */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-3 shadow-xl border border-slate-200/90 text-left max-w-[240px] relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
            aria-label="Tutup"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold text-slate-900">Admin Prasodi Online</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-snug">
            Ada pertanyaan tentang website usaha Anda? Chat kami sekarang, gratis konsultasi!
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all cursor-pointer animate-pulse-glow"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-white text-emerald-500" />
      </button>
    </div>
  );
}
