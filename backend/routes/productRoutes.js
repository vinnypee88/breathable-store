const express = require("express");
const router = express.Router();
const products = require("../controller/productControllers");
const productsInstance = new products();

//GET all products from DB
//route /GET /api/products
//access Public
router.get("/", productsInstance.getAllProducts);

//GET a product by id from DB
//route /GET /api/products/id
//access Public
router.get("/:id", productsInstance.getProductById);

module.exports = router;
