require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
//initialise app
const app = express();
const PORT = process.env.PORT || 5000;

//passport local
const passport = require("passport");
const auth = require("./controller/authController");
const getUser = new auth();
const initializePassport = require("./auth/passport-config");
initializePassport(passport, getUser.getUserByEmail);

//Route Imports
const productRoutes = require("./routes/productRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
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
if (process.env.NODE_ENV === "production") {
  // serve static content from build
  //npm run build creates build folder and we want to target the index.js file inside it. The dirname, client/build is directed to it.
  app.use(express.static(path.join(__dirname, "front-end/build")));
}

//Routes
app.use("/api/products", productRoutes);
app.use("/create-checkout-session", checkoutRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/auth/login", loginRoutes);
app.post("/logout", (req, res) => {
  req.logOut();
  res.cookie("connect.sid", "", { maxAge: 1 });
  res.json({ message: "loggedOut" });
});

app.get("/order", (req, res) => {
  console.log(req.session.passport);
  res.json({ message: "order here" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
