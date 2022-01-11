const mongoose = require('mongoose');
const Recipe = require('../models/recipe');

//get data
const getAllData = async (req, res,) => {
    try {
        const recipeList = await Recipe.find().sort({ _id: -1 })
        if (recipeList.length != 0) {
            res.status(200).json({
                totalproducts: recipeList.length,
                data: recipeList
            });
        } else {
            res.status(204).json({
                message: 'No entries found in table'
            });
        }
    } catch (error) {
        res.send('Error => ' + error)
    }
}


//add product
const addRecipe = async (req, res) => {
    const recipe = Recipe({
        title:req.body.title,
        img:req.body.img,
        process:req.body.process
    });
    recipe.save()
        .then(result => {
            res.status(201).json({
                message: "Thank you for adding data"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err,
            });
        });
}


//update product
// const updateProduct = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true })
//         res.status(200).json({
//             message: "Product Updated Successfull",
//             updatedProduct
//         })
//     } catch (error) {
//         res.status(500).json({
//             error
//         })
//     }
// }

//delete product
const deleteData = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteData = await Recipe.findByIdAndRemove(id)
        res.status(200).json({
            message: "Record Deleted Successfully"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports =
{
    getAllData,
  addRecipe,
  deleteData

}