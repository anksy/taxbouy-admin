import axios from 'axios';
import { httpVerbs } from "../constants";

axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error?.response?.data?.logout) {
            localStorage.clear();
            window.location.reload();
        }
        return Promise.reject(error.response.data);
    }
);

export const http = ({ method, url, payload }) => {
    return axios({
        method,
        url: process.env.REACT_APP_APIPATH + url,
        [method === httpVerbs.GET ? "params" : "data"]: payload
    });
}