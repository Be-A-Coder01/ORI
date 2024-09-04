import React from "react";

const Paymentcancel = () => {
  return (
    <>
      <div className="border-2 flex h-screen w-screen justify-center ">
        <div className=" my-20 h-fit border-2 text-center p-10 bg-red-600">
          <i class="fa-solid fa-xmark  text-5xl  py-2 bg-slate-300 px-3 rounded-full text-red-600"></i>
          <p className="text-xl my-5 text-white">Payment was unsuccesfully</p>
        </div>
      </div>
    </>
  );
};

export default Paymentcancel;
