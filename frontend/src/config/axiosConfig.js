import axios from 'axios';

const tk = JSON.parse(localStorage.getItem('user'));

export const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + tk?.token },
});
