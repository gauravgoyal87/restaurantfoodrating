const express = require("express");
const router = express.Router();
const restaurantController = require("../../controllers/restaurant");

// I separate the routes from the controllers to make it easier to read/follow

router.get("/", restaurantController.getAll);

router.get("/:name", restaurantController.findByName);

router.post("/", restaurantController.create);

router.put("/:restaurant", restaurantController.update);

router.delete("/:restaurant", restaurantController.deleteOne);

module.exports = router;