import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
});

export type Person = {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
};
