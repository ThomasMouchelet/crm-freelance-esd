import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API}/api`,
    headers: {
      "Content-Type": "application/json"
    },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
    //   config.headers["x-access-token"] = token; // for Node.js Express back-end
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;