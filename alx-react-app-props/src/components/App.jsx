import React from 'react';
import ProfilePage from '../ProfilePage';
import { UserProvider } from '../UserContext'; // Import UserProvider

function App() {
  // Define the user data to be provided through context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider userData={userData}> {/* Wrap ProfilePage with UserProvider */}
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
