import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserDetails() {
  // Use useContext to access user data from context
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
