import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Import UserContext
import UserInfo from './UserInfo'; // Import UserInfo component

function UserProfile() {
  const userData = useContext(UserContext); // Use useContext to access context value

  return (
    <div>
      <h1>User Profile</h1>
      <UserInfo /> {/* Render UserInfo, which will use context */}
    </div>
  );
}

export default UserProfile;