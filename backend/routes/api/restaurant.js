const express = require("express");
const router = express.Router();
const restaurantController = require("../../controllers/restaurant");

// I separate the routes from the controllers to make it easier to read/follow

router.get("/", restaurantController.getAll);

router.get("/:name", restaurantController.findByName);

router.get("/id/:restaurant", restaurantController.findById);

router.post("/", restaurantController.create);

router.put("/id/:restaurant", restaurantController.update);


router.put("/:name", restaurantController.updateByName)

router.delete("/id/:restaurant", restaurantController.deleteOne)

router.delete("/:name", restaurantController.deleteByName)

// /:restaurant = id#

module.exports = router;