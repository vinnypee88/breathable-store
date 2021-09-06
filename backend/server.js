require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

//Route Imports
const productRoutes = require("./routes/productRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

//Routes
app.use("/api/products", productRoutes);
app.use("/create-checkout-session", checkoutRoutes);
app.use("/api/order", orderRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
