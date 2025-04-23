const mongoose = require('mongoose');
const Category = require('../models/categoryModel');  // Pastikan model kategori sudah dibuat dengan benar

const seedCategories = async () => {
  const categories = [
    { category_id: 123, parent_category_id: 456, original_category_name: 'Fashion', display_category_name: 'Fashion New', has_children: false },
    { category_id: 124, parent_category_id: 457, original_category_name: 'Electronics', display_category_name: 'Electronics New', has_children: true },
  ];

  try {
    // Hapus kategori lama jika ada
    await Category.deleteMany({});

    // Tambahkan kategori baru
    await Category.insertMany(categories);
    console.log('✅ Categories seeded!');
  } catch (err) {
    console.error('❌ Error seeding categories:', err);
  }
};

module.exports = seedCategories;  // Mengekspor fungsi seedCategories
