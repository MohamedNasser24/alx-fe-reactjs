import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext';

const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

ReactDOM.render(
  <UserProvider userData={userData}>
    <ProfilePage />
  </UserProvider>,
  document.getElementById('root')
);
