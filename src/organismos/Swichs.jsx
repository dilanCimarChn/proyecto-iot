import React from 'react'
import DeviceCard from '../componentes/DeviceCard'; // Asegúrate de que esta ruta sea correcta
import televisorIcon from '../assets/televisor-icon.jpg'; 
import parlantesIcon from '../assets/parlantes-icon.jpg';
import socketIcon from '../assets/socket-icon.jpg';
import './Swichs.css'; // Ruta correcta para el archivo CSS

export const Swichs = () => {
  return (
    <div>
          <div className="App">
      <div className="devices-container">
        <DeviceCard
          icon={televisorIcon}
          title="Televisor"
          subtitle="Active for 3 hours"
          switchLabel="Switch 1"
          switchOn={false}
        />
        <DeviceCard
          icon={parlantesIcon}
          title="Parlantes"
          subtitle="Active for 3 hours"
          switchLabel="Switch 2"
          switchOn={true}
        />
        <DeviceCard
          icon={socketIcon}
          title="Socket"
          subtitle="Active for 3 hours"
          switchLabel="Switch 3"
          switchOn={true}
        />
      </div>
    </div>


    </div>
  )
}







  