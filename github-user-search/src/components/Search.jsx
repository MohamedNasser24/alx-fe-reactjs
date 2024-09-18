import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const data = await fetchUserData(username);
            setUser(data);
        } catch (err) {
            setError('Looks like we can’t find the user');
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                />
                <button type="submit">Search</button>
            </form>
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
                    <h2>{user.login}</h2>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">Profile</a>
                </div>
            )}
        </div>
    );
};

export default Search;
