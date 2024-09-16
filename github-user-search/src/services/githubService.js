// src/services/githubService.js

import axios from 'axios';

// Base URL for GitHub Search API
const BASE_URL = 'https://api.github.com/search/users';

/**
 * Fetch users from GitHub based on search criteria.
 * @param {string} query - The search term (e.g., username).
 * @param {string} location - Optional location filter.
 * @param {number} minRepos - Optional minimum repositories filter.
 * @returns {Promise<Object[]>} - A promise that resolves to the list of users.
 */
export const fetchUsers = async (query, location = '', minRepos = 0) => {
    try {
        // Construct the query string with additional parameters if provided
        let searchQuery = query;
        if (location) {
            searchQuery += ` location:${location}`;
        }
        if (minRepos > 0) {
            searchQuery += ` repos:>=${minRepos}`;
        }

        // Make the API request
        const response = await axios.get(BASE_URL, {
            params: {
                q: searchQuery,  // The query parameter for the search
                sort: 'followers', // Optional: sort by followers
                order: 'desc' // Optional: order in descending
            }
        });

        // Return the list of users
        return response.data.items; // This is an array of user objects
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error; // Propagate the error to be handled in the component
    }
};
