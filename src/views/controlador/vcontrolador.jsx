// src/components/MainLayout.jsx
import React from 'react';
import Navbar from '../../components/nav/navbar';
import Devices from '../../components/Devices/Devices';
import NewDevices from '../../components/NewDevices/NewDevices';
// Al inicio de tu archivo MainLayout.jsx
import './vcontrolador.css';

export const MainLayout = () => {
    return (
        <div className="main-layout">
            <Navbar/>
            <div className="content">
                <Devices />
                <NewDevices />
                {/* Puedes agregar aquí más componentes si es necesario */}
            </div>
        </div>
    );
};
