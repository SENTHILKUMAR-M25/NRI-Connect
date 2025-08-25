import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { removeProperty } from "../slice/Property";

// Animation variants for staggered fade-in
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};


const PropertyList = () => {
  const dispatch = useDispatch()
  const properties = useSelector((state) => state.property.properties);
  const handleDelete = (id) => {
    dispatch(removeProperty(id));
  };
   const [filter, setFilter] = useState("All");
const filteredProperties =
    filter === "All"
      ? properties
      : properties.filter(
          (property) => property.basicInfo.propertyType === filter
        );
  console.log(properties);
  const Properties=["All", "Apartment", "Villa", "Independent House"]
  return (
    

    <div className="container   mx-auto relative top-20  p-6">
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold mb-8 text-center"
      >
        Recently Added Properties
      </motion.h2>

      {/* Filter Buttons */}
      <div className="p-2 mb-2 flex gap-2">
        {Properties.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`block font-semibold text-center px-4 py-2 rounded-lg border transition-colors duration-300
              ${
                filter === type
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Property Cards */}
      {filteredProperties.length === 0 ? (
        <p className="text-center text-gray-500">No properties found</p>
      ) : (
        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property, index) => (
            <Link key={property.id} to={`/details/${property.id}`}>
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
                className="bg-white relative rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                {/* Property Image */}
                {property.media.images.length > 0 && (
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={property.media.images[0]}
                    alt={property.basicInfo.propertyType}
                    className="w-full h-40 object-cover"
                  />
                )}

                {/* Delete button */}
                <button onClick={() => handleDelete(property.id)}
                  className=""
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8 absolute top-1.5 right-1.5 text-blue-500 hover:text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21
                         c.342.052.682.107 1.022.166m-1.022-.165L18.16 
                         19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 
                         2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 
                         0a48.108 48.108 0 0 0-3.478-.397m-12 
                         .562c.34-.059.68-.114 1.022-.165m0 
                         0a48.11 48.11 0 0 1 3.478-.397m7.5 
                         0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 
                         51.964 0 0 0-3.32 0c-1.18.037-2.09 
                         1.022-2.09 2.201v.916m7.5 
                         0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg> 
                </button>

                {/* Property Details */}
                <div className="py-2 px-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {property.basicInfo.propertyType} in{" "}
                    {property.location.address}
                  </h3>
                  <p className="text-gray-600 sm:text-lg mt-1">
                    {property.basicInfo.carpetArea}
                  </p>
                  <div className="flex gap-6 my-2 text-gray-700 text-sm">
                    <span>🛏️ {property.basicInfo.bedrooms}</span>
                    <span>🚿 {property.basicInfo.bathrooms}</span>
                    <span>🏢 {property.basicInfo.floorNumber}</span>
                  </div>

                </div>

                
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyList;
