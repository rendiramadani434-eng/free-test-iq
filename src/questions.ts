import { Question } from './types';

export const questions: Question[] = [
  // ==================== LOGIKA NUMERIK (1 - 25) ====================
  {
    id: 1,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Tentukan angka berikutnya dalam barisan: 2, 4, 8, 16, ...',
    options: ['24', '30', '32', '36'],
    correctAnswerIndex: 2,
    difficulty: 'mudah',
    explanation: 'Setiap suku dikalikan dengan 2: 16 * 2 = 32.'
  },
  {
    id: 2,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Tentukan suku berikutnya dalam barisan: 5, 10, 20, 40, ...',
    options: ['50', '60', '80', '100'],
    correctAnswerIndex: 2,
    difficulty: 'mudah',
    explanation: 'Rasio setiap bilangan berturut-turut adalah dikali 2. Bilangan berikutnya adalah 40 * 2 = 80.'
  },
  {
    id: 3,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Berapakah kelanjutan dari pola: 3, 5, 9, 17, 33, ...',
    options: ['48', '56', '65', '67'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Pola selisih antar angkanya adalah +2, +4, +8, +16, selanjutnya +32. Jadi 33 + 32 = 65.'
  },
  {
    id: 4,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Jika 1 = 1, 2 = 4, 3 = 9, 4 = 16, berapakah kelanjutan pola untuk nilai 6?',
    options: ['25', '30', '36', '42'],
    correctAnswerIndex: 2,
    difficulty: 'mudah',
    explanation: 'Polanya adalah pengkuadratan n^2. Untuk n = 6, nilainya adalah 6^2 = 36.'
  },
  {
    id: 5,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Tentukan angka berikutnya dalam barisan Fibonacci: 1, 1, 2, 3, 5, 8, 13, ...',
    options: ['17', '21', '24', '26'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Setiap suku diperoleh dengan menjumlahkan dua suku sebelumnya: 8 + 13 = 21.'
  },
  {
    id: 6,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Carilah suku kelima dari barisan: 100, 95, 85, 70, ...',
    options: ['60', '55', '50', '45'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Pola berkurang bertahap: -5, -10, -15, maka berikutnya berkurang -20. Jadi, 70 - 20 = 50.'
  },
  {
    id: 7,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Bilangan prima setelah 13 adalah ...',
    options: ['15', '17', '19', '21'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Bilangan prima adalah bilangan yang hanya habis dibagi 1 dan dirinya sendiri. Setelah 13 adalah 17.'
  },
  {
    id: 8,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Sebuah toko menjual baju seharga Rp 200.000 dengan diskon ganda berturut-turut 25% lalu diskon tambahan 10% dari sisa harga tersebut. Berapakah harga akhir yang harus dibayarkan?',
    options: ['Rp 130.000', 'Rp 135.000', 'Rp 140.000', 'Rp 150.000'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Harga setelah diskon pertama: Rp 200.000 * 0.75 = Rp 150.000. Harga setelah diskon kedua: Rp 150.000 * 0.90 = Rp 135.000.'
  },
  {
    id: 9,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Jika 5 mesin dapat memproduksi 5 boneka dalam waktu 5 menit, berapa menit yang dibutuhkan oleh 100 mesin untuk memproduksi 100 boneka?',
    options: ['5 menit', '20 menit', '50 menit', '100 menit'],
    correctAnswerIndex: 0,
    difficulty: 'sedang',
    explanation: 'Kecepatan produksi tetap. 1 mesin memakan waktu 5 menit untuk membuat 1 boneka. Maka 100 mesin yang bekerja serentak juga memerlukan waktu 5 menit untuk menghasilkan 100 boneka.'
  },
  {
    id: 10,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Jika x + y = 15 dan x * y = 50, tentukan nilai dari x^2 + y^2.',
    options: ['100', '125', '150', '225'],
    correctAnswerIndex: 1,
    difficulty: 'sulit',
    explanation: 'Menggunakan rumus perluasan: x^2 + y^2 = (x+y)^2 - 2xy = 15^2 - 2(50) = 225 - 100 = 125.'
  },
  {
    id: 11,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Suku berikutnya dari barisan bilangan segitiga: 1, 3, 6, 10, 15, 21, ... adalah...',
    options: ['25', '26', '28', '35'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Polanya adalah menambahkan bilangan asli berturut-turut: +2, +3, +4, +5, +6, kemudian +7. Sehingga 21 + 7 = 28.'
  },
  {
    id: 12,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Jika suatu lingkaran memiliki luas sebesar 154 cm² (dengan asumi π = 22/7), berapakah keliling lingkaran tersebut?',
    options: ['22 cm', '44 cm', '66 cm', '88 cm'],
    correctAnswerIndex: 1,
    difficulty: 'sulit',
    explanation: 'Luas = π*r^2 => 154 = (22/7)*r^2 => r^2 = 49 => r = 7 cm. Keliling = 2*π*r = 2 * (22/7) * 7 = 44 cm.'
  },
  {
    id: 13,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Umur Ayah sekarang 3 kali umur Budi. Lima tahun yang lalu, umur Ayah adalah 4 kali umur Budi. Berapakah umur Ayah sekarang?',
    options: ['35 tahun', '40 tahun', '45 tahun', '50 tahun'],
    correctAnswerIndex: 2,
    difficulty: 'sulit',
    explanation: 'Misalkan Ayah = A, Budi = B. A = 3B dan A - 5 = 4(B - 5). Substitusi: 3B - 5 = 4B - 20 => B = 15. Maka umur Ayah (A) = 3 * 15 = 45 tahun.'
  },
  {
    id: 14,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Tentukan suku ketujuh dari barisan bilangan berikut: 2, 5, 11, 23, 47, ...',
    options: ['95', '96', '191', '195'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Polanya adalah 2 * Un + 1. Suku ke-6 = 47 * 2 + 1 = 95. Suku ke-7 = 95 * 2 + 1 = 191.'
  },
  {
    id: 15,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Tentukan bilangan berikutnya: 13, 16, 22, 31, 43, ...',
    options: ['52', '55', '58', '60'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Pola selisih bertambah dengan kelipatan 3: +3, +6, +9, +12, maka berikutnya adalah +15. Sehingga 43 + 15 = 58.'
  },
  {
    id: 16,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Sebuah mobil bergerak dengan kecepatan rata-rata konstan menempuh jarak 120 km dalam waktu 1 jam 30 menit. Berapakah kecepatan mobil tersebut dalam km/jam?',
    options: ['60 km/jam', '80 km/jam', '90 km/jam', '100 km/jam'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Waktu = 1,5 jam. Kecepatan = Jarak / Waktu = 120 / 1,5 = 80 km/jam.'
  },
  {
    id: 17,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Ibu membeli 3 kg telur seharga Rp 75.000. Jika Ibu ingin membeli 7 kg telur sejenis, berapakah jumlah uang yang harus dibayarkan?',
    options: ['Rp 150.000', 'Rp 160.000', 'Rp 175.000', 'Rp 185.000'],
    correctAnswerIndex: 2,
    difficulty: 'mudah',
    explanation: 'Harga per kg = Rp 75.000 / 3 = Rp 25.000. Harga 7 kg = 7 * Rp 25.000 = Rp 175.000.'
  },
  {
    id: 18,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Berapakah nilai dari 15% dari 240?',
    options: ['24', '30', '36', '40'],
    correctAnswerIndex: 2,
    difficulty: 'mudah',
    explanation: '15 / 100 * 240 = 0,15 * 240 = 36.'
  },
  {
    id: 19,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Sepotong pizza dibagi merata menjadi 8 bagian. Budi mengambil 3 bagian dan Siti mengambil 2 bagian. Berapa bagian pizza yang tersisa jika dinyatakan dalam nilai pecahan desimal?',
    options: ['0,250', '0,375', '0,500', '0,625'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Jumlah bagian dimakan: 3 + 2 = 5 bagian. Sisa bagian: 8 - 5 = 3 bagian dari keseluruhan 8. Sisa = 3/8 = 0,375.'
  },
  {
    id: 20,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Tentukan suku berikutnya dalam pola: 8, 24, 12, 36, 18, 54, ...',
    options: ['24', '27', '36', '48'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Pola operasi bergantian: *3, lalu /2. 8 * 3 = 24; 24 / 2 = 12; 12 * 3 = 36; dst. Suku terakhir 54 / 2 = 27.'
  },
  {
    id: 21,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Selesaikan nilai x dari persamaan berikut: 3x - 7 = 5x + 9',
    options: ['-8', '-4', '4', '8'],
    correctAnswerIndex: 0,
    difficulty: 'sedang',
    explanation: 'Kurangi kedunya dengan 3x: -7 = 2x + 9. Kurangi dengan 9: -16 = 2x => x = -8.'
  },
  {
    id: 22,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Sebuah persegi panjang memiliki panjang 12 cm dan garis diagonal sepanjang 15 cm. Berapakah luas dari persegi panjang tersebut?',
    options: ['80 cm²', '96 cm²', '108 cm²', '120 cm²'],
    correctAnswerIndex: 2,
    difficulty: 'sulit',
    explanation: 'Lebar persegi panjang dicari dengan rumus Pythagoras: l = √(15² - 12²) = √(225 - 144) = √81 = 9 cm. Luas = p * l = 12 * 9 = 108 cm².'
  },
  {
    id: 23,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Tentukan pola kelanjutan angka berikut: 4, 9, 25, 49, 121, ...',
    options: ['144', '169', '196', '225'],
    correctAnswerIndex: 1,
    difficulty: 'sulit',
    explanation: 'Ini adalah barisan kuadrat dari bilangan prima: 2², 3², 5², 7², 11². Bilangan prima berikutnya adalah 13, maka 13² = 169.'
  },
  {
    id: 24,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Rata-rata dari lima bilangan asli adalah 20. Jika ditambahkan sebuah bilangan baru, nilai rata-ratanya sekarang menjadi 22. Berapakah nilai bilangan yang baru ditambahkan tersebut?',
    options: ['28', '30', '32', '34'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Total semula: 5 * 20 = 100. Total setelah penambahan: 6 * 22 = 132. Nilai baru = 132 - 100 = 32.'
  },
  {
    id: 25,
    category: 'logika-numerik',
    categoryLabel: 'Logika Numerik',
    question: 'Sebuah botol lengkap dengan sumbatnya berharga Rp 11.000. Jika harga botol tersebut Rp 10.000 lebih mahal dibandingkan dengan sumbatnya, berapakah harga dari sumbat botol tersebut?',
    options: ['Rp 500', 'Rp 1.000', 'Rp 1.500', 'Rp 2.000'],
    correctAnswerIndex: 0,
    difficulty: 'sulit',
    explanation: 'Misalkan Botol = b, Sumbat = s. b + s = 11.000, dan b = s + 10.000. Maka (s + 10.000) + s = 11.000 => 2s = 1.000 => s = Rp 500.'
  },

  // ==================== LOGIKA VERBAL (26 - 50) ====================
  {
    id: 26,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Pilihlah kata yang merupakan sinonim paling dekat dengan kata: ABREVIASI.',
    options: ['Penolakan', 'Singkatan', 'Pengembangan', 'Hubungan bebas'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Abreviasi adalah istilah linguistik yang merujuk pada pemendekan atau singkatan kata.'
  },
  {
    id: 27,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Pilihlah kata yang merupakan antonim paling tepat untuk kata: APATIS.',
    options: ['Pasif', 'Dingin', 'Peduli', 'Ragu-ragu'],
    correctAnswerIndex: 2,
    difficulty: 'mudah',
    explanation: 'Apatis berarti acuh tak acuh atau tidak peduli. Antonimnya adalah peduli.'
  },
  {
    id: 28,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Isilah analogi berikut: MOBIL - BENSIN = MANUSIA - ...',
    options: ['Makanan', 'Oksigen', 'Kaki', 'Bekerja'],
    correctAnswerIndex: 0,
    difficulty: 'mudah',
    explanation: 'Mobil membutuhkan bensin sebagai sumber energi utama untuk beroperasi, sebagaimana manusia membutuhkan makanan untuk memperoleh energi.'
  },
  {
    id: 29,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Isilah analogi berikut: CINCIN : EMAS = GENTENG : ...',
    options: ['Atap', 'Rumah', 'Tanah Liat', 'Semen'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Cincin bermaterial dasar emas, sedangkan genteng bermaterial dasar tanah liat.'
  },
  {
    id: 30,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Sinonim yang paling tepat untuk kata: PROGRESIF adalah...',
    options: ['Berkembang maju', 'Kuno dan kolot', 'Statis di tempat', 'Mencegah kerusakan'],
    correctAnswerIndex: 0,
    difficulty: 'mudah',
    explanation: 'Progresif bermakna kearah kemajuan atau berkembang secara positif.'
  },
  {
    id: 31,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Apakah antonim yang berlawanan arti paling tepat untuk kata: VAGU?',
    options: ['Samar-samar', 'Jelas', 'Gelap', 'Luas'],
    correctAnswerIndex: 1,
    difficulty: 'sulit',
    explanation: 'Vagu (berasal dari "vague") berarti samar atau tidak jelas. Lawan katanya adalah jelas.'
  },
  {
    id: 32,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Lengkapi analogi berikut: DOKTER : PASIEN = GURU : ...',
    options: ['Kelas', 'Murid', 'Papan Tulis', 'Sekolah'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Dokter melayani atau menangani pasien, sedangkan guru mendidik atau menangani murid.'
  },
  {
    id: 33,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Manakah kata berikut ini yang TIDAK cocok atau tidak sekelompok dengan lainnya?',
    options: ['Meja', 'Sofa', 'Kursi', 'Kompor'],
    correctAnswerIndex: 3,
    difficulty: 'mudah',
    explanation: 'Meja, sofa, dan kursi merupakan perabot rumah tangga (furniture utama), sedangkan kompor merupakan alat masak dapur.'
  },
  {
    id: 34,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Sinonim yang paling menggambarkan kata: KONTEMPLASI adalah...',
    options: ['Perdebatan', 'Renungan mendalam', 'Penyerangan fisik', 'Pembayaran tunai'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Kontemplasi berarti merenung atau berpikir secara mendalam demi memahami sesuatu.'
  },
  {
    id: 35,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Pilihlah lawan kata (antonim) yang tepat untuk: EFEMER.',
    options: ['Abadi', 'Fana', 'Indah', 'Singkat'],
    correctAnswerIndex: 0,
    difficulty: 'sulit',
    explanation: 'Efemer artinya bersifat sementara, berumur pendek, atau fana. Antonimnya adalah abadi.'
  },
  {
    id: 36,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Isilah analogi berikut: BAIT - PUISI = LOTENG - ...',
    options: ['Rumah', 'Hujan', 'Tangga', 'Awan'],
    correctAnswerIndex: 0,
    difficulty: 'sedang',
    explanation: 'Bait merupakan bagian penyusun dari struktur puisi, sedangkan loteng merupakan bagian dari struktur rumah.'
  },
  {
    id: 37,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Bagi kalangan petani tradisional jawa, kata "TANDUR" merupakan sebuah akronim sinonim dari kegiatan...',
    options: ['Menyiram air', 'Menanam tumbuhan', 'Memupuk tanah', 'Memanen beras'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Tandur merupakan singkatan tradisional Jawa dari istilah "Tanam Mundur" yang merujuk pada menanam padi.'
  },
  {
    id: 38,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Antonim dari kata KAOTIK (Chaotic) adalah...',
    options: ['Berantakan', 'Kaos', 'Teratur', 'Tenang'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Kaotik berarti kacau-balau atau tidak teratur. Lawan katanya adalah teratur.'
  },
  {
    id: 39,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Analogi: MATA - CAHAYA = TELINGA - ...',
    options: ['Udara', 'Bunyi', 'Alat dengar', 'Musik'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Mata menangkap rangsang cahaya untuk melihat, sedangkan telinga menangkap rangsang bunyi untuk mendengar.'
  },
  {
    id: 40,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Pilihlah sinonim yang paling mendekati kata: EKSKLUSIF.',
    options: ['Umum', 'Terbuka', 'Terbatas', 'Campuran'],
    correctAnswerIndex: 2,
    difficulty: 'mudah',
    explanation: 'Eksklusif bermakna khusus, tidak untuk umum, atau terbatas hanya untuk kalangan tertentu.'
  },
  {
    id: 41,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Antonim dari kata AMATIR adalah...',
    options: ['Pemula', 'Ahli', 'Profesional', 'Pecinta'],
    correctAnswerIndex: 2,
    difficulty: 'mudah',
    explanation: 'Lawan kata dari amatir (orang yang melakukan kegiatan hanya hobi) adalah profesional (orang yang melakukan dengan standar bayaran/keahlian tinggi).'
  },
  {
    id: 42,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Lengkapi hubungan pencerita berikut: PANAS - API = DINGIN - ...',
    options: ['Hujan', 'Es', 'Dingin sekali', 'Malam'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Api merupakan representasi atau sumber rasa panas, dikelilingi es yang merepresentasikan rasa dingin.'
  },
  {
    id: 43,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Hewan mana yang tidak termasuk ke dalam kategori yang sama dengan yang lain?',
    options: ['Elang', 'Garuda', 'Merpati', 'Singa'],
    correctAnswerIndex: 3,
    difficulty: 'sedang',
    explanation: 'Singa adalah hewan mamalia darat yang tidak bisa terbang, berbeda dengan yang lainnya yang memiliki kemampuan terbang.'
  },
  {
    id: 44,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Sinonim deskriptif yang identik dengan kata KONSISTEN adalah...',
    options: ['Berubah-ubah', 'Ajek', 'Kritis', 'Kokoh'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Konsisten berarti tetap, tidak berubah-ubah, alias ajek.'
  },
  {
    id: 45,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Sesuatu yang terjadi secara SPORADIS berarti terjadi secara...',
    options: ['Terus menerus', 'Kadang-kadang tidak menentu', 'Sangat rapi dan dijadwalkan', 'Cepat lambat'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Sporadis didefinisikan sebagai keadaan yang tidak merata atau kadang-kadang terjadi, tidak berkala.'
  },
  {
    id: 46,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Lengkapi analogi fungsional ini: HELM - KEPALA = SEPATU - ...',
    options: ['Kaos kaki', 'Kaki', 'Jalan', 'Tangan'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Helm berfungsi melindungi kepala, sebagaimana sepatu berfungsi melindungi kaki.'
  },
  {
    id: 47,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Sinonim dari kata psikologis: AURA adalah...',
    options: ['Pancaran energi', 'Cahaya lampu luar', 'Udara pagi', 'Bayangan tubuh'],
    correctAnswerIndex: 0,
    difficulty: 'sedang',
    explanation: 'Aura merujuk pada pancaran energi tak tampak yang melingkupi makhluk hidup.'
  },
  {
    id: 48,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Antonim dari sikap mental SKEPTIS adalah...',
    options: ['Ragu', 'Yakin', 'Pesimis', 'Curiga'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Skeptis adalah sikap meragukan kebenaran. Antonimnya adalah yakin atau percaya.'
  },
  {
    id: 49,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Lengkapi analogi rasa ini: HAUS - MINUMAN = LAPAR - ...',
    options: ['Makanan', 'Kekenyangan', 'Piring', 'Dapur'],
    correctAnswerIndex: 0,
    difficulty: 'mudah',
    explanation: 'Rasa haus dihilangkan dengan meminum minuman, dan rasa lapar dihilangkan dengan memakan makanan.'
  },
  {
    id: 50,
    category: 'logika-verbal',
    categoryLabel: 'Logika Verbal',
    question: 'Sinonim dari kata FIKTIF adalah...',
    options: ['Fakta ilmiah', 'Rekayasa imajiner', 'Benar terjadi', 'Sejarah masa lalu'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Fiktif berarti bersifat fiksi, khayalan, imajiner, atau karangan belaka.'
  },

  // ==================== PENALARAN ANALITIS (51 - 75) ====================
  {
    id: 51,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Premis 1: Semua manusia adalah makhluk fana.\nPremis 2: Socrates adalah seorang manusia.\nKesimpulan yang mutlak benar adalah...',
    options: ['Socrates pasti abadi', 'Socrates adalah makhluk fana', 'Socrates bukan manusia fana', 'Tidak ada kesimpulan'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Berdasarkan logika silogisme klasik, karena Socrates adalah manusia, ia otomatis termasuk kedalam kelompok fana.'
  },
  {
    id: 52,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Pernyataan: "Jika hari ini hujan, maka jalanan di depan rumah basah."\nKenyataan: Jalanan depan rumah basah.\nApakah kesimpulan yang paling tepat?',
    options: ['Hari ini pasti sedang hujan', 'Hari ini tidak hujan sama sekali', 'Tidak dapat disimpulkan secara pasti apakah hari ini hujan atau tidak', 'Ada tetangga yang menyiram air'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Ini adalah sesat pikir logika "affirming the consequent". Jalanan basah bisa disebabkan oleh hal lain selain hujan (misalnya disiram air). Kesimpulannya tidak pasti.'
  },
  {
    id: 53,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Ali berada di sebelah utara Budi. Budi berada di sebelah timur Cici. Di arah mata angin manakah letak Ali jika dilihat dari posisi Cici?',
    options: ['Barat Laut', 'Timur Laut', 'Barat Daya', 'Tenggara'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Bila ditarik garis, Cici ke Budi adalah arah Timur. Dari Budi ke Ali mengarah ke Utara. Secara akumulatif, posisi Ali dari Cici adalah arah Timur Laut.'
  },
  {
    id: 54,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Dalam sebuah antrean pembayaran, Doni berdiri tepat di depan Eko. Farhan berdiri di belakang Eko. Siapakah dari mereka bertiga yang berada pada posisi paling belakang?',
    options: ['Doni', 'Eko', 'Farhan', 'Tidak bisa ditentukan'],
    correctAnswerIndex: 2,
    difficulty: 'mudah',
    explanation: 'Susunan dari depan ke belakang: Doni -> Eko -> Farhan. Jadi Farhan yang paling belakang.'
  },
  {
    id: 55,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Semua kucing menyukai makanan berupa ikan segar. Tom adalah seekor kucing peliharaan. Kesimpulan manakah yang dijamin benar?',
    options: ['Tom suka bermain ikan hidup', 'Tom menyukai ikan segar', 'Tom menolak makan daging sapi', 'Semua hewan suka ikan'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Karena Tom adalah kucing, dan semua kucing menyukai ikan segar, maka Tom pasti menyukai ikan segar.'
  },
  {
    id: 56,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Lima orang siswa (A, B, C, D, E) menempuh ujian matematika. Nilai A lebih baik dari B. Nilai C sama tingginya dengan nilai D. Nilai E lebih rendah dari B. Jika nilai C berada di bawah nilai B, siapakah yang mendapatkan nilai tertinggi?',
    options: ['A', 'C', 'D', 'E'],
    correctAnswerIndex: 0,
    difficulty: 'sedang',
    explanation: 'Urutan hierarki nilai: A > B, B > C, B > E. Karena C = D dan berada di bawah B, maka nilai A adalah yang tertinggi secara mutlak.'
  },
  {
    id: 57,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Jika variabel x lebih besar daripada y, sedangkan y terbukti lebih besar daripada z. Pernyataan matematika mana yang mutlak benar?',
    options: ['x lebih kecil dari z', 'x memiliki nilai sama dengan z', 'x lebih besar dari z', 'z lebih besar dari x'],
    correctAnswerIndex: 2,
    difficulty: 'mudah',
    explanation: 'Sifat transitif pertidaksamaan: x > y dan y > z berimplikasi langsung x > z.'
  },
  {
    id: 58,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Premis 1: Semua pekerja yang rajin di pabrik itu mendapat bonus tahunan.\nPremis 2: Kuli panggul Joko tidak mendapatkan bonus tahunan.\nKesimpulan yang paling logis adalah...',
    options: ['Joko adalah pekerja rajin yang dilupakan', 'Joko bukan pekerja pabrik itu', 'Joko tidak termasuk pekerja yang rajin', 'Bonus tahunan Joko ditunda tahun depan'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Modus Tollens: Jika P maka Q. Bukan Q, maka bukan P. Karena Joko tidak dapat bonus, maka Joko tidak termasuk pekerja rajin.'
  },
  {
    id: 59,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Enam orang duduk melingkar di meja makan bundar. Jika posisi A tepat berhadapan langsung dengan B, sedangkan C duduk tepat di sebelah kanan A. Berada di posisi manakah C jika diukur dari B?',
    options: ['Tepat di sebelah kiri B', 'Tepat di sebelah kanan B', 'Berhadapan dengan B', 'Dua kursi di sebelah kiri B'],
    correctAnswerIndex: 0,
    difficulty: 'sulit',
    explanation: 'Di dalam posisi melingkar saling berhadapan, arah kanan seseorang yang berhadapan akan menjadi arah kiri dari orang di depannya. Maka kanan A adalah kiri B.'
  },
  {
    id: 60,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Semua buah yang manis memiliki kadar kandungan gula alami yang tinggi. Buah lemon tidak manis dan tidak mengandung kadar gula alami yang tinggi. Kesimpulan mana yang tepat?',
    options: ['Buah manis selalu berwarna kuning seperti lemon', 'Lemon tidak termasuk kategori buah manis', 'Semua buah kadar gula rendah bermakna asam', 'Lemon bukan buah sejati'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Karena lemon tidak manis dan tidak memiliki gula tinggi, lemon secara logis tidak masuk dalam kelompok buah manis.'
  },
  {
    id: 61,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Bila hari ini bertepatan dengan hari Rabu, jatuh pada hari apakah 100 hari yang lalu?',
    options: ['Senin', 'Selasa', 'Kamis', 'Jumat'],
    correctAnswerIndex: 0,
    difficulty: 'sedang',
    explanation: '100 hari dibagi dengan sisa siklus mingguan (7 hari): 100 % 7 = 14 minggu sisa 2 hari. 2 hari sebelum hari Rabu adalah Senin.'
  },
  {
    id: 62,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Pernyataan formal: "Piring kaca porselen itu akan pecah berkeping jika jatuh berkali-kali ke lantai."\nKenyataan saat ini: Piring itu masih utuh dan tidak pecah.\nKesimpulan logika yang formal adalah...',
    options: ['Piring diletakkan di lemari', 'Piring kaca tersebut tidak pernah jatuh berkali-kali', 'Piring itu terbuat dari plastik elastis', 'Lantai rumah dilapisi karpet busa tebal'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Skema Modus Tollens: Jika P (jatuh) maka Q (pecah). Diketahui kenyataan ~Q (piring utuh, tidak pecah). Maka kesimpulannya ~P (piring tidak jatuh secara berulangkali).'
  },
  {
    id: 63,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Anda mempunyai 3 buah kotak tertutup. Kotak I diberi label "Apel", kotak II diberi label "Jeruk", kotak III diberi label "Campuran". Anda mengetahui bahwa isi kotak SANGAT acak dan SEMUA label dipastikan salah tempel. Jika Anda mengambil 1 buah dari kotak bertuliskan "Campuran" tanpa melihat dan mendapati bahwa itu jeruk, isi kotak manakah yang sebetulnya berisi apel saja?',
    options: ['Kotak berlabel "Apel"', 'Kotak berlabel "Jeruk"', 'Kotak berlabel "Campuran"', 'Tidak ada yang bisa dipastikan'],
    correctAnswerIndex: 0,
    difficulty: 'sulit',
    explanation: 'Karena semua salah label, kotak "Campuran" hanya berisi satu jenis buah karena ia salah diberi label campuran. Karena anda mengambil jeruk dari kotak "Campuran", kotak ini sebenarnya adalah kotak "Jeruk". Dengan demikian, kotak berlabel "Apel" harus diisi buah "Campuran" (karena label Apel salah dan sisa jeruk sudah dipakai). Kotak berlabel "Jeruk" adalah yang berisi "Apel" sepenuhnya secara eksklusif.'
  },
  {
    id: 64,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Pernyataan 1: Semua spesies burung berkembang biak dengan memiliki sayap.\nPernyataan 2: Beberapa makhluk hidup bersayap memiliki kemampuan terbang bebas.\nMaka kesimpulan logisnya adalah...',
    options: ['Semua burung mampu terbang bebas', 'Beberapa makhluk hidup bersayap bukan merupakan burung', 'Beberapa makhluk hidup bersayap adalah burung', 'Burung unta bukan burung'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Karena semua burung bersayap, otomatis kelompok burung berada di dalam himpunan makhluk bersayap. Maka bisa disimpulkan beberapa makhluk bersayap adalah burung.'
  },
  {
    id: 65,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Jika umur Andi berada di atas Budi, sedangkan umur Candra berada di atas Andi. Siapakah anak dengan pencapaian umur paling muda?',
    options: ['Andi', 'Budi', 'Candra', 'Tidak bisa dianalisis'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Hierarki umur dari tua ke muda: Candra -> Andi -> Budi. Maka Budi adalah yang termuda.'
  },
  {
    id: 66,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Empat anak (A, B, C, D) berdiri mengantre lurus satu jalur. A berdiri berdampingan dekat dengan B. C berdiri tepat di dekat D namun dilarang keras bersebelahan dengan B. Apabila posisi D bertindak menempati ujung barisan sebelah kanan, di manakah posisi berdiri anak A?',
    options: ['Paling ujung sebelah kiri', 'Posisi ke-dua dari arah kiri', 'Posisi ke-tiga dari sebelah kiri', 'Di samping persis anak D'],
    correctAnswerIndex: 1,
    difficulty: 'sulit',
    explanation: 'Empat slot: _ _ _ D. Karena C harus di dekat D, maka C di slot ke-3: _ _ C D. Karena B dilarang dekat C, maka B harus berada di slot ke-1: B _ C D. Maka slot ke-2 diisi oleh A: B A C D. Jadi posisi berdiri anak A adalah ke-dua dari arah kiri.'
  },
  {
    id: 67,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Premis 1: Tidak satu pun mahasiswa jenjang sarjana memiliki hak malas dalam belajar.\nPremis 2: Sebagian atlet berprestasi nasional adalah mahasiswa jenjang sarjana.\nKesimpulan yang valid berdasarkan premis di atas adalah...',
    options: ['Semua atlet memiliki hak bermalas-malasan', 'Sebagian atlet berprestasi nasional tidak memiliki hak malas dalam belajar', 'Mahasiswa yang rajin pasti berprestasi nasional', 'Tidak ada atlet yang rajin belajar'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Sebagian atlet adalah mahasiswa sarjana. Karena mahasiswa sarjana tidak boleh malas, maka sebagian atlet yang berstatus mahasiswa tersebut juga tidak punya hak malas.'
  },
  {
    id: 68,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Di dalam sebuah keluarga besar, terdapat 5 bersaudara yang semuanya laki-laki. Setiap saudara laki-laki tersebut masing-masing dipastikan memiliki 1 saudara kandung perempuan saja. Berapakah jumlah keseluruhan total anak di dalam keluarga tersebut?',
    options: ['5 anak', '6 anak', '10 anak', '11 anak'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Karena 5 anak laki-laki tersebut adalah saudara kandung, maka 1 saudara perempuan itu bertindak menjadi saudara perempuan bagi kelima anak laki-laki tersebut sekaligus. Total anak: 5 laki-laki + 1 perempuan = 6 anak.'
  },
  {
    id: 69,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Sistem Silogisme Kondisional: "Bila saya tekun belajar, saya akan lulus seleksi ujian. Bila saya berhasil lulus seleksi ujian, saya akan merasa sangat bahagia."\nKesimpulan logis yang sah adalah...',
    options: ['Jika saya bahagia, maka saya harus banyak belajar', 'Jika saya tekun belajar, saya akan merasa sangat bahagia', 'Saya lulus ujian karena bahagia', 'Tidak belajar membuat saya sangat sedih'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Menggunakan silogisme transitif kondisional: P => Q dan Q => R menghasilkan kesimpulan logis P => R.'
  },
  {
    id: 70,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Di dalam sebuah lemari, terdapat kaus kaki berwarna hitam dan biru dengan perbandingan matematika 4 : 5. Jumlah total seluruh pasang kaus kaki di lemari tersebut adalah 36 buah. Berapakah kuantitas kaus kaki yang berwarna hitam?',
    options: ['12 buah', '16 buah', '20 buah', '24 buah'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Jumlah bagian perbandingan: 4 + 5 = 9 bagian. Nilai per bagian: 36 / 9 = 4 buah. Kaus kaki hitam = 4 bagian * 4 = 16 buah.'
  },
  {
    id: 71,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Semua individu berprofesi dosen merupakan ilmuwan cendekiawan. Sebagian dosen juga merupakan penulis buku ilmiah aktif. Manakah kesimpulan yang mutlak benar?',
    options: ['Semua penulis buku ilmiah adalah dosen', 'Sebagian penulis buku ilmiah yang aktif adalah ilmuwan cendekiawan', 'Semua ilmuwan cendekiawan rajin menulis buku', 'Hanya dosen yang boleh menulis buku ilmiah'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Karena sebagian dosen aktif menulis buku dan semua dosen adalah ilmuwan cendekiawan, maka sebagian penulis buku yang dosen tersebut pasti juga tergolong ilmuwan cendekiawan.'
  },
  {
    id: 72,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Apabila x didefinisikan sebagai bilangan bulat genap dan y didefinisikan sebagai bilangan bulat ganjil. Maka hasil perkalian matematis x * y bernilai...',
    options: ['Selalu bilangan ganjil', 'Selalu bilangan genap', 'Bisa ganjil maupun genap tergantung angkanya', 'Selalu menghasilkan bilangan prima'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Hasil kali bilangan genap dengan ganjil (atau bilangan apa pun) akan selalu menghasilkan bilangan genap (contoh: 2 * 3 = 6).'
  },
  {
    id: 73,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Tiga orang siswa (Andi, Budi, Candra) diinterogasi. Salah satu dari mereka berbohong sedangkan dua siswa lainnya jujur.\nAndi menyatakan: "Budi berbohong."\nBudi menyatakan: "Candra berbohong."\nSiapakah di antara mereka yang bersikap tidak jujur / pembual?',
    options: ['Andi', 'Budi', 'Candra', 'Tidak ada yang berbohong'],
    correctAnswerIndex: 1,
    difficulty: 'sulit',
    explanation: 'Jika Andi jujur, maka Budi bohong. Jika Budi bohong, maka pernyataan Budi ("Candra bohong") adalah bohong, berarti Candra berkata jujur. Hal ini konsisten karena didapatkan Andi jujur, Candra jujur (2 orang jujur) dan Budi berbohong (1 orang bohong). Jadi si pembual adalah Budi.'
  },
  {
    id: 74,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Rantai Ekosistem: Kucing makan tikus sawah. Anjing memangsa kucing. Jika anjing pelacak di kawasan tersebut mengalami kepunahan total, apa konsekuensi langsung dari rantai makanan ini?',
    options: ['Tikus sawah akan punah seketika', 'Populasi kucing berpotensi mengalami lonjakan peningkatan tajam', 'Kucing akan kelaparan karena tidak ada anjing', 'Tikus sawah jenuh berkembang'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Karena anjing (predator dari kucing) punah, maka tidak ada yang memangsa kucing, menyebabkan populasi kucing bertambah subur.'
  },
  {
    id: 75,
    category: 'penalaran-analitis',
    categoryLabel: 'Penalaran Analitis',
    question: 'Premis 1: Semua jalur jalan protokol bebas macet pada hari Minggu.\nPremis 2: Jalan Jenderal Sudirman berstatus jalan protokol utama.\nHari ini merupakan hari Minggu yang cerah.\nKesimpulan logis yang valid adalah...',
    options: ['Jalan Jenderal Sudirman ditutup untuk CFD', 'Jalan Jenderal Sudirman bebas macet hari ini', 'Semua jalan di kota hari ini macet parah', 'Andi berlibur di sekitar jalan Sudirman'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Berdasarkan premis umum dan kenyataan hari Minggu, Jalan Sudirman yang berstatus jalan protokol haruslah bebas macet.'
  },

  // ==================== POLA DAN DERET (76 - 100) ====================
  {
    id: 76,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Pola huruf logis: A, C, E, G, ... huruf selanjutnya adalah...',
    options: ['H', 'I', 'J', 'K'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Lompat 1 huruf secara alfabet: A (b) C (d) E (f) G (h) I.'
  },
  {
    id: 77,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Pola huruf mundur logis: Z, X, V, T, ... huruf selanjutnya adalah...',
    options: ['Q', 'R', 'S', 'U'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Mundur 1 huruf secara konsisten: Z (y) X (w) V (u) T (s) R.'
  },
  {
    id: 78,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Pola huruf dengan lompatan berderet tambah: A, B, D, G, K, ... huruf berikutnya adalah...',
    options: ['N', 'O', 'P', 'Q'],
    correctAnswerIndex: 2,
    difficulty: 'sulit',
    explanation: 'Lompatan index alfabet bertingkat: A ke B (+1), B ke D (+2), D ke G (+3), G ke K (+4), K ke huruf berikutnya (+5). Huruf ke-11 (K) + 5 = 16 (huruf P).'
  },
  {
    id: 79,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Deret kombinasi angka dan huruf: 1A, 2B, 3C, 4D, ...',
    options: ['5D', '5E', '6E', '5F'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Angka meningkat harmonis (+1) berdampingan alfabet meningkat (+1). Kelanjutannya 5E.'
  },
  {
    id: 80,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Tentukan suku berikutnya dalam barisan bilangan Lucas: 3, 4, 7, 11, 18, 29, ...',
    options: ['34', '41', '47', '51'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Pola Fibonacci penjumlah dua suku sebelum: 18 + 29 = 47.'
  },
  {
    id: 81,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Pola huruf selang-seling berpasangan: A, Z, B, Y, C, ...',
    options: ['X', 'W', 'D', 'V'],
    correctAnswerIndex: 0,
    difficulty: 'sedang',
    explanation: 'Terdapat dua sub-pola bersilang: sub-pola depan maju (A, B, C...) dan sub-pola belakang mundur (Z, Y, [X]). Suku setelah C adalah X.'
  },
  {
    id: 82,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Barisan deret bertambah tingkat: 1, 2, 4, 7, 11, 16, ... tentukan angka berikutnya.',
    options: ['20', '21', '22', '24'],
    correctAnswerIndex: 2,
    difficulty: 'mudah',
    explanation: 'Pola penambahan meningkat: +1, +2, +3, +4, +5, selanjutnya +6. 16 + 6 = 22.'
  },
  {
    id: 83,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Kelompok huruf progresif: ABC, DEF, GHI, ... kelompok berikutnya adalah...',
    options: ['JKL', 'IJK', 'KLM', 'LMN'],
    correctAnswerIndex: 0,
    difficulty: 'mudah',
    explanation: 'Lanjutan sekuensial kelompok 3 huruf alfabet yang berurutan. Setelah GHI adalah JKL.'
  },
  {
    id: 84,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Angka deret kelipatan selisih genap: 10, 12, 16, 22, 30, ... angka berikutnya adalah...',
    options: ['36', '38', '40', '42'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Selisih penambahan berupa bilangan genap berurutan: +2, +4, +6, +8, selanjutnya +10. 30 + 10 = 40.'
  },
  {
    id: 85,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Pola huruf bertingkat jumlah: A, BB, CCC, DDDD, ... pola berikutnya adalah...',
    options: ['EEEEE', 'FFFFF', 'E', 'FFF'],
    correctAnswerIndex: 0,
    difficulty: 'mudah',
    explanation: 'Huruf alfabet berturut-turut dituliskan sebanyak indeks posisinya. Huruf ke-5 (E) ditulis sebanyak 5 kali: EEEEE.'
  },
  {
    id: 86,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Tentukan bilangan kelanjutan berikut ini: 2, 3, 5, 8, 12, 17, ...',
    options: ['21', '22', '23', '25'],
    correctAnswerIndex: 2,
    difficulty: 'mudah',
    explanation: 'Pola penambahan naik konstan: +1, +2, +3, +4, +5, kemudian +6. 17 + 6 = 23.'
  },
  {
    id: 87,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Pola kelipatan 3 karakter alfabet: C, F, I, L, O, ... karakter selanjutnya adalah...',
    options: ['P', 'Q', 'R', 'S'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Posisi alfabet meloncat +3 setiap langkah: C(3), F(6), I(9), L(12), O(15), berikutnya adalah urutan ke-18 yaitu R.'
  },
  {
    id: 88,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Deret pembagian rasio konstan: 120, 60, 30, 15, ... berapakah nilai berikutnya?',
    options: ['10', '7,5', '5', '2,5'],
    correctAnswerIndex: 1,
    difficulty: 'sedang',
    explanation: 'Barisan geometri dengan rasio pembagi tetap r = 0.5. Angka berikutnya: 15 / 2 = 7,5.'
  },
  {
    id: 89,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Lengkapi deret bilangan kubik tingkat: 1, 8, 27, 64, ...',
    options: ['100', '121', '125', '144'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Pola urutan perpangkatan 3 (kubik): 1^3, 2^3, 3^3, 4^3, selanjutnya 5^3 = 125.'
  },
  {
    id: 90,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Pola rangkaian lompatan: D, H, L, P, T, ... huruf berikutnya adalah...',
    options: ['V', 'W', 'X', 'Y'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Lompatan huruf bertambah 4 indeks posisi alfabet: D(4) -> H(8) -> L(12) -> P(16) -> T(20) -> X(24).'
  },
  {
    id: 91,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Kerjakan deret pengurangan unik berikut: 90, 80, 72, 65, 59, ...',
    options: ['53', '54', '55', '56'],
    correctAnswerIndex: 1,
    difficulty: 'sulit',
    explanation: 'Pola pengurangan berkurang secara bertingkat: -10, -8, -7, -6, selanjutnya adalah pengurangan -5. Suku terakhir: 59 - 5 = 54.'
  },
  {
    id: 92,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Pola jembatan alfabet berurutan: AB, BC, CD, DE, ...',
    options: ['ED', 'EF', 'FG', 'FF'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Sepasang huruf yang tumpang tindih bergeser ke kanan sewajarnya. Pola berikutnya adalah EF.'
  },
  {
    id: 93,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Lengkapi selang-seling barisan deret ganda berikut: 1, 5, 2, 10, 3, 15, ...',
    options: ['4', '18', '20', '25'],
    correctAnswerIndex: 0,
    difficulty: 'sedang',
    explanation: 'Barisan pertama di index ganjil dideretkan bertambah 1: 1, 2, 3, [4]. Barisan kedua di index genap merupakan kelipatan 5: 5, 10, 15... Suku selanjutnya mengisi posisi ganjil yaitu 4.'
  },
  {
    id: 94,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Analisis deret huruf berpasangan dari arah bertolak belakang: AZ, CX, EV, ... pasangan berikutnya adalah...',
    options: ['FU', 'HS', 'GT', 'IR'],
    correctAnswerIndex: 2,
    difficulty: 'sulit',
    explanation: 'Huruf pertama melompat maju 2 tingkat alfabet: A (+2) -> C (+2) -> E (+2) -> G. Huruf kedua melompat mundur 2 tingkat dari akhir: Z (-2) -> X (-2) -> V (-2) -> T. Pasangannya GT.'
  },
  {
    id: 95,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Tentukan suku berikutnya dalam barisan angka: 2, 6, 12, 20, 30, ...',
    options: ['38', '40', '42', '44'],
    correctAnswerIndex: 2,
    difficulty: 'sedang',
    explanation: 'Polanya adalah n * (n + 1): 1*2 = 2; 2*3 = 6; 3*4 = 12; 4*5 = 20; 5*6 = 30. Maka suku berikutnya 6*7 = 42.'
  },
  {
    id: 96,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Deret huruf melompat naik: B, D, G, K, P, ... huruf berikutnya adalah...',
    options: ['U', 'V', 'W', 'X'],
    correctAnswerIndex: 1,
    difficulty: 'sulit',
    explanation: 'Posisi melompat bertahap naik: B ke D (+2), D ke G (+3), G ke K (+4), K ke P (+5), maka berikutnya P ke [V] (+6).'
  },
  {
    id: 97,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Angka kuadrat terbalik mundur: 81, 64, 49, 36, 25, ...',
    options: ['12', '16', '20', '24'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Kuadrat bilangan bulat mundur: 9², 8², 7², 6², 5², selanjutnya 4² = 16.'
  },
  {
    id: 98,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Fibonacci berpola huruf: A(1), B(2), C(3), E(5), H(8), M(13), ... huruf berikutnya adalah...',
    options: ['T', 'U', 'V', 'W'],
    correctAnswerIndex: 1,
    difficulty: 'sulit',
    explanation: 'Setiap huruf diwakili urutan angka Fibonaccinya: 1, 2, 3, 5, 8, 13. Berikutnya adalah 8 + 13 = 21, yaitu huruf U.'
  },
  {
    id: 99,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Deret angka penambahan pangkat 2 bertingkat: 7, 9, 13, 21, 37, ...',
    options: ['53', '61', '69', '73'],
    correctAnswerIndex: 2,
    difficulty: 'sulit',
    explanation: 'Pola penambahan adalah kelipatan kuadrat dari 2: +2, +4, +8, +16. Penambahan berikutnya adalah +32. Jadi 37 + 32 = 69.'
  },
  {
    id: 100,
    category: 'pola-deret',
    categoryLabel: 'Pola dan Deret',
    question: 'Tentukan huruf vokal kelanjutan logis berikut: A, E, I, O, ...',
    options: ['Y', 'U', 'W', 'Z'],
    correctAnswerIndex: 1,
    difficulty: 'mudah',
    explanation: 'Deret huruf vokal dasar alfabet mandiri yaitu: A, E, I, O, U.'
  }
];
