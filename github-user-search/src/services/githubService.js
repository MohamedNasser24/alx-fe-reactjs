import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com/search/users';

// Function to fetch user data with advanced search parameters
export const fetchUsers = async (username, location = '', minRepos = 0) => {
    try {
        // Construct the query string
        let query = `user:${username}`;
        if (location) {
            query += ` location:${location}`;
        }
        if (minRepos > 0) {
            query += ` repos:>=${minRepos}`;
        }

        // Make the API call
        const response = await axios.get(BASE_URL, {
            params: {
                q: query,
                sort: 'followers', // Optional: sort by followers
                order: 'desc' // Optional: order in descending
            }
        });

        // Return the results
        return response.data.items; // The array of user objects
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Propagate error for handling in the component
    }
};