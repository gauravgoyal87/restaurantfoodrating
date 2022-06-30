# Greasy Spoon

We created a backend with full CRUD capabilities to hold the data for users' restaurant and food ratings and comments.

# Wireframes

![0-1](https://user-images.githubusercontent.com/103523822/176718640-c1854723-0084-472f-ad50-14fa655b113e.jpg)

![0](https://user-images.githubusercontent.com/103523822/176718675-d6b87c54-b1c3-4df2-bd3d-e23d9cf74c15.jpg)

# Installaion instructions

deployment link here

## Technologies used

1. MongoDB
2. Express.js
3. Node.js

## User stories

- As a user, I want to add, update, delete, and view the data I've entered into the website
- As a user, I want to be able to keep track and view what I've previously entered

## Code snippet 

Models:

`
const Food =  new Schema({
  image: String,
  dish: String,
  comment: String,
  rating: Number
})
`

`
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
`

## Resources & credits
We used articles on StackOverflow as well as the documentation for the backend tools
