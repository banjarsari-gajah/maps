# Bab 1: Berkenalan dengan GIS dan QGIS (Si Peta Pintar)

### 1.1 Apa Itu GIS? (Lebih dari Sekadar Peta)

Pernahkah kamu memesan ojek online atau mencari kedai kopi terdekat di Google Maps? Jika iya, sebenarnya kamu sudah menggunakan teknologi GIS dalam kehidupan sehari-hari.

**GIS** (*Geographic Information System*) atau dalam bahasa Indonesia disebut **SIG** (Sistem Informasi Geografis), bukan sekadar gambar peta digital. Bayangkan GIS sebagai sebuah **database (tabel data) yang punya alamat.** Kalau peta biasa hanya memberi tahu kamu "di mana" letak suatu tempat, GIS bisa memberi tahu kamu "apa saja" yang ada di tempat itu. Contohnya:

* **Peta Biasa:** Menunjukkan titik lokasi sebuah sekolah.
* **GIS:** Menunjukkan titik lokasi sekolah tersebut, sekaligus memberi tahu kita nama kepala sekolahnya, jumlah siswanya, luas bangunannya, hingga kapan terakhir kali gedung itu direnovasi.

### 1.2 Analogi "Kue Lapis" dalam Pemetaan

Cara kerja GIS paling mudah dipahami dengan membayangkan **Kue Lapis**.

Dunia nyata itu sangat kompleks. Di GIS, kita membagi dunia yang kompleks itu menjadi lapisan-lapisan (*layers*) yang terpisah.

* Lapis 1: Khusus data jalan.
* Lapis 2: Khusus data penggunaan lahan (sawah, hutan, pemukiman).
* Lapis 3: Khusus data sungai.

Saat semua lapisan ini ditumpuk, kita bisa melihat hubungan antar data. Misalnya, kita bisa tahu "Berapa banyak rumah (Lapis 2) yang berada di dekat sungai (Lapis 3) yang sering banjir?". Kemampuan menganalisis tumpukan data inilah yang membuat GIS disebut "pintar".

### 1.3 Kenapa Harus QGIS?

Mungkin kamu bertanya, "Kenapa kita harus pakai QGIS? Bukankah ada software pemetaan lain?". Nah, QGIS punya beberapa alasan kuat yang bikin dia jadi favorit di seluruh dunia:

1. **Gratis & Legal:** QGIS adalah software *Open Source*. Kamu tidak perlu membayar lisensi jutaan rupiah atau mencari "crack" yang berisiko virus. Tinggal download, instal, dan pakai sepuasnya.
2. **Ringan tapi Powerfull:** QGIS bisa berjalan di laptop spek standar sekalipun, namun fiturnya tidak kalah dengan software berbayar yang sangat mahal.
3. **Dukungan Komunitas:** Karena penggunanya jutaan, kalau kamu bingung atau error, solusinya sangat mudah ditemukan di Google atau YouTube.
4. **Plugin yang Melimpah:** Bayangkan QGIS seperti HP Android. Kalau kamu butuh fitur tambahan (seperti ekspor ke web), kamu tinggal cari "Plugin" dan instal dalam hitungan detik.

### 1.4 Apa yang Akan Kita Lakukan?

Di buku ini, kita tidak akan belajar teori yang membosankan. Kita akan langsung praktik. Kita akan mulai dari menyiapkan data, mengolahnya dengan alat-alat canggih di QGIS, hingga akhirnya mempublikasikan peta tersebut ke internet agar bisa diakses oleh siapa saja melalui browser.

**Kunci Belajar QGIS:** Jangan takut klik sana-sini. QGIS adalah taman bermainmu. Jika salah klik, tinggal tekan `Ctrl + Z`.

Sudah siap mengubah kumpulan angka dan koordinat menjadi peta yang bercerita? Yuk, kita lanjut ke bab berikutnya untuk mengenal "bahan baku" utama kita: **Layer!**

---

**Tips untuk Penulis:**

* *Gunakan screenshot tampilan awal QGIS di bawah sub-bab 1.3 agar pembaca punya gambaran visual.*
* *Jika target pembaca adalah mahasiswa, tambahkan sedikit kutipan tentang pentingnya data spasial di masa depan.*

Tentu, mari kita lanjutkan ke **Bab 2**. Di bab ini, kita akan mulai "memegang" data. Ibarat memasak, kita akan mengenali bahan-bahan apa saja yang bisa kita olah di dapur QGIS.

---

# Bab 2: Mengenal Layer dan Cara Menjinakkannya

Setelah tahu apa itu QGIS, sekarang saatnya kita berkenalan dengan "nyawa" dari setiap peta, yaitu **Layer**. Di dunia GIS, data tidak dicampur aduk jadi satu gambar mati, melainkan dipisah-pisahkan. Yuk, kita pelajari jenisnya satu per satu.

### 2.1 Dua Bintang Utama: Vektor dan Raster

Dalam GIS, hampir semua data yang kamu temui akan terbagi menjadi dua kelompok besar: **Vektor** dan **Raster**.

#### A. Data Vektor (Si Serba Bisa)

Bayangkan kamu menggambar menggunakan pulpen di atas kertas kalkir. Data vektor adalah data yang dibentuk oleh titik koordinat. Ada tiga bentuk utamanya:

1. **Point (Titik):** Digunakan untuk objek tunggal yang spesifik. Contoh: lokasi ATM, menara BTS, atau titik lokasi rumahmu.
2. **Line (Garis):** Digunakan untuk objek yang memanjang. Contoh: jaringan jalan, aliran sungai, atau jalur kabel bawah laut.
3. **Polygon (Area):** Digunakan untuk objek yang memiliki luas atau batas wilayah. Contoh: batas desa, area persawahan, atau bentuk gedung.

**Kelebihan Vektor:** Jika dizoom berkali-kali, gambarnya tidak akan pecah/buram. Selain itu, setiap titik/garis bisa kita titipkan "catatan" (atribut), seperti nama jalan atau luas wilayah.

#### B. Data Raster (Si Kotak-Kotak)

Bayangkan sebuah foto digital. Jika kamu zoom terus-menerus, kamu akan melihat kotak-kotak kecil yang disebut *pixel*. Itulah data raster.

