import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import './Search.css'; // Import the CSS if you have any styles

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const userData = await fetchUserData(username);
            setUser(userData);
        } catch (err) {
            setError('Looks like we can\'t find the user');
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
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <img src={user.avatar_url} alt={user.login} width="100" />
                    <h2>{user.name || user.login}</h2>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                </div>
            )}
        </div>
    );
};

export default Search;



