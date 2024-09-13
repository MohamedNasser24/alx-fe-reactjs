import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data.json'; // Adjust path as needed

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulate fetching recipe details based on the ID
    const fetchedRecipe = data.recipes.find(recipe => recipe.id === parseInt(id, 10));
    setRecipe(fetchedRecipe);
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-4" />
        {recipe.description && (
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{recipe.description}</p>
          </div>
        )}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-1">{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;