* Contoh paling umum adalah **foto satelit** atau **peta hasil scan**.
* Setiap kotak (pixel) punya nilai. Misalnya pada peta ketinggian (DEM), setiap kotak punya nilai berapa meter tingginya dari permukaan laut.

### 2.2 Memasukkan Data ke QGIS (Drag & Drop!)

Jangan bayangkan cara yang rumit. QGIS sangat ramah pengguna. Cara termudah untuk memasukkan data (seperti file .shp untuk vektor atau .tif untuk raster) adalah:

1. Buka folder penyimpanan datamu di komputer.
2. Klik file-nya, tahan, lalu **seret (drag)** langsung ke tengah layar QGIS.
3. *Simsalabim!* Datamu langsung muncul di layar.

### 2.3 Panel Layer: Mengatur Urutan "Tumpukan"

Di sebelah kiri layar QGIS, ada bagian bernama **Layers Panel**. Ini adalah daftar semua data yang sedang kamu buka.

* **Hukum Utama:** Layer yang berada di posisi paling atas dalam daftar akan menutupi layer di bawahnya.
* **Tips:** Selalu letakkan data **Titik** di paling atas, disusul **Garis**, lalu **Poligon**, dan terakhir **Raster (Basemap)** di paling bawah. Kenapa? Agar titik lokasi rumahmu tidak tertutup oleh warna area sawah atau foto satelit!

### 2.4 Styling: Membuat Peta Jadi Cantik

Peta yang baru dimasukkan biasanya punya warna acak dari QGIS (kadang warnanya ungu aneh atau hijau neon). Kita bisa mengubahnya lewat menu **Symbology**:

* Ingin mengubah warna jalan jadi merah? Klik kanan di layer jalan > Properties > Symbology.
* Ingin menambahkan nama kota di atas titik? Gunakan menu **Labels**.

Di sini kamu bisa berkreasi. Peta yang baik bukan cuma akurat, tapi juga enak dipandang mata.

### 2.5 Tabel Atribut: Rahasia di Balik Gambar

Ini yang membedakan QGIS dengan software desain grafis seperti CorelDraw atau Photoshop. Jika kamu klik kanan pada layer vektor dan pilih **Open Attribute Table**, kamu akan melihat tabel seperti Excel.
Di sinilah semua informasi disimpan. Misalnya, sebuah poligon berbentuk kotak di peta punya keterangan di tabelnya: "Nama Pemilik: Pak Budi", "Luas: 500m2", "Status: Sudah Sertifikat".

---

**Penutup Bab 2:**
Sekarang kamu sudah tahu cara memasukkan data dan mengatur tampilannya. Tapi, bagaimana jika kita tidak punya data sama sekali? Tenang, di bab berikutnya kita akan belajar cara "meminjam" peta keren dari internet secara langsung tanpa harus punya filenya.

Sampai jumpa di **Bab 3: Map Services!**

---

**Catatan untuk Penulis:**

* *Sertakan ilustrasi perbandingan visual antara Point, Line, dan Polygon.*
* *Sertakan tangkapan layar (screenshot) "Layers Panel" agar pembaca tahu di mana harus melihat daftar data mereka.*

Mari kita lanjut ke **Bab 3**. Di bab ini, kita akan membahas cara mendapatkan "latar belakang" peta yang keren tanpa harus menggambarnya sendiri.

---

# Bab 3: Map Services (Streaming Peta ke Layar Kamu)

Pernahkah kamu membayangkan bagaimana capeknya jika kita harus menggambar setiap jalan, sungai, dan bangunan di seluruh dunia hanya untuk membuat satu peta? Untungnya, kita hidup di era internet!

Di bab ini, kita akan belajar tentang **Map Services**. Sederhananya, ini adalah layanan "streaming" untuk peta. Sama seperti kamu menonton film di Netflix atau mendengarkan lagu di Spotify tanpa perlu men-*download* filenya, Map Services memungkinkan QGIS "meminjam" peta dari server penyedia lain secara *real-time*.

### 3.1 Apa Itu XYZ Tiles? (Si Populer)

Jika kamu sering melihat peta Google Maps atau OpenStreetMap di web, kemungkinan besar itu menggunakan teknologi bernama **XYZ Tiles**.

* **X dan Y** mewakili koordinat lokasi.
* **Z** mewakili level *Zoom*.

**Kenapa ini keren?** Karena datanya sudah dipotong-potong menjadi kotak-kotak kecil (tiles). Saat kamu melakukan *zoom in*, QGIS hanya akan mengambil potongan gambar yang diperlukan saja. Itulah kenapa prosesnya terasa cepat dan ringan.

**Cara Pakainya:** Di QGIS, cari panel **Browser** (biasanya di kiri atas) > cari tulisan **XYZ Tiles**. Secara *default*, biasanya sudah ada OpenStreetMap di sana. Tinggal klik dua kali, dan *tada!* Seluruh peta dunia muncul di layar kamu.

### 3.2 WMS dan WMTS (Peta Resmi dari Instansi)

Pernah dengar tentang Badan Informasi Geospasial (BIG) atau kementerian tertentu? Mereka biasanya menyediakan layanan bernama **WMS (Web Map Service)**.

* Berbeda dengan XYZ yang berbentuk potongan gambar kotak, WMS lebih "dinamis".
* Kita bisa meminta data spesifik (misal: hanya peta tutupan lahan tahun 2023) melalui sebuah link URL.
* **WMTS** adalah versi WMS yang sudah dioptimasi agar lebih cepat (mirip XYZ).

### 3.3 Plugin Rahasia: QuickMapServices

Menambahkan link XYZ satu per satu secara manual itu melelahkan. Nah, di sinilah kehebatan komunitas QGIS. Ada sebuah plugin bernama **QuickMapServices**.

* Jika kamu menginstal plugin ini, kamu bisa memanggil Google Satellite, Esri World Imagery, atau Bing Maps hanya dengan satu kali klik.
* Ini sangat berguna untuk melihat apakah data jalan yang kamu buat sudah pas dengan kondisi aslinya di lapangan (berdasarkan foto satelit).

### 3.4 Kenapa Kita Butuh Map Services?

Ada dua alasan utama:

