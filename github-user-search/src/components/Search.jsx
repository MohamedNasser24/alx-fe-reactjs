import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = await fetchUserData(username);
            if (data && data.length > 0) {
                setUsers(data);
            } else {
                setError('Looks like we can’t find the user');
                setUsers([]);
            }
        } catch (err) {
            setError('Looks like we can’t find the user');
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    // Handle input change
    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    return (
        <div className="search-container">
            <h1>GitHub User Search</h1>
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    value={username}
                    onChange={handleChange}
                    placeholder="Enter GitHub username"
                    className="input-field"
                />
                <button type="submit" disabled={loading} className="submit-button">
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </form>

            {error && <p className="error-message">{error}</p>}

            {users.length > 0 && (
                <div className="user-list">
                    {users.map(user => (
                        <div key={user.id} className="user-info">
                            <img src={user.avatar_url} alt={user.login} className="avatar" />
                            <h2>{user.name || user.login}</h2>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                {user.login}
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
