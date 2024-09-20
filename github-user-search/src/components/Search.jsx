import React, { useState } from 'react';

const Search = () => {
    const [username, setUsername] = useState(''); // State to hold the input value

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // You will handle the API request here in the next steps
        console.log("Searching for user:", username); // Log the username
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Update state on input change
                    placeholder="Enter GitHub username"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Search;









