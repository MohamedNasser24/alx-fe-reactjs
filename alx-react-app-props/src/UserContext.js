import React from 'react';
import UserDetails from './UserDetails';

function UserInfo() {
  return <UserDetails />;
}
import React, { useContext } from 'react';
import UserContext from './UserContext';

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
export default UserInfo;