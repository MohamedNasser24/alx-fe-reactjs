import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const initializeRecipes = useRecipeStore(state => state.initializeRecipes);
  const allRecipes = useRecipeStore(state => state.recipes);

  useEffect(() => {
    if (allRecipes.length === 0) {
      initializeRecipes([
        { id: 1, title: 'Spaghetti Bolognese', description: 'A classic Italian pasta dish.' },
        { id: 2, title: 'Chicken Curry', description: 'A spicy and savory curry.' }
      ]);
    }
  }, [allRecipes.length, initializeRecipes]);

  return (
    <div>
      <SearchBar />
      <div>
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <div key={recipe.id}>
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;