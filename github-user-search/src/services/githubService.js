import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com/users/';

/**
 * Fetches user data from the GitHub API based on the provided username.
 *
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<Object>} - A promise that resolves to the user data.
 * @throws {Error} - Throws an error if the request fails.
 */
export const fetchUserData = async (username) => {
  try {
    // Use Axios to make a GET request to the GitHub API
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data; // Return the user data from the response
  } catch (error) {
    // Handle different error scenarios
    if (error.response && error.response.status === 404) {
      throw new Error('User not found'); // Specific error for 404 Not Found
    }
    throw new Error('Error fetching user data'); // Generic error message
  }
};