import React from 'react';
import { useRecipeStore } from '../recipeStore'; // Adjust path as needed

const RecipeList = ({ onSelectRecipe }) => {
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes available</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => onSelectRecipe(recipe.id)}>
              View Details
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

