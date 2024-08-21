import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { useRecipeStore } from './recipeStore'; // Adjust path as needed

const App = () => {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {selectedRecipeId ? (
        <RecipeDetails
          recipeId={selectedRecipeId}
          onClose={() => setSelectedRecipeId(null)}
        />
      ) : (
        <RecipeList onSelectRecipe={setSelectedRecipeId} />
      )}
    </div>
  );
};

export default App;