# Deploy ke GitHub Pages

Panduan lengkap untuk deploy website link-in-bio Anda ke GitHub Pages.

## Langkah 1: Buat Repository di GitHub

1. Buka [github.com](https://github.com) dan login ke akun Anda
2. Klik tombol **"New"** untuk membuat repository baru
3. Beri nama repository: **`samuel-link-in-bio`** (atau nama lain sesuai preferensi)
4. Pilih **Public** agar website bisa diakses publik
5. Jangan centang "Initialize this repository with a README"
6. Klik **"Create repository"**

## Langkah 2: Setup Git Lokal (Opsional - Jika belum pernah setup)

Jika Anda belum pernah setup Git di komputer, jalankan perintah ini di terminal:

```bash
git config --global user.name "Samuel Musa Adinata"
git config --global user.email "musaadinata5@gmail.com"
```

## Langkah 3: Push Project ke GitHub

Di folder project `samuel-link-in-bio`, jalankan perintah-perintah berikut:

```bash
# Inisialisasi Git repository
git init

# Tambahkan semua file
git add .

# Commit dengan pesan
git commit -m "Initial commit: Link in Bio website"

# Tambahkan remote repository (ganti USERNAME dengan username GitHub Anda)
git remote add origin https://github.com/USERNAME/samuel-link-in-bio.git

# Push ke GitHub (branch main)
git branch -M main
git push -u origin main
```

## Langkah 4: Konfigurasi GitHub Pages

1. Buka repository Anda di GitHub
2. Klik tab **"Settings"**
3. Pilih menu **"Pages"** di sidebar kiri
4. Di bagian **"Build and deployment"**:
   - Pilih **"Deploy from a branch"** di Source
   - Pilih branch **"main"** dan folder **"/ (root)"**
5. Klik **"Save"**

## Langkah 5: Update Vite Config (Penting!)

Jika repository Anda bukan `USERNAME.github.io`, Anda perlu update `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/samuel-link-in-bio/', // Ganti dengan nama repository Anda
})
```

Setelah update, jalankan:
```bash
npm run build
git add .
git commit -m "Update base path for GitHub Pages"
git push
```

## Langkah 6: Tunggu Deploy Selesai

1. Di repository GitHub, klik tab **"Actions"**
2. Tunggu workflow selesai (biasanya 1-2 menit)
3. Kembali ke **"Settings"** → **"Pages"**
4. Anda akan melihat URL website Anda, contoh: `https://USERNAME.github.io/samuel-link-in-bio/`

## Akses Website Anda

Website Anda sekarang live di URL GitHub Pages! Anda bisa share link ini di bio Instagram atau platform lain.

## Troubleshooting

### Website tidak muncul atau error 404
- Pastikan `base` di `vite.config.js` sesuai dengan nama repository
- Pastikan file sudah di-build (folder `dist` ada)
- Tunggu beberapa menit dan refresh halaman

### Ingin menggunakan domain custom
1. Di Settings → Pages, bagian "Custom domain"
2. Masukkan domain Anda (contoh: `samuel.com`)
3. Update DNS records sesuai petunjuk GitHub

## Update Website di Masa Depan

Setiap kali Anda ingin update website:

```bash
# Edit file sesuai kebutuhan
# Kemudian:

npm run build
git add .
git commit -m "Update: deskripsi perubahan"
git push
```

Website akan otomatis ter-update dalam beberapa menit!

---

**Selamat! Website link-in-bio Anda sudah siap di GitHub Pages!** 🎉
