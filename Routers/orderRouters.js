const router = require("express").Router()
const orderControllers = require("../Controllers/orderControllers")

router.get("/", orderControllers.getHome)

router.get("/orders", orderControllers.getAllOrders)
router.get("/orders/:id", orderControllers.getOneOrder)

router.post("/orders", orderControllers.postCreateOrder)
router.put("/orders/:id", orderControllers.putUpdateOrder)
router.delete("/orders/:id", orderControllers.deleteOrder)

module.exports = router
