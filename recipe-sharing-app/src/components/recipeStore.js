import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '', // State for search term
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
  })),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  setRecipes: (recipes) => set({ recipes }),
  setSearchTerm: (term) => set({ searchTerm: term }) // Action to set search term
}));

export default useRecipeStore;