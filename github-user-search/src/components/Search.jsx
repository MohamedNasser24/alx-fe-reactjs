import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // Clear any previous error message

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            // Check if the error is a 404 error
            if (err.response && err.response.status === 404) {
                setError("Looks like we can't find the user"); // Set error message
            } else {
                setError("An error occurred. Please try again."); // Generic error message
            }
            setUserData(null); // Clear previous user data
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
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>} {/* Show loading message */}
            {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
            {userData && (
                <div className="mt-4">
                    <img src={userData.avatar_url} alt={userData.login} className="w-20 h-20 rounded" />
                    <h3 className="font-bold">{userData.name || userData.login}</h3>
                    <p>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            View Profile
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;
















