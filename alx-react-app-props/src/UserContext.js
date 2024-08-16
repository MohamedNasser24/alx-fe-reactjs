import React, { createContext } from 'react';

// Create a Context for user data
const UserContext = createContext();

// Export the Context and its Provider
export const UserProvider = UserContext.Provider;
export default UserContext;