1. **Sebagai Basemap (Peta Dasar):** Agar orang yang melihat peta kita tahu konteksnya. "Oh, titik koordinat ini ternyata ada di tengah hutan," atau "Ternyata lokasi ini ada di samping mal."
2. **Efisiensi Penyimpanan:** Kamu tidak perlu menyimpan file foto satelit sebesar ratusan Gigabyte di laptopmu. Biarkan server Google atau Esri yang menyimpannya, kamu cukup memakainya lewat internet.

> **Catatan Penting:** Karena ini sistemnya "streaming", kamu butuh koneksi internet yang stabil. Jika internet mati, peta dasarmu akan berubah jadi kotak-kotak putih atau abu-abu.

Tentu, ini adalah bagian tambahan untuk **Bab 3** yang menjelaskan langkah demi langkah cara menginstal dan menggunakan plugin **QuickMapServices**. Bagian ini sangat krusial karena merupakan cara tercepat bagi pemula untuk mendapatkan peta dasar (basemap) yang cantik.

---

### 3.5 Senjata Rahasia: Instalasi Plugin QuickMapServices

QGIS punya "toko aplikasi" sendiri yang disebut **Plugins**. Di sini, ribuan pengembang dari seluruh dunia membagikan fitur tambahan secara gratis. Salah satu yang wajib punya adalah **QuickMapServices (QMS)**.

#### A. Cara Instalasi

Ikuti langkah mudah ini:

1. Buka QGIS kamu.
2. Pada menu bar di bagian atas, klik menu **Plugins** > **Manage and Install Plugins...**
3. Akan muncul jendela baru. Pastikan kamu berada di tab **All** (di sebelah kiri).
4. Pada kolom pencarian (*search*), ketik: `QuickMapServices`.
5. Klik pada nama plugin tersebut, lalu klik tombol **Install Plugin** yang ada di pojok kanan bawah.
6. Tunggu sebentar sampai muncul notifikasi "Plugin installed successfully". Jika sudah, klik **Close**.

#### B. Aktivasi "Harta Karun" (The Contribution Pack)

Saat pertama kali diinstal, pilihan petanya biasanya masih sangat sedikit (hanya OpenStreetMap). Untuk memunculkan Google Maps, Esri, dan kawan-kawan, kita perlu mengaktifkan paket tambahan:

1. Buka menu **Web** (di barisan menu atas) > **QuickMapServices** > **Settings**.
2. Pilih tab **More services**.
3. Klik tombol **Get contributed pack**.
4. QGIS akan men-download daftar peta tambahan dari internet. Klik **Save**.
5. *Sekarang, "harta karun" peta dunia sudah terbuka untukmu!*

---

### 3.6 Cara Menggunakan QuickMapServices

Setelah diinstal dan dikonfigurasi, menggunakannya semudah membalikkan telapak tangan:

1. Klik menu **Web** > **QuickMapServices**.
2. Kamu akan melihat daftar folder seperti Google, Esri, Bing, OSM, dll.
3. **Pilih salah satu:**
* Ingin foto satelit? Pilih **Google** > **Google Satellite**.
* Ingin peta jalan yang bersih? Pilih **Google** > **Google Road**.
* Ingin peta medan (gunung-gunung)? Pilih **Google** > **Google Terrain**.


4. Peta tersebut akan langsung muncul di layar utama QGIS kamu sebagai *layer* paling bawah.

**Tips Pro:**

> Jika kamu melakukan zoom tapi peta dasarnya terlihat buram atau muncul tulisan "forbidden", biasanya itu karena koneksi internetmu sedang tidak stabil atau server penyedia peta sedang membatasi akses. Coba ganti ke penyedia lain (misal dari Google pindah ke Esri).

---

### 3.7 Menghapus atau Mematikan Layer

Peta dasar dari Map Services ini bisa cukup berat jika internetmu lambat. Kamu bisa mematikan centang di **Layers Panel** (sebelah kiri) untuk menyembunyikannya sementara, atau klik kanan > **Remove Layer** untuk menghapusnya dari proyek.

---

**Penutup Bab 3:**
Sekarang layar QGIS-mu tidak lagi putih kosong, melainkan sudah berisi peta dunia yang keren. Tapi tunggu dulu, bagaimana jika di peta Google tersebut ada jalan baru yang belum terdaftar? Atau kamu ingin menggambar batas tanah milikmu sendiri?

Yuk, kita masuk ke **Bab 4: Edit Data menggunakan Advance Digitizing Toolbar** untuk belajar cara menggambar peta dengan presisi milimeter!

---

Kita masuk ke bagian yang akan mengubah kamu dari sekadar "penonton peta" menjadi "pembuat peta". Di bab ini, kita akan belajar cara menggambar objek di atas peta dengan tingkat presisi yang tinggi.

---

# Bab 4: Edit Data dengan Advance Digitizing (Jadi Arsitek Peta)

Pernahkah kamu mencoba menggambar kotak di komputer tapi hasilnya miring-miring? Atau mencoba menyambungkan dua garis tapi malah kebablasan atau tidak menempel?

Di dunia pemetaan, kesalahan satu milimeter di layar bisa berarti selisih beberapa meter di lapangan. Itulah kenapa kita butuh **Advanced Digitizing Toolbar**. Fitur ini adalah "penggaris dan busur derajat" digital kita.

### 4.1 Persiapan: Siapkan "Kertas Gambar" Kamu

Sebelum menggambar, kamu harus punya layer yang bisa diedit. Ingat, kamu tidak bisa menggambar langsung di atas Google Maps (Map Services).

1. Buat layer baru (misal: **New Shapefile Layer**).
2. Pilih tipenya: **Point** (Titik), **Line** (Garis), atau **Polygon** (Area).
3. Klik icon **Pensil Kuning (Toggle Editing)** di toolbar atas. Sekarang, mode "menggambar" sudah aktif!

### 4.2 Si Magnet Ajaib (Snapping Toolbar)

Sebelum masuk ke fitur *Advanced*, kamu wajib mengaktifkan **Snapping** (ikon berbentuk magnet).

* **Fungsinya:** Agar kursor kamu otomatis "menempel" ke titik atau garis yang sudah ada.
* **Kenapa penting?** Supaya tidak ada celah (*gap*) antar bidang tanah atau ujung jalan yang tidak menyambung. Tanpa magnet ini, petamu akan berantakan saat dizoom.

