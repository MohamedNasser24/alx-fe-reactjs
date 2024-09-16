import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') setUsername(value);
        if (name === 'location') setLocation(value);
        if (name === 'minRepos') setMinRepos(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const userData = await fetchUserData(username, location, minRepos);
            setUsers(userData.items || []);
        } catch (err) {
            setError('Looks like we can\'t find any users');
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-semibold">GitHub User Search</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="username"
                    placeholder="GitHub username"
                    value={username}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location (optional)"
                    value={location}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="minRepos"
                    placeholder="Minimum Repositories (optional)"
                    value={minRepos}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </form>
            {loading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {users.length > 0 && (
                <ul className="space-y-4">
                    {users.map((user) => (
                        <li key={user.id} className="flex items-center space-x-4">
                            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                            <div>
                                <h3 className="text-lg font-semibold">{user.login}</h3>
                                <p className="text-sm text-gray-600">Location: {user.location || 'N/A'}</p>
                                <p className="text-sm text-gray-600">Public Repos: {user.public_repos}</p>
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Profile</a>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Search;




