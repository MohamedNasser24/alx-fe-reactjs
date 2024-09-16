import axios from 'axios';

// Base URL for GitHub Search API
const BASE_URL = 'https://api.github.com/search/users';

/**
 * Fetch user data from GitHub based on advanced search criteria.
 *
 * @param {string} username - The GitHub username to search for.
 * @param {string} [location=''] - The location to filter by (optional).
 * @param {string} [minRepos=''] - The minimum number of repositories to filter by (optional).
 * @returns {Promise<Object>} - The response data from the API.
 */
export const fetchUserData = async (username, location = '', minRepos = '') => {
    try {
        // Construct the query part for the API request
        let query = `user:${username}`;
        
        // Append location if provided
        if (location) {
            query += ` location:${location}`;
        }
        
        // Append minimum repositories if provided
        if (minRepos) {
            query += ` repos:>${minRepos}`;
        }

        // Encode the query for the URL
        const encodedQuery = encodeURIComponent(query);

        // Construct the full API URL
        const url = `${BASE_URL}?q=${encodedQuery}`;

        // Make a GET request to GitHub's Search API
        const response = await axios.get(url);

        // Return the data from the response
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
