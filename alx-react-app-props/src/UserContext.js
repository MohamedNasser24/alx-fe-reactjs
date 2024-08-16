import React, { createContext } from 'react';

// Create the UserContext
const UserContext = createContext();

// Export the UserProvider
export const UserProvider = UserContext.Provider;
export default UserContext;



