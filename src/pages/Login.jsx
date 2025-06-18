import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-[#f4f7fd]'>
      <div
        className="relative w-full h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://evobizhtml.websitelayout.net/img/banner/banner-04.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center px-8 md:px-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white ">
            Login to your account
          </h1>
        </div>
      </div>

    <div className='w-full py-10 flex items-center justify-center'>
      <div className=" w-1/2 p-10 rounded-md">
          <h2 className="text-xl font-medium text-gray-800">Login</h2>
          <form className="mt-4 space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email / Username</label>
              <input type="text" id="login-email" name="login-email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="login-password" name="login-password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
            </div>
            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Login
            </button>
          </form>
          <NavLink to="/register" className='className="w-full mt-2 flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"'>Register</NavLink>
        </div>
    </div>
    </div>
  )
}

export default Login
