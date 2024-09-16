import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    // State variables for form inputs and search results
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const data = await fetchUserData(username, location, minRepos);
            setResults(data);
        } catch (err) {
            setError('Looks like we can\'t find the user');
        } finally {
            setLoading(false);
        }
    };

    // Handler for input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'location') {
            setLocation(value);
        } else if (name === 'minRepos') {
            setMinRepos(value);
        }
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
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                        placeholder="Enter GitHub username"
                    />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={location}
                        onChange={handleInputChange}
                        placeholder="Enter location (optional)"
                    />
                </div>
                <div>
                    <label htmlFor="minRepos">Min Repos:</label>
                    <input
                        type="number"
                        id="minRepos"
                        name="minRepos"
                        value={minRepos}
                        onChange={handleInputChange}
                        placeholder="Enter minimum repos (optional)"
                    />
                </div>
                <button type="submit" disabled={loading}>Search</button>
            </form>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {results && results.items && (
                <ul>
                    {results.items.map(user => (
                        <li key={user.id}>
                            <img src={user.avatar_url} alt={user.login} width="50" />
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Search;

