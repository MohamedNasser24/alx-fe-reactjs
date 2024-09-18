// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users/';

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}${username}`);
        return response.data; // Return the user data
    } catch (error) {
        // Here you can handle specific error cases if needed
        throw error; // Re-throw the error to be caught in the calling component
    }
};
