import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from './ProfilePage'; // Or your main component file
import { UserProvider } from './UserContext'; // Import the UserProvider

const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

ReactDOM.render(
  <UserProvider userData={userData}> {/* Provide context */}
    <ProfilePage /> {/* Main component */}
  </UserProvider>,
  document.getElementById('root')
);