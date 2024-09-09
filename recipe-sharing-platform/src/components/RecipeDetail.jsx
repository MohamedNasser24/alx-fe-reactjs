import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe details using the ID
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id, 10));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error('Error fetching recipe details:', error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-64 object-cover rounded mb-4" 
        />
        <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
        <p className="text-gray-600 mb-4">{recipe.summary}</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside pl-5 text-gray-700">
            {/* Assuming ingredients is an array of strings */}
            {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside pl-5 text-gray-700">
            {/* Assuming instructions is an array of strings */}
            {recipe.instructions && recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;

