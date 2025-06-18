import React, { useEffect, useState } from "react";
import {
  Users,
  Laptop,
  FileText,
  BarChart3,
  Code,
  Building,
  BriefcaseBusiness,
  Megaphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import teamImage from "../assets/team-img.jpg";
import dealImage from "../assets/hand-img.jpg";
import ServiceSlider from "../components/ServiceSlider";
import ClientSection from "../components/ClientSection";
import TestimonialSection from "../components/TestimonialSection";
import { TypeAnimation } from "react-type-animation";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {

  const heroImageUrl =
    "https://www.ft.com/partnercontent/ricoh/img/2025/1/hero.jpg";

  const keyServices = [
    {
      name: "Recruitment Solutions",
      icon: Users,
      description: "Finding the right talent to drive your business forward.",
    },
    {
      name: "IT Solutions",
      icon: Laptop,
      description:
        "Modern IT infrastructure and support for optimal performance.",
    },
    {
      name: "Payroll Management",
      icon: FileText,
      description: "Accurate and efficient payroll processing services.",
    },
    {
      name: "Digital Marketing",
      icon: BarChart3,
      description: "Boosting your online presence and customer engagement.",
    },
    {
      name: "Software Solutions",
      icon: Code,
      description: "Custom software development to meet unique needs.",
    },
    {
      name: "Corporate Hiring",
      icon: Building,
      description: "Specialized hiring solutions for corporate roles.",
    },
  ];

  const clientHighlights = [
    "ICICI Lombard",
    "Meesho",
    "Amazon",
    "Flipkart",
    "L&T Micro Finance",
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({duration: "1000"});
  },[])

  return (
    <div className=" w-full bg-white text-gray-800">
      {/* Hero Section */}
        <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://evobizhtml.websitelayout.net/img/banner/banner-04.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center px-8 md:px-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-20">
            Yunify :
          </h1>
          <TypeAnimation
            sequence={[
              "Your Partner in HR & IT Excellence",
              2000,
              "",
              1000,
              "We Build HR & Tech Solutions",
              2000,
              "",
              1000,
              "Trusted by Professionals Worldwide",
              2000,
              "",
              1000,
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
          />
          <p className="text-white text-lg mb-4 md:text-2xl max-w-2xl">
            Comprehensive solutions to empower your career growth.
          </p>
          <a
            data-aos="zoom-in-up"
            href="#service"
            className="scroll-smooth bg-purple-600 hover:bg-purple-700 text-white font-semibold mt-10 py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Who We Are Section */}
        <section className="bg-[#f4f7fd] py-16 px-4 md:px-20">
        {/* <div data-aos="zoom-in-up" > */}
          <h2 data-aos="zoom-in-up" className="text-3xl font-semibold text-center text-purple-700 mb-8">
          About Yunify
        </h2>
        {/* </div> */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side Image + Badge */}
          <div className="relative w-full md:w-1/2">
            <img
              data-aos="fade-up-right"
              src={teamImage}
              alt="Business Meeting"
              className="rounded-xl w-full shadow-lg"
            />
            <div data-aos="fade-up-right" className="absolute bottom-[-20px] left-[-20px] bg-purple-700 text-white px-6 py-4 rounded-lg shadow-lg">
              <p className="text-sm">Trusted By</p>
              <p className="text-3xl font-bold ">12K</p>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 data-aos="fade-up-left" className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              The essential steps for career success
            </h2>
            <p data-aos="fade-up-left" className="text-gray-600 text-lg">
              Our leading staffing firm commitment is to be offering the best
              recruitment solutions for both IT and Non-IT industries in India.
              We cater to various verticals like Automobile, Engineering,
              Retail, FMCG, Consumer Durables, Chemicals, Power, Steel, Oil &
              Gas, Pharmaceutical, Telecom, Process & Infrastructure, Turnkey
              Projects, Real Estate, BFSI, NBFC, Construction,
              Telecommunications, BPO Project (International & Domestic), Sales
              Force Outsourcing and Information Technology.
            </p>

            <div className="w-full flex flex-row justify-between">
              <div className=" flex flex-col">
                <div data-aos="fade-up-left" className="flex items-center space-x-4 mb-6">
                  <BriefcaseBusiness className="text-purple-600" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">
                      Business Innovations
                    </h4>
                    <p className="text-sm text-yellow-500">Best working</p>
                  </div>
                </div>
                <div data-aos="fade-up-left" className="flex items-center space-x-4">
                  <Megaphone className="text-purple-600" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">
                      Marketing Solution
                    </h4>
                    <p className="text-sm text-yellow-500">Best working</p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up-left" className="mr-16">
                <img
                  src={dealImage}
                  alt="Handshake"
                  className="w-56 h-36 rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div >
        <ServiceSlider />
      </div>

      {/* Clint secton */}
      <div >
        <ClientSection />
      </div>
      {/* </div> */}

      {/* Testimonials Section */}
      <div>
        <TestimonialSection />
      </div>

      {/* Call To Action Section */}
      <section className="py-12 px-6 md:px-20 text-center bg-[#f4f7fd]">
        <h2 data-aos="zoom-in-up" className="text-3xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p data-aos="zoom-in-up" className="mb-6">
          Let's collaborate and create solutions that drive success.
        </p>
        <div data-aos="zoom-in-up">
          <Link
          to="/contact"
          className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
