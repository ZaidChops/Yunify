import React, { useEffect } from "react";
import {
  Briefcase,
  CheckSquare,
  Clock,
  Users,
  Building,
  ShoppingCart,
  Megaphone,
  Shield,
  LayoutDashboard,
  Search,
  LineChart,
  Code,
  UserCheck,
  Headphones,
  Award,
  Edit3,
  Gift,
  Image,
  Handshake,
  Lock,
  UserCog,
  Users2,
  Package,
} from "lucide-react";
// import labour from "../assets/appDevimg.jpg";
import payroll from "../assets/Service-images/Payroll.jpg";
import permanentStaf from "../assets/Service-images/permanent-staffing.jpg";
import temporaryStaf from "../assets/Service-images/temporary-staffing.jpg";
import recruitmentSolution from "../assets/Service-images/recruitment-solutions.jpg";
import facilityManagement from "../assets/Service-images/facility-management.jpg";
import salesForce from "../assets/Service-images/sales-force-management.jpg";
import marketingSolution from "../assets/Service-images/marketing-solutions.jpg";
import compliance from "../assets/Service-images/compliance-management.jpg";
import webSolution from "../assets/webDevImg.jpg";
import digitalMarketing from "../assets/Service-images/digitalmark-solution.jpg";
import seo from "../assets/Service-images/seo-solutions.jpg";
import software from "../assets/Service-images/software-solution.jpeg";
import itRecruit from "../assets/Service-images/itrecuit-solution.jpg";
import bpo from "../assets/Service-images/bpo-hiring.jpg";
import corporateHiring from "../assets/Service-images/corporate-hiring.jpg";
import contentCreating from "../assets/Service-images/content-creating.jpg";
import influencer from "../assets/Service-images/influencer-marketing.jpg";
import visual from "../assets/Service-images/visual-merchandising.jpg";
import loyalty from "../assets/Service-images/loyalty-program.png";
import sas from "../assets/Service-images/saas-rogram.jpg";
import corporateGift from "../assets/Service-images/corporate-gifting.jpg";
import logoDesign from "../assets/Service-images/logo-design.jpg";
import labour from "../assets/Service-images/labour-contracts.jpg"
import security from "../assets/Service-images/security-services.jpg";
import whiteCollar from "../assets/Service-images/white-collar.jpg";
import blueCollar from "../assets/Service-images/blue-collar.jpg";
import b2b from "../assets/Service-images/B2B.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesPage = () => {

    useEffect(() => {
            AOS.init({duration: "1000"});
          },[])

  const services = [
    {
      name: "Payroll Management",
      image: payroll,
      icon: Briefcase,
      description:
        "Efficient and accurate payroll processing for your business.",
    },
    {
      name: "Permanent Staffing",
      image: permanentStaf,
      icon: Users,
      description:
        "Finding and placing long-term talent for your organization.",
    },
    {
      name: "Marketing Solutions",
      image: marketingSolution,
      icon: Megaphone,
      description:
        "Creative and effective marketing strategies to boost your brand.",
    },
    {
      name: "Facility Management",
      image: facilityManagement,
      icon: Building,
      description: "Managing your physical workspace efficiently.",
    },
    {
      name: "Temporary Staffing",
      image: temporaryStaf,
      icon: Clock,
      description:
        "Flexible staffing solutions for short-term and project-based needs.",
    },
    {
      name: "Recruitment Solutions",
      image: recruitmentSolution,
      icon: UserCheck,
      description:
        "Comprehensive recruitment strategies to find the best candidates.",
    },
    {
      name: "Sales Force Management",
      image: salesForce,
      icon: ShoppingCart,
      description: "Optimizing your sales team's performance and structure.",
    },
    {
      name: "Compliance Management",
      image: compliance,
      icon: Shield,
      description:
        "Ensuring your business adheres to all relevant regulations.",
    },
    {
      name: "Website Solutions",
      image: webSolution,
      icon: LayoutDashboard,
      description: "Designing and developing professional, modern websites.",
    },
    {
      name: "Digital Marketing Solutions",
      image: digitalMarketing,
      icon: LineChart,
      description: "Full-suite digital marketing services for online growth.",
    },
    {
      name: "SEO Solutions",
      image: seo,
      icon: Search,
      description: "Improving your website's visibility on search engines.",
    },
    {
      name: "Software Solutions",
      image: software,
      icon: Code,
      description:
        "Custom software development to meet your specific requirements.",
    },
    {
      name: "IT Recruitment",
      image: itRecruit,
      icon: UserCog,
      description:
        "Specialized recruitment for information technology professionals.",
    },
    {
      name: "BPO Hiring",
      image: bpo,
      icon: Headphones,
      description: "Staffing solutions for Business Process Outsourcing needs.",
    },
    {
      name: "Corporate Hiring",
      image: corporateHiring,
      icon: Users2,
      description: "Sourcing and placing candidates for corporate positions.",
    },
    {
      name: "Content Creating",
      image: contentCreating,
      icon: Edit3,
      description: "Engaging and high-quality content creation services.",
    },
    {
      name: "Influencer Marketing",
      image: influencer,
      icon: Award,
      description: "Leveraging influencers to promote your brand.",
    },
    {
      name: "Visual Merchandising",
      image: visual,
      icon: Image,
      description: "Optimizing product presentation to drive sales.",
    },
    {
      name: "Loyalty Program",
      image: loyalty,
      icon: Gift,
      description:
        "Developing programs to enhance customer loyalty and retention.",
    },
    {
      name: "SaaS Program (360)",
      image: sas,
      icon: Package,
      description: "Comprehensive Software as a Service solutions.",
    },
    {
      name: "Corporate Gifting",
      image: corporateGift,
      icon: Gift,
      description:
        "Thoughtful corporate gifting solutions for clients and employees.",
    },
    {
      name: "LOGO Designing",
      image: logoDesign,
      icon: Edit3,
      description: "Creative and impactful logo design services.",
    },
    {
      name: "Labour Contracts",
      image: labour,
      icon: Handshake,
      description: "Managing and structuring labour contracts effectively.",
    },
    {
      name: "Security Services",
      image: security,
      icon: Lock,
      description: "Providing reliable security solutions for your business.",
    },
    {
      name: "White Collar Hiring",
      image: whiteCollar,
      icon: UserCheck,
      description:
        "Recruitment services for professional and managerial roles.",
    },
    {
      name: "Blue Collar Hiring",
      image: blueCollar,
      icon: Users,
      description: "Staffing solutions for skilled and unskilled labor roles.",
    },
    {
      name: "End-To-End B2B & B2C Business Solutions",
      image: b2b,
      icon: CheckSquare,
      description: "Comprehensive solutions for B2B and B2C business needs.",
    },
  ];

  return (
    <div className=" bg-[#f4f7fd]">
      <div
        className="relative w-full h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://evobizhtml.websitelayout.net/img/banner/banner-04.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center px-8 md:px-20">
          <h1 data-aos="fade-up-right" className="text-3xl md:text-4xl font-bold text-white mb-4 mt-10">
            Help Us to match Your Role in Companies.
          </h1>
          <p data-aos="fade-up-right" className="text-white text-lg mb-4 md:text-2xl max-w-2xl">
            Our Comprehensive Services.
          </p>
        </div>
      </div>
      <h1 data-aos="zoom-in-up" className="text-3xl md:text-4xl font-bold text-purple-700 text-center pt-12">
        Services
      </h1>
      <div className="py-12 px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
            data-aos="zoom-in-up"
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className=" flex flex-row">
                  <IconComponent
                    className=" mr-2 text-purple-600"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl text-gray-800 font-semibold mb-2">
                    {service.name}
                  </h3>
                </span>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
