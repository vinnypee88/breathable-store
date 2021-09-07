const pool = require("../db/db");
const getUserByEmail = async (email) => {
  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return user.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = getUserByEmail;
