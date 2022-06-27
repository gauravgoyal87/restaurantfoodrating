const mongoose = require('mongoose')
const restaurantController = require("../controllers/restaurant")
const Schema = mongoose.Schema

const Restaurant = new Schema({
  name: String,
  location: String,
  food: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Food'
    }
  ]
})

module.exports = mongoose.model('restaurant', Restaurant)
