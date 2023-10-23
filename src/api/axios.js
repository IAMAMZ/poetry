import axios from "axios";
//const BASE_URL = "http://localhost:3006";
import {baseUrl} from "shared/baseURL";

export default axios.create({
  baseURL: BaseUrl,
});
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
