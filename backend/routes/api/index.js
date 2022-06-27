const express = require("express")
const router = express.Router()
const foodRoutes = require("./food")
const restRoutes = require("./restaurant")

router.use("/food", foodRoutes)
router.use("/restaurant", restRoutes)

module.exports = router
