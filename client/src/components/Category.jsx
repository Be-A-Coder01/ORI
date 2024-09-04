import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import {
  fashions,
  bags,
  shoes,
  electronicdevices,
  coesmetics,
} from "../features/category/categorySlice";

import { useSelector } from "react-redux";

const Category = () => {
  const [state, setState] = useState(1);
  const { categoryProducts, count } = useSelector((state) => state.category);
  // console.log(categoryProducts);
  return (
    <>
      <div className="w-full flex flex-col ">
        <div className=" w-full  flex flex-wrap ">
          {categoryProducts &&
            categoryProducts
              .slice(state * 10 - 10, state * 10)
              .map((ele, i) => <Cards key={i} productDetails={ele} />)}
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

export default Category;
