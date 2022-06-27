const express = require("express");
const router = express.Router();
const foodController = require("../../controllers/food");

// I separate the routes from the controllers to make it easier to read/follow

router.get("/", foodController.getAll);

router.post("/", foodController.create);

router.put("/:food",foodController.update);

router.delete("/:food", foodController.deleteOne);

module.exports = router;
