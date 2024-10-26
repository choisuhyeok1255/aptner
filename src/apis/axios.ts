import axios from "axios";

const ax = axios.create({ baseURL: "https://api.github.com/" });

export default ax;
