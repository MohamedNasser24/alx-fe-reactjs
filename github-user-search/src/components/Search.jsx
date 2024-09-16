// src/components/Search.jsx

import React, { useState } from 'react';
import { fetchUsers } from '../services/githubService';

const Search = () => {
    const [query, setQuery] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState(0);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = await fetchUsers(query, location, minRepos);
            setUsers(data);
        } catch (err) {
            setError('Looks like we can\'t find the user.');
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="query" className="block text-sm font-medium text-gray-700">Search Term</label>
                    <input
                        id="query"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Enter GitHub username or keyword"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location (optional)</label>
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
                    <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">Min Repositories (optional)</label>
                    <input
                        id="minRepos"
                        type="number"
                        value={minRepos}
                        onChange={(e) => setMinRepos(Number(e.target.value))}
                        placeholder="Enter minimum number of repositories"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </form>

            {error && <p className="mt-4 text-red-600">{error}</p>}

            <ul className="mt-4 space-y-4">
                {users.map(user => (
                    <li key={user.id} className="flex items-center space-x-4">
                        <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                        <div>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                {user.login}
                            </a>
                            <p className="text-gray-600">{user.location || 'No location provided'}</p>
                            <p className="text-gray-500">Repos: {user.public_repos || 'N/A'}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
