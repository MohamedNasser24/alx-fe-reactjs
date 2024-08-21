import React from 'react';
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded mt-4">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;