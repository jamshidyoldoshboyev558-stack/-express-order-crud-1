const router = require("express").Router()
const userControllers = require("../Controllers/userControllers")

router.get("/", userControllers.getHome)

router.get("/users", userControllers.getAllUsers)
router.get("/users/:userID", userControllers.getOneUser)

router.post("/users", userControllers.postCreateUser)
router.put("/users/:userID", userControllers.putUpdateUser)
router.delete("/users/:userID", userControllers.deleteUser)

module.exports = router
