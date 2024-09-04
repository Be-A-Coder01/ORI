import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Product from "./Product";
import Profile from "./Profile";
import Authenticationpage from "./Authenticationpage";
import Category from "./Category";
import Cart from "./Cart";
import Paymentsuccess from "./Paymentsuccess";
import Paymentcancel from "./Paymentcancel";

const Mainsection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/authentication" element={<Authenticationpage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/category" element={<Category />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/success" element={<Paymentsuccess />} />
          <Route path="/unsuccess" element={<Paymentcancel />} />
        </Routes>
      </div>
    </>
  );
};

export default Mainsection;
