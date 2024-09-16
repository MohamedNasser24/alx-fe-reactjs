import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const data = await fetchUserData(username);
            setUser(data);
        } catch (err) {
            setError('Looks like we can\'t find the user');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    return (
        <div className="search-container">
            <h1>GitHub User Search</h1>
            <form onSubmit={handleSubmit} className="search-form">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleInputChange}
                        placeholder="Enter GitHub username"
                    />
                </div>
                <button type="submit" disabled={loading}>Search</button>
            </form>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {user && (
                <div className="user-info">
                    <img src={user.avatar_url} alt={user.login} width="100" />
                    <h2>{user.name}</h2>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        {user.login}
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
