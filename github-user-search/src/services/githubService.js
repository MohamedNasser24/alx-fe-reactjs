// src/services/githubService.js
import axios from 'axios';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data; // Return user data
    } catch (error) {
        throw error; // Rethrow error to be handled in the component
    }
};
