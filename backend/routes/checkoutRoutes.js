const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.SECRET_KEY);
const getPrice = require("../controller/checkoutController");

//POST checkout
//route /create-checkout-session
//access Public

router.get("/success", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(
    req.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  res.json(session);
});

router.post("/", async (req, res) => {
  try {
    //create lineItems array by retrieving prices from the DB
    const lineItems = req.body.items.map(async (item) => {
      const unitPriceFromDB = await getPrice(item.id);
      const itemId = JSON.stringify({ itemId: item.id });
      return {
        price_data: {
          currency: "gbp",
          product_data: {
            name: item.id + item.name,
            description: item.description,
          },
          unit_amount: unitPriceFromDB * 100,
        },
        // TODO : make the maximum quantity equal to the stock count value
        // adjustable_quantity: {
        //   enabled: true,
        //   minimum: 1,
        //   maximum: 10,
        // },
        quantity: item.qty,
      };
    });
    const lineItemsResolved = await Promise.all(lineItems);

    //create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["GB"],
      },
      line_items: lineItemsResolved,
      shipping_rates: ["shr_1JVvu6LbYaFKaWG1w3M4gGGN"],
      mode: "payment",
      allow_promotion_codes: true,
      success_url: `${process.env.SERVER_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.SERVER_URL}/cart`,
    });
    //return redirect url to client
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
