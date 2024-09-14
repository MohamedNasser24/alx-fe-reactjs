import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  // Dummy function to handle new recipe submission
  const handleAddRecipe = (recipe) => {
    console.log('New Recipe Added:', recipe);
    // Implement your logic to add the recipe to the state or server
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

