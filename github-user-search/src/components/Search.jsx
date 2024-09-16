import React, { useState } from 'react';
import { fetchUsers } from '../services/githubService';

const Search = () => {
    const [query, setQuery] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState(0);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = await fetchUsers(query, location, minRepos);
            setUsers(data);
        } catch (err) {
            setError('Error fetching users');
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search term"
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location (optional)"
                />
                <input
                    type="number"
                    value={minRepos}
                    onChange={(e) => setMinRepos(Number(e.target.value))}
                    placeholder="Min repositories (optional)"
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </form>

            {error && <p>{error}</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                            <img src={user.avatar_url} alt={user.login} width="50" />
                            {user.login}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
