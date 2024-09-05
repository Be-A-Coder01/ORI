import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchaddproduct } from "../features/addproduct/addproductSlice";
import { fetchUserDetail } from "../features/addproduct/detailSlice";
import { fetchProduct } from "../features/products/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = ({ productDetails, userData }) => {
  const dispatch = useDispatch();

  let handleClick = async (value) => {
    let get = await dispatch(fetchaddproduct(productDetails));
    toast(`${get.payload.status}`);
    console.log(get);
  };

  let handleLike = async (value) => {
    console.log(value, "card");
    let token = localStorage.getItem("userToken");
    if (token) {
      let response = await fetch(
        `${import.meta.env.VITE_WEBSITE_BACKEND_URL}like`,
        {
          method: "POST",
          body: JSON.stringify(productDetails),
          headers: {
            "Content-type": "application/json",
            Authorization: JSON.parse(localStorage.getItem("userToken")),
          },
        }
      );
      let result = await response.json();
      if (result) {
        dispatch(fetchProduct());
        dispatch(fetchUserDetail());
      }
    } else {
      toast("plz login first");
    }
  };

  return (
    <>
      <div className=" mx-auto my-3    w-4/5 h-[400px] md:h-48 md:w-1/5  rounded-md md:mx-3 md:my-2 lg:mx-6 flex flex-col lg:w-[210px] lg:h-80   p-2 bg-[#f4f5f6]">
        <div className=" h-3/5 md:h-3/5 lg:h-3/5   w-full">
          <img
            src={productDetails.productImage}
            alt="photo"
            className="h-full w-full bg-cover rounded-md"
          />
        </div>
        <div className="text-center">
          <p className="text-sm w-full md:h-5 md:text-[12px] lg:h-12  lg:text-base overflow-hidden">
            {productDetails.title}
          </p>
          <p className="py-1 text-base font-normal md:text-[11px] lg:text-lg ">
            <span>Rs.</span>
            {productDetails.price}
          </p>
          <div className="flex   justify-between px-1 ">
            <div className=" flex  space-x-2">
              {userData && userData.includes(productDetails._id) ? (
                <i
                  class="fa-solid fa-heart text-lg hover:text-xl md:text-sm
                  md:hover:text-base lg:text-xl lg:hover:text-2xl duration-300 text-blue-500"
                  onClick={() => handleLike(productDetails._id)}
                ></i>
              ) : (
                <i
                  class="fa-solid fa-heart text-lg md:text-sm lg:text-xl"
                  onClick={() => handleLike(productDetails._id)}
                ></i>
              )}

              <span className="md:text-[8px] lg:text-base">
                ({productDetails.likes.length})
              </span>
            </div>

            {/* <button className=" rounded-md px-3 bg-blue-500 text-white">
              Add to cart
            </button> */}
            {/* <i
              className=" text-white fa-solid fa-cart-shopping md:text-[10px]  md:px-1  lg:text-xl border-2 bg-blue-500 lg:p-1 lg:px-3 font-thin rounded-full"
              onClick={() => handleClick()}
            ></i> */}
            <i
              class="fa-solid fa-cart-shopping text-lg hover:text-xl md:hover:text-lg  md:text-sm  lg:hover:text-2xl duration-300 lg:text-xl "
              onClick={() => handleClick()}
            ></i>
          </div>
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

export default Cards;
