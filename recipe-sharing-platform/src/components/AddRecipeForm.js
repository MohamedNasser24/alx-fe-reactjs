import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={recipe.title}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          rows="4"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          rows="6"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
