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
        setError('');
        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError('Looks like we can\'t find the user');
            setUserData(null); // Clear previous user data
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
            {error && <p>{error}</p>}
            {userData && (
                <div>
                    <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
                    <h3>{userData.login}</h3> {/* Display the username (login) */}
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                </div>
            )}
        </div>
    );
};

export default Search;






