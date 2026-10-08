// Konfigurasi Terpusat Website Prasodi
// Anda dapat mengubah nomor WhatsApp, email, dan harga paket langsung dari file ini.

export const siteConfig = {
  brandName: "Prasodi",
  companyName: "PT. Prana Solusi Digital",
  tagline: "Spesialis Jasa Pembuatan Website UMKM Siap Jualan",
  
  // Kontak Resmi (Ubah nomor WA di bawah ini)
  whatsappNumber: "6282112345678", // Format 628xxx tanpa tanda + atau spasi
  whatsappDisplay: "+62 821-1234-5678",
  email: "marketing@prasodi.com",
  operationalHours: "Senin - Sabtu: 09.00 - 18.00 WIB",
  location: "Jakarta & Layanan Seluruh Indonesia",
  
  // Paket Layanan
  pricingPlans: [
    {
      id: "starter",
      name: "Paket Starter",
      tagline: "Cocok untuk UMKM pemula & profil usaha",
      price: 349000,
      originalPrice: 500000,
      turnaround: "2 - 3 Hari Kerja",
      badge: "Paling Hemat",
      isPopular: false,
      features: [
        "1 Halaman Landing Page Responsif (Pas di HP)",
        "Tombol Order Langsung ke Chat WhatsApp",
        "Integrasi Lokasi Google Maps & Alamat",
        "Galeri Foto Produk / Layanan (sd. 8 Foto)",
        "Gratis Subdomain Bisnis / Setup Domain",
        "Hosting Cepat Aktif 1 Tahun",
        "Garansi Revisi Desain 2x",
        "Bantuan Setup Akun Google Bisnisku"
      ],
      idealFor: "Warung makan, salon, laundry, bengkel, freelance, & jasa lokal"
    },
    {
      id: "katalog",
      name: "Paket Katalog WA",
      tagline: "Pilihan favorit untuk jualan produk & toko online",
      price: 799000,
      originalPrice: 1200000,
      turnaround: "3 - 5 Hari Kerja",
      badge: "Paling Laris 🔥",
      isPopular: true,
      features: [
        "Semua fitur di Paket Starter",
        "Katalog Produk Interaktif (sd. 30 Produk)",
        "Keranjang Belanja Ringkas & Cepat",
        "Checkout Otomatis Kirim Rekap Order ke WA",
        "Filter Kategori & Pencarian Produk",
        "Gratis Domain .my.id / .com 1 Tahun*",
        "Gratis Setup SSL (Gembok Hijau Aman)",
        "Panduan & Video Tutorial Tambah Produk Sendiri",
        "Garansi Revisi Desain 4x"
      ],
      idealFor: "Fashion, kuliner frozen food, skincare, kerajinan, & toko retail"
    },
    {
      id: "bisnis",
      name: "Paket Custom Bisnis",
      tagline: "Solusi lengkap untuk brand berkembang & fitur khusus",
      price: 1750000,
      originalPrice: 2500000,
      turnaround: "5 - 7 Hari Kerja",
      badge: "Fitur Lengkap",
      isPopular: false,
      features: [
        "Semua fitur di Paket Katalog",
        "Multi-Halaman (Home, Tentang, Menu/Produk, Blog, Kontak)",
        "Katalog Produk Tanpa Batas Kuota",
        "Integrasi Pembayaran Otomatis QRIS / Transfer Bank",
        "Formulir Booking / Reservasi Jadwal Khusus",
        "Gratis Domain .com Resmi 1 Tahun Penuh",
        "Optimasi SEO Lokal & Google Search",
        "Prioritas Support Teknis 1 Tahun",
        "Garansi Maintenance & Backup Berkala"
      ],
      idealFor: "Restoran besar, klinik, agensi, toko grosir, & brand mandiri"
    }
  ],

  // Kategori Usaha untuk Kalkulator
  businessCategories: [
    { id: "fnb", label: "Kuliner / F&B / Kafe", icon: "UtensilsCrossed" },
    { id: "fashion", label: "Fashion / Butik / Olshop", icon: "Shirt" },
    { id: "services", label: "Jasa / Bengkel / Salon", icon: "Wrench" },
    { id: "grosir", label: "Grosir / Distributor / Suplier", icon: "Boxes" },
    { id: "properti", label: "Properti / Kos-kosan", icon: "Home" },
    { id: "lainnya", label: "Kategori Bisnis Lainnya", icon: "Briefcase" }
  ],

  // Fitur Tambahan (Add-ons)
  addOns: [
    {
      id: "domain_com",
      name: "Upgrade Domain .com Resmi",
      description: "Nama website lebih prestisius (contoh: tokosaya.com)",
      price: 150000
    },
    {
      id: "logo_design",
      name: "Jasa Pembuatan Logo Usaha",
      description: "Desain logo menarik & file master resolusi tinggi",
      price: 150000
    },
    {
      id: "copywriting",
      name: "Bantu Penulisan Kata-Kata Promosi",
      description: "Kami yang tuliskan teks promosi menarik & menjual",
      price: 100000
    },
    {
      id: "qris_payment",
      name: "Integrasi Pembayaran QRIS Dinamis",
      description: "Pelanggan bisa langsung scan QRIS dari semua e-wallet & m-banking",
      price: 200000
    },
    {
      id: "extra_products",
      name: "Bantu Input 20 Produk Tambahan",
      description: "Cocok jika Anda punya banyak varian barang dan tidak sempat input",
      price: 100000
    }
  ],

  // Live Demo Templates
  demoTemplates: [
    {
      category: "fnb",
      categoryName: "Kuliner & Kafe",
      title: "Kedai Kopi & Restoran 'Aroma Nusantara'",
      description: "Website dengan menu digital QR Code, foto makanan menggugah selera, dan tombol pesan antar ke WhatsApp.",
      tags: ["Menu Digital", "QR Code Resto", "Pesan WA"],
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80",
      features: ["Katalog makanan & minuman", "Status buka/tutup resto", "Peta petunjuk arah Google Maps"]
    },
    {
      category: "fashion",
      categoryName: "Fashion & Retail",
      title: "Butik Pakaian 'Hijab & Outfit Clarissa'",
      description: "Katalog baju lengkap dengan pilihan varian warna, ukuran S/M/L, dan keranjang belanja otomatis ke WA.",
      tags: ["Katalog Baju", "Pilih Ukuran", "Cart ke WA"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80",
      features: ["Filter kategori produk", "Badge diskon promo", "Format order otomatis berisi nama & ukuran"]
    },
    {
      category: "services",
      categoryName: "Jasa & Layanan",
      title: "Bengkel & Salon Mobil 'AutoKinclong'",
      description: "Halaman penawaran paket servis, pricelist transparan, galeri hasil kerja, dan form booking jadwal perawatan.",
      tags: ["Pricelist Jasa", "Booking Jadwal", "Before-After"],
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=700&q=80",
      features: ["Daftar paket harga servis", "Testimoni pelanggan", "Tombol konsultasi keluhan gratis"]
    }
  ],

  // Testimoni Nyata UMKM
  testimonials: [
    {
      name: "Bambang Sutrisno",
      business: "Kopi Senja Nusantara",
      city: "Bandung",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      quote: "Awalnya bingung jualan cuma lewat Instagram sepi, sekarang punya website sendiri dari Prasodi. Pelanggan tinggal klik link di bio, pilih menu, langsung masuk rekapnya ke WA saya. Omzet naik hampir 40%!",
      rating: 5,
      package: "Paket Katalog WA"
    },
    {
      name: "Dewi Lestari",
      business: "Zahra Hijab & Fashion",
      city: "Solo",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      quote: "Pelayanannya ramah banget untuk orang awam kayak saya yang gaptek. Dikasih video cara ganti harga barang, dan kalau bingung tim Prasodi siap bantu lewat chat. Sangat recommended buat UMKM!",
      rating: 5,
      package: "Paket Katalog WA"
    },
    {
      name: "Hendra Wijaya",
      business: "Berkah Jaya AC & Service",
      city: "Bekasi",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      quote: "Bikin website di Prasodi cuma butuh waktu 3 hari udah kelar dan langsung tayang di Google. Sekarang orang di sekitar Bekasi yang cari service AC langsung nemu nomor bengkel saya.",
      rating: 5,
      package: "Paket Starter"
    }
  ],

  // FAQ
  faqs: [
    {
      question: "Apakah saya harus mengerti koding atau teknis komputer?",
      answer: "Sama sekali tidak! Tim Prasodi yang mengerjakan seluruh proses dari awal: mulai dari setting domain, hosting, desain tampilan, hingga menghubungkan tombol order ke WhatsApp Anda. Anda hanya perlu menyiapkan foto produk dan informasi usaha."
    },
    {
      question: "Berapa lama website saya selesai dan siap dipakai?",
      answer: "Untuk Paket Starter selesai dalam 2–3 hari kerja. Paket Katalog membutuhkan waktu 3–5 hari kerja terhitung setelah materi foto dan teks usaha Anda kami terima."
    },
    {
      question: "Bagaimana cara menerima pesanan dari pengunjung website?",
      answer: "Website yang kami buat dilengkapi tombol 'Order via WhatsApp'. Ketika pengunjung memilih produk atau ingin konsultasi, sistem website otomatis menyusun format pesan rapi (nama produk, harga, data pembeli) dan mengirimkannya langsung ke chat WhatsApp bisnis Anda."
    },
    {
      question: "Apakah ada biaya perpanjangan tahun berikutnya?",
      answer: "Ada, namun sangat terjangkau. Biaya perpanjangan tahunan hanya untuk domain dan sewa server hosting (mulai Rp 199.000/tahun). Tidak ada biaya tersembunyi lainnya."
    },
    {
      question: "Bagaimana jika nanti saya mau ganti harga atau menambah foto baru?",
      answer: "Kami sediakan panduan video singkat dan mudah untuk update sendiri. Selain itu, Anda juga tetap mendapatkan bantuan konsultasi gratis dari tim support Prasodi jika membutuhkan bantuan."
    },
    {
      question: "Apakah bisa dibantu buatkan materi jika saya belum punya logo atau foto bagus?",
      answer: "Tentu bisa! Kami menyediakan opsi add-on desain logo dan bantuan copywriting (penulisan teks promosi) agar tampilan website Anda terlihat sangat profesional."
    }
  ]
};
