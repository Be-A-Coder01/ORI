const user = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

dotenv.config();

app.use(cookieParser());
const register = async (req, res) => {
  let { name, email, password, number, address, city, country } = req.body;

  let userData = await user.findOne({ email });

  if (userData) {
    return res
      .status(400)
      .json({ message: "user already exist", status: false });
  }

  bcrypt.genSalt(12, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      try {
        let userRegistered = await user.create({
          name,
          email,
          password: hash,
          number,
          address,
          city,
          country,
        });
        let token = jwt.sign(
          { email: email, password: userRegistered.password },
          process.env.jwtKey
        );

        res.status(200).json({
          userRegistered,
          token: token,
          message: "User Registered Successsfully",
          status: true,
        });
      } catch (error) {
        res.status(400).json({
          message: "Not registered , something went wrong , try again ",
          status: false,
        });
      }
    });
  });
};

const login = async (req, res) => {
  let { email, password } = req.body;
  console.log("entered");
  let userFind = await user.findOne({ email });
  if (!userFind) {
    return res.status(400).json({ error: "User not found , plz sigin first" });
  }

  const checkUser = await bcrypt.compare(password, userFind.password);
  console.log(checkUser);
  if (checkUser) {
    let token = jwt.sign(
      { email: email, password: password },
      process.env.jwtKey
    );

    res.status(200).json({ userFind, token: token, status: "Login completed" });
  } else {
    return res.status(400).json({ error: "Login not completed" });
  }
};

module.exports = { register, login };