### 4.3 Mengaktifkan Advanced Digitizing Toolbar

Jika toolbarnya belum muncul, klik kanan pada bagian kosong di area menu atas QGIS, lalu centang **Advanced Digitizing Toolbar**.

Ciri khas toolbar ini adalah ikon-ikonnya yang terlihat seperti alat teknik, dan ada satu ikon **penggaris dan segitiga** yang akan membuka panel angka di samping layar.

### 4.4 Fitur-Fitur "Sakti" yang Akan Sering Kamu Pakai

Di sini keseruannya dimulai. Ada beberapa alat yang akan membuat kerjamu jadi sangat rapi:

* **90 Derajat (Orthogonal):** Ingin menggambar gedung yang sudutnya benar-benar kotak (siku-siku)? Dengan fitur ini, setiap garis yang kamu tarik akan otomatis terkunci di sudut 90 derajat. Tidak ada lagi gedung yang miring!
* **Parallel & Perpendicular:** Kamu bisa membuat garis yang sejajar sempurna dengan jalan yang sudah ada, atau membuat garis yang tegak lurus tepat 90 derajat terhadap objek lain.
* **Circular String:** Ingin menggambar bundaran jalan atau tangki air yang bulat sempurna? Gunakan fitur ini. Kamu cukup klik di tiga titik, dan QGIS akan membuatkan lengkungan yang mulus.
* **Panel CAD:** Saat fitur ini aktif, kamu bisa mengetikkan angka spesifik. Misalnya: "Saya ingin garis ini panjangnya tepat 10,5 meter dengan sudut 45 derajat". Tinggal ketik angkanya, dan QGIS yang akan menggambarkannya untukmu.

### 4.5 Cara "Menyimpan" Hasil Gayamu

Setelah lelah menggambar, jangan langsung tutup QGIS!

1. Klik kembali ikon **Pensil Kuning (Toggle Editing)**.
2. QGIS akan bertanya: *"Do you want to save changes to layer?"*.
3. Pilih **Save**. Sekarang karyamu sudah abadi dalam bentuk data digital.

> **Tips Pro:**
> Selalu gunakan bantuan **Basemap (Google Satellite)** dari Bab 3 sebagai panduan saat menggambar. Zoom sedalam mungkin agar digitasi kamu mengikuti bentuk asli di lapangan.

---

Tentu, ini adalah panduan praktis untuk mengisi **Bab 4** agar pembaca tahu persis tombol mana yang harus diklik untuk melakukan aksi spesifik seperti menambah, menghapus, atau membelah area.

---

### 4.6 Panduan Klik-demi-Klik: Operasi Dasar Digitasi

Sebelum melakukan apa pun, pastikan kamu sudah klik ikon **Toggle Editing (Pensil Kuning)** pada layer yang ingin kamu ubah. Tanpa ini, semua tombol di bawah akan "mati" (berwarna abu-abu).

#### A. Menambah Data Baru (Add Feature)

Tergantung jenis layermu, ikonnya akan sedikit berbeda:

* **Titik (Point):** Klik ikon **Add Point Feature**. Lalu, klik sekali di peta pada lokasi yang diinginkan. Akan muncul kotak tabel, isi informasinya (misal: Nama Toko), lalu klik OK.
* **Garis (Line):** Klik ikon **Add Line Feature**. Klik kiri sekali untuk memulai, klik kiri lagi untuk setiap belokan. Untuk mengakhiri garis, **klik kanan**.
* **Area (Polygon):** Klik ikon **Add Polygon Feature**. Klik kiri di setiap sudut area yang ingin dibentuk. Jangan khawatir garisnya belum tertutup, QGIS akan otomatis menghubungkan titik terakhir dengan titik awal saat kamu **klik kanan** untuk selesai.

#### B. Menggeser atau Mengubah Bentuk (Vertex Tool)

Ingin menggeser satu pojokan gedung atau melengkungkan garis jalan yang miring?

1. Klik ikon **Vertex Tool** (gambarnya seperti titik yang sedang ditarik panah).
2. Dekatkan kursor ke sudut (titik) yang ingin diubah sampai muncul lingkaran kecil.
3. **Klik sekali** untuk "menangkap" titik tersebut, geser ke posisi baru, lalu **klik lagi** untuk melepaskannya.
4. Jika ingin menambah titik baru di tengah garis, cukup klik dua kali pada garis tersebut.

#### C. Menghapus Data (Delete Feature)

1. Gunakan ikon **Select Features** (ikon kotak kuning dengan tanda panah) untuk memilih objek yang ingin dihapus. Objek yang terpilih akan berubah warna menjadi kuning.
2. Tekan tombol **Delete** di keyboard, atau klik ikon **Delete Selected** (tong sampah) di toolbar.

#### D. Membelah Area (Split Features) — *Penting untuk Bagi Lahan!*

Misalnya kamu punya satu area sawah besar dan ingin membaginya menjadi dua karena dijual sebagian:

1. Pastikan toolbar **Advanced Digitizing** sudah aktif.
2. Pilih area yang ingin dibelah menggunakan tool **Select**.
3. Klik ikon **Split Features** (gambarnya seperti poligon yang terpotong garis diagonal).
4. Gambar garis pemotong: Mulailah klik dari **luar** area, tarik garis melewati area tersebut, dan akhiri dengan klik di **luar** area sisi satunya.
5. **Klik kanan**. *Serr!* Sekarang satu area tadi sudah terputus menjadi dua objek yang berbeda.

#### E. Menggabungkan Area (Merge Selected Features)

Kebalikan dari Split. Jika ada dua petak tanah yang ingin dijadikan satu:

1. Pilih kedua area tersebut (tahan tombol `Shift` saat memilih dengan tool **Select**).
2. Klik ikon **Merge Selected Features**.
3. Akan muncul tabel konfirmasi informasi mana yang mau dipakai, klik OK.

#### F. Membatalkan Kesalahan (Undo/Redo)

Salah tarik garis? Jangan panik.

* Tekan `Ctrl + Z` untuk **Undo** (mundur satu langkah).
* Tekan `Ctrl + Y` untuk **Redo** (maju lagi).
Ini sangat berguna jika kamu tidak sengaja menghapus objek penting.

