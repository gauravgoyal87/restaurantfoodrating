const express = require('express')
const router = express.Router()
const Food = require("./food")

const  Food=require("../models/Food")

router.get("/",(req,res)=>{
    Food.find().then(food=>{
     res.json(food)
})
});

router.get("/:name",(req,res)=>{
    Food.find({name:req.params.name}).then(name=>{
        res.json(name)
    })
});

router.post("/", (req, res) => {
    Food.create(req.body)
    .then((food) => {
      res.json(food);
    });
  });

  router.delete("/:name", (req, res) => {
    Food.findOneAndDelete({name: req.params.name})
    .then((food) => {
      res.json(food);
    });
  });
module.exports = router