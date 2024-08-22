// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div>
      {/* Main header for the application */}
      <header>
        <h1>Recipe Sharing App</h1>
      </header>

      {/* Navigation menu */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add Recipe</Link></li>
        </ul>
      </nav>

      {/* Route definitions */}
      <main>
        <Routes>
          {/* Route for the home page displaying the list of recipes */}
          <Route path="/" element={<RecipeList />} />
          
          {/* Route for the add recipe form */}
          <Route path="/add" element={<AddRecipeForm />} />
          
          {/* Route for viewing details of a specific recipe */}
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


