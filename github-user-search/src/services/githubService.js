import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (username, location = '', minRepos = '') => {
    try {
        // Base query with the username
        let query = `user:${username}`;
        
        // Append location if provided
        if (location) {
            query += ` location:${location}`;
        }
        
        // Append minimum repositories if provided
        if (minRepos) {
            query += ` repos:>${minRepos}`;
        }

        // Make a GET request to GitHub's search API with the constructed query
        const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
        return response.data;
    } catch (error) {
        // Handle errors appropriately
        console.error('Error fetching user data:', error);
        throw new Error('Failed to fetch data');
    }
};

export default {
    fetchUserData
};
