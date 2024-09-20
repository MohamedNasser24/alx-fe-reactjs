import axios from 'axios';

export const fetchUserData = async (username, location = '', minRepos = '') => {
    const query = [`${username ? `user:${username}` : ''}`, 
                   `${location ? `location:${location}` : ''}`, 
                   `${minRepos ? `repos:>${minRepos}` : ''}`]
                  .filter(Boolean)
                  .join(' ');

    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    return response.data.items; // Return user data array
};
