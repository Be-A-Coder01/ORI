const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    email: {
      type: "String",
      required: true,
    },
    password: {
      type: "String",
      required: true,
    },
    number: {
      type: "Number",
      required: true,
    },
    address: {
      type: "Mixed",
      required: true,
    },
    city: {
      type: "String",
    },
    country: {
      type: "String",
    },
    like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    ],
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    ],
    // orders: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "products",
    //   },
    // ],
    purchased: [
      [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
        {
          type: "Number",
        },
      ],
    ],
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
