import React, { useState } from 'react';
import './navbar.css';
import { AiTwotoneCalendar, AiOutlineSetting, AiOutlineQuestionCircle, AiFillProduct } from "react-icons/ai";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Dashboard'); // Estado para la pestaña activa

  return (
    <div className="sidebar">
        <div className="logo-container">
            <img src="logoemi.png" alt="Logo" className="logo" />
            <h2>SOLINGIOT</h2>
        </div>
      <button 
        className={`sidebar-button ${activeTab === 'Dashboard' ? 'active' : ''}`}
        onClick={() => setActiveTab('Dashboard')}
      >
        <AiFillProduct className="icon" />
        Dashboard
      </button>
      <button 
        className={`sidebar-button ${activeTab === 'Actividad Reciente' ? 'active' : ''}`}
        onClick={() => setActiveTab('Actividad Reciente')}
      >
        <AiTwotoneCalendar className="icon" />
        Actividad Reciente
      </button>
      <button 
        className={`sidebar-button ${activeTab === 'Soporte' ? 'active' : ''}`}
        onClick={() => setActiveTab('Soporte')}
      >
        <AiOutlineQuestionCircle className="icon" />
        Soporte
      </button>
      <button 
        className={`sidebar-button ${activeTab === 'Configuraciones' ? 'active' : ''}`}
        onClick={() => setActiveTab('Configuraciones')}
      >
        <AiOutlineSetting className="icon" />
        Configuraciones
      </button>
    </div>
  );
};

export default Navbar;
