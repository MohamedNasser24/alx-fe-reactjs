import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Redirect to the homepage or recipe list
  };

  return (
    <button 
      onClick={handleDelete} 
      className="bg-red-500 text-white p-2 rounded mt-4"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;