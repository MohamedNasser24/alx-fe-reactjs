import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/add">Add Recipe</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;