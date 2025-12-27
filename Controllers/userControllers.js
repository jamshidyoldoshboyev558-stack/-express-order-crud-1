const { v4: uuidv4 } = require("uuid")
let users = require("../database/userDatabase")

module.exports = {
    getHome: (req, res) => {
        res.send("<h1>Home page</h1>")
    },

    getAllUsers: (req, res) => {
        res.json(users)
    },

    getOneUser: (req, res) => {
        const idParam = req.params.userID
        const user = users.find(u => u.id == idParam)

        if (!user) {
            return res.status(404).send("User not found")
        }

        res.json(user)
    },

    postCreateUser: (req, res) => {
        const { product, quantity, totalPrice } = req.body

        const newUser = {
            id: uuidv4(),
         product,quantity,totalPrice
            
        }

        users.push(newUser)
        res.status(201).json(newUser)
    },

    putUpdateUser: (req, res) => {
        const idParam = req.params.userID
        const { name, age } = req.body

        const user = users.find(u => u.id == idParam)

        if (!user) {
            return res.status(404).send("User not found")
        }

        user.name = name ?? user.name
        user.age = age ?? user.age

        res.json(user)
    },

    deleteUser: (req, res) => {
        const idParam = req.params.userID

        const index = users.findIndex(u => u.id == idParam)

        if (index === -1) {
            return res.status(404).send("User not found")
        }

        const deletedUser = users.splice(index, 1)
        res.json(deletedUser[0])
    }
}