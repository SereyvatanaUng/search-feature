import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1/products",
});

export const getProducts = async () => {
  const response = await api.get();
  return response.data;
};