---

### 4.7 Tips Anti-Gagal: Selalu Cek Status "Pensil"

Banyak pemula panik karena tidak bisa mengklik apa pun. Ingat rumus ini:

1. **Klik Layernya** di Panel Layer.
2. **Klik Pensilnya** (Toggle Editing).
3. **Lakukan Aksinya** (Tambah/Hapus/Potong).
4. **Simpan & Matikan Pensilnya** (Save Edits).

---

**Penutup Bab 4:**
Sekarang kamu sudah punya data yang akurat, rapi, dan presisi. Data ini sudah siap untuk "didandani" agar layak tampil. Di bab selanjutnya, kita akan belajar cara menyusun data ini ke dalam sebuah kertas virtual lengkap dengan judul dan legenda.

Yuk, lanjut ke **Bab 5: Membuat Print Layout!**

---

**Catatan untuk Penulis:**

* *Gunakan shortcut keyboard sebagai tips tambahan (misal: tombol 'V' untuk mengaktifkan snapping saat menggambar).*
* *Berikan peringatan agar pembaca sering-sering menekan tombol **Save Edits** (gambar disket di sebelah pensil) agar hasil kerja tidak hilang jika laptop mati mendadak.*

Mari kita masuk ke **Bab 5**. Jika di bab-bab sebelumnya kita sibuk "memasak" data di dapur QGIS, sekarang saatnya kita menata makanan tersebut di atas piring yang cantik agar siap disajikan.

---

# Bab 5: Membuat Print Layout (Dandanin Peta Jadi Profesional)

Data yang kamu buat sudah akurat, tapi kalau hanya ditunjukkan langsung dari layar QGIS, orang awam mungkin bingung melihatnya. Di bab ini, kita akan belajar cara memindahkan peta dari layar kerja ke sebuah **kertas virtual**. Di sini kita akan menambahkan judul, legenda, skala, dan segala atribut yang membuat petamu terlihat "resmi".

### 5.1 Membuka Lembaran Baru (New Print Layout)

Layar utama QGIS disebut *Map Canvas*, sedangkan tempat kita mendesain peta untuk dicetak disebut **Print Layout**.

1. Klik menu **Project** > **New Print Layout...**
2. Beri nama layout-mu (misal: "Peta Desa Saya"), lalu klik OK.
3. Akan muncul jendela baru yang putih bersih. Inilah kertas gambar kamu!

### 5.2 Memasukkan Peta ke Kertas (Add Map)

Kertasmu masih kosong. Untuk memunculkan peta yang sudah kamu buat tadi:

1. Klik ikon **Add Map** (gambarnya seperti kertas dengan tanda plus hijau).
2. Klik dan tahan di pojok kiri atas kertas, lalu tarik (drag) sampai membentuk kotak besar di tengah kertas.
3. *Muncul deh petamu!*

**Tips:** Jika ingin menggeser posisi peta di dalam kotak tersebut, gunakan ikon **Move Item Content** (ikon panah biru di dalam kotak). Kamu bisa *zoom in/out* dengan scroll mouse di dalam kotak itu.

### 5.3 Menambah Elemen Wajib Peta

Peta tanpa keterangan itu seperti surat tanpa pengirim. Yuk, kita lengkapi:

* **Judul Peta:** Klik ikon **Add Label** (huruf 'T'). Klik di bagian atas peta, lalu ketik judulnya di panel *Item Properties* di sebelah kanan. Kamu bisa ganti font dan ukurannya agar terlihat gagah.
* **Legenda (Keterangan):** Klik ikon **Add Legend**. Klik di bagian kosong pada kertas. QGIS akan otomatis menampilkan daftar layer yang kamu punya.
* *Tips:* Jika legendanya terlalu panjang, matikan centang **Auto-update** di panel kanan, lalu hapus layer yang tidak penting menggunakan tombol minus (-).


* **Skala (Scale Bar):** Klik ikon **Add Scale Bar**. Ini penting agar orang tahu berapa jarak asli di lapangan. Kamu bisa memilih gaya *Single Box* atau *Line Ticks*.
* **Arah Mata Angin (North Arrow):** Klik ikon **Add North Arrow**. Pilih desain jarum kompas yang paling kamu suka agar pembaca peta tidak tersesat.

### 5.4 Memberi Garis Koordinat (Grids)

Peta profesional biasanya punya garis-garis koordinat di pinggirnya.

1. Klik pada gambar petamu di kertas.
2. Di panel kanan (*Item Properties*), cari menu **Grids**, klik tanda plus (+), lalu klik **Modify Grid**.
3. Isi bagian **Interval**. Jika petamu skala desa, coba isi angka `0.001` atau sesuai koordinatmu.
4. Centang **Draw Coordinates** agar angka derajatnya muncul di pinggir peta.

### 5.5 Ekspor: Siap Dibagikan!

Setelah semua rapi, saatnya mengubah desain ini menjadi file yang bisa dikirim lewat WhatsApp atau dicetak:

* **Jadi Gambar (JPG/PNG):** Klik menu **Layout** > **Export as Image**. Cocok untuk diposting di media sosial atau presentasi.
* **Jadi Dokumen (PDF):** Klik menu **Layout** > **Export as PDF**. Ini adalah format terbaik jika kamu ingin mencetaknya ke kertas fisik agar ukurannya tetap presisi.

---

**Penutup Bab 5:**
Selamat! Kamu sekarang sudah bisa membuat peta versi cetak yang keren. Tapi, kita tidak berhenti di sini. Di zaman sekarang, orang lebih suka melihat peta yang bisa di-*zoom* dan diklik lewat HP.

Maka dari itu, bersiaplah untuk bagian yang paling seru di **Bab 6: Ekspor Peta ke Web dengan qgis2web!**

---

**Catatan untuk Penulis:**

* *Sertakan screenshot jendela Print Layout dengan tanda panah yang menunjuk ke alat-alat utama (Add Map, Add Legend, dll).*
* *Jelaskan sedikit tentang cara mengatur ukuran kertas (A4, A3, atau kustom) di bagian awal bab.*

Ini adalah bab yang akan membuat karyamu bisa diakses oleh siapa saja, di mana saja, tanpa perlu menginstal QGIS. Kita akan mengubah file peta yang "berat" menjadi sebuah website yang ringan dan interaktif.

