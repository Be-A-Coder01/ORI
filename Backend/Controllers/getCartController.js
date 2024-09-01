const products = require("../Models/productModel");
const getCart = async (req, res) => {
  const store = await req.user;
  let productList = [];
  let getProductId = await store.cart;
  let isCartPresent = getProductId.length;
  if (isCartPresent > 0) {
    for (let i = 0; i < isCartPresent; i++) {
      const findProduct = await products.findOne({ _id: getProductId[i] });
      productList.push(findProduct);
    }
    res.status(201).json(productList);
  } else {
    res.status(400).json({ message: "Cart is empty" });
  }
};

module.exports = getCart;
