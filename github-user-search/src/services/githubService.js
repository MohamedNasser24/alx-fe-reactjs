import axios from 'axios';

// GitHub API endpoint for user search
const BASE_URL = 'https://api.github.com/users';

/**
 * Fetch user data from GitHub.
 *
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<Object>} - The user data from the API.
 */
export const fetchUserData = async (username) => {
    try {
        const url = `${BASE_URL}/${username}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw new Error('Failed to fetch data');
    }
};

export default {
    fetchUserData
};