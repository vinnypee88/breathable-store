const pool = require("../db/db");

// this function makes a call to get the database to get the price for security purposes.
const getPrice = async (id) => {
  try {
    const price = await pool.query("SELECT price FROM product WHERE id = $1", [
      id,
    ]);
    const unitPrice = await price.rows[0].price;
    return unitPrice;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getPrice;
