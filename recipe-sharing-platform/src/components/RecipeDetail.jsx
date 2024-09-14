import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const selectedRecipe = data.find(item => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch(error => console.error('Error fetching recipe details:', error));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="text-center py-4 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">Recipe Detail</h1>
      </header>
      <main className="container mx-auto mt-6 bg-white rounded-lg shadow-lg p-6">
        <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-lg" />
        <h2 className="text-3xl font-semibold mt-4">{recipe.title}</h2>
        <p className="text-gray-700 mt-2">{recipe.summary}</p>
        <section className="mt-6">
          <h3 className="text-2xl font-semibold">Ingredients</h3>
          <ul className="list-disc list-inside mt-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>
        <section className="mt-6">
          <h3 className="text-2xl font-semibold">Cooking Instructions</h3>
          <ol className="list-decimal list-inside mt-2">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
};

export default RecipeDetail;