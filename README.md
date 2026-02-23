# Samuel Musa Adinata - Link in Bio

Website link-in-bio profesional dan modern yang menampilkan semua link sosial media dengan fitur unik: tombol terkunci yang memerlukan verifikasi sandi.

## 🎯 Fitur Utama

- **Desain Profesional & Modern**: Interface yang minimalis dengan gradient warna yang elegan
- **Link Aktif**: 9 link sosial media yang langsung membuka platform
  - Instagram, Threads, Interpals, GitHub, Quora, LinkedIn, YouTube, Pinterest, Email
- **Tombol Terkunci**: 9 tombol yang terkunci dengan sistem verifikasi sandi
  - Patreon, Reddit, X (Twitter), WhatsApp, Telegram, Discord, YouTube 2, Microsoft Teams, Tor Barker
- **Modal Dialog**: Popup yang menarik saat tombol terkunci diklik
- **Sandi Selalu Salah**: Semua password yang diinput akan ditolak (sesuai konsep Anda)
- **Animasi Smooth**: Menggunakan Framer Motion untuk transisi yang halus
- **Responsive Design**: Optimal di desktop, tablet, dan mobile
- **Gradient Backgrounds**: Tema gelap profesional dengan accent colors yang menarik

## 🛠️ Tech Stack

- **React 19** - UI Framework
- **Vite** - Build tool yang cepat
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Instalasi & Setup

### Prerequisites
- Node.js 16+ dan npm

### Langkah-langkah

1. **Clone atau download project ini**
   ```bash
   git clone https://github.com/USERNAME/samuel-link-in-bio.git
   cd samuel-link-in-bio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:5173](http://localhost:5173) di browser

4. **Build untuk production**
   ```bash
   npm run build
   ```
   Output akan ada di folder `dist/`

## 🚀 Deploy ke GitHub Pages

Lihat file `GITHUB_PAGES_SETUP.md` untuk panduan lengkap deployment ke GitHub Pages.

**Ringkas:**
1. Buat repository di GitHub
2. Push project ke GitHub
3. Enable GitHub Pages di Settings
4. Update `base` di `vite.config.js` jika perlu
5. Website live dalam beberapa menit!

## 📝 Customization

### Mengubah Link Sosial Media

Edit file `src/App.jsx`, bagian `links` array:

```javascript
const links = [
  { 
    id: 'instagram', 
    name: 'Instagram', 
    url: 'https://www.instagram.com/samuel.musa.adinata.5/', 
    locked: false, 
    icon: '📷' 
  },
  // ... link lainnya
];
```

### Mengubah Nama & Deskripsi

Di `src/App.jsx`, ubah:
```javascript
<h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
  Samuel Musa Adinata
</h1>
<p className="text-gray-400 text-sm tracking-widest uppercase">Digital Creator</p>
```

### Mengubah Warna & Tema

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#1a1a2e',
      secondary: '#16213e',
      accent: '#0f3460',
      highlight: '#e94560',
    },
  },
},
```

### Mengubah Pesan Modal Terkunci

Di `src/App.jsx`, cari bagian modal dan ubah teks:
```javascript
<p className="text-gray-300 text-sm mb-6">
  This link requires authorization. Please enter the access code.
</p>
```

## 📱 Responsive Breakpoints

Website ini responsif di:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## 🔐 Fitur Keamanan

- Semua password selalu ditolak (by design)
- Tidak ada data yang disimpan atau dikirim ke server
- Pure frontend - tidak memerlukan backend

## 📄 File Structure

```
samuel-link-in-bio/
├── src/
│   ├── App.jsx          # Main component
│   ├── App.css          # App styles
│   ├── index.css        # Global styles & Tailwind
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── package.json         # Dependencies
└── README.md            # Dokumentasi ini
```

## 🎨 Color Palette

- **Primary Dark**: `#1a1a2e`
- **Secondary Dark**: `#16213e`
- **Accent Blue**: `#0f3460`
- **Highlight Red**: `#e94560`
- **Text Light**: `#e0e0e0`
- **Text Gray**: `#808080`

## 🚦 Development Commands

```bash
# Jalankan dev server
npm run dev

# Build untuk production
npm run build

# Preview build
npm run preview

# Lint code
npm run lint
```

## 📞 Support & Questions

Jika ada pertanyaan atau ingin customize lebih lanjut, silakan hubungi:
- **Email**: musaadinata5@gmail.com
- **Instagram**: [@samuel.musa.adinata.5](https://www.instagram.com/samuel.musa.adinata.5/)

## 📜 License

Bebas digunakan untuk keperluan pribadi dan komersial.

---

**Samuel Musa Adinata**

Terakhir diupdate: Februari 2026
