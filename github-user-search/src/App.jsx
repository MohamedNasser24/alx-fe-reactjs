import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import { fetchUser } from './services/githubService';

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    try {
      const userData = await fetchUser(username);
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search</h1>
        <SearchBar onSearch={handleSearch} />
        <UserProfile user={user} />
      </header>
    </div>
  );
}

export default App;

