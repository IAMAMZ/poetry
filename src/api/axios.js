import axios from "axios";
//const BASE_URL = "http://localhost:3006";
import { baseUrl } from "../shared";

export default axios.create({
  baseURL: baseUrl,
});
export const axiosPrivate = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
