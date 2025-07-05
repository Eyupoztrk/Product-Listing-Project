// src/services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

export const fetchProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data.data;
  } catch (error) {
    console.error("An error occurred while getting products: ", error);
    throw error;
  }
};
