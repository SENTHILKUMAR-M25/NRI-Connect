import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const user = useSelector((state) => state.userinfo.user);

  const support = [
    {
      id: 1,
      img: "url(../src/assets/property.jpg)",
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
      img: "url(../src/assets/service.jpg)",
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
      img: "url(../src/assets/comminity.jpg)",
      head: "Community Support",
      disc: "Connect with other NRIs, share experiences, and get advice on living abroad while managing assets in India.",
      link: "",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative max-h-screen w-full bg-gray-50 font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-[90vh] flex items-center  justify-center top-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-white px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(https://sbnri.com/blog/wp-content/uploads/2023/05/NRI-Property.jpg)` }}
      >
        <div className="max-w-4xl flex flex-col gap-8 text-center">
          <motion.h1
            className=" bg-gradient-to-r from-red-600 via-green-500 to-orange-500 inline-block text-transparent w-full text-3xl lg:text-5xl font-bold bg-clip-text" variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Your Home Away From Home
          </motion.h1>

          <motion.p
            className="text-lg text-blue-600 font-bold md:text-xl mb-10 max-w-2xl mx-auto opacity-90"
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
            className="flex flex-wrap gap-8 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.div variants={fadeUp}>
              <Link
                to="/service"
              ><button type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Explore service</button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                to="/hiring">
                <button type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Hiring</button>
              </Link>
            </motion.div>


            <motion.div variants={fadeUp}>
              <Link
                to="/property">
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Properties
                </button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                to="/Employee"  >
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Employees

                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="max-w-6xl mx-auto px-6 py-20"
        style={{ backgroundImage: `url(../assets/NRI-Property.jpg)` }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-800"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Comprehensive Solutions for NRIs
        </motion.h2>

        <div className="container mx-auto px-6 py-12 space-y-12  ">
          {support.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-300 p-6 rounded-lg "
            >
              {/* Text with animation */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`space-y-4 ${index % 2 !== 0 ? "md:order-2" : "md:order-1"
                  }`}
              >
                <div className="flex items-center space-x-3">
                  {item.svg}
                  <h2 className="text-xl font-bold text-red-600">{item.head}</h2>
                </div>
                <p className="text-gray-700">{item.disc}</p>
                {item.link && (
                  <a
                    href={item.link}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Learn More →
                  </a>
                )}
              </motion.div>

              {/* Image with animation */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`rounded-lg shadow-lg w-full h-[300px] bg-center bg-cover ${index % 2 !== 0 ? "md:order-1" : "md:order-2"
                  }`}
                style={{ backgroundImage: item.img }}
              ></motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
