import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const data = await fetchUserData(username, location, minRepos);
            setUsers(data);
        } catch (err) {
            setError("Looks like we can't find any users.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                    className="p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location (optional)"
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    placeholder="Minimum repositories (optional)"
                    className="p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Search
                </button>
            </form>
            {loading && <p className="mt-4">Loading...</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}
            <div className="mt-4">
                {users.map(user => (
                    <div key={user.id} className="border p-4 rounded mb-4">
                        <h2 className="text-xl">{user.name || user.login}</h2>
                        <img src={user.avatar_url} alt={user.login} width="100" />
                        <p>Location: {user.location || 'N/A'}</p>
                        <p>Repositories: {user.public_repos}</p>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Profile</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;