const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const {
  insertProducts,
  gerProducts,
} = require("../Controllers/productController");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/products", insertProducts);
router.get("/products", gerProducts);

module.exports = router;
