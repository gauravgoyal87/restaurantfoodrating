const express = require("express")
const mongoose = require("mongoose")
const app = express()
const api = require("./api")
const cors = require("cors")
mongoose.connect("mongodb://localhost/4040")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({origin: "*"}))
app.use('/api/food/', foodController)
app.use('/api/restaurant/', restaurantController)
app.use("/api", api)


app.listen(4040, () => console.log('App is listening'))
