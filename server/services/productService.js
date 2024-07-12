// src/services/productService.js
const axios = require('axios');
const Product = require('../models/Product');

const ECOMMERCE_API_URLS = [
  'http://20.244.56.144/test/companies/AMZ',
  'http://20.244.56.144/test/companies/FLP',
  'http://20.244.56.144/test/companies/SNP',
  'http://20.244.56.144/test/companies/MYN',
  'http://20.244.56.144/test/companies/AZO',
];

async function fetchProductsFromEcommerce(category) {
  const products = [];
  for (const url of ECOMMERCE_API_URLS) {
    const response = await axios.get(`${url}/categories/${category}/products`);
    products.push(...response.data);
  }
  return products;
}

async function getTopProducts(category, n, page, sort) {
  const skip = (page - 1) * n;
  const sortParams = {};
  
  if (sort) {
    const [key, order] = sort.split(':');
    sortParams[key] = order === 'desc' ? -1 : 1;
  }

  return Product.find({ category })
    .sort(sortParams)
    .skip(skip)
    .limit(n);
}

async function updateProductCache(category) {
  const products = await fetchProductsFromEcommerce(category);
  for (const product of products) {
    await Product.findOneAndUpdate(
      { productId: product.id },
      {
        productId: product.id,
        name: product.name,
        price: product.price,
        rating: product.rating,
        discount: product.discount,
        company: product.company,
        category,
        details: product
      },
      { upsert: true, new: true }
    );
  }
}

module.exports = { getTopProducts, updateProductCache };
