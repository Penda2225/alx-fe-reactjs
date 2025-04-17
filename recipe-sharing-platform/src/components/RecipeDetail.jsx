import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selected = data.find((r) => r.id === parseInt(id));
    setRecipe(selected);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-20 text-gray-500">Loading recipe...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-green-700 mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-700">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>1 cup placeholder ingredient</li>
          <li>2 tbsp placeholder seasoning</li>
          <li>Optional: add your own!</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2 text-blue-700">Cooking Instructions</h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          <li>Step 1: Prepare ingredients.</li>
          <li>Step 2: Follow recipe instructions carefully.</li>
          <li>Step 3: Serve hot and enjoy!</li>
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
 
