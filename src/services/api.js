import axios from "axios";

const api = axios.create({
  baseURL: "https://capstone3squad.herokuapp.com/",
});

export default api;
