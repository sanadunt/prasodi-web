import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  Calculator, 
  Check, 
  MessageCircle, 
  Plus, 
  ShoppingBag, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  Building,
  User,
  Phone,
  MapPin,
  FileText
} from 'lucide-react';

export default function OrderCalculator({ 
  selectedPlanId = 'katalog', 
  selectedCategoryId = 'fnb',
  onPlanChange 
}) {
  const [currentPlanId, setCurrentPlanId] = useState(selectedPlanId);
  const [currentCategoryId, setCurrentCategoryId] = useState(selectedCategoryId);
  const [selectedAddOns, setSelectedAddOns] = useState(['domain_com']);
  
  // Client Data Form
  const [formData, setFormData] = useState({
    ownerName: '',
    businessName: '',
    city: '',
    whatsapp: '',
    notes: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedPlanId) setCurrentPlanId(selectedPlanId);
  }, [selectedPlanId]);

  React.useEffect(() => {
    if (selectedCategoryId) setCurrentCategoryId(selectedCategoryId);
  }, [selectedCategoryId]);

  const currentPlan = siteConfig.pricingPlans.find((p) => p.id === currentPlanId) || siteConfig.pricingPlans[1];
  const currentCategory = siteConfig.businessCategories.find((c) => c.id === currentCategoryId) || siteConfig.businessCategories[0];

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleToggleAddOn = (addonId) => {
    setSelectedAddOns((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    );
  };

  // Calculate Total Price
  const addOnsTotal = selectedAddOns.reduce((sum, id) => {
    const item = siteConfig.addOns.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const grandTotal = currentPlan.price + addOnsTotal;

  // Handle Form Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Submit to WhatsApp
  const handleSubmitOrder = (e) => {
    e.preventDefault();

    // Basic Validation
    const errors = {};
    if (!formData.ownerName.trim()) errors.ownerName = 'Nama wajib diisi';
    if (!formData.businessName.trim()) errors.businessName = 'Nama usaha wajib diisi';
    if (!formData.whatsapp.trim()) errors.whatsapp = 'Nomor WhatsApp wajib diisi';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Compose Structured WhatsApp Message
    const selectedAddOnNames = selectedAddOns
      .map((id) => {
        const item = siteConfig.addOns.find((a) => a.id === id);
        return item ? `  • ${item.name} (+${formatRupiah(item.price)})` : null;
      })
      .filter(Boolean);

    const message = `Halo Tim Prasodi, saya ingin memesan website untuk usaha saya:

📋 DETAIL PESANAN WEBSITE:
• Paket Pilihan : ${currentPlan.name} (${formatRupiah(currentPlan.price)})
• Kategori Usaha : ${currentCategory.label}
• Fitur Tambahan (Add-ons) :
${selectedAddOnNames.length > 0 ? selectedAddOnNames.join('\n') : '  - Tidak ada (Hanya paket dasar)'}
─────────────────────────────
💰 ESTIMASI TOTAL : ${formatRupiah(grandTotal)}

👤 DATA PEMESAN:
• Nama Pemilik : ${formData.ownerName}
• Nama Usaha : ${formData.businessName}
• Domisili/Kota : ${formData.city || '-'}
• No. WhatsApp : ${formData.whatsapp}
${formData.notes ? `• Catatan Kebutuhan : ${formData.notes}` : ''}

Mohon informasi langkah pengerjaan selanjutnya dan cara pengiriman materinya. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;

    window.open(waUrl, '_blank');
    setIsSuccessModalOpen(true);
  };

  return (
    <section id="order-calculator" className="py-20 bg-gradient-to-b from-slate-50 to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator & Form Pemesanan Interaktif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hitung Estimasi & <span className="text-blue-600">Pesan Website Sekarang</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Sesuaikan paket dengan kebutuhan toko Anda. Total harga dihitung otomatis dan rincian pesanan langsung dikirim ke WhatsApp admin Prasodi.
          </p>
        </div>

        {/* Main Interactive Box */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
          <form onSubmit={handleSubmitOrder} className="grid lg:grid-cols-12">
            
            {/* Left Column: Selections & Inputs (8 Cols) */}
            <div className="lg:col-span-8 p-6 sm:p-10 space-y-10 border-b lg:border-b-0 lg:border-r border-slate-200">
              
              {/* STEP 1: Pilih Kategori Usaha */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                    1
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Pilih Bidang Usaha Anda
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {siteConfig.businessCategories.map((cat) => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setCurrentCategoryId(cat.id)}
                      className={`p-3.5 rounded-2xl text-left border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        currentCategoryId === cat.id
                          ? 'border-blue-600 bg-blue-50/80 text-blue-700 ring-2 ring-blue-600/20'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      <span className="block truncate">{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 2: Pilih Paket Dasar */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                    2
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Pilih Paket Website Dasar
                  </h3>
                </div>

                <div className="grid sm:grid-cols-3 gap-3.5">
                  {siteConfig.pricingPlans.map((plan) => (
                    <button
                      type="button"
                      key={plan.id}
                      onClick={() => {
                        setCurrentPlanId(plan.id);
                        if (onPlanChange) onPlanChange(plan.id);
                      }}
                      className={`p-4 rounded-2xl text-left border relative transition-all cursor-pointer ${
                        currentPlanId === plan.id
                          ? 'border-blue-600 bg-blue-50/80 text-blue-900 ring-2 ring-blue-600/30'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      {plan.isPopular && (
                        <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-white">
                          Favorit
                        </span>
                      )}
                      <p className="font-bold text-sm text-slate-900">{plan.name}</p>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">{plan.tagline}</p>
                      <p className="text-base font-extrabold text-blue-600 mt-3">
                        {formatRupiah(plan.price)}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 3: Pilih Add-ons (Fitur Tambahan) */}
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                    3
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Fitur Tambahan Opsional (Add-ons)
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mb-4 ml-9.5">
                  Pilih fitur yang ingin Anda tambahkan sesuai kebutuhan usaha Anda:
                </p>

                <div className="space-y-2.5">
                  {siteConfig.addOns.map((addon) => {
                    const isChecked = selectedAddOns.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => handleToggleAddOn(addon.id)}
                        className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                          isChecked
                            ? 'border-emerald-500 bg-emerald-50/50 text-slate-900'
                            : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                              isChecked
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-slate-900">{addon.name}</p>
                            <p className="text-[11px] sm:text-xs text-slate-500">{addon.description}</p>
                          </div>
                        </div>

                        <span className="text-xs sm:text-sm font-extrabold text-slate-800 shrink-0 ml-3">
                          +{formatRupiah(addon.price)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 4: Informasi Pemesan */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                    4
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Data Kontak & Usaha Anda
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Nama Pemilik */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Pemilik Usaha *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleChange}
                        placeholder="Contoh: Hendra Setiawan"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 ${
                          formErrors.ownerName
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-200 focus:ring-blue-200 focus:border-blue-600'
                        }`}
                      />
                    </div>
                    {formErrors.ownerName && (
                      <p className="text-[11px] text-rose-500 mt-1">{formErrors.ownerName}</p>
                    )}
                  </div>

                  {/* Nama Usaha */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Usaha / Toko *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Contoh: Kopi Senja Nusantara"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 ${
                          formErrors.businessName
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-200 focus:ring-blue-200 focus:border-blue-600'
                        }`}
                      />
                    </div>
                    {formErrors.businessName && (
                      <p className="text-[11px] text-rose-500 mt-1">{formErrors.businessName}</p>
                    )}
                  </div>

                  {/* Nomor WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nomor WhatsApp Aktif *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="Contoh: 081234567890"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 ${
                          formErrors.whatsapp
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-200 focus:ring-blue-200 focus:border-blue-600'
                        }`}
                      />
                    </div>
                    {formErrors.whatsapp && (
                      <p className="text-[11px] text-rose-500 mt-1">{formErrors.whatsapp}</p>
                    )}
                  </div>

                  {/* Kota */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Kota / Lokasi Usaha
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Contoh: Bandung, Jawa Barat"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-200 focus:border-blue-600"
                      />
                    </div>
                  </div>

                </div>

                {/* Catatan Kebutuhan */}
                <div className="mt-4">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Catatan Khusus / Permintaan Fitur (Opsional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="2"
                    placeholder="Contoh: Ingin ada tombol langsung ke GrabFood dan Google Maps..."
                    className="w-full p-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-200 focus:border-blue-600"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Order Summary & Sticky CTA (4 Cols) */}
            <div className="lg:col-span-4 bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800">
                  <ShoppingBag className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-base font-bold text-white">Ringkasan Pesanan</h4>
                </div>

                {/* Selected Plan Details */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Paket Terpilih
                    </span>
                    <div className="flex justify-between items-baseline mt-1">
                      <span className="text-sm font-bold text-white">{currentPlan.name}</span>
                      <span className="text-sm font-semibold text-slate-300">
                        {formatRupiah(currentPlan.price)}
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-400 block mt-0.5">
                      Estimasi jadi: {currentPlan.turnaround}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Kategori Bisnis
                    </span>
                    <span className="text-xs font-medium text-slate-300 block mt-0.5">
                      {currentCategory.label}
                    </span>
                  </div>

                  {/* Add-ons List */}
                  {selectedAddOns.length > 0 && (
                    <div className="pt-3 border-t border-slate-800">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                        Add-ons Terpilih:
                      </span>
                      <div className="space-y-1.5">
                        {selectedAddOns.map((id) => {
                          const item = siteConfig.addOns.find((a) => a.id === id);
                          if (!item) return null;
                          return (
                            <div key={id} className="flex justify-between text-xs text-slate-300">
                              <span className="truncate pr-2">• {item.name}</span>
                              <span className="shrink-0">+{formatRupiah(item.price)}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Total Price Display */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                  <span className="text-xs text-slate-400 block font-medium">Estimasi Total Biaya:</span>
                  <div className="text-3xl font-black text-emerald-400 mt-1 tracking-tight">
                    {formatRupiah(grandTotal)}
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    *Bayar sekali untuk 1 tahun penuh, tanpa biaya bulanan.
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl text-base font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/40 hover:shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer transform active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  <span>Kirim Pesanan ke WhatsApp</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center mt-3 leading-relaxed">
                  🔒 Data Anda aman. Mengklik tombol di atas akan langsung membuka chat WhatsApp dengan admin resmi Prasodi.
                </p>
              </div>

            </div>

          </form>
        </div>

      </div>

      {/* Success Notification Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h4 className="text-xl font-extrabold text-slate-900">
              Membuka Chat WhatsApp...
            </h4>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              Detail pesanan website untuk <strong className="text-slate-800">{formData.businessName || 'usaha Anda'}</strong> telah kami susun rapi. Silakan kirimkan chat tersebut di WhatsApp agar admin Prasodi dapat langsung memprosesnya.
            </p>

            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              Baik, Mengerti!
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
