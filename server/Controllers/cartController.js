const user = require("../Models/userModel");

let addToCart = async (req, res) => {
  const store = await req.user;
  const userEmail = store.email;
  let productInfo = await req.body._id;
  const findUser = await user.findOne({ email: userEmail });
  findUser.cart.push(productInfo);
  findUser.save();
  res.status(200).json({ status: "product added" });
};

module.exports = addToCart;
