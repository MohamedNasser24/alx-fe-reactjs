import React, { useState } from 'react';
import { fetchUsersByQuery } from '../services/githubService';

const Search = () => {
    const [query, setQuery] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setError('');
        try {
            const userData = await fetchUsersByQuery(query);
            setUsers(userData);
        } catch (err) {
            setError(err.message);
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter search criteria"
            />
            <button onClick={handleSearch}>Search</button>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {users.length > 0 && (
                <div>
                    {users.map(user => (
                        <div key={user.id}>
                            <h2>{user.login}</h2>
                            <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;



