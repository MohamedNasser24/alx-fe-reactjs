// src/services/githubService.js

import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
    const query = [];

    if (username) {
        query.push(`user:${username}`);
    }
    if (location) {
        query.push(`location:${location}`);
    }
    if (minRepos) {
        query.push(`repos:>${minRepos}`);
    }

    const response = await axios.get(`https://api.github.com/search/users?q=${query.join(' ')}`);
    return response.data.items; // Return the list of users
};

