import React, { useEffect } from "react";
import profilePic from "/defaultProfile.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getprofiledetail } from "../features/profile/profileSlice";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchProductFromCart } from "../features/cart/cartSlice";

const Menu = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let handleclickprofile = async () => {
    let data = await dispatch(getprofiledetail());
    if (data.payload == "not found from profile") {
      toast("need login");
    } else {
      navigate("/profile");
    }

    // const { userprofiledata } = await useSelector((state) => state.profile);
    // console.log(userprofiledata);
  };

  let handleClickCart = async () => {
    let data = await dispatch(fetchProductFromCart());
    if (data.meta.requestStatus == "fulfilled") {
      navigate("/cart");
    }
  };

  // const { cartProducts } = useSelector((state) => state.cart);
  // console.log(cartProducts);

  return (
    <>
      <div
        className="flex justify-around py-2   lg:w-full md:py-4 border md:border-b-2 border-zinc-600"
        id="menu"
      >
        <div className="flex lg:space-x-11   items-center">
          <p className="text-base md:text-2xl lg:text-4xl font-thin">ORI</p>
        </div>
        <div className="flex text-xs space-x-4  md:space-x-7 lg:space-x-11  list-none  items-center md:text-lg lg:text-xl">
          <Link to="/">Home</Link>
          <Link to="/authentication">SignUp</Link>
          <Link to="/authentication">Login</Link>
        </div>
        <div className="flex space-x-3 md:space-x-5 lg:space-x-11  items-center">
          <i
            className="fa-solid fa-cart-shopping text-xs md:text-lg lg:text-2xl"
            onClick={handleClickCart}
          ></i>

          {/* <Link to="/profile">
            <img
              src={profilePic}
              alt="profilePic"
              className=" h-10 border-2 rounded-3xl bg-cover"
              // onClick={handleclickprofile}
            />
          </Link> */}
          <img
            src={profilePic}
            alt="profilePic"
            className=" h-5 md:h-7 lg:h-10 border-2 rounded-3xl bg-cover"
            onClick={handleclickprofile}
          />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </>
  );
};

export default Menu;
