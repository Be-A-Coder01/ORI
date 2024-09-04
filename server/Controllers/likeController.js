const userModel = require("../Models/userModel");
const productModel = require("../Models/productModel");
// const likeProduct = async (req, res) => {
//   const store = await req.user;
//   const userEmail = store.name;
//   let getUser = await user.findOne({ email: req.user[0].email });
//   console.log(req.body._id);
//   let productInfo = await req.body._id;
//   if (getUser.like.length === 0) {
//     getUser.like.push(productInfo);
//     getUser.save();
//   } else {
//     let status;

//     await getUser.like.map((ele) => {
//       console.log(ele, "indide");
//       console.log(req.body._id, "inside");
//       if (req.body._id !== ele.toString()) {
//         status = true;
//       } else {
//         return (status = false);
//       }
//     });
//     console.log(status);
//     if (status === true) {
//       getUser.like.push(req.body._id);
//     }
//     else{

//     }

//     console.log(status);

//     // for (let i = 0; i < getUser.like.length; i++) {
//     //   if (req.body._id === getUser.like[i].toString()) {
//     //     console.log("already present");
//     //   } else {
//     //     getUser.like.push(req.body._id);
//     //     getUser.save();
//     //   }
//     // }
//   }

//   // const loggedInUser = await req.user;
//   // console.log(loggedInUser);
//   res.status(201).json({ message: "done" });
// };

// const likeProduct = async (req, res) => {
//   let product = await productModel.findOne({ _id: req.body._id });
//   let user = await userModel.findOne({ id: req.user._id });

//   const likedProducts = await product.likes.toString();
//   const userLiked = await user.like.toString();

//   if (likedProducts.indexOf(req.user[0]._id) === -1) {
//     await product.likes.push(req.user[0]._id);
//     await user.like.push(req.body._id);
//     console.log(req.body._id);
//     console.log("inserted");
//     console.log(req.user[0]);
//     console.log(req.user[0].like);
//   } else {
//     product.likes.splice(likedProducts.indexOf(req.user[0]._id), 1);
//     user.like.splice(userLiked.indexOf(req.body._id), 1);
//     console.log("removed");
//     console.log(req.user[0]);
//     console.log(req.user[0].like);
//   }
//   await user.save();
//   await product.save();
//   res.status(201).json({ message: "done" });
// };

// const like = async (req, res) => {
//   // console.log(req.user[0]);
//   // console.log(req.body._id);
//   let product = await productModel.findOne({ _id: req.body._id });

//   let user = await userModel.findOne({ id: req.user._id });

//   const userLiked = await user.like.toString();
//   const likedProducts = await product.likes.toString();
//   if (likedProducts.indexOf(req.user._id) === -1) {
//     product.likes.push(req.user._id);
//     user.like.push(req.body._id);
//     await product.save();
//     await user.save();
//     res.status(201).json({ message: "bhai plz" });
//   } else {
//     product.likes.splice(likedProducts.indexOf(`${req.user[0]._id}+1`), 1);
//     user.like.splice(userLiked.indexOf(`${req.body._id}+1`), 1);
//     await product.save();
//     await user.save();
//     res.status(201).json({ message: "bhai plz" });
//   }

//   // console.log(product);
// };

const likedProduct = async (req, res) => {
  console.log(req.body._id);
  const findUser = await userModel.findOne({ email: req.user[0].email });

  const findProduct = await productModel.findOne({ _id: req.body._id });

  const userLikedSection = await findUser.like;
  const productLikedSection = await findProduct.likes;

  if (
    userLikedSection.length === 0 ||
    userLikedSection.includes(req.body._id) === false
  ) {
    findProduct.likes.push(req.user[0]._id);
    findUser.like.push(req.body._id);
  } else {
    let updatelike = await userLikedSection.filter(
      (value) => value.toString() != req.body._id
    );

    let updateProductLike = await productLikedSection.filter(
      (value) => value.toString() != req.user[0]._id
    );

    const updateLikeArray = await userModel.findByIdAndUpdate(
      req.user[0]._id,
      {
        like: updatelike,
      },
      { new: true }
    );

    const updateProductLikeArray = await productModel.findByIdAndUpdate(
      req.body._id,
      {
        likes: updateProductLike,
      },
      { new: true }
    );
  }

  // const status = await userLikedSection.includes(req.body._id);
  // console.log(status);

  // if (userLikedSection.indexOf(req.body._id) === -1) {
  //   findUser.like.push(req.body._id);
  // } else {
  //   findUser.like.splice(userLikedSection.indexOf(`${req.body._id}`), 1);
  //   console.log(userLikedSection.indexOf(`${req.body._id}`));
  // }

  await findUser.save();
  await findProduct.save();
  res.status(201).json("done");
};

module.exports = likedProduct;
