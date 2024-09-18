// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUsers } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData([]);

        try {
            const data = await fetchUsers(username, location, minRepos, page);
            setUserData(data.items);
            setTotalCount(data.total_count);
        } catch (err) {
            setError("Looks like we can't find any users.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-5 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location (optional)"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="number"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    placeholder="Minimum Repositories (optional)"
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div>
                {userData.length > 0 ? (
                    userData.map(user => (
                        <div key={user.id} className="border p-4 mt-2 rounded">
                            <h2>{user.login}</h2>
                            <p>Location: {user.location || 'N/A'}</p>
                            <p>Repositories: {user.public_repos || 0}</p>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                        </div>
                    ))
                ) : (
                    !loading && <p>No users found.</p>
                )}
            </div>

            {totalCount > 30 && (
                <div className="flex justify-between mt-4">
                    <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>
                        Previous
                    </button>
                    <button onClick={() => setPage(prev => prev + 1)} disabled={page * 30 >= totalCount}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Search;
