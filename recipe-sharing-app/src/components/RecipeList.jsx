import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const recipes = filteredRecipes.length > 0 ? filteredRecipes : useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;