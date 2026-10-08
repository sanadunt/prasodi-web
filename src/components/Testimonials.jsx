import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Star, Quote, Sparkles, MapPin } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kisah Sukses Klien</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dipercaya Pelaku Usaha di <span className="text-blue-600">Berbagai Kota Indonesia</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Dengar langsung pengalaman teman-teman UMKM yang sudah merasakan kemudahan jualan dengan website dari Prasodi.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {siteConfig.testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md flex flex-col justify-between hover:shadow-xl transition-all relative"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-blue-100 shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">{item.name}</h4>
                  <p className="text-xs font-medium text-slate-600">{item.business}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="flex items-center gap-0.5 text-[10px] text-slate-400 font-semibold">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {item.city}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 font-semibold">
                      {item.package}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
