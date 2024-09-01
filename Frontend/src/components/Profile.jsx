import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getprofiledetail } from "../features/profile/profileSlice";
import profilePic from "/profilepic.webp";

const Profile = () => {
  const dispatch = useDispatch();
  const { userprofiledata } = useSelector((state) => state.profile);
  // console.log(userprofiledata);

  useEffect(() => {
    let re = dispatch(getprofiledetail());
    console.log(re, "jui");
  }, []);
  return (
    <>
      {userprofiledata && (
        <div className="w-full px-4 ">
          <div className=" w-full justify-center  flex flex-col md:flex-row my-5  md:my-20">
            <div className=" w-full  md:w-1/5  py-10">
              <img
                src={profilePic}
                alt="profilepic"
                className="border-2 mx-auto w-2/3  lg:mx-auto  rounded-full"
              />
            </div>
            <div className="w-full  flex flex-col md:flex-row justify-center items-center md:space-x-8">
              <div className=" flex flex-col space-y-4 w-full md:w-2/5 md:space-y-5">
                <input
                  className="w-full px-2 py-1 md:py-1 md:px-2 md:text-xs lg:py-2 lg:text-base  rounded-sm lg:px-7 border-2 outline-none"
                  type="text"
                  placeholder={`${userprofiledata.store[0].name}`}
                  disabled
                />
                <input
                  type="email"
                  placeholder={`${userprofiledata.store[0].email}`}
                  disabled
                  className="px-2 py-1 md:py-1 md:px-2 md:text-xs  lg:text-base lg:px-7 rounded-sm border-2 outline-none"
                />
                <input
                  className="px-2 py-1 md:py-1 md:px-2 md:text-xs lg:px-7  lg:text-base rounded-sm border-2 outline-none"
                  type="number"
                  placeholder={`${userprofiledata.store[0].number}`}
                  disabled
                />
              </div>
              <div className=" mt-4 md:mt-0 md:space-y-5 space-y-4 w-full  flex flex-col md:w-2/5">
                <textarea
                  type="text"
                  className="px-2 py-1 w-full md:py-2 md:px-7 md:text-xs  lg:text-base lg:px-7 rounded-sm resize-none border-2 outline-none"
                  placeholder="room no. 45 ,Unnati divya layout , Behind shani temple , Hennur cross Bengaluru-43"
                  disabled
                />
                <input
                  type="text"
                  className="px-2 py-1 w-full md:py-1 md:px-2 md:text-xs  lg:text-base lg:px-7 rounded-sm  border-2 outline-none"
                  placeholder={`${userprofiledata.store[0].city}`}
                  disabled
                />
                <input
                  type="text"
                  className="px-2 py-1 w-full md:py-1 md:px-2 md:text-xs  lg:text-base lg:px-7 rounded-sm border-2 outline-none"
                  placeholder={`${userprofiledata.store[0].country}`}
                  disabled
                />
                <button className="bg-blue-500 text-white rounded-md py-1 w-full md:hidden">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
