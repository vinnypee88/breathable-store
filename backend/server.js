require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
//initialise app
const app = express();
const PORT = process.env.PORT || 5000;

//passport local
const passport = require("passport");
const getUserByEmail = require("./controller/authController");
const initializePassport = require("./auth/passport-config");
initializePassport(passport, getUserByEmail);

//Route Imports
const productRoutes = require("./routes/productRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

//Routes
app.use("/api/products", productRoutes);
app.use("/create-checkout-session", checkoutRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/auth/login", loginRoutes);
app.post("/logout", (req, res) => {
  req.logOut();
  res.redirect("/api/auth/login");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
