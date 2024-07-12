// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';
import { CssBaseline } from '@mui/material';

const App = () => (
  <Router>
    <CssBaseline />
    <Routes>
      <Route path="/categories/:categoryname/products/:productid" element={<ProductPage />} />
      <Route path="/" element={<AllProducts />} />
    </Routes>
  </Router>
);

export default App;
