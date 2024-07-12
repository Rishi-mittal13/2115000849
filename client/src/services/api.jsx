import axios from 'axios';

const API_URL = 'http://20.244.56.144/test/companies/AMZ'; // Adjust this URL to your backend API

export const fetchProducts = (category, filters, page = 1, n = 10) => {
  const params = { ...filters, page, n };
  return axios.get(`${API_URL}/categories/${category}/products`, { params });
};

export const fetchProductById = (category, productId) => {
  return axios.get(`${API_URL}/categories/${category}/products/${productId}`);
};