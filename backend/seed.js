const mongoose = require('mongoose')
const Food = require('./models/food')
const Restaurant = require('./models/restaurant')

Restaurant.deleteMany().then(() => {
  console.log('deleted all restaurants')
Food.deleteMany().then(() => {
  console.log('deleted all foods')
})
})

Restaurant.create({
    name: "Bund Dumplings",
    location: "Astoria, NY"
}).then(bund => {
    Food.create({
        image: "test",
        dish: "dim sum",
        comment: "very delicious",
        rating: 7
    })
})

Restaurant.create({
    name: "Bom's Barbecue",
    location: "New York City"
}).then(bund => {
    Food.create({
        image: "test",
        dish: "KBBQ",
        comment: "very delicious",
        rating: 10
    })
})

Restaurant.create({
    name: "Gaurav's House",
    location: "Jersey City, NJ"
}).then(bund => {
    Food.create({
        image: "test",
        dish: "pulse candies",
        comment: "very good",
        rating: 9
    })
})

Restaurant.create({
    name: "Quoc's Fried Chicken",
    location: "Brooklyn, NY"
}).then(bund => {
    Food.create({
        image: "test",
        dish: "fried chicken sandwich",
        comment: "perfect",
        rating: 10
    })
})