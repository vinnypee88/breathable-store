const express = require("express");
const router = express.Router();
const passport = require("passport");
const getUserByEmail = require("../controller/authController");

//GET loginSuccess
//route /api/auth/success
//access Public
router.get("/success", async (req, res) => {
  try {
    const userInfo = await getUserByEmail(req.session.passport.user);
    delete userInfo.password;
    res.json({ userInfo });
  } catch (error) {
    res.status(401).send("No details found");
  }
});

//GET loginFailed
//route /api/auth/failed
//access Public
router.get("/failed", (req, res) => {
  res.status(401).send("Credentials invalid");
});

//POST login attempt
//route /api/auth/login
//access Public
router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/api/auth/login/success",
    failureRedirect: "/api/auth/login/failed",
  })
);

module.exports = router;
