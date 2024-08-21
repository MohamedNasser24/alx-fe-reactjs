import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white text-center">
        <h1 className="text-2xl font-semibold mb-4">Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <RecipeList />
      </div>
    </div>
  );
};

export default App;