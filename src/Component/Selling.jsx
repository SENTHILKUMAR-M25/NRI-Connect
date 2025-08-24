import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProperty } from "../slice/Property";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

export default function PropertyForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userinfo.user);

  const [formData, setFormData] = useState({
    id: "",
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

  // ✅ Set browser tab title
  useEffect(() => {
    document.title = "Add Property | NRI-Connect";
  }, []);

  // Handlers
  const handleChange = (e, section, field) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: e.target.value },
    }));
  };

  const handleSingleFile = (e, section, field) => {
    const file = e.target.files[0];
    if (!file) return;
    const fileUrl = URL.createObjectURL(file);
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
    if (!user) {
      navigate("/login");
      return;
    }

    // Validation
    if (!formData.basicInfo.carpetArea || !formData.pricing.sellingPrice) {
      alert("Please fill required fields like Carpet Area and Selling Price.");
      return;
    }

    const propertyWithId = {
      ...formData,
      id: uuidv4(),
    };
    dispatch(addProperty(propertyWithId));
    navigate("/property");
  };

  // Animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const inputClass =
    "border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className=" relative top-12 max-w-5xl mx-auto p-8 space-y-10 bg-white shadow-2xl rounded-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
    >
      {/* ✅ Main Heading */}
      <motion.h2
        className="text-4xl font-bold text-center text-blue-700"
        variants={fadeUp}
      >
        Add Property
      </motion.h2>

      {/* ✅ Property Details */}
      <motion.div variants={fadeUp}>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Property Details</h3>
        <label className="block font-medium mb-2">Property Type</label>
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
            placeholder="Carpet Area (sq ft)"
            value={formData.basicInfo.carpetArea}
            onChange={(e) => handleChange(e, "basicInfo", "carpetArea")}
            className={inputClass}
            required
          />
          <input
            type="text"
            placeholder="Built Up Area (sq ft)"
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
          placeholder="Facing (e.g., East)"
          value={formData.basicInfo.facing}
          onChange={(e) => handleChange(e, "basicInfo", "facing")}
          className={`${inputClass} mt-4`}
        />
      </motion.div>

      {/* ✅ Pricing */}
      <motion.div variants={fadeUp}>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Pricing</h3>
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
            required
          />
        </div>
      </motion.div>

      {/* ✅ Media Uploads */}
      <motion.div variants={fadeUp}>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Media Uploads</h3>
        <label className="block font-medium">Images</label>
        <input
          type="file"
          multiple
          onChange={(e) => handleMultipleFiles(e, "media", "images")}
          className={inputClass}
        />
        {formData.media.images.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.media.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="preview"
                className="w-24 h-24 object-cover rounded-lg shadow"
              />
            ))}
          </div>
        )}

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

      {/* ✅ Location */}
      <motion.div variants={fadeUp}>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Location</h3>
        <input
          type="text"
          placeholder="Address"
          value={formData.location.address}
          onChange={(e) => handleChange(e, "location", "address")}
          className={inputClass}
        />
      </motion.div>

      {/* ✅ Seller Information */}
      <motion.div variants={fadeUp}>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Seller Information</h3>
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

      {/* ✅ Submit Button */}
      <motion.button
        type="submit"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold w-full hover:bg-blue-700 transition"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Submit Property
      </motion.button>
    </motion.form>
  );
}
