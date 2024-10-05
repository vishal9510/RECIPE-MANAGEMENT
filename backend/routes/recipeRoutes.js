const express = require('express');
const {
    createRecipe,
    getRecipes,
    getRecipe,
    updateRecipe,
    deleteRecipe,
} = require('../controllers/recipeController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();


router.post('/api/createRecipe', protect, createRecipe);
router.get('/api/getRecipes', getRecipes);
router.get('/api/getRecipe/:id', getRecipe);
router.put('/api/updateRecipe/:id', protect, updateRecipe);
router.delete('/api/deleteRecipe/:id', protect, deleteRecipe);
