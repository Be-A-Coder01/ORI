import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [state, setState] = useState("true");
  const [form, setForm] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let getuserdata = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  let handleFormSubmit = async (e) => {
    e.preventDefault();
    let get = await dispatch(createUser(form));
    console.log(get);
    if (get.payload.token) {
      localStorage.setItem(
        "userInfo",
        JSON.stringify(get.payload.userRegistered)
      );
      await localStorage.setItem(
        "userToken",
        JSON.stringify(get.payload.token)
      );
    }
    toast(`${get.payload.message}`);
  };

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  return (
    <>
      <div className="flex flex-col items-center ">
        <p className="md:text-2xl lg:text-4xl font-medium">
          welcome to <span className="text-blue-500">ORI</span>
        </p>
        <p className=" md:text-base lg:text-xl font-normal">
          create your account
        </p>

        <form
          autoComplete="on"
          onSubmit={handleSubmit()}
          className="flex flex-col w-4/6 space-y-3 my-5"
        >
          <input
            className="px-5 md:px-10 md:py-1 lg:py-2 rounded-sm lg:px-7 outline-none "
            type="text"
            name="name"
            onChange={getuserdata}
            placeholder="Name"
          />

          <input
            className="px-5 md:px-10 md:py-1 lg:py-2 rounded-sm lg:px-7 outline-none "
            type="email"
            name="email"
            onChange={getuserdata}
            placeholder="Email"
          />

          <input
            className=" px-5 md:px-10 md:py-1 lg:py-2 rounded-sm lg:px-7 outline-none "
            type="password"
            name="password"
            onChange={getuserdata}
            placeholder="password"
          />

          <input
            className="px-5 md:px-10 md:py-1 lg:py-2 rounded-sm lg:px-7 outline-none "
            type="number"
            name="number"
            onChange={getuserdata}
            placeholder="Mobile no."
          />

          <input
            type="text"
            name="address"
            onChange={getuserdata}
            className="px-5 md:px-10 md:py-1 lg:py-2 rounded-sm lg:px-7 outline-none  "
            placeholder="Address"
          />

          <input
            className="px-5 md:px-10 md:py-1 lg:py-2 rounded-sm lg:px-7 outline-none "
            type="text"
            name="city"
            onChange={getuserdata}
            placeholder="city"
          />
          <input
            className="px-5 md:px-10 md:py-1 lg:py-2 rounded-sm lg:px-7 outline-none "
            type="text"
            name="country"
            onChange={getuserdata}
            placeholder="country"
          />
          <input
            className="py-1 outline-none px-7 rounded-2xl bg-blue-500 text-white"
            disabled={isSubmitting}
            type="submit"
            onClick={handleFormSubmit}
            value="Register"
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

export default Signup;
