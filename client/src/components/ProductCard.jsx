// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductCard = ({ product }) => (
  <Card>
    <CardMedia
      component="img"
      alt={product.name}
      height="140"
      image={`https://source.unsplash.com/random?product,${product.productId}`}
      title={product.name}
    />
    <CardContent>
      <Typography variant="h5">{product.name}</Typography>
      <Typography variant="body2" color="textSecondary">Company: {product.company}</Typography>
      <Typography variant="body2" color="textSecondary">Category: {product.category}</Typography>
      <Typography variant="body2" color="textSecondary">Price: ${product.price}</Typography>
      <Typography variant="body2" color="textSecondary">Rating: {product.rating}</Typography>
      <Typography variant="body2" color="textSecondary">Discount: {product.discount}%</Typography>
      <Typography variant="body2" color="textSecondary">Availability: {product.availability ? 'In stock' : 'Out of stock'}</Typography>
    </CardContent>
  </Card>
);

export default ProductCard;
