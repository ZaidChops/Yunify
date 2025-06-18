import React, { useEffect, useState } from "react";
import bgWall from "../assets/bgWall.jpg";
import meetingImg from "../assets/meeting-img.PNG";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: "Aline Faucheux",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: "⭐⭐⭐⭐⭐",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a feugiat purus. Duis turpis nunc aliquam id nunc acc, dictum nisi.",
  },
  {
    name: "David Watson",
    role: "Client",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: "⭐⭐⭐",
    message:
      "Curabitur vehicula tincidunt sapien velacc. Donec diam augue consequat sit amet metus accumsan massa.",
  },
  {
    name: "Sophie Turner",
    role: "Partner",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: "⭐⭐⭐⭐",
    message:
      "Duis mollis ligula pretium consequat aliquet nibh purus fermentum consequatmi.",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  useEffect(() => {
          AOS.init({duration: "1000"});
        },[])

  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgWall})` }}
    >
      <div className=" w-full min-h-screen bg-black bg-opacity-60 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 md:flex items-center justify-around w-full">
        {/* Left: Testimonial */}
        <div className="md:w-1/2 text-white ml-10 p-8 rounded-lg shadow-lg">
        <h1 data-aos="fade-up-right" className="text-3xl font-semibold text-center text-yellow-400 mb-12">Testimonials</h1>
          <FaQuoteLeft data-aos="fade-up-right" className="text-4xl text-yellow-400 mb-4" />
          <p data-aos="fade-up-right" className="text-lg md:text-xl leading-relaxed">{testimonial.message}</p>

          <div className="flex items-center gap-4 mt-6">
            <img
            data-aos="fade-up-right"
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div>
              <h4 data-aos="fade-up-right" className="text-lg font-semibold">{testimonial.name}</h4>
              <p data-aos="fade-up-right" className="text-sm text-gray-300">{testimonial.role}</p>
              <p data-aos="fade-up-right" >{testimonial.rating}</p>
            </div>
          </div>

          {/* Dots */}
          <div data-aos="fade-up-right" className="flex gap 2 mt-4">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div data-aos="fade-up-left" className="md:w-1/3 p-6  ">
          <img
            src={meetingImg}
            alt="Meeting"
            className="rounded-lg shadow-xl w-full object-cover"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
