const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../db/db");

//POST register
//route /api/register
//access Public
router.use("/register", async (req, res) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      addressLine1,
      addressLine2,
      postcode,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const registerUser = await pool.query(
      "INSERT INTO users (email, password, first_name, last_name, address_line_1, address_line_2, postcode) VALUES ($1, $2, $3, $4, $5, $6, $7)RETURNING *",
      [
        email,
        hashedPassword,
        firstName,
        lastName,
        addressLine1,
        addressLine2,
        postcode,
      ]
    );
    res.json(registerUser.rows);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = router;