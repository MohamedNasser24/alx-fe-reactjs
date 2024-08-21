import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-center items-center h-screen p-4">
        <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white text-center">
          <h1 className="text-2xl font-semibold mb-4">Recipe Sharing App</h1>
          <SearchBar />
          <Routes>
            <Route path="/" element={<AddRecipeForm />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
