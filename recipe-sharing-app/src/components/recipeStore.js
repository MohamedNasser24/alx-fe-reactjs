import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Initial state for recipes
  searchTerm: '', // For search functionality
  filteredRecipes: [], // To store filtered recipes

  // Action to add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),

  // Action to set the recipes
  setRecipes: (recipes) => set({ recipes }),

  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
}));

export default useRecipeStore;