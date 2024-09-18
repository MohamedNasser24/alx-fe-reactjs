// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

/**
 * Fetch users from GitHub based on the search criteria.
 *
 * @param {string} username - The GitHub username to search for (optional).
 * @param {string} location - The location to filter users (optional).
 * @param {number} minRepos - The minimum number of repositories (optional).
 * @param {number} page - The page number for pagination (default is 1).
 * @returns {Promise<object>} - The response data from the GitHub API.
 */
export const fetchUsers = async (username, location, minRepos, page = 1) => {
    // Build the query parameters for the search
    const params = [];

    // Add the username if provided
    if (username) params.push(`user:${username}`);
    
    // Add location filter if provided
    if (location) params.push(`location:${location}`);
    
    // Add minimum repositories filter if provided
    if (minRepos) params.push(`repos:>=${minRepos}`);
    
    // Join the parameters into a single query string
    const query = params.join(' ');

    // Construct the API request
    const response = await axios.get(`${GITHUB_API_URL}?q=${encodeURIComponent(query)}&page=${page}&per_page=30`);
    
    return response.data; // Return the search results
};

