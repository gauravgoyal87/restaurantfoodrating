const FoodController = require('../controllers/food')
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Food =  new Schema({
  image: String,
  dish: String,
  comment: String,
  rating: Number
})

module.exports = mongoose.model('food', Food)
