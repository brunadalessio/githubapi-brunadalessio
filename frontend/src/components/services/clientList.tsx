import axios from "axios";

const api = axios.create({
  baseURL: `http://api.github.com/search`,
});

export default api;
