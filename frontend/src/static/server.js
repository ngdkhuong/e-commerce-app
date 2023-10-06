import axios from 'axios';

const server = axios.create({
    baseURL: 'https://it-courses-api.vercel.app',
    // baseURL: 'http://localhost:4000',
    withCredentials: true,
});

export default server;
