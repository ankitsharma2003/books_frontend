import axios from "axios";
import { KEY_ACCESS_TOKEN, getItem} from "./localStorage";

export const axiosClient = axios.create({
  baseURL: "https://books-api-topaz.vercel.app",
  withCredentials: true,
});


// interceptors
axiosClient.interceptors.request.use((request) => {
  const accessToken = getItem(KEY_ACCESS_TOKEN);
  request.headers["Authorization"] = `Beares ${accessToken}`;

  return request;
});
