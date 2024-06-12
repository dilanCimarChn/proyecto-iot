import React, { useState } from 'react';
import './deslizadorunico.css';

const DeslizadorUnico = () => {
  const [valorUnico, setValorUnico] = useState(0);

  const cambiarValorUnico = (e) => {
    setValorUnico(e.target.value);
  };

  return (
    <div className="contenedorDeslizador">
      <input
        type="range"
        min="0"
        max="100"
        value={valorUnico}
        className="deslizadorUnico"
        id="miDeslizadorUnico"
        onChange={cambiarValorUnico}
      />
      <label htmlFor="miDeslizadorUnico" className="etiquetaDeslizador">{`${valorUnico}%`}</label>
    </div>
  );
};

export default DeslizadorUnico;
