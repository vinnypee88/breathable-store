const pool = require("../db/db");

class orders {
  orderIncoming = async (req, res) => {
    const {
      id,
      amount_total,
      customer_details,
      line_items,
      shipping,
      total_details,
    } = req.body.payload;
    const date = new Date();
    try {
      // check if order is already processed
      const orderCheck = await pool.query(
        "SELECT * FROM orders WHERE id = $1",
        [id]
      );
      if (orderCheck.rowCount !== 0) {
        console.log("this is a repeat order, dont process");
        res.json({ message: "This order has already been processed!" });
      } else {
        //process order to db
        console.log("fresh order, lets process it ");
        const generateOrder = await pool.query(
          "INSERT INTO orders (id, order_date, customer_email, customer_first_name, customer_last_name, shipping_line_1, shipping_line_2, postcode, order_total, discount) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
          [
            id,
            date,
            customer_details.email,
            shipping.name,
            shipping.name,
            shipping.address.line1,
            shipping.address.line2,
            shipping.address.postal_code,
            amount_total,
            total_details.amount_discount,
          ]
        );
        //add items to order_items table
        line_items.data.forEach(async (item) => {
          const addItemsToOrder = await pool.query(
            "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)",
            [id, item.description[0], item.quantity, item.amount_total]
          );
        });
        //adjust quantities in inventory
        line_items.data.forEach(async (item) => {
          const updateStockCount = await pool.query(
            "UPDATE product SET stock_count = stock_count-$1 WHERE id = $2",
            [item.quantity, item.description[0]]
          );
        });

        res.json();
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    }
  };

  getPreviousOrders = async (req, res) => {};
}

module.exports = orders;
