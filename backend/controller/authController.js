const pool = require("../db/db");

class auth {
  getUserByEmail = async (email) => {
    try {
      const user = await pool.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
      return user.rows[0];
    } catch (error) {
      console.log(error);
    }
  };

  deleteAccount = async (email) => {
    try {
      const user = await pool.query("DELETE FROM users WHERE email=$1", [
        email,
      ]);
      return user;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = auth;
