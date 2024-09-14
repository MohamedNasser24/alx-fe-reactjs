import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetching the mock data
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="text-center py-4 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
      </header>
      <main className="container mx-auto mt-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recipes.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="text-gray-700 mt-2">{recipe.summary}</p>
                <a href={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline mt-4 block">View Recipe</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
