import React, { useState } from "react";
import { decreaseTotal, increaseTotal } from "../features/cart/cartDetailSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductFromCart } from "../features/cart/cartSlice";
import { postTotal } from "../features/cart/cartDetailSlice";

const Cartcards = ({ data, geDeletedProductResponse }) => {
  let dispatch = useDispatch();
  const [count, setCount] = useState(1);
  let deleteProduct = async () => {
    let response = await fetch(
      `${import.meta.env.VITE_WEBSITE_BACKEND_URL}delete`,
      {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
          Authorization: JSON.parse(localStorage.getItem("userToken")),
        },
      }
    );
    let result = await response.json();
    geDeletedProductResponse(result.message);
  };

  return (
    <>
      <div className="my-2 h-fit flex flex-col ">
        {data && (
          <div className="border-2 h-[120px] mx-auto rounded-md w-5/6 md:w-5/6 flex lg:flex-row lg:w-5/6 justify-around md:h-[130px] lg:h-[160px]  md:ml-5 lg:mx-auto">
            <div className="  flex flex-row w-5/6 space-x-3 px-2 py-2">
              <img
                src={data.productImage}
                className=" h-2/4 md:h-2/4 lg:h-2/4 w-1/6 rounded-md border-2"
                alt="productImg"
              />
              <div className="flex flex-col space-y-2 w-full">
                <p className="text-[9px] md:text-[10px] lg:text-base font-medium ">
                  {data.title}
                </p>
                <p className="md:text-sm lg:text-base">
                  <span className="px-1 md:text-xs lg:text-base font-normal">
                    Rs
                  </span>
                  {data.price}
                </p>
                <div className="flex  w-fit justify-items-center space-x-1 ">
                  {/* <i
                    className="fa-solid fa-plus border py-1 px-2"
                    onClick={() => {
                      dispatch(increaseTotal(data.price));
                      setCount(count + 1);
                      console.log(count, "count");
                    }}
                  ></i>
                  <p className="border-2 px-5">{count}</p>
                  <i
                    className="fa-solid fa-minus border py-1 px-2"
                    onClick={() => {
                      dispatch(decreaseTotal(data.price));
                      setCount(count - 1);
                    }}
                  ></i> */}
                </div>
              </div>
            </div>
            <div className="my-3 ">
              <lord-icon
                src="https://cdn.lordicon.com/skkahier.json"
                trigger="hover"
                onClick={deleteProduct}
              ></lord-icon>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cartcards;
