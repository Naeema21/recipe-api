const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    image:{type:"String", required:"Required image"},
    title:{type:"String" , required:"Required Title"},
    process:{type:"String" , required:"Required Process"}
},{ timestamps: true });

const order = new mongoose.model("recipe",recipeSchema)
module.exports = order