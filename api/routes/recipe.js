const express = require('express')
const router = express.Router();
const recipeController = require('../controller/recipe');

router.get('/', recipeController.getAllData)
router.post('/', recipeController.addRecipe)
router.delete('/:id', recipeController.deleteData)

module.exports = router;