import { OrderFormData } from "@/types";
import axios from "axios";

export const submitRequest = async (data: OrderFormData) => {
  const response = await axios.post("/api/request", data);
  return response.data;
};
