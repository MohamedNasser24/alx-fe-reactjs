import { Link } from 'react-router-dom';
import data from '../data.json'; // Ensure data.json is in the right place

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe List</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.recipes.map(recipe => (
          <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;