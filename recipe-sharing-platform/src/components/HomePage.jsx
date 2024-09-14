import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="text-center py-4 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
      </header>
      <main className="container mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg p-6">
            <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
            <p className="text-gray-700 mt-2">{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 mt-4 inline-block">View Details</Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default HomePage;