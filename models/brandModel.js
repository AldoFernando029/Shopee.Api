const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  original_brand_name: { type: String, required: true },
  category_list: [{ type: Number }],
  product_image: {
    image_id_list: [{ type: String }],
  },
  app_logo_image_id: { type: String },
  brand_website: { type: String },
  brand_description: { type: String },
  additional_information: { type: String },
  pc_logo_image_id: { type: String },
  brand_region: { type: String },
}, { timestamps: true });

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
