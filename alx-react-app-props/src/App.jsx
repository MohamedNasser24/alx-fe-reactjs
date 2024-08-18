import React from 'react';
import ProfilePage from './ProfilePage';
import { UserProvider } from './components/UserContext'; // Import UserProvider

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider userData={userData}> {/* Wrap ProfilePage with UserProvider */}
      <ProfilePage /> {/* Main component */}
    </UserProvider>
  );
}

export default App;
