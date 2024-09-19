// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        setLoading(true);
        setError('');
        try {
            const userData = await fetchUserData(username);
            setUser(userData);
        } catch (err) {
            setError("Looks like we can't find the user");
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <h2>{user.name || user.login}</h2>
                    <img src={user.avatar_url} alt={user.login} width="100" />
                    <p>Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></p>
                </div>
            )}
        </div>
    );
};

export default Search;



