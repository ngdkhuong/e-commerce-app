const { axiosInstance } = require('@/config/axiosConfig');

const loginAUser = async (data) => {
    const res = await axiosInstance({
        url: 'login',
        method: 'POST',
        data: data,
    });
    return res;
};

export const authService = {
    loginAUser,
};
