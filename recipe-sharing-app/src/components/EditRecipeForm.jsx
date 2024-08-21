import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore'; // Ensure the correct path

const EditRecipeForm = () => {
  const { recipeId } = useParams(); // Get the recipeId from the URL
  const navigate = useNavigate(); // Hook for navigation
  const { recipes, updateRecipe } = useRecipeStore(state => ({
    recipes: state.recipes,
    updateRecipe: state.updateRecipe
  }));

  // Find the recipe to edit based on the recipeId
  const recipeToEdit = recipes.find(recipe => recipe.id === parseInt(recipeId));

  // State for form inputs
  const [title, setTitle] = useState(recipeToEdit ? recipeToEdit.title : '');
  const [description, setDescription] = useState(recipeToEdit ? recipeToEdit.description : '');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (title.trim() === '' || description.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }
    updateRecipe({ id: recipeId, title, description });
    navigate(`/recipe/${recipeId}`); // Navigate back to the recipe details page
  };

  // Use effect to set form state when recipeToEdit changes
  useEffect(() => {
    if (recipeToEdit) {
      setTitle(recipeToEdit.title);
      setDescription(recipeToEdit.description);
    }
  }, [recipeToEdit]);

  if (!recipeToEdit) {
    return <p>Recipe not found.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          rows="4"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Update Recipe
      </button>
    </form>
  );
};

export default EditRecipeForm;