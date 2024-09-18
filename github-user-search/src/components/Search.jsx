import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData(null); // Clear previous user data

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            // Set error message when user is not found
            setError("Looks like we can't find the user."); // Specific error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>} {/* Display error message */}
            {userData && (
                <div>
                    <h2>{userData.name || userData.login}</h2> {/* Display name or login */}
                    <img src={userData.avatar_url} alt={userData.name || userData.login} width="100" />
                    <p>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                            View Profile
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;
