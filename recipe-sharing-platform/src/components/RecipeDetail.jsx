// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // For accessing route parameters

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams(); // Get the recipe ID from the URL

  useEffect(() => {
    // Fetch recipe details based on ID
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const recipeDetail = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(recipeDetail);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>; // Show loading indicator while data is fetched

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mb-4" />
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-5 mb-4">
          {/* Replace the following list items with actual ingredients */}
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal pl-5">
          {/* Replace the following steps with actual instructions */}
          <li>Step 1: Description</li>
          <li>Step 2: Description</li>
          <li>Step 3: Description</li>
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
