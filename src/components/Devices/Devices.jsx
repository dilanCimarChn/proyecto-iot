// src/components/Devices.jsx
import React, { useState } from 'react';
import './Devices.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const Devices = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Alarma de Movimiento', state: true },
    { id: 2, name: 'Alarma de Gas', state: false },
  ]);

  const toggleDevice = (id) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, state: !device.state } : device
      )
    );
  };

  return (
    <div className="devices">
      {devices.map((device) => (
        <div key={device.id} className="device">
          <div className="device-content">
            <h2>{device.name}</h2>
            <ToggleSwitch
              isOn={device.state}
              handleToggle={() => toggleDevice(device.id)}
            />
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Devices;
