const express = require('express')
const router = express.Router()
const Food = require("../models/food")

router.get("/", (req, res)=>{
    Food.find({}).then(food=>{
     res.json(food)
})
});

router.get("/:dish", (req, res)=>{
    Food.find({dish: req.params.dish}).then(name=>{
        res.json(dish)
    })
});

router.post("/", (req, res) => {
    Food.create(req.body)
    .then((food) => {
      res.json(food);
    });
  });

  router.delete("/:name", (req, res) => {
    Food.findOneAndDelete({dish: req.params.dish})
    .then((food) => {
      res.json(food);
    });
  });
  
module.exports = router