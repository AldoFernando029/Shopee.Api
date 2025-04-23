const express = require('express');
const Product = require('../models/productModel');  
const Brand = require('../models/brandModel');
const router = express.Router();

// Endpoint untuk menambahkan produk baru
router.post('/add_item', async (req, res) => {
  const {
    item_name, description, weight, pre_order, images, item_status, price_info,
    logistic_info, item_id, attributes, category_id, dimension, condition, video_info,
    wholesale, brand, item_dangerous, description_info, complaint_policy, seller_stock
  } = req.body;

  // Validasi data yang diterima
  if (!item_name || !description || !price_info || !item_id || !category_id) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Membuat instance produk baru
    const newProduct = new Product({
      item_name, description, weight, pre_order, images, item_status, price_info,
      logistic_info, item_id, attributes, category_id, dimension, condition, video_info,
      wholesale, brand, item_dangerous, description_info, complaint_policy, seller_stock
    });

    // Simpan produk ke database
    await newProduct.save();

    // Kirimkan response dengan data produk yang berhasil disimpan
    res.status(201).json({
      message: "-",
      warning: "-",
      request_id: "98eae35efff24dd0974c21a847127184",  
      response: {
        description: newProduct.description,
        weight: newProduct.weight,
        pre_order: newProduct.pre_order,
        item_name: newProduct.item_name,
        images: newProduct.images,
        item_status: newProduct.item_status,
        price_info: newProduct.price_info,
        logistic_info: newProduct.logistic_info,
        item_id: newProduct.item_id,
        attributes: newProduct.attributes,
        category_id: newProduct.category_id,
        dimension: newProduct.dimension,
        condition: newProduct.condition,
        video_info: newProduct.video_info,
        wholesale: newProduct.wholesale,
        brand: newProduct.brand,
        item_dangerous: newProduct.item_dangerous,
        description_info: newProduct.description_info,
        description_type: "-",
        complaint_policy: newProduct.complaint_policy,
        seller_stock: newProduct.seller_stock,
      },
      error: "-"
    });
  } catch (err) {
    console.error('❌ Error adding product:', err);
    res.status(500).json({ error: 'Failed to add product' });
  }
});

