import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 absolute text-gray-300 pt-10 pb-6 mt-16">
      <div className="max-w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            NRI_Connect
          </h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Connecting NRIs to services, opportunities, and communities worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/selling" className="hover:text-blue-400 transition">Sell</Link></li>
            <li><Link to="/service" className="hover:text-blue-400 transition">Service</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NRI_Connect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
