var mongoose = require("mongoose");

var recipeModel = new mongoose.Schema({
  image: String,
  name: {
      type: String,
      required: true
  },
  preptime: Number,
  cuisine: String,
  type: String,
  ingredients: Array,
  method: String
})

module.exports = mongoose.model("Recipe", recipeModel);