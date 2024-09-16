import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/${username}`);
        return response.data;
    } catch (error) {
        // If the error status is 404 or other errors, throw a new error
        if (error.response && error.response.status === 404) {
            throw new Error('User not found');
        }
        throw new Error('An error occurred');
    }
};