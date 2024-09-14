import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!preparation) newErrors.preparation = 'Preparation steps are required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Call the onAddRecipe function passed as a prop with the form data
    onAddRecipe({ title, ingredients, preparation });

    // Clear form fields
    setTitle('');
    setIngredients('');
    setPreparation('');
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 ${errors.title ? 'border-red-500' : ''}`}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 ${errors.ingredients ? 'border-red-500' : ''}`}
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>
        <div>
          <label htmlFor="preparation" className="block text-sm font-medium text-gray-700">Preparation Steps</label>
          <textarea
            id="preparation"
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            rows="4"
            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 ${errors.preparation ? 'border-red-500' : ''}`}
          ></textarea>
          {errors.preparation && <p className="text-red-500 text-sm">{errors.preparation}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
