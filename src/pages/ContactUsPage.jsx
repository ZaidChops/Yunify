import React, { useEffect } from "react";
import { IoIosMail } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";

const ContactUsPage = () => {

  useEffect(() => {
            AOS.init({duration: "1000"});
          },[])

  return (
    <div className="bg-[#f4f7fd]">
      <div
        className="relative w-full h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://evobizhtml.websitelayout.net/img/banner/banner-04.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center px-8 md:px-20">
          <h1 data-aos="fade-up-right" className="text-4xl md:text-5xl font-bold text-white ">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="min-h-auto bg-blue-50 flex flex-col lg:flex-row p-6 lg:p-16 gap-8">
        {/* Form Section */}
        <div className="flex-1 p-6 rounded-lg shadow-lg">
          <h2 data-aos="fade-up-right" className="text-3xl font-bold mb-6 text-gray-900">
            Write Us Something
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div data-aos="fade-up-right">
                <label className="block text-sm font-medium">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name here"
                  className="w-full p-3 rounded border"
                />
              </div>
              <div data-aos="fade-up-right">
                <label className="block text-sm font-medium">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email here"
                  className="w-full p-3 rounded border"
                />
              </div>
              <div data-aos="fade-up-right">
                <label className="block text-sm font-medium">
                  Your Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your subject here"
                  className="w-full p-3 rounded border"
                />
              </div>
              <div data-aos="fade-up-right">
                <label className="block text-sm font-medium">
                  Contact Number
                </label>
                <input
                  type="tel"
                  placeholder="Your phone here"
                  className="w-full p-3 rounded border"
                />
              </div>
            </div>
            <div data-aos="fade-up-right">
              <label className="block text-sm font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="3"
                placeholder="Tell us a few words"
                className="w-full p-3 rounded border"
              />
            </div>
            <button
            data-aos="fade-up-right"
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded mt-4"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full lg:w-1/3 bg-purple-700 text-white p-6 rounded-lg shadow-md">
          <p data-aos="fade-up-left" className="uppercase tracking-wide text-yellow-400 text-md font-semibold mb-2">
            Contact
          </p>
          <h3 data-aos="fade-up-left" className="text-2xl font-bold mb-6">Our Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div data-aos="fade-up-left" className="p-2 bg-gray-600 rounded">
                <IoIosMail />
              </div>
              <div>
                <h4 data-aos="fade-up-left" className="font-bold">Send E-Mail</h4>
                <p data-aos="fade-up-left">info@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div data-aos="fade-up-left" className="p-2 bg-gray-600 rounded">
                <FaPhoneVolume />
              </div>
              <div>
                <h4 data-aos="fade-up-left" className="font-bold">Call Anytime</h4>
                <p data-aos="fade-up-left">+91 205-658-1823</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div data-aos="fade-up-left" className="p-2 bg-gray-600 rounded">
                <FaLocationDot />
              </div>
              <div>
                <h4 data-aos="fade-up-left" className="font-bold">Locations</h4>
                <p data-aos="fade-up-left">66 Guild Street 512B, Great North Town.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
