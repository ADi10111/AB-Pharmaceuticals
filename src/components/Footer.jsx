import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-teal-900 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-[Jura] mb-6 text-white">Contact Us</h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg mb-6">
          <p className="flex items-center gap-3">
            <Phone size={22} /> +91-9899265141
          </p>
          <p className="flex items-center gap-3">
            <Mail size={22} /> Abpharmaceuticals@gmail.com
          </p>
        </div>

        <hr className="border-teal-700 mb-4" />
        <p className="text-sm text-gray-300">
          &copy; 2025 <span className="font-semibold">AB Pharmaceuticals</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
