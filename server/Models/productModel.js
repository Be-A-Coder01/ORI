const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: "String",
    required: true,
  },
  price: {
    type: "Number",
    required: true,
  },

  productImage: {
    type: "Mixed",
  },

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],

  purchased: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],

  category: {
    type: "String",
  },
  createdAt: {
    type: "Date",
    default: Date.now,
  },
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
