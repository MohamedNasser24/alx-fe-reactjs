import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json') // Correct the path for fetching data
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes)) // Assuming your data.json has a "recipes" array
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="no-underline"> {/* Wrap the card with Link */}
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded mb-4" />
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
