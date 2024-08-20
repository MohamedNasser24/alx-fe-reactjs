import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <Link to="/recipe/1">Go to Recipe 1 Details</Link> {/* Example link */}
    </div>
  );
};

export default App;
