import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  return (
    <NavigationContext.Provider value={{ selectedRecipeId, setSelectedRecipeId }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);