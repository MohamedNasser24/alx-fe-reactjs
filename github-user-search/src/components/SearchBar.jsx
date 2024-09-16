import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for GitHub users..."
        value={username}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
