import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => setRecipe(data.find((r) => r.id === parseInt(id))));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded mb-4" />
      <p className="text-gray-700 mb-4">{recipe.summary}</p>
      <div className="prose">
        <h2 className="text-2xl font-semibold">Ingredients</h2>
        <ul>
          {/* Example Ingredients List */}
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
        </ul>
        <h2 className="text-2xl font-semibold">Instructions</h2>
        <ol>
          {/* Example Instructions List */}
          <li>Step 1</li>
          <li>Step 2</li>
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;

