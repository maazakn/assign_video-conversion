import axios from "axios";
import { BASEURL } from './Config';
const axiosInstance = axios.create({
    baseURL: BASEURL,
    
});
axiosInstance.interceptors.request.use(
    function (config) {
        config.headers = {
            ...config.headers,
        };
        if (localStorage.getItem("token")) {
            config.headers.Authorization = `${JSON.parse(localStorage.getItem("token"))}`;
            console.log(
                config.headers.Authorization
            )
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        if (response.status === 401) {
            // your failure logic
        }
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);
export { axiosInstance };
