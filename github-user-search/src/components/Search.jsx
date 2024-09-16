import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Handle input change
    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setUser(null);

        try {
            const data = await fetchUserData(username);
            setUser(data);
        } catch (err) {
            setError('Looks like we can\'t find the user');
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
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Enter GitHub username"
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
            {user && !loading && !error && (
                <div className="flex items-center space-x-4 mt-4">
                    <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                    <div>
                        <h3 className="text-lg font-semibold">{user.login}</h3>
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
            )}
        </div>
    );
};

export default Search;




