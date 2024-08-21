import React, { useEffect } from 'react';
import useRecipeStore from '../recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Trigger filtering whenever the search term changes
  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div>
      <h1>Recipe List</h1>
      {recipes.length === 0 ? (
        <p>No recipes available</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

