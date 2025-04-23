const express = require('express');
const mongoose = require('mongoose');
const Category = require('./models/categoryModel'); 
const Brand = require('./models/brandModel'); 
const productRoutes = require('./routes/productRoutes'); 
const app = express();
const PORT = 3000;


const mongoURI = 'mongodb+srv://aldofernando2006:yp64FEx2RrxWkLSj@api-shopee.zbwcsoz.mongodb.net/?retryWrites=true&w=majority&appName=api-shopee';

// Koneksi ke MongoDB Atlas
mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB Atlas Connected!'))
  .catch((err) => console.error('❌ MongoDB Atlas connection error:', err));


// Middleware untuk parsing body JSON
app.use(express.json());

// Endpoint untuk meniru API Shopee "get_category"
app.get('/api/v2/product/get_category', async (req, res) => {
  try {
    const categories = await Category.find()
      .select('-_id -__v');  // Exclude _id and __v fields from the response

    if (!categories || categories.length === 0) {
      return res.status(404).json({ error: 'No categories found' });
    }

    res.json({
      error: '',
      message: 'Data retrieved successfully',
      warning: '',
      request_id: 'aaaaaaa',
      response: {
        category_list: categories,
      },
    });
  } catch (err) {
    console.error('❌ Error fetching categories:', err);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// Menggunakan routes produk
app.use('/api/v2/product', productRoutes);  // Memetakan rute produk ke /api/v2/product

// Jalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
