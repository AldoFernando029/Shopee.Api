##### #### #### #####
Running --> npm run dev

## 1. Get Data Category 
`http://localhost:3000/api/v2/product/get_category` -->GET
--> Get All Data From Table Category

## 2.Post Data Item
`http://localhost:3000/api/v2/product/add_item` --> POST
Input Body Json Example :
{
  "item_id": 1000,  // ID produk yang akan ditambahkan
  "item_name": "Nike Air Max 2023",  // Nama produk
  "description": "Sepatu olahraga terbaru dengan teknologi Air Max yang nyaman.",  // Deskripsi produk
  "weight": 1.2,  // Berat produk (kg)
  "price_info": { 
    "current_price": 150,  // Harga produk terbaru
    "original_price": 200  // Harga produk awal
  },
  "category_id": 16521,  // ID kategori produk
  "logistic_info": [{
    "size_id": 1,
    "shipping_fee": 5,
    "enabled": true,
    "logistic_id": 10001,
    "is_free": false
  }],
  "dimension": {
    "package_width": 12,  // Lebar paket produk (cm)
    "package_length": 12,  // Panjang paket produk (cm)
    "package_height": 6  // Tinggi paket produk (cm)
  },
  "condition": "NEW",  // Kondisi produk (misalnya, NEW atau USED)
  "brand": {
    "brand_id": 0,  // ID brand produk
    "original_brand_name": "Nike"  // Nama brand produk
  },
  "seller_stock": [{
    "location_id": "store_1",  // ID lokasi penyimpanan produk
    "stock": 500  // Jumlah stok produk yang tersedia
  }],
  "models": [
    {
      "model_id": 1625698439,  // ID model produk
      "original_price": 150,  // Harga asli model
      "model_sku": "ABC123",  // SKU model
      "weight": 1.2,  // Berat model
      "dimension": {
        "package_width": 10,  // Lebar paket model (cm)
        "package_length": 10,  // Panjang paket model (cm)
        "package_height": 5  // Tinggi paket model (cm)
      }
    }
  ]
}

## 3.Update Data Item
`http://localhost:3000/api/v2/product/update_item` --> POST
Request Example :
{
  "item_id": 1000,  // ID produk yang akan diperbarui
  "item_name": "Nike Air Max 2023 Updated",  // Nama produk yang diperbarui
  "description": "Sepatu olahraga terbaru dengan teknologi Air Max yang nyaman dan kuat.",  // Deskripsi produk yang diperbarui
  "weight": 1.3,  // Berat produk yang diperbarui (kg)
  "price_info": { 
    "current_price": 160,  // Harga terbaru produk
    "original_price": 180  // Harga awal produk
  },
  "category_id": 16521,  // ID kategori baru
  "logistic_info": [{
    "size_id": 1,
    "shipping_fee": 5,
    "enabled": true,
    "logistic_id": 10001,
    "is_free": false
  }],
  "dimension": {
    "package_width": 12,  // Lebar paket untuk produk
    "package_length": 12,  // Panjang paket untuk produk
    "package_height": 6  // Tinggi paket untuk produk
  },
  "condition": "NEW",  // Status produk (misalnya: NEW atau USED)
  "brand": {
    "brand_id": 0,
    "original_brand_name": "Nike"
  },
  "seller_stock": [{
    "location_id": "store_1",  // Lokasi penyimpanan
    "stock": 100  // Jumlah stok yang diperbarui
  }],
  "models": [
    {
      "model_id": 1625698439,
      "original_price": 150,  // Harga asli model
      "model_sku": "abc123",  // SKU model
      "weight": 1.2,  // Berat model
      "dimension": {
        "package_width": 10,
        "package_length": 10,
        "package_height": 5
      }
    }
  ]
}


## 4. Delete Data Item
`http://localhost:3000/api/v2/product/delete_item`--> POST
Request Example:
{
  "item_id": 1000  // Sesuai dengan item_id yang ingin di hapus
}


## 5. Get Data by item_id
`http://localhost:3000/api/v2/product/get_item_extra_info?item_id=3000143058` --> GET
--> item_id Pilih Sesui dengan item_id yang ada di database 

## 6. Update Stock Produk By Item_id
`http://localhost:3000/api/v2/product/update_stock` -->POST
Request Example : 
{
  "item_id": 1000,  // ID produk yang akan diperbarui stoknya
  "stock_list": [
    {
      "model_id": 1625698439, // ID model yang ingin diperbarui stoknya
      "seller_stock": [
        {
          "location_id": "store_1", // ID lokasi tempat barang disimpan
          "stock": 200 // Jumlah stok yang baru
        }
      ]
    }
  ]
}



## 7.Add Models On Item By Item_id 
`http://localhost:3000/api/v2/product/add_model` --> POST
Request Example :
{
  "item_id": 1000, // Sesui item_id yang di inginkan
  "model_list": [
    {
      "model_id": 12345,
      "original_price": 38.3,
      "model_sku": "SKU12345",
      "seller_stock": [
        {
          "location_id": "warehouse_1",
          "stock": 100
        }
      ],
      "weight": 1.1,
      "dimension": {
        "package_height": 11,
        "package_length": 11,
        "package_width": 11
      },
      "pre_order": {
        "is_pre_order": true,
        "days_to_ship": 2
      }
    }
  ]
}

## 8.Update Models By Item_id & model_id 
`http://localhost:3000/api/v2/product/update_model` --> POST
Request Example :
{
  "item_id": 3000143058,
  "model": [
    {
      "model_id": 12345,
      "model_sku": "abcDicobaUpdate",
      "pre_order": {
        "is_pre_order": false,
        "days_to_ship": 3
      },
      "gtin_code": "1234567890123",
      "model_status": "NORMAL",
      "weight": 1.1,
      "dimension": {
        "package_height": 13,
        "package_length": 13,
        "package_width": 13
      }
    }
  ]
}

## 9.Update Price Produk By Item_id
`http://localhost:3000/api/v2/product/update_price` -->POST
Request Example :
{
  "item_id": 1000, //Sesuai item_id yang di nginkan
  "price_list": [
    {
      "model_id": 3456, // Sesui model_id pada item_id yang sudah ada
      "original_price": 11.11
    }
  ]
}


## 10.Add Brand / Register brand to database -->
`http://localhost:3000/api/v2/product/register_brand`  --> POST
Request Example :
{
  "original_brand_name": "Nike",
  "category_list": [16521, 16522],
  "product_image": {
    "image_id_list": ["-"]
  },
  "app_logo_image_id": "6373157f9408b42c8aacda1d63d3a209",
  "brand_website": "www.nike.com",
  "brand_description": "Our mission is what drives us to do everything possible to expand human potential.",
  "additional_information": "additional notes or comment can seller can add",
  "pc_logo_image_id": "6373157f9408b42c8aacda1d63d3a209",
  "brand_region": "US"
}



