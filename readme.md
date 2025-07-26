# Higo Backend (be-higo)

Backend service untuk kebutuhan technical test Higo. Aplikasi ini dibangun menggunakan **Express.js** dan **TypeScript**, dilengkapi dengan ORM **Prisma**, dokumentasi API menggunakan **Swagger**, dan struktur file otomatis melalui **express-file-routing**.

## 📦 Tech Stack

- **Node.js + Express.js** (RESTful API)
- **TypeScript**
- **Prisma ORM**
- **MongoDB**
- **Swagger** (API Documentation)
- **express-file-routing** (File-based routing)

## 🚀 Fitur Utama

- Routing otomatis berbasis file (`express-file-routing`)
- Dokumentasi API otomatis via Swagger (`swagger-autogen` & `swagger-ui-express`)
- Struktur project yang modular dan scalable
- Mendukung konfigurasi environment menggunakan `.env`
- Middleware logging (`morgan`) & CORS

## 📁 Struktur Direktori

```bash
be-higo/
├── prisma/ # Prisma schema & migration files
├── src/
│ ├── routes/ # Auto-routed API endpoints (by file)
│ ├── middlewares/ # Custom middlewares
│ ├── app.ts # App entry (for dev)
├── dist/ # Hasil build production
├── .env # Environment variables
├── swagger-output.json # Auto-generated Swagger docs
├── tsconfig.json
└── package.json
```

## ⚙️ Instalasi

1. Clone repository ini:

```bash
git clone https://github.com/username/be-higo.git
cd be-higo
Install dependencies:
```

2. Install dependencies:

```bash
npm install
```

3. Setup ENV:

```bash
DATABASE_URL="mongodb+srv://<user>:<password>@cluster.mongodb.net/db_name?retryWrites=true&w=majority"
PORT=5000
```

4. Generate Prisma Client:

```bash
npx prisma generate
```

## 🧪 Menjalankan Server

Mode Development

```bash
npm run dev
```

Mode Production

```bash
npm run build
npm start
```

Server akan berjalan di port sesuai variabel PORT di .env.

📘 Dokumentasi API
Setelah server berjalan, dokumentasi Swagger dapat diakses melalui:

```bash
http://localhost:PORT/docs
Swagger dibuat otomatis menggunakan swagger-autogen.
```

🧾 Script Penting

Script Fungsi

```bash
npm run dev	Menjalankan server dev dengan Nodemon
npm run build	Compile TypeScript ke JS
npm start	Menjalankan server hasil build
```
