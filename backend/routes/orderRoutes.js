const express = require("express");
const router = express.Router();
const orders = require("../controller/orderController");
const ordersInstance = new orders();

//GET previous orders
//route /api/order
//access private
router.get("/", ordersInstance.getPreviousOrders);

//POST order information to DB
//route /api/order
//access public
router.post("/", ordersInstance.orderIncoming);

module.exports = router;
