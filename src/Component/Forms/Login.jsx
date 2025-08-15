
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../slice/User';
import loginbg from '../../assets/NRI.png';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Controlled state from the start (empty strings)
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 4) {
      newErrors.username = 'Username must be at least 4 characters';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    // Prevent crash if e is not passed
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    if (validateForm()) {
      dispatch(
        setUser({
          name: formData.username,
          email: formData.email
        })
      );
      navigate('/');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl">
        {/* Left Side - Graphic Panel */}
        <div className="relative w-full lg:w-1/2 bg-gradient-to-br from-green-600 to-green-800 p-12 flex flex-col justify-center">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/20 rounded-tl-full"></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <div className="mb-8 flex justify-center">
              <img src="/logo.svg" alt="Logo" className="w-20 h-20" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-lg max-w-md mx-auto mb-8 opacity-90">
              To stay connected with us, please log in with your personal info.
            </p>
            <div className="w-16 h-1 bg-white/50 mx-auto mb-8"></div>

          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome</h2>
              <p className="text-gray-500">Log in to your account to continue</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    className="w-full pl-12 pr-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>
                {errors.username && (
                  <p className="text-red-500 text-sm mt-2 ml-4">{errors.username}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 ml-4">{errors.email}</p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-green-600 hover:text-green-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                LOG IN
              </button>
              <p className="text-sm text-center opacity-80">
                Don't have an account?{' '}
                <Link to='/signup' className="font-semibold underline hover:opacity-90">
                  Sign up
                </Link>
              </p>
              {/* Social Login */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <img
                      src="https://www.svgrepo.com/show/355037/google.svg"
                      className="h-5 w-5"
                      alt="Google"
                    />
                  </a>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <img
                      src="https://www.svgrepo.com/show/448234/facebook.svg"
                      className="h-5 w-5"
                      alt="Facebook"
                    />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;
