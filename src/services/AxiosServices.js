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

  get AgricAxios() {
    return this.axiosInstance;
  }
}

const axiosService = new AxiosService();

export default axiosService;

// import axios from 'axios'

// class AxiosService {
//     axiosInstance = null;

//     constructor() {
//         this.initInstance();
//     }

//     initInstance = () => {
//         this.axiosInstance = axios.create({
//             baseURL: '/api/v1',
//             timeout: 5000
//         })

//         this.axiosInstance.interceptors.request.use((config) => {
//             const token = localStorage.getItem('bwm_token');
//             if (token) {
//                 config.headers.Authorization = `Bearer ${token}`;
//             }

//             return config;
//         })

//     }

//     get bwmAxios() {
//         return this.axiosInstance;
//     }

// }

// export default new AxiosService();