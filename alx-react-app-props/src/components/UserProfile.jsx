import React from 'react';
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext, { UserProvider } from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider value={userData}>
      <ProfilePage />
    </UserProvider>
  );
}
import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Adjust path if necessary

function UserDetails {
    import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Adjust path if necessary

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}


import React from 'react';
import UserInfo from './UserInfo';

function ProfilePage() {
  return <UserInfo />;
}
export default ProfilePage;

export default UserProfile;
