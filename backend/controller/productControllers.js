const pool = require("../db/db");

//communication with the database regarding products

class products {
  getAllProducts = async (req, res) => {
    try {
      const products = await pool.query("SELECT * FROM product ORDER BY id");
      res.json(products.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };

  getProductById = async (req, res) => {
    try {
      const product = await pool.query("SELECT * FROM product WHERE id =$1", [
        req.params.id,
      ]);
      res.json(product.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
}

module.exports = products;
