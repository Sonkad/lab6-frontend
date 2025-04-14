import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Navbar />
      <div className="body-container">
        <Sidebar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
