import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // Set the search term and trigger filtering
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    }));
  },

  // Initialize or set recipes and trigger filtering
  setRecipes: (recipes) => {
    set({ recipes, filteredRecipes: recipes });
  },
}));

export default useRecipeStore;