const mongoose = require('mongoose')
const Food = require('./models/food')
const Restaurant = require('./models/restaurant')

Restaurant.deleteMany().then(() => {
  console.log('deleted all restaurants')
Food.deleteMany().then(() => {
  console.log('deleted all foods')

Restaurant.create({
    name: "Bund Dumplings",
    location: "Astoria, NY"
}).then(bund => {
    Food.create({
        image: "test",
        dish: "dim sum",
        comment: "very delicious",
        rating: 7,
        restaurantName:  "Bund Dumplings"
    })
}),

Restaurant.create({
    name: "Bom's Barbecue",
    location: "New York City"
}).then(bom => {
    Food.create({
        image: "test",
        dish: "KBBQ",
        comment: "very delicious",
        rating: 10,
        restaurantName: "Bom's Barbecue"
    })
}),

Restaurant.create({
    name: "Gaurav's House",
    location: "Jersey City, NJ"
}).then(gaurav => {
    Food.create({
        image: "test",
        dish: "pulse candies",
        comment: "very good",
        rating: 9,
        restaurantName: "Gaurav's House"
    })
}),

Restaurant.create({
    name: "Quoc's Fried Chicken",
    location: "Brooklyn, NY"
}).then(quoc => {
    Food.create({
        image: "test",
        dish: "fried chicken sandwich",
        comment: "perfect",
        rating: 10,
        restaurantName: "Quoc's Fried Chicken"
    })
})
})
})