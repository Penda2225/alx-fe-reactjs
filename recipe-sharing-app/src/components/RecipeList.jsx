import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
