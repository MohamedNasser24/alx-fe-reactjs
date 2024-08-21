import React from 'react';
import useRecipeStore from '../store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favoriteIds = useRecipeStore(state => state.favorites);
  const favorites = recipes.filter(recipe => favoriteIds.includes(recipe.id));

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map(recipe => (
          <div key={recipe.id} className="mb-4 p-4 border rounded-md shadow-sm">
            <h3 className="text-xl font-medium">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;