---

# Bab 6: Ekspor Peta ke Web dengan qgis2web (Peta Online dalam Sekejap)

Pernah membayangkan punya website peta sendiri seperti Google Maps, di mana orang bisa klik suatu wilayah dan muncul informasi lengkapnya? Kabar baiknya: kamu tidak perlu jadi ahli *coding* untuk membuatnya. Kita akan menggunakan "jembatan" ajaib bernama plugin **qgis2web**.

### 6.1 Persiapan: Rapikan "Tampilan Dalam"

Sebelum diekspor, ada dua hal penting yang harus kamu siapkan di layar utama QGIS agar peta webmu nanti terlihat profesional:

1. **Ganti Nama Layer (Alias):** Nama file asli biasanya aneh, misalnya `batas_desa_fix_banget.shp`. Klik kanan layer > **Properties** > **Attributes Form**. Di bagian **Alias**, ganti jadi nama yang manusiawi, misalnya "Batas Desa". Nama inilah yang akan muncul di web nanti.
2. **Atur Pop-up:** Ini adalah informasi yang muncul saat orang mengklik peta. Masih di menu **Properties** > **Attributes Form**, pastikan kolom-kolom penting (seperti Nama Pemilik atau Luas) diatur sebagai "Text Edit" agar bisa terbaca di web.

### 6.2 Instalasi qgis2web

Sama seperti cara di Bab 3:

1. Buka menu **Plugins** > **Manage and Install Plugins**.
2. Cari `qgis2web`, lalu instal.
3. Setelah terinstal, akan muncul ikon kecil berwarna ungu seperti bola dunia di toolbar kamu.

### 6.3 Mengatur "Dapur" Ekspor

Klik menu **Web** > **qgis2web** > **Create Web Map**. Sebuah jendela besar akan muncul. Jangan pusing melihat banyaknya pilihan, fokus pada bagian ini saja:

* **Layers and Groups:** Centang layer mana saja yang mau kamu tampilkan di web. Pada kolom **Popup fields**, pilih "Inline label" agar saat diklik, muncul keterangan seperti `Nama: Sawah Pak Budi`.
* **Export Framework:** Kamu akan melihat pilihan **Leaflet**, **OpenLayers**, dan **Mapbox**.
* **Saran:** Pilih **Leaflet**. Ini adalah format paling populer, ringan, dan sangat mudah diedit nantinya di VS Code.


* **Appearance (Tampilan):** * Centang **Add layer list** agar pengunjung bisa mematikan/menghidupkan layer (seperti di Google Maps).
* Centang **Geolocate user** agar pengunjung bisa tahu posisi mereka saat ini di dalam peta (sangat berguna jika dibuka lewat HP di lapangan).
* Centang **Address search** jika ingin ada kolom pencarian alamat.



### 6.4 Preview dan Ekspor

Di bagian bawah jendela, klik tombol **Update Preview**. QGIS akan menampilkan simulasi website petamu di kotak sebelah kanan. Cobalah klik-klik petanya! Jika sudah puas:

1. Klik tab **Export**.
2. Pilih folder tempat kamu ingin menyimpan file website ini.
3. Klik tombol **Export**.
4. QGIS akan bekerja sebentar, lalu tiba-tiba browser (Chrome/Edge) kamu akan terbuka dan menampilkan petamu. *Voila!* Kamu baru saja membuat website peta pertama kamu.

### 6.5 Apa Saja Isi Hasil Ekspornya?

Jika kamu buka folder tempat kamu menyimpan hasil ekspor tadi, kamu akan melihat beberapa folder seperti `css`, `js`, `data`, `layers`, dan satu file bernama `index.html`.

> **Ingat:** File-file ini adalah satu kesatuan. Jangan dipisah-pisahkan! Jika ingin membagikan peta ini ke teman lewat flashdisk, kamu harus memberikan **seluruh folder** tersebut.

---

Saat menggunakan plugin `qgis2web`, kamu akan dihadapkan pada pilihan "mesin" (library JavaScript) yang akan menjalankan petamu di browser. Dua pilihan yang paling sering muncul adalah **Leaflet** dan **OpenLayers**.

Sebagai gambaran sederhana, bayangkan **Leaflet** adalah sebuah *City Car* yang lincah, sedangkan **OpenLayers** adalah sebuah *Truk/SUV* yang tangguh.

Berikut adalah perbandingan rincinya:

---

### 1. Leaflet (Si Lincah dan Populer)

Ini adalah pilihan *default* bagi hampir 90% pemula dan pengembang web map.

* **Kelebihan:**
* **Sangat Ringan:** Ukuran filenya kecil, sehingga peta sangat cepat terbuka saat diakses (terutama lewat HP).
* **Mobile Friendly:** Didesain sejak awal untuk nyaman digunakan di layar sentuh.
* **Tampilan Modern:** *Pop-up* dan kontrolnya terlihat bersih dan kekinian.
* **Ekosistem Besar:** Karena sangat populer, banyak sekali plugin tambahan jika kamu ingin menambah fitur lewat VS Code nanti.


* **Kekurangan:** Fitur bawaannya terbatas untuk analisis GIS yang sangat berat.
* **Kapan Pilih Leaflet?** Saat kamu ingin membuat peta interaktif standar, peta informasi desa, atau dasbor yang butuh performa cepat dan nyaman dibuka di HP.

### 2. OpenLayers (Si Tangguh dan Kompleks)

Jika kamu butuh fitur GIS kelas berat yang tidak bisa dilakukan oleh Leaflet, di sinilah OpenLayers beraksi.

* **Kelebihan:**
* **Fitur Melimpah:** Mendukung hampir semua format data GIS yang ada di dunia.
* **Proyeksi Kompleks:** Sangat jago menangani berbagai macam sistem koordinat (bukan hanya WGS84).
* **Manipulasi Data:** Lebih kuat dalam hal editing data langsung di browser atau menangani ribuan poligon sekaligus tanpa *lag*.


* **Kekurangan:** Filenya lebih berat (lambat saat loading awal) dan kodenya lebih rumit untuk dimodifikasi oleh pemula di VS Code.
* **Kapan Pilih OpenLayers?** Saat kamu sedang mengerjakan proyek analisis geospasial yang rumit, peta yang butuh sistem koordinat khusus, atau aplikasi GIS tingkat lanjut.

