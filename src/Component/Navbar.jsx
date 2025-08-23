import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../slice/User";
import { motion, useScroll, useTransform } from "framer-motion";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state) => state.userinfo.user);
  const [MenuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    dispatch(removeUser());          // Redux cleanup
    localStorage.removeItem('token'); // Storage cleanup
  };
  const nav = () => {
    navigate('/login');              // Redirect

  }
 const closeMenu = () => {
    setIsMenuOpen(false);
  };
  // Framer Motion scroll animation
  const { scrollY } = useScroll();

  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 12px rgba(0,0,0,0.2)"]
  );

  const height = useTransform(scrollY, [0, 50], ["80px", "60px"]);

  return (

    <motion.header
      style={{ boxShadow, height }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 w-full px-4 py-1 rounded-lg bg-opacity-90 shadow lg:px-8 lg:py-3 backdrop-blur-lg bg-black/40 backdrop-saturate-150 z-[9999]"
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <h1 className="mr-4 cursor-pointer py-2 text-xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-red-400 inline-block text-transparent bg-clip-text">
          <Link to='/'>NRI_Connect</Link>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

            <>
              <li className="flex items-center p-1 text-sm gap-x-2 text-blue-400">
                <Link to="/" className="flex items-center hover:text-blue-600 text-lg">Home</Link>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 ">
                <Link to="/selling" className="flex items-center hover:text-blue-600 text-lg ">Sell</Link>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-blue-400">
                <Link to="/service" className="flex items-center hover:text-blue-600 text-lg ">Service</Link>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-blue-400">
                <Link to="/contact" className="flex items-center hover:text-blue-600 text-lg ">Contact</Link>
              </li>

            </>

          </ul>
        </div>

        {/* Mobile Menu Button */}

        <div className="flex gap-1.5 justify-center items-center">
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
            onClick={() => setMenuOpen(!MenuOpen)}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {MenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </span>
          </button>
          <button
            type="button"
            class="text-blue-700 font-bold bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={user ? logout : nav}
          >
            {user ? "logout" : "Login"}

          </button>
        </div>


      </div>

      {/* Mobile Dropdown Menu */}
      {MenuOpen && (
        <div className="absolute top-full left-0 mr-3 w-full bg-white shadow-md lg:hidden">
          <ul className="flex flex-col ">
            <li 
            className="flex items-center justify-center p-4 text-sm border-b border-gray-100 gap-x-2 text-slate-600">
              <Link to="/" 
              onClick={closeMenu}
              className="flex items-center justify-center text-black w-full hover:bg-blue-600 py-1 rounded-xl hover:text-white text-center">Home</Link>
            </li>
            <li 
            className="flex items-center p-4 text-sm border-b border-gray-100 gap-x-2 text-slate-600">
              <Link to="/selling" 
              onClick={closeMenu}
              className="flex items-center justify-center text-black w-full hover:bg-blue-600 py-1 rounded-xl hover:text-white text-center">Sell</Link>
            </li>
            <li className="flex items-center p-4 text-sm border-b border-gray-100 gap-x-2 text-slate-600">
              <Link to="/service"
              onClick={closeMenu} 
              className="flex items-center justify-center text-black w-full hover:bg-blue-600 py-1 rounded-xl hover:text-white text-center">Service</Link>
            </li>
            <li className="flex items-center p-4 text-sm border-b border-gray-100 gap-x-2 text-slate-600">
              <Link to="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center text-black w-full hover:bg-blue-600 py-1 rounded-xl hover:text-white text-center">Contact</Link>
            </li>
            <li className="flex items-center p-4 text-sm gap-x-2">

            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}

export default Navbar;
