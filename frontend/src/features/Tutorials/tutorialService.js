const { axiosInstance } = require('@/config/axiosConfig');

const addTutCategory = async (data) => {
    const res = await axiosInstance({
        url: 'tutorial/category',
        method: 'POST',
        data: data,
    });
    return res.data;
};

export const tutorialService = {
    addTutCategory,
};
