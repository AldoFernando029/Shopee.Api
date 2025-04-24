const mongoose = require('mongoose');

// Schema untuk produk
const productSchema = new mongoose.Schema({
  item_name: { type: String, required: true },
  description: { type: String, required: true },
  weight: { type: Number, required: true },
  sale: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  rating_star: { type: Number, default: 0 },
  comment_count: { type: Number, default: 0 },
  pre_order: {
    days_to_ship: { type: Number },
    is_pre_order: { type: Boolean },
  },
  images: {
    image_id_list: [{ type: String }],
    image_url_list: [{ type: String }],
  },
  item_status: { type: String, default: 'NORMAL' },
  price_info: {
    current_price: { type: Number, required: true },
    original_price: { type: Number, required: true },
  },
  logistic_info: [{
    size_id: { type: Number },
    shipping_fee: { type: Number },
    enabled: { type: Boolean },
    logistic_id: { type: Number },
    is_free: { type: Boolean },
  }],
  item_id: { type: Number, required: true },
  attributes: [{
    attribute_id: { type: Number },
    attribute_value_list: [{
      original_value_name: { type: String },
      value_id: { type: Number },
      value_unit: { type: String },
    }],
  }],
  category_id: { type: Number, required: true },
  dimension: {
    package_width: { type: Number },
    package_length: { type: Number },
    package_height: { type: Number },
  },
  condition: { type: String, default: 'NEW' },
  video_info: [{
    video_url: { type: String },
    thumbnail_url: { type: String },
    duration: { type: Number },
  }],
  wholesale: [{
    min_count: { type: Number },
    max_count: { type: Number },
    unit_price: { type: Number },
  }],
  brand: {
    brand_id: { type: Number },
    original_brand_name: { type: String },
  },
  item_dangerous: { type: Number },
  description_info: {
    extended_description: {
      field_list: [{
        field_type: { type: String },
        text: { type: String },
        image_info: {
          image_id: { type: String },
        },
      }],
    },
  },
  complaint_policy: {
    warranty_time: { type: String },
    exclude_entrepreneur_warranty: { type: Boolean },
    complaint_address_id: { type: Number },
    additional_information: { type: String },
  },
  seller_stock: [{
    location_id: { type: String },
    stock: { type: Number },
  }],
  models: [{  
    model_id: { type: Number, required: true },
    original_price: { type: Number, required: true },
    model_sku: { type: String },
    seller_stock: [{
      location_id: { type: String },
      stock: { type: Number },
    }],
    weight: { type: Number },
    dimension: {
      package_width: { type: Number },
      package_length: { type: Number },
      package_height: { type: Number },
    },
    pre_order: {
      is_pre_order: { type: Boolean },
      days_to_ship: { type: Number },
    },
  }]
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
