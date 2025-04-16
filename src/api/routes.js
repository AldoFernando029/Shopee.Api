const express = require('express');

// Mengimpor route yang relevan untuk Shopee API (misalnya, pembayaran, produk, kategori)
const payment = require('./components/Payment/Payment-route');
const product = require('./components/product/product-route');

module.exports = () => {
  const app = express.Router();

  // Integrasi route Shopee API
  payment(app);  // Menangani transaksi pembayaran
  product(app);  // Menangani produk dan kategori Shopee

  return app;
};