# Newbie Vibe Coding Backend

Backend service dibangun dengan **Bun**, **ElysiaJS**, **Drizzle ORM**, dan **MySQL**.

## Kebutuhan
- [Bun](https://bun.sh) (v1.4+)
- MySQL database (lokal atau cloud instance)

## Menjalankan Proyek

1. **Install Dependensi**
   ```bash
   bun install
   ```

2. **Setup Environment Variables**
   Salin `.env.example` menjadi `.env` lalu sesuaikan kredensial database Anda:
   ```bash
   cp .env.example .env
   ```

3. **Database Migration**
   - Generate migration files dari skema:
     ```bash
     bun run db:generate
     ```
   - Terapkan langsung ke database:
     ```bash
     bun run db:push
     ```
   - Buka Drizzle Studio:
     ```bash
     bun run db:studio
     ```

4. **Menjalankan Server**
   - Mode Development (dengan auto-reload):
     ```bash
     bun run dev
     ```
   - Mode Production:
     ```bash
     bun run start
     ```

## Endpoint Dasar
- `GET /`: Pesan sambutan & status server
- `GET /health`: Healthcheck status server dan status koneksi database
- `GET /users`: Contoh query mengambil data user dari Drizzle ORM
