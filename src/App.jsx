import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import ClientsPage from './pages/ClientsPage';
import ContactUsPage from './pages/ContactUsPage';
import './index.css'; 
import Register from './pages/Register';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </MainLayout>
      <ToastContainer/>
    </Router>
  );
}

export default App;
