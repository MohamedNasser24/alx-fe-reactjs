import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data.message : 'Error fetching data');
    }
};

export const fetchUsersByQuery = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
        return response.data.items; // Adjust based on your needs
    } catch (error) {
        throw new Error(error.response ? error.response.data.message : 'Error fetching data');
    }
};

