const { v4: uuidv4 } = require("uuid")
let orders = require("../database/orderDatabase")

module.exports = {
    getHome: (req, res) => {
        res.send("<h1>Home page</h1>")
    },

    getAllOrders: (req, res) => {
        res.json(orders)
    },

    getOneOrder: (req, res) => {
        const idParam = req.params.id
        const order = orders.find(u => u.id == idParam)

        if (!order) {
            return res.status(404).send("Order not found")
        }

        res.json(order)
    },

    postCreateOrder: (req, res) => {
        const { product, quantity, totalPrice } = req.body

        const newOrder = {
            id: uuidv4(),
         product,quantity,totalPrice
            
        }

        orders.push(newOrder)
        res.status(201).json(newOrder)
    },

    putUpdateOrder: (req, res) => {
        const idParam = req.params.id
        const { product,quantity, totalPrice} = req.body

        const order = orders.find(u => u.id == idParam)

        if (!order) {
            return res.status(404).send("Order not found")
        }

        order.product =product||order.product
        order.quantity=quantity||order.quantity
        order.totalPrice=totalPrice||order.totalPrice

        res.json(order)
    },

    deleteOrder: (req, res) => {
        const idParam = req.params.id

        const index = orders.findIndex(u => u.id == idParam)

        if (index === -1) {
            return res.status(404).send("Order not found")
        }

        const deletedUser = orders.splice(index, 1)
        res.json(deletedUser[0])
    }
}