const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  category_id: { type: Number, required: true },
  parent_category_id: { type: Number, required: true },
  original_category_name: { type: String, required: true },
  display_category_name: { type: String, required: true },
  has_children: { type: Boolean, required: true },
});


const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

