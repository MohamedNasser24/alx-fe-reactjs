import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

/**
 * Fetch user data from GitHub based on the search criteria.
 *
 * @param {string} username - The GitHub username to search for.
 * @param {string} location - The location to filter users.
 * @param {number} minRepos - Minimum number of repositories to filter users.
 * @returns {Promise<object[]>} - The user data from GitHub API.
 */
export const fetchUserData = async (username, location, minRepos) => {
    const queryParts = [`${username}`];
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);
    const query = queryParts.join(' ');

    const response = await axios.get(`${GITHUB_API_URL}?q=${query}`);
    return response.data.items; // Adjust based on API response structure
};