---

### Tabel Perbandingan Cepat

| Fitur | Leaflet | OpenLayers |
| --- | --- | --- |
| **Ukuran File** | Ringan (Kecil) | Berat (Besar) |
| **Kecepatan** | Sangat Cepat | Standar |
| **Kemudahan Edit Kode** | Mudah (User-Friendly) | Menengah - Sulit |
| **Tampilan di HP** | Sangat Baik | Baik |
| **Kemampuan GIS** | Standar (Cukup untuk web) | Sangat Kuat |


# Bab 7: Edit Tampilan OpenLayers dengan VS Code (Sentuhan Akhir Sang Profesional)

Setelah melakukan ekspor di Bab 6 dengan pilihan **OpenLayers**, kamu akan mendapatkan folder yang strukturnya sedikit berbeda dengan Leaflet. Di bab ini, kita akan menggunakan **Visual Studio Code (VS Code)** untuk membedah dan memoles peta "SUV" kita ini agar tampil lebih elegan.

### 7.1 Persiapan: Membuka Proyek OpenLayers

1. Buka **VS Code**.
2. Tarik (*drag & drop*) seluruh folder hasil ekspor OpenLayers ke jendela VS Code.
3. Perhatikan struktur foldernya. Kamu akan melihat folder `layers`, `resources`, `styles`, dan file utama `index.html`.

### 7.2 Mengenal Struktur File OpenLayers

Berbeda dengan Leaflet yang sangat bergantung pada CSS untuk label, OpenLayers lebih banyak mengatur tampilan melalui file JavaScript di dalam folder **styles**.

* **index.html:** Kerangka utama website.
* **styles/:** Berisi file `.js` yang mengatur bagaimana garis, warna, dan label setiap layer digambar (misal: `jalan_1_style.js`).
* **layers/layers.js:** File "otak" yang mendefinisikan urutan layer dan sumber datanya.

### 7.3 Mengganti Judul Tab Browser

Sama seperti sebelumnya, ini adalah langkah paling dasar:

1. Klik file `index.html`.
2. Cari tag `<title>qgis2web</title>`.
3. Ganti menjadi judul yang kamu inginkan, misalnya: `<title>Peta Infrastruktur OpenLayers</title>`.

### 7.4 Menambahkan Logo di Atas Peta

Karena OpenLayers menggunakan sistem *overlay* yang kuat, kita bisa menambahkan logo dengan posisi absolut di atas kanvas peta. Tambahkan kode ini di dalam `index.html` tepat di bawah tag `<body>`:

```html
<div id="logo-container" style="position: absolute; top: 20px; left: 60px; z-index: 1000; pointer-events: none;">
    <img src="logo-instansi.png" style="width: 80px; opacity: 0.9;">
</div>

```

### 7.5 Menyesuaikan Label Berdasarkan Zoom (Logika OpenLayers)

OpenLayers tidak menggunakan "Zoom Level" (1, 2, 3...) secara langsung dalam perhitungannya seperti Leaflet, melainkan menggunakan **Resolution**. Namun, kita tetap bisa menambahkan logika zoom di `index.html`.

Jika kamu ingin menyembunyikan elemen tertentu saat zoom menjauh, tambahkan skrip ini di bagian bawah sebelum `</body>`:

```javascript
map.getView().on('change:resolution', function() {
    var zoom = map.getView().getZoom();
    var element = document.getElementById('logo-container');
    
    // Contoh: Sembunyikan logo jika zoom terlalu jauh (di bawah level 10)
    if (zoom < 10) {
        element.style.opacity = '0';
    } else {
        element.style.opacity = '0.9';
    }
});

```

### 7.6 Mengubah Style Label (Warna & Font)

Dalam OpenLayers hasil `qgis2web`, label seringkali "digambar" ke dalam kanvas. Untuk mengubahnya, kamu harus masuk ke folder **styles**.

1. Buka folder `styles`.
2. Pilih file style layer yang ingin diubah (contoh: `desa_style.js`).
3. Cari bagian `text: new ol.style.Text({ ... })`.
4. Di sana kamu bisa mengubah `font`, `fill` (warna teks), dan `stroke` (garis tepi teks).

```javascript
// Contoh mengubah font di dalam file style .js
text: new ol.style.Text({
    font: 'bold 14px "Arial", sans-serif',
    fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'}),
    placement: 'point'
})

```

---

**Penutup Bab 7:**
Kini peta OpenLayers-mu sudah memiliki identitas dan perilaku yang lebih pintar. Langkah terakhir yang tersisa adalah membagikannya kepada dunia. Mari kita lanjut ke **Bab 8: Deployment ke GitHub Pages** untuk mempublikasikannya secara gratis!

---

Tentu, ini adalah penyesuaian **Bab 8** dengan penekanan pada **OpenLayers**. Karena OpenLayers menyertakan library yang lebih lengkap di folder `resources`, ukuran foldernya terkadang sedikit lebih besar dibanding Leaflet. Kita akan bahas cara menanganinya agar proses *deployment* tetap lancar.

---

# Bab 8: Deployment OpenLayers ke GitHub Pages (Mempublikasikan Peta ke Dunia)

Setelah memoles tampilan di VS Code, langkah terakhir adalah memindahkan peta dari laptopmu ke server internet. Kita akan menggunakan **GitHub Pages**. Karena OpenLayers cenderung memiliki struktur file yang lebih "padat" (terutama di folder `resources`), bab ini akan memandumu melakukan unggahan dengan benar.

### 8.1 Persiapan Akun dan Repository

