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
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'location':
                setLocation(value);
                break;
            case 'minRepos':
                setMinRepos(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setUsers([]);

        try {
            const data = await fetchUserData(username, location, minRepos);
            setUsers(data.items || []);
        } catch (err) {
            setError('Looks like we can\'t find any users with these criteria');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold">GitHub User Search</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Enter GitHub username"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleInputChange}
                    placeholder="Location (optional)"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="minRepos"
                    value={minRepos}
                    onChange={handleInputChange}
                    placeholder="Minimum repositories (optional)"
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
            {users.length > 0 && !loading && !error && (
                <div className="mt-4 space-y-4">
                    {users.map((user) => (
                        <div key={user.id} className="flex items-center space-x-4 p-4 border border-gray-300 rounded-lg">
                            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                            <div>
                                <h3 className="text-lg font-semibold">{user.login}</h3>
                                <p className="text-gray-600">{user.location || 'Location not provided'}</p>
                                <p className="text-gray-600">Repositories: {user.public_repos || 'N/A'}</p>
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;