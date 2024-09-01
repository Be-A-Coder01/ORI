const express = require("express");
const app = express();
const router = express.Router();
// const dotenv = require("dotenv");
const stripe = require("stripe")(
  "sk_test_51PlBB52L6ZwBRrrHhgKi2GhenOGwq4eetkS8FkJJ9M27TGCbnXfsj1eISVodLHAVBZAfZoCfz2zHPEIEt2hoFc2500PYcVTN17"
);
const cors = require("cors");
const checkoutController = require("../Controllers/checkoutController");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/payment", checkoutController);

module.exports = router;
