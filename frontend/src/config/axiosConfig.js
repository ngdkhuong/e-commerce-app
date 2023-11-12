import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + '' },
});
