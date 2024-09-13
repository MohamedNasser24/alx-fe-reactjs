// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import data from '../data.json'; // Import mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Recipe Sharing Platform</h1>
        <p className="text-lg mt-2">Discover and share your favorite recipes.</p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="mt-2 text-gray-600">{recipe.summary}</p>
              <a href={`/recipes/${recipe.id}`} className="text-blue-600 hover:underline mt-4 block">View Recipe</a>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default HomePage;

