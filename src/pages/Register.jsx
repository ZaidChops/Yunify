// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import {register} from "../featurs/auth/authSlice"
// import { toast } from "react-toastify";

const Register = () => {
  // const dispatch = useDispatch()
  // const {user, isLoading, isSuccess, isError, message} = useSelector((state)=>{state.auth})

  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // })
  // const {name, email, password} = data

  // const handleChange = (e)=>{
  //   setData({
  //     ...data,
  //     [e.target.name] : e.target.value,
  //   })
  // }

  // const handleSubmit = (e)=>{
  //   e.preventDefault()
  //   dispatch(register(data))
  // }

  // useEffect(()=>{
  //   if(isError || message){
  //     toast.error(message)
  //   }
  // },[isError, message])

  // if(isLoading){
  //   return(
  //     <div className="container p-5">
  //       <h1 className="display-5 text-secondary texg-center">Loading...</h1>
  //     </div>
  //   )
  // }

  return (
    <div className="bg-[#f4f7fd]">
      <div
        className="relative w-full h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://evobizhtml.websitelayout.net/img/banner/banner-04.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center px-8 md:px-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white ">
            Create your account
          </h1>
        </div>
      </div>
      <div className="w-full py-10 flex items-center justify-center">
        <div className=" w-1/2">
          <div className=" p-10 rounded-md">
            <h1 className="text-2xl font-semibold text-purple-700 text-center">
              Register
            </h1>
            <form className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="reg-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="reg-name"
                  name="reg-name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  // placeholder="Enter your name"
                  // required
                  // autoComplete="name"
                  // name="name"
                  // value={name}
                  // onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="reg-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="reg-number"
                  name="reg-number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  // placeholder="Enter Phone Number"
                  // required
                  // autoComplete="email"
                  // name="email"
                  // value={email}
                  // onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="reg-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="reg-email"
                  name="reg-email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="reg-reg_no"
                  className="block text-sm font-medium text-gray-700"
                >
                  Registration No.
                </label>
                <input
                  type="text"
                  id="reg-reg_no"
                  name="reg-reg_no"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="reg-location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="reg-location"
                  name="reg-location"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="reg-skills"
                  className="block text-sm font-medium text-gray-700"
                >
                  Skills
                </label>
                <textarea
                  id="reg-skills"
                  name="reg-skills"
                  rows="3"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Register
              </button>
            </form>
            <NavLink
              to="/login"
              className='className="w-full mt-2 flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"'
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
