import React from 'react';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext'; // Import UserProvider

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider userData={userData}> {/* Wrap ProfilePage with UserProvider */}
      <ProfilePage /> {/* Render the ProfilePage */}
    </UserProvider>
  );
}

export default App;
