import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],          // List of all recipes
  searchTerm: '',       // Search term for filtering
  filteredRecipes: [], // List of recipes filtered by the search term

  // Set the search term and filter recipes
  setSearchTerm: (term) => set(state => {
    const lowercasedTerm = term.toLowerCase();
    return {
      searchTerm: lowercasedTerm,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(lowercasedTerm) ||
        recipe.description.toLowerCase().includes(lowercasedTerm)
      )
    };
  }),

  // Initialize or update the list of recipes
  setRecipes: (recipes) => set({ 
    recipes,
    filteredRecipes: recipes // Initially, filteredRecipes is the same as recipes
  }),

  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  }))
}));

export default useRecipeStore;
