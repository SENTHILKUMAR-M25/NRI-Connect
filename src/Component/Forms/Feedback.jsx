import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addFeedback } from "../../slice/feedback";

export default function FeedbackForm() {
   const dispatch=useDispatch() 
  const [formData, setFormData] = useState({
    name: "",
    servicePersonId: "",
    servicePerson: "",
    rating: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Feedback Submitted:", formData);
    alert("Thank you for your feedback! 🙏");
    setFormData({
      name: "",
      servicePersonId: "",
      servicePerson: "",
      rating: "",
      feedback: "",
    });
    dispatch(addFeedback(formData));
  };

  return (
    <div className="min-h-screen relative top-16 flex items-center justify-center bg-gray-100 p-6">
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Service Feedback Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Customer Name */}
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Service Person ID */}
          <div>
            <label className="block mb-1 font-medium">Service Person ID</label>
            <input
              type="text"
              name="servicePersonId"
              value={formData.servicePersonId}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. YN-12345"
              required
            />
          </div>

          {/* Service Person Name */}
          <div>
            <label className="block mb-1 font-medium">Service Person Name</label>
            <input
              type="text"
              name="servicePerson"
              value={formData.servicePerson}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block mb-1 font-medium">Rating</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Good</option>
              <option value="3">⭐⭐⭐ Average</option>
              <option value="2">⭐⭐ Poor</option>
              <option value="1">⭐ Very Bad</option>
            </select>
          </div>

          {/* Feedback Message */}
          <div>
            <label className="block mb-1 font-medium">Your Feedback</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Write your feedback here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700"
          >
            Submit Feedback
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
