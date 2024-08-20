import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const { filteredRecipes, recipes, filterRecipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    recipes: state.recipes,
    filterRecipes: state.filterRecipes
  }));

  // Trigger filtering when recipes or search term changes
  useEffect(() => {
    filterRecipes();
  }, [filterRecipes, recipes]);

  return (
    <div>
      <h2>Recipe List</h2>
      <SearchBar />
      <div>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div key={recipe.id}>
              <h3>
                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;