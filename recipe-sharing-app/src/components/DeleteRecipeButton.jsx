import { useNavigate } from '../store/recipeStore';

const DeleteRecipeButton = ({ id, onDelete }) => {
  const deleteRecipe = useNavigate((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(id);
      if (onDelete) onDelete();
    }
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
 
