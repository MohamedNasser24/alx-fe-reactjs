import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // Clear previous error message

        try {
            const data = await fetchUserData(username, location, minRepos);
            if (data.length === 0) {
                throw new Error("No users found"); // Handle case with no results
            }
            setUserData(data);
        } catch (err) {
            setError("Looks like we can't find the user"); // Set the error message
            setUserData([]); // Clear previous user data
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    placeholder="Minimum Repositories"
                    className="border p-2 rounded"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>} {/* Show loading message */}
            {error && <p>{error}</p>} {/* Display error message */}
            {userData.length > 0 && (
                <div className="mt-4">
                    {userData.map(user => (
                        <div key={user.id} className="border-b py-2">
                            <img src={user.avatar_url} alt={user.login} className="w-10 h-10 rounded" />
                            <h3 className="font-bold">{user.login}</h3>
                            <p>Location: {user.location || 'N/A'}</p>
                            <p>Repositories: {user.public_repos || 0}</p>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
















