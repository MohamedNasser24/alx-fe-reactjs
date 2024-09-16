import axios from 'axios';

// GitHub API endpoint for advanced search
const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (username, location = '', minRepos = '') => {
    try {
        // Construct the query string
        let query = `q=${username}`;
        if (location) query += `+location:${location}`;
        if (minRepos) query += `+repos:>=${minRepos}`;

        // Make the API call
        const response = await axios.get(`${BASE_URL}?${query}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user data');
    }
};
