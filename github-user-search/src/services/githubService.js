// src/services/githubService.js
import axios from 'axios';

// Base URL for GitHub Search API
const BASE_URL = 'https://api.github.com/search/users';

/**
 * Fetches user data from the GitHub Search API based on the provided search criteria.
 *
 * @param {string} username - The GitHub username to search for.
 * @param {string} location - The location to filter users by.
 * @param {number} minRepos - Minimum number of repositories to filter users by.
 * @param {number} page - The page number for pagination.
 * @returns {Promise<Object>} - A promise that resolves to the search results.
 * @throws {Error} - Throws an error if the request fails.
 */
export const fetchUserData = async (username, location = '', minRepos = '', page = 1) => {
  try {
    // Construct the query string
    let query = `user:${username}`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>${minRepos}`;

    // Make the API request with query and pagination parameters
    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}&page=${page}&per_page=10`);
    
    // Return the results from the API response
    return response.data;
  } catch (error) {
    // Handle any errors during the request
    throw new Error('Error fetching user data: ' + error.message);
  }
};
