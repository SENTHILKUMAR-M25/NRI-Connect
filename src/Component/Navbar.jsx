import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../slice/User";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import logo from "../../public/Home/logo.png";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userinfo.user);

  const [menuOpen, setMenuOpen] = useState(false);
  const logoControls = useAnimation();

  const logout = () => {
    dispatch(removeUser());
    localStorage.removeItem("token");
  };

  const nav = () => {
    navigate("/login");
  };

  const closeMenu = () => setMenuOpen(false);

  // Scroll animations
  const { scrollY } = useScroll();
  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 12px rgba(0,0,0,0.15)"]
  );
  const height = useTransform(scrollY, [0, 50], ["80px", "65px"]);

  // Logo animation
  useEffect(() => {
    const sequence = async () => {
      await logoControls.start({
        x: window.innerWidth / 2 - 60,
        scale: 1.5,
        rotateY: 360,
        transition: { duration: 2, ease: "easeInOut" },
      });
      await logoControls.start({
        x: 0,
        scale: 1,
        rotateY: 720,
        transition: { duration: 2, ease: "easeInOut" },
      });
    };
    sequence();
  }, [logoControls]);

const text = "NRI_Connect";

const letterAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
  return (
    <motion.header
      style={{ boxShadow, height }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 w-full px-4 lg:px-8 bg-white/80 backdrop-blur-md backdrop-saturate-150 shadow-sm z-[9999]"
    >
      <div className="container flex items-center justify-between mx-auto text-gray-900">

        {/* Logo */}
        <h1 className="mr-4 cursor-pointer py-2 text-xl font-semibold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 inline-block text-transparent bg-clip-text">
           <Link to="/" className="flex gap-2 items-center">
      {/* Logo Animation */}
      <motion.img
        src={logo}
        alt="Logo"
        className="h-10"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ x: -50, opacity: 0, rotateY: -90 }}
        animate={{ x: 0, opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Letter by Letter Animation */}
      <motion.span
        className="text-xl font-semibold flex"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08, delayChildren: 0.8 }} // delay after logo
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Link>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <ul className="flex gap-8 font-medium">
            <li><Link to="/" className="hover:text-blue-600 transition-colors p-2  focus:text-green-500  ">Home</Link></li>
            <li><Link to="/selling" className="hover:text-blue-600 transition-colors p-2  focus:text-blue-500  ">Sell</Link></li>
            <li><Link to="/service" className="hover:text-blue-600 transition-colors p-2  focus:text-blue-500  ">Service</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition-colors p-2  focus:text-blue-500  ">Contact</Link></li>
          </ul>
        </div>

        {/* Mobile Menu + Login */}
        <div className="flex items-center gap-3">
          {/* Hamburger */}
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Login / Logout */}
          <button
            className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all"
            onClick={user ? logout : nav}
          >
            {user ? "Logout" : "Login"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-md lg:hidden">
          <ul className="flex flex-col divide-y divide-gray-100">
            <li><Link to="/" onClick={closeMenu} className="block p-4 text-center hover:bg-blue-50 hover:text-blue-600">Home</Link></li>
            <li><Link to="/selling" onClick={closeMenu} className="block p-4 text-center hover:bg-blue-50 hover:text-blue-600">Sell</Link></li>
            <li><Link to="/service" onClick={closeMenu} className="block p-4 text-center hover:bg-blue-50 hover:text-blue-600">Service</Link></li>
            <li><Link to="/contact" onClick={closeMenu} className="block p-4 text-center hover:bg-blue-50 hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}

export default Navbar;
