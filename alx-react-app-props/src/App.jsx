import React from 'react';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext'; // Import the UserProvider

function App() {
  // Define the user data that you want to provide to the context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider userData={userData}> {/* Wrap your components with UserProvider */}
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
