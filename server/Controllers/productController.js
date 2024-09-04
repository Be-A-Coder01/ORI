const products = require("../Models/productModel");

let insertProducts = async (req, res) => {
  let { title, price, productImage, category } = req.body;

  if (!title || !price || !category || !productImage) {
    return res.status(400).json("required field is empty");
  }

  try {
    let productCreated = await products.create({
      title,
      price,
      category,
      productImage,
    });

    res.status(201).json("product added");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

let gerProducts = async (req, res) => {
  try {
    let result = await products.find({});
    res.status(201).send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  // res.send("products");
};

module.exports = { insertProducts, gerProducts };
