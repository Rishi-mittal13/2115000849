// src/pages/AllProducts.js
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductList from '../components/ProductList';
import { Container, Typography, TextField, MenuItem, Button } from '@mui/material';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('default-category'); // Replace with default category
  const [n, setN] = useState(10);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetchProducts(category, filters, page, n);
      setProducts(response.data);
    };
    loadProducts();
  }, [category, filters, page, n]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Typography variant="h3">Top Products</Typography>
      <TextField label="Category" value={category} onChange={(e) => setCategory(e.target.value)} fullWidth select>
        {/* Add category options */}
        <MenuItem value="default-category">Default Category</MenuItem>
      </TextField>
      {/* Add more filters here */}
      <ProductList products={products} />
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</Button>
      <Button onClick={() => setPage(page + 1)}>Next</Button>
    </Container>
  );
};

export default AllProducts;
