import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

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

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // Action to delete a recipe
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
  })),
}));

export default useRecipeStore;