// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaBed, FaBath, FaRulerCombined, FaBuilding, FaHome, FaCalendarAlt, FaPhone, FaEnvelope, FaUser, FaTimes } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Details = () => {
    const [showModal, setShowModal] = useState(false);
  const [buyerDetails, setBuyerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
    const user = useSelector((state) => state.userinfo.user);
  const { id } = useParams();
  const property = useSelector((state) =>
    state.property.properties.find((p) => p.id === id) // Removed parseInt since we're using UUID
  );
  

  if (!property) return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 text-center"
    >
      <h2 className="text-2xl font-bold text-gray-700">Property not found</h2>
      <p className="mt-2 text-gray-500">The property you're looking for doesn't exist or may have been removed.</p>
    </motion.div>
  );
const handleInputChange = (e) => {
      const { name, value } = e.target;
      setBuyerDetails(prev => ({
        ...prev,
        [name]: value
      }));
    };
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Send email using EmailJS
      const templateParams = {
        to_name: property.sellerInfo.name,
        from_name: buyerDetails.name,
        from_email: buyerDetails.email,
        phone: buyerDetails.phone,
        message: buyerDetails.message,
        property_url: window.location.href,
        property_title: `${property.basicInfo.propertyType} in ${property.location.address}`,
        property_price: `₹${property.pricing.sellingPrice.toLocaleString()}`
      };

      await emailjs.send(
        'YOUR_EMAILJS_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_EMAILJS_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_EMAILJS_USER_ID' // Replace with your EmailJS user ID
      );

      setSuccessMessage('Your booking request has been sent successfully!');
      setTimeout(() => {
        setShowModal(false);
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Failed to send booking request. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto p-4 md:p-8"
    >
      {/* Main Property Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Image Gallery */}
        <motion.div variants={fadeIn}>
          <div className="sticky top-4">
            {property.media.images.length > 0 && (
              <img
                src={property.media.images[0]}
                alt={property.basicInfo.propertyType}
                className="w-full h-96 object-cover rounded-xl shadow-lg mb-4"
              />
            )}
            
            <div className="flex gap-2 overflow-x-auto pb-2">
              {property.media.images.map((img, index) => (
                <motion.img
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover border rounded-lg cursor-pointer"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Property Details */}
        <motion.div variants={fadeIn} className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {property.basicInfo.propertyType}
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              {property.location.address}
            </p>
          </div>

          {/* Price Section */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600">Selling Price</p>
                <p className="text-2xl font-bold text-blue-600">
                  ₹{property.pricing.sellingPrice.toLocaleString()}
                </p>
              </div>
              {property.pricing.onRoadPrice && (
                <div className="text-right">
                  <p className="text-gray-600">On Road Price</p>
                  <p className="text-xl font-semibold">
                    ₹{property.pricing.onRoadPrice.toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <FaBed className="text-blue-500" />
              <span>{property.basicInfo.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBath className="text-blue-500" />
              <span>{property.basicInfo.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRulerCombined className="text-blue-500" />
              <span>{property.basicInfo.carpetArea} sq.ft</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBuilding className="text-blue-500" />
              <span>Floor {property.basicInfo.floorNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHome className="text-blue-500" />
              <span>{property.basicInfo.furnishing}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-blue-500" />
              <span>{property.basicInfo.constructionAge}</span>
            </div>
          </div>

          {/* Description Section */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-lg mb-2">Property Details</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Built Up Area:</span> {property.basicInfo.builtUpArea} sq.ft</p>
              <p><span className="font-medium">Balconies:</span> {property.basicInfo.balconies}</p>
              <p><span className="font-medium">Total Floors:</span> {property.basicInfo.totalFloors}</p>
              <p><span className="font-medium">Facing:</span> {property.basicInfo.facing}</p>
            </div>
          </div>

          {/* Seller Info */}
                      {user.name === "senthil" && user.email === "vs1625@gmail.com" && (
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <FaUser className="text-blue-500" /> Seller Information
            </h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <FaUser className="text-gray-500" /> {property.sellerInfo.name}
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-gray-500" /> {property.sellerInfo.phone}
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-gray-500" /> {property.sellerInfo.email}
              </p>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Contact Seller
            </button>
          </div>)}
        </motion.div>
      </div>

      {/* Additional Media Section */}
      {property.media.videoTourLink && (
        <motion.div variants={fadeIn} className="mb-12">
          <h3 className="text-xl font-bold mb-4">Video Tour</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={property.media.videoTourLink}
              className="w-full h-96 rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      )}

      {/* Floor Plan Section */}
      {property.media.floorPlanImage && (
        <motion.div variants={fadeIn} className="mb-12">
          <h3 className="text-xl font-bold mb-4">Floor Plan</h3>
          <img
            src={property.media.floorPlanImage}
            alt="Floor Plan"
            className="w-full max-w-2xl mx-auto rounded-lg border"
          />
        </motion.div>
      )}
      <button 
      onClick={() => setShowModal(true)}
      className=" bg-blue-600 p-2 m-2 rounded-lg w-full hover:text-white " >Book Now</button>
    {showModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 top-[20%] backdrop-blur-lg bg-opacity-50 flex items-center justify-center z-999999999 p-4"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Booking Request</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>

            {successMessage ? (
              <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
                {successMessage}
              </div>
            ) : (
              <>
                <p className="mb-4">Please fill in your details to express interest in this property.</p>
                
                {errorMessage && (
                  <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={buyerDetails.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={buyerDetails.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={buyerDetails.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={buyerDetails.message}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      rows="3"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-blue-400"
                  >
                    {isSending ? 'Sending...' : 'Submit Booking Request'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Details;