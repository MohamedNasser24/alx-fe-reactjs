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
        setError(''); // Clear any previous error

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            // Set the error message when API call fails
            setError("Looks like we can't find the user");
            setUserData(null); // Clear user data if there's an error
        } finally {
            setLoading(false); // Reset loading state
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

            {loading && <p>Loading...</p>} {/* Show loading message */}
            {error && <p>{error}</p>} {/* Display error message */}
            {userData && (
                <div>
                    <img 
                        src={userData.avatar_url} 
                        alt={`${userData.login}'s avatar`} 
                        width="100" 
                    />
                    <h3>{userData.login}</h3> {/* Display username */}
                    <a 
                        href={userData.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default S













