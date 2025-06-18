import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 sm:px-10 md:px-20 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Yunify</h2>
          <p className="text-gray-300 mb-5 text-sm">
            Getting an accurate diagnosis can be one of the most impactful experiences that you can have.
          </p>
          <div className="flex gap-4 text-white text-lg">
            <FaFacebookF className="hover:text-purple-700 cursor-pointer" />
            <FaInstagram className="hover:text-purple-700 cursor-pointer" />
            <FaYoutube className="hover:text-purple-700 cursor-pointer" />
            <FaLinkedinIn className="hover:text-purple-700 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Other Pages */}
        <div>
          <h3 className="text-lg font-bold mb-4">OTHER PAGES</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Job Vacancy</a></li>
            <li><a href="#">Charity Program</a></li>
            <li><a href="#">Privacy & Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT INFO</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <HiOutlineLocationMarker className="text-purple-700 text-xl mt-1" />
              <span>Jl. Raya Mas Ubud No. 86, Gianyar, Bali, Indonesia – 80225</span>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlinePhone className="text-purple-700 text-xl" />
              <span>+62 361 234 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlineMail className="text-purple-700 text-xl" />
              <span>contact@domain.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-400 text-xs sm:text-sm">
        HR Consultant Website - Powered by <a href="#" className="text-purple-700">Yunify Digital</a>. <br />
        Copyright © 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
