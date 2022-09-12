import axios from "axios";

const instance = axios.create({
  baseURL : 'http://localhost:8000',
//   headers: {
//     Authorization: "Bearer Token",
//     "Content-Type": "application/json",
//     timeout : 1000,
//   },
});

export default instance;