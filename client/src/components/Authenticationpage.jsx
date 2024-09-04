import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";
import oriLogo from "/ORI.png";

const Authenticationpage = () => {
  return (
    <>
      <div className="  w-full md:flex  justify-center">
        <div className="bg-[#E0E6EC] md:w-3/5 lg:w-2/5 lg:py-24">
          <Signup></Signup>
        </div>
        <div className="lg:w-2/5 my-16 lg:py-40">
          <Login></Login>
        </div>
      </div>
    </>
  );
};

export default Authenticationpage;
