const router = require("express").Router()
const userControllers = require("../Controllers/userControllers")

router.get("/", userControllers.getHome)

router.get("/orders", userControllers.getAllUsers)
router.get("/orders/:id", userControllers.getOneUser)

router.post("/orders", userControllers.postCreateUser)
router.put("/orders/:id", userControllers.putUpdateUser)
router.delete("/orders/:id", userControllers.deleteUser)

module.exports = router
