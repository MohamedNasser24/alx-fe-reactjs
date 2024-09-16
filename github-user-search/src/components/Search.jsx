import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import UserProfile from './UserProfile';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (error) {
      setError('Looks like we can\'t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for GitHub users..."
          value={username}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && <UserProfile user={user} />}
    </div>
  );
}

export default Search;