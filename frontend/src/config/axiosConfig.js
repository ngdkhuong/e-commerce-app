import axios from 'axios';

// const tk = JSON.parse(localStorage.getItem('user'));

export const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        Authorization: 'Bearer ' + 'tk?.token',
    },
});
