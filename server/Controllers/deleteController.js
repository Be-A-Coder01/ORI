const user = require("../Models/userModel");
const deleteProductFromCart = async (req, res) => {
  const userCart = req.user.cart;
  let info = await userCart.filter((ele) => ele.toString() !== req.body._id);
  let data = await user.findByIdAndUpdate(
    req.user._id,
    {
      cart: info,
    },
    { new: true }
  );

  res.status(201).json({ data, message: "deletedDone" });
};

module.exports = deleteProductFromCart;
