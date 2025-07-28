import axios from "axios";
const instance = axios.create({
  baseURL: "https://my-backend-201v.onrender.com/api",
});
export default instance;
