import axios from 'axios';

// Base URL for GitHub Search API
const BASE_URL = 'https://api.github.com/search/users';

/**
 * Fetch user data from GitHub based on search criteria.
 *
 * @param {string} username - The GitHub username to search for.
 * @param {string} [location=''] - The location to filter by (optional).
 * @param {string} [minRepos=''] - The minimum number of repositories to filter by (optional).
 * @returns {Promise<Object>} - The response data from the API.
 */
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

        // Construct the full API URL with the query
        const url = `${BASE_URL}?q=${encodeURIComponent(query)}`;

        // Make a GET request to the GitHub Search API
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        // Log and throw an error if something goes wrong
        console.error('Error fetching user data:', error);
        throw new Error('Failed to fetch data');
    }
};

export default {
    fetchUserData
};
