import React, { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';

const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations(); // Generate recommendations when component mounts
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {(useRecipeStore(state => state.recommendations)).length > 0 ? (
        (useRecipeStore(state => state.recommendations)).map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default RecommendationsList;
