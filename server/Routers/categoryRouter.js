const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const user = require("../Models/userModel");
const cors = require("cors");
const {
  getFashions,
  getBags,
  getShoes,
  getElectronicDevices,
  Coesmetics,
  likedProducts,
} = require("../Controllers/categoryController");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get("/fashions", getFashions);
router.get("/shoes", getShoes);
router.get("/bags", getBags);
router.get("/electronicdevices", getElectronicDevices);
router.get("/coesmetics", Coesmetics);
router.get("/likedProducts", isLoggedIn, likedProducts);

async function isLoggedIn(req, res, next) {
  let token = req.headers.authorization;
  if (!token) return res.status(400).json({ message: "You are not logged in" });
  var decoded = jwt.verify(token, process.env.jwtKey);
  // console.log(decoded.email);
  let email = decoded.email;
  const userDetail = await user.findOne({ email: email });
  req.user = userDetail;
  next();
}

module.exports = router;
