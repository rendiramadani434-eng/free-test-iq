# Tes IQ Profesional

Platform tes IQ interaktif berbasis web dengan 100 soal pilihan ganda, mencakup 4 kategori: Logika Numerik, Logika Verbal, Penalaran Analitis, dan Pola & Deret.

Aplikasi ini sepenuhnya berjalan di sisi klien (client-side) — tidak memerlukan server atau API key. Hasil tes dan riwayat disimpan secara lokal di browser pengguna (localStorage).

## Fitur

- 100 soal pilihan ganda dalam 4 kategori, dengan tingkat kesulitan mudah/sedang/sulit
- Pengacakan urutan soal & opsi jawaban (Fisher-Yates shuffle)
- Timer 60 menit dengan auto-submit
- Navigator soal untuk lompat antar nomor
- Dashboard hasil dengan kurva distribusi IQ (bell curve) dan breakdown skor per kategori
- Riwayat tes tersimpan otomatis di browser
- Mode gelap/terang

## Menjalankan Secara Lokal

**Prasyarat:** Node.js (versi 18 ke atas disarankan)

1. Install dependencies:
   ```
   npm install
   ```
2. Jalankan development server:
   ```
   npm run dev
   ```
3. Buka `http://localhost:3000` di browser

## Build untuk Produksi

```
npm run build
```

Hasil build statis akan tersedia di folder `dist/`, siap untuk di-deploy ke layanan hosting statis seperti Vercel, Netlify, atau GitHub Pages.

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- lucide-react (ikon)
