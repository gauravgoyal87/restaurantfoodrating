const express = require('express')

// 1. Require body-parser and savie it to the variable parser.
const parser=require("body-parser")

const app = express()

const foodController = require('./controllers/food')
const restaurantController = require('./controllers/restaurant')

// 2. Add the coded needed to make body-parser work within your app.
// muddleware location
app.use(parser.urlencoded({extended:true}))
app.use(parser.json());


app.use('/api/food/', foodController)
app.use('/api/restaurant/', restaurantController)

app.listen(4040, () => console.log('Server running on port test!'))
