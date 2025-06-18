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
import elasticRun from "../assets/client-images/elasticrun.png";
import rasoiQueen from "../assets/client-images/rasaiQueen.png";
import dharmeja from "../assets/client-images/dharmeja.jpg";
import carShringar from "../assets/client-images/carShringar.png";
import inkGraph from "../assets/client-images/inkGraph.png";
import anaxee from "../assets/client-images/anaxee.jpg";
import imast from "../assets/client-images/imast.jpg";
import tejas from "../assets/client-images/tejas.jpg";
import instaConnect from "../assets/client-images/instaConnect.png";
import novarsis from "../assets/client-images/novarsis-tech.jpg";
import arihant from "../assets/client-images/arihantcapital.png";
import vardhman from "../assets/client-images/vardhman.png";
import agrawal from "../assets/client-images/agrawal.png";
import mrAutomotiEv from "../assets/client-images/mr_automotiev.jpg";
import eureka from "../assets/client-images/Eureka-Forbes.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClientsPage = () => {
  const clients = [
    { name: "Amazon", src: amazon, alt: "Amazon" },
    { name: "Flipkart", src: flipcart, alt: "Flipkart" },
    { name: "Myntra", src: myntra, alt: "Myntra" },
    { name: "Meesho", src: mesho, alt: "Meesho" },
    { name: "L&T Micro Finance", src: lnt, alt: "L&T Micro Financeeus" },
    { name: "Axis Securities", src: axis, alt: "Axis Securities" },
    { name: "ICICI LOMBARD", src: icici, alt: "ICICI LOMBARD" },
    { name: "D-Mart", src: dmart, alt: "D-Mart" },
    { name: "Club Mahindra", src: club, alt: "Club Mahindra" },
    { name: "Xtrim Global", src: xtrim, alt: "Xtrim Global" },
    { name: "Elastic Run", src: elasticRun, alt: "Elastic Run" },
    { name: "Rasoi Queen", src: rasoiQueen, alt: "Rasoi Queen" },
    { name: "Dhameja Masala", src: dharmeja, alt: "Dhameja Masala" },
    { name: "Car Shringar", src: carShringar, alt: "Car Shringar" },
    { name: "Ink Graph Technologies", src: inkGraph, alt: "Ink Graph Technologies" },
    { name: "Anaxee Digital Runner", src: anaxee, alt: "Anaxee Digital Runner" },
    { name: "IMAST Operation", src: imast, alt: "IMAST Operation" },
    { name: "Tejas Masale", src: tejas, alt: "Tejas Masale" },
    { name: "Insta Connect", src: instaConnect, alt: "Insta Connect" },
    { name: "Novarsis Tech Technologies", src: novarsis, alt: "Novarsis Tech Technologies" },
    { name: "Arihant Capital", src: arihant, alt: "Arihant Capital" },
    { name: "Vardhman Traders", src: vardhman, alt: "Vardhman Traders" },
    { name: "Agrawal Spices", src: agrawal, alt: "Agrawal Spices" },
    { name: "Mr. AutomotiEV", src: mrAutomotiEv, alt: "Mr. AutomotiEV" },
    { name: "Eureka Forbes", src: eureka, alt: "Eureka Forbes" },
  ];

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
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center  px-8 md:px-20">
          <h1 data-aos="fade-up-right" className="text-4xl md:text-5xl font-bold text-white mb-4 mt-10">
            Meet our clients
          </h1>
          {/* <p className="text-white text-lg mb-4 md:text-2xl max-w-2xl">
            Our Comprehensive Services.
          </p> */}
        </div>
      </div>
      <h1 data-aos="zoom-in-up" className="my-10 text-2xl text-center font-semibold text-purple-700">
        Our Clients
      </h1>
      {/* <p className="mt-2">A few of our valued client details are as follows:</p> */}
      <div className="pt-4 pb-20 px-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        {clients.map((logo, index) => (
          <div
          data-aos="zoom-in-up"
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
      {/* Client descriptions and logos will go here */}
    </div>
  );
};

export default ClientsPage;
