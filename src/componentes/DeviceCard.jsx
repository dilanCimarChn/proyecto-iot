import React from 'react';
import './DeviceCard.css'; // Asegúrate de que esta ruta sea correcta

const DeviceCard = ({ icon, title, subtitle, switchLabel, switchOn }) => {
  return (
    <div className="device-card">
      <div className="device-header">
        <div className="icon-placeholder">
          <img src={icon} alt={`${title} Icon`} />
        </div>
        <div className="switch">
          <input type="checkbox" id={`${title}-switch`} className="switch-input" defaultChecked={switchOn} />
          <label htmlFor={`${title}-switch`} className="switch-label"></label>
        </div>
      </div>
      <div className="device-body">
        <div className="device-info">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="device-switch">
          <p>{switchLabel}</p>
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;
