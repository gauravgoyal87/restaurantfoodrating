const express = require("express");
const router = express.Router();
const restaurantController = require("../../controllers/restaurant");

router.get("/", restaurantController.getAll);

router.get("/:name", restaurantController.findByName);

router.post("/", restaurantController.create);

router.put("/:restaurant", restaurantController.update);

router.delete("/:restaurant", restaurantController.deleteOne);

module.exports = router;