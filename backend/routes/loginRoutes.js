const express = require("express");
const router = express.Router();
const passport = require("passport");

//GET loginpage
//route /api/auth/login
//access Public
router.get("/", (req, res) => {
  res.send("login Page");
});

//POST login attempt
//route /api/auth/login
//access Public
router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/api/products",
    failureRedirect: "/api/auth/login",
  })
);

module.exports = router;
