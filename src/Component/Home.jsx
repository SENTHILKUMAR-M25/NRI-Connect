import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import propertyImg from "../../public/images/property.jpg";
import serviceImg from "../../public/images/service.jpg";
import communityImg from "../../public/images/comminity.jpg";
import home1 from '../../public/Home/Home1.jpg'
import home2 from '../../public/Home/Home2.jpg'
import home3 from '../../public/Home/Home3.jpg'
import home4 from '../../public/Home/Home4.jpg'
import home5 from '../../public/Home/Home5.jpg'


function Home() {
  const user = useSelector((state) => state.userinfo.user);
  const home = [home1, home2, home3, home4,home5]
  const support = [
    {
      id: 1,
      img: `url(${propertyImg})`,
      svg: (
        <svg
          className="w-7 h-7 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      head: "Your Dream Home in India Awaits",
      disc: 'Luxury living with world-class amenities in a prime location. An address that connects your life abroad to your roots at home. Perfect for investment, rental income, or cherished family stays. Secure your piece of India today!',
      link: "/property",
    },
    {
      id: 2,
      img: `url(${serviceImg})`,
      svg: (
        <svg
          className="w-7 h-7 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      head: "Home Services",
      disc: "Luxury property in a prime location, built for comfort and style. Stay connected to your roots while enjoying modern living. From plumbing to cleaning to electrical — we handle it all. Move in and start living, we’ll take care of the rest.",
      link: "/service",
    },
    {
      id: 3,
      svg: (
        <svg
          className="w-7 h-7 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      img: `url(${communityImg})`,
      head: "Community Support",
      disc: "Connect with other NRIs, share experiences, and get advice on living abroad while managing assets in India.",
      link: "",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % home.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [home.length]);

  return (
//${home[currentImageIndex]}
    <div className="relative w-full bg-gray-50 font-sans">

      <section
        className="relative w-full  h-[100vh] -fit flex items-center justify-center text-white px-4 sm:px-6 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${home[currentImageIndex]})` }}
      >
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-4xl flex flex-col gap-6 sm:gap-7 md:gap-8 text-center">
          <motion.h1
            className="bg-gradient-to-r from-red-600 via-green-500 to-orange-500 inline-block text-transparent w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Your Home Away From Home
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-blue-100 font-bold max-w-2xl mx-auto px-2 sm:px-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive solutions for Non-Resident Indians to manage
            properties and services in India.
          </motion.p>



          <motion.div
            className="flex flex-wrap justify-evenly gap-4 sm:gap-5 md:gap-6 mt-4 w-full max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.div variants={fadeUp} className="flex-1 min-w-[160px] max-w-[220px]">
              <Link to="/service" className="block w-full">
                <button
                  type="button"
                  className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm px-4 py-2.5 text-center transition-all duration-300 transform hover:scale-105"
                >
                  Explore Service
                </button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="flex-1 min-w-[160px] max-w-[220px]">
              <Link to="/hiring" className="block w-full">
                <button
                  type="button"
                  className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm px-4 py-2.5 text-center transition-all duration-300 transform hover:scale-105"
                >
                  Hiring
                </button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="flex-1 min-w-[160px] max-w-[220px]">
              <Link to="/property" className="block w-full">
                <button
                  type="button"
                  className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm px-4 py-2.5 text-center transition-all duration-300 transform hover:scale-105"
                >
                  Properties
                </button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="flex-1 min-w-[160px] max-w-[220px]">
              <Link to="/Employee" className="block w-full">
                <button
                  type="button"
                  className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm px-4 py-2.5 text-center transition-all duration-300 transform hover:scale-105"
                >
                  Employees
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-14 text-gray-800"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Comprehensive Solutions for NRIs
        </motion.h2>

        <div className="space-y-10 sm:space-y-12 md:space-y-14">
          {support.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-white p-5 sm:p-6 md:p-7 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Text with animation */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`space-y-4 ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}
              >
                <div className="flex items-center space-x-3">
                  {item.svg}
                  <h2 className="text-lg sm:text-xl font-bold text-red-600">{item.head}</h2>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">{item.disc}</p>
                {item.link && (
                  <a
                    href={item.link}
                    className="text-blue-600 hover:underline font-medium text-sm sm:text-base inline-flex items-center"
                  >
                    Learn More <span className="ml-1">→</span>
                  </a>
                )}
              </motion.div>

              {/* Image with animation */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`rounded-lg overflow-hidden shadow-lg w-full h-[220px] sm:h-[250px] md:h-[300px] bg-center bg-cover ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}
                style={{ backgroundImage: `url(${item.img})` }}
              >
                {/* Image overlay for better text contrast */}
                <div className="w-full h-full bg-black/10 hover:bg-black/0 transition-all duration-300"></div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
