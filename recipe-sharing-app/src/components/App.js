import React from 'react';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';
import RecipeCard from './RecipeCard';
import useRecipeStore from './store/recipeStore';

const App = () => {
  // Example recipes data
  const exampleRecipes = [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.' },
    { id: 2, title: 'Chicken Curry', description: 'A spicy and flavorful curry.' },
    // Add more recipes as needed
  ];

  // Load recipes into Zustand store (usually done in a useEffect or similar hook)
  useRecipeStore.setState({ recipes: exampleRecipes });

  return (
    <div>
      <h1>Recipe Sharing Application</h1>
      <FavoritesList />
      <RecommendationsList />
      <div>
        {exampleRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;