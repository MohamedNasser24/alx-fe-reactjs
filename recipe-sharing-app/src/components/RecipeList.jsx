import React from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Recipe List</h2>
      <ul className="list-none p-0">
        {filteredRecipes.map(recipe => (
          <li key={recipe.id} className="flex items-center mb-2 p-2 rounded-md bg-gray-100">
            <div className="flex-grow mr-4">
              <h3 className="text-xl font-medium">{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;