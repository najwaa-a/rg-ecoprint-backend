# RG Ecoprint Backend (NestJS)

Backend service untuk aplikasi **RG Ecoprint**, dibangun menggunakan kerangka kerja **NestJS** dengan arsitektur MVC (Model-View-Controller), validasi DTO, dan penanganan *error* untuk mendukung manajemen katalog produk secara *real-time*.

## 🚀 Fitur Utama
* **RESTful API CRUD:** Mengelola data produk (Create, Read, Update, Delete) secara efisien.
* **DTO Validation:** Menggunakan `class-validator` dan `class-transformer` untuk memastikan keamanan serta keabsahan data input.
* **Error Handling:** Penanganan pengecualian (*exception handling*) untuk respons API yang konsisten.
* **CORS Enabled:** Diaktifkan untuk mendukung integrasi penuh dengan frontend berbasis React / Vite (`rg-ecoprint-frontend`).

## 🛠️ Teknologi yang Digunakan
* **Node.js** & **TypeScript**
* **NestJS Framework**
* **Class Validator & Class Transformer**

---

## ⚙️ Cara Menjalankan Proyek

1. **Clone repository ini:**
   ```bash
   git clone [https://github.com/najwaa-a/rg-ecoprint-backend.git](https://github.com/najwaa-a/rg-ecoprint-backend.git)
   cd rg-ecoprint-backend

```

2. **Installdependencies:**
   ```bash
   npm install

```

3. **Jalankan server dalam mode *development*:**
   ```bash
   npm run start:dev

```

4. Server akan berjalan secara lokal di port `http://localhost:3000`.

---

## 🧪 Dokumentasi Endpoint API

Base URL: `http://localhost:3000/products`

| Method | Endpoint | Deskripsi |
| --- | --- | --- |
| **GET** | `/products` | Menampilkan seluruh daftar produk. |
| **GET** | `/products/:id` | Mencari produk spesifik berdasarkan ID. |
| **POST** | `/products` | Menambahkan produk baru (dengan validasi DTO). |
| **PATCH** | `/products/:id` | Memperbarui data produk berdasarkan ID. |
| **DELETE** | `/products/:id` | Menghapus produk dari sistem berdasarkan ID. |

---

## 👩‍💻 Identitas

* **Najwa Areefa Ghaisani** (103122400028)
```
