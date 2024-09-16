// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (username, location = '', minRepos = '') => {
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:${minRepos}`;

    try {
        const response = await axios.get(`${BASE_URL}?${query}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user data');
    }
};
