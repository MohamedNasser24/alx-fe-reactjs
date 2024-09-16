import axios from 'axios';

// Base URL for GitHub Search API
const BASE_URL = 'https://api.github.com/search/users';

// Function to fetch user data with advanced search
export const fetchUserData = async (username, location = '', minRepos = '') => {
    try {
        // Construct the query string with optional parameters
        let query = `user:${username}`;
        if (location) {
            query += ` location:${location}`;
        }
        if (minRepos) {
            query += ` repos:>${minRepos}`;
        }

        // Encode the query to ensure it is URL-safe
        const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
        return response.data;
    } catch (error) {
        // Handle errors appropriately
        console.error('Error fetching user data:', error);
        throw new Error('Failed to fetch data');
    }
};