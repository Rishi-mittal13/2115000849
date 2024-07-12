// src/pages/ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import ProductDetails from '../components/ProductDetails';
import { Container, Typography } from '@mui/material';

const ProductPage = () => {
  const { categoryname, productid } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const response = await fetchProductById(categoryname, productid);
      setProduct(response.data);
    };
    loadProduct();
  }, [categoryname, productid]);

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <ProductDetails product={product} />
    </Container>
  );
};

export default ProductPage;
