const express = require('express')
const router = express.Router()
const Restaurant = require("./restaurant")


const Restaurant=require("../models/Restaurant")

router.get("/",(req,res)=>{
    Restaurant.find().then(restaurant=>{
     res.json(restaurant)
})
});

router.get("/:Name",(req,res)=>{
    Restaurant.find({name:req.params.name}).then(name=>{
        res.json(name)
    })
});

router.post("/", (req, res) => {
    Restaurant.create(req.body)
    .then((restaurant) => {
      res.json(restaurant);
    });
  });

  router.delete("/:Name", (req, res) => {
    Restaurant.findOneAndDelete({name: req.params.name})
    .then((restaurant) => {
      res.json(restaurant);
    });
  });
module.exports = router