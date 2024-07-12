const { getTopProducts, updateProductCache } = require('../services/productService');

async function getProducts(req, res) {
  const { categoryname } = req.params;
  const { n = 10, page = 1, sort } = req.query;

  try {
    await updateProductCache(categoryname);
    const products = await getTopProducts(categoryname, parseInt(n), parseInt(page), sort);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getProductById(req, res) {
  const { categoryname, productid } = req.params;

  try {
    const product = await Product.findOne({ productId: productid, category: categoryname });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product.details);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getProducts, getProductById };
