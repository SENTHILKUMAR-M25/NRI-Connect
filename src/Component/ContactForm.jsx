import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left: Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Details & Map */}
        <div className="flex flex-col space-y-6">
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Details</h3>
            <p className="text-gray-600 mb-2">
              📍 123 Real Estate Street, Chennai, India
            </p>
            <p className="text-gray-600 mb-2">📞 +91 98765 43210</p>
            <p className="text-gray-600">✉️ info@realestate.com</p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.337199509464!2d80.2245!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d!2sChennai!5e0!3m2!1sen!2sin!4v1679999999999"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
