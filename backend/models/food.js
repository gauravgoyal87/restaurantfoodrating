const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Food = new Schema({
  image:String,
  name: String,
  comment: String,
  rating: Number

 
})

module.exports = mongoose.model('Food', Food)
