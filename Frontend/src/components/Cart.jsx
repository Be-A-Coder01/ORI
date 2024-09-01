import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cartcards from "./Cartcards";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductFromCart } from "../features/cart/cartSlice";
import "../App.css";
import emptyCartPic from "/emptyCart.png";
import { postTotal } from "../features/cart/cartDetailSlice";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const dispatch = useDispatch();

  let { cartProducts, countOfProducts } = useSelector((state) => state.cart);
  // console.log(cartProducts);

  let total;
  function totalPrice() {
    total = 0;
    for (let i = 0; i < countOfProducts; i++) {
      total = total + cartProducts[i].price;
    }
    // try {
    //   dispatch(postTotal(total));
    // } catch (err) {
    //   console.log(err);
    // }
  }

  let geDeletedProductResponse = async (value) => {
    if (value === "deletedDone") {
      dispatch(fetchProductFromCart());
    }
  };

  const { cartPriceData } = useSelector((state) => state.cartDetail);

  let makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PlBB52L6ZwBRrrHr2IKaSgMvWPYqUR4Tzz5ofc7K7rFYSDYgnwStb0dNgmCkFA4Lho5SJgprLrRNZuNlPEQC8aw00SKYIdoXo"
    );

    const body = {
      products: cartProducts,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch("http://localhost:5000/payment", {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    });

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <>
      {countOfProducts > 0 ? (
        <div className="w-full md:flex  my-2">
          <div className=" lg:w-4/6 flex flex-col space-y-4">
            <div id="scrollCart" className="flex flex-col  w-full h-screen ">
              {cartProducts.map((ele, index) => (
                <Cartcards
                  data={ele}
                  key={index}
                  geDeletedProductResponse={geDeletedProductResponse}
                />
              ))}
            </div>
            {totalPrice() && dispatch(postTotal(total))}
          </div>
          <div className="md:w-4/6 lg:w-2/6 border-l-2 ">
            <div className=" flex flex-col space-y-5 w-3/4 mx-auto my-5">
              <p className="font-semibold md:text-sm lg:text-lg">
                Price Details <span>({countOfProducts} items)</span>
              </p>
              <hr />
              <div className=" flex justify-between">
                <p className="font-normal md:text-sm lg:text-lg">Order Total</p>
                <p className="font-normal md:text-sm lg:text-lg">
                  Rs<span> {total}</span>
                </p>
              </div>

              <button
                className="border bg-blue-500 md:text-sm lg:text-base py-1 rounded-md text-white"
                onClick={makePayment}
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-full flex flex-col my-28 mx-72">
          <div className="w-1/2  ">
            <img
              src={emptyCartPic}
              className="h-60 mx-auto"
              alt="emptycartpic"
            />
          </div>
          <p className="text-7xl font-light">Cart is empty</p>
        </div>
      )}
    </>
  );
};

export default Cart;
