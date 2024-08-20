import React from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { recipes, searchTerm, setSearchTerm } = useRecipeStore(state => ({
    recipes: state.recipes,
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm
  }));

  // Filter recipes based on searchTerm
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Recipe List</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;