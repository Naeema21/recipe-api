//In this file we create Authentication (JWT) Token
const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: 'Please enter  title'
    },
    img: {
        type: String,
        required: 'Please enter image'
    },
    process: {
        type: String,
        required: 'Please enter recipe'
    },
},
    {
        timestamps: true,
    });

// we will create a new connection

const Recipe = new mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;