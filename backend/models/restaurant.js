const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Restaurant = new Schema({
  name: String,
  location: String,
  food: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Food'
    }
  ]
})

module.exports = mongoose.model('Restaurant', Restaurant)
