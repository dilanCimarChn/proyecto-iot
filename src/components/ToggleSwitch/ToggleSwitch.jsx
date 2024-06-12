// src/components/ToggleSwitch.jsx
import React, { useState, useEffect } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  const [switchId, setSwitchId] = useState(null);

  useEffect(() => {
    // Generar ID único una vez cuando el componente se monta
    const uniqueId = `react-switch-${Math.random()}`;
    setSwitchId(uniqueId);
  }, []);

  return (
    <div className="switch-container">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={switchId} // Usar el ID generado
        type="checkbox"
      />
      <label
        className="switch-label"
        htmlFor={switchId} // Usar el mismo ID
      >
        <span className={`switch-button`} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
