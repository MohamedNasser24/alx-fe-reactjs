import React, { useState } from 'react';
import { fetchUserData, fetchUsersByQuery } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const userData = await fetchUserData(username);
            setUser(userData);
            setError('');
        } catch (err) {
            setError(err.message);
            setUser(null);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter GitHub username"
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <h2>{user.login}</h2>
                    <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                </div>
            )}
        </div>
    );
};

export default Search;


