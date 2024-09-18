import React, { useState } from 'react';
import { fetchUsersByQuery } from '../services/githubService';

const Search = () => {
    const [query, setQuery] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const data = await fetchUsersByQuery(query);
            setUsers(data);
        } catch (err) {
            setError('Looks like we can’t find any users');
            setUsers([]); // Clear previous results on error
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search GitHub users"
                />
                <button type="submit">Search</button>
            </form>
            {error && <p>{error}</p>}
            <div>
                {users.length > 0 ? (
                    users.map((user) => (
                        <div key={user.id}>
                            <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
                            <h2>{user.login}</h2>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">Profile</a>
                        </div>
                    ))
                ) : (
                    <p>No users found.</p>
                )}
            </div>
        </div>
    );
};

export default Search;

