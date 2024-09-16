import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/${username}`);
        return response.data;
    } catch (error) {
        // Throw an error to be caught in the component
        throw new Error('User not found');
    }
};
