import React, { useContext } from 'react';
import UserContext from './components/UserContext'; // Import UserContext

function UserDetails() {
  const userData = useContext(UserContext); // Access context value

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
