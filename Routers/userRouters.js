const router = require("express").Router()
const usController = require("../Controllers/userController")

router.get("/", usController.getHome)

router.get("/users", usController.getAllUsers)
router.get("/users/:userID", usController.getOneUser)

router.post("/users", usController.postCreateUser)
router.put("/users/:userID", usController.putUpdateUser)
router.delete("/users/:userID", usController.deleteUser)

module.exports = router
