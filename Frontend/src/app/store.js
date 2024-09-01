import { configureStore } from "@reduxjs/toolkit";
import userDetails from "../features/user/userSlice";
import productReducer from "../features/products/productSlice";
import categorySlice from "../features/category/categorySlice";
import profileSlice from "../features/profile/profileSlice";
import addedProductReducer from "../features/addproduct/addproductSlice";
import getCartReducer from "../features/cart/cartSlice";
import userDetailReducer from "../features/addproduct/detailSlice";
import cartReducer from "../features/cart/cartDetailSlice";

export const store = configureStore({
  reducer: {
    user: userDetails,
    product: productReducer,
    category: categorySlice,
    profile: profileSlice,
    cart: getCartReducer,
    cartDetail: cartReducer,
    userDetail: userDetailReducer,
  },
});
