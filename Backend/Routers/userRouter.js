const express = require("express");
const app = express();
const router = express.Router();
const user = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { register, login } = require("../Controllers/userController");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

router.post("/signup", register);

router.post("/login", login);

// router.post("/logout", isLoggedIn, logout);

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
