const express = require('express')
const router = express.Router();
const recipeController = require('../controller/recipe');

router.get('/', recipeController.getrecipe)
router.post('/', recipeController.postrecipe)
router.delete('/:id', recipeController.deleterecipe)

module.exports = router;