const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const router = express.Router();
const cors = require("cors");
const fetchprofile = require("../Controllers/profileController");
const user = require("../Models/userModel");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get("/profile", isLoggedIn, fetchprofile);

async function isLoggedIn(req, res, next) {
  let token = req.headers.authorization;
  if (!token) return res.status(400).json({ message: "You are not loged in" });
  var decoded = jwt.verify(token, process.env.jwtKey);
  // console.log(decoded.email);
  let email = decoded.email;
  const userDetail = await user.find({ email: email });
  req.user = userDetail;
  next();
}
module.exports = router;
