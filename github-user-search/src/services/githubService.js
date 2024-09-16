import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
        return response.data;
    } catch (error) {
        throw new Error('An error occurred while fetching user data');
    }
};