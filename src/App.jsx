import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/nav/navbar";
import { SensorLuz } from "./components/sensorLuz/sensorLuz";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <Navbar/> */}
        <SensorLuz
          nombreSensor={"Sensor LED"}
          descripcion={"intencidad de luz"}
        />
      </div>
    </>
  );
}

export default App;
