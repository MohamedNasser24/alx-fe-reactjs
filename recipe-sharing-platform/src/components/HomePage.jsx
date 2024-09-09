import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null); // For error handling
  const [loading, setLoading] = useState(true); // To handle loading state

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/src/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="no-underline">
              <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="text-gray-700">{recipe.summary}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
