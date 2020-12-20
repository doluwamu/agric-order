import axios from "axios";

class AxiosService {
  axiosInstance = null;

  constructor() {
    this.InitInstance();
  }

  axiosInstance = axios.create({
    baseURL: "/api/v1",
    timeout: 5000,
  });

  InitInstance = () => {
    this.axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  };

  get AgAxios() {
    return this.axiosInstance;
  }
}

const AgricOrderAxios = new AxiosService();

export default AgricOrderAxios;
