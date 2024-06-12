import React, { useState } from "react";
import "./sensorLuz.css";
import Deslizador from "./deslizador/deslizador";

export const SensorLuz = ({ nombreSensor }) => {
  const [estaActivado, setEstaActivado] = useState(false);

  const cambiarEstado = () => {
    setEstaActivado(!estaActivado);
  };

  return (
    <div className="contSensorLuz">
      <h2 className="nombreSensor">{nombreSensor}</h2>
      <label className="interruptor">
        <input
          type="checkbox"
          checked={estaActivado}
          onChange={cambiarEstado}
        />
        <span className="deslizador redondo">
          <input
            type="checkbox"
            checked={estaActivado}
            onChange={cambiarEstado}
          />
        </span>
      </label>
      <div className="contDeslizador">
        <Deslizador />  
      </div>
    </div>
  );
};
