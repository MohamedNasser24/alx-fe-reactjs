import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Ensure the correct import path

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


