// This is the file that kicks off the server

const express = require("express")
const mongoose = require("mongoose")
const app = express()
const routes = require("./routes")
const cors = require("cors")
const {
    PORT = 4040,
    DB_URI = "mongodb://localhost:27017/restaurantapp"
} = process.env
mongoose.connect(DB_URI)

// The process.env is a preemptive step for when we deploy with heroku - it hides sensitive information set in a variable so we can just use the variable rather than the links themselves

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// I use express.url because body parser doesn't need to be required anymore, it's built in

app.use(cors({origin: "*"}))

// This cors line grants cors access to everything, not great for a larger, more sensitive project but okay for now 

app.use(routes)

app.listen(PORT, () => console.log('App is listening'))