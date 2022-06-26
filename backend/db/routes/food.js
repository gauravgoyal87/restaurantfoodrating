const express = require("express");
const router = express.Router();
const Food = require("../../models/food");

router.get("/", (req, res) => {
    Food.find({}).then(allFoods => res.json(allFoods));
});

router.post("/", (req, res) => {
    const newFood = req.body;
    console.log(newFood)
    res.json(newFood);
});

router.put("/:food", (req, res) => {
    Food.findOneAndUpdate({params?}, req.body).then(newFood => res.json(newFood));
});

router.delete("/:food", (req, res) => {
    Food.findOneAndDelete({food: req.params.food}).then(newFood => {
        res.json(newFood);
    });
});

module.exports = router;
