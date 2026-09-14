# Project Setup Plan: Bun + ElysiaJS + Drizzle + MySQL

## Deskripsi
Dokumen ini berisi instruksi tingkat tinggi (high-level) untuk menginisialisasi proyek backend baru di dalam folder ini. Proyek ini akan menggunakan **Bun** sebagai runtime/package manager utama, **ElysiaJS** sebagai framework web, dan **Drizzle ORM** dengan database **MySQL**.

## Kebutuhan (Dependencies)
- **Bun** (Runtime & Package Manager)
- **ElysiaJS** (Web Framework)
- **Drizzle ORM** (Object-Relational Mapping)
- **MySQL** (Driver database, misal: `mysql2`)
- **Drizzle Kit** (Untuk keperluan migrasi skema database)

## Instruksi Implementasi

1. **Inisialisasi Proyek**
   - Inisialisasi proyek baru berbasis Bun (misal menggunakan `bun init`) di folder repositori ini.
   - Pastikan file `package.json`, `tsconfig.json` (jika menggunakan TypeScript), dan struktur dasar terbuat.

2. **Instalasi Dependensi**
   - Gunakan Bun untuk menginstal dependensi utama: `elysia`, `drizzle-orm`, dan driver untuk MySQL.
   - Instal juga dependensi untuk development: `drizzle-kit` dan kebutuhan lain yang sekiranya diperlukan.

3. **Setup Database (Drizzle & MySQL)**
   - Buat file konfigurasi koneksi ke database MySQL (kredensial harap diambil dari file `.env`).
   - Buat definisi skema (schema) database sederhana menggunakan Drizzle.
   - Siapkan konfigurasi `drizzle.config.ts` agar Drizzle Kit dapat membaca skema dan melakukan generate/push migrasi.

4. **Setup Web Server (ElysiaJS)**
   - Buat entry point utama (misalnya `src/index.ts`).
   - Inisialisasi server ElysiaJS.
   - Hubungkan instance Drizzle ORM yang sudah dibuat agar siap digunakan di dalam route.
   - Buat satu route sederhana (contoh: `/` atau `/health`) untuk memverifikasi bahwa server ElysiaJS berjalan dengan baik.

5. **Pengujian (Sanity Check)**
   - Tambahkan script pada `package.json` untuk menjalankan server (misal: `bun run dev`).
   - Pastikan aplikasi bisa berjalan dengan lancar tanpa error dan berhasil terkoneksi ke database.

## Catatan
- Jangan terjebak pada business logic detail; fokus utamanya adalah infrastruktur, setup, dan wiring (menghubungkan framework dengan ORM dan Database).
- Pastikan kodenya bersih, rapi, dan mudah dibaca untuk dilanjutkan oleh developer/model lain di tahap berikutnya.
