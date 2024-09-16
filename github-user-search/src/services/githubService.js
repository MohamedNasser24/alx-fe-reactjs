import axios from 'axios';

// Base URL for GitHub Search API
const BASE_URL = 'https://api.github.com/search/users';

/**
 * Fetches user data from the GitHub API based on the provided search criteria.
 *
 * @param {string} username - The GitHub username to search for.
 * @param {string} location - The location to filter users by.
 * @param {number} minRepos - Minimum number of repositories to filter users by.
 * @returns {Promise<Object>} - A promise that resolves to the search results.
 * @throws {Error} - Throws an error if the request fails.
 */
export const fetchUserData = async (username, location = '', minRepos = '') => {
  try {
    // Construct query parameters
    let query = `user:${username}`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
    return response.data; // Return the search results from the response
  } catch (error) {
    // Handle errors
    throw new Error('Error fetching user data');
  }
};