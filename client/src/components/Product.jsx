import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../features/products/productSlice";
import { fetchUserDetail } from "../features/addproduct/detailSlice";

import Cards from "./Cards";

const Product = () => {
  const [state, setState] = useState(1);
  const dispatch = useDispatch();
  const { data, count } = useSelector((state) => state.product);
  const { userData } = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchUserDetail());
    setState(1);
  }, []);
  // console.log();

  return (
    <>
      <div className="w-full my-3 flex flex-col  justify-center">
        <div className=" w-full  flex flex-wrap ">
          {data &&
            data
              .slice(state * 10 - 10, state * 10)
              .map((ele, i) => (
                <Cards userData={userData} key={i} productDetails={ele} />
              ))}
        </div>
        <div className="flex justify-center my-5">
          {count > 0 && (
            <div className=" flex space-x-3">
              <span
                onClick={() => setState(state - 1)}
                className="cursor-pointer"
              >
                ◀
              </span>
              {[...Array(Math.round(count / 10))].map((_, i) => {
                return (
                  <span
                    className="cursor-pointer "
                    onClick={() => setState(i + 1)}
                    key={i}
                  >
                    {i + 1}
                  </span>
                );
              })}
              <span
                onClick={() => setState(state + 1)}
                className="cursor-pointer"
              >
                ▶
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
