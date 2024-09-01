const products = require("../Models/productModel");

let getFashions = async (req, res) => {
  try {
    let data = await products.find({ category: "Fashions" });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

let getBags = async (req, res) => {
  try {
    let data = await products.find({ category: "Bags" });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

let getShoes = async (req, res) => {
  try {
    let data = await products.find({ category: "Shoes" });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

let getElectronicDevices = async (req, res) => {
  try {
    let data = await products.find({ category: "ElectronicDevices" });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send("something went wrong");
  }
};

let Coesmetics = async (req, res) => {
  try {
    let data = await products.find({ category: "Coesmetics" });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

let likedProducts = async (req, res) => {
  try {
    let filteredData = [];
    let data = await products.find({});
    filteredData = data.filter((ele) => ele.likes.includes(`${req.user._id}`));

    res.status(201).send(filteredData);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getFashions,
  getBags,
  getShoes,
  getElectronicDevices,
  Coesmetics,
  likedProducts,
};
