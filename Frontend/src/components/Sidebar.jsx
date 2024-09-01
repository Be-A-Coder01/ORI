import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  fashions,
  bags,
  shoes,
  electronicdevices,
  coesmetics,
  likedProducts,
} from "../features/category/categorySlice";
import { logoutUser } from "../features/user/userSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  let handleLogout = async () => {
    let get = await dispatch(logoutUser());
    toast(`${get.payload.status}`);
  };

  return (
    <>
      <div className="  md:w-3/12 my-1   lg:w-2/12 md:my-2 lg:my-5   lg:h-fit">
        <p className="hidden md:block md:text-lg  md:my-2 lg:text-2xl lg:font-medium  md:ml-5 lg:ml-9">
          Categories
        </p>
        <div className=" md:space-y-56  ">
          <div
            className="my-1  md:my-0 h-5 overflow-y-hidden   md:h-fit w-full space-x-5 md:space-x-0 overflow-x-auto md:w-fit text-xs   flex flex-row md:font-normal md:text-sm md:space-y-3 md:ml-5  lg:text-base  md:flex-col lg:space-y-6  lg:my-5 lg:ml-9 lg:font-medium"
            id="scrollCart"
          >
            <Link
              className="cursor-pointer "
              to="/category"
              onClick={() => console.log(dispatch(fashions()))}
            >
              Fashions
            </Link>
            <Link
              className="cursor-pointer "
              to="/category"
              onClick={() => console.log(dispatch(bags()))}
            >
              Bags
            </Link>
            <Link
              className="cursor-pointer "
              to="/category"
              onClick={() => console.log(dispatch(shoes()))}
            >
              Shoes
            </Link>
            <Link
              className="cursor-pointer  w-96 md:w-fit "
              to="/category"
              onClick={() => console.log(dispatch(electronicdevices()))}
            >
              Electronic Devices
            </Link>
            <Link
              className="cursor-pointer "
              to="/category"
              onClick={() => console.log(dispatch(coesmetics()))}
            >
              Coesmetics
            </Link>
            <Link className=" md:hidden cursor-pointer">Liked Products</Link>
          </div>
          <div className="md:ml-5 md:text-base md:space-y-2  lg:text-lg flex flex-col lg:space-y-4  lg:my-5 lg:mx-9 lg:font-medium">
            {localStorage.length > 0 && (
              <Link
                className="hidden md:block"
                to="/category"
                onClick={() => dispatch(likedProducts())}
              >
                Liked Products
              </Link>
            )}
            {/* <Link>Famous Products</Link> */}
            <button
              className="hidden md:block md:py-1 md:w-28  md:text-sm  md:rounded-md lg:ml-0 lg:w-32 lg:text-base lg:py-1 outline-none lg:px-7 lg:rounded-md bg-blue-500 text-white"
              onClick={handleLogout}
            >
              Log out
            </button>
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

export default Sidebar;
