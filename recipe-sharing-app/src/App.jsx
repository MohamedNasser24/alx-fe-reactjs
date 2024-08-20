import React from 'react';
import RecipeList from './components/RecipeList';  // Import RecipeList component
import AddRecipeForm from './components/AddRecipeForm';  // Import AddRecipeForm component

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />  {/* Render AddRecipeForm */}
      <RecipeList />  {/* Render RecipeList */}
    </div>
  );
}

export default App;