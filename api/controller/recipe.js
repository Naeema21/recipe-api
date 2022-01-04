const express = require('express')
const recipeModel = require('../models/recipe')

const getrecipe = async (req, res, next) => {
    try {
        const calls = await recipeModel.find().sort({ _id: -1 })
        if (calls.length != 0) {
            res.status(200).json({
                total:calls.length,
                data:calls});
        } else {
            res.status(404).json({
                message: 'No entries found in table'
            });
        }
    } catch (error) {
        res.send('Error => ' + error)
    }
 
}

const postrecipe = (req, res, next) => {
    const recipemodel = recipeModel({
        title: req.body.title,
        recipe: req.body.recipe
    })
    recipemodel.save().then(doc =>
        res.status(200).json({
            message: "data send successfully",
            data: doc
        })
    )
}

const deleterecipe = (req, res, next) => {
    const recipeid = req.params.id;
    recipeModel.remove((recipeid)).exec().then(
        res.status(200).json({
            message: "Data Deleted Successfully"
        }).catch(err =>
            res.status(500).json(err)
        )
    )
}

module.exports = {
    getrecipe,
    postrecipe,
    deleterecipe
}