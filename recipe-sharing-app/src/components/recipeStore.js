import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => set(state => {
    // Update search term and trigger filtering
    set({ searchTerm: term });
    state.filterRecipes(term);
  }),

  filterRecipes: (term) => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    )
  })),

  addRecipe: (newRecipe) => set(state => {
    const updatedRecipes = [...state.recipes, newRecipe];
    // Apply filtering to new recipes list
    state.filterRecipes(state.searchTerm);
    return { recipes: updatedRecipes };
  }),

  deleteRecipe: (id) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    state.filterRecipes(state.searchTerm);
    return { recipes: updatedRecipes };
  }),

  updateRecipe: (id, updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === id ? updatedRecipe : recipe
    );
    state.filterRecipes(state.searchTerm);
    return { recipes: updatedRecipes };
  }),

  // Initial recipe fetch or setup
  setRecipes: (recipes) => {
    set({ recipes, filteredRecipes: recipes });
  },
}));

export default useRecipeStore;