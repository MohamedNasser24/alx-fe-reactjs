import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <div key={recipe.id} className="p-4 border-b border-gray-200">
            <Link to={`/recipe/${recipe.id}`}>
              <h3 className="text-xl font-semibold">{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes available</p>
      )}
    </div>
  );
};

export default RecipeList;