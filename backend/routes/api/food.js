const express = require("express");
const router = express.Router();
const foodController = require("../../controllers/food");

// I separate the routes from the controllers to make it easier to read/follow

router.get("/", foodController.getAll);


router.get("/id/:food", foodController.findById);


router.post("/", foodController.create);

router.put("/id/:food",foodController.update);

router.delete("/id/:food", foodController.deleteOne);

router.get("/:name", foodController.findByName)

router.put("/:dish", foodController.updateByName);

//:food = id #

module.exports = router;
