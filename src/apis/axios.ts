import axios from "axios";

const ax = axios.create({ baseURL: "https://api.github.com/" });

ax.interceptors.response.use(
  (response) => response,
  (error) => {
    alert(error.response.data.message);
  }
);

export default ax;
