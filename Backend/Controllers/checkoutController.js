const stripe = require("stripe")(
  "sk_test_51PlBB52L6ZwBRrrHhgKi2GhenOGwq4eetkS8FkJJ9M27TGCbnXfsj1eISVodLHAVBZAfZoCfz2zHPEIEt2hoFc2500PYcVTN17"
);

const checkout = async (req, res) => {
  const { products } = req.body;
  // console.log(products[0].title);

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.title,
      },
      unit_amount: product.price * 100,
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/unsuccess",
  });

  res.json({ id: session.id });
};

module.exports = checkout;
