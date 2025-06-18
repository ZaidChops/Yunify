// src/components/ServiceSlider.jsx
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import webDev from "../assets/webDevImg.jpg"
import appDev from "../assets/appDevimg.jpg"
import digitalMarketing from "../assets/digitalMarketingImg.jpg"
import uiux from "../assets/uiuxImg.jpg"
import hrimg from "../assets/hrImg.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: "Web Development",
    desc: "We build scalable and modern web applications tailored to your business.",
    image: webDev,
  },
  {
    title: "App Development",
    desc: "Custom mobile applications for Android and iOS platforms.",
    image: appDev,
  },
  {
    title: "Digital Marketing",
    desc: "Boost your brand visibility with targeted digital marketing strategies.",
    image: digitalMarketing,
  },
  {
    title: "UI/UX Design",
    desc: "Crafting visually stunning and user-friendly designs.",
    image: uiux,
  },
  {
    title: "HR Outsourcing",
    desc: "Complete HR solutions including hiring, payroll, and compliance.",
    image: hrimg,
  },
];

const ServiceSlider = () => {

  useEffect(() => {
      AOS.init({duration: "1000"});
    },[])

  return (
    <section id='service' className=" scroll-smooth py-16 px-6 md:px-20 bg-[#f4f7fd]">
      <div className="text-center mb-10">
        <p data-aos="zoom-in-up" className=" text-yellow-500 uppercase font-semibold tracking-wide">Best Services</p>
        <h2 data-aos="zoom-in-up" className="text-3xl md:text-4xl font-bold text-purple-700">Services We Serve to You</h2>
      </div>

      <Swiper
        data-aos="zoom-in-up"
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <img
                src={service.image}
                alt={service.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-700 mb-2">{service.title}</h3>
                <p className=" text-gray-600 text-sm">{service.desc}</p>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div data-aos="zoom-in-up" className="text-center mt-10">
            <a
              href="/services"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              View All Services
            </a>
          </div>
    </section>
  );
};

export default ServiceSlider;
