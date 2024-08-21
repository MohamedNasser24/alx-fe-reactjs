import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import useRecipeStore from './recipeStore';

function App() {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;