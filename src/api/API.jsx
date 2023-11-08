import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1/products",
});

export const getProducts = async (page) => {
  const response = await api.get(`?limit=10&page=${page}`);
  return response.data;
};
