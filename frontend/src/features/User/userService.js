const { axiosInstance } = require('@/config/axiosConfig');

const loginAUser = async (data) => {
    const res = await axiosInstance({
        url: 'user/login',
        method: 'POST',
        data: data,
    });
    return res.data;
};

const registerAUser = async (data) => {
    const res = await axiosInstance({
        url: 'user/register',
        method: 'POST',
        data: data,
    });
    return res.data;
};

export const authService = {
    loginAUser,
    registerAUser,
};
