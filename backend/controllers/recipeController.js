const Recipe = require('../model/recipe.model');

// Create a new recipe
const createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe({ ...req.body, createdBy: req.user.userId });
    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Error creating recipe', error: err.message });
  }
};

// Get all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('createdBy', 'username');
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching recipes', error: err.message });
  }
};

// Get a single recipe
const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('createdBy', 'username');
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching recipe', error: err.message });
  }
};

// Update a recipe
const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    if (recipe.createdBy.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Unauthorized to update this recipe' });
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRecipe);
  } catch (err) {
    res.status(500).json({ message: 'Error updating recipe', error: err.message });
  }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    if (recipe.createdBy.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Unauthorized to delete this recipe' });
    }

    await recipe.remove();
    res.json({ message: 'Recipe deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting recipe', error: err.message });
  }
};

module.exports = { createRecipe,getRecipes,getRecipe ,updateRecipe,deleteRecipe};
