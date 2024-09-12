import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const recipeDetail = data.find(recipe => recipe.id === parseInt(id));
        setRecipe(recipeDetail);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside">
            {/* Example ingredients - adjust as necessary */}
            <li>200g Spaghetti</li>
            <li>100g Pancetta</li>
            <li>2 Eggs</li>
            <li>50g Parmesan Cheese</li>
            <li>Salt and Pepper to taste</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside">
            {/* Example instructions - adjust as necessary */}
            <li>Cook the spaghetti according to the package instructions.</li>
            <li>In a pan, cook the pancetta until crispy.</li>
            <li>In a bowl, whisk together the eggs and Parmesan cheese.</li>
            <li>Combine the cooked spaghetti with the pancetta and egg mixture.</li>
            <li>Season with salt and pepper and serve hot.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
