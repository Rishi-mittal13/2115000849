// src/components/ProductDetails.js
import React from 'react';
import { Typography, Container, CardMedia } from '@mui/material';

const ProductDetails = ({ product }) => (
  <Container>
    <CardMedia
      component="img"
      alt={product.name}
      height="300"
      image={`https://source.unsplash.com/random?product,${product.productId}`}
      title={product.name}
    />
    <Typography variant="h4">{product.name}</Typography>
    <Typography variant="body1">Company: {product.company}</Typography>
    <Typography variant="body1">Category: {product.category}</Typography>
    <Typography variant="body1">Price: ${product.price}</Typography>
    <Typography variant="body1">Rating: {product.rating}</Typography>
    <Typography variant="body1">Discount: {product.discount}%</Typography>
    <Typography variant="body1">Availability: {product.availability ? 'In stock' : 'Out of stock'}</Typography>
  </Container>
);

export default ProductDetails;
