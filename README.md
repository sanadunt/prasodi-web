# 🚀 Prasodi - Platform Website Spesialis UMKM

Website resmi **PT. Prana Solusi Digital (prasodi.com)** hasil revamp modern yang dirancang khusus untuk membantu pelaku **Usaha Mikro, Kecil, dan Menengah (UMKM)** di Indonesia memiliki website profesional siap jualan via WhatsApp.

---

## ✨ Fitur Unggulan

1. **Kalkulator Biaya & Generator Pesanan WhatsApp Interaktif:**
   - Calon klien memilih kategori usaha, paket website, dan fitur tambahan (add-ons).
   - Menghitung total biaya secara real-time.
   - Sekali klik, langsung menyusun pesan pemesanan terstruktur dan membuka chat WhatsApp admin Prasodi.
2. **Katalog Paket Harga Transparan:**
   - Paket Starter (Rp 349.000)
   - Paket Katalog WA (Rp 799.000)
   - Paket Custom Bisnis (Rp 1.750.000)
3. **Showcase Demo Industri:**
   - Preview desain untuk F&B / Kuliner, Fashion & Olshop, serta Jasa / Bengkel.
4. **Mobile-First & Ultra Fast:**
   - Dibangun dengan Vite + React + Tailwind CSS v4, loading di bawah 1 detik.
5. **Siap Deploy ke Hostinger:**
   - Output statis murni (`dist/`) lengkap dengan file `.htaccess` bawaan untuk server LiteSpeed/Apache Hostinger.

---

## 🛠️ Panduan Menjalankan di Lokal (Development)

### 1. Prasyarat
Pastikan sudah terinstal **Node.js** (v18 ke atas) dan **npm**.

### 2. Jalankan Server Lokal
```bash
# Masuk ke direktori
cd prasodi-web

# Install dependencies
npm install

# Jalankan server development
npm run dev
```
Buka browser di `http://localhost:5173`.

### 3. Build untuk Produksi
```bash
npm run build
```
Hasil build siap upload akan tersimpan di dalam folder `dist/`.

---

## ⚙️ Cara Mengubah Nomor WhatsApp & Paket Harga

Cukup buka file:
📁 `src/config/siteConfig.js`

Di file tersebut Anda dapat dengan mudah mengganti:
* **Nomor WhatsApp Admin:** Ubah nilai `whatsappNumber` (contoh: `6282112345678`)
* **Email Resmi:** Ubah nilai `email`
* **Harga & Fasilitas Paket:** Ubah nilai `pricingPlans`
* **Fitur Tambahan (Add-ons):** Ubah nilai `addOns`
* **Testimoni & FAQ:** Ubah langsung teksnya sesuai data bisnis Anda

---

## 🌐 3 Cara Mudah Deploy ke Hostinger

### Opsi 1: Upload via File Manager Hostinger (Paling Cepat & Mudah)
1. Jalankan `npm run build` di terminal lokal Anda.
2. Masuk ke **hPanel Hostinger** &rarr; buka **File Manager** domain `prasodi.com`.
3. Buka folder `public_html`.
4. Hapus file template lama.
5. Upload seluruh isi folder `dist/` (termasuk file `.htaccess`, `index.html`, dan folder `assets`) langsung ke dalam `public_html`.
6. Website baru Anda langsung aktif!

### Opsi 2: Hostinger Git Deployment (via hPanel)
1. Di hPanel Hostinger, cari menu **Git**.
2. Masukkan URL repository GitHub ini: `https://github.com/sanadunt/prasodi-web`.
3. Pilih branch `main`.
4. Jika menggunakan opsi ini, arahkan direktori deployment ke folder `public_html`.

### Opsi 3: Auto Deploy via GitHub Actions
Jika ingin website otomatis ter-update setiap kali Anda melakukan `git push`:
1. Buka repository GitHub &rarr; **Settings** &rarr; **Secrets and variables** &rarr; **Actions**.
2. Tambahkan 3 Secret:
   * `HOSTINGER_FTP_SERVER` (contoh: `ftp.prasodi.com` atau IP server Hostinger)
   * `HOSTINGER_FTP_USERNAME` (username akun FTP dari hPanel)
   * `HOSTINGER_FTP_PASSWORD` (password akun FTP)
3. Setiap ada commit baru ke branch `main`, GitHub Actions akan otomatis melakukan build dan mengunggahnya ke Hostinger!

---

## 📄 Hak Cipta
© 2026 PT. Prana Solusi Digital. All rights reserved.
