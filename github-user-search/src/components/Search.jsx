import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const userData = await fetchUserData(username, location, minRepos);
      setUsers(userData.items); // Adjust based on the API response structure
    } catch (err) {
      if (err.message === 'User not found') {
        setError("Looks like we can't find the user");
      } else {
        setError('An error occurred while fetching user data');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
          <input
            id="minRepos"
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Minimum number of repositories"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {users.length > 0 && !error && (
        <div className="mt-4">
          {users.map(user => (
            <div key={user.id} className="p-4 border rounded-md mb-4 shadow-sm">
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" className="rounded-full" />
              <h2 className="text-lg font-semibold mt-2">{user.login}</h2>
              <p className="text-sm text-gray-600">Location: {user.location || 'N/A'}</p>
              <p className="text-sm text-gray-600">Repositories: {user.public_repos || '0'}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">View Profile</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
