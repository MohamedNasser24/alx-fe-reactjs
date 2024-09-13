// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')
      .then(response => response.json())
      .then(data => {
        const recipe = data.find(item => item.id === parseInt(id));
        setRecipe(recipe);
      });
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mb-4" />
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <p className="mb-4">{recipe.ingredients}</p>
        <h2 className="text-xl font-semibold mb-2">Preparation Steps</h2>
        <p>{recipe.steps}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;

