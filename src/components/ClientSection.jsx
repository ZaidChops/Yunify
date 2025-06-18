import React, { useEffect } from "react";
import axis from "../assets/Axis.png";
import amazon from "../assets/amazon.png";
import flipcart from "../assets/flipkart-logo.png";
import myntra from "../assets/myntra.png";
import mesho from "../assets/mesho.jpg";
import lnt from "../assets/lnt.png";
import icici from "../assets/icici-lam.png";
import dmart from "../assets/dmart.png";
import club from "../assets/club.png";
import xtrim from "../assets/xtrim.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const clientLogos = [
  { src: amazon, alt: "Amazon" },
  { src: flipcart, alt: "Flipkart" },
  { src: myntra, alt: "Myntra" },
  { src: mesho, alt: "Meesho" },
  { src: lnt, alt: "L&T Micro Financeeus" },
  { src: axis, alt: "Axis Securities" },
  { src: icici, alt: "ICICI LOMBARD" },
  { src: dmart, alt: "D-Mart" },
  { src: club, alt: "Club Mahindra" },
  { src: xtrim, alt: "Xtrim Global" },
];

const ClientSection = () => {

  useEffect(() => {
        AOS.init({duration: "1000"});
      },[])

  return (
    <section className="py-10 bg-[#f4f7fd] text-center px-6 md:px-20">
      <h2 data-aos="zoom-in-up" className="text-3xl font-semibold text-center text-purple-700 mb-4">
        Trusted By Leading Companies
      </h2>
      <p data-aos="zoom-in-up" className=" text-gray-800 text-lg text-center max-w-2xl mx-auto mb-14">
        We are proud to have partnered with a diverse range of clients,
        including:
      </p>

      <div data-aos="zoom-in-up" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-4 flex items-center justify-center w-36 h-24 
                 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-10 object-contain"
            />
          </div>
        ))}
      </div>

      <div data-aos="zoom-in-up" className="text-center mt-16">
        <a
          href="/clients"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-block"
        >
          Meet Our Clients
        </a>
      </div>
    </section>
  );
};

export default ClientSection;
