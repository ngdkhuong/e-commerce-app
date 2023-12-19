import axios from 'axios';
import Cookies from 'js-cookie';

export const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        Authorization: `Bearer ${Cookies.get('Bearer')}`,
    },
});
