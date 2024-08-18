import React, { createContext } from 'react';

// Create the UserContext
const UserContext = createContext();

// Create the UserProvider component
export const UserProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;