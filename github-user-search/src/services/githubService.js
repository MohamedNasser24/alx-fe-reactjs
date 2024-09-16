import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

// Function to fetch user data from GitHub
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');
    }
    throw new Error('Error fetching user data');
  }
};