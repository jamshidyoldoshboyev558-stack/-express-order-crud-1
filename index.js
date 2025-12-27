const express = require("express");
const app = express();


const dotenv = require("dotenv")

dotenv.config()


app.use(express.json())

app.use("/", require("./Routers/orderRouters"))






app.use(express.json());

const PORT = 3000;


let orders = [];
let currentId = 1;


app.post("/orders", (req, res) => {
  const { product, quantity, totalPrice } = req.body;

  if (!product || !quantity || !totalPrice) {
    return res.status(400).json({ message: "Barcha maydonlar to‘ldirilishi shart" });
  }

  const newOrder = {
    id: currentId++,
    product,
    quantity,
    totalPrice
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
});


app.get("/orders", (req, res) => {
  res.json(orders);
});


app.get("/orders/:id", (req, res) => {
  const id = Number(req.params.id);
  const order = orders.find(o => o.id === id);

  if (!order) {
    return res.status(404).json({ message: "Order topilmadi" });
  }

  res.json(order);
});

app.put("/orders/:id", (req, res) => {
  const id = Number(req.params.id);
  const { product, quantity, totalPrice } = req.body;

  const order = orders.find(o => o.id === id);

  if (!order) {
    return res.status(404).json({ message: "Order topilmadi" });
  }

  order.product = product ?? order.product;
  order.quantity = quantity ?? order.quantity;
  order.totalPrice = totalPrice ?? order.totalPrice;

  res.json(order);
});


 
app.delete("/orders/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = orders.findIndex(o => o.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Order topilmadi" });
  }

  orders.splice(index, 1);
  res.json({ message: "Order o‘chirildi" });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishlayapti `);
});
