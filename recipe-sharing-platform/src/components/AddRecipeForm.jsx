import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State for form inputs and validation
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setErrors('All fields are required.');
      return;
    }

    // Optional: Split ingredients into an array
    const ingredientsArray = ingredients.split('\n').filter(item => item.trim() !== '');

    // Optional: Ensure at least two ingredients
    if (ingredientsArray.length < 2) {
      setErrors('Please provide at least two ingredients.');
      return;
    }

    // Clear errors and handle the form submission (e.g., send to an API)
    setErrors('');
    console.log({ title, ingredients: ingredientsArray, steps });

    // Reset form fields
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add a New Recipe</h1>
      {errors && <p className="text-red-500 mb-4">{errors}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter recipe title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 text-sm font-semibold mb-2">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter each ingredient on a new line"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 text-sm font-semibold mb-2">Preparation Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Describe the preparation steps"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

