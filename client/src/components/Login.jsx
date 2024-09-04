import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser } from "../features/user/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const {
    formState: { errors, isSubmitting },
  } = useForm();
  const dispatch = useDispatch();
  const [form, setForm] = useState();

  let getUserData = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let get = await dispatch(loginUser(form));
    console.log(get, "ji");
    if (get.payload.token) {
      localStorage.setItem("userInfo", JSON.stringify(get.payload.userFind));
      localStorage.setItem("userToken", JSON.stringify(get.payload.token));
      toast(`${get.payload.status}`);
      // navigate("/");
    } else {
      toast("Please enter correct detail");
    }
  };

  return (
    <>
      <div className=" flex flex-col items-center ">
        <p className="md:text-base lg:text-2xl font-medium">
          Login your account
        </p>

        <form
          className=" flex flex-col md:w-5/6 lg:w-3/6 space-y-3  h-full my-5"
          onSubmit={handleSubmit}
        >
          <input
            className="px-5 md:px-10 md:py-1 lg:py-1 outline-none lg:px-7 bg-[#EFEFEF]"
            type="email"
            placeholder="Email"
            name="email"
            onChange={getUserData}
          />
          <input
            className="px-5 md:px-10 md:py-1 lg:py-1 outline-none lg:px-7 bg-[#EFEFEF]"
            type="password"
            name="password"
            placeholder="password"
            onChange={getUserData}
          />

          <input
            className="py-1 px-7 rounded-2xl bg-blue-500 text-white"
            type="submit"
            value="Submit"
            disabled={isSubmitting}
          />
        </form>
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

export default Login;
