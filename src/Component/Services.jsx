import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Buyingservice from '../../public/service/buyingservice.jpg'
import Homeservice from '../../public/service/homeservice.jpg'
import Sellingservice from '../../public/service/sellingservice.jpg'


const services = [
  {
    title: "Property Buying Assistance",
    description:
      
      "Expert guidance to help you find your dream home or investment property, including site visits, negotiations, and paperwork.",
    img: Buyingservice,
    path: "/property",
  },
  {
    title: "Home Services",
          img: Homeservice,
    
    description:
          "Maintenance services including repairs, cleaning, and renovations to keep your property in top condition.",

      path: "/employee",
  },
  {
    title: "Property Selling",      
    img: Sellingservice,

    description:      "Comprehensive support to sell your property quickly and at the best price, including valuation, marketing, and legal formalities.",

    path: "/selling",
  },
 
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Services() {
  const navigate = useNavigate();

  return (
    <motion.div
      className=" relative top-12 container mx-auto px-4 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Title animation */}
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-center mb-10 text-blue-700"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      {/* Service Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            onClick={() => navigate(service.path)}
            className="cursor-pointer bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl hover:scale-105 hover:shadow-blue-500 transition-transform duration-300 border border-gray-100"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
             style={{ backgroundImage: `url(${service.img})` }}

          >
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            onClick={() => navigate(service.path)}
            className="cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-transform duration-300 border border-gray-100"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Image */}
            <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url(${service.img})` }}></div>

            {/* Text */}
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
