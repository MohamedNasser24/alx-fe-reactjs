import React from 'react';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import RecipeCard from './components/RecipeCard';
import useRecipeStore from './store/recipeStore';

const App = () => {
  const exampleRecipes = [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.' },
    { id: 2, title: 'Chicken Curry', description: 'A spicy and flavorful curry.' },
    // Add more recipes as needed
  ];

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