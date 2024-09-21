// src/services/githubService.js

import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
  const query = `type:user+in:login+${username}` +
                (location ? `+location:${location}` : '') +
                (minRepos ? `+repos:>=${minRepos}` : '');
  
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data;
};
