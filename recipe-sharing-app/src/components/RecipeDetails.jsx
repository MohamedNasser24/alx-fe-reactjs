import React from 'react';
import { useRecipeStore } from '../recipeStore'; // Adjust path as needed

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Add edit and delete functionality here */}
    </div>
  );
};

export default RecipeDetails;