import React, { useEffect } from 'react';
import img1 from "../assets/Service-images/our-mission.jpeg"
import img2 from "../assets/Service-images/our-value.jpg"
import img3 from "../assets/Service-images/blue-collar.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUsPage = () => {

  useEffect(() => {
          AOS.init({duration: "1000"});
        },[])

  return (
    <div className='w-full bg-[#f4f7fd]'>
      <div
        className="relative w-full h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://evobizhtml.websitelayout.net/img/banner/banner-04.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center px-8 md:px-20">
          <h1 data-aos="fade-up-right" className="text-4xl md:text-5xl font-bold text-white mb-4 mt-10">
            About Yunify
          </h1>
        </div>
      </div>
      {/* <h1 className="text-3xl font-semibold text-purple-700">About Yunify</h1> */}
      <div className=' w-full flex items-center justify-center'>
        <span className=' w-3/4'>
          <h1 data-aos="zoom-in-up" className=' mt-16 text-3xl text-center font-bold text-purple-700'>We are committed with our services. We are offering <br /> great services for candidates.</h1>
      <p data-aos="zoom-in-up" className="mt-8 mb-5 text-center  text-xl">
        Our leading staffing firm commitment is to be offering the best recruitment solutions for both IT and Non-IT industries in India. We cater to various verticals like Automobile, Engineering, Retail,
        FMCG, consumer Durables, Chemicals, Power, Steel, Oil & Gas, Pharmaceutical, Telecom,
        Process & Infrastructure, Turnkey Projects, Real Estate, BFSI, NBFC, Construction,
        Telecommunications, BPO Project (International & Domestic) , Sales Force Outsourcing and
        Information Technology.
      </p>
        </span>
      </div>
      {/* More content about the company */}
      <div className="max-w-7xl mx-auto px-20 py-16 grid md:grid-cols-2 gap-10">
      {/* Image - Watch */}
      <div data-aos="fade-up-right" className='mx-10'>
        <img src={img1} alt="Watch Closeup" className="rounded-md shadow-md" />
      </div>

      {/* Our Products */}
      <div className="mx-10 flex flex-col justify-center text-center md:text-left">
        <h2 data-aos="fade-up-left" className="text-xl font-semibold tracking-widest mb-2 text-purple-700">OUR MISSION</h2>
        <p data-aos="fade-up-left" className="text-gray-700">
          At Yunify HR, our mission is to Yunify human potential with technology. We believe that great businesses start with great people — and our platform exists to empower HR teams to focus on what truly matters: building an engaged and productive workforce.
        </p>
        <span data-aos="fade-up-left" className="mt-4 text-2xl">⌚</span>
      </div>

      {/* Our Mission */}
      <div className="mx-10 flex flex-col justify-center text-center md:text-left order-last md:order-none">
        <h2 data-aos="fade-up-right" className="text-xl font-semibold tracking-widest mb-2 text-purple-700">OUR VALUES</h2>
        <p data-aos="fade-up-right" className="text-gray-700">
          Integrity. Innovation. Inclusion. These are the principles that guide every decision we make. Yunify HR is built not just to meet today’s HR needs — but to scale with your tomorrow.
        </p>
        <span data-aos="fade-up-right" className="mt-4 text-2xl">🌍</span>
      </div>

      {/* Image - Couple on rooftop */}
      <div data-aos="fade-up-left" className='mx-10'>
        <img src={img2} alt="Couple on rooftop" className="rounded-md shadow-md" />
      </div>

      {/* Image - City Handshot */}
      <div data-aos="fade-up-right" className='mx-10'>
        <img src={img3} alt="City and Watch" className="rounded-md shadow-md" />
      </div>

      {/* Our Socials */}
      <div className="mx-10 flex flex-col justify-center text-center md:text-left">
        <h2 data-aos="fade-up-left" className="text-xl font-semibold tracking-widest mb-2 ">OUR IMPACT</h2>
        <p data-aos="fade-up-left" className="text-gray-700">
          We’re more than a tool — we’re a trusted HR partner to startups, scale-ups, and enterprise-level teams across India. With 500+ HR professionals using Yunify HR daily, we’re building a stronger, smarter future of work.
          
        </p>
        <span data-aos="fade-up-left" className="mt-4 text-2xl">📱</span>
      </div>
    </div>
    </div>
  );
};

export default AboutUsPage;
