const express = require("express");
const restaurant = require("../../models/restaurant");
const router = express.Router();
const Restaurant = require("../../models/restaurant");

router.get("/", (req, res) => {
    Restaurant.find({}).then(allRests => res.json(allRests));
});

router.post("/", (req, res) => {
    const newRest = req.body;
    console.log(newRest)
    res.json(newRest);
});

router.put("/:food", (req, res) => {
    Restaurant.findOneAndUpdate({restaurant: req.params.restaurant}, req.body).then(restaurant => res.json(restaurant));
});

router.delete("/:food", (req, res) => {
    Restaurant.findOneAndDelete({restaurant: req.params.restaurant}).then(restaurant => {
        res.json(restaurant);
    });
});

module.exports = router;