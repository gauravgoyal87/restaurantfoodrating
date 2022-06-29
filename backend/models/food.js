const FoodController = require('../controllers/food')
const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Food =  new Schema({
  image: String,
  dish: String,
  comment: String,
  rating: Number,
  restaurantName: String
})

module.exports = mongoose.model('food', Food)
