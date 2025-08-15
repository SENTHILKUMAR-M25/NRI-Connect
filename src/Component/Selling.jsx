
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProperty } from "../slice/Property";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from 'uuid';
export default function PropertyForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userinfo.user);

  const [formData, setFormData] = useState({
    id:'',
    basicInfo: {
      propertyType: "Apartment",
      carpetArea: "",
      builtUpArea: "",
      bedrooms: "",
      bathrooms: "",
      balconies: "",
      floorNumber: "",
      totalFloors: "",
      furnishing: "Fully Furnished",
      constructionAge: "New Construction",
      facing: "",
    },
    pricing: {
      onRoadPrice: "",
      sellingPrice: "",
    },
    media: {
      images: [],
      videoTourLink: "",
      floorPlanImage: "",
      brochureFile: "",
      legalDocuments: [],
    },
    location: {
      address: "",
    },
    sellerInfo: {
      name: "",
      phone: "",
      email: "",
    },
  });

  // Handlers
  const handleChange = (e, section, field) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: e.target.value },
    }));
  };

  const handleSingleFile = (e, section, field) => {
    const fileUrl = URL.createObjectURL(e.target.files[0]);
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: fileUrl },
    }));
  };

  const handleMultipleFiles = (e, section, field) => {
    const files = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: files },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user){
      navigate('/login')
      return
    }
  const propertyWithId = {
        ...formData,
        id: uuidv4() // Generates a more robust unique ID
      };
    dispatch(addProperty(propertyWithId));
    navigate("/property");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const inputClass =
    "border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-8 space-y-6 bg-white shadow-lg rounded-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-blue-600"
        variants={fadeUp}
      >
        Add New Property
      </motion.h2>

      {/* BASIC INFO */}
      <motion.div variants={fadeUp}>
        <h3 className="text-lg font-semibold mb-3">Basic Info</h3>
        <select
          value={formData.basicInfo.propertyType}
          onChange={(e) => handleChange(e, "basicInfo", "propertyType")}
          className={inputClass}
        >
          <option>Apartment</option>
          <option>Villa</option>
          <option>Independent House</option>
        </select>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            placeholder="Carpet Area"
            value={formData.basicInfo.carpetArea}
            onChange={(e) => handleChange(e, "basicInfo", "carpetArea")}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Built Up Area"
            value={formData.basicInfo.builtUpArea}
            onChange={(e) => handleChange(e, "basicInfo", "builtUpArea")}
            className={inputClass}
          />
          <input
            type="number"
            placeholder="Bedrooms"
            value={formData.basicInfo.bedrooms}
            onChange={(e) => handleChange(e, "basicInfo", "bedrooms")}
            className={inputClass}
          />
          <input
            type="number"
            placeholder="Bathrooms"
            value={formData.basicInfo.bathrooms}
            onChange={(e) => handleChange(e, "basicInfo", "bathrooms")}
            className={inputClass}
          />
          <input
            type="number"
            placeholder="Balconies"
            value={formData.basicInfo.balconies}
            onChange={(e) => handleChange(e, "basicInfo", "balconies")}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Floor Number"
            value={formData.basicInfo.floorNumber}
            onChange={(e) => handleChange(e, "basicInfo", "floorNumber")}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Total Floors"
            value={formData.basicInfo.totalFloors}
            onChange={(e) => handleChange(e, "basicInfo", "totalFloors")}
            className={inputClass}
          />
        </div>

        {/* Furnishing */}
        <label className="block mt-4 font-medium">Furnishing</label>
        <select
          value={formData.basicInfo.furnishing}
          onChange={(e) => handleChange(e, "basicInfo", "furnishing")}
          className={inputClass}
        >
          <option value="Fully Furnished">Fully Furnished</option>
          <option value="Semi Furnished">Semi Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>

        {/* Construction Age */}
        <label className="block mt-4 font-medium">Construction Age</label>
        <select
          value={formData.basicInfo.constructionAge}
          onChange={(e) => handleChange(e, "basicInfo", "constructionAge")}
          className={inputClass}
        >
          <option value="New Construction">New Construction</option>
          <option value="1-5 Years Old">1-5 Years Old</option>
          <option value="5-10 Years Old">5-10 Years Old</option>
          <option value="10+ Years Old">10+ Years Old</option>
        </select>

        <input
          type="text"
          placeholder="Facing"
          value={formData.basicInfo.facing}
          onChange={(e) => handleChange(e, "basicInfo", "facing")}
          className={`${inputClass} mt-4`}
        />
      </motion.div>

      {/* PRICING */}
      <motion.div variants={fadeUp}>
        <h3 className="text-lg font-semibold mb-3">Pricing</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="On Road Price"
            value={formData.pricing.onRoadPrice}
            onChange={(e) => handleChange(e, "pricing", "onRoadPrice")}
            className={inputClass}
          />
          <input
            type="number"
            placeholder="Selling Price"
            value={formData.pricing.sellingPrice}
            onChange={(e) => handleChange(e, "pricing", "sellingPrice")}
            className={inputClass}
          />
        </div>
      </motion.div>

      {/* MEDIA */}
      <motion.div variants={fadeUp}>
        <h3 className="text-lg font-semibold mb-3">Media</h3>
        <label className="block font-medium">Images</label>
        <input
          type="file"
          multiple
          onChange={(e) => handleMultipleFiles(e, "media", "images")}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Video Tour Link"
          value={formData.media.videoTourLink}
          onChange={(e) => handleChange(e, "media", "videoTourLink")}
          className={`${inputClass} mt-4`}
        />
        <label className="block font-medium mt-4">Floor Plan Image</label>
        <input
          type="file"
          onChange={(e) => handleSingleFile(e, "media", "floorPlanImage")}
          className={inputClass}
        />
        <label className="block font-medium mt-4">Brochure File</label>
        <input
          type="file"
          onChange={(e) => handleSingleFile(e, "media", "brochureFile")}
          className={inputClass}
        />
        <label className="block font-medium mt-4">Legal Documents</label>
        <input
          type="file"
          multiple
          onChange={(e) => handleMultipleFiles(e, "media", "legalDocuments")}
          className={inputClass}
        />
      </motion.div>

      {/* LOCATION */}
      <motion.div variants={fadeUp}>
        <h3 className="text-lg font-semibold mb-3">Location</h3>
        <input
          type="text"
          placeholder="Address"
          value={formData.location.address}
          onChange={(e) => handleChange(e, "location", "address")}
          className={inputClass}
        />
      </motion.div>

      {/* SELLER INFO */}
      <motion.div variants={fadeUp}>
        <h3 className="text-lg font-semibold mb-3">Seller Info</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.sellerInfo.name}
            onChange={(e) => handleChange(e, "sellerInfo", "name")}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Phone"
            value={formData.sellerInfo.phone}
            onChange={(e) => handleChange(e, "sellerInfo", "phone")}
            className={inputClass}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.sellerInfo.email}
            onChange={(e) => handleChange(e, "sellerInfo", "email")}
            className={inputClass}
          />
        </div>
      </motion.div>

      <motion.button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold w-full hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        
      >
        Submit Property
      </motion.button>
    </motion.form>
  );
}