1. Buka [github.com](https://github.com) dan masuk ke akunmu.
2. Klik tombol **"+"** > **New repository**.
3. Nama Repository: `peta-desa-openlayers` (gunakan huruf kecil dan tanda hubung).
4. Pilih **Public**, centang **Add a README file**, lalu klik **Create repository**.

### 8.2 Mengunggah File OpenLayers

Berbeda dengan Leaflet yang simpel, OpenLayers hasil ekspor `qgis2web` memiliki folder `resources` yang berisi library JavaScript yang cukup besar.

1. Klik **Add file** > **Upload files**.
2. Buka folder hasil ekspor kamu di komputer.
3. **Wajib:** Pilih **semua** file dan folder (`css`, `data`, `layers`, `resources`, `styles`, dan `index.html`).
4. Tarik semuanya ke kotak unggah GitHub.

> **Tips Penting:** Jika browser kamu "hang" saat mengunggah folder `resources` (karena isinya banyak file kecil), cobalah mengunggah folder tersebut secara bertahap atau gunakan aplikasi **GitHub Desktop** jika folder tersebut melebihi 25MB.

### 8.3 Mengaktifkan Website

Setelah proses unggah selesai dan kamu sudah menekan tombol **Commit changes**:

1. Masuk ke menu **Settings** di bagian atas repository.
2. Klik menu **Pages** di sisi kiri.
3. Di bawah **Branch**, pilih **main** (atau *master*) dan klik **Save**.

### 8.4 Menangani Masalah "Peta Tidak Muncul"

Khusus untuk OpenLayers, terkadang peta tidak langsung muncul (layar putih) setelah diunggah. Berikut cara mengeceknya:

* **Case Sensitivity:** OpenLayers sangat peka terhadap huruf besar/kecil. Pastikan nama file di folder `layers` atau `styles` sama persis dengan yang tertulis di kode `index.html`.
* **Path Files:** Pastikan folder `resources` ikut terunggah dengan sempurna. Folder ini berisi "nyawa" dari OpenLayers; tanpa folder ini, peta tidak akan bisa menggambar apa pun.
* **HTTPS:** GitHub Pages menggunakan protokol HTTPS. Jika kamu memanggil *Map Services* (Bab 3) yang masih menggunakan HTTP biasa, browser mungkin akan memblokirnya. Pastikan semua link diawali dengan `https://`.

### 8.5 Mengecek Hasil Akhir

Tunggu sekitar 2 menit, lalu segarkan halaman **Settings > Pages**. Link website kamu akan muncul. Klik link tersebut untuk melihat peta OpenLayers interaktifmu beraksi di internet!

---

# PENUTUP BUKU

Selamat! Anda telah menyelesaikan seluruh rangkaian tutorial dari pengenalan GIS hingga mempublikasikan peta online menggunakan **OpenLayers**.

Meskipun OpenLayers membutuhkan ketelitian lebih tinggi dalam hal struktur file dan kode JavaScript dibanding Leaflet, namun Anda kini memiliki sistem peta yang sangat stabil dan siap dikembangkan lebih jauh (seperti menambahkan fitur pencarian kustom atau integrasi data *real-time*).

**Teruslah Bereksplorasi!**
Dunia GIS sangat luas. Jangan berhenti di sini. Gunakan pengetahuan ini untuk memberikan dampak nyata bagi masyarakat melalui visualisasi data yang informatif dan akurat.

---

Tentu, ini adalah **Lampiran D** yang sangat berharga. Fitur pencarian (Search Bar) akan membuat peta OpenLayers kamu terasa jauh lebih profesional, karena pengguna bisa langsung mengetik alamat atau nama lokasi untuk menemukannya di peta.

Kita akan menggunakan layanan gratis dari **OpenStreetMap Nominatim** untuk fitur pencarian ini.

---

# Lampiran D: Menambahkan Fitur Pencarian (Search Bar) di OpenLayers

Secara *default*, `qgis2web` untuk OpenLayers terkadang tidak menyertakan kolom pencarian yang mumpuni. Kita akan menambahkannya secara manual dengan menyisipkan sedikit kode HTML, CSS, dan JavaScript di file `index.html`.

### Langkah 1: Tambahkan HTML (Input Pencarian)

Buka file `index.html` di VS Code. Cari tag `<body>`, lalu tempelkan kode ini tepat di bawah tag pembuka `<body>`:

```html
<div id="search-container" style="position: absolute; top: 10px; left: 50px; z-index: 1000; background: white; padding: 5px; border-radius: 4px; box-shadow: 0 1px 4px rgba(0,0,0,0.3);">
    <input type="text" id="search-input" placeholder="Cari lokasi..." style="width: 200px; padding: 5px; border: 1px solid #ccc;">
    <button id="search-button" style="padding: 5px; cursor: pointer;">Cari</button>
</div>

```

### Langkah 2: Tambahkan Logika JavaScript (Geocoding)

Scroll ke bawah file `index.html` sampai kamu menemukan bagian akhir skrip sebelum tag penutup `</body>`. Tambahkan kode berikut:

```javascript
<script>
    document.getElementById('search-button').onclick = function() {
        var query = document.getElementById('search-input').value;
        if (query.length > 0) {
            // Memanggil API Gratis Nominatim (OpenStreetMap)
            fetch('https://nominatim.openstreetmap.org/search?format=json&q=' + query)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        var res = data[0];
                        var lat = parseFloat(res.lat);
                        var lon = parseFloat(res.lon);

                        // Mengubah koordinat ke sistem OpenLayers (Web Mercator)
                        var center = ol.proj.fromLonLat([lon, lat]);

                        // Menggerakkan peta dengan animasi halus
                        map.getView().animate({
                            center: center,
                            zoom: 16, // Level zoom setelah ditemukan
                            duration: 2000 // Durasi animasi 2 detik
                        });
                    } else {
                        alert("Lokasi tidak ditemukan!");
                    }
                });
        }
    };

    // Opsional: Agar bisa tekan 'Enter' untuk mencari
    document.getElementById('search-input').addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById('search-button').click();
        }
    });
</script>

```

---

### Kenapa Kode Ini Penting?

1. **User Experience (UX):** Pengunjung tidak perlu menggeser peta secara manual ke seluruh dunia; mereka cukup mengetik "Balai Desa Banjarsari" atau "Jakarta" dan peta akan terbang menuju lokasi tersebut secara otomatis.
2. **Animasi Halus:** Penggunaan `map.getView().animate` memberikan efek transisi yang keren, membuat peta kamu terlihat seperti aplikasi profesional buatan perusahaan besar.
3. **Layanan Gratis:** Kita menggunakan API Nominatim yang gratis dan tidak memerlukan kunci API (*API Key*) yang rumit untuk penggunaan sederhana.



