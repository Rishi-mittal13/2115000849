// src/models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productId: { type: String, unique: true },
  name: String,
  price: Number,
  rating: Number,
  discount: Number,
  company: String,
  category: String,
  details: Object,
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