// Endpoint untuk memperbarui produk berdasarkan item_id
router.post('/update_item', async (req, res) => {
    const {
      item_id, item_name, description, weight, price_info, logistic_info, attributes,
      category_id, dimension, condition, video_info, wholesale, brand, item_dangerous, description_info, complaint_policy, seller_stock
    } = req.body;
  
    // Validasi data yang diterima
    if (!item_id) {
      return res.status(400).json({ error: 'Missing required fields (item_id)' });
    }
  
    try {
      // Cari produk berdasarkan item_id
      const updatedProduct = await Product.findOneAndUpdate(
        { item_id: item_id },  
        {
          item_name, description, weight, price_info, logistic_info, attributes, category_id, dimension, condition, video_info,
          wholesale, brand, item_dangerous, description_info, complaint_policy, seller_stock
        },
        { new: true } // Mengembalikan produk yang sudah diperbarui
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Membuat request_id unik
      const requestId = '326527603d034fd1b2dd6a74d70ade54';  // Bisa digenerate jika diperlukan
  
      // Kirimkan response dengan produk yang berhasil diperbarui sesuai dengan format yang diinginkan
      res.json({
        message: "-",
        warning: "-",
        request_id: requestId,
        response: {
          description: updatedProduct.description,
          weight: updatedProduct.weight,
          pre_order: updatedProduct.pre_order,
          item_name: updatedProduct.item_name,
          item_status: updatedProduct.item_status || "NORMAL",  // Jika tidak ada, set default "NORMAL"
          images: updatedProduct.images || { image_id_list: ["-"], image_url_list: ["-"] },
          logistic_info: updatedProduct.logistic_info || [{ estimated_shipping_fee: 0, logistic_name: "-", enabled: true, logistic_id: 0, is_free: true }],
          item_id: updatedProduct.item_id,
          category_id: updatedProduct.category_id,
          dimension: updatedProduct.dimension,
          condition: updatedProduct.condition || "NEW",  // Jika tidak ada, set default "NEW"
          brand: updatedProduct.brand || { brand_id: 0, original_brand_name: "unknown" },
          item_dangerous: updatedProduct.item_dangerous || 0,
          complaint_policy: updatedProduct.complaint_policy || { warranty_time: "-", exclude_entrepreneur_warranty: true, additional_information: "-" },
          description_info: updatedProduct.description_info || { extended_description: { field_list: [{ field_type: "-", text: "-" }] } },
          description_type: updatedProduct.description_type || "-",
        },
        error: "-"
      });
    } catch (err) {
      console.error('❌ Error updating product:', err);
      res.status(500).json({ error: 'Failed to update product' });
    }
  });

  // Endpoint untuk menghapus produk berdasarkan item_id
router.post('/delete_item', async (req, res) => {
    const { item_id } = req.body;
  
    // Validasi data yang diterima
    if (!item_id) {
      return res.status(400).json({ error: 'Missing required field (item_id)' });
    }
  
    try {
      // Cari dan hapus produk berdasarkan item_id
      const deletedProduct = await Product.findOneAndDelete({ item_id: item_id });
  
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Kirimkan response setelah produk berhasil dihapus
      res.json({
        message: "Product deleted successfully",
        warning: "-",
        request_id: "unique_request_id",  // Bisa digenerate sesuai kebutuhan
        response: {
          item_id: deletedProduct.item_id,
          item_name: deletedProduct.item_name,
        },
        error: "-"
      });
    } catch (err) {
      console.error('❌ Error deleting product:', err);
      res.status(500).json({ error: 'Failed to delete product' });
    }
  });
  // Endpoint untuk mendapatkan informasi ekstra produk berdasarkan item_id
router.get('/get_item_extra_info', async (req, res) => {
    const { item_id } = req.query;  // Mengambil item_id dari query parameter
  
    if (!item_id) {
      return res.status(400).json({ error: 'Missing required field (item_id)' });
    }
  
    try {
      // Cari produk berdasarkan item_id
      const product = await Product.findOne({ item_id: item_id });
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Data tambahan untuk produk
      const extraInfo = {
        sale: product.sale || 0,  
        views: product.views || 0,
        likes: product.likes || 0,
        rating_star: product.rating_star || 0,
        comment_count: product.comment_count || 0,
      };
  
      // Kirimkan response sesuai format yang diinginkan
      res.json({
        message: "",
        warning: "",
        request_id: "175d7db49b4245e68cc0e43df07f721c",  // Contoh request_id, bisa digenerate sesuai kebutuhan
        response: {
          item_list: [
            {
              item_id: product.item_id,
              sale: extraInfo.sale,
              views: extraInfo.views,
              likes: extraInfo.likes,
              rating_star: extraInfo.rating_star,
              comment_count: extraInfo.comment_count,
            },
          ],
        },
        error: "",
      });
    } catch (err) {
      console.error('❌ Error fetching item extra info:', err);
      res.status(500).json({ error: 'Failed to fetch item extra info' });
    }
  });

  // Endpoint untuk memperbarui stock produk berdasarkan item_id dan stock_list
router.post('/update_stock', async (req, res) => {
    const { item_id, stock_list } = req.body;
  
    // Validasi input
    if (!item_id || !Array.isArray(stock_list) || stock_list.length === 0) {
      return res.status(400).json({ error: 'Missing required fields (item_id, stock_list)' });
    }
  
    try {
      const successList = [];
      const failureList = [];
  
      // Cari produk berdasarkan item_id
      const product = await Product.findOne({ item_id });
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Proses setiap item dalam stock_list
      for (const stockItem of stock_list) {
        const { model_id, seller_stock } = stockItem;
  
        // Validasi seller_stock
        if (!Array.isArray(seller_stock) || seller_stock.length === 0) {
          failureList.push({ model_id, failed_reason: 'Invalid seller_stock data' });
          continue;
        }
  
        // Memperbarui seller_stock untuk model_id
        const updatedStocks = [];
  
        for (const stock of seller_stock) {
          const { location_id, stock: newStock } = stock;
  
          // Cari seller_stock yang sesuai berdasarkan location_id
          const existingStock = product.seller_stock.find(
            (item) => item.location_id === location_id
          );
  
          if (existingStock) {
            // Memperbarui stok yang ada
            existingStock.stock = newStock;
            updatedStocks.push({ model_id, location_id, stock: newStock });
          } else {
            // Jika tidak ada seller_stock untuk location_id, beri alasan kegagalan
            failureList.push({ model_id, failed_reason: `Location ${location_id} not found` });
          }
        }
  
        // Jika ada stok yang berhasil diupdate, simpan perubahan ke database
        if (updatedStocks.length > 0) {
          await product.save();
          successList.push(...updatedStocks);
        }
      }
  
      // Kirimkan response dengan hasil
      res.json({
        message: "-",
        warning: "-",
        request_id: "unique_request_id",  // ID request unik
        response: {
          failure_list: failureList,
          success_list: successList,
        },
        error: "-",
      });
    } catch (err) {
      console.error('❌ Error updating stock:', err);
      res.status(500).json({ error: 'Failed to update stock' });
    }
  });



// Endpoint untuk menambahkan model ke produk berdasarkan item_id
router.post('/add_model', async (req, res) => {
  const { item_id, model_list } = req.body;

  // Validasi input
  if (!item_id || !Array.isArray(model_list) || model_list.length === 0) {
    return res.status(400).json({ error: 'Missing required fields (item_id, model_list)' });
  }

  try {
    const successList = [];
    const failureList = [];

    // Cari produk berdasarkan item_id
    const product = await Product.findOne({ item_id });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Proses setiap item dalam model_list
    for (const model of model_list) {
      const { model_id, original_price, model_sku, seller_stock, weight, dimension, pre_order } = model;

      // Validasi model_id dan original_price
      if (!model_id || !original_price) {
        failureList.push({ model_id, failed_reason: 'Missing model_id or original_price' });
        continue;
      }

      // Membuat objek model baru untuk ditambahkan ke product
      const newModel = {
        model_id,
        original_price,
        model_sku,
        seller_stock,
        weight,
        dimension,
        pre_order: pre_order || { is_pre_order: false, days_to_ship: 2 },  // Default pre_order jika tidak ada
      };

      // Menambahkan model baru ke produk
      product.models = product.models || [];  
      product.models.push(newModel);

      // Menambahkan model yang berhasil ditambahkan ke successList
      successList.push({
        model_id,
        original_price,
        model_sku,
        seller_stock,
      });
    }

    // Simpan produk setelah model ditambahkan
    await product.save();

    // Kirimkan response dengan hasil
    res.json({
      message: "-",
      warning: "-",
      request_id: "aaaaaaa",  // ID request unik
      response: {
        failure_list: failureList,
        success_list: successList,
      },
      error: "",
    });
  } catch (err) {
    console.error('❌ Error adding model:', err);
    res.status(500).json({ error: 'Failed to add model' });
  }
});


  
// Endpoint untuk memperbarui harga model produk berdasarkan item_id dan price_list
router.post('/update_price', async (req, res) => {
  const { item_id, price_list } = req.body;

  // Validasi input
  if (!item_id || !Array.isArray(price_list) || price_list.length === 0) {
    return res.status(400).json({ error: 'Missing required fields (item_id, price_list)' });
  }

  try {
    const successList = [];
    const failureList = [];

    // Cari produk berdasarkan item_id
    const product = await Product.findOne({ item_id });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Proses setiap item dalam price_list
    for (const priceItem of price_list) {
      const { model_id, original_price } = priceItem;

      // Validasi harga dan model_id
      if (!model_id || !original_price) {
        failureList.push({ model_id, failed_reason: 'Missing model_id or original_price' });
        continue;
      }

      // Cari model berdasarkan model_id
      const model = product.models.find((m) => m.model_id === model_id);

      if (model) {
        // Memperbarui harga model
        model.original_price = original_price;
        successList.push({ model_id, original_price });
      } else {
        // Jika model_id tidak ditemukan, beri alasan kegagalan
        failureList.push({ model_id, failed_reason: 'Model ID not found' });
      }
    }

    // Jika ada harga yang berhasil diupdate, simpan perubahan ke database
    if (successList.length > 0) {
      await product.save();
    }

    // Kirimkan response dengan hasil
    res.json({
      error: "",
      message: "",
      warning: "",
      request_id: "aaaaaaa",  // ID request unik
      response: {
        failure_list: failureList,
        success_list: successList,
      },
    });
  } catch (err) {
    console.error('❌ Error updating price:', err);
    res.status(500).json({ error: 'Failed to update price' });
  }
});

// Endpoint untuk mendaftarkan brand baru
router.post('/register_brand', async (req, res) => {
  const { original_brand_name, category_list, product_image, app_logo_image_id, brand_website, brand_description, additional_information, pc_logo_image_id, brand_region } = req.body;

  // Validasi input
  if (!original_brand_name || !category_list || !category_list.length) {
    return res.status(400).json({ error: 'Missing required fields (original_brand_name, category_list)' });
  }

  try {
    // Cek apakah brand sudah ada
    const existingBrand = await Brand.findOne({ original_brand_name });

    if (existingBrand) {
      return res.status(400).json({
        error: 'product.duplicate_request',
        message: 'Brand already exists.',
        request_id: '3e0976b06baa4e059b278ef1fdae1f01',  // Contoh request_id
      });
    }

    // Buat brand baru
    const newBrand = new Brand({
      original_brand_name,
      category_list,
      product_image,
      app_logo_image_id,
      brand_website,
      brand_description,
      additional_information,
      pc_logo_image_id,
      brand_region,
    });

    // Simpan brand baru ke database
    await newBrand.save();

    // Kirimkan response dengan brand_id dan original_brand_name
    res.json({
      error: '',
      message: '',
      warning: '',
      request_id: '558ce5454c9b461aad47aa5cd8bb1e9f',  // ID request unik
      response: {
        brand_id: newBrand._id,  // ID dari brand yang baru disimpan
        original_brand_name: newBrand.original_brand_name,
      },
    });
  } catch (err) {
    console.error('❌ Error registering brand:', err);
    res.status(500).json({ error: 'Failed to register brand' });
  }
});

// Endpoint untuk memperbarui model produk berdasarkan item_id dan model
router.post('/update_model', async (req, res) => {
  const { item_id, model } = req.body;

  // Validasi input
  if (!item_id || !Array.isArray(model) || model.length === 0) {
    return res.status(400).json({ error: 'Missing required fields (item_id, model)' });
  }

  try {
    const successList = [];
    const failureList = [];

    // Cari produk berdasarkan item_id
    const product = await Product.findOne({ item_id });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Proses setiap item dalam model
    for (const modelItem of model) {
      const { model_id, model_sku, pre_order, gtin_code, model_status, weight, dimension } = modelItem;

      // Validasi model_id dan model_sku
      if (!model_id || !model_sku) {
        failureList.push({ model_id, failed_reason: 'Missing model_id or model_sku' });
        continue;
      }

      // Cari model berdasarkan model_id
      const productModel = product.models.find((m) => m.model_id === model_id);

      if (productModel) {
        // Memperbarui informasi model
        productModel.model_sku = model_sku;
        productModel.pre_order = pre_order || productModel.pre_order;  // Gunakan pre_order yang ada jika tidak diberikan
        productModel.gtin_code = gtin_code || '00';  // Default GTIN jika tidak ada
        productModel.model_status = model_status || productModel.model_status;
        productModel.weight = weight || productModel.weight;  // Gunakan berat yang ada jika tidak diberikan
        productModel.dimension = dimension || productModel.dimension;  // Gunakan dimensi yang ada jika tidak diberikan

        // Menambahkan model yang berhasil diperbarui ke successList
        successList.push({ model_id, model_sku, weight, dimension });
      } else {
        // Jika model_id tidak ditemukan, beri alasan kegagalan
        failureList.push({ model_id, failed_reason: 'Model ID not found' });
      }
    }

    // Simpan produk setelah model diperbarui
    if (successList.length > 0) {
      await product.save();
    }

    // Kirimkan response dengan hasil
    res.json({
      error: "",
      message: "",
      warning: "",
      request_id: "aaaaaaa",  // ID request unik
      response: {
        failure_list: failureList,
        success_list: successList,
      },
    });
  } catch (err) {
    console.error('❌ Error updating model:', err);
    res.status(500).json({ error: 'Failed to update model' });
  }
});

module.exports = router;  // Mengekspor router
