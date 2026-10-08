import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { MessageCircle, Menu, X, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar({ onSelectPackage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Demo Website', href: '#demo' },
    { label: 'Paket Harga', href: '#harga' },
    { label: 'Kalkulator Order', href: '#order-calculator' },
    { label: 'Cara Kerja', href: '#alur' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleWaConsultation = () => {
    const text = encodeURIComponent(
      `Halo Tim Prasodi, saya ingin konsultasi mengenai pembuatan website untuk usaha UMKM saya. Bisa dibantu infonya?`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              P
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Prasodi
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-blue-600">
                Solusi Digital UMKM
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleWaConsultation}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Tanya via WA</span>
            </button>

            <a
              href="#order-calculator"
              className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/20 hover:shadow-md hover:shadow-blue-500/30 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Simulasi & Pesan</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 pb-4 space-y-3 bg-white rounded-2xl shadow-xl p-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWaConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Konsultasi Gratis via WhatsApp</span>
              </button>

              <a
                href="#order-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
              >
                <span>Mulai Simulasi Pesanan</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
