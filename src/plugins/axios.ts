import axios from "axios";

// Buat instance axios dengan konfigurasi dasar
const api = axios.create({
  baseURL: "https://api.example.com", // Ganti dengan base URL API Anda
  timeout: 10000, // Set waktu timeout request
  headers: { "Content-Type": "application/json" },
});

export default api;
