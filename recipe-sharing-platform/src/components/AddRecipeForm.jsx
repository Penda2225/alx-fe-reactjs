import { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError('Please fill out all fields.');
      return;
    }

    const ingredientList = ingredients.split(',').map(i => i.trim()).filter(i => i);
    if (ingredientList.length < 2) {
      setError('Please enter at least two ingredients (separated by commas).');
      return;
    }

    setError('');
    // For now, just log the new recipe
    console.log({
      title,
      ingredients: ingredientList,
      steps,
    });

    // Clear form
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Add a New Recipe</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g. Chocolate Cake"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Ingredients (separated by commas)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g. flour, sugar, eggs, cocoa powder"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Describe the preparation process step-by-step"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
