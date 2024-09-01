const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const user = require("../Models/userModel");

const detailController = require("../Controllers/detailController");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get("/details", isLoggedIn, detailController);

async function isLoggedIn(req, res, next) {
  let token = req.headers.authorization;
  if (!token) return res.status(400).json({ message: "You are not loged in" });
  var decoded = jwt.verify(token, process.env.jwtKey);
  // console.log(decoded.email);
  let email = decoded.email;
  const userDetail = await user.findOne({ email: email });
  req.user = userDetail;
  next();
}

module.exports = router;
