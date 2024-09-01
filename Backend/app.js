const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post("/payment", async (req, res) => {
//   const product = req.body;
//   console.log(product);
// });

const userRouter = require("./Routers/userRouter");
const productRouter = require("./Routers/productsRouter");
const categoryRouter = require("./Routers/categoryRouter");
const fetchProfileRouter = require("./Routers/fetchProfileRouter");
const addproductRouter = require("./Routers/addProductRouter");
const cartRouter = require("./Routers/cartRouter");
const deleteRouter = require("./Routers/deleteRouter");
const likeRouter = require("./Routers/likeRouter");
const detailRouter = require("./Routers/detailRouter");
const checkoutRouter = require("./Routers/checkoutRouter");

app.use("/", userRouter);
app.use("/", productRouter);
app.use("/", categoryRouter);
app.use("/", fetchProfileRouter);
app.use("/", addproductRouter);
app.use("/", cartRouter);
app.use("/", deleteRouter);
app.use("/", likeRouter);
app.use("/", detailRouter);
app.use("/", checkoutRouter);

app.get("/", (req, res) => {
  res.send("Helo");
});

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Connected successfully...");
    app.listen(process.env.PORT, () => {
      console.log("Port is listening at 5000");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
