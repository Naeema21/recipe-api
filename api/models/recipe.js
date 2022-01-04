const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    title:{type:"String" , required:true},
    recipe:{type:"String" , required:true}
});

const order = new mongoose.model("recipe",recipeSchema)
module.exports = order