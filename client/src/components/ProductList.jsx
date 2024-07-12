// src/components/ProductList.js
import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => (
  <Grid container spacing={3}>
    {products.map(product => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={product.productId}>
        <ProductCard product={product} />
      </Grid>
    ))}
  </Grid>
);

export default ProductList;
