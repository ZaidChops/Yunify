import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
import logo01 from '../../assets/yunify-white.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Clients', to: '/clients' },
    { name: 'Contact Us', to: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/70 backdrop-blur-md shadow-md text-black' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={!scrolled ? logo01 : logo}
            className="h-12"
            alt="Yunify Logo"
          />
          <h1
            className={`text-2xl font-bold ${
              scrolled ? 'text-purple-600' : 'text-white'
            }`}
          >
            Yunify
          </h1>
        </Link>

        {/* Center NavLinks */}
        <div className="hidden md:flex items-center space-x-8 text-base font-medium absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${
                  scrolled ? 'text-gray-700 text-lg' : 'text-white text-lg'
                } hover:text-purple-600 transition ${
                  isActive ? 'text-lg font-semibold text-purple-600' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className=" px-3 py-2 rounded-md text-md font-medium hover:bg-purple-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className=" px-3 py-2 rounded-md text-md font-medium hover:bg-purple-600 hover:text-white transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md text-black text-base px-6 py-4 space-y-4 shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-purple-600"
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-purple-600"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-purple-600"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
