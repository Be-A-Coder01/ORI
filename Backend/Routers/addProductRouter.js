const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const user = require("../Models/userModel");
const addToCart = require("../Controllers/cartController");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/addproduct", isLoggedIn, addToCart);

async function isLoggedIn(req, res, next) {
  let token = req.headers.authorization;
  console.log(token, "token");
  if (!token) return res.status(400).json({ status: "You are not loged in" });
  var decoded = jwt.verify(token, process.env.jwtKey);
  // console.log(decoded.email);
  let email = decoded.email;
  const userDetail = await user.findOne({ email: email });
  req.user = userDetail;
  next();
  // console.log(req.body);

  // console.log("jiyes");
}

module.exports = router;
