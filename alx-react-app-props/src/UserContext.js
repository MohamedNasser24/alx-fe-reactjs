import React, { createContext } from 'react';
import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Adjust path as needed

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

// Create a Context for user data
const UserContext = createContext();

// Export the Context and its Provider
export const UserProvider = UserContext.Provider;
export default UserContext;
