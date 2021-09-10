const express = require("express");
const router = express.Router();
const passport = require("passport");
const auth = require("../controller/authController");
const getUser = new auth();

//GET loginSuccess
//route /api/auth/login/success
//access Public
router.get("/success", async (req, res) => {
  try {
    const userInfo = await getUser.getUserByEmail(req.session.passport.user);
    delete userInfo.password;
    res.json({ userInfo });
  } catch (error) {
    res.status(401).send("No details found");
  }
});

//GET loginFailed
//route /api/auth/login/failed
//access Public
router.get("/failed", (req, res) => {
  res.status(401).send("Credentials invalid");
});

//DELETE Delete user information
//route /api/auth/login
//access private
router.delete("/", async (req, res) => {
  try {
    const isDelete = await getUser.deleteAccount(req.session.passport.user);
    res.json({ message: "user deleted" });
  } catch (error) {
    console.log(error);
  }
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
