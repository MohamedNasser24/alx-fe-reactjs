import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    }));
  },
  filteredRecipes: [],
  initializeRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));

export default useRecipeStore;