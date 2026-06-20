# Changelog

Semua perubahan penting pada proyek ini dicatat di file ini.

Format mengacu pada [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Fixed
- **Navigator Soal menutupi layar penuh di HP tanpa cara menutupnya.** Sebelumnya panel Navigator Soal (grid lompat-ke-nomor) default terbuka (`sidebarOpen = true`), sehingga begitu tes dimulai di layar HP, panel ini langsung menutupi seluruh konten soal tanpa ada centang/tombol yang jelas untuk menutupnya. Diperbaiki dengan tiga cara:
  1. Panel kini default tertutup (`sidebarOpen = false`) di semua ukuran layar; pengguna membukanya lewat tombol ☰ di header.
  2. Ditambahkan backdrop gelap di belakang panel saat terbuka di mobile — tap di luar area panel akan menutupnya.
  3. Tombol close diperjelas dengan label teks "Tutup" di samping ikon X, bukan ikon kecil saja yang mudah terlewat.

### Fixed
- Judul tab browser (`<title>`) masih menampilkan template default `"My Google AI Studio App"` setelah di-deploy. Diganti menjadi `"Tes IQ Profesional - 100 Soal Gratis"`, sekaligus ditambahkan `meta description` dan `lang="id"` pada `index.html`.

## [1.0.0] - 2026-06-20

### Fixed
- **Soal #33** (Logika Verbal) memiliki 5 opsi jawaban (`Meja, Sofa, Kursi, Lemari, Kompor`), tidak konsisten dengan format pilihan ganda 4 opsi di seluruh soal lainnya. Opsi `Lemari` dihapus sehingga soal kembali konsisten 4 opsi (A–D), dan `correctAnswerIndex` disesuaikan.
- **Soal #43** (Logika Verbal) memiliki 5 opsi jawaban (`Elang, Garuda, Merpati, Singa, Kelelawar`) dengan `correctAnswerIndex` di luar pola 4 opsi. Opsi `Kelelawar` dihapus karena ambigu (mamalia yang bisa terbang) agar jawaban "Singa" sebagai satu-satunya mamalia non-terbang lebih jelas, dan soal kembali 4 opsi.
- Class Tailwind CSS yang rusak (`hover:from-cyan-45 *` — mengandung karakter tidak valid) pada tombol **"Kirim & Lihat Hasil"** di `QuizView.tsx` dan tombol **"Ulangi Tes Baru"** di `ResultDashboard.tsx`. Diperbaiki menjadi `hover:from-cyan-450 hover:to-blue-550` agar efek hover gradient berfungsi seperti tombol lainnya.

### Removed
- Dependency yang tidak digunakan di mana pun dalam kode: `@google/genai`, `express`, `dotenv`, `motion`, `@types/express`. Aplikasi ini sepenuhnya client-side dan tidak pernah memanggil API eksternal apa pun.
- File `.env.example` dan referensi `GEMINI_API_KEY` — tidak relevan karena tidak ada pemanggilan Gemini API di kode.
- `majorCapabilities` (Gemini API) di `metadata.json`, lalu file `metadata.json` itu sendiri dihapus karena spesifik untuk platform Google AI Studio dan tidak dipakai oleh build standar Vite/npm.
- Folder `assets/.aistudio/` — artefak internal Google AI Studio yang tidak diperlukan di luar platform tersebut.

### Changed
- `package.json`: nama paket diganti dari `react-example` menjadi `tes-iq-profesional`, versi awal disetel ke `1.0.0`.
- `README.md` ditulis ulang agar relevan dengan proyek ini (sebelumnya masih template default AI Studio yang mereferensikan Gemini API).
- `.gitignore` dirapikan: menghapus referensi ke `.env.example` yang sudah dihapus, menambahkan `.vscode/` dan `.idea/`.

### Verified
- `npm install` bersih tanpa error (213 → 84 packages setelah pembersihan dependency).
- `tsc --noEmit` (type check) lolos tanpa error.
- `npm run build` (Vite production build) sukses tanpa error maupun warning.
- Validasi struktural otomatis terhadap seluruh 100 soal: ID unik 1–100, setiap soal memiliki tepat 4 opsi, `correctAnswerIndex` berada dalam rentang 0–3, tidak ada opsi duplikat dalam satu soal, tidak ada teks soal duplikat, kategori dan tingkat kesulitan valid. Hasil: 0 error.
